import {Product} from 'hooks/products/products.types';

export interface ProductModalProps {
  isModalOpen: boolean;
  selectedProduct: Product | undefined;
  handleAddProductsToCart: (product: Product, productCount: number) => void;
  handleCloseModal: () => void;
}
