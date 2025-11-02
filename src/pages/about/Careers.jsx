import React, { useState } from "react";

const openings = [
  {
    title: "Cloud DevOps Engineer",
    type: "Full-time · Remote",
    description:
      "Design and implement scalable Azure/AWS infrastructure, build automation pipelines, and support global clients. Strong scripting and CI/CD experience required.",
  },
  {
    title: "AI/ML Developer",
    type: "Full-time · Remote/Hybrid",
    description:
      "Develop and deploy advanced AI/ML models, work with NLP and cloud APIs, and deliver automation solutions to business partners.",
  },
  {
    title: "Frontend React Engineer",
    type: "Full-time · Remote",
    description:
      "Craft beautiful, performant UIs using React, Tailwind, and modern web tooling. Collaborate closely with design/product teams.",
  },
  {
    title: "Backend Node.js Engineer",
    type: "Full-time · Remote/Hybrid",
    description:
      "Build high-performance backend systems, APIs, and serverless functions using Node.js and modern cloud tools.",
  },
  {
    title: "Data Engineer",
    type: "Full-time · Remote",
    description:
      "Design reliable ETL pipelines, data lakes, and streaming solutions to drive analytics and business insights.",
  },
  {
    title: "AI Solutions Architect",
    type: "Consultant · Remote",
    description:
      "Shape AI strategies and architectures across projects, designing scalable and industry-compliant AI systems.",
  },
];

const departments = [
  "AI & Data Science",
  "Cloud & DevOps",
  "Frontend & Design",
  "Backend & Infrastructure",
  "Product & Software Engineering",
  "Research & Innovation",
  "Customer Success",
  "Sales & Marketing",
  "Learning & Development",
  "Corporate Operations",
  "HR & Talent",
];

const values = [
  {
    title: "Absolute Ownership",
    description:
      "We take full responsibility for outcomes and act as reliable partners for our clients and team.",
  },
  {
    title: "Teamwork",
    description:
      "Every win is collective. We move as a unit, bringing out the best in one another.",
  },
  {
    title: "Integrity",
    description:
      "We work to achieve, not just deliver — transparent, honest, and consistent in every commitment.",
  },
  {
    title: "Continuous Learning",
    description:
      "We stay curious, stay humble, and evolve constantly through shared knowledge and growth.",
  },
  {
    title: "Keep it Simple",
    description:
      "We thrive when solutions are elegant and processes effortless — simplicity drives our success.",
  },
];

const perks = [
  "Health & Family Insurance Plans",
  "Retirement Benefits (PF/NPS)",
  "Remote Work Flexibility",
  "Education & Certification Sponsorship",
  "Equal Opportunity & Inclusive Policy",
  "Learning Resources & Upskilling Support",
];

const testimonials = [
  {
    name: "Ananya Patel",
    role: "AI Developer",
    quote:
      "Tfour has given me the perfect balance between creativity and structure. Every idea is heard and respected.",
  },
  {
    name: "Rahul Sharma",
    role: "Cloud Architect",
    quote:
      "This team builds fast and thinks even faster! The innovation culture here has completely changed the way I work.",
  },
  {
    name: "Sofia Ali",
    role: "Project Manager",
    quote:
      "There’s a genuine sense of collaboration here. The leadership team guides but lets you make bold decisions.",
  },
];

const API_ENDPOINT = "https://api.Tfoursolutions.com/careers/apply";

const Careers = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    about: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (!formData.position) {
      setError("Please select a position.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Failed to submit application.");
      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="
        section-padding min-h-screen
        bg-[var(--color-bg)] text-[var(--color-text)]
        transition-colors duration-300
      "
    >
      <div className="max-w-5xl mx-auto px-4">
        <h1
          className="
            text-5xl font-extrabold mb-8 text-center
            text-[var(--color-primary)]
          "
        >
          Careers at Tfour
        </h1>

        <p className="text-xl mb-12 text-center max-w-2xl mx-auto opacity-85">
          Build AI. Shape the future. Grow with a diverse and talented team of
          innovators making technology simpler, smarter, and more human.
        </p>

        {/* Company Values */}
        <div className="mb-16">
          <h2
            className="
              text-3xl font-bold mb-6
              text-[var(--color-primary)]
              text-center
            "
          >
            Values that Define Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((val) => (
              <div
                key={val.title}
                className="card bg-[var(--color-card)] border border-[var(--color-border)] p-6 rounded-xl"
              >
                <h3 className="font-semibold text-lg mb-2 text-[var(--color-primary)]">
                  {val.title}
                </h3>
                <p className="opacity-80">{val.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Department Categories */}
        <div className="mb-16">
          <h2
            className="
              text-3xl font-bold mb-6 text-center
              text-[var(--color-primary)]
            "
          >
            Teams & Departments
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {departments.map((dept) => (
              <span
                key={dept}
                className="
                  px-4 py-2 rounded-full text-sm
                  bg-[var(--color-card)] border border-[var(--color-border)]
                  opacity-85
                "
              >
                {dept}
              </span>
            ))}
          </div>
        </div>

        {/* Openings */}
        <div className="mb-16">
          <h2
            className="
              text-3xl font-bold mb-6
              text-[var(--color-primary)]
            "
          >
            Current Openings
          </h2>
          {openings.map((job, idx) => (
            <div
              key={idx}
              className="
                card bg-[var(--color-card)]
                border border-[var(--color-border)] rounded-xl mb-6 p-6 shadow-md
              "
            >
              <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-2">
                {job.title}
              </h3>
              <p className="text-xs mb-2 opacity-70">{job.type}</p>
              <p className="opacity-85">{job.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-[var(--color-primary)]">
            Life at Tfour
          </h2>
          <p className="text-center mb-10 opacity-85">
            Hear what our team members say about their experience and culture.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="rounded-xl p-6 bg-[var(--color-card)] border border-[var(--color-border)] shadow-md"
              >
                <p className="italic opacity-85 mb-4">“{t.quote}”</p>
                <div className="font-semibold text-[var(--color-primary)]">
                  — {t.name}, {t.role}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Perks */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-[var(--color-primary)]">
            Benefits & Perks
          </h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {perks.map((perk, idx) => (
              <li
                key={idx}
                className="p-4 rounded-lg bg-[var(--color-card)] border border-[var(--color-border)] shadow-sm opacity-85"
              >
                {perk}
              </li>
            ))}
          </ul>
        </div>

        {/* Application Form */}
        <div className="card p-8 bg-[var(--color-card)] border border-[var(--color-border)] transition-colors duration-300">
          <h2 className="text-2xl font-bold mb-6 text-center text-[var(--color-primary)]">
            Apply Now
          </h2>
          {!submitted ? (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                required
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded border bg-[var(--color-bg)] border-[var(--color-border)] focus:ring-2 focus:ring-[var(--color-primary)] outline-none"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded border bg-[var(--color-bg)] border-[var(--color-border)] focus:ring-2 focus:ring-[var(--color-primary)] outline-none"
              />
              <select
                name="position"
                required
                value={formData.position}
                onChange={handleChange}
                className="w-full p-3 rounded border bg-[var(--color-bg)] border-[var(--color-border)] focus:ring-2 focus:ring-[var(--color-primary)] outline-none"
              >
                <option value="">Select Position</option>
                {openings.map((job, idx) => (
                  <option key={idx} value={job.title}>
                    {job.title}
                  </option>
                ))}
              </select>
              <textarea
                name="about"
                rows={4}
                required
                placeholder="Tell us about yourself..."
                value={formData.about}
                onChange={handleChange}
                className="w-full p-3 rounded border bg-[var(--color-bg)] border-[var(--color-border)] focus:ring-2 focus:ring-[var(--color-primary)] outline-none"
              />
              {error && <p className="text-red-500">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          ) : (
            <div className="p-6 rounded-lg text-center bg-[var(--color-primary)] text-white shadow-md">
              Thank you! Your application has been received. We’ll be in touch
              soon.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Careers;
