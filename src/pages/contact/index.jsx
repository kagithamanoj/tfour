import React, { useState } from "react";

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
    <section className="min-h-screen flex items-center py-20 bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Left info section */}
        <div>
          <h1 className="text-5xl font-extrabold mb-6 text-[var(--color-primary)]">Let's Build Together</h1>
          <p className="text-xl mb-6 max-w-lg opacity-85">
            Have a project in mind or a question? Fill out the form or connect with us directly—one of our team members will reach out within 24 hours.
          </p>
          <div className="card bg-[var(--color-card)] border border-[var(--color-border)] mb-7">
            <h3 className="text-xl font-bold mb-1 text-[var(--color-primary)]">Contact Details</h3>
            <p className="text-base opacity-85">
              Email:
              <a href="mailto:hello@TfourTechnologies.com" className="text-[var(--color-primary)] font-semibold focus:underline transition">
                hello@tfourtechnologies.com
              </a>
            </p>
            <p className="text-base opacity-85 mt-1">
              Phone: <span className="text-[var(--color-primary)] font-semibold">+1 (945) 998-5494</span>
            </p>
            <div className="text-xs opacity-60 mt-2">
              Corporate, privacy, and legal inquiries welcomed.
            </div>
            <div className="text-xs mt-1 opacity-60">
              Response guaranteed within 1 business day.
            </div>
          </div>
        </div>
        {/* Right form section */}
        <div>
          {success ? (
            <div className="p-8 rounded-lg text-center shadow-lg bg-[var(--color-primary)]/10 border border-[var(--color-primary)] text-[var(--color-text)] transition">
              Thank you! Your message was received.<br />
              Our team will contact you within 24 business hours.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 rounded-lg shadow-lg flex flex-col gap-6 bg-[var(--color-card)] border border-[var(--color-border)] transition-colors duration-300">
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 rounded p-3 text-center mb-3">{error}</div>
              )}
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-semibold opacity-90">
                  Full Name <span className="text-[var(--color-primary)]">*</span>
                </label>
                <input required name="name" id="name" autoComplete="name" className="w-full p-3 border rounded bg-[var(--color-bg)] border-[var(--color-border)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-semibold opacity-90">
                  Work Email <span className="text-[var(--color-primary)]">*</span>
                </label>
                <input required type="email" name="email" id="email" autoComplete="email" className="w-full p-3 border rounded bg-[var(--color-bg)] border-[var(--color-border)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition" />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-semibold opacity-90">
                  Phone <span className="text-[var(--color-primary)]">*</span>
                </label>
                <input required type="tel" name="phone" id="phone" autoComplete="tel" className="w-full p-3 border rounded bg-[var(--color-bg)] border-[var(--color-border)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition" />
              </div>
              <div>
                <label htmlFor="company" className="block mb-2 text-sm font-semibold opacity-90">
                  Company
                </label>
                <input type="text" name="company" id="company" autoComplete="organization" className="w-full p-3 border rounded bg-[var(--color-bg)] border-[var(--color-border)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-semibold opacity-90">
                  How can we help? <span className="text-[var(--color-primary)]">*</span>
                </label>
                <textarea required name="message" id="message" rows={4} className="w-full p-3 border rounded bg-[var(--color-bg)] border-[var(--color-border)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition" />
              </div>
              <button type="submit" className="btn-primary w-full py-3 text-lg">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
