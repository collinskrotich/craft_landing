"use client";


import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroTextCounter = () => {
    const [count, setCount] = useState(0);
    const targetCount = 5; // Final number to reach

    useEffect(() => {
        let start = 0;
        const duration = 1500; // Animation duration in ms
        const step = duration / targetCount; // Calculate interval step

        const counter = setInterval(() => {
            start += 1;
            setCount(start);

            if (start >= targetCount) {
                clearInterval(counter);
            }
        }, step);

        return () => clearInterval(counter);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-6 -left-2 sm:top-8 sm:-left-16 bg-black/80 md:px-2 px-1 py-1 rounded-lg shadow-md flex flex-col items-start">
            <h1 className="uppercase font-semibold text-slate-300 text-xs sm:text-sm flex items-center gap-1">
                <span className="text-yellow-500 text-xs md:text-base">&#9733;</span> Great Projects
            </h1>
            <span className="text-base sm:text-xl font-bold text-slate-300 transition-all duration-500 ease-in-out">
                {count}+ Done
            </span>
        </motion.div>
    );
};

export default HeroTextCounter;
