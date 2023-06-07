import { RichTextObjectProperty, Tags } from "@/types";

import { annotationsToNode } from "./annotationsToNode";

export function deserializeRichText(richText: RichTextObjectProperty[]): React.ReactNode[] {
	let nodes: React.ReactNode[] = [];

	richText.forEach((richTextObj) => {
		let tags: Tags[] = [];
		const { href, annotations } = richTextObj;

		if (href) {
			tags.push({ tag: "a", richTextObj });
		}
		if (annotations.bold) {
			tags.push({ tag: "b", richTextObj });
		}
		if (annotations.italic) {
			tags.push({ tag: "i", richTextObj });
		}
		if (annotations.underline) {
			tags.push({ tag: "u", richTextObj });
		}
		if (annotations.strikethrough) {
			tags.push({ tag: "s", richTextObj });
		}
		if (annotations.code) {
			tags.push({ tag: "code", richTextObj });
		}

		tags.push({ tag: "default", richTextObj });

		nodes.push(annotationsToNode(tags));
	});

	return nodes;
}
