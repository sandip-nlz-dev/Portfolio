// src/components/BlogSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";
import data from "../data/DB"; // Assuming default export or named export match

const BlogSection: React.FC = () => {
    const blogs = data.blogs;

    return (
        <section id="blog" className="py-24 bg-slate-900/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
                        Latest Articles
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Thoughts, tutorials, and insights on Artificial Intelligence and Software Development.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <motion.a
                            key={blog.id}
                            href={blog.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group block bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/10 h-full flex flex-col"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                    <BookOpen size={20} />
                                </div>
                                <ArrowUpRight size={20} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
                            </div>

                            <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                                {blog.title}
                            </h3>

                            <p className="text-slate-400 text-sm mb-4 line-clamp-3 flex-1 leading-relaxed">
                                {blog.content}
                            </p>

                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-900 text-xs text-slate-500">
                                <span>{blog.date}</span>
                                <span>{blog.author}</span>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://sandipdeshmukh.hashnode.dev/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition-colors font-medium inline-flex items-center gap-2">
                        Read more on Hashnode <ArrowUpRight size={16} />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default BlogSection;
