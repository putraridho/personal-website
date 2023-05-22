import { NextApiRequest, NextApiResponse } from "next";

import { notion } from "@/constants";
import { ISearchResponse } from "@/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse<ISearchResponse>) {
	if (req.method === "GET") {
		const { results, next_cursor, has_more } = await notion.search({});

		return res.status(200).json({
			success: true,
			results,
			next_cursor,
			has_more,
		});
	}

	return res.status(400).send({
		success: false,
		message: "Invalid request!",
	});
}
