import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { AnchorHTMLAttributes, PropsWithChildren, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { Tooltip } from "../Tooltip";
import style from "./style.module.sass";

const copyToClipboard = (text: string) => {
	if (navigator.clipboard) {
		navigator.clipboard.writeText(text);
	} else {
		const input = document.createElement("input");
		input.value = text;
		document.body.appendChild(input);
		input.select();
		document.execCommand("copy");
		document.body.removeChild(input);
	}
};

export function Footer(): React.ReactElement {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const handleResize = () => {
				if (window.innerWidth >= 1200) {
					setIsOpen(false);
				}
			};
			window.addEventListener("resize", handleResize);
			return () => window.removeEventListener("resize", handleResize);
		}
	}, []);

	return (
		<footer className={style.footer}>
			<HLine />
			<nav className={classNames(style.nav, { [style.active]: isOpen })}>
				<div className={classNames(style.navItem, style.navLogo)}>
					<Link href="/">
						<Image src="/logo.svg" alt="logo" height={32} width={32} />
					</Link>
				</div>
				<VLine />
				<div className={classNames(style.navItem, style.navMenu)}>
					<Link href="/">Home</Link>
					<Link href="/projects">Projects</Link>
					<Link href="/blogs">Blogs</Link>
				</div>
				<VLine />
				<div className={classNames(style.navItem, style.navSocials)}>
					<Social
						href="mailto:muhammadridhoputra@gmail.com"
						aria-label="Copy e-mail"
						content="muhammadridhoputra@gmail.com"
						onClick={(e) => {
							e.preventDefault();
							copyToClipboard("muhammadridhoputra@gmail.com");
							toast("Copied to clipboard");
						}}
					>
						<EnvelopeClosedIcon height={20} width={20} />
					</Social>
					<Social
						href="https://github.com/putraridho"
						aria-label="Go to Github"
						content="github.com/putraridho"
						target="_blank"
						rel="noreferrer noopener"
					>
						<GitHubLogoIcon height={20} width={20} />
					</Social>
					{/* <Social
						href="https://www.instagram.com/mrputraridho"
						aria-label="Go to Instagram"
						content="instagram.com/mrputraridho"
						target="_blank"
						rel="noreferrer noopener"
					>
						<InstagramLogoIcon height={20} width={20} />
					</Social> */}
					<Social
						href="https://www.linkedin.com/in/muhammad-ridho-putra-841146116"
						aria-label="Go to Linkedin"
						content="linkedin.com/in/muhammad-ridho-putra-841146116"
						target="_blank"
						rel="noreferrer noopener"
					>
						<LinkedInLogoIcon height={20} width={20} />
					</Social>
				</div>
				<button
					type="button"
					className={classNames(style.mobileToggle, { [style.active]: isOpen })}
					onClick={() => setIsOpen((curr) => !curr)}
				>
					<div className={style.line} />
					<div className={style.line} />
					<div className={style.line} />
				</button>
			</nav>
		</footer>
	);
}

interface SocialProps extends PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>> {
	href: string;
	content: string;
}

function Social({ content, children, ...props }: SocialProps) {
	return (
		<div className={style.social}>
			<Tooltip content={content}>
				<Link {...props}>{children}</Link>
			</Tooltip>
		</div>
	);
}

function HLine() {
	return <div className={style.hLine} />;
}

function VLine() {
	return <div className={style.vLine} />;
}
