import { ArrowRight, MagicWand } from "@/icons";
import style from "./style.module.sass";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import { EnvelopeClosedIcon, GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export function NewHome(): React.ReactElement {
	return (
		<div className={style.wrapper}>
			<div className={style.banner}>
				<div className={style.bannerContent}>
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
					<Image src="/Avatar.svg" alt="avatar" height={240} width={240} />
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
					<EnvelopeClosedIcon height={20} width={20} />
					<GitHubLogoIcon height={20} width={20} />
					<InstagramLogoIcon height={20} width={20} />
					<LinkedInLogoIcon height={20} width={20} />
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
