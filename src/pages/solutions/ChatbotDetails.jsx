import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaShieldAlt, FaCogs, FaComments, FaCheckCircle, FaLock, FaPlug } from "react-icons/fa";
import GlassCard from "../../components/common/GlassCard";

const tabs = [
  { id: "features", label: "Core Features", icon: <FaCogs /> },
  { id: "integrations", label: "Integrations", icon: <FaPlug /> },
  { id: "security", label: "Security & Compliance", icon: <FaShieldAlt /> },
];

const features = [
  { title: "Multi-LLM Support", desc: "Switch between GPT-4, Claude 3, and Llama 3 instantly based on cost/performance needs." },
  { title: "Context Awareness", desc: "Remembers user history and preferences across sessions for truly personalized support." },
  { title: "Human Handoff", desc: "Seamlessly escalates complex issues to live agents with full conversation context." },
  { title: "Multilingual", desc: "Native support for 50+ languages with automatic detection and translation." },
];

const integrations = [
  { name: "Salesforce", icon: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg" },
  { name: "HubSpot", icon: "https://cdn.worldvectorlogo.com/logos/hubspot-1.svg" },
  { name: "Slack", icon: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" },
  { name: "Microsoft Teams", icon: "https://cdn.worldvectorlogo.com/logos/microsoft-teams-1.svg" },
  { name: "Zendesk", icon: "https://cdn.worldvectorlogo.com/logos/zendesk-1.svg" },
  { name: "Shopify", icon: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
];

const ChatbotDetails = () => {
  const [activeTab, setActiveTab] = useState("features");

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
            <div className="inline-block mb-6 p-4 rounded-full bg-blue-500/10 border border-blue-500/20">
              <FaRobot className="text-4xl text-blue-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Intelligent Chatbots
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
              More than just a chat window. A fully integrated AI agent that understands your business,
              protects your data, and delights your customers.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300
                ${activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                }
              `}
            >
              {tab.icon}
              <span>{tab.label}</span>
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
            {activeTab === "features" && (
              <div className="grid md:grid-cols-2 gap-8">
                {features.map((feat, i) => (
                  <GlassCard key={i} className="p-8 hover:bg-white/5 transition-colors">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                      <FaCheckCircle className="text-blue-500" />
                      {feat.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{feat.desc}</p>
                  </GlassCard>
                ))}
              </div>
            )}

            {activeTab === "integrations" && (
              <GlassCard className="p-12 text-center">
                <h2 className="text-2xl font-bold text-white mb-8">Connects with your favorite tools</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                  {integrations.map((tool, i) => (
                    <div key={i} className="flex flex-col items-center gap-4 group">
                      <div className="w-20 h-20 rounded-2xl bg-white p-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain" />
                      </div>
                      <span className="text-gray-400 font-medium group-hover:text-white">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            )}

            {activeTab === "security" && (
              <div className="grid md:grid-cols-2 gap-8">
                <GlassCard className="p-8 border-l-4 border-l-green-500">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <FaLock className="text-green-500" /> Enterprise Grade
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-gray-300">
                      <FaCheckCircle className="text-green-500 mt-1" />
                      <span>SOC2 Type II Compliant Infrastructure</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <FaCheckCircle className="text-green-500 mt-1" />
                      <span>End-to-End Encryption (AES-256)</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <FaCheckCircle className="text-green-500 mt-1" />
                      <span>PII Redaction & Data Masking</span>
                    </li>
                  </ul>
                </GlassCard>
                <GlassCard className="p-8 border-l-4 border-l-purple-500">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <FaShieldAlt className="text-purple-500" /> Data Sovereignty
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    We offer flexible deployment options to meet your regulatory needs.
                    Choose between our secure multi-tenant cloud, dedicated private cloud,
                    or fully air-gapped on-premise installation.
                  </p>
                  <div className="flex gap-4">
                    <span className="px-3 py-1 rounded bg-purple-500/20 text-purple-300 text-sm font-bold">GDPR</span>
                    <span className="px-3 py-1 rounded bg-purple-500/20 text-purple-300 text-sm font-bold">HIPAA</span>
                    <span className="px-3 py-1 rounded bg-purple-500/20 text-purple-300 text-sm font-bold">CCPA</span>
                  </div>
                </GlassCard>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-bold text-lg hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20"
          >
            <FaComments /> Start Your Free Pilot
          </a>
        </div>
      </div>
    </section>
  );
};

export default ChatbotDetails;
