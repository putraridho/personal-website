import { axios, host } from "@/constants";
import { ISearchResponse, IRetrieveResponse, IQueryResponse } from "@/types";
import {
	PageObjectResponse,
	PartialPageObjectResponse,
	PartialDatabaseObjectResponse,
	DatabaseObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export const search = async () => {
	const res = await axios<ISearchResponse>("/api/search");
	const json = res.data;
	return json;
};

export const retrieve = async (database_id: string) => {
	const res = await axios<IRetrieveResponse>("/api/databases/retrieve", {
		method: "GET",
		params: {
			database_id,
		},
	});
	const json = res.data;
	return json;
};

export const query = async (
	database_id: string,
	{
		start_cursor,
		page_size,
	}: {
		start_cursor?: string;
		page_size?: number;
	} = {},
) => {
	const res = await axios<IQueryResponse>("/api/databases/query", {
		method: "POST",
		params: {
			database_id,
		},
		data: {
			start_cursor,
			page_size,
		},
	});
	const json = res.data;
	return json;
};
