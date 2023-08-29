import React, {
  useState,
  ReactNode,
  useContext,
  createContext,
  useEffect,
} from 'react';

import {CartType, CartProduct} from './cart.types';
import {Product} from 'hooks/products/products.types';

interface CartProviderProps {
  children: ReactNode;
}

export interface CartContextProps {
  cart: CartType;
  updateCart: (newProduct: CartProduct) => void;
  removeProductFromCart: (product: Product) => void;
}

const CartContext = createContext({} as CartContextProps);

const CartProvider = ({children}: CartProviderProps) => {
  const [cart, setCart] = useState<CartType>([]);

  const updateCart = (product: CartProduct) => {
    let cartToUpdate = [...cart];
    const subtotal = product.price * product.productCount;
    const productToCart = {...product, subtotal};

    cartToUpdate.push(productToCart);

    setCart(cartToUpdate);
  };

  const removeProductFromCart = (product: Product) => {
    const cartToUpdate = [...cart];

    const productToRemove = cart.findIndex(
      cartProduct => cartProduct.id === product.id,
    );

    if (productToRemove > -1) {
      cartToUpdate.splice(productToRemove, 1);
    }

    setCart(cartToUpdate);
  };

  useEffect(() => {
    console.log('cart', cart);
  }, [cart]);

  return (
    <CartContext.Provider value={{cart, updateCart, removeProductFromCart}}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  return context;
};

export {CartProvider, useCart};
