import { Container } from "@/components";
import { Collections, Hero } from "@/ui/home";

import style from "./style.module.sass";

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
