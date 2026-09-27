import type { ScreenDoc } from "../types";
/**
 * Built-in fallback screen layouts — what the app renders before a merchant
 * designs anything (config bundle screens take precedence; these are the
 * last-resort rung of the fallback chain: bundle → cache → defaults).
 * Task 3.4's derivation service replaces these with per-store derived
 * layouts once the merchant enables mobile.
 */
export declare const DEFAULT_SCREENS: Record<string, ScreenDoc>;
