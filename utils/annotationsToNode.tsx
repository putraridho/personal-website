import React from "react";

import { Tags } from "@/types";

export function annotationsToNode(tags: Tags[]): React.ReactNode {
	const _tags = [...tags];
	const tagObj = _tags.shift();

	if (tagObj) {
		const {
			tag,
			richTextObj: { annotations, href, plain_text },
		} = tagObj;

		switch (tag) {
			case "a":
				return (
					<a
						key={`${plain_text}_a`}
						href={href!}
						{...(annotations.color && annotations.color !== "default" ? { style: { color: annotations.color } } : {})}
					>
						{annotationsToNode(_tags)}
					</a>
				);
			case "b":
				return (
					<b
						key={`${plain_text}_b`}
						{...(annotations.color && annotations.color !== "default" ? { style: { color: annotations.color } } : {})}
					>
						{annotationsToNode(_tags)}
					</b>
				);
			case "i":
				return (
					<i
						key={`${plain_text}_i`}
						{...(annotations.color && annotations.color !== "default" ? { style: { color: annotations.color } } : {})}
					>
						{annotationsToNode(_tags)}
					</i>
				);
			case "u":
				return (
					<u
						key={`${plain_text}_u`}
						{...(annotations.color && annotations.color !== "default" ? { style: { color: annotations.color } } : {})}
					>
						{annotationsToNode(_tags)}
					</u>
				);
			case "s":
				return (
					<s
						key={`${plain_text}_s`}
						{...(annotations.color && annotations.color !== "default" ? { style: { color: annotations.color } } : {})}
					>
						{annotationsToNode(_tags)}
					</s>
				);
			case "code":
				return (
					<code
						key={`${plain_text}_code`}
						{...(annotations.color && annotations.color !== "default" ? { style: { color: annotations.color } } : {})}
					>
						{annotationsToNode(_tags)}
					</code>
				);
			default:
				return <React.Fragment key={`${plain_text}_default`}>{plain_text}</React.Fragment>;
		}
	}
}
