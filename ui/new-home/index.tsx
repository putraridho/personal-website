import Link from "next/link";
import { MouseEventHandler, useCallback, useRef } from "react";

import { Avatar } from "@/components";
import { ArrowRightIcon, MagicWandIcon } from "@/icons";

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

	return (
		<div className={style.wrapper}>
			<div className={style.banner}>
				<div ref={bannerContentRef} className={style.bannerContent} onMouseMove={handleMouseMove}>
					<div className={style.bannerContainer}>
						<MagicWandIcon className={style.magicWand} />
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
					<ArrowRightIcon className={style.arrowRight} />
				</Link>
				<VLine />
				<Link href="/blogs" aria-label="Warp me to blogs" className={style.collectionItem}>
					<div className={style.content}>
						<div className={style.headWrapper}>
							<h2 className={style.head}>BLOGS</h2>
						</div>
						<p className={style.description}>A realm where I share my ideas and experience</p>
					</div>
					<ArrowRightIcon className={style.arrowRight} />
				</Link>
			</div>
		</div>
	);
}

function HLine() {
	return <div className={style.hLine} />;
}

function VLine() {
	return <div className={style.vLine} />;
}
