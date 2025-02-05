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
        <footer className="bg-slate-900 text-gray-300 md:py-10 py-4">
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
                                />
                            )}
                        </Link>
                    </div>

                    {/* Column 2: Navigation Links */}
                    <div className="text-white">
                        <h3 className="text-xl  font-semibold">Terms & Policies</h3>
                        <div className="mt-4 space-y-2 flex flex-col">
                            <Link href="/" className="hover:text-blue-400 transition duration-300 ease-in-out cursor-pointer">Terms & Conditions</Link>
                            <Link href="/" className="hover:text-blue-400 transition duration-300 ease-in-out cursor-pointer">Privacy Policy</Link>
                        </div>
                    </div>

                    {/* Column 3: Navigation Links */}
                    <div className="text-white">
                        <h3 className="text-xl font-semibold">Company</h3>
                        <div className="mt-4 flex flex-col space-y-2">
                            {
                                quickLinks.map(({ id, label, href }) => {
                                    return (
                                        <Link key={id} href={href} className="hover:text-blue-500 transition-colors ease-in-out cursor-pointer duration-300">
                                            {label}
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="text-white">
                        <h3 className="text-xl font-semibold ">Contact</h3>
                        <div className="mt-4 flex flex-col space-y-2">
                            <Link href="tel:0745882265" className="hover:text-blue-400 transition duration-300 ease-in-out cursor-pointer">+254 745 882265</Link>
                            <Link href="mailto:info@craftduka.com" className="hover:text-blue-400 transition duration-300 ease-in-out cursor-pointer">info@craftduka.com</Link>
                        </div>
                    </div>

                    {/* Column 5: Location */}
                    <div className="text-white">
                        <h3 className="text-xl font-semibold">Location</h3>
                        <div className="mt-4 space-y-2">
                            <span className="text-lg ">Nairobi, Kenya</span>

                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <div className="mt-4 flex justify-center space-x-4">
                        {
                            socialMediaIcons.map(({ id, text, url, handle }) => {
                                return (
                                    <Link href={url} key={id} className="relative flex flex-col items-center gap-1 group">
                                        {
                                            text === 'LinkedIn'
                                                ? <FaLinkedin />
                                                : text === 'Instagram'
                                                    ? <FaInstagram />
                                                    : text === 'Facebook'
                                                        ? <FaFacebook />
                                                        : text === 'Twitter'
                                                            ? <FaXTwitter />
                                                            : <FaGithub />
                                        }
                                        <span className="hidden text-center absolute group-hover:-translate-y-8 group-hover:transition-transform group-hover:flex z-10 duration-500 ease-in-out">
                                            {handle}
                                        </span>
                                    </Link>
                                )
                            })
                        }

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
