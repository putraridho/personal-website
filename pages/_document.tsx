import { Html, Head, Main, NextScript } from "next/document";

export default function MyDocument() {
	return (
		<Html lang="en">
			<Head>
				<link rel="mrp logo" href="/logo.svg" type="image/x-icon" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
