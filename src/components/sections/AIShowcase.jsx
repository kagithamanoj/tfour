import React from "react";
import { motion } from "framer-motion";
import { FaRobot, FaChartLine, FaFileAlt, FaArrowRight, FaPlay } from "react-icons/fa";
import GlassCard from "../common/GlassCard";

const showcases = [
  {
    id: 1,
    title: "Intelligent Support Chatbot",
    description: "A custom-trained NLP model that resolves over 80% of customer queries instantly, understands conversational context, and seamlessly hands off complex issues.",
    tags: ["NLP", "Customer Support", "Automation"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=600&auto=format&fit=crop",
    icon: <FaRobot />,
    color: "text-blue-400"
  },
  {
    id: 2,
    title: "Predictive Sales Analytics",
    description: "Machine learning dashboard that analyzes sales data and CRM activity to forecast revenue with 95% accuracy.",
    tags: ["ML", "Data Viz", "Salesforce"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    icon: <FaChartLine />,
    color: "text-green-400"
  },
  {
    id: 3,
    title: "Automated Document Summarizer",
    description: "AI-powered tool for legal teams that ingests contracts and reports, extracting key clauses and risks instantly.",
    tags: ["RAG", "Legal Tech", "Compliance"],
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=600&auto=format&fit=crop",
    icon: <FaFileAlt />,
    color: "text-purple-400"
  },
];

const ShowcaseCard = ({ item }) => (
  <GlassCard className="h-full flex flex-col overflow-hidden group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
    <div className="relative h-56 overflow-hidden">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-90"></div>

      {/* Floating Icon */}
      <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-2xl ${item.color} shadow-lg group-hover:scale-110 transition-transform`}>
        {item.icon}
      </div>

      {/* Demo Button Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
        <button className="px-6 py-3 rounded-full bg-white text-blue-900 font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <FaPlay className="text-sm" /> View Demo
        </button>
      </div>
    </div>

    <div className="p-8 flex-grow flex flex-col">
      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
        {item.title}
      </h3>
      <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
        {item.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-bold px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </GlassCard>
);

const AIShowcase = () => {
  return (
    <section className="py-24 px-4 text-[var(--color-text)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Our AI in Action
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Real-world applications solving real-world problems.
              See how our intelligent solutions drive business results.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcases.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ShowcaseCard item={item} />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="/solutions/portfolio" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold text-lg group transition-colors">
            View Full Portfolio <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AIShowcase;
