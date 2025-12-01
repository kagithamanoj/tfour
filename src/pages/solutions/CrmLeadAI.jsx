import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFunnelDollar, FaMagic, FaDatabase, FaChartBar, FaCheck, FaTimes } from "react-icons/fa";
import GlassCard from "../../components/common/GlassCard";

const tabs = [
  { id: "scoring", label: "Lead Scoring", icon: <FaChartBar /> },
  { id: "enrichment", label: "Data Enrichment", icon: <FaDatabase /> },
  { id: "automation", label: "Automation", icon: <FaMagic /> },
];

const CrmLeadAI = () => {
  const [activeTab, setActiveTab] = useState("scoring");

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
            <div className="inline-block mb-6 p-4 rounded-full bg-green-500/10 border border-green-500/20">
              <FaFunnelDollar className="text-4xl text-green-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              CRM & Lead AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
              Stop chasing bad leads. Use predictive AI to score, enrich, and prioritize
              your pipeline so your sales team focuses on closing.
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
                  ? "bg-green-600 text-white shadow-lg shadow-green-500/25 scale-105"
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
            {activeTab === "scoring" && (
              <GlassCard className="p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Predictive Intent Scoring</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Traditional lead scoring uses static rules (e.g., "clicked email = +5 points").
                      Our AI analyzes thousands of signals—web activity, firmographics, and historical data—to
                      predict <strong>actual conversion probability</strong>.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-gray-300">
                        <FaCheck className="text-green-500" /> <span>Identify "Ready to Buy" prospects instantly</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-300">
                        <FaCheck className="text-green-500" /> <span>Reduce churn by flagging at-risk accounts</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-300">
                        <FaCheck className="text-green-500" /> <span>Dynamic re-scoring based on real-time behavior</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-black/30 rounded-2xl p-6 border border-white/10">
                    {/* Simulated Score Card */}
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">JD</div>
                        <div>
                          <div className="text-white font-bold">John Doe</div>
                          <div className="text-xs text-gray-400">CTO @ TechCorp</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-400">94/100</div>
                        <div className="text-xs text-gray-500 uppercase">Conversion Probability</div>
                      </div>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden mb-4">
                      <div className="h-full bg-green-500 w-[94%]"></div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between text-gray-400">
                        <span>Visited Pricing Page</span>
                        <span className="text-green-400">+15</span>
                      </div>
                      <div className="flex justify-between text-gray-400">
                        <span>Downloaded Whitepaper</span>
                        <span className="text-green-400">+10</span>
                      </div>
                      <div className="flex justify-between text-gray-400">
                        <span>Company Size &gt; 500</span>
                        <span className="text-green-400">+20</span>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            )}

            {activeTab === "enrichment" && (
              <GlassCard className="p-8">
                <h3 className="text-2xl font-bold text-center text-white mb-8">The Data Advantage</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="p-4 text-gray-400 font-medium">Feature</th>
                        <th className="p-4 text-gray-500 font-medium">Standard CRM</th>
                        <th className="p-4 text-green-400 font-bold bg-green-500/10 rounded-t-lg">Tfour AI Enrichment</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-white/5">
                        <td className="p-4 font-bold">Contact Info</td>
                        <td className="p-4 flex items-center gap-2"><FaTimes className="text-red-500" /> Often outdated</td>
                        <td className="p-4 bg-green-500/5 flex items-center gap-2"><FaCheck className="text-green-500" /> Real-time verification</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-4 font-bold">Tech Stack</td>
                        <td className="p-4 flex items-center gap-2"><FaTimes className="text-red-500" /> Manual entry</td>
                        <td className="p-4 bg-green-500/5 flex items-center gap-2"><FaCheck className="text-green-500" /> Auto-detected (e.g., uses AWS)</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-4 font-bold">News & Events</td>
                        <td className="p-4 flex items-center gap-2"><FaTimes className="text-red-500" /> None</td>
                        <td className="p-4 bg-green-500/5 flex items-center gap-2"><FaCheck className="text-green-500" /> Funding, Hiring, M&A Alerts</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold">Social Signals</td>
                        <td className="p-4 flex items-center gap-2"><FaTimes className="text-red-500" /> Disconnected</td>
                        <td className="p-4 bg-green-500/5 flex items-center gap-2"><FaCheck className="text-green-500" /> LinkedIn/Twitter Insights</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </GlassCard>
            )}

            {activeTab === "automation" && (
              <div className="grid md:grid-cols-3 gap-8">
                <GlassCard className="p-8 text-center hover:-translate-y-2 transition-transform">
                  <div className="text-4xl mb-4">📧</div>
                  <h3 className="text-xl font-bold text-white mb-2">Smart Outreach</h3>
                  <p className="text-gray-400">
                    Generate personalized emails based on prospect news and interests, not generic templates.
                  </p>
                </GlassCard>
                <GlassCard className="p-8 text-center hover:-translate-y-2 transition-transform">
                  <div className="text-4xl mb-4">🔄</div>
                  <h3 className="text-xl font-bold text-white mb-2">Pipeline Hygiene</h3>
                  <p className="text-gray-400">
                    Automatically update deal stages, log meetings, and clean up duplicate contacts.
                  </p>
                </GlassCard>
                <GlassCard className="p-8 text-center hover:-translate-y-2 transition-transform">
                  <div className="text-4xl mb-4">🔔</div>
                  <h3 className="text-xl font-bold text-white mb-2">Instant Alerts</h3>
                  <p className="text-gray-400">
                    Notify reps via Slack/Teams the moment a high-value lead shows buying intent.
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

export default CrmLeadAI;
