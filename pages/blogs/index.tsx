import { GetStaticProps } from "next";

import { query, search } from "@/data";
import { Container } from "@/components";
import { Hero, List } from "@/ui/blogs";
import { useEffect } from "react";
import { IPageBlog } from "@/types";

export default function Blog({ items }: IPageBlog) {
	useEffect(() => {}, []);
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
	const res = await query("fcee7553f4ba4b858bbdbe9c17259331");

	if (res.success) {
		const { has_more, next_cursor, results } = res;

		return {
			props: {
				items: results,
				hasMore: has_more,
				nextCursor: next_cursor,
			},
		};
	}

	return {
		props: {
			items: [],
			hasMore: false,
			nextCursor: null,
		},
	};
};
