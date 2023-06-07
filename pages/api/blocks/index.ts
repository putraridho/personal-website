import { notion } from "@/constants";
import { IBlocksResponse } from "@/types";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { ChildPageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<IBlocksResponse>) {
	if (req.method === "GET") {
		const { database_id, block_id } = req.query;
		try {
			const retrieved_block = await notion.blocks.retrieve({
				block_id: String(block_id),
			});

			const {
				id,
				created_time,
				child_page: { title },
			} = retrieved_block as ChildPageBlockObjectResponse;

			const filtered = await notion.databases.query({
				database_id: String(database_id),
				filter: {
					property: "Title",
					title: {
						equals: title,
					},
				},
			});

			let description = undefined;

			const page = filtered.results[0].object === "page" ? (filtered.results[0] as PageObjectResponse) : undefined;

			if (page?.properties["Description"].type === "rich_text") {
				description = page.properties["Description"]?.rich_text[0]?.plain_text || description;
			}

			return res.status(200).json({
				success: true,
				id,
				created_time,
				title,
				description,
			});
		} catch (err) {
			return res.status(404).json({
				success: false,
				message: "Not found!",
			});
		}
	}

	return res.status(400).json({
		success: false,
		message: "Invalid request!",
	});
}
