import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import Link from "next/link";
import { MouseEventHandler, useCallback, useRef } from "react";

import { Container } from "@/components";
import { TZ } from "@/constants";
import { LayersIcon } from "@/icons";

import style from "./style.module.sass";

dayjs.extend(utc);
dayjs.extend(timezone);

interface NewBlogsProps {
	items: PageObjectResponse[];
}

export function NewBlogs({ items }: NewBlogsProps): React.ReactElement {
	const sectionRef = useRef<HTMLDivElement>(null);

	const handleMouseMove = useCallback<MouseEventHandler<HTMLDivElement>>(
		(e) => {
			const w = sectionRef?.current?.clientWidth || 0;
			const h = sectionRef?.current?.clientHeight || 0;

			const x = (e.screenX - w / 2) * 0.08;
			const y = (e.screenY - h / 2) * 0.08;

			sectionRef?.current?.style.setProperty("--mouse-x", `${-x}px`);
			sectionRef?.current?.style.setProperty("--mouse-y", `${-y}px`);
		},
		[sectionRef],
	);

	return (
		<section ref={sectionRef} className={style.blogs} onMouseMove={handleMouseMove}>
			<Container>
				<h1 className={style.heading}>
					Blogs <LayersIcon />
				</h1>
				<div className={style.blogItems}>
					{items.map((item) => {
						const tags = item.properties["Tags"].type === "multi_select" ? item.properties["Tags"].multi_select : [];
						const title = item.properties["Title"].type === "title" ? item.properties["Title"].title[0].plain_text : "";
						const description =
							item.properties["Description"].type === "rich_text"
								? item.properties["Description"].rich_text[0].plain_text
								: "";
						return (
							<Link href={`/blogs/${item.id}`} title={title} key={item.id} className={style.blogItem}>
								<div className={style.blogTags}>
									{tags.map(({ id, name }) => (
										<span key={id} className={style.blogTag}>
											{name}
										</span>
									))}
								</div>
								<h2 className={style.blogTitle}>{title}</h2>
								<p className={style.blogCreatedTime}>
									{dayjs(item.created_time).tz(TZ).format("MMMM DD, YYYY hh:mm A")}
								</p>
								<p className={style.blogDescription}>{description}</p>
							</Link>
						);
					})}
				</div>
			</Container>
		</section>
	);
}
