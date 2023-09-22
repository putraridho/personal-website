import { PropsWithChildren } from "react";

import { Container } from "@/components";
import { IPageBlogDetail } from "@/types";

import { CalendarIcon } from "@radix-ui/react-icons";
import style from "./style.module.sass";

export function BlogDetail({
	children,
	title,
	created_time,
}: PropsWithChildren<Pick<IPageBlogDetail, "title" | "created_time">>): React.ReactElement {
	return (
		<section className={style.blog}>
			<Container>
				<h1 className={style.title}>{title}</h1>
				<div className={style.createdTime}>
					<CalendarIcon />
					<span>{created_time}</span>
				</div>
				<div className={style.children}>{children}</div>
			</Container>
		</section>
	);
}
