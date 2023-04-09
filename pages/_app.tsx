import { Header } from "@/components";
import "@/styles/globals.sass";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({
	weight: ["400", "600", "700"],
	subsets: ["latin"],
	fallback: ["sans-serif"],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<style jsx global>{`
				body {
					font-family: ${inter.style.fontFamily};
				}
			`}</style>
			<Header />
			<Component {...pageProps} />
		</>
	);
}
