import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MainStack from 'navigator/routes';
import {ProductsProvider} from 'hooks/products/useProducts';

const App = () => {
  return (
    <NavigationContainer>
      <ProductsProvider>
        <MainStack />
      </ProductsProvider>
    </NavigationContainer>
  );
};

export default App;
