"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        if (typeof window === "undefined") return;

    }, []);

    return (
        <footer className="bg-slate-900 text-gray-300 md:py-10 py-4">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 text-left">

                    {/* Column 1: Brand & Description */}
                    <div className="text-xl font-bold cursor-pointer">
                        <Link to="home" smooth={true} duration={800} offset={-80}>
                            {mounted && (
                                <Image
                                    src={theme === "dark" ? "/images/logo-dark.png" : "/images/logo-dark.png"}
                                    alt="Logo"
                                    width={180}
                                    height={60}
                                />
                            )}
                        </Link>
                    </div>

                    {/* Column 2: Navigation Links */}
                    <div className="text-white">
                        <h3 className="text-xl font-semibold">Terms & Policies</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#portfolio" className="hover:text-blue-400 transition">Terms of service</a></li>
                            <li><a href="#services" className="hover:text-blue-400 transition">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Navigation Links */}
                    <div className="text-white">
                        <h3 className="text-xl font-semibold">Company</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="" className="hover:text-blue-400 transition">Home</a></li>
                            <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
                            <li><a href="#services" className="hover:text-blue-400 transition">Services</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="text-white">
                        <h3 className="text-xl font-semibold ">Contact</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="" className="hover:text-blue-400 transition">+2547 123 45678</a></li>
                            <li><a href="#services" className="hover:text-blue-400 transition">craftdukadigital@gmail.com</a></li>
                        </ul>
                    </div>

                    {/* Column 5: Location */}
                    <div className="text-white">
                        <h3 className="text-xl ">Location</h3>
                        <div className="mt-4 space-y-2">
                            <h4 className="text-lg font-medium">Nairobi, Kenya</h4>
                            <h4 className="text-lg font-medium">Mombasa, Kenya</h4>
                            <h4 className="text-lg font-medium">Kisumu, Kenya</h4>
                            <h4 className="text-lg font-medium">Eldoret, Kenya</h4>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <div className="mt-4 flex justify-center space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 text-2xl transition">
                            <FaFacebook />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 text-2xl transition">
                            <FaTwitter />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 text-2xl transition">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl transition">
                            <FaGithub />
                        </a>
                    </div>
                    {/* Copyright Section */}
                    <div className="border-t border-gray-700 mt-4 pt-2 text-center">
                        <p className="text-gray-500">
                            &copy; {new Date().getFullYear()} CraftDuka Digital. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
