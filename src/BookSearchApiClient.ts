import { formatDocumentResponse, formatJsonResponse } from "./lib/formatHelpers";
import { BookSearchApiResponse } from "./types/responseTypes";
import axios, { Axios, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios"

export default class BookSearchApiClient {
	apiResponseFormat: ResponseType;
	private axiosInstance: Axios;

	constructor(baseURL: string, apiResponseFormat: ResponseType) {
		this.apiResponseFormat = apiResponseFormat as ResponseType;
		this.axiosInstance = axios.create({ baseURL });
	}

	private axiosRequestConfig = (retrieveLimit): AxiosRequestConfig => {
		return {
			params:  {
				limit: retrieveLimit
			},
			responseType: this.apiResponseFormat
		}
	};

	private handleApiResponse = (response: AxiosResponse): BookSearchApiResponse[] | undefined => {
		if (response.status != 200) {
			alert(
				"Request failed.  Returned status of " + response.status
			);
			return;
		}

		if (this.apiResponseFormat == "json") {
			return formatJsonResponse(response.data);
		} else if (this.apiResponseFormat == "document") {
			return formatDocumentResponse(response.data);
		}
	};

	getBooksByAuthor = async (
		authorName: string,
		retrieveLimit: number
	): Promise<BookSearchApiResponse[] | undefined> => {
		const config = this.axiosRequestConfig({
			retrieveLimit
		});

		const response = await this.axiosInstance.get(`/by-author?q=${authorName}`, config)
		return this.handleApiResponse(response);
	};
}
