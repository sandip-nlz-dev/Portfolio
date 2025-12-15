// src/components/Projects.tsx
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Briefcase, User } from "lucide-react";
import Button from "./Button";

// Restored Project Data (No Images)
const projects = [
    {
        title: "AI Avatar Customization",
        description: "Developed a custom AI avatar with voice cloning and dynamic facial expressions for a major brand using Azure and custom neural voice models.",
        tech: ["Azure", "Neural Voice", "AI"],
        github: undefined,
        liveUrl: undefined,
        category: 'work'
    },
    {
        title: "Creative Automation Generation",
        description: "Created a creative automation tool using Photoshop API and AI to assemble dynamic media content for marketing purposes.",
        tech: ["Photoshop API", "AI", "Automation"],
        category: 'work'
    },
    {
        title: "E-commerce VR Experience",
        description: "Built a fully immersive VR-based e-commerce experience for a client using Meta Oculus VR, supporting mall navigation and checkout functionality.",
        tech: ["VR", "Oculus", "E-commerce"],
        category: 'work'
    },
    {
        title: "RAG-Based Chatbot",
        description: "Built a Python chatbot using RAG architecture with OpenAI API and Qdrant to enable context-aware Q&A over indexed documents.",
        tech: ["Python", "OpenAI API", "Qdrant", "RAG"],
        github: "https://github.com/sandip-nlz-dev/RAG",
        category: 'personal'
    },
    {
        title: "Persona-based Chatbot (React)",
        description: "A React app offering real-time chat with multiple AI personas. Each persona delivers responses in a distinct tone and style.",
        tech: ["React", "AI", "Frontend"],
        github: "https://github.com/sandip-nlz-dev/persona-chatbot",
        category: 'personal'
    },
    {
        title: "AI Coding Agent",
        description: "Python-based AI coding assistant that plans, acts, observes, and writes code for full-stack apps using Gemini API and built-in tools.",
        tech: ["Python", "Gemini API", "Agents"],
        github: "https://github.com/sandip-nlz-dev/coding-agent",
        category: 'personal'
    }
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-24 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A showcase of my professional work and personal AI experiments.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col relative overflow-hidden"
                        >
                            {/* Decorative gradient blob */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors" />

                            <div className="relative z-10 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`p-3 rounded-xl ${project.category === 'work' ? 'bg-purple-500/10 text-purple-400' : 'bg-blue-500/10 text-blue-400'}`}>
                                        {project.category === 'work' ? <Briefcase size={24} /> : <User size={24} />}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 mb-6 flex-1 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-800/50">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                                        >
                                            <Github size={16} />
                                            Code
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                                        >
                                            <ExternalLink size={16} />
                                            Live Demo
                                        </a>
                                    )}
                                    {!project.github && !project.liveUrl && (
                                        <span className="text-sm text-slate-500 italic">No public link available</span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://github.com/sandip-nlz-dev" target="_blank" rel="noopener noreferrer">
                        <Button text="View All Projects on GitHub" icon={Code} color="#1e293b" />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Projects;
