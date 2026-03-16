"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
  objectFit?: "cover" | "contain";
}

export function ZoomableImage({ src, alt, className, objectFit = "cover" }: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <div 
        className={`relative cursor-zoom-in ${className}`}
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={objectFit === "cover" ? "object-cover" : "object-contain"}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-zoom-out"
            />
            
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 z-[120] text-white/50 hover:text-white transition-colors p-2 bg-black/20 backdrop-blur-md rounded-full"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </motion.button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative z-[110] w-full h-full max-w-[95vw] max-h-[90vh] pointer-events-none"
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain rounded-xl shadow-2xl ring-1 ring-primary/20"
                priority
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
