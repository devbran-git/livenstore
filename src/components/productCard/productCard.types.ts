import {Product} from 'hooks/products/products.types';

export interface ProductCardProps {
  product: Product;
  index: number;
}

export interface OperatorsProps {
  [key: string]: () => void;
}
