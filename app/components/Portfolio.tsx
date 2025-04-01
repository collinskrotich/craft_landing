"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/data/data";
import Image from "next/image";
import DottedRectangle from "./DottedRectangle";

// Define the Project type
interface Project {
    image: string;
    title: string;
    description: string;
    link?: string;
}

// Define props type for ProjectCard
interface ProjectCardProps {
    project: Project;
}

const Portfolio: React.FC = () => {
    return (
        <section id="projects" className="relative py-20 overflow-hidden">
            <div className="absolute -z-10 md:top-36 md:right-[10px] top-0 -right-32 rotate-12">
                <DottedRectangle rows={10} cols={12} width="250px" height="120px" gap="6px" color="#EC1AFF" />
            </div>
            <div className="container mx-auto px-6">
                {/* Section Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }} // Slower transition
                    viewport={{ once: true }}
                    whileHover={{ y: 0 }} // Stops sliding on hover
                    className="text-lg sm:text-xl font-semibold dark:text-[#E2E2E2] text-[#377DFF] mb-12 text-center"
                >
                    Our Portfolio
                </motion.h1>

                {/* Section Subheading */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }} // Slower animation
                    whileHover={{ y: 0 }} // Stops on hover
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1D1D1D] dark:text-[#E2E2E2]">
                        Creative & Modern Solutions
                    </h2>
                    <p className="mt-4 text-lg sm:text-xl md:max-w-4xl mx-auto text-[#464646] dark:text-[#E2E2E2]">
                        Explore our latest projects, crafted with innovation and precision to bring ideas to life.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>

        </section>
    );
};

// ProjectCard component with explicit types
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }} // Smooth animation
            whileHover={{ scale: 1 }} // Stops scaling on hover
            className="relative w-full py-2 bg-white dark:bg-gray-900 rounded-xl shadow-lg transition-all hover:shadow-xl overflow-hidden group"
        >
            {/* Project Image */}
            <div className="relative h-60 w-full px-4">
                <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-all duration-700"
                    onLoad={(event) => {
                        const img = event.target as HTMLImageElement;
                        img.classList.add('opacity-100');
                    }}
                />
            </div>

            {/* Card Content */}
            <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-200">
                    {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{project.description}</p>

                {/* View Project Button */}
                {project.link && (
                    <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1 }} // Stops scaling on hover
                        transition={{ duration: 0.5 }} // Slower transition
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-full transition-all duration-300 group-hover:scale-105 shadow-lg"
                    >
                        View Project
                    </motion.a>
                )}
            </div>
        </motion.div>
    );
};

export default Portfolio;
