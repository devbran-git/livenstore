import {Product} from 'hooks/products/products.types';

export type CartType = CartProduct[];

export interface CartProduct extends Product {
  productCount: number;
}
