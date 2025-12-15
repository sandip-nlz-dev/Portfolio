// src/components/Skills.tsx
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

// Restored Skills Data
const skills: Record<string, string[]> = {
    "Programming": ["JavaScript", "Python"],
    "LLM Models": [
        "OpenAI's GPT",
        "DeepSeek",
        "Claude",
        "Gemini",
        "LLaMA-3",
    ],
    "AI & Tools": [
        "OpenAI API",
        "Azure AI",
        "Custom Neural Voice",
        "Langchain",
        "LangGraph",
        "Photoshop API",
    ],
    "Frameworks": [
        "LangChain",
        "LangGraph",
        "LangSmit",
    ],
    "Frontend": [
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
    ],
    "Backend & API": ["Node.js", "Express.js", "REST APIs"],
    "Databases": ["MongoDB", "Cosmos DB"],
    "Dev Tools": ["Git", "Docker", "CI/CD"],
    "Cloud & DevOps": ["Azure", "Azure Functions", "Azure DevOps", "GitHub Actions"],
    "Infrastructure": [
        "MCP Server",
        "Neo4j Graph DB",
        "Azure (Cloud Deployment)",
        "Docker",
    ],
    "VR / 3D": ["Meta Quest (Oculus)"],
    "Knowledge Areas": [
        "AI Agent Workflows",
        "RAG Implementation",
        "Vector Embeddings",
        "Graph Databases",
    ],
};

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
                        Technical Skills
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A curated list of technologies I use to build scalable and performant applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {Object.entries(skills).map(([category, techList], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                        >
                            <h3 className="text-lg font-semibold text-blue-400 mb-4 border-b border-slate-800 pb-2">
                                {category}
                            </h3>
                            <ul className="space-y-2">
                                {techList.map((tech) => (
                                    <li key={tech} className="flex items-center gap-2 text-slate-300 text-sm">
                                        <CheckCircle size={14} className="text-slate-500" />
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
