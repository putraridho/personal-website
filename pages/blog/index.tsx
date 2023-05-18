import { GetStaticProps } from "next";

import { search } from "@/data";

export default function Blog({ items }: IPageBlog) {
	return <main></main>;
}

export const getStaticProps: GetStaticProps<IPageBlog> = async () => {
	const res = await search();

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
