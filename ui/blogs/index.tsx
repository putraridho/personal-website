import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { MouseEventHandler, useCallback, useRef } from "react";

import { Container } from "@/components";
import { LayersIcon } from "@/icons";

import { BlogItem } from "./BlogItem";
import style from "./style.module.sass";

dayjs.extend(utc);
dayjs.extend(timezone);

interface NewBlogsProps {
	items: PageObjectResponse[];
}

export function Blogs({ items }: NewBlogsProps): React.ReactElement {
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
					Blogs <LayersIcon className={style.layers} />
				</h1>
				<div className={style.blogItems}>
					{items.map((item) => (
						<BlogItem key={item.id} item={item} />
					))}
				</div>
			</Container>
		</section>
	);
}
