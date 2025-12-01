// tailwind.config.js
export default {
  darkMode: "class", // Enables class-based dark mode switching
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light Theme Colors
        primary: "#2563EB",      // Modern blue
        secondary: "#1E40AF",    // Deep accent blue
        accent: "#3B82F6",       // Lighter interactive blue
        dark: "#0F172A",         // Text / background slate dark
        light: "#F8FAFC",        // Soft light gray for background
        text: "#0F172A",         // Base text color

        // Dark Mode Variants
        // You can use them directly with dark: prefix
        "dark-primary": "#3B82F6",
        "dark-secondary": "#1E3A8A",
        "dark-accent": "#60A5FA",
        "dark-bg": "#0F172A",
        "dark-card": "#1E293B",
        "dark-text": "#F1F5F9",
        
        // Glassmorphism & Modern UI
        "glass-surface": "rgba(255, 255, 255, 0.1)",
        "glass-border": "rgba(255, 255, 255, 0.2)",
      },
      animation: {
        blob: "blob 7s infinite",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
