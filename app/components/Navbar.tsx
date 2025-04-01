"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { X, Moon, Sun } from "lucide-react";
import { RiMenu5Line } from "react-icons/ri";
import Image from "next/image";
import ContactModal from "./ContactModal";

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

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
                                src={theme === "dark" ? "/icons/logo-dark.png" : "/icons/logo-light.png"}
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
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                        onClick={() => setModalOpen(true)}
                    >
                        Contact Us
                    </button>
                    {/* Modal */}
                    <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

                    {/* Theme Toggle */}
                    {mounted && (
                        <motion.button
                            className="relative flex items-center justify-center p-2 w-12 h-12 rounded-full bg-gray-200 dark:bg-[#0B0F15] transition-all duration-300 shadow-md hover:scale-110"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            initial={{ rotate: 0 }}
                            animate={{ rotate: theme === "dark" ? 180 : 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <motion.div
                                key={theme}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.3 }}
                            >
                                {theme === "dark" ? (
                                    <Sun size={24} className="text-yellow-400 drop-shadow-md" />
                                ) : (
                                    <Moon size={24} className="text-blue-500 drop-shadow-md" />
                                )}
                            </motion.div>
                        </motion.button>
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
                        {["Home", "About", "Services", "Projects"].map((link) => (
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
                            <motion.button
                                className="relative flex items-center justify-center p-2 w-12 h-12 rounded-full bg-gray-200 dark:bg-[#0B0F15] transition-all duration-300 shadow-md hover:scale-110"
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                initial={{ rotate: 0 }}
                                animate={{ rotate: theme === "dark" ? 180 : 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                <motion.div
                                    key={theme}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {theme === "dark" ? (
                                        <Sun size={24} className="text-yellow-400 drop-shadow-md" />
                                    ) : (
                                        <Moon size={24} className="text-blue-500 drop-shadow-md" />
                                    )}
                                </motion.div>
                            </motion.button>
                        )}

                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
