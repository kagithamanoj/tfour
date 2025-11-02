import React, { useState } from "react";

const Contact = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <section
      className="
        min-h-screen flex items-center 
        py-20 
        bg-[var(--color-bg)] 
        text-[var(--color-text)] 
        transition-colors duration-300
      "
    >
      <div
        className="
          max-w-6xl mx-auto px-4 grid md:grid-cols-2 
          gap-12 items-center w-full
        "
      >
        {/* Left info section */}
        <div>
          <h1
            className="
              text-5xl font-extrabold mb-6
              text-[var(--color-primary)]
            "
          >
            Let's Build Together
          </h1>
          <p className="text-xl mb-6 max-w-lg opacity-85">
            Have a project in mind or a question? Fill out the form or connect with us directly—one of our team members will reach out within 24 hours.
          </p>
          <div className="card bg-[var(--color-card)] border border-[var(--color-border)] mb-7">
            <h3 className="text-xl font-bold mb-1 text-[var(--color-primary)]">Contact Details</h3>
            <p className="text-base opacity-85">
              Email:{" "}
              <a
                href="mailto:hello@TfourTechnologies.com"
                className="text-[var(--color-primary)] font-semibold focus:underline transition"
              >
                hello@TfourTechnologies.com
              </a>
            </p>
            <p className="text-base opacity-85 mt-1">
              Phone:{" "}
              <span className="text-[var(--color-primary)] font-semibold">
                +1 (945) 998-5494
              </span>
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
            <div
              className="
                p-8 rounded-lg text-center shadow-lg
                bg-[var(--color-primary)]/10 
                border border-[var(--color-primary)]
                text-[var(--color-text)]
                transition
              "
            >
              Thank you! Your message was received.<br />
              Our team will contact you within 24 business hours.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              name="contact"
              method="POST"
              data-netlify="true"
              className="
                p-8 rounded-lg shadow-lg flex flex-col gap-6
                bg-[var(--color-card)]
                border border-[var(--color-border)]
                transition-colors duration-300
              "
            >
              <input type="hidden" name="form-name" value="contact" />

              <div>
                <label
                  htmlFor="name"
                  className="
                    block mb-2 text-sm font-semibold opacity-90
                  "
                >
                  Full Name <span className="text-[var(--color-primary)]">*</span>
                </label>
                <input
                  required
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="
                    w-full p-3 border rounded
                    bg-[var(--color-bg)]
                    border-[var(--color-border)]
                    text-[var(--color-text)]
                    focus:outline-none
                    focus:ring-2 focus:ring-[var(--color-primary)]
                    transition
                  "
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-semibold opacity-90"
                >
                  Work Email <span className="text-[var(--color-primary)]">*</span>
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="
                    w-full p-3 border rounded
                    bg-[var(--color-bg)]
                    border-[var(--color-border)]
                    text-[var(--color-text)]
                    focus:outline-none
                    focus:ring-2 focus:ring-[var(--color-primary)]
                    transition
                  "
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-semibold opacity-90"
                >
                  Phone <span className="text-[var(--color-primary)]">*</span>
                </label>
                <input
                  required
                  type="tel"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="
                    w-full p-3 border rounded
                    bg-[var(--color-bg)]
                    border-[var(--color-border)]
                    text-[var(--color-text)]
                    focus:outline-none
                    focus:ring-2 focus:ring-[var(--color-primary)]
                    transition
                  "
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block mb-2 text-sm font-semibold opacity-90"
                >
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  className="
                    w-full p-3 border rounded
                    bg-[var(--color-bg)]
                    border-[var(--color-border)]
                    text-[var(--color-text)]
                    focus:outline-none
                    focus:ring-2 focus:ring-[var(--color-primary)]
                    transition
                  "
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-semibold opacity-90"
                >
                  How can we help? <span className="text-[var(--color-primary)]">*</span>
                </label>
                <textarea
                  required
                  name="message"
                  id="message"
                  rows={4}
                  className="
                    w-full p-3 border rounded
                    bg-[var(--color-bg)]
                    border-[var(--color-border)]
                    text-[var(--color-text)]
                    focus:outline-none
                    focus:ring-2 focus:ring-[var(--color-primary)]
                    transition
                  "
                />
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
