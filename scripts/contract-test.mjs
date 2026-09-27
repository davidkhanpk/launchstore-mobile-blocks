/**
 * Task 1.3 — the token contract test (docs/store-apps doc 8, Epic 1).
 * `fixtures/platform-default-theme.json` is exported FROM the platform's real
 * Theme data; this test proves both theming engines can consume the platform's
 * actual payload — catching schema drift before it ships. Re-export the fixture
 * whenever the platform's default theme changes:
 *   (see scripts note in README — Prisma query on themes.globalSettings)
 *
 * Also runs the same assertions against SAMPLE_THEME_TOKENS to guard hand edits.
 */
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
// Import the theme modules directly — dist/index re-exports the RN block
// components, which can't execute under plain Node (no RN runtime).
import { resolveThemeTokens, SAMPLE_THEME_TOKENS } from "../dist/theme/tokens.js";
import { buildRestyleTheme } from "../dist/theme/restyle-theme.js";
import { themeVars } from "../dist/theme/nativewind-vars.js";

const here = dirname(fileURLToPath(import.meta.url));
const platformFixture = JSON.parse(
  readFileSync(join(here, "../fixtures/platform-default-theme.json"), "utf8"),
);

const HEX = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;

function assertContract(name, rawTokens) {
  const resolved = resolveThemeTokens(rawTokens);

  // Reference chains resolve when the namespace exists (sample has button;
  // legacy platform themes may not — engines must derive fallbacks instead).
  if (rawTokens.colors?.button?.primary?.background) {
    assert.match(
      resolved.colors.button.primary.background,
      HEX,
      `${name}: button.primary.background must resolve to a hex color`,
    );
  }
  assert.match(resolved.colors.brand.primary, HEX, `${name}: brand.primary must be hex`);
  assert.match(resolved.colors.text.inverse, HEX, `${name}: text.inverse must be hex`);

  // Restyle engine: every consumed key present, radii numeric
  const restyle = buildRestyleTheme(rawTokens);
  for (const key of [
    "brandPrimary",
    "textPrimary",
    "uiSurface",
    "buttonPrimaryBg",
    "buttonPrimaryFg",
    "buttonDangerBg",
  ]) {
    assert.ok(restyle.colors[key], `${name}: restyle colors.${key} missing`);
  }
  assert.ok(
    typeof restyle.borderRadii.md === "number" && restyle.borderRadii.md > 0,
    `${name}: borderRadii.md must parse to a positive number (platform ships "12" or "12px")`,
  );
  assert.ok(typeof restyle.spacing.md === "number" && restyle.spacing.md > 0, `${name}: spacing.md must parse`);

  // NativeWind engine: CSS vars present and resolved (no double-px, no token refs)
  const vars = themeVars(rawTokens);
  for (const key of [
    "--ls-brand-primary",
    "--ls-btn-primary-bg",
    "--ls-btn-primary-fg",
    "--ls-radius-md",
  ]) {
    assert.ok(vars[key], `${name}: themeVars ${key} missing`);
  }
  assert.match(vars["--ls-btn-primary-bg"], HEX, `${name}: --ls-btn-primary-bg must resolve to hex`);
  assert.doesNotMatch(vars["--ls-radius-md"], /px.*px/, `${name}: radius var must not double-suffix px`);
}

assertContract("platform-default-theme", platformFixture);
assertContract("sample-tokens", SAMPLE_THEME_TOKENS);

console.log("token contract: PASS (platform fixture + sample, both engines)");
