"use client";

import Layout from "../components/layout";
import Gallery from "../components/gallery";
import Head from "next/head";

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Wayne Dezza</title>
				<meta name="description" content="I Can't Read!"/>
				<meta property="og:title" content="Wayne Dezza"/>
				<meta property="og:description" content="I Can't Read!"/>
				<meta property="og:image" content="/images/waynedezza.jpg"/>
				<meta property="og:type" content="website"/>
				<meta property="og:url" content="https://waynederryhasnoteeth.co.uk/"/>
			</Head>
			<div className="rounded-2xl p-6 bg-pink-300/30 backdrop-blur-sm shadow-inner">
				<Gallery/>
			</div>
		</Layout>
	);
}
