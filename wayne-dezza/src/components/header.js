"use client";

import {motion} from "motion/react";
import "@fontsource/hachi-maru-pop";

export default function Header({text = "Wayne Dezza"}) {
	return (
		<motion.h1
			className="text-5xl md:text-6xl font-extrabold text-center select-none leading-[1.2] md:leading-[1.3] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)]"
			style={{
				fontFamily: "'Hachi Maru Pop', sans-serif",
				background: "linear-gradient(90deg, #ffb6c1, #ff87a2, #ff5c8d)",
				WebkitBackgroundClip: "text",
				WebkitTextFillColor: "transparent",
			}}
			animate={{rotate: [-5, 5, -5]}}
			transition={{
				duration: 2,
				repeat: Infinity,
				ease: "easeInOut",
			}}
		>
			{text}
		</motion.h1>
	);
}