import React from "react";
import TechStackBanner from "../../components/sections/TechStackBanner.jsx";
import GlassCard from "../../components/common/GlassCard";

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
  <main className="min-h-screen flex flex-col text-[var(--color-text)]">
    <section className="pt-20 pb-20 flex-grow">
      <div className="max-w-6xl mx-auto px-4">
        <h1
          className="
            text-5xl font-extrabold mb-8
            bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent
          "
        >
          Resources & Insights
        </h1>
        <p className="text-xl mb-12 max-w-3xl text-gray-300 leading-relaxed">
          Explore our collection of authoritative resources, including blogs,
          whitepapers, webinars, and case studies designed to help you make
          informed decisions around cloud, AI, and data analytics.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {resources.map(({ type, title, description, link }) => (
            <a href={link} key={title} className="block h-full group">
              <GlassCard className="p-8 h-full hover:shadow-blue-500/20 transition-all duration-300">
                <span
                  className="
                    text-sm font-bold mb-3 inline-block px-3 py-1 rounded-full
                    bg-blue-500/10 text-blue-400 border border-blue-500/20
                  "
                >
                  {type}
                </span>
                <h2
                  className="
                    text-2xl font-bold mb-3
                    text-white group-hover:text-blue-300 transition-colors
                  "
                >
                  {title}
                </h2>
                <p className="text-gray-300 leading-relaxed">{description}</p>
              </GlassCard>
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* TechStackBanner: Full width, seamless into footer */}
    <div className="w-full border-t border-white/10 backdrop-blur-sm bg-slate-900/50">
      <TechStackBanner />
    </div>
  </main>
);

export default Resources;
