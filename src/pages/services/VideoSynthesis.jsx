import React from "react";
import { motion } from "framer-motion";
import { FaPlay, FaFilm, FaMagic, FaLayerGroup } from "react-icons/fa";
import GlassCard from "../../components/common/GlassCard";
import ModernHero from "../../components/sections/ModernHero"; // Reusing for consistent header spacing if needed, or custom hero
import { Link } from "react-router-dom";

const VideoSynthesis = () => {
    return (
        <main className="min-h-screen text-[var(--color-text)] bg-[#0F172A]">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop"
                        alt="Video Synthesis Background"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-purple-500/20 text-purple-300 text-sm font-bold mb-6 border border-purple-500/30">
                            Generative Media Engine v4.0
                        </span>
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Generative Video Synthesis
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
                            Transform text prompts into cinema-quality video instantly.
                            Powered by advanced diffusion models and temporal consistency algorithms.
                        </p>
                        <Link to="/contact" className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)] inline-block">
                            Start Creating
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Technical Deep Dive */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                                Beyond Standard Diffusion
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                Our proprietary engine doesn't just generate frames; it understands <span className="text-blue-400 font-semibold">physics, lighting, and motion</span>. By utilizing a multi-stage temporal attention mechanism, we ensure that objects remain consistent across time, eliminating the "flicker" common in early generative models.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Temporal Consistency & Object Permanence",
                                    "High-Fidelity 4K Upscaling",
                                    "Style Transfer & ControlNet Integration",
                                    "Real-time Preview Rendering"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <span className="text-purple-400">✓</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <GlassCard className="p-0 aspect-video flex flex-col bg-slate-900 border-purple-500/30 overflow-hidden shadow-2xl">
                                {/* Editor Header */}
                                <div className="h-8 bg-slate-800 border-b border-white/10 flex items-center px-3 gap-2">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                                    </div>
                                    <div className="ml-4 text-[10px] text-gray-400 font-mono">Project_Alpha_v2.mp4</div>
                                </div>

                                {/* Main Preview Area */}
                                <div className="flex-1 relative bg-black group cursor-pointer">
                                    <img
                                        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                                        alt="Preview"
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                                            <FaPlay className="text-white ml-1" />
                                        </div>
                                    </div>

                                    {/* Floating UI Controls */}
                                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                                        <div className="bg-black/60 backdrop-blur-md rounded-lg p-2 text-xs text-white font-mono border border-white/10">
                                            <div>PROMPT: "Cyberpunk city, rain, neon lights, 8k"</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Timeline UI */}
                                <div className="h-24 bg-slate-800 border-t border-white/10 p-2 flex flex-col gap-1">
                                    <div className="flex justify-between text-[10px] text-gray-500 font-mono px-1">
                                        <span>00:00</span>
                                        <span>00:05</span>
                                        <span>00:10</span>
                                        <span>00:15</span>
                                    </div>
                                    {/* Tracks */}
                                    <div className="flex-1 flex flex-col gap-1 relative">
                                        {/* Playhead */}
                                        <div className="absolute top-0 bottom-0 left-1/3 w-0.5 bg-red-500 z-10">
                                            <div className="absolute -top-1 -left-1.5 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-red-500"></div>
                                        </div>

                                        <div className="h-6 bg-blue-500/20 rounded border border-blue-500/40 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-blue-500/10 w-full"></div>
                                            <span className="absolute left-2 top-1 text-[9px] text-blue-300 font-bold">VIDEO TRACK 1</span>
                                        </div>
                                        <div className="h-6 bg-purple-500/20 rounded border border-purple-500/40 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-purple-500/10 w-2/3"></div>
                                            <span className="absolute left-2 top-1 text-[9px] text-purple-300 font-bold">AUDIO FX</span>
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>

                            {/* Decorative Elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="py-20 bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
                        Engineered for Creators
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <FaMagic />,
                                title: "Text-to-Video",
                                desc: "Describe a scene in natural language, and watch it come to life with stunning detail and accuracy."
                            },
                            {
                                icon: <FaLayerGroup />,
                                title: "Inpainting & Editing",
                                desc: "Modify existing videos by selecting regions and typing changes. Add objects, change backgrounds, or alter styles."
                            },
                            {
                                icon: <FaPlay />,
                                title: "Motion Control",
                                desc: "Direct the camera movement (pan, zoom, tilt) and object trajectories with precise control parameters."
                            }
                        ].map((feature, idx) => (
                            <GlassCard key={idx} className="p-8 hover:bg-white/5 transition-colors">
                                <div className="text-4xl text-blue-400 mb-6">{feature.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-4 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                        Ready to Revolutionize Your Content?
                    </h2>
                    <p className="text-xl text-gray-300 mb-10">
                        Join the beta program and get early access to our API and studio tools.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link to="/contact" className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all inline-block">
                            Request API Access
                        </Link>
                        <Link to="/contact" className="px-8 py-4 rounded-full border border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-all inline-block">
                            View Documentation
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default VideoSynthesis;
