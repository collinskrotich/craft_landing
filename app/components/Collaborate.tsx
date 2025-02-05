"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import DottedRectangle from "./DottedRectangle";
import { useTheme } from "next-themes";

const Collaborate = () => {
    const { theme } = useTheme();

    return (
        <section className="relative h-[80vh] py-16 overflow-hidden container mx-auto px-6 flex flex-col md:flex-row items-center justify-between md:gap-12 gap-6">
            {/* Text Section */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 text-center md:text-left"
            >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                    Interesting Collaboration With Us?
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
                    We love working with passionate people! Whether you’re looking for a project partner, or you have a vision, we’re here to bring your ideas to life. Let&apos;s build something amazing together.
                </p>
                <motion.a
                    href="#contact"
                    className="inline-block dark:bg-[#E2E2E2] dark:text-[#0D0D0D] text-white bg-[#377DFF] shadow-[#377DFF80] drop-shadow-lg font-semibold py-3 px-6 rounded-full transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                >
                    Get Started
                </motion.a>
            </motion.div>

            {/* Images Section */}
            <div className="relative w-full md:w-1/2 flex justify-center">

                {/* Second Image (Base Image) */}
                <div className="relative z-10 w-3/4 sm:w-1/2 md:w-[400px]">
                    <div className="absolute -z-10 top-24 -left-[255px] ">
                        <DottedRectangle rows={7} cols={9} width="250px" height="120px" gap="6px" color={theme === "dark" ? "#E2E2E2" : "#377DFF"} />
                    </div>
                    <Image
                        src="/images/image2.jpg"
                        alt="Image 2"
                        width={400}
                        height={300}
                        className="rounded-xl shadow-lg object-cover transition-all duration-700"
                        onLoad={(event) => {
                            const img = event.target as HTMLImageElement;
                            img.classList.add('opacity-100');
                        }}
                    />
                </div>

                {/* First Image (Overlapping Image) */}
                <div className="static md:absolute z-20 md:top-2/3 md:left-0 w-3/4 sm:w-1/2 md:w-[400px]">
                    <div className="absolute -z-50 bottom-28 -right-[180px] ">
                        <DottedRectangle rows={4} cols={11} width="250px" height="120px" gap="6px" color="#FF6E1A" />
                    </div>
                    <Image
                        src="/images/image1.jpg"
                        alt="Image 1"
                        width={400}
                        height={300}
                        className="rounded-xl shadow-lg object-cover transition-all duration-700"
                        onLoad={(event) => {
                            const img = event.target as HTMLImageElement;
                            img.classList.add('opacity-100');
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Collaborate;
