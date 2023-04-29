import Link from "next/link";
import { RiMenu4Line } from "react-icons/ri";

import { Container } from "../Container";
import { Logo } from "../Logo";

import style from "./style.module.sass";

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
					<button type="button" className={style.hamburger}>
						<RiMenu4Line size={24} />
					</button>
				</div>
			</Container>
		</header>
	);
}
