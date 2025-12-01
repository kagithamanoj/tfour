import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBrain, FaNetworkWired, FaRobot } from "react-icons/fa";
import GlassCard from "../common/GlassCard";

const ModernHero = () => {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20 text-white">
            {/* Animated Background Blobs - Enhanced */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -left-20 top-0 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] animate-blob rounded-full bg-blue-600/30 mix-blend-screen blur-[60px] sm:blur-[100px] filter" />
                <div className="absolute -right-20 top-0 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] animate-blob animation-delay-2000 rounded-full bg-purple-600/30 mix-blend-screen blur-[60px] sm:blur-[100px] filter" />
                <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] animate-blob animation-delay-4000 rounded-full bg-pink-600/20 mix-blend-screen blur-[80px] sm:blur-[120px] filter" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold text-xs sm:text-sm tracking-wide uppercase">
                            Next-Gen Intelligence is Here
                        </span>
                    </div>
                    <h1 className="mb-6 py-2 bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-transparent drop-shadow-sm leading-[1.1] tracking-tight">
                        The Age of <br />
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Generative AI
                        </span>
                    </h1>
                    <p className="mx-auto mb-10 max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-light leading-relaxed px-2">
                        Beyond automation. We build <span className="text-white font-medium">autonomous agents</span> and <span className="text-white font-medium">neural networks</span> that reason, create, and evolve with your business.
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-3 mb-12 sm:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <GlassCard className="h-full hover:bg-white/10 transition-colors duration-300 p-6">
                            <div className="mb-4 inline-flex p-3 rounded-xl bg-blue-500/20 text-blue-400">
                                <FaRobot className="text-2xl" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-white">Generative Agents</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Autonomous systems that plan, execute, and self-correct complex workflows without human intervention.
                            </p>
                        </GlassCard>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <GlassCard className="h-full hover:bg-white/10 transition-colors duration-300 p-6">
                            <div className="mb-4 inline-flex p-3 rounded-xl bg-purple-500/20 text-purple-400">
                                <FaBrain className="text-2xl" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-white">Neural Networks</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Deep learning architectures custom-trained on your enterprise data for unmatched predictive accuracy.
                            </p>
                        </GlassCard>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <GlassCard className="h-full hover:bg-white/10 transition-colors duration-300 p-6">
                            <div className="mb-4 inline-flex p-3 rounded-xl bg-pink-500/20 text-pink-400">
                                <FaNetworkWired className="text-2xl" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-white">Cognitive Automation</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Systems that understand context and nuance, automating decision-making processes at scale.
                            </p>
                        </GlassCard>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <Link
                        to="/contact"
                        className="
                            group relative inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 rounded-full 
                            bg-white text-black font-bold text-base sm:text-lg tracking-wide
                            hover:scale-105 transition-transform duration-300
                            shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]
                            hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)]
                        "
                    >
                        <span>Start Your Transformation</span>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </Link>
                    <p className="mt-6 text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-semibold">
                        Trusted by Industry Leaders
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ModernHero;
