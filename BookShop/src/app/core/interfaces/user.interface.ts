import { IBook } from "./book.interface";

export interface IUser {
    name: string;
    surname: string;
    email: string;
    city: string;
    deliveryAddres: string;
    postcode: number;
    phoneNumber: string;
    authId: string;
    wishlist: IBook[] | [];
}