 /* eslint-disable */
export interface ProductsState {
  nzdData: Product[],
  usdData: Product[],
  euroData: Product[],
}
export interface Product {
  id: number,
  name: string,
  price: number,
  type: string,
  imageUrl: string,
  subImageUrl: string,
};
export interface State {
  products: ProductsState
};
export enum RateType {
  NZD = 1,
  USD = 2,
  EURO = 3,
}