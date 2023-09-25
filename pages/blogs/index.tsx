import { GetStaticProps } from "next";

import { Footer } from "@/components";
import { DatabasesService } from "@/service";
import { IPageBlog } from "@/types";
import { Blogs } from "@/ui/blogs";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export default function BlogsPage({ items }: IPageBlog) {
	return (
		<>
			<Blogs items={items} />
			<Footer />
		</>
	);
}

export const getStaticProps: GetStaticProps<IPageBlog> = async () => {
	try {
		const res = await DatabasesService.databasesControllerQuery();

		if (res.success) {
			return {
				props: {
					has_more: res.has_more,
					next_cursor: res.next_cursor,
					items: res.results as PageObjectResponse[],
				},
				revalidate: 60 * 60, // Revalidate every 1 hour
			};
		}
	} catch (err) {
		return {
			props: {
				has_more: false,
				next_cursor: null,
				items: [],
			},
			revalidate: 60 * 60, // Revalidate every 1 hour
		};
	}

	return {
		props: {
			has_more: false,
			next_cursor: null,
			items: [],
		},
		revalidate: 60 * 60, // Revalidate every 1 hour
	};
};
