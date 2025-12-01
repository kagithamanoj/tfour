import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaShieldAlt, FaGlobeAmericas, FaArrowRight, FaChartLine, FaUsers, FaClock } from "react-icons/fa";
import ModernHero from "../../components/sections/ModernHero";
import TechStackBanner from "../../components/sections/TechStackBanner";
import ServiceBento from "../../components/sections/ServiceBento";
import Testimonials from "../../components/sections/Testimonials";
import Newsletter from "../../components/sections/Newsletter";
import GlassCard from "../../components/common/GlassCard";
import { Link } from "react-router-dom";

// Stats Data
const stats = [
  { label: "Revenue Generated", value: "$500M+", icon: <FaChartLine /> },
  { label: "Active Users", value: "10M+", icon: <FaUsers /> },
  { label: "Uptime Guarantee", value: "99.99%", icon: <FaShieldAlt /> },
  { label: "Support Response", value: "<15min", icon: <FaClock /> },
];

// Why Us Data
const features = [
  {
    title: "Rapid Deployment",
    desc: "Launch enterprise-grade AI solutions in weeks, not months, with our pre-built modules.",
    icon: <FaRocket className="text-blue-400" />
  },
  {
    title: "Bank-Grade Security",
    desc: "SOC2 Type II certified infrastructure ensuring your data remains private and protected.",
    icon: <FaShieldAlt className="text-purple-400" />
  },
  {
    title: "Global Scalability",
    desc: "Distributed edge network ensuring low-latency performance anywhere in the world.",
    icon: <FaGlobeAmericas className="text-pink-400" />
  }
];

const Home = () => (
  <main className="min-h-screen flex flex-col text-[var(--color-text)] bg-[#0F172A]">
    {/* 1. Hero Section */}
    <ModernHero />

    {/* 2. Tech Stack Banner */}
    <TechStackBanner />

    {/* 3. Stats Section (New) */}
    <section className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-900/10 skew-y-3 transform origin-top-left scale-110"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-5xl font-extrabold text-white mb-2 flex justify-center items-center gap-2 md:gap-3">
                <span className="text-2xl md:text-3xl opacity-50">{stat.icon}</span>
                {stat.value}
              </div>
              <div className="text-gray-400 font-medium uppercase tracking-wider text-xs md:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* 4. Service Bento Grid */}
    <ServiceBento />

    {/* 5. Why Choose Us (New) */}
    <section className="py-20 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6 text-white">
            Why Leading Enterprises <span className="text-blue-400">Choose Tfour</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            We combine cutting-edge innovation with battle-tested reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <GlassCard className="h-full p-6 md:p-8 hover:bg-white/10 transition-colors duration-300">
                <div className="bg-white/5 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-2xl md:text-3xl mb-4 md:mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {feature.desc}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* 6. Testimonials */}
    <Testimonials />

    {/* 7. Final CTA (New) */}
    <section className="py-20 md:py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-purple-900/40"></div>
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-7xl font-extrabold text-white mb-6 md:mb-8">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">Transform?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto">
            Join the forward-thinking companies building the future with Tfour Technologies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <Link
              to="/contact"
              className="px-8 py-4 md:px-10 md:py-4 rounded-full bg-white text-blue-900 font-bold text-lg md:text-xl hover:scale-105 transition-transform shadow-xl flex items-center justify-center gap-2"
            >
              Get Started Now <FaArrowRight />
            </Link>
            <Link
              to="/solutions/ai-demos"
              className="px-8 py-4 md:px-10 md:py-4 rounded-full bg-white/10 text-white border border-white/20 font-bold text-lg md:text-xl hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
            >
              View Demos
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* 8. Newsletter (Existing) */}
    <section className="py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <Newsletter />
      </div>
    </section>
  </main>
);

export default Home;
