import { Analytics } from "@vercel/analytics/react";
import axios from "axios";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { Work_Sans } from "next/font/google";
import Head from "next/head";

import { Footer } from "@/components";
import { serviceOptions } from "@/service";

import "@/styles/globals.sass";

const Toast = dynamic(() => import("@/components").then((mod) => mod.Toast), { ssr: false });

const workSans = Work_Sans({
	weight: ["300", "400", "600", "900"],
	subsets: ["latin"],
	fallback: ["sans-serif"],
});

serviceOptions.axios = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASE_URL || "",
	timeout: 3600,
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<style jsx global>{`
				body {
					font-family: ${workSans.style.fontFamily};
				}
			`}</style>
			<Head>
				<title>{`🪄 Greetings, It's Ridho`}</title>
				<meta
					name="description"
					content="A mortal Frontend Wizard, casting spells to create visually captivating and intuitive websites that enchant users with seamless navigation and awe-inspiring design."
				/>
				<meta name="author" content="Muhammad Ridho Putra" />
			</Head>
			<Component {...pageProps} />
			<Analytics />
			<Toast />
		</>
	);
}
