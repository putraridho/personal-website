import { RiArrowRightLine, RiMagicLine } from "react-icons/ri";

import { Card } from "@/components";

import style from "./style.module.sass";

export function Blog(): React.ReactElement {
	return (
		<Card>
			<div className={style.heading}>
				<RiMagicLine size="1.5rem" color="var(--accent-300)" />
				<h2>Blog</h2>
			</div>
			<p className={style.text}>A realm where I share my ideas and experience</p>
			<a className={style.link}>
				Warp me <RiArrowRightLine />
			</a>
		</Card>
	);
}
