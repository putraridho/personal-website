import {
	DatabaseObjectResponse,
	PageObjectResponse,
	PartialDatabaseObjectResponse,
	PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

interface IPageBlog {
	items: any[];
	hasMore: boolean;
	nextCursor: string | null;
}

type ISearchResponse =
	| {
			success: false;
			message: string;
	  }
	| {
			success: true;
			results: (
				| PageObjectResponse
				| PartialPageObjectResponse
				| PartialDatabaseObjectResponse
				| DatabaseObjectResponse
			)[];
			next_cursor: string | null;
			has_more: boolean;
	  };

type IQueryResponse =
	| {
			success: false;
			message: string;
	  }
	| {
			success: true;
			results: IBlog[];
			has_more: boolean;
			next_cursor: string | null;
	  };

type IRetrieveResponse =
	| {
			success: false;
			message: string;
	  }
	| {
			success: true;
			id: string;
			properties: Record<string, any>;
	  };

interface ITag {
	color: string;
	id: string;
	name: string;
}

interface IBlog {
	object: string;
	id: string;
	created_time: string;
	last_edited_time: string;
	created_by: {
		object: string;
		id: string;
	};
	last_edited_by: {
		object: string;
		id: string;
	};
	cover: null;
	icon: null;
	parent: {
		type: string;
		database_id: string;
	};
	archived: boolean;
	properties: {
		[key: string]: {
			id: string;
			type: string;
			[property: string]: any;
		};
	};
	url: string;
}
