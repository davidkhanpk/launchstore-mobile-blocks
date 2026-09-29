#!/usr/bin/env node
/**
 * Dependency diff check (publish.bat step 6): compares runtime dependencies
 * between the previous tag and the current package.json. New deps with native
 * modules need a binary release, not just OTA.
 */
const { execSync } = require("child_process");
const path = require("path");

const prevTag = process.argv[2];
if (!prevTag) {
  console.log("no previous tag — first release");
  process.exit(0);
}

try {
  const prevRaw = execSync(`git show ${prevTag}:package.json`, { encoding: "utf-8" });
  const prev = JSON.parse(prevRaw);
  const current = require(path.join(__dirname, "..", "package.json"));

  const prevDeps = prev.dependencies || {};
  const currentDeps = current.dependencies || {};

  const added = Object.keys(currentDeps).filter((k) => !prevDeps[k]);
  const removed = Object.keys(prevDeps).filter((k) => !currentDeps[k]);

  if (added.length > 0) {
    console.log(`NEW-DEPS: ${added.join(", ")}`);
    console.log("  WARNING: new runtime dependencies — if any carry native modules,");
    console.log("  this release needs EAS Build + store submission, NOT just eas update.");
  } else if (removed.length > 0) {
    console.log(`REMOVED: ${removed.join(", ")}`);
    console.log("  JS-only change — ships via eas update.");
  } else {
    console.log("JS-only release — ships via eas update.");
  }
} catch (e) {
  console.log("could not diff (tag may not have package.json)");
}
