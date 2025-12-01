import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaStethoscope, FaChartLine, FaShoppingBag, FaIndustry,
  FaTruck, FaBalanceScale, FaArrowRight, FaTimes, FaCheckCircle
} from "react-icons/fa";
import GlassCard from "../../components/common/GlassCard";

const studies = [
  {
    id: "healthcare",
    industry: "Healthcare",
    icon: <FaStethoscope />,
    color: "text-red-400",
    bg: "bg-red-500/10",
    client: "Apex Health Systems",
    title: "AI-Powered Diagnostic Assistant for Radiology",
    summary: "Reduced diagnostic turnaround time by 60% using computer vision to triage critical scans.",
    challenge: "Radiologists were overwhelmed by a 40% year-over-year increase in imaging volume, leading to burnout and delayed diagnoses for critical conditions like intracranial hemorrhages.",
    solution: "We deployed a custom Computer Vision model trained on 500,000+ anonymized CT scans. The system automatically prioritizes scans with potential abnormalities, flagging them for immediate review.",
    techStack: ["TensorFlow", "Python", "AWS SageMaker", "DICOM Integration"],
    outcome: {
      metric: "60%",
      desc: "Faster Turnaround",
      details: "Critical cases are now reviewed within 10 minutes on average, down from 25 minutes."
    }
  },
  {
    id: "finance",
    industry: "FinTech",
    icon: <FaChartLine />,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    client: "GlobalTrust Bank",
    title: "Real-Time Transaction Fraud Detection",
    summary: "Saved $12M annually by preventing fraudulent transactions with 99.9% accuracy.",
    challenge: "Legacy rule-based fraud detection systems were generating too many false positives (blocking legitimate users) while missing sophisticated synthetic identity fraud attacks.",
    solution: "Implemented a real-time Anomaly Detection engine using unsupervised learning. The model analyzes 2,000+ data points per transaction in under 50ms to score risk probability.",
    techStack: ["Apache Flink", "Kafka", "Scikit-learn", "Redis"],
    outcome: {
      metric: "$12M",
      desc: "Annual Savings",
      details: "Fraud losses reduced by 85% within the first quarter of deployment."
    }
  },
  {
    id: "retail",
    industry: "Retail",
    icon: <FaShoppingBag />,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    client: "StyleMakers Inc.",
    title: "Hyper-Personalized Recommendation Engine",
    summary: "Increased average order value (AOV) by 22% through generative style recommendations.",
    challenge: "Customers were abandoning carts due to decision paralysis. Generic 'people also bought' widgets were ineffective and didn't account for individual style preferences.",
    solution: "Built a Generative AI recommendation system that creates complete 'outfit looks' based on a user's browsing history and purchase patterns, acting as a personal digital stylist.",
    techStack: ["OpenAI API", "Pinecone Vector DB", "React", "Node.js"],
    outcome: {
      metric: "22%",
      desc: "Increase in AOV",
      details: "Conversion rate for users interacting with the AI stylist increased by 3x."
    }
  },
  {
    id: "manufacturing",
    industry: "Manufacturing",
    icon: <FaIndustry />,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    client: "TechFab Industries",
    title: "Predictive Maintenance & Digital Twin",
    summary: "Reduced unplanned downtime by 45% using IoT sensor data and predictive modeling.",
    challenge: "Critical assembly line robots were failing unexpectedly, costing $50k per hour in lost production. Scheduled maintenance was inefficient and often unnecessary.",
    solution: "Developed a Digital Twin of the factory floor. IoT sensors feed real-time vibration and temperature data into an LSTM model that predicts component failure 48 hours in advance.",
    techStack: ["Azure IoT Hub", "Python", "React Three Fiber", "InfluxDB"],
    outcome: {
      metric: "45%",
      desc: "Less Downtime",
      details: "Maintenance costs dropped by 30% as teams shifted from reactive to proactive repairs."
    }
  },
  {
    id: "logistics",
    industry: "Logistics",
    icon: <FaTruck />,
    color: "text-green-400",
    bg: "bg-green-500/10",
    client: "SwiftCargo Logistics",
    title: "Autonomous Route Optimization",
    summary: "Cut fuel costs by 18% and delivery times by 15% with dynamic AI routing.",
    challenge: "Static route planning couldn't account for real-time traffic, weather, or last-minute order changes, leading to inefficient fleet utilization and missed delivery windows.",
    solution: "Created a dynamic routing algorithm using Reinforcement Learning. The system continuously re-optimizes routes in real-time based on live traffic data and new pickup requests.",
    techStack: ["Google OR-Tools", "Python", "Google Maps API", "Docker"],
    outcome: {
      metric: "18%",
      desc: "Fuel Savings",
      details: "On-time delivery rate improved to 98.5% across all operating regions."
    }
  },
  {
    id: "legal",
    industry: "Legal",
    icon: <FaBalanceScale />,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    client: "LexCorp Partners",
    title: "Automated Contract Analysis & Compliance",
    summary: "Reduced contract review time by 80% using NLP to extract key clauses and risks.",
    challenge: "Lawyers were spending thousands of billable hours manually reviewing standard NDAs and vendor contracts, creating a bottleneck for deal closures.",
    solution: "Deployed a Natural Language Processing (NLP) tool that automatically extracts key clauses, flags non-compliant terms, and suggests standard redlines based on company playbooks.",
    techStack: ["Hugging Face Transformers", "Spacy", "React", "FastAPI"],
    outcome: {
      metric: "80%",
      desc: "Time Saved",
      details: "Legal team can now process 5x more contracts per week with the same headcount."
    }
  }
];

const CaseStudies = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section className="min-h-screen w-full py-20 px-4 text-[var(--color-text)] bg-[#0F172A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Real Results. Real Impact.
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Discover how we've transformed enterprises across industries with cutting-edge AI and cloud solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studies.map((study) => (
            <motion.div
              key={study.id}
              layoutId={`card-${study.id}`}
              onClick={() => setSelectedId(study.id)}
              className="cursor-pointer group"
              whileHover={{ y: -5 }}
            >
              <GlassCard className="h-full p-8 hover:bg-white/10 transition-colors duration-300 relative overflow-hidden">
                <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity ${study.color} text-9xl -mr-8 -mt-8 rotate-12`}>
                  {study.icon}
                </div>

                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 ${study.bg} ${study.color}`}>
                  {study.icon}
                  {study.industry}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {study.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {study.summary}
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div>
                    <div className={`text-3xl font-bold ${study.color}`}>{study.outcome.metric}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">{study.outcome.desc}</div>
                  </div>
                  <div className="ml-auto">
                    <span className="flex items-center gap-2 text-sm font-bold text-white group-hover:translate-x-1 transition-transform">
                      Read Case Study <FaArrowRight className="text-xs" />
                    </span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
              />
              <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none p-4">
                {studies.map((study) => (
                  study.id === selectedId && (
                    <motion.div
                      key={study.id}
                      layoutId={`card-${study.id}`}
                      className="w-full max-w-4xl bg-[#1E293B] rounded-3xl overflow-hidden shadow-2xl pointer-events-auto border border-white/10 max-h-[90vh] overflow-y-auto"
                    >
                      <div className="relative">
                        {/* Header */}
                        <div className="p-8 md:p-12 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
                          <button
                            onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
                          >
                            <FaTimes />
                          </button>

                          <div className={`absolute -bottom-20 -right-20 text-[15rem] opacity-5 ${study.color}`}>
                            {study.icon}
                          </div>

                          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6 ${study.bg} ${study.color}`}>
                            {study.icon}
                            {study.industry}
                          </div>

                          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            {study.title}
                          </h2>
                          <div className="text-xl text-gray-400 font-medium">
                            Client: <span className="text-white">{study.client}</span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 md:p-12 grid md:grid-cols-3 gap-12 bg-[#0F172A]">
                          <div className="md:col-span-2 space-y-10">
                            <div>
                              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="w-1 h-6 bg-red-500 rounded-full"></span>
                                The Challenge
                              </h3>
                              <p className="text-gray-300 leading-relaxed text-lg">
                                {study.challenge}
                              </p>
                            </div>

                            <div>
                              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                                The Solution
                              </h3>
                              <p className="text-gray-300 leading-relaxed text-lg">
                                {study.solution}
                              </p>
                            </div>

                            <div>
                              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="w-1 h-6 bg-purple-500 rounded-full"></span>
                                Tech Stack
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {study.techStack.map(tech => (
                                  <span key={tech} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300 text-sm font-mono">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="space-y-8">
                            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Key Outcome</h4>
                              <div className={`text-5xl font-extrabold ${study.color} mb-2`}>
                                {study.outcome.metric}
                              </div>
                              <div className="text-lg font-bold text-white mb-2">
                                {study.outcome.desc}
                              </div>
                              <p className="text-sm text-gray-400 leading-relaxed">
                                {study.outcome.details}
                              </p>
                            </div>

                            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-6 border border-blue-500/30">
                              <h4 className="text-lg font-bold text-white mb-4">Ready to achieve similar results?</h4>
                              <a
                                href="/contact"
                                className="block w-full py-3 text-center rounded-xl font-bold bg-white text-black hover:bg-gray-200 transition-colors"
                              >
                                Contact Us
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                ))}
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CaseStudies;
