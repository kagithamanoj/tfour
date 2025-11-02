import React from "react";

const portfolioStats = [
  { label: "Clients Served", value: 86 },
  { label: "AI Deployments", value: 34 },
  { label: "100% Success Rate", value: "Yes" },
  { label: "Industries Impacted", value: 11 },
];

const projects = [
  {
    name: "OrderlyAI",
    sector: "Hospitality",
    desc: "Automated POS and customer engagement platform for restaurants, boosting retention by 25% and doubling order accuracy.",
    highlights: [
      "Live table-side AI recommendations",
      "Integration with delivery apps and inventory systems",
    ],
  },
  {
    name: "SmartCricket",
    sector: "Sports/AI Analytics",
    desc: "Real-time athlete performance and fan engagement hub—doubling retention and eliminating 70% of manual reporting.",
    highlights: [
      "Live match dashboard with AI summaries",
      "Player merchandise recommendation engine",
    ],
  },
  {
    name: "InnoCRM",
    sector: "Enterprise SaaS",
    desc: "Custom CRM solution improving B2B conversions via AI-driven email automation and predictive scoring.",
    highlights: ["Smart lead qualification", "Conversational AI sales cockpit"],
  },
];

const testimonials = [
  {
    quote:
      "Tfour transformed our analytics and reduced onboarding time for franchisees. We gained actionable insights within weeks.",
    by: "S. James, CEO, Tinykola Restaurants",
  },
  {
    quote:
      "Their AI pipeline for our cricket platform was a game changer—users love the live summaries and integrated fan engagement.",
    by: "M. Singh, CTO, SmartCricket",
  },
];

const industries = [
  "Hospitality",
  "Retail",
  "Sports Tech",
  "SaaS Platforms",
  "Consulting",
  "Healthcare",
  "eCommerce",
  "Logistics",
  "EdTech",
  "FinTech",
  "Media & Marketing",
];

const Portfolio = () => (
  <div
    className="
      min-h-screen py-12 px-4
      bg-[var(--color-bg)]
      text-[var(--color-text)]
      transition-colors duration-300
    "
  >
    {/* Hero Section */}
    <section className="max-w-3xl mx-auto text-center py-8">
      <h1
        className="
          text-4xl md:text-5xl font-extrabold mb-3
          text-[var(--color-primary)]
        "
      >
        Refining Success, Project by Project
      </h1>
      <p className="text-lg md:text-xl opacity-85 mb-6">
        Tfour’s portfolio spans AI, automation, and digital innovation for
        global enterprises.
      </p>
    </section>

    {/* Stats Section */}
    <section className="flex flex-wrap justify-center gap-8 mb-10">
      {portfolioStats.map((stat) => (
        <div
          key={stat.label}
          className="
            rounded-xl shadow-lg p-6 w-52 text-center
            bg-[var(--color-card)]
            border border-[var(--color-border)]
            transition-colors duration-300
          "
        >
          <div className="text-3xl font-bold mb-1 text-[var(--color-primary)] animate-bounce">
            {stat.value}
          </div>
          <div className="uppercase tracking-wide text-sm opacity-85">
            {stat.label}
          </div>
        </div>
      ))}
    </section>

    {/* Projects Section */}
    <section className="max-w-5xl mx-auto mb-14">
      <h2
        className="
          text-2xl md:text-3xl font-bold mb-6
          text-[var(--color-primary)]
        "
      >
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((proj) => (
          <div
            key={proj.name}
            className="
              rounded-lg shadow-md p-6
              bg-[var(--color-card)]
              border border-[var(--color-border)]
              transition-all hover:-translate-y-1 hover:shadow-lg
            "
          >
            <div
              className="
                text-lg font-semibold mb-2
                text-[var(--color-primary)]
              "
            >
              {proj.name}
            </div>
            <div className="text-sm opacity-75 mb-2">{proj.sector}</div>
            <p className="mb-3 opacity-85">{proj.desc}</p>
            <ul className="list-disc ml-5 space-y-1 opacity-80 text-sm">
              {proj.highlights.map((h, idx) => (
                <li key={idx}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="max-w-2xl mx-auto mt-8 mb-12">
      <h2
        className="
          text-xl font-bold text-center mb-4
          text-[var(--color-primary)]
        "
      >
        Client Testimonials
      </h2>
      <div className="space-y-6">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="
              rounded-lg px-6 py-4 italic shadow
              bg-[var(--color-card)]
              border border-[var(--color-border)]
              opacity-90
            "
          >
            “{t.quote}”
            <div
              className="
                font-medium mt-2 not-italic
                text-[var(--color-primary)]
              "
            >
              - {t.by}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Industry Highlights */}
    <section className="max-w-3xl mx-auto pb-10">
      <h2
        className="
          text-xl font-bold text-center mb-4
          text-[var(--color-primary)]
        "
      >
        Industries We Transform
      </h2>
      <div className="flex flex-wrap justify-center gap-3">
        {industries.map((industry) => (
          <span
            key={industry}
            className="
              px-4 py-1 rounded-full text-sm
              bg-[var(--color-card)]
              border border-[var(--color-border)]
              opacity-85 transition-colors
            "
          >
            {industry}
          </span>
        ))}
      </div>
    </section>
  </div>
);

export default Portfolio;
