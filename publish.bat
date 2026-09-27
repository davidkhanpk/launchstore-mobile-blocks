@echo off
setlocal enabledelayedexpansion

:: ---------------------------------------------------------------------------
:: launchstore-mobile-blocks publish script (task 2.7)
::
:: Mirrors launchstore-shared's publish.bat: bump version, clean+build dist/,
:: commit, tag, push, then focused-install the new tag in every consumer —
:: IN LOCKSTEP (all consumers move to the same tag).
::
:: Consumers (3):
::   ../launchstore-mobile        (Expo app — native resolver)
::   ../launchstore-frontend      (dashboard canvas — react-native-web alias)
::   ..                           (platform backend — AI block-schema registry)
::
:: EXTRA vs shared-puck: a native-dep diff check between tags — new runtime
:: dependencies in this package may need a BINARY release (EAS Build), not
:: just OTA; the script warns loudly when that's the case.
::
:: Usage:
::   publish.bat              (patch bump)
::   publish.bat minor|major
::   publish.bat --no-push    (stage locally only)
:: ---------------------------------------------------------------------------

set "BUMP_TYPE=patch"
set "SHOULD_PUSH=1"

for %%a in (%*) do (
    if "%%a"=="major"     set "BUMP_TYPE=major"
    if "%%a"=="minor"     set "BUMP_TYPE=minor"
    if "%%a"=="--no-push" set "SHOULD_PUSH=0"
)

set "ROOT_DIR=%~dp0"
cd /d "%ROOT_DIR%"
for %%P in ("%ROOT_DIR%..") do set "PARENT_DIR=%%~fP"

echo.
echo ============================================================
echo   mobile-blocks publish ^| bump: %BUMP_TYPE%
echo ============================================================
echo.

:: ---- Step 1: Bump version -------------------------------------------
for /f "tokens=*" %%i in ('node -e "var p=require('./package.json');var v=p.version.split('.').map(Number);if(process.argv[1]==='major')v[0]++;else if(process.argv[1]==='minor')v[1]++;else v[2]++;var nv=v.join('.');p.version=nv;require('fs').writeFileSync('package.json',JSON.stringify(p,null,2)+'\n');console.log(nv);" %BUMP_TYPE%') do set "NEW_VERSION=%%i"
if !errorlevel! neq 0 goto :fail
echo [1/7] version: v%NEW_VERSION%
echo.

:: ---- Step 2: clean + build ------------------------------------------
echo [2/7] building dist/ ...
call npm run clean
call npm run build
if !errorlevel! neq 0 (
    echo [FAIL] build failed
    exit /b 1
)
call npm run test:contract
if !errorlevel! neq 0 (
    echo [FAIL] token contract test failed — refusing to publish
    exit /b 1
)
echo.

:: ---- Step 3/4/5: commit, tag, push ----------------------------------
git add -A
git commit -m "chore: release v%NEW_VERSION%"
if !errorlevel! neq 0 echo        [INFO] nothing new to commit, continuing.
git tag -a v%NEW_VERSION% -m "Release v%NEW_VERSION%"
if !errorlevel! neq 0 (
    echo [FAIL] git tag failed
    exit /b 1
)
if "%SHOULD_PUSH%"=="1" (
    for /f "tokens=*" %%b in ('git rev-parse --abbrev-ref HEAD') do set "BRANCH=%%b"
    git push origin %BRANCH%
    git push origin v%NEW_VERSION%
)

:: ---- Step 6: native-dep diff check ----------------------------------
:: New runtime deps vs the previous tag can mean native modules = binary
:: release, not just OTA. Pure styling/JS changes ship via eas update.
echo [6/7] dependency diff vs previous tag ...
for /f "tokens=*" %%p in ('git describe --abbrev^=0 v%NEW_VERSION%^~1 2^>nul') do set "PREV_TAG=%%p"
if defined PREV_TAG (
    for /f "tokens=*" %%d in ('node -e "const{execSync}=require('child_process');try{const a=JSON.parse(execSync('git show %PREV_TAG%:package.json'));const b=require('./package.json');const dep=a.dependencies||{};const now=b.dependencies||{};const added=Object.keys(now).filter(k=>!dep[k]);if(added.length){console.log('NEW-DEPS:'+added.join(','))}}catch(e){}"') do set "DEP_CHECK=%%d"
    if defined DEP_CHECK (
        echo.
        echo   *** WARNING: %DEP_CHECK% ***
        echo   New runtime dependencies since %PREV_TAG% — if any carry native
        echo   modules this release needs EAS Build + store submission,
        echo   NOT just eas update.
        echo.
    ) else (
        echo        JS-only release — ships via eas update.
    )
) else (
    echo        first tagged release.
)
echo.

:: ---- Step 7: focused install in every consumer (LOCKSTEP) -----------
set "SPEC=@launchstore/mobile-blocks@github:davidkhanpk/launchstore-mobile-blocks#v%NEW_VERSION%"
set "HAD_FAIL=0"

for %%C in ("launchstore-mobile" "launchstore-frontend") do (
    echo        installing in %%~C ...
    pushd "%PARENT_DIR%\%%~C" >nul
    if errorlevel 1 (
        echo        [FAIL] %%~C not found
        set "HAD_FAIL=1"
    ) else (
        call npm install %SPEC%
        if !errorlevel! neq 0 (
            echo        [FAIL] npm install failed in %%~C
            set "HAD_FAIL=1"
        ) else (
            echo        [OK]   %%~C
        )
        popd >nul
    )
)

echo        installing in platform backend ...
pushd "%PARENT_DIR%" >nul
call npm install %SPEC% --legacy-peer-deps
if !errorlevel! neq 0 (
    echo        [FAIL] backend install failed
    set "HAD_FAIL=1"
) else (
    echo        [OK]   backend
)
popd >nul
echo.

if !HAD_FAIL! equ 1 (
    echo [WARN] A consumer failed — ALL consumers must sit on v%NEW_VERSION%
    echo        before shipping. Fix and re-run publish.bat ^(next bump retries^).
)

echo ============================================================
if "%SHOULD_PUSH%"=="1" (
    echo   Done - v%NEW_VERSION% published
    echo   Next steps:
    echo     frontend: build-and-push\frontend.bat
    echo     backend:  your platform deploy
    echo     app:      npx eas update --channel production
) else (
    echo   Staged locally - NOT pushed
)
echo ============================================================
goto :end

:fail
echo [FAIL] publish aborted.
exit /b 1

:end
exit /b 0
