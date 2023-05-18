import { axios, host } from "@/constants";
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
