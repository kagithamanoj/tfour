import React from "react";

const FeatureCard = ({ icon, title, description }) => (
  <div
    className="
      p-7 rounded-2xl shadow-2xl text-left
      bg-[var(--color-card)]
      border border-[var(--color-border)]
      hover:-translate-y-1 hover:shadow-[var(--color-primary)]/30
      transition-transform duration-200
    "
  >
    <div
      className="
        flex items-center justify-center h-14 w-14 rounded-md mb-3
        bg-[var(--color-primary)]/20
        text-[var(--color-primary)]
        transition-colors duration-300
      "
    >
      {icon}
    </div>
    <h3
      className="
        text-xl font-extrabold mb-2
        text-[var(--color-primary)]
      "
    >
      {title}
    </h3>
    <p className="opacity-85">{description}</p>
  </div>
);

const featuresData = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12V4.5" />
      </svg>
    ),
    title: "Cutting-edge LLM Research",
    description:
      "We design, fine-tune, and optimize large language models (LLMs) and multi-modal AIs, exploring prompt engineering, RAG, knowledge distillation, privacy, and robust application of foundation models.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} />
        <path d="M7.5 10.5a4.5 4.5 0 109 0 4.5 4.5 0 10-9 0z" stroke="currentColor" strokeWidth={2} />
        <path d="M12 7v2.5" stroke="currentColor" strokeWidth={2} />
      </svg>
    ),
    title: "Deep Learning Vision Systems",
    description:
      "Build AI image and video analytics—object detection, OCR, segmentation, facial analysis, and medical imaging via CNN and transformer-based models.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-7a2 2 0 00-2-2h-2m-6 0H7a2 2 0 00-2 2v7a2 2 0 002 2h2m0 0v2m6-2v2" />
      </svg>
    ),
    title: "Autonomous AI Agents",
    description:
      "Develop intelligent autonomous agents for enterprise—systems that optimize workflows, scheduling, and decision-making across IT, HR, and finance.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 17v-3a4 4 0 014-4h8a4 4 0 014 4v3" />
        <path d="M12 3v6M9 6h6" stroke="currentColor" strokeWidth={2} />
      </svg>
    ),
    title: "Generative AI for Enterprise",
    description:
      "Automate text generation, content creation, documentation, and summarization with powerful, secure, and scalable GenAI-driven workflows.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth={2} />
        <path d="M8 9h8M8 13h2.5" stroke="currentColor" strokeWidth={2} />
      </svg>
    ),
    title: "Natural Language Search & RAG",
    description:
      "Enable semantic enterprise search and RAG-powered query systems to transform knowledge repositories into intelligent Q&A platforms.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13.875A4.125 4.125 0 0021 10 4.125 4.125 0 0016.875 6 4.125 4.125 0 0013.75 10 4.125 4.125 0 0017 13.875z" />
        <path d="M3.95 18.132A8.958 8.958 0 0012 21a8.958 8.958 0 008.05-2.868" stroke="currentColor" strokeWidth={2} />
      </svg>
    ),
    title: "Advanced Data Analytics",
    description:
      "Unlock predictive insights with AI-driven analytics pipelines—forecasting, anomaly detection, and data reporting aligned to enterprise KPIs.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} />
        <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth={2} />
      </svg>
    ),
    title: "AI Security & Privacy",
    description:
      "Build privacy-preserving ML with encrypted inference, zero-retention data pipelines, and full compliance (HIPAA, GDPR, SOC2).",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17l3 3 3-3M9 7l3-3 3 3" />
      </svg>
    ),
    title: "MLOps & AI Infrastructure",
    description:
      "Streamline deployment and monitoring of ML systems—versioning, optimization, and automation for scalable AI operations.",
  },
];

const Features = () => (
  <section
    id="features"
    className="
      pt-12 pb-24 px-4 min-h-screen
      bg-[var(--color-bg)]
      text-[var(--color-text)]
      transition-colors duration-300
    "
  >
    <div className="max-w-7xl mx-auto">
      <h2
        className="
          text-4xl md:text-5xl font-extrabold mb-4 text-center
          text-[var(--color-primary)]
        "
      >
        Innovative AI & Deep Learning Features
      </h2>
      <p className="text-lg mb-14 max-w-3xl mx-auto text-center opacity-85">
        From foundational research to applied business impact—discover how our
        team pushes boundaries of AI in natural language, vision, analytics, and
        automation domains.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuresData.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </div>
  </section>
);

export default Features;
