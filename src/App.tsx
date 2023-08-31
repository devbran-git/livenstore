import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MainStack from 'navigator/routes';
import {ProductsProvider} from 'hooks/products/useProducts';
import {CartProvider} from 'hooks/cart/useCart';

const App = () => {
  return (
    <NavigationContainer>
      <ProductsProvider>
        <CartProvider>
          <MainStack />
        </CartProvider>
      </ProductsProvider>
    </NavigationContainer>
  );
};

export default App;
