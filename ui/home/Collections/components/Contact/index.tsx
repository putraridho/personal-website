import { RiContactsLine, RiGithubLine, RiInstagramLine, RiLinkedinLine, RiMailLine } from "react-icons/ri";
import { IconType } from "react-icons";
import { AnchorHTMLAttributes, useCallback } from "react";
import { toast } from "react-toastify";

import { Card, Tooltip } from "@/components";

import style from "./style.module.sass";

export function Contact(): React.ReactElement {
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
		<Card>
			<div className={style.row}>
				<div className={style.heading}>
					<RiContactsLine size="1.5rem" color="var(--accent-300)" />
					<h2>Reach me</h2>
				</div>
			</div>
			<div className={style.socials}>
				<Social
					href="https://github.com/putraridho"
					content="github.com/putraridho"
					Icon={RiGithubLine}
					target="_blank"
					rel="noreferrer noopener"
				/>
				<Social
					href="mailto:muhammadridhoputra@gmail.com"
					content="muhammadridhoputra@gmail.com"
					Icon={RiMailLine}
					onClick={(e) => {
						e.preventDefault();
						copyToClipboard("muhammadridhoputra@gmail.com");
						toast("Copied to clipboard!");
					}}
				/>
				<Social
					href="https://www.linkedin.com/in/muhammad-ridho-putra-841146116"
					content="linkedin.com/in/muhammad-ridho-putra-841146116"
					Icon={RiLinkedinLine}
					target="_blank"
					rel="noreferrer noopener"
				/>
				<Social
					href="https://www.instagram.com/mrputraridho"
					content="instagram.com/mrputraridho"
					Icon={RiInstagramLine}
					target="_blank"
					rel="noreferrer noopener"
				/>
			</div>
		</Card>
	);
}

interface SocialProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	Icon: IconType;
	content: string;
}

function Social({ Icon, content, ...props }: SocialProps): React.ReactElement {
	return (
		<Tooltip content={content}>
			<a className={style.social} {...props}>
				<Icon size="1rem" color="var(--white)" />
			</a>
		</Tooltip>
	);
}
