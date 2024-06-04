import {
	BookSearchApiResponse,
	ExampleBookSellerApiResponse,
} from "@/types/responseTypes";

export const formatJsonResponse = (
	responseData: string
): BookSearchApiResponse[] | undefined => {
	if (responseData == "") return undefined;
	const jsonResponse = JSON.parse(
		responseData
	) as ExampleBookSellerApiResponse[];
	return jsonResponse.map((item) => {
		return {
			title: item.book.title,
			author: item.book.author,
			isbn: item.book.isbn,
			quantity: Number(item.stock.quantity),
			price: Number(item.stock.price),
		};
	});
};

export const formatDocumentResponse = (
	responseData: string
): BookSearchApiResponse[] | undefined => {
	// TODO implement helper method based on format of response
	return [{ title: "", author: "", isbn: "", quantity: 0, price: 0 }];
};
