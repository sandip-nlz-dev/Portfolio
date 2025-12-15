// src/components/Contact.tsx
import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact: React.FC = () => {
    return (
        <section className="py-24 bg-slate-900/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="flex justify-center">
                    {/* Contact Info - Centered since form is gone */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-950 p-8 rounded-2xl border border-slate-800 shadow-xl max-w-2xl w-full"
                    >
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h3 className="text-white font-medium mb-1">Email</h3>
                                    <a href="mailto:sandipdeshmukh77@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors text-sm break-all">
                                        sandipdeshmukh77@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-4">
                                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-400">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h3 className="text-white font-medium mb-1">Phone</h3>
                                    <span className="text-slate-400 text-sm">9422231928</span>
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-4">
                                <div className="w-12 h-12 bg-indigo-500/10 rounded-full flex items-center justify-center text-indigo-400">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h3 className="text-white font-medium mb-1">Location</h3>
                                    <span className="text-slate-400 text-sm">Pune, India</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 text-center pt-8 border-t border-slate-900">
                            <p className="text-slate-500 italic">
                                "The best way to predict the future is to create it."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
