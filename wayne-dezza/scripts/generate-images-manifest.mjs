import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const imagesDir = path.join(projectRoot, "public/images");
const outputFile = path.join(projectRoot, "public/images.json");

const imageFiles = fs
	.readdirSync(imagesDir)
	.filter(file => /\.(png|jpe?g|webp|gif)$/i.test(file))
	.sort((a, b) => a.localeCompare(b))
	.map(file => `/images/${file}`);

fs.writeFileSync(outputFile, `${JSON.stringify(imageFiles, null, "\t")}\n`, "utf8");

console.log(`Generated ${path.relative(projectRoot, outputFile)} with ${imageFiles.length} entries.`);