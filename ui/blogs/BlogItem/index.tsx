import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import Link from "next/link";
import { memo } from "react";

import { TZ } from "@/constants";

import style from "./style.module.sass";

dayjs.extend(utc);
dayjs.extend(timezone);

interface BlogItemProps {
	item: PageObjectResponse;
}

export const BlogItem = memo(function BlogItem({ item }: BlogItemProps) {
	const tags = item.properties["Tags"].type === "multi_select" ? item.properties["Tags"].multi_select : [];
	const title =
		item.properties["Title"].type === "title" ? item.properties["Title"].title?.[0]?.plain_text : "Untitled";
	const description =
		item.properties["Description"].type === "rich_text"
			? item.properties["Description"].rich_text?.[0]?.plain_text
			: "";

	return (
		<Link href={`/blogs/${item.id}`} title={title} className={style.blogItem}>
			<div className={style.blogTags}>
				{tags.map(({ id, name }) => (
					<span key={id} className={style.blogTag}>
						{name}
					</span>
				))}
			</div>
			<h2 className={style.blogTitle}>{title}</h2>
			<p className={style.blogCreatedTime}>{dayjs(item.created_time).tz(TZ).format("MMMM DD, YYYY hh:mm A")}</p>
			<p className={style.blogDescription}>{description}</p>
		</Link>
	);
});
