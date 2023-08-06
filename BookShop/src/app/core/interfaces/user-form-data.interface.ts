export interface IUserFormData {
    city: string;
    deliveryAddres: string;
    email: string;
    name: string;
    phoneNumber: string;
    postcode: string;
    surname: string;
    passwordGroup: {
        password: string;
        rePassword: string;
    }
}