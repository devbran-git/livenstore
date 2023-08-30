import {Product} from 'hooks/products/products.types';

export interface ProductModalProps {
  isModalOpen: boolean;
  selectedProduct: Product | undefined;
  handleCloseModal: () => void;
}
