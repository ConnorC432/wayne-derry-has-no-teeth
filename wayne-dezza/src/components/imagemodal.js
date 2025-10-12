"use client";

import { motion } from "motion/react";
import { createPortal } from "react-dom";
import "@fontsource/hachi-maru-pop";

export default function ImageModal({ src, onClose }) {
  const getImageName = (src) => {
    const parts = src.split("/");
    return parts[parts.length - 1];
  };

  const title = getImageName(src);

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      onClick={onClose}
    >
      <motion.div
        className="absolute inset-0 rounded-2xl bg-pink-950/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      <motion.h2
        className="relative z-10 mb-4 text-2xl font-bold drop-shadow-lg text-center"
        style={{
          fontFamily: "'Hachi Maru Pop', sans-serif",
          background: "linear-gradient(90deg, #ffb6c1, #ff87a2, #ff5c8d)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        onClick={(e) => e.stopPropagation()}
      >
        {title}
      </motion.h2>

      <motion.img
        src={src}
        alt={title}
        className="relative max-w-3xl max-h-[80vh] rounded-xl shadow-2xl z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
      />
    </motion.div>,
    document.body
  );
}