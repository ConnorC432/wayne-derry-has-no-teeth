"use client";

import {motion} from "motion/react";
import {useState, useEffect} from "react";
import Image from "next/image";

export default function ImageCard({src, onClick, index}) {
	const [rotation, setRotation] = useState(0);

	useEffect(() => {
		setRotation(Math.random() * 6 - 3); // initial rotation -3° to 3°
	}, []);

	return (
		<motion.div
			className="overflow-hidden rounded-2xl relative cursor-pointer group"
			initial={{opacity: 0, y: 40, rotate: rotation}}
			animate={{opacity: 1, y: 0, rotate: rotation}}
			transition={{delay: index * 0.1, duration: 0.6}}
			whileHover={{
				rotate: [
					-rotation - 5,
					rotation + 5,
					-rotation - 3,
					rotation + 3,
					rotation,
				],
				scale: 1.05,
				transition: {duration: 0.6, ease: "easeInOut"},
			}}
			onHoverEnd={() => {
				const newRotation = Math.random() * 6 - 3;
				setRotation(newRotation);
			}}
			onClick={onClick}
		>
			<div className="relative w-full h-64">
				<Image
					src={src}
					alt=""
					fill
					className="object-cover rounded-2xl"
					sizes="(max-width: 768px) 100vw, 25vw"
					priority={index < 4}
				/>
			</div>
		</motion.div>
	);
}