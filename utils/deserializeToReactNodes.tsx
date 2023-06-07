import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import { COLOR_TABLE } from "@/constants";

import { deserializeRichText } from "./deserializeRichText";

export function setColor(color: string): React.HTMLAttributes<{}> {
	if (color === "default") {
		return {};
	}

	if (color.includes("_background")) {
		return {
			style: {
				backgroundColor: COLOR_TABLE[color],
			},
		};
	}

	return {
		style: {
			color: COLOR_TABLE[color],
		},
	};
}

export function deserializeToReactNodes(blocks: BlockObjectResponse[]): React.ReactNode[] {
	let wrapper: string | null = null;
	let listItems: BlockObjectResponse[] = [];

	let nodes: React.ReactNode[] = [];

	blocks.forEach((block) => {
		switch (wrapper) {
			case "ul":
				if (block.type !== "bulleted_list_item") {
					nodes.push(
						<ul key={listItems.map(({ id }) => id).join("_")}>
							{listItems.map((listBlock) => {
								if (listBlock.type === "bulleted_list_item") {
									const ul = listBlock[listBlock.type];
									return <li key={listBlock.id}>{deserializeRichText(ul.rich_text)}</li>;
								}
							})}
						</ul>,
					);
					wrapper = null;
					listItems = [];
				}
				break;
			case "ol":
				if (block.type !== "numbered_list_item") {
					nodes.push(
						<ol key={listItems.map(({ id }) => id).join("_")}>
							{listItems.map((listBlock) => {
								if (listBlock.type === "numbered_list_item") {
									const ol = listBlock[listBlock.type];
									return <li key={listBlock.id}>{deserializeRichText(ol.rich_text)}</li>;
								}
							})}
						</ol>,
					);
					wrapper = null;
					listItems = [];
				}
				break;
			default:
		}

		switch (block.type) {
			case "paragraph":
				const p = block[block.type];

				if (p.rich_text.length > 0) {
					nodes.push(
						<p key={block.id} {...setColor(p.color)}>
							{deserializeRichText(p.rich_text)}
						</p>,
					);
				} else {
					nodes.push(<br key={block.id} />);
				}
				break;
			case "heading_1":
				const h1 = block[block.type];

				nodes.push(
					<h1 key={block.id} {...setColor(h1.color)}>
						{deserializeRichText(h1.rich_text)}
					</h1>,
				);
				break;
			case "heading_2": {
				const h2 = block[block.type];

				nodes.push(
					<h2 key={block.id} {...setColor(h2.color)}>
						{deserializeRichText(h2.rich_text)}
					</h2>,
				);
				break;
			}
			case "heading_3": {
				const h3 = block[block.type];

				nodes.push(
					<h3 key={block.id} {...setColor(h3.color)}>
						{deserializeRichText(h3.rich_text)}
					</h3>,
				);
				break;
			}
			case "bulleted_list_item":
				if (!wrapper) {
					wrapper = "ul";
				}

				listItems.push(block);
				break;
			case "numbered_list_item":
				if (!wrapper) {
					wrapper = "ol";
				}

				listItems.push(block);
				break;
			case "quote":
				break;
			case "to_do":
				break;
			case "toggle":
				break;
			case "template":
				break;
			case "synced_block":
				break;
			case "child_page":
				break;
			case "child_database":
				break;
			case "equation":
				break;
			case "code":
				const code = block[block.type];

				const codeString = code.rich_text.map((value) => value.plain_text);

				nodes.push(
					<div className="highlight" key={block.id}>
						<SyntaxHighlighter language={code.language}>{codeString}</SyntaxHighlighter>
					</div>,
				);
				break;
			case "callout":
				break;
			case "divider":
				break;
			case "breadcrumb":
				break;
			case "table_of_contents":
				break;
			case "column_list":
				break;
			case "column":
				break;
			case "link_to_page":
				break;
			case "table":
				break;
			case "table_row":
				break;
			case "embed":
				break;
			case "bookmark":
				break;
			case "image":
				break;
			case "video":
				break;
			case "pdf":
				break;
			case "file":
				break;
			case "audio":
				break;
			case "link_preview":
				break;
			case "unsupported":
				break;
			default:
			// Do Nothing
		}
	});

	return nodes;
}
