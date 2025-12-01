import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMicrophone, FaMagic, FaEye, FaShieldAlt, FaPlay, FaCheck, FaTimes, FaCode, FaFingerprint, FaArrowRight, FaIndustry
} from "react-icons/fa";
import GlassCard from "../../components/common/GlassCard";

// --- DEMO 1: NEURAL VOICE BIOMETRICS ---
const VoiceDemo = () => {
  const [status, setStatus] = useState("idle"); // idle, listening, processing, success

  const handleAuth = () => {
    setStatus("listening");
    setTimeout(() => setStatus("processing"), 2000);
    setTimeout(() => setStatus("success"), 3500);
    setTimeout(() => setStatus("idle"), 6000);
  };

  return (
    <GlassCard className="h-full p-6 flex flex-col relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl text-pink-500 -mr-8 -mt-8 rotate-12">
        <FaFingerprint />
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-pink-500/20 text-pink-400">
          <FaMicrophone className="text-xl" />
        </div>
        <h3 className="text-xl font-bold text-white">Neural Voice Biometrics</h3>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center bg-black/40 rounded-2xl p-8 border border-white/5 relative">
        {status === "idle" && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAuth}
            className="flex flex-col items-center gap-4 text-gray-400 hover:text-white transition-colors"
          >
            <div className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center">
              <FaMicrophone className="text-3xl" />
            </div>
            <span className="text-sm font-medium uppercase tracking-widest">Tap to Authenticate</span>
          </motion.button>
        )}

        {status === "listening" && (
          <div className="flex items-center gap-1 h-16">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 bg-pink-500 rounded-full"
                animate={{ height: [10, 40, 10] }}
                transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
              />
            ))}
          </div>
        )}

        {status === "processing" && (
          <div className="flex flex-col items-center gap-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-10 h-10 border-2 border-pink-500 border-t-transparent rounded-full"
            />
            <span className="text-xs text-pink-400 uppercase tracking-widest">Verifying Voice Print...</span>
          </div>
        )}

        {status === "success" && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center text-green-400">
              <FaCheck className="text-3xl" />
            </div>
            <span className="text-lg font-bold text-white">Access Granted</span>
            <span className="text-xs text-gray-400">Confidence: 99.8%</span>
          </motion.div>
        )}
      </div>

      <p className="mt-6 text-sm text-gray-400 leading-relaxed">
        Advanced speaker recognition using deep neural networks. Detects synthetic voices and deepfakes in real-time.
      </p>
    </GlassCard>
  );
};

// --- DEMO 2: GENERATIVE UI BUILDER ---
const GenUIDemo = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showUI, setShowUI] = useState(false);
  const [prompt, setPrompt] = useState("");
  const targetText = "Create a dark mode analytics dashboard with a sales chart.";

  const handleGenerate = () => {
    if (showUI) {
      setShowUI(false);
      setPrompt("");
      return;
    }

    setIsGenerating(true);
    let i = 0;
    const interval = setInterval(() => {
      setPrompt(targetText.substring(0, i + 1));
      i++;
      if (i === targetText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIsGenerating(false);
          setShowUI(true);
        }, 800);
      }
    }, 30);
  };

  return (
    <GlassCard className="h-full p-6 flex flex-col relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl text-blue-500 -mr-8 -mt-8 rotate-12">
        <FaMagic />
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400">
          <FaMagic className="text-xl" />
        </div>
        <h3 className="text-xl font-bold text-white">Generative UI</h3>
      </div>

      <div className="flex-grow bg-black/40 rounded-2xl p-4 border border-white/5 flex flex-col gap-4">
        {/* Prompt Input */}
        <div className="bg-white/5 rounded-lg p-3 flex items-center gap-3 border border-white/10">
          <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
          <span className="text-sm text-gray-300 font-mono min-h-[20px]">
            {prompt || <span className="text-gray-600">Enter prompt...</span>}
          </span>
        </div>

        {/* Canvas */}
        <div className="flex-grow bg-[#0F172A] rounded-xl border border-white/5 relative overflow-hidden flex items-center justify-center">
          {!showUI && !isGenerating && (
            <button
              onClick={handleGenerate}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-lg transition-colors"
            >
              Generate UI
            </button>
          )}

          {showUI && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="w-full h-full p-4 flex flex-col gap-3"
            >
              <div className="flex gap-3">
                <div className="flex-1 bg-white/5 h-24 rounded-lg p-3">
                  <div className="text-xs text-gray-500 mb-1">Total Sales</div>
                  <div className="text-2xl font-bold text-white">$24,500</div>
                  <div className="text-xs text-green-400 mt-1">+12%</div>
                </div>
                <div className="flex-1 bg-white/5 h-24 rounded-lg p-3">
                  <div className="text-xs text-gray-500 mb-1">Active Users</div>
                  <div className="text-2xl font-bold text-white">1,240</div>
                  <div className="text-xs text-blue-400 mt-1">+5%</div>
                </div>
              </div>
              <div className="flex-grow bg-white/5 rounded-lg flex items-end justify-between p-3 gap-2">
                {[40, 70, 50, 90, 60, 80].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: i * 0.1 }}
                    className="w-full bg-blue-500/50 rounded-t-sm"
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <p className="mt-6 text-sm text-gray-400 leading-relaxed">
        Text-to-Interface engine. Describe any component or layout, and our LLM generates production-ready React code instantly.
      </p>
    </GlassCard>
  );
};

// --- DEMO 3: VISION ANALYTICS ---
const VisionDemo = () => {
  const [scanning, setScanning] = useState(false);

  return (
    <GlassCard className="h-full p-6 flex flex-col relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl text-purple-500 -mr-8 -mt-8 rotate-12">
        <FaEye />
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400">
          <FaEye className="text-xl" />
        </div>
        <h3 className="text-xl font-bold text-white">Computer Vision Analytics</h3>
      </div>

      <div className="flex-grow bg-black/40 rounded-2xl overflow-hidden border border-white/5 relative group">
        {/* Placeholder for Video Feed */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
          <div className="text-center">
            <FaIndustry className="text-6xl text-gray-700 mx-auto mb-4" />
            <div className="text-gray-600 text-sm">Live Feed Simulation</div>
          </div>
        </div>

        {/* Bounding Boxes Overlay */}
        <AnimatePresence>
          {scanning && (
            <>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute top-1/4 left-1/4 w-32 h-48 border-2 border-green-500 rounded-lg"
              >
                <div className="absolute -top-6 left-0 bg-green-500 text-black text-xs font-bold px-2 py-1 rounded-sm">
                  Worker (99%)
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-1/4 right-1/3 w-24 h-24 border-2 border-red-500 rounded-lg"
              >
                <div className="absolute -top-6 left-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-sm flex items-center gap-1">
                  <FaShieldAlt /> Hazard (92%)
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Scan Line */}
        {scanning && (
          <motion.div
            className="absolute inset-x-0 h-1 bg-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.5)] z-10"
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        )}

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
          <button
            onClick={() => setScanning(!scanning)}
            className={`
              px-6 py-2 rounded-full font-bold text-sm transition-all
              ${scanning
                ? "bg-red-500/20 text-red-400 border border-red-500/50 hover:bg-red-500/30"
                : "bg-purple-600 text-white hover:bg-purple-500 shadow-lg shadow-purple-500/25"
              }
            `}
          >
            {scanning ? "Stop Analysis" : "Start Analysis"}
          </button>
        </div>
      </div>

      <p className="mt-6 text-sm text-gray-400 leading-relaxed">
        Real-time object detection and safety monitoring. Identifies PPE compliance, hazards, and workflow bottlenecks instantly.
      </p>
    </GlassCard>
  );
};

// --- DEMO 4: SMART CONTRACT AUDITOR ---
const CodeDemo = () => {
  const [auditing, setAuditing] = useState(false);
  const [vulnerability, setVulnerability] = useState(false);

  const handleAudit = () => {
    setAuditing(true);
    setVulnerability(false);
    setTimeout(() => {
      setAuditing(false);
      setVulnerability(true);
    }, 2000);
  };

  return (
    <GlassCard className="h-full p-6 flex flex-col relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl text-green-500 -mr-8 -mt-8 rotate-12">
        <FaCode />
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-green-500/20 text-green-400">
          <FaShieldAlt className="text-xl" />
        </div>
        <h3 className="text-xl font-bold text-white">Smart Contract Auditor</h3>
      </div>

      <div className="flex-grow bg-[#0b1221] rounded-2xl p-4 border border-white/5 font-mono text-xs relative overflow-hidden">
        <div className="text-gray-500 mb-2">// Solidity Smart Contract</div>
        <div className="text-purple-400">function <span className="text-yellow-300">withdraw</span>() public {"{"}</div>
        <div className="pl-4 text-gray-300">uint bal = balances[msg.sender];</div>
        <div className="pl-4 text-gray-300">require(bal &gt; 0);</div>

        <div className={`pl-4 transition-colors duration-300 ${vulnerability ? "bg-red-500/20 text-red-300" : "text-gray-300"}`}>
          (bool sent, ) = msg.sender.call{"{value: bal}"}("");
        </div>

        <div className="pl-4 text-gray-300">require(sent, "Failed");</div>
        <div className={`pl-4 transition-colors duration-300 ${vulnerability ? "bg-red-500/20 text-red-300" : "text-gray-300"}`}>
          balances[msg.sender] = 0;
        </div>
        <div className="text-purple-400">{"}"}</div>

        {/* Audit Overlay */}
        <AnimatePresence>
          {vulnerability && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="absolute bottom-4 left-4 right-4 bg-red-900/90 border border-red-500/50 p-3 rounded-lg backdrop-blur-md"
            >
              <div className="flex items-center gap-2 text-red-300 font-bold mb-1">
                <FaTimes /> Critical Vulnerability: Reentrancy
              </div>
              <div className="text-gray-300 text-[10px]">
                State update happens after external call. Move balance update before transfer.
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!auditing && !vulnerability && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
            <button
              onClick={handleAudit}
              className="px-6 py-2 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg shadow-lg"
            >
              Run Audit
            </button>
          </div>
        )}

        {auditing && (
          <motion.div
            className="absolute inset-x-0 h-1 bg-green-500 top-0"
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        )}
      </div>

      <p className="mt-6 text-sm text-gray-400 leading-relaxed">
        Automated security auditing for Web3. Detects reentrancy, overflow, and logic errors with 99.9% accuracy before deployment.
      </p>
    </GlassCard>
  );
};

const AIDemos = () => {
  return (
    <section className="min-h-screen w-full py-20 px-4 text-[var(--color-text)] bg-[#0F172A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold text-sm tracking-wide uppercase">
              Interactive Lab
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white tracking-tight">
            Tfour AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Innovations</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Experience our R&D lab firsthand. Interact with live simulations of our latest breakthroughs in Voice, Vision, and Generative AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <VoiceDemo />
          <GenUIDemo />
          <VisionDemo />
          <CodeDemo />
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-400 mb-6">Want to integrate these technologies into your product?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform"
          >
            Schedule a Live Demo <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AIDemos;
