import { RiArchiveLine } from "react-icons/ri";

import { Button, Card } from "@/components";

import style from "./style.module.sass";

export function Projects(): React.ReactElement {
	return (
		<Card>
			<div className={style.row}>
				<div className={style.heading}>
					<RiArchiveLine size="1.5rem" color="var(--accent-300)" />
					<h2>Projects</h2>
				</div>
				<Button>Find out</Button>
			</div>
			<p className={style.text}>Discover the showcase of my creations I made for fun</p>
		</Card>
	);
}
