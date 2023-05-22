import {
	DatabaseObjectResponse,
	PageObjectResponse,
	PartialDatabaseObjectResponse,
	PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

interface IPageBlog {
	items: any[];
	has_more: boolean;
	next_cursor: string | null;
}

interface IPageBlogDetail {
	next_cursor: string | null;
	has_more: boolean;
	items: IBlock[];
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

type IBlocksChildrenResponse =
	| {
			success: false;
			message: string;
	  }
	| {
			success: true;
			results: IBlock[];
			has_more: boolean;
			next_cursor: string | null;
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

interface IBlock {
	object: "block";
	id: string;
	type: string;
	created_time: string;
	last_edited_time: string;
	has_children: boolean;
	content: string[];
	properties: {
		title?: TitleProperty[];
		paragraph?: ParagraphProperty[];
		heading_1?: HeadingProperty[];
		heading_2?: HeadingProperty[];
		heading_3?: HeadingProperty[];
		bulleted_list_item?: TextProperty[];
		numbered_list_item?: TextProperty[];
		to_do?: ToDoProperty[];
		toggle?: ToggleProperty[];
		quote?: QuoteProperty[];
		code?: CodeProperty[];
		bookmark?: BookmarkProperty[];
		divider?: DividerProperty[];
		callout?: CalloutProperty[];
		image?: ImageProperty[];
		video?: VideoProperty[];
		file?: FileProperty[];
		equation?: EquationProperty[];
		table_of_contents?: TableOfContentsProperty[];
	};
	children?: IBlockChildren;
}

interface TitleProperty {
	type: "text";
	text: {
		content: string;
		link?: string;
	}[];
}

interface ParagraphProperty {
	type: "text";
	text: {
		content: string;
		link?: string;
		annotations: TextAnnotations;
	}[];
}

interface HeadingProperty {
	type: "text";
	text: {
		content: string;
		link?: string;
		annotations: TextAnnotations;
	}[];
}

interface TextProperty {
	type: "text";
	text: {
		content: string;
		link?: string;
		annotations: TextAnnotations;
	}[];
}

interface ToDoProperty {
	type: "to_do";
	to_do: {
		text: {
			content: string;
			link?: string;
			annotations: TextAnnotations;
		}[];
		checked: boolean;
	};
}

interface ToggleProperty {
	type: "toggle";
	toggle: {
		text: {
			content: string;
			link?: string;
			annotations: TextAnnotations;
		}[];
	};
}

interface QuoteProperty {
	type: "quote";
	quote: {
		text: {
			content: string;
			link?: string;
			annotations: TextAnnotations;
		}[];
	};
}

interface CodeProperty {
	type: "code";
	code: {
		text: string;
		language?: string;
	};
}

interface BookmarkProperty {
	type: "bookmark";
	bookmark: {
		url: string;
	};
}

interface DividerProperty {
	type: "divider";
	divider: {};
}

interface CalloutProperty {
	type: "callout";
	callout: {
		icon: string;
		text: {
			content: string;
			link?: string;
			annotations: TextAnnotations;
		}[];
	};
}

interface ImageProperty {
	type: "image";
	image: {
		file: {
			url: string;
		};
		caption: {
			content: string;
			link?: string;
			annotations: TextAnnotations;
		}[];
		width?: number;
		height?: number;
	};
}

interface VideoProperty {
	type: "video";
	video: {
		file: {
			url: string;
		};
		caption: {
			content: string;
			link?: string;
			annotations: TextAnnotations;
		}[];
		width?: number;
		height?: number;
	};
}

interface FileProperty {
	type: "file";
	file: {
		url: string;
	};
}

interface EquationProperty {
	type: "equation";
	equation: {
		expression: string;
	};
}

interface TableOfContentsProperty {
	type: "table_of_contents";
	table_of_contents: {};
}

interface TextAnnotations {
	bold: boolean;
	italic: boolean;
	strikethrough: boolean;
	underline: boolean;
	code: boolean;
	color?: string;
}
