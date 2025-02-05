"use client";

import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center px-4">
            {/* Funny Emoji Animation */}
            <div className="text-6xl animate-bounce mb-4">🤔</div>

            {/* 404 Image */}
            <Image
                src="/images/404.svg" // Make sure you place a 404 image inside /public/
                alt="Lost Astronaut"
                width={400}
                height={300}
                className="mb-6 transition-all duration-700"
                onLoad={(event) => {
                    const img = event.target as HTMLImageElement;
                    img.classList.add('opacity-100');
                }}
            />

            {/* Title & Funny Message */}
            <h1 className="text-5xl font-extrabold">404 - Uh-oh!</h1>
            <p className="text-lg text-gray-600 mt-2 text-center">
                Looks like you took a wrong turn into the internet abyss.
                <br />Even Google Maps can’t help you here! 🗺️
            </p>

            {/* Home Button */}
            <Link
                href="/"
                className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition duration-300"
            >
                🚀 Take Me Home
            </Link>
        </div>
    );
};

export default NotFound;
