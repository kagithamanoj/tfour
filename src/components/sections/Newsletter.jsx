import React, { useState } from "react";
import { FaPaperPlane, FaEnvelopeOpenText, FaCheck } from "react-icons/fa";
import GlassCard from "../common/GlassCard";
import { motion } from "framer-motion";

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
    <div className="w-full px-4">
      <div className="max-w-3xl mx-auto relative">

        <GlassCard className="relative overflow-hidden py-10 px-6 md:px-12 text-center rounded-[2rem] border-white/10 shadow-2xl bg-white/5 backdrop-blur-xl">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="mb-4 p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 text-white shadow-lg"
            >
              <FaEnvelopeOpenText className="text-3xl md:text-4xl" />
            </motion.div>

            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3 tracking-tight">
              Unlock the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Future of AI</span>
            </h2>

            <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto mb-6 leading-relaxed">
              Join 10,000+ innovators receiving weekly insights on generative AI and automation.
            </p>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md bg-green-500/20 border border-green-500/30 text-green-300 px-6 py-3 rounded-xl flex items-center justify-center gap-3 font-medium"
              >
                <FaCheck className="text-lg" />
                <span>You're in! Welcome to the future.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your work email"
                  disabled={status === "loading"}
                  className="
                    flex-grow px-5 py-3 rounded-lg 
                    bg-white/5 border border-white/10 
                    text-white placeholder-gray-400 text-sm md:text-base
                    focus:outline-none focus:border-blue-400/50 focus:bg-white/10
                    transition-all duration-300
                  "
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="
                    px-6 py-3 rounded-lg 
                    bg-white text-blue-900 hover:bg-blue-50
                    font-bold text-sm tracking-wide
                    transition-all duration-300 
                    flex items-center justify-center gap-2 
                    disabled:opacity-70 shadow-lg hover:shadow-blue-500/25 hover:scale-105
                  "
                >
                  {status === "loading" ? "..." : "Subscribe"}
                </button>
              </form>
            )}

            <p className="mt-4 text-xs text-gray-500 flex items-center gap-2">
              <FaCheck className="text-blue-500" /> No spam. Unsubscribe anytime.
            </p>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default Newsletter;
