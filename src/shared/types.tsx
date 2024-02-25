export interface IGood {
  id: string;
  brand: string | null;
  price: number;
  product: string;
}

export interface IFilter {
  [key: string]: string | number;
}
