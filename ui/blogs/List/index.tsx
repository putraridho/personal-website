import { IBlog } from "@/types";

import { ListItem } from "./ListItem";

import style from "./style.module.sass";

interface ListProps {
	items: IBlog[];
}

export function List({ items }: ListProps): React.ReactElement {
	console.log("🚀 ~ file: index.tsx:8 ~ List ~ items:", items);
	return (
		<section className={style.list}>
			{items.map((item) => (
				<ListItem key={item.id} item={item} />
			))}
		</section>
	);
}
