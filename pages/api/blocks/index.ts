import { notion } from "@/constants";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === "GET") {
		const { block_id } = req.query;
		try {
			const { id, parent, created_time, has_children, child_page }: any = await notion.blocks.retrieve({
				block_id: String(block_id),
			});

			return res.status(200).json({
				succes: true,
				id,
				parent,
				created_time,
				has_children,
				child_page,
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
