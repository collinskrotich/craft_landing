"use client";

import { quickLinks, socialMediaIcons } from "@/data/data";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (typeof window === "undefined") return;
    }, []);

    return (
        <footer className="bg-[#383638] text-[#E2E2E2]  py-4 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 text-left">

                    {/* Column 1: Brand & Description */}
                    <div className="text-xl font-bold cursor-pointer">
                        <Link href={"/"}>
                            {mounted && (
                                <Image
                                    src={theme === "dark" ? "/images/logo-dark.png" : "/images/logo-dark.png"}
                                    alt="Logo"
                                    width={180}
                                    height={60}
                                    className="transition-all duration-700 hover:scale-105"
                                />
                            )}
                        </Link>
                    </div>

                    {/* Column 2: Navigation Links */}
                    <div>
                        <h3 className="text-xl font-semibold">Terms & Policies</h3>
                        <div className="mt-4 space-y-2 flex flex-col">
                            <Link href="/" className="hover:text-blue-400 transition duration-300 ease-in-out">Terms & Conditions</Link>
                            <Link href="/" className="hover:text-blue-400 transition duration-300 ease-in-out">Privacy Policy</Link>
                        </div>
                    </div>

                    {/* Column 3: Company */}
                    <div>
                        <h3 className="text-xl font-semibold">Company</h3>
                        <div className="mt-4 flex flex-col space-y-2">
                            {quickLinks.map(({ id, label, href }) => (
                                <Link key={id} href={href} className="hover:text-blue-500 transition-colors duration-300">
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h3 className="text-xl font-semibold">Contact</h3>
                        <div className="mt-4 flex flex-col space-y-2">
                            <Link href="tel:0745882265" className="hover:text-blue-400 transition duration-300">+254 745 882265</Link>
                            <Link href="mailto:info@craftduka.com" className="hover:text-blue-400 transition duration-300">info@craftduka.com</Link>
                        </div>
                    </div>

                    {/* Column 5: Location */}
                    <div>
                        <h3 className="text-xl font-semibold">Location</h3>
                        <div className="mt-4">
                            <span className="text-lg">Nairobi, Kenya</span>
                        </div>
                    </div>
                </div>

                {/* Social Media Icons */}
                <div className="mt-8 flex justify-center space-x-6">
                    {socialMediaIcons.map(({ id, text, url, handle }) => {
                        const Icon =
                            text === "LinkedIn" ? FaLinkedin :
                                text === "Instagram" ? FaInstagram :
                                    text === "Facebook" ? FaFacebook :
                                        text === "Twitter" ? FaXTwitter : FaGithub;

                        return (
                            <Link
                                key={id}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative group hover:text-white transition duration-300"
                            >
                                <div className="p-3 bg-[#E2E2E2] text-[#383638] rounded-full hover:bg-[#c4c3c3] hover:text-[#242224] transition-transform transform hover:scale-110 duration-300">
                                    <Icon className="text-2xl" />
                                </div>

                                {/* Tooltip with Animation */}
                                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#383638] text-[#E2E2E2] text-xs py-1 px-3 rounded-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300">
                                    {handle}
                                </span>
                            </Link>
                        );
                    })}
                </div>

                {/* Copyright Section */}
                <div className="border-t border-gray-700 mt-6 pt-2 text-center">
                    <p className="text-gray-500">
                        &copy; {new Date().getFullYear()} CraftDuka Digital. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
