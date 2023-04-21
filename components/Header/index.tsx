import { useEffect, useMemo, useState } from "react";
import { RiLightbulbFill, RiLightbulbLine } from "react-icons/ri";

import { Container } from "../Container";

import style from "./style.module.sass";

interface HeaderProps {
	onDarkModeChange?: (darkMode: boolean) => void;
}

export function Header({ onDarkModeChange = () => null }: HeaderProps): React.ReactElement {
	const [darkMode, setDarkMode] = useState<boolean>(false);

	useEffect(() => {
		onDarkModeChange(darkMode);
	}, [darkMode, onDarkModeChange]);

	const ButtonIcon = useMemo(() => (darkMode ? RiLightbulbFill : RiLightbulbLine), [darkMode]);

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
					<button type="button" className={style.darkModeButton} onClick={() => setDarkMode((curr) => !curr)}>
						<ButtonIcon size={20} />
					</button>
				</nav>
			</Container>
		</header>
	);
}
