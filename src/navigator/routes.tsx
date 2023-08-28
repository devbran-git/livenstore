import {createStackNavigator} from '@react-navigation/stack';

import Cart from 'screens/cart';
import Home from 'screens/home';
import {StackTypesList} from './routes.types';

const Stack = createStackNavigator<StackTypesList>();

const optionsDefault = {
  options: {headerShown: false, gestureEnabled: false},
};

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} {...optionsDefault} />
      <Stack.Screen name="Cart" component={Cart} {...optionsDefault} />
    </Stack.Navigator>
  );
};

export default MainStack;
