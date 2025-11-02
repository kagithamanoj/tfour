import React from "react";
import { Link } from "react-router-dom";
import Sparkle from "react-sparkle";

const Hero = () => (
  <section
    className="
      relative
      min-h-screen
      transition-colors
      duration-300
      bg-[var(--color-bg)]
      text-[var(--color-text)]
    "
  >
    {/* Optional texture overlay */}
    <div className="
      absolute inset-0 
      bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww%2Ew3%2Eorg%2Fsvg%22%3E%3Cg%20fill%3D%22%23cccccc%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M0%2040L40%200H20L0%2020zM40%2040V20L20%2040z%22/%3E%3C/g%3E%3C/svg%3E')]
      pointer-events-none
    "></div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
      {/* Sparkle-animated headline */}
      <div className="relative inline-block mb-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight relative z-10">
          Build What's Next with Generative AI
        </h1>
        {/* Sparkle animation (unobtrusive, premium style) */}
        <span className="pointer-events-none absolute inset-0 flex justify-center items-center z-20">
          <Sparkle
            color="white"
            count={22}
            minSize={8}
            maxSize={18}
            fadeOutSpeed={24}
            overflowPx={24}
            newSparkleOnFadeOut
            style={{ filter: "drop-shadow(0 0 8px #fff7)" }}
          />
        </span>
      </div>

      <p className="max-w-3xl mx-auto text-lg md:text-xl mb-8 opacity-80">
        We partner with businesses to build custom AI models, automate complex workflows, and unlock transformative growth.
      </p>

      {/* Latest Industry Announcements Section */}
      <div className="max-w-2xl mx-auto bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 mb-10 opacity-95 shadow-md">
        <h2 className="text-2xl font-bold mb-2 text-[var(--color-primary)]">
          Latest News: AI-Assisted Development at Tfour
        </h2>
        <p className="text-lg opacity-90 mb-2">
          Tfour is embracing the new frontier in app-building: AI-powered development, inspired by the latest innovations from Google I/O, Microsoft Build, and OpenAI.
        </p>
        <p className="text-md opacity-80">
          Soon, you'll find hands-on guides and community updates spotlighting how advanced AI models, copilots, and multimodal technologies are transforming our workflow. We're empowering users to build, debug, and deploy smarter and faster—making AI a true partner in every step of your project.
        </p>
      </div>

      <div className="flex justify-center space-x-4">
        <Link
          to="/solutions/ai-demos"
          className="
            inline-block
            px-7 py-3
            rounded-xl
            font-semibold
            text-lg
            shadow
            transition
            bg-[var(--color-primary)]
            text-white
            hover:bg-[var(--color-primary-hover)]
          "
        >
          Explore AI Demos
        </Link>
        <Link
          to="/contact"
          className="
            inline-block
            px-7 py-3
            rounded-xl
            font-semibold
            text-lg
            shadow
            transition
            bg-[var(--color-accent)]
            text-white
            hover:bg-[var(--color-primary)]
          "
        >
          Book a Consultation
        </Link>
      </div>
    </div>
  </section>
);

export default Hero;
