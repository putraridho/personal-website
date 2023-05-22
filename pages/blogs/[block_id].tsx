import { blockChildren, query } from "@/data";
import { IBlock, IPageBlogDetail } from "@/types";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

export default function BlogsDetail({ items }: IPageBlogDetail) {
	return <></>;
}

export const getStaticPaths: GetStaticPaths = async () => {
	let paths: { params: ParsedUrlQuery }[] = [];

	try {
		const res = await query(process.env.NEXT_PUBLIC_NOTION_DATABASE_ID);
		if (res.success) {
			paths = res.results.map(({ id }) => ({
				params: {
					block_id: id,
				},
			}));
		}
	} catch (err) {
		// Do Nothing
	}

	return {
		fallback: false,
		paths,
	};
};

export const getStaticProps: GetStaticProps<IPageBlogDetail> = async () => {
	let has_more = false;
	let next_cursor = null;
	let items: IBlock[] = [];
	let notFound = true;

	try {
		const res = await blockChildren("5a34201ab85141b4a440d1af0846b71a");

		if (res.success) {
			has_more = res.has_more;
			next_cursor = res.next_cursor;
			items = res.results;
			notFound = false;
		}
	} catch (err) {
		// Do nothing
	}

	return {
		props: {
			has_more,
			next_cursor,
			items,
		},
		notFound,
	};
};
