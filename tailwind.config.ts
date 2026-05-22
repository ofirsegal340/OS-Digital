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
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Frank Ruhl Libre", "Georgia", "serif"],
      },
      animation: {
        marquee: "marquee 45s linear infinite",
        "marquee-reverse": "marquee-reverse 45s linear infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "aurora-drift": "aurora-drift 60s linear infinite",
        "scroll-cue": "scroll-cue 2.4s ease-in-out infinite",
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
        "aurora-drift": {
          "0%": { backgroundPosition: "0% 50%, 100% 50%" },
          "50%": { backgroundPosition: "100% 50%, 0% 50%" },
          "100%": { backgroundPosition: "0% 50%, 100% 50%" },
        },
        "scroll-cue": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.6" },
          "50%": { transform: "translateY(6px)", opacity: "1" },
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
