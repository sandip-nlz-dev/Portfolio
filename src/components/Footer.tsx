// src/components/Footer.tsx
import React from 'react';
import { Github, Linkedin, Twitter, Mail, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Github, href: "https://github.com/sandip-nlz-dev", label: "GitHub" },
        { icon: Linkedin, href: "https://linkedin.com/in/sandipdeshmukh", label: "LinkedIn" },
        { icon: Twitter, href: "https://twitter.com/sandipdeshmukh", label: "Twitter" },
        { icon: Youtube, href: "https://youtube.com/@neuralabz", label: "YouTube" },
        { icon: Mail, href: "mailto:sandipdeshmukh77@gmail.com", label: "Email" },
    ];

    const footerLinks = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Blog", href: "#blog" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <footer className="bg-slate-950 border-t border-slate-800 py-12 text-slate-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-12 mb-12">

                    {/* Brand / About */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                            Sandip Deshmukh
                        </h3>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Building digital experiences that matter. Focused on clean code, user-centric design, and cutting-edge technologies.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {footerLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm hover:text-blue-400 transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Connect</h4>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-slate-800 hover:border-slate-700 hover:text-white transition-all transform hover:-translate-y-1"
                                    aria-label={social.label}
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p>© {currentYear} Sandip Deshmukh. All rights reserved.</p>
                    <p className="flex items-center gap-2">
                        Designed with <span className="text-red-500">♥</span> and React
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
