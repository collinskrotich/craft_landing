"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BlobComponent from "./Blob";
import { PlayCircle } from "lucide-react";

const About = () => {
    // Data for the About section
    const aboutData = {
        title: "About Us",
        companyName: "CraftDuka Digital",
        description: [
            "We move with a creative strategy to help your business achieve its goals. We help improve your income through the services we offer. We make your content look interesting and attract customers to your business.",
            "Our team is dedicated to delivering innovative solutions that drive growth and success for your business.",
        ],
        ctaButtons: [
            {
                text: "About Us",
                href: "#services",
                className:
                    "px-6 py-2 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold shadow-lg transition-transform hover:scale-105 hover:shadow-xl",
            },
            {
                text: "Our Story",
                href: "#contact",
                icon: <PlayCircle className="w-5 h-5" />,
                className:
                    "flex gap-2 items-center px-6 py-2 text-blue-600 dark:text-white border border-blue-600 dark:border-gray-300 rounded-full font-semibold shadow-lg transition-transform hover:bg-blue-600 hover:text-white hover:scale-105 hover:shadow-xl",
            },
        ],
    };

    // Animation variants for framer-motion
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    return (
        <section
            id="about"
            className="relative flex flex-col items-center justify-center gap-12 px-6 py-24 md:py-32 overflow-hidden"
        >
            {/* Section Title */}
            <motion.h1
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ amount: 0.5 }} // Trigger when 50% of the element is in view
                className="text-slate-800 dark:text-slate-200 capitalize drop-shadow-lg font-semibold"
            >
                {aboutData.title}
            </motion.h1>

            {/* Content Container */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                {/* Left - Image */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInLeft}
                    viewport={{ amount: 0.5 }} // Trigger when 50% of the element is in view
                    className="relative w-full md:w-1/2"
                >
                    <div className="relative mx-auto">
                        <Image
                            src="/images/about.jpg"
                            alt="About Us"
                            width={700}
                            height={700}
                            className="rounded-lg shadow-2xl object-cover transition-all duration-700"
                            onLoad={(event) => {
                                const img = event.target as HTMLImageElement;
                                img.classList.add('opacity-100');
                            }}
                        />
                    </div>
                </motion.div>

                {/* Right - Text and CTA */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInRight}
                    viewport={{ amount: 0.5 }} // Trigger when 50% of the element is in view
                    className="md:max-w-2xl text-center md:text-left"
                >
                    {/* Company Name */}
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInUp}
                        viewport={{ amount: 0.5 }} // Trigger when 50% of the element is in view
                        className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r dark:from-slate-400 dark:to-slate-600 from-slate-700 to-slate-900 mb-4"
                    >
                        About {aboutData.companyName}
                    </motion.h2>

                    {/* Description */}
                    {aboutData.description.map((paragraph, index) => (
                        <motion.p
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeInUp}
                            transition={{ delay: index * 0.2 }} // Staggered delay
                            viewport={{ amount: 0.5 }} // Trigger when 50% of the element is in view
                            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6"
                        >
                            {paragraph}
                        </motion.p>
                    ))}

                    {/* CTA Buttons */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInUp}
                        viewport={{ amount: 0.5 }} // Trigger when 50% of the element is in view
                        className="flex items-center gap-4"
                    >
                        {aboutData.ctaButtons.map((button, index) => (
                            <motion.a
                                key={index}
                                href={button.href}
                                initial="hidden"
                                whileInView="visible"
                                variants={fadeInUp}
                                transition={{ delay: index * 0.3 }} // Staggered delay
                                viewport={{ amount: 0.5 }} // Trigger when 50% of the element is in view
                                className={`relative cursor-pointer ${button.className}`}
                            >
                                {button.icon && button.icon}
                                {button.text}
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
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

export default About;