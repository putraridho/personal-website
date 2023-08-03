import { GetStaticProps } from "next";

import { Footer } from "@/components";
import { DatabasesService } from "@/service";
import { IPageBlog } from "@/types";
import { NewBlogs } from "@/ui/new-blogs";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export default function Blog({ items }: IPageBlog) {
	return (
		<>
			<NewBlogs items={items} />
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
