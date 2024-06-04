export type BookSearchApiResponse = {
    title: string;
    author: string;
    isbn: string;
    quantity: number;
    price: number;
}

export type ExampleBookSellerApiResponse = {
    book: {
        title: string;
        author: string;
        isbn: string;
        year: string;
    };
	stock: {
        quantity: number;
        price: number;
    };
}