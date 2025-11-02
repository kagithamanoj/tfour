import React from "react";
import TechStackBanner from "../../components/sections/TechStackBanner.jsx";

const resources = [
  {
    type: "Blog",
    title: "Latest Trends in Cloud Automation",
    description:
      "Discover how multi-cloud strategies and automation frameworks are reshaping enterprise IT.",
    link: "/resources/blog/cloud-automation-trends",
  },
  {
    type: "Whitepaper",
    title: "Scaling OpenSearch for Global Enterprises",
    description:
      "In-depth analysis of OpenSearch cluster management and best practices for large installations.",
    link: "/resources/whitepapers/opensearch-scaling",
  },
  {
    type: "Webinar",
    title: "AI-Driven Transcription Systems Explained",
    description:
      "Join our expert webinar covering architecture and deployment strategies for real-time transcription.",
    link: "/resources/webinars/ai-transcription",
  },
  {
    type: "Case Study",
    title: "Cost Optimization for Azure Cloud",
    description:
      "How a leading retailer saved 30% annually through cloud cost monitoring and automation.",
    link: "/resources/case-studies/azure-cost-optimization",
  },
];

const Resources = () => (
  <div
    className="
      min-h-screen flex flex-col
      bg-[var(--color-bg)]
      text-[var(--color-text)]
      transition-colors duration-300
    "
  >
    <section className="pt-8 pb-20 flex-shrink-0">
      <div className="max-w-6xl mx-auto px-4">
        <h1
          className="
            text-5xl font-extrabold mb-8
            text-[var(--color-primary)]
          "
        >
          Resources & Insights
        </h1>
        <p className="text-xl mb-12 max-w-3xl opacity-85">
          Explore our collection of authoritative resources, including blogs,
          whitepapers, webinars, and case studies designed to help you make
          informed decisions around cloud, AI, and data analytics.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {resources.map(({ type, title, description, link }) => (
            <a
              href={link}
              key={title}
              className="
                p-8 rounded-xl shadow-lg flex flex-col
                bg-[var(--color-card)]
                border border-[var(--color-border)]
                hover:-translate-y-1 hover:shadow-2xl
                transition-all duration-300
              "
            >
              <span
                className="
                  text-sm font-semibold mb-2
                  text-[var(--color-primary)]
                "
              >
                {type}
              </span>
              <h2
                className="
                  text-2xl font-bold mb-2
                  text-[var(--color-primary)]
                "
              >
                {title}
              </h2>
              <p className="opacity-85">{description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* TechStackBanner: Full width, seamless into footer */}
    <div
      className="
        w-full flex-shrink-0
        bg-[var(--color-card)]
        border-t border-[var(--color-border)]
        transition-colors duration-300
      "
      style={{ marginTop: 0, marginBottom: 0 }}
    >
      <TechStackBanner />
    </div>
  </div>
);

export default Resources;
