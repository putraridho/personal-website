import { axios } from "@/constants";
import { IBlocksChildrenResponse, IBlocksResponse, IQueryResponse, IRetrieveResponse, ISearchResponse } from "@/types";

export const search = async () => {
	const res = await axios<ISearchResponse>("/search");
	const json = res.data;
	return json;
};

export const retrieve = async (database_id: string) => {
	const res = await axios<IRetrieveResponse>("/databases", {
		method: "GET",
	});
	const json = res.data;
	return json;
};

export const query = async ({
	start_cursor,
	page_size,
}: {
	start_cursor?: string;
	page_size?: number;
} = {}) => {
	const res = await axios<IQueryResponse>("/databases/query", {
		method: "POST",
		data: {
			start_cursor,
			page_size,
		},
	});
	const json = res.data;
	return json;
};

export const block = async (block_id: string) => {
	const res = await axios<IBlocksResponse>(`/blocks/${block_id}`, {
		method: "GET",
	});
	const json = res.data;
	return json;
};

export const blockChildren = async (block_id: string) => {
	const res = await axios<IBlocksChildrenResponse>(`/blocks/${block_id}/children`, {
		method: "GET",
	});
	const json = res.data;
	return json;
};
