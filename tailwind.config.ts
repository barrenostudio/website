module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-bg": "var(--black-bg)",
        "golden-hour-yellow": "var(--golden-hour-yellow)",
        "heritage-green": "var(--heritage-green)",
        "highlight-colour": "var(--highlight-colour)",
        "midnight-blue": "var(--midnight-blue)",
        "noche-black": "var(--noche-black)",
        "off-blanco": "var(--off-blanco)",
        "secondary-colour": "var(--secondary-colour)",
        "border": "hsl(var(--border))",
        "input": "hsl(var(--input))",
        "ring": "hsl(var(--ring))",
        "background": "hsl(var(--background))",
        "foreground": "hsl(var(--foreground))",
        "primary": {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        "secondary": {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        "destructive": {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        "muted": {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        "accent": {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        "popover": {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        "card": {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "body-base": "var(--body-base-font-family)",
        "body-strong": "var(--body-strong-font-family)",
        "heading-1": "var(--heading-1-font-family)",
        "heading-1-halyard": "var(--heading-1-halyard-font-family)",
        "heading-3": "var(--heading-3-font-family)",
        "heading-3-halyard": "var(--heading-3-halyard-font-family)",
        "highlight": "var(--highlight-font-family)",
        "paragraph": "var(--paragraph-font-family)",
        "sans": [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      fontSize: {
        "heading-1-sm": [
          "var(--heading-1-font-size-sm)", // Font size for small screens
          {
            lineHeight: "var(--heading-1-line-height-sm)", // Line height for small screens
            letterSpacing: "var(--heading-1-letter-spacing-sm)", // Letter spacing for small screens
          },
        ],
        "heading-1-md": [
          "var(--heading-1-font-size-md)",
          {
            lineHeight: "var(--heading-1-line-height-md)",
            letterSpacing: "var(--heading-1-letter-spacing-md)",
          },
        ],
        "heading-1": [
          "var(--heading-1-font-size)",
          {
            lineHeight: "var(--heading-1-line-height)",
            letterSpacing: "var(--heading-1-letter-spacing)",
          },
        ],
        "heading-1-halyard": [
          "var(--heading-1-halyard-font-size)",
          {
            lineHeight: "var(--heading-1-halyard-line-height)",
            letterSpacing: "var(--heading-1-halyard-letter-spacing)",
          },
        ],
        "heading-3-sm": [
          "var(--heading-3-font-size-sm)", // Font size for small screens
          {
            lineHeight: "var(--heading-3-line-height-sm)", // Line height for small screens
            letterSpacing: "var(--heading-3-letter-spacing-sm)", // Letter spacing for small screens
          },
        ],
        "heading-3-md": [
          "var(--heading-3-font-size-md)",
          {
            lineHeight: "var(--heading-3-line-height-md)",
            letterSpacing: "var(--heading-3-letter-spacing-md)",
          },
        ],
        "heading-3": [
          "var(--heading-3-font-size)",
          {
            lineHeight: "var(--heading-3-line-height)",
            letterSpacing: "var(--heading-3-letter-spacing)",
          },
        ],
        "paragraph-sm": [
          "var(--paragraph-font-size-sm)", // Font size for small screens
          {
            lineHeight: "var(--paragraph-line-height-sm)", // Line height for small screens
            letterSpacing: "var(--paragraph-letter-spacing-sm)", // Letter spacing for small screens
          },
        ],
        "paragraph-md": [
          "var(--paragraph-font-size-md)",
          {
            lineHeight: "var(--paragraph-line-height-md)",
            letterSpacing: "var(--paragraph-letter-spacing-md)",
          },
        ],
        "paragraph": [
          "var(--paragraph-font-size)",
          {
            lineHeight: "var(--paragraph-line-height)",
            letterSpacing: "var(--paragraph-letter-spacing)",
          },
        ],
        "heading-3-halyard": "var(--heading-3-halyard-font-size)",
        "highlight": "var(--highlight-font-size)",
      },
      letterSpacing: {
        "heading-1": "var(--heading-1-letter-spacing)",
        "heading-1-halyard": "var(--heading-1-halyard-letter-spacing)",
        "heading-3": "var(--heading-3-letter-spacing)",
        "heading-3-halyard": "var(--heading-3-halyard-letter-spacing)",
        "highlight": "var(--highlight-letter-spacing)",
        "paragraph": "var(--paragraph-letter-spacing)",
      },
      lineHeight: {
        "heading-1": "var(--heading-1-line-height)",
        "heading-1-halyard": "var(--heading-1-halyard-line-height)",
        "heading-3": "var(--heading-3-line-height)",
        "heading-3-halyard": "var(--heading-3-halyard-line-height)",
        "highlight": "var(--highlight-line-height)",
        "paragraph": "var(--paragraph-line-height)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "scroll": {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "scroll":
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
