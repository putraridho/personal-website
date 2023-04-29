import Link from "next/link";
import { RiCloseLine, RiMenu4Line } from "react-icons/ri";

import { Container } from "../Container";
import { Logo } from "../Logo";

import { useEffect, useState } from "react";

import style from "./style.module.sass";
import classNames from "classnames";

export function Header(): React.ReactElement {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const handleResize = () => {
				if (window.innerWidth >= 1024) {
					setIsOpen(false);
				}
			};
			window.addEventListener("resize", handleResize);
			return () => window.removeEventListener("resize", handleResize);
		}
	}, []);

	return (
		<header className={style.header}>
			<Container>
				<div className={style.row}>
					<Link href="/">
						<Logo />
					</Link>
					<nav className={classNames(style.nav, { [style.open]: isOpen })}>
						{["About", "Projects", "Blog", "Contact"].map((link, i) => (
							<span key={link} className={style.link}>
								{link}
								{i === 0 && <span className={style.active} />}
							</span>
						))}
					</nav>
					<button type="button" className={style.hamburger} onClick={() => setIsOpen((curr) => !curr)}>
						{isOpen ? <RiCloseLine size={24} /> : <RiMenu4Line size={24} />}
					</button>
				</div>
			</Container>
		</header>
	);
}
