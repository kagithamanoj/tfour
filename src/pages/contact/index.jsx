import React, { useState } from "react";
import GlassCard from "../../components/common/GlassCard";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnnoldld"; // Replace with your Formspree endpoint

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const formData = new FormData(e.target);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        }
      });
      const result = await response.json();
      if (response.ok) {
        setSuccess(true);
      } else if (result?.errors) {
        setError(result.errors.map(err => err.message).join(" "));
      } else {
        setError("An error occurred. Please try again.");
      }
    } catch {
      setError("Submission failed. Please try again.");
    }
  };

  return (
    <section className="min-h-screen flex items-center py-20 text-[var(--color-text)]">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start w-full">
        {/* Left info section */}
        <div>
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Build Together
          </h1>
          <p className="text-xl mb-8 max-w-lg text-gray-300 leading-relaxed">
            Have a project in mind or a question? Fill out the form or connect with us directly—one of our team members will reach out within 24 hours.
          </p>
          <GlassCard className="p-8 mb-7">
            <h3 className="text-xl font-bold mb-4 text-blue-400">Contact Details</h3>
            <div className="space-y-3">
              <p className="text-base text-gray-300">
                <span className="block text-sm text-gray-500 mb-1">Email</span>
                <a href="mailto:hello@TfourTechnologies.com" className="text-white font-semibold hover:text-blue-400 transition">
                  hello@tfourtechnologies.com
                </a>
              </p>
              <p className="text-base text-gray-300">
                <span className="block text-sm text-gray-500 mb-1">Phone</span>
                <span className="text-white font-semibold">+1 (945) 998-5494</span>
              </p>
            </div>
            <div className="text-xs text-gray-500 mt-6 pt-4 border-t border-white/10">
              Corporate, privacy, and legal inquiries welcomed.<br />
              Response guaranteed within 1 business day.
            </div>
          </GlassCard>
        </div>
        {/* Right form section */}
        <div>
          {success ? (
            <GlassCard className="p-12 text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
              <p className="text-gray-300">
                Thank you for reaching out.<br />
                Our team will contact you within 24 business hours.
              </p>
            </GlassCard>
          ) : (
            <GlassCard className="p-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {error && (
                  <div className="bg-red-500/10 border border-red-500/50 text-red-400 rounded p-3 text-center text-sm">{error}</div>
                )}
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-semibold text-gray-300">
                    Full Name <span className="text-blue-400">*</span>
                  </label>
                  <input required name="name" id="name" autoComplete="name"
                    className="w-full p-3 rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-300">
                    Work Email <span className="text-blue-400">*</span>
                  </label>
                  <input required type="email" name="email" id="email" autoComplete="email"
                    className="w-full p-3 rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-semibold text-gray-300">
                    Phone <span className="text-blue-400">*</span>
                  </label>
                  <input required type="tel" name="phone" id="phone" autoComplete="tel"
                    className="w-full p-3 rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block mb-2 text-sm font-semibold text-gray-300">
                    Company
                  </label>
                  <input type="text" name="company" id="company" autoComplete="organization"
                    className="w-full p-3 rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-semibold text-gray-300">
                    How can we help? <span className="text-blue-400">*</span>
                  </label>
                  <textarea required name="message" id="message" rows={4}
                    className="w-full p-3 rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
                <button type="submit" className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 py-3 text-lg font-bold text-white shadow-lg transition hover:scale-[1.02] hover:shadow-blue-500/25">
                  Send Message
                </button>
              </form>
            </GlassCard>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
