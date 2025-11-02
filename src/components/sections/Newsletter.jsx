import React, { useState } from "react";
import { FaRobot } from "react-icons/fa";

const accentClass = "text-[var(--color-primary)]";

const Newsletter = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email?.value;
    if (!email) return;

    setStatus("loading");

    try {
      const res = await fetch("https://formspree.io/f/mnnoldld", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      className="
        max-w-md mx-auto text-center px-6 py-8
        rounded-2xl border-[1.5px] border-[var(--color-border)]/70
        shadow-2xl
        bg-[var(--color-card)]/85
        backdrop-blur-lg
        relative overflow-hidden
        transition-colors duration-300
        group
      "
    >
      <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-tr from-[var(--color-primary)]/30 to-[var(--color-accent)]/15 blur-2xl opacity-60 pointer-events-none" />
      <div className="flex items-center justify-center mb-2">
        <span className="rounded-full bg-[var(--color-primary)]/15 p-2.5 shadow group-hover:bg-[var(--color-primary)]/25 transition">
          <FaRobot className="text-2xl text-[var(--color-primary)] group-hover:text-[var(--color-secondary)] transition" />
        </span>
      </div>
      <h2 className={`text-2xl md:text-3xl font-extrabold mb-2 ${accentClass} tracking-tight`}>
        Unlock the Future: GenAI Insider
      </h2>
      <p className="mb-5 opacity-85 text-[var(--color-text)] text-base md:text-lg">
        Weekly discoveries, game-changing AI launches, and strategies shaping tomorrow’s tech landscape. <br /> For founders, innovators & decision-makers.
      </p>
      {status === "success" ? (
        <div className="py-5 text-lg font-semibold text-[var(--color-primary)]">
          Thank you! You’re subscribed 🚀
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            required
            placeholder="Your business email"
            className="
              mb-2.5 p-2.5 border rounded-xl w-full
              border-[var(--color-border)]
              bg-[var(--color-bg)]/80
              text-[var(--color-text)]
              placeholder:opacity-70
              focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]
              focus:border-[var(--color-primary)]
              transition
              text-base
            "
            disabled={status === "loading"}
          />
          <button
            type="submit"
            className={`
              w-full py-2.5 text-base rounded-xl font-bold
              bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]
              text-white shadow hover:scale-105 hover:shadow-xl focus:outline-none transition
              mt-1
              ${status === "loading" ? "opacity-70 cursor-not-allowed" : ""}
            `}
            disabled={status === "loading"}
          >
            {status === "loading" ? "Subscribing..." : "Get Early Access"}
          </button>
          {status === "error" && (
            <div className="mt-3 text-sm text-red-500 font-semibold">
              Something went wrong. Please try again.
            </div>
          )}
        </form>
      )}
    </div>
  );
};

export default Newsletter;
