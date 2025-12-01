import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const GlassCard = ({ children, className, hoverEffect = true }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={twMerge(
                clsx(
                    "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg",
                    "shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]",
                    hoverEffect && "transition-transform duration-300 hover:scale-[1.02] hover:bg-white/10",
                    className
                )
            )}
        >
            {/* Gradient Border Overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10" />

            {/* Content */}
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
};

export default GlassCard;
