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
      },
    },
  },
  plugins: [],
};
