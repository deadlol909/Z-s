import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./context/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#050510",
        card: "rgba(255,255,255,0.06)",
        accent: "#5ef0ff",
        neon: "#8b5cf6"
      },
      backdropBlur: { xs: "2px" },
      boxShadow: {
        neon: "0 0 32px rgba(94,240,255,0.3)",
        glass: "0 8px 30px rgba(31,38,135,0.25)"
      },
      animation: {
        gradient: "gradient 15s ease infinite"
      },
      keyframes: {
        gradient: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        }
      }
    }
  },
  plugins: []
} satisfies Config;
