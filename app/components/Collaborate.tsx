"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BlobComponent from "./Blob";

const Collaborate = () => {
    return (
        <section className="relative py-8 overflow-hidden">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Text Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2 text-center md:text-left"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                        Let’s Collaborate!
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
                        We love working with passionate people! Whether you’re looking for a project partner, or you have a vision, we’re here to bring your ideas to life. Let&apos;s build something amazing together.
                    </p>
                    <motion.a
                        href="#contact"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    >
                        Start Collaborating
                    </motion.a>
                </motion.div>

                {/* Images Section */}
                <div className="relative w-full md:w-1/2 flex justify-center">
                    {/* Second Image (On Top, More on the Right) */}
                    <div className="relative z-10 w-3/4 sm:w-1/2 md:w-[400px]">
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

                    {/* First Image (Covers 5% of Bottom of Second Image, Positioned to the Left) */}
                    <div className="absolute z-20 top-2/3 left-0 w-3/4 sm:w-1/2 md:w-[400px]">
                        <Image
                            src="/images/image1.jpg"
                            alt="Image 1"
                            width={400}
                            height={300}
                            className="rounded-xl shadow-lg object-cover transition-all duration-700"
                        />
                    </div>
                </div>
            </div>
            {/* Blob Component */}
            <BlobComponent />

            {/* Blob Animation Styles */}
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

export default Collaborate;
