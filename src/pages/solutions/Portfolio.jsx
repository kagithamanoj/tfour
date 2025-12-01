import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFilter } from "react-icons/fa";
import GlassCard from "../../components/common/GlassCard";

const filters = ["All", "Hospitality", "Fintech", "Sports", "Retail"];

const projects = [
  {
    id: 1,
    name: "OrderlyAI",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=600&auto=format&fit=crop",
    desc: "Automated POS and customer engagement platform for restaurants.",
    metrics: { retention: "+25%", accuracy: "99.9%" },
    tech: ["React", "Node.js", "OpenAI"]
  },
  {
    id: 2,
    name: "GridironIQ",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&w=600&auto=format&fit=crop",
    desc: "Real-time football athlete performance and fan engagement hub.",
    metrics: { engagement: "2x", reporting: "-70%" },
    tech: ["Python", "TensorFlow", "AWS"]
  },
  {
    id: 3,
    name: "FinFlow",
    category: "Fintech",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    desc: "Automated fraud detection and workflow management for banking.",
    metrics: { fraudBlocked: "$20M", speed: "<10ms" },
    tech: ["Java", "Kafka", "ML"]
  },
  {
    id: 4,
    name: "ShopSmart",
    category: "Retail",
    image: "https://images.unsplash.com/photo-1472851294608-415522f96319?q=80&w=600&auto=format&fit=crop",
    desc: "AI-driven inventory management and personalized recommendations.",
    metrics: { sales: "+15%", stockouts: "-40%" },
    tech: ["Next.js", "Shopify API", "PyTorch"]
  },
  {
    id: 5,
    name: "SecureVault",
    category: "Fintech",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop",
    desc: "Blockchain-based document verification system for loan processing.",
    metrics: { processing: "-3 days", security: "100%" },
    tech: ["Solidity", "Ethereum", "React"]
  },
  {
    id: 6,
    name: "FanConnect",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=600&auto=format&fit=crop",
    desc: "AR experience for stadium attendees with live stats overlay.",
    metrics: { downloads: "50k+", rating: "4.9" },
    tech: ["Unity", "ARKit", "Firebase"]
  }
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

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
              Our Work
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
              We don't just build software; we build success stories.
              Explore how we've transformed businesses across industries.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`
                px-6 py-2 rounded-full font-bold transition-all duration-300 border border-transparent
                ${activeFilter === filter
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/10"
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard className="h-full flex flex-col overflow-hidden group hover:shadow-blue-500/20 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-blue-600/80 text-white text-xs font-bold backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-6 flex-grow">
                      {project.desc}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6 p-4 rounded-xl bg-white/5 border border-white/5">
                      {Object.entries(project.metrics).map(([key, val]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-blue-400">{val}</div>
                          <div className="text-[10px] uppercase tracking-wider text-gray-500">{key}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
