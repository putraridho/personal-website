import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";

import { Badge, Card } from "@/components";
import { TZ } from "@/constants";
import { IBlog, ITag } from "@/types";

import style from "./style.module.sass";

dayjs.extend(utc);
dayjs.extend(timezone);

interface ListItemProps {
	item: IBlog;
}

export function ListItem({ item }: ListItemProps): React.ReactElement {
	return (
		<Card>
			<Title>{item.properties["Title"].title[0].plain_text}</Title>
			<CreatedTime>
				{`🗓️ ${dayjs(item.created_time).tz(TZ).format("DD MMM YYYY")} ・ 🕐 ${dayjs(item.created_time)
					.tz(TZ)
					.format("hh:mm A")}`}
			</CreatedTime>
			<Description>{item.properties["Description"].rich_text?.[0]?.plain_text}</Description>
			<Tags>
				{item.properties["Tags"].multi_select.map(({ id, name }: ITag) => (
					<Badge key={id}>{name}</Badge>
				))}
			</Tags>
			<CTA href={`/blogs/${item.id}`} title={item.properties["Title"].title[0].plain_text} />
		</Card>
	);
}

function Title({ children }: { children: string }): React.ReactElement {
	return <h2 className={style.title}>{children}</h2>;
}

function CreatedTime({ children }: { children: string }): React.ReactElement {
	return <p className={style.createdTime}>{children}</p>;
}

function Description({ children }: { children: string }): React.ReactElement {
	return <p className={style.description}>{children}</p>;
}

function Tags({ children }: { children: React.ReactNode }): React.ReactElement {
	return <div className={style.tags}>{children}</div>;
}

function CTA({ href, title }: { href: string; title: string }): React.ReactElement {
	return (
		<Link href={href} className={style.cta} aria-label={`Read ${title}`}>
			Read <RiArrowRightLine />
		</Link>
	);
}
