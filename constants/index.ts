import { Client } from "@notionhq/client";
import Axios from "axios";

export const notion = new Client({
	auth: process.env.NEXT_PUBLIC_NOTION_TOKEN,
	notionVersion: "2022-06-28",
});

export const host = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://www.mrputraridho.com";

export const axios = Axios.create({
	baseURL: host,
	timeout: 60000,
});

export const headerMenu = [
	{ text: "About", href: "/" },
	{ text: "Projects", href: "#" },
	{ text: "Blogs", href: "/blogs" },
	{ text: "Contact", href: "#" },
];

export const TZ = "Asia/Jakarta";
