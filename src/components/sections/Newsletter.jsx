import React from "react";

// Accent color from your design system
const accentClass = "text-[var(--color-primary)]";

const Newsletter = () => (
  <div
    className="
      max-w-md mx-auto text-center px-8 py-12 rounded-2xl
      border-2 border-[var(--color-primary)]/20
      shadow-2xl
      bg-[var(--color-card)]/80
      backdrop-blur-lg
      transition-colors duration-300
    "
  >
    <h2 className={`text-3xl font-extrabold mb-2 ${accentClass}`}>
      Subscribe to Tfour Newsletter
    </h2>
    <p className="mb-5 opacity-80 text-[var(--color-text)] text-lg">
      Get AI breakthroughs, industry trends, and expert insights delivered to
      your inbox—no spam, just innovation.
    </p>
    <form>
      <input
        type="email"
        placeholder="Your email address"
        className="
          mb-4 p-3 border rounded w-full
          border-[var(--color-border)]
          bg-[var(--color-bg)]
          text-[var(--color-text)]
          focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]
          focus:border-[var(--color-primary)]
          transition
        "
      />
      <button
        type="submit"
        className="
          w-full py-3 text-lg rounded font-bold
          bg-[var(--color-primary)] text-[var(--color-bg)]
          shadow hover:brightness-110 transition
        "
      >
        Subscribe
      </button>
    </form>
  </div>
);

export default Newsletter;
