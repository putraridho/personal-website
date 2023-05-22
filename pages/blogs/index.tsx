import { GetStaticProps } from "next";

import { Container } from "@/components";
import { query } from "@/data";
import { IBlog, IPageBlog } from "@/types";
import { Hero, List } from "@/ui/blogs";

export default function Blog({ items }: IPageBlog) {
	return (
		<main>
			<Container>
				<Hero />
				<List items={items} />
			</Container>
		</main>
	);
}

export const getStaticProps: GetStaticProps<IPageBlog> = async () => {
	let has_more = false;
	let next_cursor = null;
	let items: IBlog[] = [];

	try {
		const res = await query(process.env.NEXT_PUBLIC_NOTION_DATABASE_ID);
		if (res.success) {
			has_more = res.has_more;
			next_cursor = res.next_cursor;
			items = res.results;
		}
	} catch (err) {
		// Do Nothing
	}

	return {
		props: {
			has_more,
			next_cursor,
			items,
		},
	};
};
