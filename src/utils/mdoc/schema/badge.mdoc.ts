import { component } from "@astrojs/markdoc/config";

// /** @type {import('@markdoc/markdoc').Schema} */
export const badge = {
	render: component("./src/utils/mdoc/components/Badge.astro"),
	children: ["paragraph", "tag", "list"],
	attributes: {
		type: {
			type: String,
			default: "note",
			matches: ["error", "check", "note", "warning"],
			errorLevel: "critical",
		},
		text: {
			type: String,
		},
		outline: {
			type: Boolean,
			required: false,
		},
	},
};
