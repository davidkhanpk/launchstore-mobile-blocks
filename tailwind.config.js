/**
 * Reference Tailwind config for consuming apps (variant B / NativeWind engine).
 * The mobile app and the dashboard's react-native-web canvas both extend this:
 * token values are CSS variables so runtime swaps (themeVars()) re-resolve
 * without remounting. Colors map 1:1 to the platform Theme token contract.
 */
module.exports = {
  content: [], // consuming app sets its own globs (app/**, node_modules/@launchstore/mobile-blocks/**)
  theme: {
    extend: {
      colors: {
        "ls-brand-primary": "var(--ls-brand-primary)",
        "ls-brand-secondary": "var(--ls-brand-secondary)",
        "ls-brand-accent": "var(--ls-brand-accent)",
        "ls-text-primary": "var(--ls-text-primary)",
        "ls-text-inverse": "var(--ls-text-inverse)",
        "ls-ui-background": "var(--ls-ui-background)",
        "ls-ui-surface": "var(--ls-ui-surface)",
        "ls-btn-primary-bg": "var(--ls-btn-primary-bg)",
        "ls-btn-primary-fg": "var(--ls-btn-primary-fg)",
        "ls-btn-secondary-bg": "var(--ls-btn-secondary-bg)",
        "ls-btn-secondary-fg": "var(--ls-btn-secondary-fg)",
        "ls-btn-danger-bg": "var(--ls-btn-danger-bg)",
        "ls-btn-danger-fg": "var(--ls-btn-danger-fg)",
      },
      borderRadius: {
        "ls-sm": "var(--ls-radius-sm)",
        "ls-md": "var(--ls-radius-md)",
        "ls-lg": "var(--ls-radius-lg)",
      },
    },
  },
  plugins: [],
};
