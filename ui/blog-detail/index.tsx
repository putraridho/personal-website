import { CalendarIcon } from "@radix-ui/react-icons";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { PropsWithChildren } from "react";

import { Container } from "@/components";
import { TZ } from "@/constants";
import { IPageBlogDetail } from "@/types";

import style from "./style.module.sass";

dayjs.extend(utc);
dayjs.extend(timezone);

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
					<span>{dayjs(created_time).tz(TZ).format("MMMM DD, YYYY hh:mm A")}</span>
				</div>
				<div className={style.children}>{children}</div>
			</Container>
		</section>
	);
}
