// src/components/Hero.tsx
import React from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import Button from "./Button";

const Hero: React.FC = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-16"
        >
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-5xl mx-auto text-center z-10">
                {/* Greeting */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block px-4 py-2 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium"
                >
                    Available for work
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                >
                    Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Sandip Deshmukh</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto"
                >
                    Senior Software Engineer | Full-Stack Web Developer
                </motion.p>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    Building scalable applications and advanced AI solutions with over 4 years of expertise.
                    Passionate about creating beautiful, functional, and user-centric digital experiences.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a href="#projects">
                        <Button text="View My Work" icon={ArrowRight} color="linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)" />
                    </a>

                    {/* Resume Button */}
                    <a href="/resume.pdf" download="Sandip_Deshmukh_Resume.pdf" className="group">
                        <div className="font-family-inherit text-slate-200 text-lg px-6 py-3 flex items-center justify-center gap-2 rounded-full border border-slate-700 hover:border-slate-500 hover:bg-slate-800 transition-all duration-300">
                            <span>Download Resume</span>
                            <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                        </div>
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500"
            >
                <div className="w-5 h-8 border-2 border-slate-500 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-slate-500 rounded-full animate-scroll" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
