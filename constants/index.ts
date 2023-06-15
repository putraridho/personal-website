import { Client } from "@notionhq/client";
import Axios from "axios";

export const HOST = "https://api.mrputraridho.com";

export const HEADER_MENU = [
	{ text: "About", href: "/" },
	{ text: "Projects", href: "#" },
	{ text: "Blogs", href: "/blogs" },
	{ text: "Contact", href: "#" },
];

export const TZ = "Asia/Jakarta";

export const COLOR_TABLE: { [color: string]: string } = {
	blue: "var(--notion-blue)",
	blue_background: "var(--notion-blue)",
	brown: "var(--notion-brown)",
	brown_background: "var(--notion-brown)",
	gray: "var(--notion-gray)",
	gray_background: "var(--notion-gray)",
	green: "var(--notion-green)",
	green_background: "var(--notion-green)",
	orange: "var(--notion-orange)",
	orange_background: "var(--notion-orange)",
	pink: "var(--notion-pink)",
	pink_background: "var(--notion-pink)",
	purple: "var(--notion-purple)",
	purple_background: "var(--notion-purple)",
	red: "var(--notion-red)",
	red_background: "var(--notion-red)",
	yellow: "var(--notion-yellow)",
	yellow_background: "var(--notion-yellow)",
};

export const axios = Axios.create({
	baseURL: HOST,
	timeout: 60000,
});
