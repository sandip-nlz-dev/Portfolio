// src/components/Contact.tsx
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react"; // Lucide icons

const Contact: React.FC = () => {
    return (
        <section
            id="contact"
            className="bg-[hsl(240_10%_3.9%)] text-white py-20 px-4"
        >
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Connect</h2>
                <p className="text-gray-400 mb-8">
                    I'm always open to collaborating on interesting projects or just
                    chatting about tech and innovation. Feel free to reach out!
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-8">
                    <a
                        href="https://github.com/sandip-nlz-dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-600 transition"
                    >
                        <Github size={36} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sandip-deshmukh-754b67205/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-600 transition"
                    >
                        <Linkedin size={36} />
                    </a>
                    <a
                        href="mailto:sandipdeshmukh77@gmail.com"
                        className="text-blue-400 hover:text-blue-600 transition"
                    >
                        <Mail size={36} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
