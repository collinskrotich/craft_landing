"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X, Moon, Sun } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        setMounted(true);

        // Add scroll listener for background effect
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Toggle mobile menu
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "dark:bg-black/80 bg-white/80  backdrop-blur-lg shadow-md" : "bg-transparent"
                }`}
        >
            <div className="container mx-auto flex justify-between items-center px-2">
                {/* Logo */}
                <div className="text-xl font-bold cursor-pointer">
                    <ScrollLink to="home" smooth={true} duration={800} offset={-80}>
                        {mounted && (
                            <Image
                                src={theme === "dark" ? "/images/logo-dark.png" : "/images/logo-light.png"}
                                alt="Logo"
                                width={120}
                                height={40}
                            />
                        )}
                    </ScrollLink>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    {["Home", "About", "Services", "Projects"].map((link) => (
                        <ScrollLink
                            key={link}
                            to={link.toLowerCase()}
                            smooth={true}
                            duration={800}
                            offset={-80}
                            className="hover:text-blue-500 transition cursor-pointer"
                        >
                            {link}
                        </ScrollLink>
                    ))}
                    {/* Contact Us CTA */}
                    <ScrollLink
                        to="contact"
                        smooth={true}
                        duration={800}
                        offset={-80}
                        className="cta-button cursor-pointer"
                    >
                        Contact Us
                    </ScrollLink>
                    {/* Theme Toggle */}
                    {mounted && (
                        <button
                            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        >
                            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={toggleMenu}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-24 left-0 w-full bg-gray-200/80 dark:bg-black/90 backdrop-blur-lg p-4 md:hidden"
                    >
                        <div className="flex flex-col gap-4 items-center">
                            {["Home", "About", "Services", "Projects"].map((link) => (
                                <ScrollLink
                                    key={link}
                                    to={link.toLowerCase()}
                                    smooth={true}
                                    duration={800}
                                    offset={-80}
                                    className="hover:text-blue-500 transition text-lg cursor-pointer"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link}
                                </ScrollLink>
                            ))}
                            {/* Contact Us CTA */}
                            <ScrollLink
                                to="contact"
                                smooth={true}
                                duration={800}
                                offset={-80}
                                className="cta-button cursor-pointer"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact Us
                            </ScrollLink>
                            {/* Theme Toggle */}
                            {mounted && (
                                <button
                                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
                                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                >
                                    {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                                </button>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
