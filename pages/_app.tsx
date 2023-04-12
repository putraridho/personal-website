import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { useState } from "react";

import "@/styles/globals.sass";

import { ColorSchemePicker, Header } from "@/components";

const inter = Inter({
	weight: ["300", "400", "600", "700"],
	subsets: ["latin"],
	fallback: ["sans-serif"],
});

export default function App({ Component, pageProps }: AppProps) {
	const [selected, setSelected] = useState<number | null>(null);

	return (
		<>
			<style jsx global>{`
				${selected
					? `:root {
						--accent-100: var(--scheme-${selected}-100); 
						--accent-200: var(--scheme-${selected}-200); 
						--accent-300: var(--scheme-${selected}-300); 
						--accent-400: var(--scheme-${selected}-400); 
						--accent-500: var(--scheme-${selected}-500); 
					}`
					: ""}
				body {
					font-family: ${inter.style.fontFamily};
				}
			`}</style>
			<Header />
			<ColorSchemePicker onSelect={setSelected} />
			<Component {...pageProps} />
		</>
	);
}
