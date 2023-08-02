export interface IAuthor {
    name: string;
    books: {title: string, bookId: string} | [];
}