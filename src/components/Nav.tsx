// src/components/Nav.tsx
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { label: "Home", href: "#home" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "YouTube", href: "#youtube" },
        { label: "Blog", href: "#blog" },
        { label: "Education", href: "#education" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={clsx(
                "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b",
                scrolled
                    ? "bg-slate-950/80 backdrop-blur-md border-slate-800 py-4 shadow-lg"
                    : "bg-transparent border-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <a href="#home" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 hover:opacity-80 transition">
                    Sandip Deshmukh
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-sm font-medium text-slate-300 hover:text-white transition relative group"
                        >
                            {item.label}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                {/* Mobile Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={clsx(
                    "md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-slate-950 border-b border-slate-800",
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <div className="flex flex-col px-4 pb-6 pt-2 space-y-4">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="block text-slate-300 hover:text-blue-400 transition font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
