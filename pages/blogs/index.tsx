import { GetStaticProps } from "next";

import { Container } from "@/components";
import { DATABASE_ID } from "@/constants";
import { query } from "@/data";
import { IPageBlog } from "@/types";
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
	try {
		const res = await query(DATABASE_ID);
		if (res.success) {
			return {
				props: {
					has_more: res.has_more,
					next_cursor: res.next_cursor,
					items: res.results,
				},
			};
		}
	} catch (err) {
		return {
			props: {
				has_more: false,
				next_cursor: null,
				items: [],
			},
		};
	}

	return {
		props: {
			has_more: false,
			next_cursor: null,
			items: [],
		},
	};
};
