import { IBook } from "./book.interface";

export interface IUser {
    firstName: string;
    lastName: string;
    addres: string;
    phoneNumber: string;
    email: string;
    authId: string;
    wishlist: IBook[] | [];
}