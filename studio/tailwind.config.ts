import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#07080B", // base background, near-black
        navy: "#0B1120", // deep navy undertone, used in gradients
        surface: "#10131B", // raised panels / glass base
        line: "rgba(245, 246, 248, 0.08)", // hairline dividers
        ink: {
          DEFAULT: "#F3F4F6", // primary text, off-white
          muted: "#9AA1AE", // supporting text
          faint: "#5B6270", // tertiary / disabled text
        },
        accent: {
          DEFAULT: "#4E6BFF", // single primary accent — electric indigo-blue
          soft: "#8CA0FF",
          dim: "#28305C",
        },
      },
      fontFamily: {
        display: ["'Clash Display'", "'General Sans'", "system-ui", "sans-serif"],
        body: ["'General Sans'", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.25rem, 7vw, 7.5rem)", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 5vw, 4.75rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.75rem)", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
      },
      maxWidth: {
        content: "1240px",
        prose: "62ch",
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(78, 107, 255, 0.45)",
        "glow-sm": "0 0 32px -8px rgba(78, 107, 255, 0.35)",
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        "spin-slow-reverse": {
          to: { transform: "rotate(-360deg)" },
        },
        "drift-y": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "drift-y-sm": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-7px)" },
        },
        "tilt-y": {
          "0%, 100%": { transform: "rotateY(-14deg)" },
          "50%": { transform: "rotateY(14deg)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        "orbit": {
          from: { transform: "rotate(0deg) translateX(var(--orbit-r, 60px)) rotate(0deg)" },
          to: { transform: "rotate(360deg) translateX(var(--orbit-r, 60px)) rotate(-360deg)" },
        },
        "rise": {
          "0%": { transform: "scaleY(0.3)" },
          "50%": { transform: "scaleY(1)" },
          "100%": { transform: "scaleY(0.3)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 18s linear infinite",
        "spin-slower": "spin-slow-reverse 26s linear infinite",
        "drift-y": "drift-y 6s ease-in-out infinite",
        "drift-y-sm": "drift-y-sm 5s ease-in-out infinite",
        "tilt-y": "tilt-y 9s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3.4s ease-in-out infinite",
        "orbit-slow": "orbit 14s linear infinite",
        "orbit-slower": "orbit 22s linear infinite reverse",
        "rise": "rise 2.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
