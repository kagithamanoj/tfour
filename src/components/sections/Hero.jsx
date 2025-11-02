import React from "react";
import { Link } from "react-router-dom";
import Sparkle from "react-sparkle";

const Hero = () => (
  <section
    className="
      relative min-h-screen transition-colors duration-300
      flex items-center justify-center
      bg-[var(--color-bg)] text-[var(--color-text)]
    "
  >
    <div className="absolute inset-0 pointer-events-none">
      {/* Faint geometric overlay for subtle AI/futuristic vibe */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/5 to-transparent" />
      <div className="
        absolute inset-0 
        bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww%2Ew3%2Eorg%2Fsvg%22%3E%3Cg%20fill%3D%22%23cccccc%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M0%2040L40%200H20L0%2020zM40%2040V20L20%2040z%22/%3E%3C/g%3E%3C/svg%3E')]
      " />
    </div>

    <div className="relative z-10 text-center w-full">
      <div className="inline-block mb-6 relative">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight relative z-10">
          Next-Gen AI for Visionary Ideas
        </h1>
        <span className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <Sparkle
            color="#88aaff"
            count={18}
            minSize={8}
            maxSize={18}
            fadeOutSpeed={20}
            overflowPx={20}
            newSparkleOnFadeOut
            style={{ filter: "drop-shadow(0 0 8px #88aaff99)" }}
          />
        </span>
      </div>

      <p className="max-w-xl mx-auto text-lg md:text-xl mb-6 opacity-80">
        We build generative AI solutions to help you create, automate, and innovate — faster than ever.
      </p>
      
      <div className="flex justify-center space-x-4 mb-4">
        <Link
          to="/solutions/ai-demos"
          className="
            inline-block px-7 py-3 rounded-xl font-semibold text-lg shadow
            transition bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]
          "
        >
          Explore AI Demos
        </Link>
        <Link
          to="/contact"
          className="
            inline-block px-7 py-3 rounded-xl font-semibold text-lg shadow
            transition bg-black text-white hover:bg-[var(--color-primary)]
          "
        >
          Book a Consultation
        </Link>
      </div>

      {/* Subtle futuristic tagline */}
      <div className="mt-2 text-base text-[var(--color-primary)] font-medium opacity-70">
        Imagine More. Build Smarter. Lead with AI.
      </div>
    </div>
  </section>
);

export default Hero;
