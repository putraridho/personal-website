import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { RiCloseLine, RiMenu4Line } from "react-icons/ri";

import { HEADER_MENU } from "@/constants";

import { Container } from "../Container";
import { Logo } from "../Logo";
import { Active } from "./Active";

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

	const active = useCallback(
		(href = "") => {
			const paths = router.asPath.split("/");

			if (paths.length === 1 && href === "/") {
				return true;
			}

			if (paths.slice(1).includes(href.replace("/", ""))) {
				return true;
			}

			return false;
		},
		[router.asPath],
	);

	return (
		<header className={style.header}>
			<Container>
				<div className={style.row}>
					<Link href="/" aria-label="Go to home">
						<Logo />
					</Link>
					<nav className={classNames(style.nav, { [style.open]: isOpen })}>
						{HEADER_MENU.map(({ text, href }) => (
							<Link key={text} href={href} onClick={() => setIsOpen(false)} aria-label={`Go to ${text}`}>
								<span className={style.link}>
									{text}
									<Active active={active(href)} />
								</span>
							</Link>
						))}
					</nav>
					<button
						type="button"
						aria-label="hamburger toggle"
						className={style.hamburger}
						onClick={() => setIsOpen((curr) => !curr)}
					>
						{isOpen ? <RiCloseLine size={24} /> : <RiMenu4Line size={24} />}
					</button>
				</div>
			</Container>
		</header>
	);
}
