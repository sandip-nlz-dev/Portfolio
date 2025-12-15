// src/components/Education.tsx
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, ExternalLink, Award } from "lucide-react";

const educationData: { title: string; institution: string; year: string; description?: string }[] = [
    {
        title: "Bachelor of Engineering",
        institution: "North Maharashtra University",
        year: "2013 - 2016",
    }
];

const certifications = [
    {
        title: "Learn Complete Python In Simple Way",
        institution: "Udemy",
        year: "2020",
        description: "Mastered Python programming fundamentals, data structures, OOP concepts, and practical application development.",
        certificateUrl: "https://www.udemy.com/certificate/UC-393b7899-26e5-4666-af05-65125e0b54f4/",
    },
    {
        title: "Learn Ethical Hacking From Scratch",
        institution: "Udemy",
        year: "2022",
        description: "Learned penetration testing, network security, vulnerability assessment, and ethical hacking methodologies.",
        certificateUrl: "https://www.udemy.com/certificate/UC-3a35c8ba-24ee-47ef-a12c-288a91cbcc80/",
    },
    {
        title: "The Complete JavaScript Course 2022: From Zero to Expert!",
        institution: "Udemy",
        year: "2022",
        description: "Comprehensive JavaScript training covering ES6+, async programming, DOM manipulation, and modern JS frameworks.",
        certificateUrl: "https://www.udemy.com/certificate/UC-73024a5d-99e2-4513-a430-ee11367365e8/",
    },
    {
        title: "Master Generative AI: Automate Content Effortlessly with AI",
        institution: "Udemy",
        year: "2023",
        description: "Explored generative AI technologies, prompt engineering, and content automation using various AI tools and platforms.",
        certificateUrl: "https://www.udemy.com/certificate/UC-c44f17f1-e003-4522-ab48-03d9f5ba55cb/",
    },
    {
        title: "The Complete 2022 Web Development Bootcamp",
        institution: "Udemy",
        year: "2023",
        description: "Full-stack web development course covering HTML, CSS, JavaScript, Node.js, React, and database management.",
        certificateUrl: "https://www.udemy.com/certificate/UC-869612d3-39ad-4bdf-8e71-77327c57f783/",
    }
];

const Education: React.FC = () => {
    return (
        <section className="py-24 bg-slate-900/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Formal Education */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
                        Education & Certifications
                    </h2>
                    <p className="text-slate-400">
                        My academic journey and continuous learning path.
                    </p>
                </motion.div>

                <div className="space-y-8 mb-20">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <GraduationCap className="text-blue-500" /> Formal Education
                    </h3>
                    {educationData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/30 transition-colors"
                        >
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                                {item.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-4 text-blue-400 mb-4 text-sm md:text-base">
                                <span className="font-medium">{item.institution}</span>
                                <span className="w-1.5 h-1.5 bg-slate-600 rounded-full" />
                                <span>{item.year}</span>
                            </div>
                            {item.description && (
                                <p className="text-slate-400 leading-relaxed">
                                    {item.description}
                                </p>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Certifications */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <Award className="text-purple-500" /> Certifications & Courses
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {certifications.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all"
                            >
                                <h4 className="text-lg font-semibold text-slate-200 mb-2 line-clamp-2">
                                    {item.title}
                                </h4>
                                <div className="text-sm text-purple-400 mb-3 flex items-center justify-between">
                                    <span>{item.institution}</span>
                                    <span className="bg-slate-800 px-2 py-0.5 rounded text-xs text-slate-400">{item.year}</span>
                                </div>

                                {item.certificateUrl && (
                                    <a
                                        href={item.certificateUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors mt-2"
                                    >
                                        View Certificate <ExternalLink size={14} />
                                    </a>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Education;
