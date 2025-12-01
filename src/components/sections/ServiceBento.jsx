import React from "react";
import { motion } from "framer-motion";
import { FaVideo, FaNetworkWired, FaCode, FaMicrophoneAlt, FaArrowRight } from "react-icons/fa";

const BentoItem = ({ title, subtitle, icon, className, delay, image, accentColor, link }) => (
    <motion.a
        href={link}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] }}
        className={`group relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] block no-underline ${className}`}
    >
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
            <motion.img
                src={image}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
            />
            {/* Overlay with animated grain effect */}
            <div className="absolute inset-0 bg-black/60 transition-opacity duration-500 group-hover:bg-black/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>

            {/* Floating orbs for depth */}
            <motion.div
                className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-20 bg-white/10"
                animate={{
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>

        {/* Content Overlay */}
        <div className="relative h-full flex flex-col justify-end p-6 md:p-10 z-10">
            <motion.div
                className={`
                    mb-auto w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center 
                    backdrop-blur-xl bg-white/10 border border-white/20
                    text-white shadow-2xl
                    ${accentColor}
                `}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                {icon}
            </motion.div>

            <div className="transform transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3 leading-tight tracking-tight">
                    {title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base lg:text-lg mb-4 md:mb-6 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed font-medium">
                    {subtitle}
                </p>

                <div className="flex items-center gap-3 text-white font-bold text-xs md:text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 translate-x-[-10px] group-hover:translate-x-0">
                    <span>Discover</span>
                    <span className="bg-white/20 rounded-full p-1.5">
                        <FaArrowRight className="text-xs" />
                    </span>
                </div>
            </div>
        </div>

        {/* Hover Border Glow */}
        <div className="absolute inset-0 border border-white/10 rounded-[2rem] md:rounded-[2.5rem] group-hover:border-white/30 transition-colors duration-500 pointer-events-none"></div>
    </motion.a>
);

const ServiceBento = () => {
    return (
        <section className="py-20 md:py-32 px-4">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-12 md:mb-20 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 text-white tracking-tight"
                    >
                        Intelligence. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Evolved.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto font-light"
                    >
                        Four pillars of next-generation AI, engineered for the enterprise.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 h-auto md:h-[800px]">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-4 md:gap-6 md:col-span-2 h-full">
                        {/* Large Item: Video */}
                        <BentoItem
                            className="flex-grow h-[300px] sm:h-[400px] md:h-auto"
                            title="Generative Video"
                            subtitle="Cinema-quality synthesis. Turn text into immersive visual narratives instantly."
                            icon={<FaVideo className="text-2xl" />}
                            image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
                            delay={0}
                            accentColor="group-hover:bg-purple-500/20 group-hover:text-purple-300"
                            link="/services/video-synthesis"
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 h-auto sm:h-[300px] md:h-[320px]">
                            {/* Code Agents */}
                            <BentoItem
                                className="h-[280px] sm:h-full"
                                title="Code Agents"
                                subtitle="Autonomous development. Self-healing infrastructure."
                                icon={<FaCode className="text-xl" />}
                                image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
                                delay={0.2}
                                accentColor="group-hover:bg-green-500/20 group-hover:text-green-300"
                                link="/services/code-agents"
                            />
                            {/* Voice Cloning */}
                            <BentoItem
                                className="h-[280px] sm:h-full"
                                title="Voice Cloning"
                                subtitle="Hyper-realistic dubbing. Global reach, local feel."
                                icon={<FaMicrophoneAlt className="text-xl" />}
                                image="https://images.unsplash.com/photo-1478737270239-2f02b77ac6b5?auto=format&fit=crop&w=800&q=80"
                                delay={0.3}
                                accentColor="group-hover:bg-pink-500/20 group-hover:text-pink-300"
                                link="/services/voice-cloning"
                            />
                        </div>
                    </div>

                    {/* Column 2: Tall Item - Supply Chain */}
                    <div className="h-[400px] sm:h-[500px] md:h-full">
                        <BentoItem
                            className="h-full"
                            title="Predictive Supply Chain"
                            subtitle="Foresight is power. Anticipate disruptions before they occur with end-to-end visibility."
                            icon={<FaNetworkWired className="text-2xl" />}
                            image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
                            delay={0.4}
                            accentColor="group-hover:bg-blue-500/20 group-hover:text-blue-300"
                            link="/services/supply-chain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceBento;
