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
                    {/* YouTube */}
                    <a
                        href="https://www.youtube.com/@neuralabz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 hover:text-white transition-colors"
                    >
                        {/* YouTube SVG icon */}
                        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path
                                d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.413 3.5 12 3.5 12 3.5s-7.413 0-9.386.574A2.994 2.994 0 0 0 .502 6.186C0 8.16 0 12 0 12s0 3.84.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.587 20.5 12 20.5 12 20.5s7.413 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.84 24 12 24 12s0-3.84-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                                fill="currentColor"
                            />
                        </svg>
                        <span>YouTube</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
