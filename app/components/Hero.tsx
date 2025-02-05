"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import HeroTextCounter from "./HeroCounter";
import BlobComponent from "./Blob";

const Hero = () => {
    // Animation variants for framer-motion

    const fadeInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    return (
        <section
            className="relative flex flex-col items-center justify-center gap-8 bg-background min-h-screen text-foreground px-4 py-24 md:py-32 overflow-hidden"
            id="home"
        >
            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center max-w-3xl mx-auto md:mx-0"
            >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r dark:from-slate-400 dark:to-slate-600 from-slate-700 to-slate-900 mb-6">
                    Make Your Dream Business Goal Come True
                </h1>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg sm:text-xl mb-8 text-gray-600 dark:text-gray-300"
                >
                    When you need us to improve your business, then come with us to help your business achieve its goals. You just sit back and feel the success!
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Link href="#contact">
                        <button className="cta-button">Start Project</button>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Background Image with Pagination & Text */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
            >
                <Image
                    width={700}
                    height={600}
                    src="/images/hero.jpg"
                    alt="Background Image"
                    className="rounded-md drop-shadow-xl mx-auto transition-all duration-700"
                    onLoad={(event) => {
                        const img = event.target as HTMLImageElement;
                        img.classList.add('opacity-100');
                    }}
                />

                {/* Pagination Dots (Top-Left & Bottom-Left) */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInLeft}
                    viewport={{ amount: 0.5 }}
                    className="absolute -top-3 left-6 flex gap-1"
                >
                    {[...Array(5)].map((_, index) => (
                        <span
                            key={index}
                            className=" md:w-1 md:h-1 h-[2px] w-[2px] rounded-full dark:bg-slate-300 bg-slate-600"
                        />
                    ))}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="absolute -bottom-3 left-6 flex gap-1"
                >
                    {[...Array(5)].map((_, index) => (
                        <span
                            key={index}
                            className="md:w-1 md:h-1 w-[2px] h-[2px] rounded-full bg-red-600"
                        />
                    ))}
                </motion.div>

                {/* Text Component (Top-Left) */}
                <motion.div

                >
                    <HeroTextCounter />
                </motion.div>

                {/* Testimonial Component (Bottom-Right) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="absolute bottom-3 -right-3 md:-right-6 bg-black/80 text-sm px-1 md:px-3 md:py-2 py-1 rounded shadow-md flex flex-col gap-1 items-start"
                >
                    <div className="flex items-center md:gap-2 gap-1">
                        {/* User Image */}
                        <Image
                            src="/images/user-avatar.jpg"
                            alt="User Avatar"
                            width={24}
                            height={24}
                            className="rounded-full border border-gray-300"
                        />

                        {/* User Info */}
                        <div className="flex flex-col leading-tight">
                            <p className="text-white font-semibold text-xs">John Doe</p>
                            <p className="text-gray-400 text-xs">@johndoe</p>
                        </div>
                    </div>
                    {/* Testimonial Text */}
                    <p className="font-medium text-gray-300 text-xs italic">
                        &quot;Amazing service!&quot; 🚀
                    </p>
                </motion.div>
            </motion.div>

            {/* Random Blobs */}
            <BlobComponent />

            <style jsx>{`
        @keyframes blob-animation {
          0% {
            transform: scale(1) translate(0, 0);
          }
          50% {
            transform: scale(1.5) translate(10px, 10px);
          }
          100% {
            transform: scale(1) translate(0, 0);
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;