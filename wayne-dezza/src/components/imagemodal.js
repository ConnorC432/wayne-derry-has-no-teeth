"use client";

import {motion} from "motion/react";
import {createPortal} from "react-dom";

export default function ImageModal({src, onClose}) {
	return createPortal(
		<motion.div
			className="fixed inset-0 z-[9999] flex items-center justify-center"
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}
			transition={{duration: 0.6, ease: "easeInOut"}}
			onClick={onClose}
		>
			<motion.div
				className="absolute inset-0 rounded-2xl bg-pink-950/40"
				initial={{opacity: 0}}
				animate={{opacity: 1}}
				exit={{opacity: 0}}
				transition={{duration: 0.6, ease: "easeInOut"}}
			/>
			<motion.img
				src={src}
				alt=""
				className="relative max-w-3xl max-h-[80vh] rounded-xl shadow-2xl"
				initial={{scale: 0.8, opacity: 0}}
				animate={{scale: 1, opacity: 1}}
				transition={{duration: 0.4, ease: "easeOut"}}
				onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
			/>
		</motion.div>,
		document.body
	);
}