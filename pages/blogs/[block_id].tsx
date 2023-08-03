import { GetServerSideProps } from "next";
import Head from "next/head";

import { Footer } from "@/components";
import { block, blockChildren } from "@/data";
import { IPageBlogDetail } from "@/types";
import { NewBlogDetail } from "@/ui/new-blog-detail";
import { deserializeToReactNodes } from "@/utils";

export default function BlogsDetail({ title, created_time, description, tags, blocks }: IPageBlogDetail) {
	return (
		<>
			<Head>
				{title && (
					<>
						<title>{title}</title>
						<meta property="og:title" content={title} key="title" />
					</>
				)}
				{description && <meta name="description" content={description} />}
				<meta name="keywords" content={tags.join(", ")} />
				<meta name="author" content="Muhammad Ridho Putra" />
			</Head>
			<NewBlogDetail title={title} created_time={created_time}>
				{deserializeToReactNodes(blocks)}
			</NewBlogDetail>
			<Footer />
		</>
	);
}

export const getServerSideProps: GetServerSideProps<IPageBlogDetail> = async (req) => {
	const block_id = String(req.params?.block_id);
	try {
		const block_children_res = await blockChildren(block_id);
		const block_res = await block(block_id);

		if (block_children_res.success && block_res.success) {
			return {
				props: {
					title: block_res.title,
					description: block_res.description,
					tags: block_res.tags,
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
				description: null,
				tags: [],
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
			description: null,
			tags: [],
			created_time: null,
			has_more: false,
			next_cursor: null,
			blocks: [],
		},
		notFound: true,
	};
};
