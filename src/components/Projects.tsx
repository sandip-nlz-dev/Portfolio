import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
    title: string;
    description: string;
    githubUrl?: string;
    liveUrl?: string;
    category: 'personal' | 'work';
}

const projects: Project[] = [
    {
        title: "AI Avatar Customization",
        description:
            "Developed a custom AI avatar with voice cloning and dynamic facial expressions for a major brand using Azure and custom neural voice models.",
        category: 'work'
    },
    {
        title: "Creative Automation Generation",
        description:
            "Created a creative automation tool using Photoshop API and AI to assemble dynamic media content for marketing purposes.",
        category: 'work'
    },
    {
        title: "E-commerce VR Experience",
        description:
            "Built a fully immersive VR-based e-commerce experience for a client using Meta Oculus VR, supporting mall navigation and checkout functionality.",
        category: 'work'
    },
    {
        title: "RAG-Based Chatbot",
        description:
            "Built a Python chatbot using RAG architecture with OpenAI API and Qdrant to enable context-aware Q&A over indexed documents.",
        githubUrl: "https://github.com/sandip-nlz-dev/RAG",
        category: 'personal'
    },
    {
        title: "Persona-based Chatbot (React)",
        description:
            "A React app offering real-time chat with multiple AI personas. Each persona delivers responses in a distinct tone and style.",
        githubUrl: "https://github.com/sandip-nlz-dev/persona-chatbot",
        category: 'personal'
    },
    {
        title: "AI Coding Agent",
        description:
            "Python-based AI coding assistant that plans, acts, observes, and writes code for full-stack apps using Gemini API and built-in tools.",
        githubUrl: "https://github.com/sandip-nlz-dev/coding-agent",
        category: 'personal'
    }
];

// Card animation variant remains the same
const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.4,
            type: "spring",
        },
    }),
};

const Projects: React.FC = () => {
    return (
        <section id="projects" className="bg-[hsl(240_10%_3.9%)] text-white py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-12">My Projects</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-[hsl(240_5.9%_10%)] p-6 rounded-2xl shadow-xl transition-transform hover:scale-105 hover:shadow-blue-500/20 text-left flex flex-col justify-between"
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            custom={index}
                        >
                            <div>
                                <h3 className="text-xl font-semibold text-blue-400 mb-3">{project.title}</h3>

                                {/* Badge for work */}

                                <span className="inline-block bg-blue-900/30 text-blue-300 text-xs font-medium px-2 py-1 rounded mb-2">
                                    {project.category === 'work' ? 'Work for Organization' : 'Personal'}
                                </span>



                                <p className="text-gray-400 mb-5">{project.description}</p>
                            </div>
                            <div>
                                {/* Show GitHub/Live only for personal projects */}
                                {project.category === 'personal' && (
                                    <div className="flex gap-5 items-center">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-400 hover:text-white transition-transform hover:scale-110"
                                                title="GitHub Repo"
                                            >
                                                <Github className="w-5 h-5" />
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-400 hover:text-white transition-transform hover:scale-110"
                                                title="Live Demo"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Projects;
