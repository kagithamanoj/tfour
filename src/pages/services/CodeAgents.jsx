import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaBug, FaGitAlt, FaTerminal } from "react-icons/fa";
import GlassCard from "../../components/common/GlassCard";
import { Link } from "react-router-dom";

const CodeAgents = () => {
    return (
        <main className="min-h-screen text-[var(--color-text)] bg-[#0F172A]">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
                        alt="Code Background"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-slate-900/80 to-slate-900"></div>
                    {/* Matrix-like overlay effect */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex justify-center mb-6">
                            <FaTerminal className="text-6xl text-green-500" />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white font-mono">
                            Autonomous <span className="text-green-500">Code Agents</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10 font-mono">
                            Self-healing infrastructure. Automated refactoring. 24/7 Security Audits.
                            <br />
                            <span className="text-green-400 text-sm">System Status: Online</span>
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Link to="/contact" className="px-8 py-4 rounded bg-green-600 text-white font-bold font-mono hover:bg-green-500 transition-colors shadow-[0_0_15px_rgba(34,197,94,0.4)] inline-block">
                                Deploy Agent
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Capabilities Grid */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        <GlassCard className="p-8 border-green-500/20 hover:border-green-500/50 transition-colors group">
                            <div className="bg-green-500/10 w-14 h-14 rounded flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                                <FaBug className="text-2xl text-green-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 font-mono">Auto-Debug</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Our agents monitor your production logs in real-time. When an exception occurs, they analyze the stack trace, generate a fix, and submit a PR before you even wake up.
                            </p>
                        </GlassCard>

                        <GlassCard className="p-8 border-green-500/20 hover:border-green-500/50 transition-colors group">
                            <div className="bg-green-500/10 w-14 h-14 rounded flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                                <FaGitAlt className="text-2xl text-green-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 font-mono">Smart Refactor</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Legacy code slowing you down? Agents can traverse your entire codebase, identifying technical debt and securely refactoring it to modern standards.
                            </p>
                        </GlassCard>

                        <GlassCard className="p-8 border-green-500/20 hover:border-green-500/50 transition-colors group">
                            <div className="bg-green-500/10 w-14 h-14 rounded flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                                <FaCode className="text-2xl text-green-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 font-mono">Test Gen</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Automatically generate comprehensive unit and integration tests. Achieve 100% coverage without writing a single line of boilerplate.
                            </p>
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* Code Snippet / Terminal Visual */}
            <section className="py-20 bg-black/30">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="rounded-xl overflow-hidden border border-gray-700 bg-[#1e1e1e] shadow-2xl flex flex-col md:flex-row h-[500px]">
                        {/* Sidebar */}
                        <div className="w-full md:w-64 bg-[#252526] border-r border-gray-700 flex flex-col">
                            <div className="p-4 border-b border-gray-700 font-mono text-xs text-gray-400 uppercase tracking-wider">
                                Active Agents (3)
                            </div>
                            <div className="p-2 space-y-1">
                                <div className="flex items-center gap-3 p-2 rounded bg-[#37373d] border-l-2 border-green-500">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                    <div>
                                        <div className="text-sm text-white font-bold">Security_Bot_01</div>
                                        <div className="text-[10px] text-gray-400">Scanning dependencies...</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-2 rounded hover:bg-[#2a2d2e] border-l-2 border-transparent opacity-70">
                                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                    <div>
                                        <div className="text-sm text-white font-bold">Refactor_Agent_X</div>
                                        <div className="text-[10px] text-gray-400">Idle - Awaiting task</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-2 rounded hover:bg-[#2a2d2e] border-l-2 border-transparent opacity-70">
                                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                    <div>
                                        <div className="text-sm text-white font-bold">Test_Gen_V2</div>
                                        <div className="text-[10px] text-gray-400">Idle - Awaiting task</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Terminal */}
                        <div className="flex-1 flex flex-col bg-[#1e1e1e]">
                            <div className="flex items-center gap-2 px-4 py-3 bg-[#1e1e1e] border-b border-gray-700">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="ml-2 text-xs text-gray-400 font-mono">security_scan_log.txt</span>
                            </div>
                            <div className="p-6 font-mono text-sm text-gray-300 leading-loose overflow-y-auto flex-1">
                                <p className="opacity-50">10:42:01 [INFO] Initializing swarm connection...</p>
                                <p className="opacity-50">10:42:02 [INFO] Connected to repository: <span className="text-blue-400">main-api-service</span></p>
                                <p>10:42:05 <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> scanning /src/auth/middleware...</p>
                                <p>10:42:08 <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="text-red-400 font-bold">[CRITICAL ALERT]</span> Vulnerability detected in JWT handling (CVE-2024-9921)</p>
                                <p className="pl-4 text-gray-500 border-l border-gray-700 ml-1">
                                    Analysis: Token expiration check missing in legacy route.<br />
                                    Risk Level: High<br />
                                    Remediation: Auto-patching...
                                </p>
                                <p>10:42:10 <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> generating fix...</p>
                                <p>10:42:12 <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> running regression tests...</p>
                                <div className="my-2 p-2 bg-[#2d2d2d] rounded border border-green-500/20">
                                    <p className="text-green-400">✓ Auth_Spec.ts (Passed)</p>
                                    <p className="text-green-400">✓ User_Session.ts (Passed)</p>
                                    <p className="text-green-400">✓ API_Gateway.ts (Passed)</p>
                                </div>
                                <p>10:42:15 <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="text-green-400 font-bold">PR #892 Created: "Hotfix: JWT Expiration Check"</span></p>
                                <p className="animate-pulse text-green-500">_</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CodeAgents;
