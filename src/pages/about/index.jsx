import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFlagUsa, FaHandshake, FaLightbulb, FaShieldAlt, FaUsers, FaRocket,
  FaHistory, FaAward, FaQuoteLeft, FaLinkedin, FaTwitter
} from "react-icons/fa";
import GlassCard from "../../components/common/GlassCard";

const tabs = [
  { id: "mission", label: "Mission & Values", icon: <FaFlagUsa /> },
  { id: "leadership", label: "Leadership", icon: <FaUsers /> },
  { id: "story", label: "Our Story", icon: <FaHistory /> },
  { id: "culture", label: "Culture", icon: <FaRocket /> },
];

const values = [
  { icon: <FaShieldAlt className="text-blue-400" />, title: "Integrity First", desc: "We operate with radical transparency. Trust is our most valuable currency." },
  { icon: <FaLightbulb className="text-yellow-400" />, title: "American Innovation", desc: "We don't just follow trends; we set them. Engineered proudly in the USA." },
  { icon: <FaHandshake className="text-green-400" />, title: "Client Obsession", desc: "Your success is our success. We are partners, not just vendors." },
  { icon: <FaAward className="text-purple-400" />, title: "Excellence", desc: "Good enough is not enough. We aim for perfection in every line of code." },
];

const timeline = [
  { year: "2020", title: "The Inception", desc: "Tfour Technologies was founded with a single mission: to bridge the gap between complex AI research and practical enterprise application." },
  { year: "2021", title: "Rapid Growth", desc: "Expanded our team to 50+ US-based engineers and secured our first Fortune 500 partnership." },
  { year: "2022", title: "Cloud Mastery", desc: "Achieved Advanced Tier Partner status with AWS and Azure, solidifying our infrastructure expertise." },
  { year: "2024", title: "The AI Revolution", desc: "Launched our proprietary 'Code Agents' and 'Voice Studio' platforms, redefining what's possible with Generative AI." },
];

const leaders = [
  {
    name: "Adam",
    role: "Founder & CEO",
    bio: "A visionary technologist with over 15 years of experience in AI and Cloud Architecture. Manoj leads Tfour with a passion for American engineering excellence.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Sarah Jenkins",
    role: "Chief Technology Officer",
    bio: "Former VP of Engineering at a major fintech. Sarah ensures our systems are secure, scalable, and built to last.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "David Chen",
    role: "Head of AI Research",
    bio: "PhD in Computer Science from MIT. David leads our R&D labs, pushing the boundaries of LLMs and computer vision.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  }
];

const About = () => {
  const [activeTab, setActiveTab] = useState("mission");

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
            {/* USA Badge */}
            <div className="inline-block mb-8 transform hover:scale-105 transition-transform duration-300">
              <span className="
                flex items-center gap-3 px-6 py-3 rounded-full 
                bg-gradient-to-r from-blue-900/80 to-red-900/80 
                border-2 border-white/10 shadow-xl backdrop-blur-md
              ">
                <span className="text-2xl">🇺🇸</span>
                <span className="font-bold text-white tracking-wider uppercase text-sm">Proudly Engineered in the USA</span>
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Building the Future
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
              We are a next-generation technology partner dedicated to transforming industries through secure, scalable, and intelligent software.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
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
            {activeTab === "mission" && (
              <div className="space-y-12">
                <div className="text-center max-w-4xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    To advance America’s innovation edge by democratizing advanced AI and cloud technology.
                    We believe that every business, regardless of size, deserves access to world-class engineering
                    that is secure, ethical, and impactful.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {values.map((val, i) => (
                    <GlassCard key={i} className="p-8 flex items-start gap-6 hover:bg-white/5 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl flex-shrink-0">
                        {val.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{val.title}</h3>
                        <p className="text-gray-400">{val.desc}</p>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "leadership" && (
              <div className="grid md:grid-cols-3 gap-8">
                {leaders.map((leader, i) => (
                  <GlassCard key={i} className="overflow-hidden group">
                    <div className="h-64 overflow-hidden relative">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80"></div>
                      <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-2xl font-bold text-white">{leader.name}</h3>
                        <p className="text-blue-400 font-bold">{leader.role}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-300 text-sm leading-relaxed mb-6">
                        {leader.bio}
                      </p>
                      <div className="flex gap-4">
                        <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><FaLinkedin size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><FaTwitter size={20} /></a>
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            )}

            {activeTab === "story" && (
              <div className="max-w-4xl mx-auto">
                <div className="relative border-l-2 border-blue-500/30 ml-4 md:ml-0 space-y-12">
                  {timeline.map((item, i) => (
                    <div key={i} className="relative pl-12 md:pl-0">
                      {/* Dot */}
                      <div className="absolute left-[-9px] top-0 w-5 h-5 rounded-full bg-blue-500 border-4 border-slate-900 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>

                      <div className={`md:flex items-start justify-between gap-8 ${i % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                        <div className="hidden md:block w-5/12"></div> {/* Spacer */}
                        <GlassCard className="w-full md:w-5/12 p-6 relative hover:translate-x-2 transition-transform">
                          <span className="text-5xl font-bold text-white/5 absolute top-2 right-4">{item.year}</span>
                          <h3 className="text-xl font-bold text-blue-400 mb-2">{item.year}</h3>
                          <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                          <p className="text-gray-400 text-sm">{item.desc}</p>
                        </GlassCard>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "culture" && (
              <div className="text-center max-w-4xl mx-auto">
                <GlassCard className="p-12 mb-12 relative overflow-hidden">
                  <FaQuoteLeft className="text-6xl text-white/5 absolute top-8 left-8" />
                  <h2 className="text-3xl font-bold text-white mb-8 relative z-10">
                    "We build technology for people, by people."
                  </h2>
                  <p className="text-xl text-gray-300 leading-relaxed mb-8 relative z-10">
                    Our culture is defined by curiosity, collaboration, and a relentless drive to solve hard problems.
                    We believe in a remote-first world where talent knows no borders (within the US), and where
                    work-life balance is not just a buzzword, but a requirement for high performance.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300">Remote-First</span>
                    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300">Continuous Learning</span>
                    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300">Radical Candor</span>
                    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300">Diversity & Inclusion</span>
                  </div>
                </GlassCard>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=500&auto=format&fit=crop" className="rounded-2xl opacity-60 hover:opacity-100 transition-opacity duration-500 h-48 w-full object-cover" alt="Team 1" />
                  <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=500&auto=format&fit=crop" className="rounded-2xl opacity-60 hover:opacity-100 transition-opacity duration-500 h-48 w-full object-cover" alt="Team 2" />
                  <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=500&auto=format&fit=crop" className="rounded-2xl opacity-60 hover:opacity-100 transition-opacity duration-500 h-48 w-full object-cover" alt="Team 3" />
                  <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=500&auto=format&fit=crop" className="rounded-2xl opacity-60 hover:opacity-100 transition-opacity duration-500 h-48 w-full object-cover" alt="Team 4" />
                </div>
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default About;
