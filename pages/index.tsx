import { GetStaticProps } from "next";

import { Container } from "@/components";
import { Collections, Hero } from "@/ui/home";

export default function Home() {
	return (
		<main>
			<Container>
				<Hero />
				<Collections />
			</Container>
		</main>
	);
}

export const getStaticProps: GetStaticProps<{}> = async () => {
	return {
		props: {},
	};
};
