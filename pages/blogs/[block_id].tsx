import { DATABASE_ID } from "@/constants";
import { block, blockChildren, query } from "@/data";
import { IPageBlogDetail } from "@/types";
import { Detail } from "@/ui/blogs";
import { deserializeToReactNodes } from "@/utils";
import { GetStaticPaths, GetStaticProps } from "next";

export default function BlogsDetail({ title, created_time, blocks }: IPageBlogDetail) {
	return (
		<Detail title={title} created_time={created_time}>
			{deserializeToReactNodes(blocks)}
		</Detail>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const res = await query(DATABASE_ID);
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

export const getStaticProps: GetStaticProps<IPageBlogDetail> = async (req) => {
	const block_id = String(req.params?.block_id);
	try {
		const block_children_res = await blockChildren(block_id);
		const block_res = await block(block_id, DATABASE_ID);

		if (block_children_res.success && block_res.success) {
			return {
				props: {
					title: block_res.title,
					created_time: block_res.created_time,
					has_more: block_children_res.has_more,
					next_cursor: block_children_res.next_cursor,
					blocks: block_children_res.blocks,
				},
			};
		}
	} catch (err) {
		return {
			props: {
				title: null,
				created_time: null,
				has_more: false,
				next_cursor: null,
				blocks: [],
			},
			notFound: true,
		};
	}

	return {
		props: {
			title: null,
			created_time: null,
			has_more: false,
			next_cursor: null,
			blocks: [],
		},
		notFound: true,
	};
};
