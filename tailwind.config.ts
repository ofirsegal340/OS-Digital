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
          blue: "#3DBDF7",
          purple: "#7B6CF0",
        },
        "light-blue": "#BAE6FD",
        "bg-dark": "#080B14",
        "bg-card": "#0E1322",
        "bg-card-hover": "#161C30",
        whatsapp: "#25D366",
        "text-muted": "rgba(255,255,255,0.62)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Heebo", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "Heebo", "system-ui", "sans-serif"],
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
          "linear-gradient(135deg, #4FC3FF 0%, #8E7BFF 100%)",
        "gradient-cta-hover":
          "linear-gradient(135deg, #63CDFF 0%, #A18CFF 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
