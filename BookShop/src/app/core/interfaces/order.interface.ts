import { IOrederBook } from "../../features/shop-card/order-book.interface";

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

export interface IOrderWithId extends IOreder {
    orderId: string
}