import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import GlassCard from "../common/GlassCard";

const testimonials = [
  {
    quote: "We reduced our customer support response times by 85% within two weeks of deploying Tfour's conversational agents. The context awareness is simply indistinguishable from human agents.",
    author: "Sarah Jenkins",
    role: "CTO",
    company: "Nexus Financial Group",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "The predictive supply chain model saved us an estimated $4.2M in potential disruption costs last quarter alone. It's not just software; it's a strategic advantage.",
    author: "Marcus Thorne",
    role: "VP of Operations",
    company: "Global Logistics Partners",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "Implementing their private LLM infrastructure allowed us to leverage generative AI while keeping our proprietary legal data completely off the public cloud. Compliance solved.",
    author: "Elena Rodriguez",
    role: "General Counsel",
    company: "Sterling & Associates",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Trusted by Industry Leaders
          </motion.h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. See what our partners have to say.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <GlassCard className="h-full flex flex-col p-8 hover:bg-white/10 transition-colors duration-300">
                <FaQuoteLeft className="text-4xl text-blue-500/30 mb-6" />

                <p className="text-gray-300 text-lg leading-relaxed mb-8 flex-grow italic">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={t.image}
                    alt={t.author}
                    className="w-12 h-12 rounded-full border-2 border-blue-500/30 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-white">{t.author}</h4>
                    <p className="text-sm text-blue-400">{t.role}, {t.company}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
