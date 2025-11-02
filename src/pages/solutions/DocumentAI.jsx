import React from "react";

const useCases = [
  {
    title: "Automated Document Summarization",
    description:
      "Summarize long contracts, research papers, or regulatory filings instantly. Use multi-level summaries — from bullet points to detailed Q&A — to accelerate reviews.",
  },
  {
    title: "Contextual Search & Answer Extraction",
    description:
      "Ask natural language questions about your PDFs, scanned docs, or knowledge base. Get precise answers and context‑aware citations for every query.",
  },
  {
    title: "RAG Pipelines for Custom Workflows",
    description:
      "Combine Retrieval Augmented Generation with private corpora, legal documents, or knowledge bases to generate intelligent reports, forms, or narratives.",
  },
  {
    title: "Compliance‑Ready Audit Trails",
    description:
      "Track uploads, summaries, and all actions with metadata for legal, finance, and healthcare documentation standards.",
  },
];

const faqs = [
  {
    question: "What formats does Tfour Document AI support?",
    answer:
      "We support PDF, DOCX, TXT, Excel, CSV, images (OCR) and more — retaining complex structures like tables, headers, and footnotes.",
  },
  {
    question: "Where is my data processed and stored?",
    answer:
      "You choose: Tfour secure cloud, your own Azure/AWS tenancy, or fully on‑prem deployment. Processing zones are auditable and isolated for privacy.",
  },
  {
    question: "Is Document AI safe for regulated industries?",
    answer:
      "Yes. Fully HIPAA, GDPR, and SOC2 compliant. All actions are logged, exportable, and private deployments leave zero cloud footprint.",
  },
  {
    question: "Can you integrate with existing DMS or portals?",
    answer:
      "Absolutely. We provide ready APIs, SSO/SAML authentication, and webhooks for smooth embedding into enterprise and legal document systems.",
  },
  {
    question: "Do I need AI expertise to use or maintain it?",
    answer:
      "Not at all. Tfour Document AI provides intuitive UIs, role‑based access, and no‑code configuration for even advanced extraction or analysis.",
  },
];

function DocumentAI() {
  return (
    <section
      className="
        min-h-screen w-full py-20
        bg-[var(--color-bg)]
        text-[var(--color-text)]
        transition-colors duration-300
      "
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h1
          className="
            text-5xl font-extrabold mb-8
            text-[var(--color-primary)]
          "
        >
          Tfour Document AI
        </h1>

        <p className="mb-12 text-lg max-w-3xl opacity-85">
          Transform static documents into searchable knowledge. Tfour
          Document AI extracts insights, enables Q&A, and automates summaries to
          streamline enterprise data processing and compliance.
        </p>

        {/* Core Solution Highlights */}
        <div className="mb-10">
          <h2
            className="
              text-3xl font-semibold mb-3
              text-[var(--color-primary)]
            "
          >
            Core Solution Highlights
          </h2>
          <ul className="list-disc pl-6 space-y-2 opacity-90">
            <li>Enterprise‑scale ingestion for thousands of docs per day</li>
            <li>Automatic summarization and key‑point extraction</li>
            <li>Context‑aware semantic search and highlight responses</li>
            <li>RAG pipelines for insightful generation and synthesis</li>
            <li>Access control and detailed audit trails</li>
            <li>Secure deploys across cloud, hybrid, and on‑premise</li>
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
            Document AI in Action
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
                <div className="font-bold mb-2 text-[var(--color-primary)]">
                  {item.title}
                </div>
                <p className="opacity-85">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
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
            Ready for Document Intelligence?
          </h2>
          <p className="mb-4 opacity-85">
            Evaluate Document AI with your own documents—request sandbox access
            or schedule a guided enterprise pilot with our AI team.
          </p>
          <a
            href="/contact"
            className="
              inline-block btn-primary text-lg
              font-semibold mt-2
            "
          >
            Contact Tfour Document AI
          </a>
        </div>
      </div>
    </section>
  );
}

export default DocumentAI;
