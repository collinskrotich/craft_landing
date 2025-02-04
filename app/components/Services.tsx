"use client";

import { motion } from "framer-motion";
import BlobComponent from "./Blob";
import { Code, Lightbulb, Paintbrush, Server } from "lucide-react";

const Services = () => {

    const fadeInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    const services = [
        {
            icon: <Lightbulb className="w-12 h-12 text-blue-600" />,
            title: "Creative Strategy",
            description:
                "We develop innovative strategies to help your business stand out and achieve its goals.",
        },
        {
            icon: <Code className="w-12 h-12 text-blue-600" />,
            title: "Web Development",
            description:
                "We build fast, responsive, and user-friendly websites tailored to your business needs.",
        },
        {
            icon: <Paintbrush className="w-12 h-12 text-blue-600" />,
            title: "Design & Branding",
            description:
                "We create stunning designs and branding that reflect your business identity and attract customers.",
        },
        {
            icon: <Server className="w-12 h-12 text-blue-600" />,
            title: "Backend Development",
            description:
                "We build secure, scalable, and high-performance backend systems to power your applications.",
        }

    ];

    return (
        <section
            id="services"
            className="relative flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-24 md:py-32 overflow-hidden"
        >
            {/* Left - Text Content */}
            <div className="md:w-1/3 text-center md:text-left">
                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r dark:from-slate-400 dark:to-slate-600 from-slate-700 to-slate-900 mb-12"
                >
                    Our services
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInLeft}
                    transition={{ delay: 0.2 }}
                    viewport={{ amount: 0.5 }}
                    className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6"
                >
                    We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInLeft}
                    transition={{ delay: 0.6 }}
                    viewport={{ amount: 0.5 }}
                    className="flex flex-col md:flex-row items-center gap-4"
                >
                    <a
                        href="#services"
                        className="relative px-6 py-2 cursor-pointer text-white bg-gradient-to-r from-blue-600 to-blue-600 rounded-full font-semibold shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
                    >
                        Explore Our Services
                    </a>
                </motion.div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        className="bg-slate-300 dark:bg-gray-800 max-w-80 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="text-center">
                            {/* Icon */}
                            <div className="flex justify-center mb-6">
                                {service.icon}
                            </div>
                            {/* Title */}
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                                {service.title}
                            </h3>
                            {/* Description */}
                            <p className="text-gray-600 dark:text-gray-300">
                                {service.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Random Blobs */}
            <BlobComponent />

            {/* Custom CSS for Service Card Hover Effect */}
            <style jsx>{`
        .service-card:hover {
          transform: translateY(-10px) rotate(2deg);
          box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
        }
      `}</style>
        </section>
    );
};

export default Services;