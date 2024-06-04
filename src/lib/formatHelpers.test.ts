import { BookSearchApiResponse } from "@/types/responseTypes";
import { formatJsonResponse } from "./formatHelpers"

describe('The formatJsonResponse helper method', () => {
    const exampleJsonApiResponse: string = JSON.stringify([
        {
            book: {
                title: "Island",
                author: "Huxley, Aldous",
                isbn: "9876543212345",
                year: "1963"
            },
            stock: {
                quantity: "33",
                price: "19.99",
            },
        },
        {
            book: {
                title: "Crome Yellow",
                author: "Huxley, Aldous",
                isbn: "5432123445678",
                year: "1921"
            },
            stock: {
                quantity: "13",
                price: "5",
            },
        },
    ]);
    
    const expectedOutputFromClient: BookSearchApiResponse[] = [
        {
            title: "Island",
            author: "Huxley, Aldous",
            isbn: "9876543212345",
            quantity: 33,
            price: 19.99,
        },
        {
            title: "Crome Yellow",
            author: "Huxley, Aldous",
            isbn: "5432123445678",
            quantity: 13,
            price: 5,
        },
    ];
    it.each([
        [
            "correct", 
            {
                input: exampleJsonApiResponse, 
                expectedOutput: expectedOutputFromClient
            }
        ],[
            "blank", 
            {
                input: "", 
                expectedOutput: undefined
            }
        ]
    ])('Will return the expected response when given %s input', (_testName, {input, expectedOutput}) => {
        const actual = formatJsonResponse(input)
        expect(actual).toEqual(expectedOutput);
    });
    it('Throws an error if the given response object is not of the correct type', () => {
        const responseWithIncorrectFormat = JSON.stringify([{
            title: "Island",
            author: "Huxley, Aldous",
            isbn: "9876543212345",
            quantity: 33,
            price: 19.99,
        }])
        expect(() => formatJsonResponse(responseWithIncorrectFormat)).toThrow();
    });
})
