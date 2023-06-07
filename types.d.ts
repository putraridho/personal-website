import {
	BlockObjectResponse,
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
	title: string | null;
	description?: string | null;
	tags: string[];
	created_time: string | null;
	next_cursor: string | null;
	has_more: boolean;
	blocks: BlockObjectResponse[];
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
			blocks: BlockObjectResponse[];
			has_more: boolean;
			next_cursor: string | null;
	  };

type IBlocksResponse =
	| {
			success: false;
			message: string;
	  }
	| {
			success: true;
			id: string;
			created_time: string;
			title: string;
			description: string | null;
			tags: string[];
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

type IBlock = {
	object: "block";
	id: string;
	parent: ParentObjectProperty;
	created_time: string;
	created_by: UserProperty;
	last_edited_time: string;
	last_edited_by: UserProperty;
	archived: boolean;
	has_children: boolean;
} & (
	| BookmarkProperty
	| BreadcrumbProperty
	| BulletedListItemProperty
	| CalloutProperty
	| ChildDatabaseProperty
	| ChildPageProperty
	| CodeProperty
	| ColumnListProperty
	| ColumnProperty
	| DividerProperty
	| EmbedProperty
	| EquationProperty
	| FileProperty
	| Heading1Property
	| Heading2Property
	| Heading3Property
	| ImageProperty
	| LinkPreviewProperty
	| NumberedListItemProperty
	| ParagraphProperty
	| PDFProperty
	| QuoteProperty
	| SyncedBlockProperty
	| TableProperty
	| TableOfContentsProperty
	| ToDoProperty
	| ToggleProperty
	| VideoProperty
);

type UserProperty = {
	object: "user";
	id: string;
	name: string;
	avatar_url: string;
} & (
	| {
			type: "person";
			person: {
				email: string;
			};
	  }
	| {
			type: "bot";
			bot: {
				owner: {
					type: "workspace" | "user";
					workspace: boolean;
				};
				workspace_name: string | null;
			};
	  }
);

type ParentObjectProperty =
	| {
			type: "database_id";
			database_id: string;
	  }
	| {
			type: "page_id";
			page_id: string;
	  }
	| {
			type: "workspace";
			workspace: boolean;
	  }
	| {
			type: "block_id";
			block_id: string;
	  };

type Language =
	| "abap"
	| "arduino"
	| "bash"
	| "basic"
	| "c"
	| "clojure"
	| "coffeescript"
	| "c++"
	| "c#"
	| "css"
	| "dart"
	| "diff"
	| "docker"
	| "elixir"
	| "elm"
	| "erlang"
	| "flow"
	| "fortran"
	| "f#"
	| "gherkin"
	| "glsl"
	| "go"
	| "graphql"
	| "groovy"
	| "haskell"
	| "html"
	| "java"
	| "javascript"
	| "json"
	| "julia"
	| "kotlin"
	| "latex"
	| "less"
	| "lisp"
	| "livescript"
	| "lua"
	| "makefile"
	| "markdown"
	| "markup"
	| "matlab"
	| "mermaid"
	| "nix"
	| "objective-c"
	| "ocaml"
	| "pascal"
	| "perl"
	| "php"
	| "plain text"
	| "powershell"
	| "prolog"
	| "protobuf"
	| "python"
	| "r"
	| "reason"
	| "ruby"
	| "rust"
	| "sass"
	| "scala"
	| "scheme"
	| "scss"
	| "shell"
	| "sql"
	| "swift"
	| "typescript"
	| "vb.net"
	| "verilog"
	| "vhdl"
	| "visual basic"
	| "webassembly"
	| "xml"
	| "yaml"
	| "java/c/c++/c#";

export type Color =
	| "blue"
	| "blue_background"
	| "brown"
	| "brown_background"
	| "default"
	| "gray"
	| "gray_background"
	| "green"
	| "green_background"
	| "orange"
	| "orange_background"
	| "pink"
	| "pink_background"
	| "purple"
	| "purple_background"
	| "red"
	| "red_background"
	| "yellow"
	| "yellow_background";

interface Annotions {
	bold: boolean;
	italic: boolean;
	strikethrough: boolean;
	underline: boolean;
	code: boolean;
	color: Color;
}

type RichTextObjectProperty = {
	annotations: Annotions;
	plain_text: string;
	href: string | null;
} & (
	| {
			type: "text";
			text: {
				content: string;
				link: {
					url: string;
				} | null;
			};
	  }
	| {
			type: "equation";
			equation: {
				expression: string;
			};
	  }
	| {
			type: "mention";
			mention:
				| {
						type: "database";
						database: {
							id: string;
						};
				  }
				| {
						type: "date";
						date: {
							start: string | null;
							end: string | null;
						};
				  }
				| {
						type: "link_preview";
						link_preview: {
							url: string;
						};
				  }
				| {
						type: "page";
						page: {
							id: string;
						};
				  }
				| {
						type: "template_mention";
						template_mention:
							| {
									type: "template_mention_date";
									template_mention_date: string;
							  }
							| {
									type: "template_mention_user";
									template_mention_user: "me";
							  };
				  }
				| {
						type: "user";
						user: {
							object: "user";
							id: string;
						};
				  };
	  }
);

interface BookmarkProperty {
	type: "bookmark";
	bookmark: {
		caption: RichTextObjectProperty[];
		url: string;
	};
}

interface BreadcrumbProperty {
	type: "breadcrumb";
	breadcrumb: {};
}

interface BulletedListItemProperty {
	type: "bulleted_list_item";
	bulleted_list_item: {
		rich_text: RichTextObjectProperty[];
		color: Color;
		children?: IBlock[];
	};
}

interface CalloutProperty {
	type: "callout";
	callout: {
		rich_text: RichTextObjectProperty[];
		icon:
			| {
					type: "emoji";
					emoji: string;
			  }
			| FileProperty;
		color: Color;
	};
}

interface ChildDatabaseProperty {
	type: "child_database";
	child_database: {
		title: string;
	};
}

interface ChildPageProperty {
	type: "child_page";
	child_page: {
		title: string;
	};
}

interface CodeProperty {
	type: "code";
	code: {
		caption: RichTextObjectProperty[];
		rich_text: RichTextObjectProperty[];
		text: {
			content: string;
		};
		language?: Language;
	};
}

interface ColumnListProperty {
	type: "column_list";
	column_list: {};
}

interface ColumnProperty {
	type: "column";
	column: {};
}

interface DividerProperty {
	type: "divider";
	divider: {};
}

interface EmbedProperty {
	type: "embed";
	embed: {
		url: string;
	};
}

interface EquationProperty {
	type: "equation";
	equation: {
		expression: string;
	};
}

type FileProperty =
	| {
			type: "file";
			file: {
				url: string;
				expiry_time: string;
			};
			caption?: RichTextObjectProperty[];
	  }
	| {
			type: "external";
			external: {
				url: string;
			};
			caption?: RichTextObjectProperty[];
	  };

interface HeadingsProperty {
	rich_text: RichTextObjectProperty[];
	color: Color;
	is_toggleable: boolean;
}

interface Heading1Property {
	type: "heading_1";
	heading_1: HeadingsProperty;
}

interface Heading2Property {
	type: "heading_2";
	heading_2: HeadingsProperty;
}

interface Heading3Property {
	type: "heading_3";
	heading_3: HeadingsProperty;
}

interface ImageProperty {
	type: "image";
	image: FileProperty;
}

interface LinkPreviewProperty {
	type: "link_preview";
	link_preview: {
		url: string;
	};
}

interface NumberedListItemProperty {
	type: "numbered_list_item";
	numbered_list_item: {
		rich_text: RichTextObjectProperty[];
		color: Color;
		children?: IBlock[];
	};
}

interface ParagraphProperty {
	type: "paragraph";
	paragraph: {
		rich_text: RichTextObjectProperty[];
		color: Color;
		children?: IBlock[];
	};
}

interface PDFProperty {
	type: "pdf";
	pdf: FileProperty;
}

interface QuoteProperty {
	type: "quote";
	quote: {
		rich_text: RichTextObjectProperty[];
		color: Color;
		children?: IBlock[];
	};
}

interface SyncedBlockProperty {
	type: "synced_block";
	synced_block: {
		synced_from: null;
		children: IBlock[];
	};
}

interface TableProperty {
	type: "table";
	table: {
		table_width: number;
		has_column_header: boolean;
		has_row_header: boolean;
	};
}

interface TableRowProperty {
	type: "table_row";
	table_row: {
		cells: RichTextObjectProperty[][];
	};
}

interface TableOfContentsProperty {
	type: "table_of_contents";
	table_of_contents: {
		color: Color;
	};
}

interface ToDoProperty {
	type: "to_do";
	to_do: {
		rich_text: RichTextObjectProperty[];
		checked?: boolean;
		color: Color;
		children: IBlock[];
	};
}

interface ToggleProperty {
	type: "toggle";
	toggle: {
		rich_text: RichTextObjectProperty[];
		color: Color;
		children: IBlock[];
	};
}

interface VideoProperty {
	type: "video";
	video: FileProperty;
}

interface Tags {
	tag: "a" | "b" | "i" | "u" | "s" | "code" | "default";
	richTextObj: RichTextObjectProperty;
}
