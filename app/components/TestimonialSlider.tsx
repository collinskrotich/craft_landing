"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { testimonials } from "@/data/data";



const InfiniteTestimonialSlider = () => {
    const [sliderWidth, setSliderWidth] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const controls = useAnimation();
    const [isHovered, setIsHovered] = useState(false);

    // Duplicate testimonials for seamless loop
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    useEffect(() => {
        if (sliderRef.current) {
            setSliderWidth(sliderRef.current.scrollWidth / 2);
        }

        // Start the animation initially
        controls.start({
            x: [0, -sliderWidth],
            transition: {
                duration: 25,
                repeat: Infinity,
                ease: "linear",
            },
        });
    }, [sliderWidth, controls]);

    // Stop the animation when hovering
    useEffect(() => {
        if (isHovered) {
            controls.stop();
        } else {
            controls.start({
                x: [0, -sliderWidth],
                transition: {
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                },
            });
        }
    }, [isHovered, sliderWidth, controls]);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <section className="relative py-4 overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Section Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r dark:from-slate-400 dark:to-slate-600 from-slate-700 to-slate-900 mb-12 text-center"
                >
                    Testimonials
                </motion.h1>

                {/* Section Subheading */}
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r dark:from-slate-400 dark:to-slate-600 from-slate-700 to-slate-900 mb-12 text-center"
                >
                    People Talk About Us
                </motion.h2>

                {/* Infinite Slider Container */}
                <div
                    className="relative w-full overflow-hidden cursor-pointer"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <motion.div
                        ref={sliderRef}
                        className="flex gap-8"
                        animate={controls}
                    >
                        {/* Render duplicated testimonials */}
                        {duplicatedTestimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="flex-shrink-0 w-full sm:w-64 md:w-80 lg:w-96 p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all hover:shadow-xl"
                            >
                                {/* User Avatar */}
                                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 border-slate-500 mb-4 sm:mb-6">
                                    <Image
                                        fill
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover transition-all duration-700"
                                        onLoad={(event) => {
                                            const img = event.target as HTMLImageElement;
                                            img.classList.add('opacity-100');
                                        }}
                                    />
                                </div>

                                {/* User Info */}
                                <h3 className="text-lg sm:text-2xl font-bold text-gray-800 dark:text-white mb-1 sm:mb-2">
                                    {testimonial.name}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
                                    {testimonial.username}
                                </p>

                                {/* Testimonial Text */}
                                <p className="text-sm sm:text-lg text-gray-600 dark:text-gray-300 italic">
                                    &quot;{testimonial.comment}&quot;
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

        </section>
    );
};

export default InfiniteTestimonialSlider;
