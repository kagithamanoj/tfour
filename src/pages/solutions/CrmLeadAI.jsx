import React from "react";

const useCases = [
  {
    title: "Predictive Lead Scoring",
    description:
      "Our AI analyzes your CRM and marketing data in real time, generating precise lead scores so your team can prioritize prospects that convert.",
  },
  {
    title: "Automated Outreach & Sequencing",
    description:
      "Smart workflows trigger emails, calls, and next actions based on lead intent and behavior—reducing chase time and increasing conversions.",
  },
  {
    title: "Integrated Data Enrichment",
    description:
      "Enrich leads automatically with social, company, and web activity signals. Close data gaps, flag buying intent, and let AI surface your best opportunities.",
  },
  {
    title: "Adaptive Segmentation & Reporting",
    description:
      "Dynamic AI segmentation groups leads by value, urgency, or vertical—feeding real-time dashboards and CRM fields ready for analysis.",
  },
];

const faqs = [
  {
    question: "How does Tfour's CRM AI integrate with my stack?",
    answer:
      "Native API integrations with Salesforce, HubSpot, Zoho, and other CRMs. Secure OAuth access and custom connectors ensure zero vendor lock-in and full control.",
  },
  {
    question: "Is the lead scoring transparent and auditable?",
    answer:
      "Yes. Every data point, scoring rule, and model event is logged and explainable. Export detailed compliance-ready reports anytime.",
  },
  {
    question: "What industries benefit most?",
    answer:
      "Tfour CRM AI powers sales success in SaaS, IT services, e-commerce, financial, and real estate industries—where high-value lead flow is critical.",
  },
  {
    question: "Can it automate multi-step campaigns?",
    answer:
      "Absolutely. Email drips, reminders, enrichment tasks, and follow-ups can be triggered instantly—aligned with your sales cadence.",
  },
  {
    question: "How secure is my lead data?",
    answer:
      "We encrypt all data during transit and at rest, offer regional hosting, and provide full GDPR compliance. Optional private cloud and on-prem deployments are available.",
  },
];

function CrmLeadAI() {
  return (
    <section
      className="
        min-h-screen w-full py-20
        bg-[var(--color-bg)] text-[var(--color-text)]
        transition-colors duration-300
      "
    >
      <div className="max-w-6xl mx-auto px-4">
        <h1
          className="
            text-5xl font-extrabold mb-8
            text-[var(--color-primary)]
          "
        >
          Tfour AI CRM Lead Automation Platform
        </h1>

        <p className="mb-12 text-lg max-w-3xl opacity-85">
          Drive pipeline growth with AI. Tfour’s CRM AI platform leverages
          predictive and generative intelligence to score, segment, enrich, and
          automate outreach—making your entire funnel smarter and faster.
        </p>

        {/* Capabilities */}
        <div className="mb-10">
          <h2
            className="
              text-3xl font-semibold mb-3
              text-[var(--color-primary)]
            "
          >
            Key Solution Capabilities
          </h2>
          <ul className="list-disc pl-6 space-y-2 opacity-90">
            <li>Real-time AI scoring with rules feedback</li>
            <li>Automated lead enrichment and cleansing workflows</li>
            <li>Multi-channel email, meeting, and follow-up automation</li>
            <li>Custom segmentation and lifecycle analysis</li>
            <li>Native integrations across major CRM systems</li>
            <li>Transparent, auditable scoring and reporting</li>
          </ul>
        </div>

        {/* Use Cases */}
        <div className="mb-10">
          <h2
            className="
              text-3xl font-semibold mb-2
              text-[var(--color-primary)]
            "
          >
            How Customers Use Tfour CRM AI
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((item, idx) => (
              <div
                key={idx}
                className="
                  rounded-xl px-6 py-5 shadow-md
                  bg-[var(--color-card)]
                  border border-[var(--color-border)]
                  transition-colors duration-300
                "
              >
                <div
                  className="
                    font-bold mb-2
                    text-[var(--color-primary)]
                  "
                >
                  {item.title}
                </div>
                <div className="opacity-85">{item.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-10">
          <h2
            className="
              text-3xl font-semibold mb-4
              text-[var(--color-primary)]
            "
          >
            FAQ
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="
                  rounded-xl border px-6 py-4 shadow-md
                  bg-[var(--color-card)]
                  border-[var(--color-border)]
                  transition-colors duration-300
                "
              >
                <div
                  className="
                    font-bold mb-2
                    text-[var(--color-primary)]
                  "
                >
                  {faq.question}
                </div>
                <div className="opacity-85">{faq.answer}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="
            mt-12 pt-8 rounded-xl shadow
            bg-[var(--color-card)]
            border-t border-[var(--color-border)]
            transition-colors duration-300
          "
        >
          <h2
            className="
              text-3xl font-bold mb-4
              text-[var(--color-primary)]
            "
          >
            Unlock AI‑Driven CRM Growth
          </h2>
          <p className="mb-4 opacity-85">
            Experience a live demo with your CRM data—Tfour provides full
            proof‑of‑concepts, rapid integrations, and measurable ROI.
          </p>
          <a
            href="/contact"
            className="
              inline-block btn-primary mt-2 text-lg
              font-semibold
            "
          >
            Contact Tfour CRM AI Team
          </a>
        </div>
      </div>
    </section>
  );
}

export default CrmLeadAI;
