import { Container } from "../Container";
import style from "./style.module.sass";

export function Header(): React.ReactElement {
	return (
		<header className={style.header}>
			<Container>
				<nav className={style.nav}>
					{["About", "Projects", "Blog", "Contact"].map((link, i) => (
						<span key={link} className={style.link}>
							{link}
							{i === 0 && <span className={style.active} />}
						</span>
					))}
				</nav>
			</Container>
		</header>
	);
}
