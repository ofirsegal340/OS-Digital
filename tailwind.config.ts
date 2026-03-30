import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#00D4FF",
          purple: "#B44FFF",
        },
        "light-blue": "#A8E6FF",
        "bg-dark": "#0A0E1A",
        "bg-card": "#0F1329",
        "bg-card-hover": "#141937",
        whatsapp: "#25D366",
        "text-muted": "rgba(255,255,255,0.55)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-cta":
          "linear-gradient(135deg, #00D4FF 0%, #B44FFF 100%)",
        "gradient-cta-hover":
          "linear-gradient(135deg, #00E5FF 0%, #C66FFF 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
