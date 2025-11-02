import React from "react";

const products = [
  {
    name: "AI Chat Assistant",
    description:
      "A customizable chatbot that integrates into your platform, handling live Q&A, customer support, and automated scheduling.",
  },
  {
    name: "GenAI Transcription Suite",
    description:
      "Real-time meeting and interview transcription tool powered by large language models, compatible with Zoom, Teams, and web calls.",
  },
  {
    name: "OpenSearch Monitoring Dashboard",
    description:
      "Enterprise dashboard for scalable log analytics, search events, and real-time metrics, built for OpenSearch clusters.",
  },
  {
    name: "Cloud Cost Analyzer",
    description:
      "Smart Azure and AWS cost tracking and alerting engine, helping teams optimize resources and spot budget issues early.",
  },
];

const Products = () => (
  <section
    className="
      py-20 min-h-screen
      bg-[var(--color-bg)]
      text-[var(--color-text)]
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
        Our Products
      </h1>
      <p
        className="
          text-xl mb-12 max-w-3xl
          opacity-85
        "
      >
        Explore Tfour Technologies’ suite of scalable products designed for
        enterprise automation, AI insight, and cloud optimization. Each product
        can be deployed, customized, and supported by our expert team.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {products.map(({ name, description }) => (
          <div
            key={name}
            className="
              p-8 rounded-xl shadow-lg flex flex-col
              bg-[var(--color-card)]
              border border-[var(--color-border)]
              hover:shadow-2xl hover:-translate-y-1
              transition-all duration-300
            "
          >
            <h2
              className="
                text-2xl font-bold mb-2
                text-[var(--color-primary)]
              "
            >
              {name}
            </h2>
            <p className="opacity-85">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
