/** Generate by swagger-axios-codegen */
// @ts-nocheck
/* eslint-disable */

/** Generate by swagger-axios-codegen */
/* eslint-disable */
// @ts-nocheck
import { AxiosInstance, AxiosRequestConfig } from "axios";

export interface IRequestOptions extends AxiosRequestConfig {
	/** only in axios interceptor config*/
	loading?: boolean;
	showError?: boolean;
}

export interface IRequestConfig {
	method?: any;
	headers?: any;
	url?: any;
	data?: any;
	params?: any;
}

// Add options interface
export interface ServiceOptions {
	axios?: AxiosInstance;
	/** only in axios interceptor config*/
	loading: boolean;
	showError: boolean;
}

// Add default options
export const serviceOptions: ServiceOptions = {};

// Instance selector
export function axios(configs: IRequestConfig, resolve: (p: any) => void, reject: (p: any) => void): Promise<any> {
	if (serviceOptions.axios) {
		return serviceOptions.axios
			.request(configs)
			.then((res) => {
				resolve(res.data);
			})
			.catch((err) => {
				reject(err);
			});
	} else {
		throw new Error("please inject yourself instance like axios  ");
	}
}

export function getConfigs(method: string, contentType: string, url: string, options: any): IRequestConfig {
	const configs: IRequestConfig = {
		loading: serviceOptions.loading,
		showError: serviceOptions.showError,
		...options,
		method,
		url,
	};
	configs.headers = {
		...options.headers,
		"Content-Type": contentType,
	};
	return configs;
}

export const basePath = "";

export interface IList<T> extends Array<T> {}
export interface List<T> extends Array<T> {}
export interface IDictionary<TValue> {
	[key: string]: TValue;
}
export interface Dictionary<TValue> extends IDictionary<TValue> {}

export interface IListResult<T> {
	items?: T[];
}

export class ListResultDto<T> implements IListResult<T> {
	items?: T[];
}

export interface IPagedResult<T> extends IListResult<T> {
	totalCount?: number;
	items?: T[];
}

export class PagedResultDto<T = any> implements IPagedResult<T> {
	totalCount?: number;
	items?: T[];
}

// customer definition
// empty

export class BlocksService {
	/**
	 *
	 */
	static blocksControllerRetrieve(
		params: {
			/**  */
			blockId: string;
		} = {} as any,
		options: IRequestOptions = {},
	): Promise<BlocksRetrieveResultSuccess> {
		return new Promise((resolve, reject) => {
			let url = basePath + "/blocks/{block_id}";
			url = url.replace("{block_id}", params["blockId"] + "");

			const configs: IRequestConfig = getConfigs("get", "application/json", url, options);

			/** 适配ios13，get请求不允许带body */

			axios(configs, resolve, reject);
		});
	}
	/**
	 *
	 */
	static blocksControllerChildren(
		params: {
			/**  */
			blockId: string;
		} = {} as any,
		options: IRequestOptions = {},
	): Promise<BlocksChildrenResultSuccess> {
		return new Promise((resolve, reject) => {
			let url = basePath + "/blocks/{block_id}/children";
			url = url.replace("{block_id}", params["blockId"] + "");

			const configs: IRequestConfig = getConfigs("get", "application/json", url, options);

			/** 适配ios13，get请求不允许带body */

			axios(configs, resolve, reject);
		});
	}
}

export class DatabasesService {
	/**
	 *
	 */
	static databasesControllerRetrieve(options: IRequestOptions = {}): Promise<DatabasesRetrieveResultSuccess> {
		return new Promise((resolve, reject) => {
			let url = basePath + "/databases";

			const configs: IRequestConfig = getConfigs("get", "application/json", url, options);

			/** 适配ios13，get请求不允许带body */

			axios(configs, resolve, reject);
		});
	}
	/**
	 *
	 */
	static databasesControllerQuery(
		params: {
			/** requestBody */
			body?: DatabasesQueryDto;
		} = {} as any,
		options: IRequestOptions = {},
	): Promise<DatabasesQueryResultSuccess> {
		return new Promise((resolve, reject) => {
			let url = basePath + "/databases/query";

			const configs: IRequestConfig = getConfigs("post", "application/json", url, options);

			let data = params.body;

			configs.data = data;

			axios(configs, resolve, reject);
		});
	}
}

export class SearchService {
	/**
	 *
	 */
	static searchControllerSearch(options: IRequestOptions = {}): Promise<SearchResultSuccess> {
		return new Promise((resolve, reject) => {
			let url = basePath + "/search";

			const configs: IRequestConfig = getConfigs("get", "application/json", url, options);

			/** 适配ios13，get请求不允许带body */

			axios(configs, resolve, reject);
		});
	}
}

export interface BlocksRetrieveResultSuccess {
	/**  */
	success: boolean;

	/**  */
	id: string;

	/**  */
	created_time: string;

	/**  */
	title: string;

	/**  */
	description?: string;

	/**  */
	tags: string[];
}

export interface ResultError {
	/**  */
	success: boolean;

	/**  */
	message: string;
}

export interface BlocksChildrenResultSuccess {
	/**  */
	success: boolean;

	/**  */
	has_more: boolean;

	/**  */
	next_cursor?: string;

	/**  */
	blocks: object[];
}

export interface DatabasesRetrieveResultSuccess {
	/**  */
	success: boolean;

	/**  */
	id: string;

	/**  */
	properties: object;
}

export interface DatabasesQueryDto {
	/**  */
	start_cursor?: string;

	/**  */
	page_size?: number;
}

export interface DatabasesQueryResultSuccess {
	/**  */
	success: boolean;

	/**  */
	results: object[];

	/**  */
	next_cursor: string;

	/**  */
	has_more: boolean;
}

export interface SearchResultSuccess {
	/**  */
	success: boolean;

	/**  */
	results: object[];

	/**  */
	next_cursor: string;

	/**  */
	has_more: boolean;
}
