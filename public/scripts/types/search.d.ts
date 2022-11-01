export interface IApartResponse {
    id?: number;
    name?: string;
    image?: string;
    price?: number;
    description?: string;
    remoteness?: number;
    bookedDates?: {
        checkIn: Date;
        checkOut: Date;
    };
}
export declare function dateToUnixStamp(date: Date): number;
export declare function responseToJson(requestPromise: Promise<Response>): object;
export declare function searchApartment(): Promise<string>;
