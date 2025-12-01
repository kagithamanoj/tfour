import React from "react";
import GlassCard from "../../components/common/GlassCard";

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
      text-[var(--color-text)]
      transition-colors duration-300
    "
  >
    <div className="max-w-6xl mx-auto px-4">
      <h1
        className="
          text-5xl font-extrabold mb-8
          bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent
        "
      >
        Our Products
      </h1>
      <p
        className="
          text-xl mb-12 max-w-3xl
          text-gray-300 leading-relaxed
        "
      >
        Explore Tfour Technologies’ suite of scalable products designed for
        enterprise automation, AI insight, and cloud optimization. Each product
        can be deployed, customized, and supported by our expert team.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {products.map(({ name, description }) => (
          <GlassCard
            key={name}
            className="p-8 hover:shadow-blue-500/20 transition-all duration-300 h-full"
          >
            <h2
              className="
                text-2xl font-bold mb-3
                text-white
              "
            >
              {name}
            </h2>
            <p className="text-gray-300 leading-relaxed">{description}</p>
          </GlassCard>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
