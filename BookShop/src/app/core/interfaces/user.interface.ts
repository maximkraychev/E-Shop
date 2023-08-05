export interface IUser {
    name: string;
    surname: string;
    email: string;
    city: string;
    deliveryAddres: string;
    postcode: string;
    phoneNumber: string;
    authId: string;
    wishlist: string[] | [];
    role: string;
}