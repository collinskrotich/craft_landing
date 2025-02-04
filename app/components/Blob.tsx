"use client";

import { useEffect, useState } from "react";

interface Blob {
    left: string;
    top: string;
    size: string;
    opacity: number;
    animationDelay: string;
}

export default function BlobComponent() {
    const [blobPositions, setBlobPositions] = useState<Blob[]>([]);

    useEffect(() => {
        const generateRandomBlobs = () => {
            const blobs: Blob[] = [];
            for (let i = 0; i < 6; i++) { // Increased number of blobs
                const blob: Blob = {
                    left: Math.random() * 100 + "%",
                    top: Math.random() * 100 + "%",
                    size: Math.random() * 50 + 10 + "px", // Increased size variation
                    opacity: Math.random() * 0.6 + 0.4,
                    animationDelay: Math.random() * 5 + "s",
                };
                blobs.push(blob);
            }
            setBlobPositions(blobs);
        };

        generateRandomBlobs();
    }, []);

    return (
        <div
            className="absolute top-0 left-0 w-full h-full opacity-40 dark:opacity-30"
            style={{
                zIndex: 0, // Make sure it stays behind other content
                pointerEvents: "none", // Prevent blobs from blocking interaction
            }}
        >
            {blobPositions.map((blob, index) => (
                <div
                    key={index}
                    className="absolute bg-blue-500 rounded-full"
                    style={{
                        left: blob.left,
                        top: blob.top,
                        width: blob.size,
                        height: blob.size,
                        opacity: blob.opacity,
                        animation: `blob-animation 6s infinite ${blob.animationDelay} ease-in-out`,
                    }}
                />
            ))}
        </div>
    );
}
