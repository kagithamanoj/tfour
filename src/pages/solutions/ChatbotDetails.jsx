import React from "react";

const faqs = [
  {
    question: "What makes Tfour AI chatbots unique?",
    answer:
      "Tfour chatbots deliver enterprise-grade conversations with multi-model support (OpenAI, Claude, open-source LLMs), seamless analytics, advanced context recall, and 100% brand customization. Our bots integrate with workflows, helping teams deliver instant, consistent experiences across digital and internal channels.",
  },
  {
    question: "How do you handle security and compliance?",
    answer:
      "We deploy on both secure cloud and on-prem infrastructures, ensuring no data is stored without consent. Configurations enforce GDPR, HIPAA, SOC2, and more. Our privacy-driven chat routing guarantees compliance for regulated industries.",
  },
  {
    question: "What customizations are possible?",
    answer:
      "Everything—from conversation personality and brand styling to integrations (Zendesk, Slack, APIs), multilingual support, human fallback, and workflow logic. Tfour empowers developers and non-developers with a visual configuration dashboard.",
  },
  {
    question: "Can your chatbots handle voice and rich media?",
    answer:
      "Yes! Our chatbots support file uploads, voice input, code snippets, media previews, and scheduling—all in real time.",
  },
  {
    question: "What are common use cases?",
    answer:
      "Smart support portals, internal helpdesks, troubleshooting assistants, onboarding bots, retail concierges, HR FAQs, and sales engagement agents.",
  },
];

function ChatbotDetails() {
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
          Tfour AI Chatbot Solutions
        </h1>

        <p
          className="
            mb-12 text-lg max-w-3xl
            opacity-85
          "
        >
          Tfour is transforming conversational AI for enterprises. Our
          platform merges modern large language models with robust deployment,
          compliance, and branded UX. From scalable customer chatbots to secured
          internal systems, Tfour Technologies bring measurable outcomes.
        </p>

        {/* Enterprise features */}
        <div className="mb-10">
          <h2
            className="
              text-3xl font-semibold mb-3
              text-[var(--color-primary)]
            "
          >
            Enterprise‑Ready Features
          </h2>
          <ul className="list-disc pl-6 space-y-1 opacity-90">
            <li>Multi-LLM architecture: OpenAI, Claude, OSS & custom models</li>
            <li>Memory, analytics dashboard, and live monitoring</li>
            <li>Omnichannel: Web, app, Slack, WhatsApp, Teams</li>
            <li>Custom workflow triggers & backend integrations</li>
            <li>White-label branding, voice and document workflows</li>
            <li>Agent handoff, escalation, and moderation tools</li>
            <li>No data retention by default; full compliance features</li>
          </ul>
        </div>

        {/* Success Stories */}
        <div className="mb-10">
          <h2
            className="
              text-3xl font-semibold mb-3
              text-[var(--color-primary)]
            "
          >
            Recent Success Stories
          </h2>
          <ul className="list-disc pl-6 space-y-1 opacity-90">
            <li>
              Retail chatbot suite—36% faster support resolutions, 24/7
              multilingual engagement across web and mobile apps.
            </li>
            <li>
              Internal LLM assistant for a financial institution—SOC2-compliant,
              saving 2000+ analyst hours annually.
            </li>
            <li>
              HR onboarding assistant deployed in Microsoft Teams with live
              document Q&A capabilities.
            </li>
          </ul>
        </div>

        {/* FAQ Section */}
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
                <h3
                  className="
                    font-bold mb-2
                    text-[var(--color-primary)]
                  "
                >
                  {faq.question}
                </h3>
                <p className="opacity-85">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call To Action */}
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
            Want a Custom AI Chatbot Demo?
          </h2>
          <p className="mb-4 opacity-85">
            We deliver tailored proofs‑of‑concept using your data, branding, and
            integrations. Every project includes onboarding, secure setup, and
            transparent pricing.
          </p>

          <a
            href="/contact"
            className="
              inline-block btn-primary text-lg
              font-semibold mt-2
            "
          >
            Contact Tfour AI Team
          </a>
        </div>
      </div>
    </section>
  );
}

export default ChatbotDetails;
