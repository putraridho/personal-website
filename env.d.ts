declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NEXT_PUBLIC_NOTION_TOKEN: string;
		}
	}
}

export {};
