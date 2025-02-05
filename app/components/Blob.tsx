"use client";

import { useEffect, useState } from "react";

interface Blob {
    left: string;
    top: string;
    size: string;
    opacity: number;
    animationDelay: string;
    blur: string;
    borderRadius: string;
    color: string;
}

export default function BlobComponent() {
    const [blobPositions, setBlobPositions] = useState<Blob[]>([]);

    useEffect(() => {
        console.log("✅ BlobComponent is rendering..."); // Debugging

        const generateRandomBlobs = () => {
            const blobs: Blob[] = [];
            const colors = [
                "rgba(0, 162, 255, 0.6)", // Neon Blue
                "rgba(91, 33, 182, 0.5)", // Techy Purple
                "rgba(0, 201, 167, 0.5)", // Futuristic Teal
            ];

            for (let i = 0; i < 8; i++) {
                const blob: Blob = {
                    left: Math.random() * 90 + "%",
                    top: Math.random() * 90 + "%",
                    size: Math.random() * 80 + 20 + "px",
                    opacity: Math.random() * 0.4 + 0.3,
                    animationDelay: Math.random() * 3 + "s",
                    blur: Math.random() * 10 + 10 + "px",
                    borderRadius: Math.random() > 0.5 ? "50%" : "40% 60% 60% 40%",
                    color: colors[Math.floor(Math.random() * colors.length)],
                };
                blobs.push(blob);
            }
            setBlobPositions(blobs);
        };

        generateRandomBlobs();
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {blobPositions.map((blob, index) => (
                <div
                    key={index}
                    className="absolute animate-blob"
                    style={{
                        left: blob.left,
                        top: blob.top,
                        width: blob.size,
                        height: blob.size,
                        background: blob.color,
                        opacity: blob.opacity,
                        borderRadius: blob.borderRadius,
                        filter: `blur(${blob.blur})`,
                        animationDelay: blob.animationDelay,
                    }}
                />
            ))}
        </div>
    );
}
