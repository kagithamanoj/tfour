import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaServer, FaCloud, FaMicrochip, FaShieldAlt, FaNetworkWired, FaCheck, FaTimes } from "react-icons/fa";
import GlassCard from "../../components/common/GlassCard";

const tabs = [
  { id: "models", label: "Deployment Models", icon: <FaNetworkWired /> },
  { id: "hardware", label: "Hardware & Performance", icon: <FaMicrochip /> },
  { id: "compliance", label: "Compliance", icon: <FaShieldAlt /> },
];

const PrivateLLM = () => {
  const [activeTab, setActiveTab] = useState("models");

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
            <div className="inline-block mb-6 p-4 rounded-full bg-red-500/10 border border-red-500/20">
              <FaServer className="text-4xl text-red-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Private LLM Cloud
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
              Run open-source models (Llama 3, Mistral) on your own infrastructure.
              Total data sovereignty, zero data leakage, and enterprise-grade performance.
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
                  ? "bg-red-600 text-white shadow-lg shadow-red-500/25 scale-105"
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
            {activeTab === "models" && (
              <GlassCard className="p-8">
                <h3 className="text-2xl font-bold text-center text-white mb-8">Deployment Comparison</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="p-4 text-gray-400 font-medium">Feature</th>
                        <th className="p-4 text-blue-400 font-bold">Public API (OpenAI)</th>
                        <th className="p-4 text-red-400 font-bold bg-red-500/10 rounded-t-lg">Tfour Private Cloud</th>
                        <th className="p-4 text-gray-400 font-bold">On-Premise (Air-Gapped)</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-white/5">
                        <td className="p-4 font-bold">Data Privacy</td>
                        <td className="p-4 text-yellow-500">Shared / Training</td>
                        <td className="p-4 bg-red-500/5 text-green-400 font-bold">Isolated / Private</td>
                        <td className="p-4 text-green-400 font-bold">100% Offline</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-4 font-bold">Cost at Scale</td>
                        <td className="p-4 text-red-400">High ($$$)</td>
                        <td className="p-4 bg-red-500/5 text-green-400 font-bold">Low (Fixed)</td>
                        <td className="p-4 text-yellow-500">Medium (CapEx)</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-4 font-bold">Latency</td>
                        <td className="p-4 text-yellow-500">Variable</td>
                        <td className="p-4 bg-red-500/5 text-green-400 font-bold">Ultra-Low</td>
                        <td className="p-4 text-green-400 font-bold">Ultra-Low</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold">Customization</td>
                        <td className="p-4 text-red-400">Limited</td>
                        <td className="p-4 bg-red-500/5 text-green-400 font-bold">Full Fine-Tuning</td>
                        <td className="p-4 text-green-400 font-bold">Full Fine-Tuning</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </GlassCard>
            )}

            {activeTab === "hardware" && (
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Optimized Inference</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    We don't just deploy models; we optimize them. Using techniques like quantization (4-bit/8-bit),
                    Flash Attention, and vLLM, we squeeze maximum performance out of every GPU.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-gray-300">
                      <div className="p-2 rounded bg-green-500/20 text-green-400"><FaMicrochip /></div>
                      <div>
                        <strong className="text-white block">NVIDIA H100/A100 Support</strong>
                        <span className="text-sm">Native support for enterprise-grade clusters.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <div className="p-2 rounded bg-blue-500/20 text-blue-400"><FaCloud /></div>
                      <div>
                        <strong className="text-white block">Serverless Autoscaling</strong>
                        <span className="text-sm">Scale to zero when idle to save costs.</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <GlassCard className="p-8 text-center">
                  <div className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-2">
                    300%
                  </div>
                  <div className="text-gray-400 uppercase tracking-widest mb-8">Faster Inference</div>
                  <div className="h-4 bg-gray-700 rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-red-500 w-[90%]"></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Tfour Optimized</span>
                    <span>Standard HuggingFace</span>
                  </div>
                </GlassCard>
              </div>
            )}

            {activeTab === "compliance" && (
              <div className="grid md:grid-cols-3 gap-8">
                <GlassCard className="p-8 text-center border-t-4 border-t-blue-500">
                  <h3 className="text-xl font-bold text-white mb-4">SOC2 Type II</h3>
                  <p className="text-gray-400 text-sm">
                    Rigorous security controls and annual audits to ensure your infrastructure is bulletproof.
                  </p>
                </GlassCard>
                <GlassCard className="p-8 text-center border-t-4 border-t-green-500">
                  <h3 className="text-xl font-bold text-white mb-4">HIPAA Ready</h3>
                  <p className="text-gray-400 text-sm">
                    BAA support for healthcare clients processing PHI with private models.
                  </p>
                </GlassCard>
                <GlassCard className="p-8 text-center border-t-4 border-t-purple-500">
                  <h3 className="text-xl font-bold text-white mb-4">GDPR / CCPA</h3>
                  <p className="text-gray-400 text-sm">
                    Full data residency control. You decide exactly where your data lives and who sees it.
                  </p>
                </GlassCard>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PrivateLLM;
