import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHeartbeat, FaShoppingCart, FaLandmark, FaIndustry, FaFilm,
  FaChartLine, FaShieldAlt, FaRobot, FaCloud, FaCheck, FaArrowRight
} from "react-icons/fa";
import GlassCard from "../../components/common/GlassCard";
import { Link } from "react-router-dom";

const industries = [
  {
    id: "healthcare",
    label: "Healthcare",
    icon: <FaHeartbeat />,
    tagline: "Saving Lives with Data",
    heroDesc: "Accelerate medical research and improve patient outcomes with HIPAA-compliant AI and secure cloud infrastructure.",
    challenges: [
      { title: "Data Silos", desc: "Patient data is trapped in incompatible legacy systems." },
      { title: "Regulatory Burden", desc: "Navigating complex HIPAA and FDA compliance requirements." },
      { title: "Resource Burnout", desc: "Clinicians spend 40% of their time on documentation." }
    ],
    solutions: [
      { title: "Medical NLP", desc: "AI that structures unstructured clinical notes automatically." },
      { title: "Predictive Diagnostics", desc: "ML models that identify at-risk patients early." },
      { title: "Interoperability Layer", desc: "Secure FHIR-based APIs connecting all your systems." }
    ],
    impact: {
      stat: "40%",
      metric: "Reduction in Admin Time",
      desc: "For a major hospital network using our AI documentation assistant."
    }
  },
  {
    id: "finance",
    label: "Finance",
    icon: <FaLandmark />,
    tagline: "Trust at the Speed of Light",
    heroDesc: "Detect fraud, automate compliance, and personalize banking experiences with millisecond-latency AI.",
    challenges: [
      { title: "Sophisticated Fraud", desc: "Attacks are becoming AI-driven and harder to detect." },
      { title: "Legacy Core Banking", desc: "Mainframes slowing down digital transformation." },
      { title: "Personalization at Scale", desc: "Customers expect Netflix-like recommendations for their money." }
    ],
    solutions: [
      { title: "Real-Time Fraud AI", desc: "Deep learning models that score transactions in <10ms." },
      { title: "Automated KYC/AML", desc: "Computer vision for instant identity verification." },
      { title: "Algorithmic Trading", desc: "Low-latency infrastructure for high-frequency strategies." }
    ],
    impact: {
      stat: "$20M",
      metric: "Fraud Prevented",
      desc: "In the first year for a mid-sized fintech client."
    }
  },
  {
    id: "retail",
    label: "Retail",
    icon: <FaShoppingCart />,
    tagline: "Reimagining the Shopping Experience",
    heroDesc: "Unify online and offline channels with AI-driven inventory management and hyper-personalized marketing.",
    challenges: [
      { title: "Inventory Chaos", desc: "Stockouts and overstocking costing millions annually." },
      { title: "Customer Churn", desc: "Lack of loyalty due to generic shopping experiences." },
      { title: "Supply Chain Shocks", desc: "Unpredictable delays disrupting fulfillment." }
    ],
    solutions: [
      { title: "Demand Forecasting", desc: "AI that predicts sales trends with 95% accuracy." },
      { title: "Visual Search", desc: "Allow customers to shop by uploading photos." },
      { title: "Dynamic Pricing", desc: "Real-time price optimization based on demand." }
    ],
    impact: {
      stat: "25%",
      metric: "Increase in Conversion",
      desc: "After implementing our personalized recommendation engine."
    }
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
    icon: <FaIndustry />,
    tagline: "Industry 4.0 is Here",
    heroDesc: "Minimize downtime and optimize production lines with IoT digital twins and predictive maintenance.",
    challenges: [
      { title: "Unplanned Downtime", desc: "Equipment failure halts production and kills margins." },
      { title: "Quality Control", desc: "Manual inspection is slow and error-prone." },
      { title: "Supply Chain Visibility", desc: "Blind spots in raw material tracking." }
    ],
    solutions: [
      { title: "Predictive Maintenance", desc: "Sensors that alert you days before a machine fails." },
      { title: "Computer Vision QC", desc: "Cameras that spot defects faster than the human eye." },
      { title: "Digital Twins", desc: "Simulate production changes before implementing them." }
    ],
    impact: {
      stat: "300%",
      metric: "ROI in 6 Months",
      desc: "Achieved by reducing scrap rate and downtime."
    }
  },
  {
    id: "media",
    label: "Media",
    icon: <FaFilm />,
    tagline: "Content Intelligence",
    heroDesc: "Automate content creation, tagging, and distribution with generative AI and scalable video pipelines.",
    challenges: [
      { title: "Content Explosion", desc: "Too much footage, not enough editors." },
      { title: "Global Reach", desc: "Localization and dubbing is slow and expensive." },
      { title: "Monetization", desc: "Matching the right ad to the right viewer." }
    ],
    solutions: [
      { title: "AI Dubbing", desc: "Instant voice cloning and lip-sync in 50+ languages." },
      { title: "Smart Metadata", desc: "Auto-tagging actors, scenes, and emotions." },
      { title: "Generative Video", desc: "Create B-roll and animations from text prompts." }
    ],
    impact: {
      stat: "10x",
      metric: "Faster Production",
      desc: "For a news agency automating social media clips."
    }
  }
];

const Industries = () => {
  const [activeTab, setActiveTab] = useState("healthcare");

  const activeData = industries.find(i => i.id === activeTab);

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
              Industries We Transform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
              Deep domain expertise meets cutting-edge technology.
              We understand the unique challenges of your sector.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {industries.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setActiveTab(ind.id)}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300
                ${activeTab === ind.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                }
              `}
            >
              {ind.icon}
              <span>{ind.label}</span>
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
            {/* Industry Hero */}
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-sm font-bold mb-4 border border-blue-500/30">
                {activeData.label} Solutions
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {activeData.tagline}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {activeData.heroDesc}
              </p>
            </div>

            {/* Challenges & Solutions Grid */}
            <div className="grid lg:grid-cols-2 gap-12 mb-20">
              {/* Challenges */}
              <GlassCard className="p-8 border-l-4 border-l-red-500">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-red-500/20 text-red-500"><FaShieldAlt /></span>
                  Key Challenges
                </h3>
                <div className="space-y-6">
                  {activeData.challenges.map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 font-bold text-sm flex-shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="text-white font-bold mb-1">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Solutions */}
              <GlassCard className="p-8 border-l-4 border-l-green-500">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-green-500/20 text-green-500"><FaRobot /></span>
                  Our Solutions
                </h3>
                <div className="space-y-6">
                  {activeData.solutions.map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 flex-shrink-0">
                        <FaCheck />
                      </div>
                      <div>
                        <h4 className="text-white font-bold mb-1">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>

            {/* Impact Section */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-900 to-purple-900 p-12 text-center">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-8 opacity-80">REAL WORLD IMPACT</h3>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                  <div>
                    <div className="text-6xl md:text-8xl font-extrabold text-white mb-2 tracking-tight">
                      {activeData.impact.stat}
                    </div>
                    <div className="text-xl text-blue-200 font-bold uppercase tracking-widest">
                      {activeData.impact.metric}
                    </div>
                  </div>
                  <div className="h-24 w-px bg-white/20 hidden md:block"></div>
                  <p className="text-xl text-white/90 max-w-md text-left italic">
                    "{activeData.impact.desc}"
                  </p>
                </div>
                <div className="mt-12">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-blue-900 font-bold text-lg hover:scale-105 transition-transform shadow-xl"
                  >
                    Schedule a Consultation <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Industries;
