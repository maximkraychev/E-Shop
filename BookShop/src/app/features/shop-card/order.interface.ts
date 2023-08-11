import { IOrederBook } from "./order-book.interface";

export interface IOreder {
    books: IOrederBook[];
    orderPrice: number;
    userId: string;
    userPhoneNumber: string;
    userCity: string;
    userDeliveryAddres: string;
    userName: string;
    userSurname: string;
    userEmail: string;
    userPostcode: string;
}