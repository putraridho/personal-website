import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import { useState } from "react";

import { Header } from "@/components";

import "@/styles/globals.sass";

const ColorSchemePicker = dynamic(() => import("@/components").then((mod) => mod.ColorSchemePicker), { ssr: false });
const DarkModeToggle = dynamic(() => import("@/components").then((mod) => mod.DarkModeToggle), { ssr: false });
const Toast = dynamic(() => import("@/components").then((mod) => mod.Toast), { ssr: false });

const inter = Inter({
	weight: ["300", "400", "600", "700"],
	subsets: ["latin"],
	fallback: ["sans-serif"],
});

export default function App({ Component, pageProps }: AppProps) {
	const [colorScheme, setColorScheme] = useState<number | null>(null);

	return (
		<ThemeProvider>
			<style jsx global>{`
				:root {
					${colorScheme
						? `
							--accent-100: var(--scheme-${colorScheme}-100); 
							--accent-200: var(--scheme-${colorScheme}-200); 
							--accent-300: var(--scheme-${colorScheme}-300); 
							--accent-400: var(--scheme-${colorScheme}-400); 
							--accent-500: var(--scheme-${colorScheme}-500);
						`
						: ""}
				}
				body {
					font-family: ${inter.style.fontFamily};
				}
			`}</style>
			<Header />
			<DarkModeToggle />
			<ColorSchemePicker onSelect={setColorScheme} />
			<Toast />
			<Component {...pageProps} />
			<Analytics />
		</ThemeProvider>
	);
}
