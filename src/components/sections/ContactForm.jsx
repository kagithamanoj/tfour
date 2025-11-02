import React from "react";

const ContactForm = () => {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Contact Info Section */}
        <div>
          <h2 className="text-4xl font-extrabold mb-4 text-primary">
            Let's Build Together
          </h2>
          <p className="mb-6 text-lg opacity-80">
            Have a project in mind or just want to learn more? We’d love to hear
            from you. Fill out the form or send us an email.
          </p>

          <div className="card">
            <h3 className="text-xl font-bold mb-2">
              Direct Email
            </h3>
            <a
              href="mailto:reachus@Tfourtechnologies.com"
              className="text-primary text-lg hover:underline transition"
            >
              reachus@Tfourtechnologies.com
            </a>
            <p className="mt-4 text-sm opacity-70">
              We typically respond within 24 hours.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="card p-8 shadow-2xl">
          <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />

            {/* Name */}
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium opacity-90"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-input"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium opacity-90"
              >
                Work Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-input"
                required
              />
            </div>

            {/* Company */}
            <div className="mb-5">
              <label
                htmlFor="company"
                className="block mb-2 text-sm font-medium opacity-90"
              >
                Company
              </label>
              <input
                type="text"
                name="company"
                id="company"
                className="form-input"
              />
            </div>

            {/* Message */}
            <div className="mb-5">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium opacity-90"
              >
                How can we help?
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                className="form-input"
                required
              ></textarea>
            </div>

            {/* Submit */}
            <button type="submit" className="w-full btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
