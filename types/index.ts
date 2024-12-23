//type--interface

 export interface Guitar {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
  }
  export type CardItem = Guitar & {
    quantity: number;
  }