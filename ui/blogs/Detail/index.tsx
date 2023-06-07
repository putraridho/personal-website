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

export function Detail({
	title,
	created_time,
	children,
}: PropsWithChildren<Pick<IPageBlogDetail, "title" | "created_time">>): React.ReactElement {
	return (
		<section className={style.detail}>
			<Container>
				<div className={style.wrapper}>
					<div className={style.head}>
						<h1 className={style.title}>{title}</h1>
						<span className={style.createdTime}>
							{`🗓️ ${dayjs(created_time).tz(TZ).format("DD MMM YYYY")} ・ 🕐 ${dayjs(created_time)
								.tz(TZ)
								.format("hh:mm A")}`}
						</span>
					</div>
					<div className={style.children}>{children}</div>
				</div>
			</Container>
		</section>
	);
}
