import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const LINE_HEIGHT = 1.5;
const lineHeight = (number: number) => number * LINE_HEIGHT;

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      fontSize: {
        h1: [
          "3.5rem",
          {
            fontWeight: "500",
            letterSpacing: "-0.01em",
            lineHeight: `${lineHeight(3.5)}rem`,
          },
        ],
        h2: [
          "3rem",
          {
            fontWeight: "500",
            letterSpacing: "-0.01em",
            lineHeight: `${lineHeight(3)}rem`,
          },
        ],
        h3: [
          "2.5rem",
          {
            fontWeight: "500",
            letterSpacing: "-0.01em",
            lineHeight: `${lineHeight(2.5)}rem`,
          },
        ],
        h4: [
          "2rem",
          {
            fontWeight: "500",
            letterSpacing: "-0.005em",
            lineHeight: `${lineHeight(2)}rem`,
          },
        ],
        h5: [
          "1.5rem",
          {
            fontWeight: "500",
            letterSpacing: "0em",
            lineHeight: `${lineHeight(1.5)}rem`,
          },
        ],
        h6: [
          "1.25rem",
          {
            fontWeight: "500",
            letterSpacing: "0em",
            lineHeight: `${lineHeight(1.25)}rem`,
          },
        ],
        "label-large": [
          "1.125rem",
          {
            fontWeight: "500",
            letterSpacing: "-0.015em",
            lineHeight: `${lineHeight(1.125)}rem`,
          },
        ],
        "label-medium": [
          "1rem",
          {
            fontWeight: "500",
            letterSpacing: "-0.011em",
            lineHeight: `${lineHeight(1)}rem`,
          },
        ],
        "label-small": [
          ".875rem",
          {
            fontWeight: "500",
            letterSpacing: "-0.006em",
            lineHeight: `${lineHeight(0.875)}rem`,
          },
        ],
        "label-x-large": [
          "1.5rem",
          {
            fontWeight: "500",
            letterSpacing: "-0.015em",
            lineHeight: `${lineHeight(1.5)}rem`,
          },
        ],
        "label-x-small": [
          ".75rem",
          {
            fontWeight: "500",
            letterSpacing: "0em",
            lineHeight: `${lineHeight(0.75)}rem`,
          },
        ],
        "paragraph-large": [
          "1.125rem",
          {
            fontWeight: "400",
            letterSpacing: "-0.015em",
            lineHeight: `${lineHeight(1.125)}rem`,
          },
        ],
        "paragraph-medium": [
          "1rem",
          {
            fontWeight: "400",
            letterSpacing: "-0.011em",
            lineHeight: `${lineHeight(1)}rem`,
          },
        ],
        "paragraph-small": [
          ".875rem",
          {
            fontWeight: "400",
            letterSpacing: "-0.006em",
            lineHeight: `${lineHeight(0.875)}rem`,
          },
        ],
        "paragraph-x-large": [
          "1.5rem",
          {
            fontWeight: "400",
            letterSpacing: "-0.015em",
            lineHeight: `${lineHeight(1.5)}rem`,
          },
        ],
        "paragraph-x-small": [
          ".75rem",
          {
            fontWeight: "400",
            letterSpacing: "0em",
            lineHeight: `${lineHeight(0.75)}rem`,
          },
        ],
        "subheading-2x-small": [
          ".6875rem",
          {
            fontWeight: "500",
            letterSpacing: "0.02em",
            lineHeight: `${lineHeight(0.6875)}rem`,
          },
        ],
        "subheading-medium": [
          "1rem",
          {
            fontWeight: "500",
            letterSpacing: "0.06em",
            lineHeight: `${lineHeight(1)}rem`,
          },
        ],
        "subheading-small": [
          ".875rem",
          {
            fontWeight: "500",
            letterSpacing: "0.06em",
            lineHeight: `${lineHeight(0.875)}rem`,
          },
        ],
        "subheading-x-small": [
          ".75rem",
          {
            fontWeight: "500",
            letterSpacing: "0.04em",
            lineHeight: `${lineHeight(0.75)}rem`,
          },
        ],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
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
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
