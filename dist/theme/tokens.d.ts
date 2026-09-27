/**
 * The mobile-side mirror of the platform `Theme` entity's token payload
 * (themes.globalSettings.colors.tokens + typography + layout — see
 * src/store/store.service.ts getDefaultThemeData). This is the shape the
 * mobile-config bundle delivers (doc 3 §2); nothing here may know about
 * Restyle, NativeWind, or any theming engine — engines adapt to it.
 */
export interface TokenGroup {
    [token: string]: string;
}
/** colors.tokens as delivered by the platform — values may be hex or token refs. */
export interface RawColorTokens {
    brand: TokenGroup;
    text: TokenGroup;
    ui: TokenGroup;
    status: TokenGroup;
    /** Component namespaces — values are typically REFERENCES like "brand.primary". */
    button: Record<string, TokenGroup>;
    card: TokenGroup;
    badge: Record<string, TokenGroup>;
    scheme: Record<string, TokenGroup>;
}
export interface RawThemeTokens {
    colors: RawColorTokens;
    typography: {
        fontFamily: {
            heading: string;
            body: string;
        };
        fontSize: Record<string, string>;
        fontWeight: Record<string, string>;
    };
    layout: {
        borderRadius: Record<string, string>;
        spacing: Record<string, string>;
    };
}
/**
 * Resolve dotted references ("brand.primary") to literal values — the mobile
 * counterpart of the platform's ThemeTokenService.resolveToken. Cycles bail
 * out with the raw value.
 */
export declare function resolveThemeTokens(raw: RawThemeTokens): RawThemeTokens;
/** Fixture tokens for the spike / editor fixtures — shape-identical to a real bundle. */
export declare const SAMPLE_THEME_TOKENS: RawThemeTokens;
