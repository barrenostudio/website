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
        "heading-1": "var(--heading-1-font-size)",
        "heading-1-halyard": "var(--heading-1-halyard-font-size)",
        "heading-3": "var(--heading-3-font-size)",
        "heading-3-halyard": "var(--heading-3-halyard-font-size)",
        "highlight": "var(--highlight-font-size)",
        "paragraph": "var(--paragraph-font-size)",
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
