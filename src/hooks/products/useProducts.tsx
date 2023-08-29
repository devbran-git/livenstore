import React, {
  useState,
  ReactNode,
  useEffect,
  useContext,
  createContext,
} from 'react';
import {Product} from './products.types';
import {api} from 'services/api';

interface ProductsProviderProps {
  children: ReactNode;
}

export interface ProductsContextProps {
  products: Product[];
  isLoading: boolean;
}

const ProductsContext = createContext({} as ProductsContextProps);

const ProductsProvider = ({children}: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await api.get('products');

      setProducts(response.data);
    } catch (error) {
      console.log('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{products, isLoading}}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => {
  const context = useContext(ProductsContext);
  return context;
};

export {ProductsProvider, useProducts};
