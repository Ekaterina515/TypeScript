export type Id = number | string;

export interface ISearchFormData {
  city?: string;
  checkin?: string;
  checkout?: string;
  price?: number | string;
}

export type TFavorite = {
  id: Id;
  name: string;
  image: string;
};

export type TFavorites = {
  [key: string]: TFavorite;
};

export type Book = {
  placeId: Id;
  checkInDate: Date;
  checkOutDate: Date;
  maxPrice?: number;
};

export type TRoom = Book;

export type THomyProvider = {
  id: Id;
  image: string;
  name: string;
  description: string;
  remoteness: number;
  bookedDates: number[];
  price: number;
};
