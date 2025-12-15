// src/components/YouTubeSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { Youtube, ExternalLink, Play } from "lucide-react";

const videos = [
    {
        id: "r4TUFUyAzl4",
        title: "What is Retrieval Augmented Generation (RAG) ? | Beginner-Friendly Guide (Hindi) #3",
        thumbnail: "https://img.youtube.com/vi/r4TUFUyAzl4/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=r4TUFUyAzl4&list=PLe1uqYM4yI4PBsp-XjVv0l5OG0rMTeUxM&index=3"
    },
    {
        id: "T2cm9fPWbOo",
        title: "LangChain Document Loader Deep Dive | Handle All Your Data Sources (Hindi) #4",
        thumbnail: "https://img.youtube.com/vi/T2cm9fPWbOo/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=T2cm9fPWbOo&list=PLe1uqYM4yI4PBsp-XjVv0l5OG0rMTeUxM&index=4"
    },
    {
        id: "3ttmlvuGhb0",
        title: "What is Document/Text Splitter in LangChain ? | Beginner-Friendly Guide (Hindi) #5",
        thumbnail: "https://img.youtube.com/vi/3ttmlvuGhb0/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=3ttmlvuGhb0&list=PLe1uqYM4yI4PBsp-XjVv0l5OG0rMTeUxM&index=5"
    }
];

const YouTubeSection: React.FC = () => {
    return (
        <section id="youtube" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-red-600/10 rounded-full blur-[100px] -translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500 mb-4"
                        >
                            Featured On YouTube
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-400 text-lg"
                        >
                            Deep diving into AI, Tech, and Code on <span className="text-white font-semibold">@neuralabz</span>
                        </motion.p>
                    </div>

                    <motion.a
                        href="https://www.youtube.com/@neuralabz"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition-colors font-medium shadow-lg shadow-red-600/20"
                    >
                        <Youtube size={20} />
                        <span>Visit Channel</span>
                        <ExternalLink size={16} />
                    </motion.a>
                </div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videos.map((video, index) => (
                        <motion.a
                            key={video.id}
                            href={video.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group block relative rounded-2xl overflow-hidden bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition aspect-video md:aspect-auto h-full flex flex-col"
                        >
                            {/* Thumbnail Container */}
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Play size={20} className="text-white fill-white ml-1" />
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 flex-1">
                                <h3 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-red-400 transition-colors line-clamp-2">
                                    {video.title}
                                </h3>
                            </div>
                        </motion.a>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default YouTubeSection;
