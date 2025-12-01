import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBrain, FaCloud, FaMobileAlt, FaDatabase, FaCode, FaServer, FaShieldAlt,
  FaRocket, FaCogs, FaSearch, FaPython, FaReact, FaAws, FaDocker, FaNodeJs,
  FaJava, FaGitAlt, FaLinux
} from "react-icons/fa";
import {
  SiTensorflow, SiPytorch, SiOpenai, SiKubernetes, SiTerraform, SiMongodb,
  SiPostgresql, SiRedis, SiNextdotjs, SiTailwindcss, SiFlutter, SiGo,
  SiElasticsearch, SiApachekafka, SiSnowflake, SiDatabricks
} from "react-icons/si";
import GlassCard from "../../components/common/GlassCard";

const domains = [
  {
    id: "ai",
    label: "AI & Machine Learning",
    icon: <FaBrain />,
    tagline: "Intelligence at Scale",
    description: "We build autonomous agents, fine-tune LLMs, and deploy computer vision models that solve real-world problems.",
    techStack: [
      { name: "PyTorch", icon: <SiPytorch className="text-orange-500" /> },
      { name: "TensorFlow", icon: <SiTensorflow className="text-orange-400" /> },
      { name: "OpenAI API", icon: <SiOpenai className="text-green-400" /> },
      { name: "LangChain", icon: <FaCode className="text-blue-400" /> }, // Generic for LangChain
      { name: "Hugging Face", icon: <FaBrain className="text-yellow-400" /> }, // Generic
      { name: "Python", icon: <FaPython className="text-blue-300" /> }
    ],
    capabilities: [
      "Custom LLM Fine-tuning (Llama 3, Mistral)",
      "RAG (Retrieval-Augmented Generation) Pipelines",
      "Computer Vision & Object Detection",
      "Autonomous AI Agents",
      "Predictive Analytics & Forecasting"
    ],
    methodology: "Research-First Approach: We stay on the bleeding edge of arXiv papers, testing new architectures weekly to ensure you get the most advanced solutions possible."
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    icon: <FaCloud />,
    tagline: "Infrastructure as Code",
    description: "Scalable, secure, and self-healing cloud environments. We treat infrastructure with the same rigor as application code.",
    techStack: [
      { name: "AWS", icon: <FaAws className="text-orange-500" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500" /> },
      { name: "Terraform", icon: <SiTerraform className="text-purple-400" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
      { name: "Linux", icon: <FaLinux className="text-yellow-200" /> },
      { name: "GitHub Actions", icon: <FaGitAlt className="text-white" /> }
    ],
    capabilities: [
      "Multi-Cloud Architecture (AWS, Azure, GCP)",
      "Serverless Computing (Lambda, Cloud Run)",
      "Kubernetes Cluster Management",
      "CI/CD Pipeline Automation",
      "DevSecOps & Compliance (SOC2, HIPAA)"
    ],
    methodology: "Immutable Infrastructure: We never patch servers in place. We replace them. This ensures consistency, security, and instant rollback capabilities."
  },
  {
    id: "web",
    label: "Web & Mobile",
    icon: <FaMobileAlt />,
    tagline: "Pixel-Perfect Engineering",
    description: "High-performance applications that feel instant. We focus on Core Web Vitals, accessibility, and fluid animations.",
    techStack: [
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Flutter", icon: <SiFlutter className="text-blue-300" /> },
      { name: "Go", icon: <SiGo className="text-cyan-200" /> }
    ],
    capabilities: [
      "Full-Stack Web Development",
      "Cross-Platform Mobile Apps (iOS/Android)",
      "Progressive Web Apps (PWA)",
      "Real-Time WebSocket Applications",
      "Micro-Frontend Architecture"
    ],
    methodology: "Component-Driven Design: We build reusable design systems, not just pages. This ensures UI consistency and speeds up future development."
  },
  {
    id: "data",
    label: "Data Engineering",
    icon: <FaDatabase />,
    tagline: "From Chaos to Clarity",
    description: "We build the pipelines that feed your AI. Clean, reliable, and real-time data streaming at petabyte scale.",
    techStack: [
      { name: "Snowflake", icon: <SiSnowflake className="text-blue-300" /> },
      { name: "Databricks", icon: <SiDatabricks className="text-orange-500" /> },
      { name: "Kafka", icon: <SiApachekafka className="text-white" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
      { name: "Elasticsearch", icon: <SiElasticsearch className="text-yellow-400" /> },
      { name: "Redis", icon: <SiRedis className="text-red-500" /> }
    ],
    capabilities: [
      "ETL/ELT Pipeline Orchestration",
      "Real-Time Data Streaming",
      "Data Lakehouse Architecture",
      "Vector Database Management",
      "Data Governance & Quality"
    ],
    methodology: "Data Mesh Principles: We treat data as a product, ensuring domain-oriented ownership and self-serve infrastructure for your analytics teams."
  }
];

const Expertise = () => {
  const [activeTab, setActiveTab] = useState("ai");
  const activeData = domains.find(d => d.id === activeTab);

  return (
    <section className="min-h-screen text-[var(--color-text)] bg-[#0F172A] pb-20">
      {/* Hero Section */}
      <div className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Technical DNA
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
              We don't just use tools; we master them.
              Our engineering culture is built on deep expertise, continuous learning, and architectural discipline.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {domains.map((dom) => (
            <button
              key={dom.id}
              onClick={() => setActiveTab(dom.id)}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300
                ${activeTab === dom.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                }
              `}
            >
              {dom.icon}
              <span>{dom.label}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Domain Hero */}
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-purple-500/20 text-purple-300 text-sm font-bold mb-4 border border-purple-500/30">
                {activeData.label}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {activeData.tagline}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {activeData.description}
              </p>
            </div>

            {/* Tech Stack Grid */}
            <div className="mb-20">
              <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-2">
                <FaCode className="text-blue-400" /> Core Technologies
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {activeData.techStack.map((tech, i) => (
                  <GlassCard key={i} className="p-6 flex flex-col items-center justify-center hover:bg-white/10 transition-colors group">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <span className="font-bold text-gray-300 group-hover:text-white">{tech.name}</span>
                  </GlassCard>
                ))}
              </div>
            </div>

            {/* Capabilities & Methodology Grid */}
            <div className="grid lg:grid-cols-2 gap-12 mb-20">
              {/* Capabilities */}
              <GlassCard className="p-8 border-l-4 border-l-blue-500">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-blue-500/20 text-blue-500"><FaCogs /></span>
                  What We Deliver
                </h3>
                <ul className="space-y-4">
                  {activeData.capabilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <FaCheck className="text-blue-500 mt-1 flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>

              {/* Methodology */}
              <GlassCard className="p-8 border-l-4 border-l-purple-500">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-purple-500/20 text-purple-500"><FaSearch /></span>
                  Our Approach
                </h3>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <p className="text-lg text-gray-300 leading-relaxed italic">
                    "{activeData.methodology}"
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-black/20 text-center">
                    <div className="text-purple-400 font-bold text-xl mb-1">100%</div>
                    <div className="text-xs text-gray-500 uppercase">Code Ownership</div>
                  </div>
                  <div className="p-4 rounded-lg bg-black/20 text-center">
                    <div className="text-purple-400 font-bold text-xl mb-1">24/7</div>
                    <div className="text-xs text-gray-500 uppercase">System Monitoring</div>
                  </div>
                </div>
              </GlassCard>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

// Helper component for checkmarks
const FaCheck = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default Expertise;
