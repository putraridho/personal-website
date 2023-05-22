import { QueryDatabaseParameters } from "@notionhq/client/build/src/api-endpoints";
import { NextApiRequest, NextApiResponse } from "next";

import { notion } from "@/constants";
import { IBlog, IQueryResponse } from "@/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse<IQueryResponse>) {
	if (req.method === "POST") {
		const { database_id } = req.query;
		const { start_cursor, page_size } = req.body;
		let args: QueryDatabaseParameters = {
			database_id: String(database_id),
		};

		if (start_cursor) {
			args = {
				...args,
				start_cursor: String(start_cursor),
			};
		}

		if (page_size) {
			args = {
				...args,
				page_size: Number(page_size),
			};
		}

		try {
			const { results, has_more, next_cursor } = await notion.databases.query(args);

			return res.status(200).json({
				success: true,
				results: results as IBlog[],
				has_more,
				next_cursor,
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
