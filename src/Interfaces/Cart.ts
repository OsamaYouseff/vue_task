import type { CartProduct } from "./CartProduct";

export interface Cart {
  products: CartProduct[];
  cartTotalPrice: number;
  cartItemsNum: number;
}
