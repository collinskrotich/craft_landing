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
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);

      // Hide success message after 3 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 3000);
    }, 2000);
  };

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

            {/* Success Message */}
            <AnimatePresence>
              {formSubmitted && (
                <motion.div
                  className="flex items-center justify-center gap-2 p-3 mb-4 bg-green-500 text-white rounded-lg shadow-md"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <CheckCircle size={20} />
                  <span>Message sent successfully!</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Contact Form */}
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              {/* Name Input */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  className="peer w-full p-4 border rounded-lg dark:bg-[#121820] dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-4 text-gray-500 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all text-sm"
                >
                  Name
                </label>
              </div>

              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="peer w-full p-4 border rounded-lg dark:bg-[#121820] dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-4 text-gray-500 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all text-sm"
                >
                  Email
                </label>
              </div>

              {/* Message Input */}
              <div className="relative">
                <textarea
                  id="message"
                  className="peer w-full p-4 border rounded-lg dark:bg-[#121820] dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder=" "
                  rows={4}
                  required
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-4 top-4 text-gray-500 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all text-sm"
                >
                  Message
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full py-4 font-semibold rounded-lg transition transform hover:scale-[1.02] focus:ring focus:ring-blue-300 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message 🚀"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
