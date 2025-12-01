import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFileAlt, FaSearch, FaChartPie, FaCogs, FaArrowRight, FaCloudUploadAlt, FaBrain, FaFileContract, FaDatabase, FaChartLine } from "react-icons/fa";
import GlassCard from "../../components/common/GlassCard";

const tabs = [
  { id: "capabilities", label: "Capabilities", icon: <FaCogs /> },
  { id: "how-it-works", label: "How it Works", icon: <FaChartPie /> },
  { id: "roi", label: "ROI Calculator", icon: <FaChartLine /> },
];

const DocumentAI = () => {
  const [activeTab, setActiveTab] = useState("capabilities");

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
            <div className="inline-block mb-6 p-4 rounded-full bg-purple-500/10 border border-purple-500/20">
              <FaFileAlt className="text-4xl text-purple-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Document Intelligence
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
              Turn static PDFs, contracts, and forms into structured data.
              Automate processing, extract insights, and search millions of pages in milliseconds.
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
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25 scale-105"
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
            {activeTab === "capabilities" && (
              <div className="grid md:grid-cols-3 gap-8">
                <GlassCard className="p-8 text-center hover:-translate-y-2 transition-transform">
                  <div className="w-16 h-16 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center mb-6 text-blue-400 text-3xl">
                    <FaSearch />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Semantic Search</h3>
                  <p className="text-gray-400">
                    Find answers, not just keywords. Ask questions like "What is the termination clause?" and get precise citations.
                  </p>
                </GlassCard>
                <GlassCard className="p-8 text-center hover:-translate-y-2 transition-transform">
                  <div className="w-16 h-16 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center mb-6 text-purple-400 text-3xl">
                    <FaFileContract />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Data Extraction</h3>
                  <p className="text-gray-400">
                    Instantly pull structured data (names, dates, amounts) from invoices, receipts, and forms into your database.
                  </p>
                </GlassCard>
                <GlassCard className="p-8 text-center hover:-translate-y-2 transition-transform">
                  <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-6 text-green-400 text-3xl">
                    <FaBrain />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Auto-Summarization</h3>
                  <p className="text-gray-400">
                    Condense 100-page reports into executive summaries. Generate abstracts and key takeaways automatically.
                  </p>
                </GlassCard>
              </div>
            )}

            {activeTab === "how-it-works" && (
              <GlassCard className="p-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
                  {/* Step 1 */}
                  <div className="text-center flex-1 relative z-10">
                    <div className="w-20 h-20 mx-auto bg-slate-800 rounded-2xl border border-white/10 flex items-center justify-center text-3xl text-blue-400 mb-4 shadow-lg">
                      <FaCloudUploadAlt />
                    </div>
                    <h4 className="text-white font-bold mb-2">1. Upload</h4>
                    <p className="text-sm text-gray-400">Ingest PDFs, Images, or Word docs via API or Portal.</p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:block text-gray-600 text-2xl"><FaArrowRight /></div>

                  {/* Step 2 */}
                  <div className="text-center flex-1 relative z-10">
                    <div className="w-20 h-20 mx-auto bg-slate-800 rounded-2xl border border-white/10 flex items-center justify-center text-3xl text-purple-400 mb-4 shadow-lg animate-pulse">
                      <FaBrain />
                    </div>
                    <h4 className="text-white font-bold mb-2">2. Process</h4>
                    <p className="text-sm text-gray-400">OCR + NLP models analyze layout, text, and context.</p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:block text-gray-600 text-2xl"><FaArrowRight /></div>

                  {/* Step 3 */}
                  <div className="text-center flex-1 relative z-10">
                    <div className="w-20 h-20 mx-auto bg-slate-800 rounded-2xl border border-white/10 flex items-center justify-center text-3xl text-green-400 mb-4 shadow-lg">
                      <FaDatabase />
                    </div>
                    <h4 className="text-white font-bold mb-2">3. Action</h4>
                    <p className="text-sm text-gray-400">Export JSON, trigger workflows, or query via Chat.</p>
                  </div>
                </div>
              </GlassCard>
            )}

            {activeTab === "roi" && (
              <GlassCard className="p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Calculate Your Savings</h3>
                    <p className="text-gray-300 mb-8">
                      Manual document processing is slow and error-prone. See how much time and money you can save with Tfour Document AI.
                    </p>
                    <div className="space-y-6">
                      <div className="flex justify-between items-center p-4 rounded-lg bg-white/5">
                        <span className="text-gray-300">Manual Processing Cost</span>
                        <span className="text-red-400 font-bold">$15.00 / doc</span>
                      </div>
                      <div className="flex justify-between items-center p-4 rounded-lg bg-white/5 border border-green-500/30">
                        <span className="text-white">Tfour AI Cost</span>
                        <span className="text-green-400 font-bold">$0.10 / doc</span>
                      </div>
                      <div className="pt-4 border-t border-white/10">
                        <div className="flex justify-between items-center">
                          <span className="text-xl font-bold text-white">Total Savings</span>
                          <span className="text-3xl font-bold text-green-400">99.3%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-8 rounded-2xl border border-white/10 text-center">
                    <div className="text-6xl font-extrabold text-white mb-2">10x</div>
                    <div className="text-blue-300 font-bold uppercase tracking-widest mb-8">Faster Turnaround</div>
                    <p className="text-gray-300 italic">
                      "We reduced our contract review time from 3 days to 2 hours using Tfour's extraction engine."
                    </p>
                    <div className="mt-4 text-sm font-bold text-blue-400">— Legal Tech Client</div>
                  </div>
                </div>
              </GlassCard>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default DocumentAI;
