import React, {
  useState,
  ReactNode,
  useEffect,
  useContext,
  createContext,
} from 'react';

import {CartType, CartProduct} from './cart.types';

interface CartProviderProps {
  children: ReactNode;
}

export interface CartContextProps {
  cart: CartType;
  updateCart: (newProduct: CartProduct) => void;
  removeProductFromCart: (productId: number) => void;
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

  const removeProductFromCart = (productId: number) => {
    const cartToUpdate = [...cart];

    const productToRemove = cart.findIndex(
      cartProduct => cartProduct.id === productId,
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
