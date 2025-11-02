import React from "react";

const studies = [
  {
    client: "Nova Restaurant Group",
    challenge:
      "Manual billing, slow feedback and poor reservation analytics.",
    solution:
      "Implemented a cloud-based AI POS: auto-insights, text/speech sentiment analysis, real-time reservation analytics.",
    outcome:
      "40% faster billing, 25% increase in customer retention, and instant analytics dashboards enabling smarter pricing decisions.",
  },
  {
    client: "FinEdge Insurance",
    challenge:
      "Handling thousands of client queries and policy updates weekly.",
    solution:
      "Deployed AI chatbot and workflow automation integrated with CRM—answering queries and updating policies autonomously.",
    outcome:
      "Reduced support tickets by 70%, 2x faster claims processing, and improved satisfaction across digital channels.",
  },
  {
    client: "OpenSearch Ops Team",
    challenge:
      "No centralized log analysis; critical outages went undetected.",
    solution:
      "Engineered a log pipeline using OpenSearch, Fluent Bit, and dashboards for real-time detection, clustering, and alerting.",
    outcome:
      "Improved uptime, actionable diagnostics, and instant visibility for mission-critical cloud infrastructure.",
  },
];

const CaseStudyCard = ({ client, challenge, solution, outcome }) => (
  <div
    className="
      w-full px-8 py-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-start mb-10
      bg-[var(--color-card)] border border-[var(--color-border)]
      hover:shadow-2xl transition-all duration-300 space-y-4 md:space-y-0 md:space-x-10
    "
  >
    <div className="flex-1">
      <h2
        className="
          text-2xl font-bold mb-3
          text-[var(--color-primary)]
        "
      >
        {client}
      </h2>

      <div className="mb-4">
        <span
          className="
            font-semibold text-[var(--color-primary)]
          "
        >
          Challenge:
        </span>{" "}
        <span className="opacity-90">{challenge}</span>
      </div>

      <div className="mb-4">
        <span
          className="
            font-semibold text-[var(--color-primary-hover)]
          "
        >
          Solution:
        </span>{" "}
        <span className="opacity-85">{solution}</span>
      </div>

      <div>
        <span
          className="
            font-semibold text-[var(--color-text)]
          "
          style={{ opacity: 0.9 }}
        >
          Outcome:
        </span>{" "}
        <span className="opacity-85">{outcome}</span>
      </div>
    </div>
  </div>
);

const CaseStudies = () => (
  <section
    className="
      min-h-screen w-full py-16 px-0
      bg-[var(--color-bg)] text-[var(--color-text)]
      transition-colors duration-300
    "
  >
    <div className="max-w-5xl mx-auto px-4">
      <h1
        className="
          text-4xl font-extrabold mb-6
          text-[var(--color-primary)]
        "
      >
        Case Studies
      </h1>

      <p className="mb-8 opacity-85">
        See how Tfour Technologies helps clients—from startups to
        enterprises—achieve measurable business value through cloud and
        AI-driven innovation.
      </p>

      <div className="flex flex-col gap-6">
        {studies.map((study, idx) => (
          <CaseStudyCard key={idx} {...study} />
        ))}
      </div>

      <p className="mt-10 text-sm opacity-75">
        Want to see what we can do for your business?{" "}
        <a href="/contact" className="link">
          Contact us today
        </a>
        .
      </p>
    </div>
  </section>
);

export default CaseStudies;
