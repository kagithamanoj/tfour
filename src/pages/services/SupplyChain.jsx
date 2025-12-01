import React from "react";
import { motion } from "framer-motion";
import { FaNetworkWired, FaChartLine, FaGlobeAmericas, FaBoxOpen } from "react-icons/fa";
import GlassCard from "../../components/common/GlassCard";
import { Link } from "react-router-dom";

const SupplyChain = () => {
    return (
        <main className="min-h-screen text-[var(--color-text)] bg-[#0F172A]">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
                        alt="Supply Chain Background"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-900"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-sm font-bold mb-6 border border-blue-500/30">
                            Enterprise Logistics AI
                        </span>
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white tracking-tight">
                            Predictive <span className="text-blue-500">Supply Chain</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
                            Anticipate disruptions before they happen. Optimize routes, inventory, and demand with our global neural network.
                        </p>
                        <Link to="/contact" className="px-8 py-4 rounded-full bg-blue-600 text-white font-bold text-lg hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20 inline-block">
                            Schedule Demo
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Key Metrics Grid */}
            <section className="py-10 px-4 -mt-20 relative z-20">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { label: "Forecast Accuracy", value: "98.5%" },
                        { label: "Cost Reduction", value: "30%" },
                        { label: "Route Optimization", value: "Real-time" },
                        { label: "Global Coverage", value: "150+ Countries" }
                    ].map((stat, i) => (
                        <GlassCard key={i} className="p-6 text-center backdrop-blur-xl bg-slate-800/50">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                        </GlassCard>
                    ))}
                </div>
            </section>

            {/* Deep Dive Section */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1">
                            <GlassCard className="p-0 h-full flex flex-col min-h-[400px] border-blue-500/20 relative overflow-hidden bg-slate-900">
                                {/* Dashboard Header */}
                                <div className="p-4 border-b border-white/10 flex justify-between items-center bg-slate-800/50">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                        <span className="text-xs font-bold text-blue-300 tracking-wider">LIVE NETWORK STATUS</span>
                                    </div>
                                    <div className="text-xs text-gray-400 font-mono">UTC 14:20:05</div>
                                </div>

                                {/* Map Visualization Area */}
                                <div className="flex-1 relative bg-[#0B1120]">
                                    {/* Stylized Map Background */}
                                    <div className="absolute inset-0 opacity-30 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center bg-no-repeat grayscale invert"></div>

                                    {/* Animated Connection Lines */}
                                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                        <path d="M100,150 Q200,50 350,120" stroke="#3B82F6" strokeWidth="1" fill="none" strokeDasharray="4 4" className="animate-[dash_20s_linear_infinite]" />
                                        <circle cx="100" cy="150" r="3" fill="#3B82F6" className="animate-ping" />
                                        <circle cx="350" cy="120" r="3" fill="#3B82F6" />

                                        <path d="M350,120 Q450,200 550,100" stroke="#8B5CF6" strokeWidth="1" fill="none" strokeDasharray="4 4" className="animate-[dash_15s_linear_infinite]" />
                                        <circle cx="550" cy="100" r="3" fill="#8B5CF6" className="animate-ping" />
                                    </svg>

                                    {/* Floating Stats Cards */}
                                    <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md border border-white/10 p-3 rounded-lg w-40">
                                        <div className="text-[10px] text-gray-400 mb-1">Active Shipments</div>
                                        <div className="text-xl font-bold text-white">1,248</div>
                                        <div className="text-[10px] text-green-400 flex items-center gap-1">
                                            <span className="transform rotate-180">▲</span> +12% vs avg
                                        </div>
                                    </div>

                                    <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-md border border-white/10 p-3 rounded-lg w-48">
                                        <div className="text-[10px] text-gray-400 mb-2">Recent Alerts</div>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                                                <div className="text-[10px] text-gray-300 truncate">Port Congestion: Singapore</div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                                <div className="text-[10px] text-gray-300 truncate">Route Optimized: Atlantic</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                                See the Future of Logistics
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                Traditional supply chains are reactive. Ours is proactive. By ingesting data from weather satellites, port congestion reports, and geopolitical news feeds, our AI models a <span className="text-blue-400 font-semibold">digital twin</span> of your entire logistics network.
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="mt-1 bg-blue-500/20 p-2 rounded-lg text-blue-400"><FaChartLine /></div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white">Demand Forecasting</h4>
                                        <p className="text-gray-400">Predict inventory needs down to the SKU level with machine learning.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1 bg-blue-500/20 p-2 rounded-lg text-blue-400"><FaBoxOpen /></div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white">Smart Warehousing</h4>
                                        <p className="text-gray-400">Automate placement and retrieval strategies to maximize throughput.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-blue-900/10 border-t border-blue-500/10">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Optimize Your Network Today</h2>
                    <p className="text-gray-300 mb-8">Stop reacting to disruptions. Start predicting them.</p>
                    <Link to="/contact" className="px-8 py-3 rounded-lg border border-blue-500 text-blue-400 font-bold hover:bg-blue-500 hover:text-white transition-all inline-block">
                        Get a Consultation
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default SupplyChain;
