export declare type Id = number | string;
export interface ISearchFormData {
    city?: string;
    checkin?: string;
    checkout?: string;
    price?: number | string;
}
export declare type TFavorite = {
    id: Id;
    name: string;
    image: string;
};
export declare type TFavorites = {
    [key: string]: TFavorite;
};
export declare type Book = {
    placeId: Id;
    checkInDate: Date;
    checkOutDate: Date;
    maxPrice?: number;
};
export declare type TRoom = Book;
export declare type THomyProvider = {
    id: Id;
    image: string;
    name: string;
    description: string;
    remoteness: number;
    bookedDates: number[];
    price: number;
};
