import React from "react";

const deployments = [
  {
    title: "Private Cloud LLM Deployments",
    description:
      "Deploy your own generative AI stack on Azure, AWS, GCP, or internal clouds—with total control over models, data, endpoints, and authentication.",
  },
  {
    title: "On‑Premises GenAI Stacks",
    description:
      "Air‑gapped configurations for finance, healthcare, and R&D enterprises demanding privacy, compliance, and ultra‑low latency operations.",
  },
  {
    title: "ARM64 & Hardware Optimizations",
    description:
      "Run LLMs efficiently on ARM, Apple Silicon, or GPU clusters. Tfour custom‑tunes deployments for cost, throughput, and sustainability.",
  },
  {
    title: "Secure Access & Compliance",
    description:
      "Integrated SSO, RBAC, and audit‑ready dashboards. Multi‑region redundancy and full ISO/SOC/HIPAA frameworks—no vendor lock‑in.",
  },
];

const faqs = [
  {
    question: "Why run a private LLM?",
    answer:
      "Private LLMs protect sensitive data and IP. You govern access, retention, and compliance, enabling precise, secure use cases without external data exposure.",
  },
  {
    question: "What models and frameworks do you support?",
    answer:
      "We support GPT (open‑source), LLaMA, Mistral, Falcon, and fine‑tuned variants. Integrations available for HuggingFace, Ollama, and Nvidia Triton endpoints.",
  },
  {
    question: "How does monitoring and scaling work?",
    answer:
      "Tfour includes real‑time dashboards, usage stats, auto‑scaling, and alerting—integrated with your existing observability stack like Prometheus or Datadog.",
  },
  {
    question: "Do you support air‑gapped or hybrid setups?",
    answer:
      "Yes. We specialize in air‑gapped, multi‑site, and federated environments. Monitoring, patching, compliance, and redundancy are all automated.",
  },
  {
    question: "What’s required to get started?",
    answer:
      "Simply provide your infrastructure preferences and security baseline. Tfour provisions, secures, and maintains stacks with transparent SLAs.",
  },
];

function PrivateLLM() {
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
          Tfour Private LLM Deployments
        </h1>

        <p className="mb-12 text-lg max-w-3xl opacity-85">
          Deploy generative AI securely on your infrastructure—cloud or
          on‑prem—using Tfour’s scalable, compliant LLM platforms. Protect
          intellectual property, enhance workflows, and achieve unmatched
          performance within your own environment.
        </p>

        {/* Deployment Features */}
        <div className="mb-10">
          <h2
            className="
              text-3xl font-semibold mb-3
              text-[var(--color-primary)]
            "
          >
            Deployment Options & Features
          </h2>
          <ul className="list-disc pl-6 space-y-2 opacity-90">
            <li>Zero vendor lock‑in, fully portable architecture</li>
            <li>Optimized for Azure, AWS, GCP, and hybrid setups</li>
            <li>Secure, private data—never leaving your control</li>
            <li>Enterprise‑ready SSO, SAML, RBAC, and audit compliance</li>
            <li>Model serving for GPT, LLaMA2, Mistral, Falcon, and custom fine‑tuning</li>
            <li>Real‑time monitoring, usage analytics, and dashboards</li>
          </ul>
        </div>

        {/* Deployment Scenarios */}
        <div className="mb-10">
          <h2
            className="
              text-3xl font-semibold mb-3
              text-[var(--color-primary)]
            "
          >
            Tfour LLM Deployment Scenarios
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {deployments.map((item, idx) => (
              <div
                key={idx}
                className="
                  rounded-xl px-6 py-5 shadow-md
                  bg-[var(--color-card)]
                  border border-[var(--color-border)]
                  transition-colors duration-300
                "
              >
                <div className="font-bold mb-2 text-[var(--color-primary)]">
                  {item.title}
                </div>
                <p className="opacity-85">{item.description}</p>
              </div>
            ))}
          </div>
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
                <div className="font-bold mb-2 text-[var(--color-primary)]">
                  {faq.question}
                </div>
                <p className="opacity-85">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action */}
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
            Deploy Private AI with Tfour
          </h2>
          <p className="mb-4 opacity-85">
            Tfour handles provisioning, optimization, and ongoing support
            for your secure, high‑performance LLM deployment—any environment,
            anywhere.
          </p>

          <a
            href="/contact"
            className="
              inline-block btn-primary text-lg
              font-semibold mt-2
            "
          >
            Contact Tfour Private AI
          </a>
        </div>
      </div>
    </section>
  );
}

export default PrivateLLM;
