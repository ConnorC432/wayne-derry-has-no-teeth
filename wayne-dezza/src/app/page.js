import Layout from "../components/layout";
import Gallery from "../components/gallery";
import Head from "next/head";

export const metadata = {
  title: "Wayne Dezza",
  description: "I Can't Read!",
  openGraph: {
    title: "Wayne Dezza",
    description: "I Can't Read!",
    url: "https://waynederryhasnoteeth.co.uk/",
    type: "website",
    images: [
      {
        url: "https://waynederryhasnoteeth.co.uk/images/waynedezza.jpg",
        width: 956,
        height: 1920,
        alt: "Wayne Dezza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wayne Dezza",
    description: "I Can't Read!",
    images: ["https://waynederryhasnoteeth.co.uk/images/waynedezza.jpg"],
  },
};

export default function Home() {
	return (
		<Layout>
			<div className="rounded-2xl p-6 bg-pink-300/30 backdrop-blur-sm shadow-inner">
				<Gallery/>
			</div>
		</Layout>
	);
}