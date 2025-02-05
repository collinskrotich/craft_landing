"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { X, Moon, Sun } from "lucide-react";
import { RiMenu5Line } from "react-icons/ri";
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
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "dark:bg-[#0B0F15] bg-white/80 backdrop-blur-lg shadow-md" : "bg-transparent"
                }`}
        >
            <div className="container mx-auto flex justify-between items-center px-4 py-3 md:py-4">
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
                        className="cursor-pointer bg-transparent border-[1px] dark:border-[#E2E2E2] border-[#377DFF] text-[#377DFF] dark:text-[#E2E2E2] px-4 py-2 rounded-full dark:hover:bg-[#E2E2E2] dark:hover:text-black hover:bg-[#377DFF] hover:text-white transition-colors ease-in-out duration-200"
                    >
                        Contact Us
                    </ScrollLink>

                    {/* Theme Toggle */}
                    {mounted && (
                        <button
                            className="p-2 rounded-full bg-gray-200 dark:bg-[#0B0F15] transition-all duration-200"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        >
                            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <RiMenu5Line size={28} />}
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
                        className="absolute top-[130px] left-0 w-full bg-white dark:bg-[#0B0F15] backdrop-blur-lg p-5 md:hidden flex flex-col gap-4 items-center"
                    >
                        {["Home", "About", "Services", "Projects", "Contact"].map((link) => (
                            <ScrollLink
                                key={link}
                                to={link.toLowerCase()}
                                smooth={true}
                                duration={800}
                                offset={-80}
                                className="text-lg text-[#0B0F15] dark:text-gray-300 hover:text-blue-500 transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                {link}
                            </ScrollLink>
                        ))}

                        {/* Theme Toggle */}
                        {mounted && (
                            <button
                                className="p-3 rounded-full bg-gray-200 dark:bg-[#0f0f11] mt-2 transition-all duration-200"
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            >
                                {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
                            </button>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
