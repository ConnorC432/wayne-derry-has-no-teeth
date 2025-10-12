import fs from "fs";
import path from "path";

export async function GET() {
	const imagesDir = path.join(process.cwd(), "public/images");
	const files = fs.readdirSync(imagesDir).filter(file => /\.(png|jpe?g|webp|gif)$/i.test(file));
	const imageUrls = files.map(file => `/images/${file}`);

	return new Response(JSON.stringify(imageUrls), {
		headers: {"Content-Type": "application/json"},
	});
}