import { EnvelopeClosedIcon, GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { AnchorHTMLAttributes, MouseEventHandler, PropsWithChildren, useCallback, useRef } from "react";
import { toast } from "react-toastify";

import { Avatar, Tooltip } from "@/components";
import { ArrowRight, MagicWand } from "@/icons";

import style from "./style.module.sass";

export function NewHome(): React.ReactElement {
	const bannerContentRef = useRef<HTMLDivElement>(null);

	const handleMouseMove = useCallback<MouseEventHandler<HTMLDivElement>>(
		(e) => {
			bannerContentRef?.current?.style.setProperty(
				"--mouse-x",
				(e.pageX || 0 - bannerContentRef?.current?.clientLeft || 0) + "px",
			);
			bannerContentRef?.current?.style.setProperty(
				"--mouse-y",
				(e.pageY || 0 - bannerContentRef?.current?.clientTop || 0) + "px",
			);
		},
		[bannerContentRef],
	);

	const copyToClipboard = useCallback((text: string) => {
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
	}, []);

	return (
		<div className={style.wrapper}>
			<div className={style.banner}>
				<div ref={bannerContentRef} className={style.bannerContent} onMouseMove={handleMouseMove}>
					<div className={style.bannerContainer}>
						<MagicWand className={style.magicWand} />
						<p className={style.bannerText}>
							Greetings, I am Muhammad Ridho. A Frontend Wizard creating visually captivating and intuitive websites
							that enchant users with seamless navigation and awe-inspiring design
						</p>
					</div>
				</div>
				<VLine />
				<div className={style.hero}>
					<Avatar />
				</div>
			</div>
			<HLine />
			<div className={style.collection}>
				<Link href="/projects" aria-label="Find out projects" className={style.collectionItem}>
					<div className={style.content}>
						<div className={style.headWrapper}>
							<h2 className={style.head}>PROJECTS</h2>
						</div>
						<p className={style.description}>Discover the showcase of my creations I made for fun</p>
					</div>
					<ArrowRight className={style.arrowRight} />
				</Link>
				<VLine />
				<Link href="/blogs" aria-label="Warp me to blogs" className={style.collectionItem}>
					<div className={style.content}>
						<div className={style.headWrapper}>
							<h2 className={style.head}>BLOGS</h2>
						</div>
						<p className={style.description}>A realm where I share my ideas and experience</p>
					</div>
					<ArrowRight className={style.arrowRight} />
				</Link>
			</div>
			<HLine />
			<nav className={style.nav}>
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
			</nav>
		</div>
	);
}

function HLine() {
	return <div className={style.hLine} />;
}

function VLine() {
	return <div className={style.vLine} />;
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
