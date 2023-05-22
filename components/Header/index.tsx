import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiCloseLine, RiMenu4Line } from "react-icons/ri";

import { headerMenu } from "@/constants";

import { Container } from "../Container";
import { Logo } from "../Logo";

import style from "./style.module.sass";

export function Header(): React.ReactElement {
	const router = useRouter();
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
						{headerMenu.map(({ text, href }) => (
							<Link key={text} href={href}>
								<span className={style.link}>
									{text}
									{router.asPath === href && <span className={style.active} />}
								</span>
							</Link>
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
