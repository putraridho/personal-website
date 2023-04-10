import { RiContactsLine, RiGithubLine, RiInstagramLine, RiLinkedinLine, RiMailLine } from "react-icons/ri";

import Card from "@/components/Card";

import style from "./style.module.sass";
import { Tooltip } from "@/components";
import { IconType } from "react-icons";

export function Contact(): React.ReactElement {
	return (
		<Card>
			<div className={style.row}>
				<div className={style.heading}>
					<RiContactsLine size="1.5rem" color="var(--accent-300)" />
					<h2>Reach me</h2>
				</div>
			</div>
			<div className={style.socials}>
				<Social href="https://github.com/putraridho" Icon={RiGithubLine} />
				<Social href="muhammadridhoputra@gmail.com" mail Icon={RiMailLine} />
				<Social href="https://www.linkedin.com/in/muhammad-ridho-putra-841146116" Icon={RiLinkedinLine} />
				<Social href="https://www.instagram.com/mrputraridho" Icon={RiInstagramLine} />
			</div>
		</Card>
	);
}

interface SocialProps {
	Icon: IconType;
	href: string;
	mail?: boolean;
}

function Social({ Icon, href, mail }: SocialProps): React.ReactElement {
	return (
		<Tooltip content={href}>
			<a href={`${mail ? "mailto:" : ""}${href}`} target="_blank" rel="noreferrer noopener" className={style.social}>
				<Icon size="1rem" color="var(--white)" />
			</a>
		</Tooltip>
	);
}
