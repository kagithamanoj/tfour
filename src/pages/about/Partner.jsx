import React, { useState } from "react";
import GlassCard from "../../components/common/GlassCard";

const FORMSPREE = "https://formspree.io/f/mnnoldld";

const Partner = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    organization: "",
    contact: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(FORMSPREE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData }),
      });
      if (!response.ok) throw new Error("Failed to submit.");
      setSubmitted(true);
    } catch (err) {
      setError("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="
        min-h-screen 
        flex flex-col justify-center 
        py-20 
        text-[var(--color-text)]
        transition-colors duration-300
      "
    >
      <div
        className="
          max-w-6xl mx-auto px-4 py-4 
          flex flex-col md:flex-row gap-12 
          items-center justify-between
        "
      >
        {/* Left: Headline/Intro */}
        <div className="flex-1">
          <h1
            className="
              text-5xl md:text-6xl font-extrabold mb-8 leading-tight
              bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent
            "
          >
            Discover the power <br />
            of meaningful partnership
          </h1>
          <p
            className="
              text-xl mb-8 
              text-gray-300 leading-relaxed
            "
          >
            Join our network of forward-thinking organizations. <br />
            Share your vision, explore new opportunities, and let’s build
            lasting impact together.
          </p>
          <p className="text-base text-gray-400">
            Fill out the partnership interest form and our team will reach out
            for a personalized conversation.
          </p>
        </div>

        {/* Right: Form */}
        <GlassCard className="flex-1 p-8 max-w-lg w-full">
          {submitted ? (
            <div className="p-8 rounded-lg text-center bg-green-500/20 border border-green-500/20 text-green-400">
              <div className="text-3xl mb-2">✓</div>
              <div className="font-bold text-xl mb-2">Request Received!</div>
              <p>Thank you! We’ll be in touch soon.</p>
            </div>
          ) : (
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              {/* Organization */}
              <div>
                <label className="block text-sm font-bold mb-2 text-white">
                  Organization Name <span className="text-blue-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="organization"
                  className="w-full p-3 rounded-lg bg-black/20 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                  value={formData.organization}
                  onChange={handleChange}
                  disabled={loading}
                />
              </div>

              {/* Contact Person */}
              <div>
                <label className="block text-sm font-bold mb-2 text-white">
                  Contact Person <span className="text-blue-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="contact"
                  className="w-full p-3 rounded-lg bg-black/20 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                  value={formData.contact}
                  onChange={handleChange}
                  disabled={loading}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-bold mb-2 text-white">
                  Email <span className="text-blue-500">*</span>
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full p-3 rounded-lg bg-black/20 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={loading}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-bold mb-2 text-white">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full p-3 rounded-lg bg-black/20 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={loading}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-bold mb-2 text-white">
                  How can we collaborate?
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Tell us your idea or partnership goal..."
                  className="w-full p-3 rounded-lg bg-black/20 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={loading}
                />
              </div>

              {/* Error */}
              {error && (
                <div className="text-red-400 font-semibold text-sm py-2">
                  {error}
                </div>
              )}

              {/* Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Request Partnership"}
              </button>
            </form>
          )}
        </GlassCard>
      </div>
    </section>
  );
};

export default Partner;
