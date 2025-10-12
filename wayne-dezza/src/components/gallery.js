"use client";

import {motion} from "motion/react";
import {useState, useEffect} from "react";
import ImageCard from "./imagecard";
import ImageModal from "./imagemodal";

export default function Gallery() {
	const [images, setImages] = useState([]);
	const [selected, setSelected] = useState(null);

	useEffect(() => {
		fetch("/api/images")
			.then(res => res.json())
			.then(data => setImages(data))
			.catch(err => console.error("Failed to load images:", err));
	}, []);

	return (
		<>
			<div className="h-[70vh] overflow-y-auto p-2 relative">
				<motion.div
					className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					transition={{duration: 1}}
				>
					{images.map((src, i) => (
						<ImageCard key={i} src={src} onClick={() => setSelected(src)} index={i}/>
					))}
				</motion.div>
			</div>

			{selected && <ImageModal src={selected} onClose={() => setSelected(null)}/>}
		</>
	);
}