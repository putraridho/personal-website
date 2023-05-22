import { NextApiRequest, NextApiResponse } from "next";

import { notion } from "@/constants";
import { IRetrieveResponse } from "@/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse<IRetrieveResponse>) {
	if (req.method === "GET") {
		const { database_id } = req.query;
		try {
			const { id, properties } = await notion.databases.retrieve({
				database_id: String(database_id),
			});

			return res.status(200).json({
				success: true,
				id,
				properties,
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
