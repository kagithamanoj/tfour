import React, { useState } from "react";

const Partner = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    organization: "",
    contact: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Simulated submission
  };

  return (
    <section
      className="
        min-h-screen 
        flex flex-col justify-center 
        py-20 
        bg-[var(--color-bg)] 
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
              text-[var(--color-primary)]
            "
          >
            Discover the power <br />
            of meaningful partnership
          </h1>
          <p
            className="
              text-xl mb-8 
              opacity-85
            "
          >
            Join our network of forward-thinking organizations. <br />
            Share your vision, explore new opportunities, and let’s build
            lasting impact together.
          </p>
          <p className="text-base opacity-70">
            Fill out the partnership interest form and our team will reach out
            for a personalized conversation.
          </p>
        </div>

        {/* Right: Form */}
        <div
          className="
            flex-1 
            p-8 rounded-lg shadow-2xl max-w-lg w-full 
            bg-[var(--color-card)]
            border border-[var(--color-border)]
            transition-colors duration-300
          "
        >
          {submitted ? (
            <div
              className="
                p-8 rounded-lg text-center shadow 
                bg-[var(--color-primary)] text-white
              "
            >
              Thank you! We’ve received your partnership request and will
              contact you soon.
            </div>
          ) : (
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              {/* Organization */}
              <div>
                <label
                  className="
                    block text-sm font-semibold mb-1
                    opacity-90
                  "
                >
                  Organization Name
                  <span className="text-[var(--color-primary)]">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="organization"
                  className="
                    w-full p-3 rounded border
                    bg-[var(--color-bg)]
                    border-[var(--color-border)]
                    text-[var(--color-text)]
                    focus:outline-none
                    focus:ring-2 focus:ring-[var(--color-primary)]
                    transition
                  "
                  value={formData.organization}
                  onChange={handleChange}
                />
              </div>

              {/* Contact Person */}
              <div>
                <label className="block text-sm font-semibold mb-1 opacity-90">
                  Contact Person
                  <span className="text-[var(--color-primary)]">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="contact"
                  className="
                    w-full p-3 rounded border
                    bg-[var(--color-bg)]
                    border-[var(--color-border)]
                    text-[var(--color-text)]
                    focus:outline-none
                    focus:ring-2 focus:ring-[var(--color-primary)]
                    transition
                  "
                  value={formData.contact}
                  onChange={handleChange}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold mb-1 opacity-90">
                  Email
                  <span className="text-[var(--color-primary)]">*</span>
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  className="
                    w-full p-3 rounded border
                    bg-[var(--color-bg)]
                    border-[var(--color-border)]
                    text-[var(--color-text)]
                    focus:outline-none
                    focus:ring-2 focus:ring-[var(--color-primary)]
                    transition
                  "
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold mb-1 opacity-90">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="
                    w-full p-3 rounded border
                    bg-[var(--color-bg)]
                    border-[var(--color-border)]
                    text-[var(--color-text)]
                    focus:outline-none
                    focus:ring-2 focus:ring-[var(--color-primary)]
                    transition
                  "
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold mb-1 opacity-90">
                  How can we collaborate?
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Tell us your idea or partnership goal..."
                  className="
                    w-full p-3 rounded border
                    bg-[var(--color-bg)]
                    border-[var(--color-border)]
                    text-[var(--color-text)]
                    focus:outline-none
                    focus:ring-2 focus:ring-[var(--color-primary)]
                    transition
                  "
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="btn-primary w-full mt-2 text-lg py-3"
              >
                Request Partnership
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Partner;
