interface IPageBlog {
	items: (PageObjectResponse | PartialPageObjectResponse | PartialDatabaseObjectResponse | DatabaseObjectResponse)[];
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
			results: (PageObjectResponse | PartialPageObjectResponse)[];
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
