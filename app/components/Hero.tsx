"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import HeroTextCounter from "./HeroCounter";
import DottedRectangle from "./DottedRectangle";

const Hero = () => {
    return (
        <section
            className="relative flex flex-col items-center justify-center gap-6 min-h-screen px-4 sm:px-6 py-20 sm:py-24 md:py-32 overflow-hidden"
            id="home"
        >
            {/* Floating Dots */}
            <div className="absolute w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-b from-[#4485FFCC] to-[#377DFF] rounded-full top-36 sm:top-40 -left-1 sm:left-12 md:left-40" />
            <div className="absolute w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-b from-[#FF8E8E] to-[#F62424] rounded-full top-28 sm:top-48 -right-4 sm:right-10 hidden md:flex" />

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center max-w-3xl mx-auto mb-8 mt-8"
            >
                <h1 className="hero-text text-[#1D1D1D] dark:text-[#E2E2E2] mb-4 sm:mb-6">
                    Make your dream business goal come true
                </h1>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 hero-p"
                >
                    When you need us to improve your business, come with us to help your business achieve its goals. Sit back and feel the success!
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Link href="#contact">
                        <button className="bg-[#377DFF] dark:bg-[#E2E2E2] dark:text-[#0E0E0E] shadow-lg transition-colors duration-300 px-6 sm:px-8 py-2 sm:py-3 rounded-full text-white font-bold text-sm sm:text-base">
                            Start Project
                        </button>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Background Image with Pagination & Text */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative flex flex-col items-center"
            >
                {/* Dotted Rectangles - Positioned Behind the Image */}
                <div className="relative flex justify-center items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="absolute -top-10 sm:-top-12 left-0 right-0 flex justify-start -z-10"
                    >
                        <DottedRectangle rows={4} cols={10} width="250px" height="120px" gap="6px" color="#377DFF" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="absolute -bottom-10 sm:-bottom-12 left-0 right-0 flex justify-start -z-10"
                    >
                        <DottedRectangle rows={4} cols={10} width="250px" height="120px" gap="6px" color="red" />
                    </motion.div>

                    {/* Hero Image */}
                    <Image
                        width={700}
                        height={600}
                        src="/images/hero.jpg"
                        alt="Background Image"
                        className="rounded-xl shadow-lg mx-auto transition-all duration-700 w-full max-w-xs sm:max-w-lg md:max-w-2xl"
                        onLoad={(event) => {
                            const img = event.target as HTMLImageElement;
                            img.classList.add("opacity-100");
                        }}
                    />
                </div>

                {/* Floating Dots */}
                <div className="absolute w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-b from-[#FF8E8E] to-[#F62424] rounded-full top-12 -left-4 sm:top-32 sm:-left-12 hidden md:flex" />
                <div className="absolute w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-b from-[#4485FFCC] to-[#377DFF] rounded-full -top-2 sm:-top-4 -right-8 sm:-right-20 hidden md:flex" />

                {/* Hero Counter */}
                <HeroTextCounter />

                {/* Testimonial Component (Bottom-Right) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="absolute md:bottom-2 -bottom-10 -right-2 sm:bottom-3 sm:-right-3 md:-right-24 bg-white text-xs sm:text-sm px-2 sm:px-3 py-2 rounded shadow-lg flex flex-col gap-1 items-start md:w-36 w-28 sm:w-44"
                >
                    <div className="flex items-center gap-1 sm:gap-2">
                        {/* User Image */}
                        <Image
                            src="/images/user-avatar.jpg"
                            alt="User Avatar"
                            width={20}
                            height={20}
                            className="rounded-full border border-gray-700"
                        />

                        {/* User Info */}
                        <div className="flex flex-col leading-tight">
                            <p className="text-slate-800 font-semibold text-xs">John Doe</p>
                            <p className="text-gray-700 text-xs">@johndoe</p>
                        </div>
                    </div>
                    {/* Testimonial Text */}
                    <p className="font-medium text-gray-800 text-xs italic">
                        &quot;This team is really the best in its field, I don&apos;t regret working with them!&quot; 🚀
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
