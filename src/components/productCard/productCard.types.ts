import {Product} from 'hooks/products/products.types';

export interface ProductCardProps {
  index: number;
  product: Product;
  handleOpenModal: (productId: number) => void;
}

export interface OperatorsProps {
  [key: string]: () => void;
}
