"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function HeartsBackground() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const generateHearts = () => {
      const screenWidth = window.innerWidth;
      const heartCount = Math.max(50, Math.min(200, Math.floor(screenWidth / 5)));

      const newHearts = Array.from({ length: heartCount }).map(() => {
        const depth = Math.random();
        const size = 12 + depth * 28;
        const left = Math.random() * 100;
        const duration = 10 - depth * 6;
        const delay = Math.random() * 5;
        const drift = (Math.random() - 0.5) * 250;
        const rotation = (Math.random() - 0.5) * 30;
        const opacity = 0.4 + depth * 0.6;

        const rand = Math.random();
        let emoji;
        if (rand < 0.4) emoji = "🩷";
        else if (rand < 0.8) emoji = "❤️";
        else emoji = "🧡";

        return { size, left, duration, delay, drift, rotation, opacity, emoji };
      });

      setHearts(newHearts);
    };

    generateHearts();

    window.addEventListener("resize", generateHearts);

    return () => window.removeEventListener("resize", generateHearts);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-100 via-pink-200 to-pink-400" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "url('/noise.png')", opacity: 0.5 }}
      />
      {hearts.map((heart, i) => (
        <motion.div
          key={i}
          className="absolute select-none"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            opacity: heart.opacity,
            color:
              heart.emoji === "❤️"
                ? "red"
                : heart.emoji === "🧡"
                ? "orange"
                : "#ff8fc0",
          }}
          initial={{ y: "-10vh" }}
          animate={{
            y: ["-10vh", "100vh"],
            x: [0, heart.drift],
            rotate: [0, heart.rotation],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: [0.65, 0, 0.35, 1],
          }}
        >
          {heart.emoji}
        </motion.div>
      ))}
    </div>
  );
}