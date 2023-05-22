import { blockChildren, query } from "@/data";
import { IPageBlogDetail } from "@/types";
import { GetStaticPaths, GetStaticProps } from "next";

export default function BlogsDetail({ items }: IPageBlogDetail) {
	return <></>;
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const res = await query(process.env.NEXT_PUBLIC_NOTION_DATABASE_ID);
		if (res.success) {
			return {
				fallback: false,
				paths: res.results.map(({ id }) => ({
					params: {
						block_id: id,
					},
				})),
			};
		}
	} catch (err) {
		return {
			fallback: false,
			paths: [],
		};
	}

	return {
		fallback: false,
		paths: [],
	};
};

export const getStaticProps: GetStaticProps<IPageBlogDetail> = async () => {
	try {
		const res = await blockChildren("5a34201ab85141b4a440d1af0846b71a");
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
			notFound: true,
		};
	}

	return {
		props: {
			has_more: false,
			next_cursor: null,
			items: [],
		},
		notFound: true,
	};
};
