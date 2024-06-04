import BookSearchApiClient from "./BookSearchApiClient";

const bookSellerExampleUrl = "http://api.book-seller-example.com";

const bookSellerExampleClient = new BookSearchApiClient(bookSellerExampleUrl, 'json');

export const listBooksByHuxley = async () => {
    const booksByHuxley = await bookSellerExampleClient.getBooksByAuthor("Huxley, Aldous", 10);
    
    booksByHuxley?.forEach((book) => console.log(book.title));
}
