"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const [formSubmitted, setFormSubmitted] = useState(false); 
    const [loading, setLoading] = useState(false);  
    const [formStatus, setFormStatus] = useState<{ success: boolean | null; message: string }>({
        success: null,
        message: "",
    });

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setLoading(true); 
        setFormStatus({ success: null, message: "" }); 
        const formData = new FormData(event.target as HTMLFormElement);
        const accessKey = process.env.NEXT_PUBLIC_ACCESS_KEY;

        if (!accessKey) {
            setLoading(false);
            setFormStatus({ success: false, message: "Access key is missing. Please contact the administrator." });
            return;
        }

        formData.append("access_key", accessKey);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify(Object.fromEntries(formData)),
            });

            const result = await response.json();

            if (result.success) {
                setFormStatus({ success: true, message: "Message sent! We will respond to you shortly!" });
                (event.target as HTMLFormElement).reset();
                setFormSubmitted(true); 
            } else {
                setFormStatus({ success: false, message: result.message || "Something went wrong. Please try again." });
            }
        } catch {
            setFormStatus({ success: false, message: "An error occurred. Please check your internet connection." });
        } finally {
            setLoading(false); 
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 flex items-center justify-center bg-black/50 dark:bg-black/70 backdrop-blur-lg z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="relative w-[90%] max-w-lg p-8 rounded-lg bg-white dark:bg-[#0B0F15] shadow-2xl border border-transparent
                            dark:border-gray-800 bg-gradient-to-br from-gray-50 to-white dark:from-[#0B0F15] dark:to-[#121820]"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
                            onClick={onClose}
                        >
                            <X size={24} />
                        </button>

                        {/* Modal Title */}
                        <h2 className="text-3xl font-extrabold text-center mb-6 dark:text-white">
                            Get in Touch ✨
                        </h2>

                        {/* Success/Error Message */}
                        {formStatus.message && !formSubmitted && (
                            <div
                                className={`p-3 mb-4 rounded-lg shadow-md ${formStatus.success ? "bg-green-500" : "bg-red-500"} text-white`}
                            >
                                <div className="flex items-center gap-2">
                                    {formStatus.success ? (
                                        <CheckCircle size={20} />
                                    ) : (
                                        <X size={20} />
                                    )}
                                    <span>{formStatus.message}</span>
                                </div>
                            </div>
                        )}

                        {/* Success Message After Submission */}
                        {formSubmitted ? (
                            <div className="p-3 text-center">
                                <h3 className="text-xl font-semibold text-green-600">Form Submitted Successfully!</h3>
                                <p className="text-gray-600">Thank you for reaching out. We&apos;ll get back to you soon.</p>
                                <button
                                    className="mt-4 text-blue-600 hover:text-blue-800"
                                    onClick={() => {
                                        setFormSubmitted(false);  // Reset form for future submissions
                                        setFormStatus({ success: null, message: "" });  // Clear form status
                                    }}
                                >
                                    Submit Another Message
                                </button>
                            </div>
                        ) : (
                            // Contact Form
                            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                                {/* Name Input */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="peer w-full p-4 border rounded-lg dark:bg-[#121820] dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        htmlFor="name"
                                        className="absolute left-4 -top-5 text-gray-500 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all text-sm"
                                    >
                                        Name
                                    </label>
                                </div>

                                {/* Email Input */}
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="peer w-full p-4 border rounded-lg dark:bg-[#121820] dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        htmlFor="email"
                                        className="absolute left-4 -top-5 text-gray-500 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all text-sm"
                                    >
                                        Email
                                    </label>
                                </div>

                                {/* Message Input */}
                                <div className="relative">
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="peer w-full p-4 border rounded-lg dark:bg-[#121820] dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder=" "
                                        rows={4}
                                        required
                                    ></textarea>
                                    <label
                                        htmlFor="message"
                                        className="absolute left-4 -top-5 text-gray-500 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all text-sm"
                                    >
                                        Message
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className={`w-full py-4 font-semibold rounded-lg transition transform hover:scale-[1.02] focus:ring focus:ring-blue-300 ${loading
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-blue-600 text-white hover:bg-blue-700"
                                        }`}
                                    disabled={loading}  // Disable button while loading
                                >
                                    {loading ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
