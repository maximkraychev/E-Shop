export interface IUser {
    name: string;
    surname: string;
    email: string;
    city: string;
    deliveryAddres: string;
    postcode: number;
    phoneNumber: number;
    authId: string;
    wishlist: string[] | [];
    role: string;
}