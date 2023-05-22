import dayjs from "dayjs";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";

import { Badge, Card } from "@/components";
import { IBlog, ITag } from "@/types";

import style from "./style.module.sass";

interface ListItemProps {
	item: IBlog;
}

export function ListItem({ item }: ListItemProps): React.ReactElement {
	return (
		<Card>
			<Title>{item.properties["Title"].title[0].plain_text}</Title>
			<CreatedTime>
				{`🗓️ ${dayjs(item.created_time).format("DD MMM YYYY")} ・ 🕐 ${dayjs(item.created_time).format("hh:mm A")}`}
			</CreatedTime>
			<Description>{item.properties["Description"].rich_text[0].plain_text}</Description>
			<Tags>
				{item.properties["Tags"].multi_select.map(({ id, name }: ITag) => (
					<Badge key={id}>{name}</Badge>
				))}
			</Tags>
			<CTA href="#" />
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

function CTA({ href }: { href: string }): React.ReactElement {
	return (
		<Link href={href} className={style.cta}>
			Read <RiArrowRightLine />
		</Link>
	);
}