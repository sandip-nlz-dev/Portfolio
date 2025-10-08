// src/components/Footer.tsx
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react"; // Icon components from lucide-react

const Footer: React.FC = () => {
    return (
        <footer className="bg-[hsl(240_3.7%_15.9%)] text-gray-400 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">

                {/* Left side: Attribution */}
                <div className="text-sm text-gray-500">
                    <p>Made by Sandip Deshmukh</p>
                </div>

                {/* Right side: Social links with icons */}
                <div className="flex space-x-6">
                    {/* GitHub */}
                    <a
                        href="https://github.com/sandip-nlz-dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 hover:text-white transition-colors"
                    >
                        <Github size={18} />
                        <span>GitHub</span>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/sandip-deshmukh-754b67205/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 hover:text-white transition-colors"
                    >
                        <Linkedin size={18} />
                        <span>LinkedIn</span>
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:sandipdeshmukh77@gmail.com"
                        className="flex items-center space-x-1 hover:text-white transition-colors"
                    >
                        <Mail size={18} />
                        <span>Email</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
