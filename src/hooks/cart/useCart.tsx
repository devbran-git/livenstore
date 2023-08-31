import React, {
  useMemo,
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
  cartTotal: number;
  addProductToCart: (newProduct: CartProduct) => void;
  removeProductFromCart: (productId: number) => void;
  updateCart: (handledValue: CartProduct) => void;
  resetCart: () => void;
}

const CartContext = createContext({} as CartContextProps);

const CartProvider = ({children}: CartProviderProps) => {
  const [cart, setCart] = useState<CartType>([]);
  const [cartTotal, setCartTotal] = useState(0);

  const calculatedTotal = useMemo(() => {
    return cart.reduce((acc, next) => {
      return acc + Number(next.subtotal);
    }, 0);
  }, [cart]);

  const resetCart = () => {
    setCart([]);
  };

  const addProductToCart = (product: CartProduct) => {
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

  const updateCart = (product: CartProduct) => {
    const newCart = cart.map(cartProduct => {
      if (cartProduct.id === product.id)
        return {
          ...cartProduct,
          productCount: product.productCount,
          subtotal: product.subtotal,
        };

      return cartProduct;
    });

    setCart(newCart);
  };

  useEffect(() => {
    setCartTotal(calculatedTotal);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartTotal,
        removeProductFromCart,
        addProductToCart,
        updateCart,
        resetCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  return context;
};

export {CartProvider, useCart};
