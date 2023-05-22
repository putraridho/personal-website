import { notion } from "@/constants";
import { IBlock, IBlocksChildrenResponse } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<IBlocksChildrenResponse>) {
	if (req.method === "GET") {
		const { block_id } = req.query;
		try {
			const { has_more, next_cursor, results } = await notion.blocks.children.list({
				block_id: String(block_id),
			});

			return res.status(200).json({
				success: true,
				has_more,
				next_cursor,
				results: results as IBlock[],
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