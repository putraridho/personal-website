declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NEXT_PUBLIC_NOTION_TOKEN: string;
			NEXT_PUBLIC_NOTION_DATABASE_ID: string;
		}
	}
}

export {};
