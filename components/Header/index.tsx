import dynamic from "next/dynamic";
import Link from "next/link";
import { Container } from "../Container";
import { Logo } from "../Logo";

import style from "./style.module.sass";

const DarkModeToggle = dynamic(() => import("@/components/DarkModeToggle").then((mod) => mod.DarkModeToggle), {
	ssr: false,
});

export function Header(): React.ReactElement {
	return (
		<header className={style.header}>
			<Container>
				<div className={style.row}>
					<Link href="/">
						<Logo />
					</Link>
					<nav className={style.nav}>
						{["About", "Projects", "Blog", "Contact"].map((link, i) => (
							<span key={link} className={style.link}>
								{link}
								{i === 0 && <span className={style.active} />}
							</span>
						))}
					</nav>
				</div>
			</Container>
		</header>
	);
}
