import BookSearchApiClient  from "./BookSearchApiClient"
import axios from 'axios';

const exampleBaseUrl = 'api.example-books.com'
const responseFormat = 'json';

const axiosCreateSpy = jest.spyOn(axios, 'create');

describe('BookSearchApiClient', () => {
    const bookSearchClient = new BookSearchApiClient(exampleBaseUrl, responseFormat);
    describe('The constructor method', () => {
        it('creates an axios instance with the expected base url', () => {
            expect(axiosCreateSpy).toHaveBeenCalledTimes(1);
            expect(axiosCreateSpy).toHaveBeenCalledWith({baseURL: exampleBaseUrl});
        });
        it('sets the "apiResponseFormat" attribute', () => {
            expect(bookSearchClient.apiResponseFormat).toBeTruthy();
            expect(bookSearchClient.apiResponseFormat).toEqual(responseFormat);
        });
    });
    xdescribe('The getBooksByAuthor method', () => {
        // TODO: implement unit tests for getBooksByAuthor method
        // Different successful calls with different input
        // Error cases
    })
});