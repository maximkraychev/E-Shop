interface IBaseBook {
    title: string;
    author: string;
    year: number;
    language: string;
    length: number;
    price: number;
    discount: number;
    description: string;
}


export interface IBook extends IBaseBook {
    image: string;
}

export interface IBookUpload extends IBaseBook {
    image: File;
}