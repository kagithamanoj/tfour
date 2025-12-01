import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMicrophoneAlt, FaWaveSquare, FaLanguage, FaHeadphones, FaPlay, FaCheckCircle, FaSpinner } from "react-icons/fa";
import GlassCard from "../../components/common/GlassCard";
import { Link, useNavigate } from "react-router-dom";

const VoiceCloning = () => {
    const navigate = useNavigate();
    const [isGenerating, setIsGenerating] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    const handleGenerate = () => {
        setIsGenerating(true);
        setProgress(0);

        // Simulate generation progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 2; // Increment progress
            });
        }, 50); // Total time approx 2.5s

        // Completion and Redirect
        setTimeout(() => {
            clearInterval(interval);
            setProgress(100);
            setIsComplete(true);

            // Redirect after showing success message
            setTimeout(() => {
                navigate("/contact");
            }, 2000);
        }, 2500);
    };

    return (
        <main className="min-h-screen text-[var(--color-text)] bg-[#0F172A]">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?q=80&w=2066&auto=format&fit=crop"
                        alt="Voice Background"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-pink-500/20 text-pink-300 text-sm font-bold mb-6 border border-pink-500/30">
                            Neural Audio Synthesis
                        </span>
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white">
                            Voice <span className="text-pink-500">Cloning</span> & Dubbing
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
                            Break language barriers with hyper-realistic AI voice dubbing. Preserve emotion, intonation, and identity across 50+ languages.
                        </p>
                        <Link to="/contact" className="px-8 py-4 rounded-full bg-pink-600 text-white font-bold text-lg hover:bg-pink-500 transition-colors shadow-lg shadow-pink-500/20 inline-block">
                            Try Voice Studio
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Audio Visualization Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-slate-900 rounded-2xl border border-white/10 overflow-hidden shadow-2xl relative">

                        {/* Overlay for Generation State */}
                        <AnimatePresence>
                            {(isGenerating || isComplete) && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="absolute inset-0 z-50 bg-slate-900/90 backdrop-blur-sm flex flex-col items-center justify-center p-8"
                                >
                                    {!isComplete ? (
                                        <div className="w-full max-w-md text-center">
                                            <div className="mb-6 relative">
                                                <div className="w-20 h-20 mx-auto border-4 border-pink-500/30 border-t-pink-500 rounded-full animate-spin"></div>
                                                <div className="absolute inset-0 flex items-center justify-center font-bold text-pink-400">
                                                    {Math.round(progress)}%
                                                </div>
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-2">Synthesizing Voice...</h3>
                                            <p className="text-gray-400">Analyzing phonemes and prosody patterns</p>

                                            {/* Progress Bar */}
                                            <div className="mt-8 h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-pink-500"
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${progress}%` }}
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <motion.div
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className="text-center"
                                        >
                                            <div className="w-24 h-24 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-6 text-green-400 border-2 border-green-500">
                                                <FaCheckCircle className="text-5xl" />
                                            </div>
                                            <h3 className="text-3xl font-bold text-white mb-4">Audio Generated!</h3>
                                            <p className="text-xl text-gray-300 mb-8">Redirecting you to book a live demo...</p>
                                            <div className="flex justify-center gap-2">
                                                <span className="w-3 h-3 bg-white rounded-full animate-bounce"></span>
                                                <span className="w-3 h-3 bg-white rounded-full animate-bounce delay-100"></span>
                                                <span className="w-3 h-3 bg-white rounded-full animate-bounce delay-200"></span>
                                            </div>
                                        </motion.div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Studio Header */}
                        <div className="h-16 bg-slate-800/50 border-b border-white/10 flex items-center justify-between px-6">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-pink-500/20 flex items-center justify-center text-pink-400">
                                    <FaMicrophoneAlt />
                                </div>
                                <span className="font-bold text-white">Voice Studio Pro</span>
                            </div>
                            <div className="flex gap-2">
                                <div className="px-3 py-1 rounded bg-slate-700 text-xs text-gray-300">EN-US</div>
                                <div className="px-3 py-1 rounded bg-slate-700 text-xs text-gray-300">48kHz</div>
                            </div>
                        </div>

                        {/* Main Interface */}
                        <div className="p-8 grid md:grid-cols-2 gap-8">
                            {/* Input Section */}
                            <div className="space-y-6">
                                <div>
                                    <label className="text-xs text-gray-400 uppercase font-bold mb-2 block">Source Voice</label>
                                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
                                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" className="w-10 h-10 rounded-full object-cover" alt="Avatar" />
                                        <div>
                                            <div className="text-sm font-bold text-white">Jonathan R.</div>
                                            <div className="text-xs text-gray-400">Deep Narration</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs text-gray-400 uppercase font-bold mb-2 block">Text Input</label>
                                    <div className="w-full h-32 bg-black/30 rounded-lg border border-white/10 p-4 text-gray-300 text-sm font-mono leading-relaxed">
                                        "In a world where technology bridges the gap between imagination and reality, our voice engine captures the very soul of human expression."
                                    </div>
                                </div>
                                <button
                                    onClick={handleGenerate}
                                    disabled={isGenerating}
                                    className="w-full py-3 rounded-lg bg-pink-600 text-white font-bold hover:bg-pink-500 transition-colors shadow-lg shadow-pink-500/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isGenerating ? <FaSpinner className="animate-spin" /> : <FaWaveSquare />}
                                    {isGenerating ? "Processing..." : "Generate Audio"}
                                </button>
                            </div>

                            {/* Output Visualization */}
                            <div className="bg-black/40 rounded-xl border border-white/10 p-6 flex flex-col justify-center items-center relative overflow-hidden">
                                {/* Animated Waveform */}
                                <div className="flex items-center gap-1 h-32 w-full justify-center">
                                    {[...Array(20)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="w-2 bg-pink-500 rounded-full animate-pulse"
                                            style={{
                                                height: `${Math.random() * 100}%`,
                                                animationDelay: `${i * 0.1}s`,
                                                opacity: 0.7
                                            }}
                                        ></div>
                                    ))}
                                </div>
                                <div className="w-full mt-6 bg-slate-700 h-1.5 rounded-full overflow-hidden">
                                    <div className="w-1/3 h-full bg-pink-500"></div>
                                </div>
                                <div className="flex justify-between w-full mt-2 text-xs text-gray-500 font-mono">
                                    <span>00:04</span>
                                    <span>00:12</span>
                                </div>

                                <div className="mt-6 flex gap-4">
                                    <button className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center hover:scale-110 transition-transform">
                                        <FaPlay />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 bg-pink-900/5">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Empowering Global Creators</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex gap-6 items-start">
                            <div className="text-5xl font-bold text-pink-500/20">01</div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">Film & TV Dubbing</h3>
                                <p className="text-gray-400">Localize content for international markets at 1/10th the cost of traditional ADR.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start">
                            <div className="text-5xl font-bold text-pink-500/20">02</div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">Personalized Marketing</h3>
                                <p className="text-gray-400">Send millions of personalized video messages where you address each customer by name.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start">
                            <div className="text-5xl font-bold text-pink-500/20">03</div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">Game Development</h3>
                                <p className="text-gray-400">Populate open worlds with thousands of unique NPC voices generated on the fly.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start">
                            <div className="text-5xl font-bold text-pink-500/20">04</div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">Education</h3>
                                <p className="text-gray-400">Make educational content accessible to every language speaker instantly.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default VoiceCloning;
