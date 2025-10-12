"use client";

import Background from "./background";
import Header from "./header";

export default function Layout({children}) {
	return (
		<>
			<div className="fixed inset-0 z-0">
				<Background className="w-full h-full"/>
			</div>

			<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full z-10 py-8 pointer-events-none">
				<Header text="Wayney Dezza!"/>
			</div>

			<div className="relative z-20 mt-[160px] px-4 sm:px-8 max-w-5xl mx-auto w-full">
				{children}
			</div>
		</>
	);
}