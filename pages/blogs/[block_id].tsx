import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import { Footer } from "@/components";
import { block, blockChildren } from "@/data";
import { DatabasesService } from "@/service";
import { IPageBlogDetail } from "@/types";
import { BlogDetail } from "@/ui/blog-detail";
import { deserializeToReactNodes } from "@/utils";

export default function BlogDetailPage({
	title = "",
	created_time = "",
	description = "",
	tags = [],
	blocks = [],
}: IPageBlogDetail) {
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
			<BlogDetail title={title} created_time={created_time}>
				{deserializeToReactNodes(blocks)}
			</BlogDetail>
			<Footer />
		</>
	);
}

export const getStaticProps: GetStaticProps<IPageBlogDetail> = async (req) => {
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
				revalidate: 60 * 60, // Revalidate every 1 hour
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

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const res = await DatabasesService.databasesControllerQuery();

		if (res.success) {
			return {
				paths: (res.results as PageObjectResponse[]).map((page) => ({
					params: {
						block_id: page.id,
					},
				})),
				fallback: "blocking",
			};
		}
	} catch (err) {
		return {
			paths: [],
			fallback: "blocking",
		};
	}
	return {
		paths: [],
		fallback: "blocking",
	};
};
