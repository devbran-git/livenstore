import {
  CardStyleInterpolators,
  TransitionSpecs,
  createStackNavigator,
} from '@react-navigation/stack';

import Cart from 'screens/cart';
import Home from 'screens/home';
import {StackTypesList} from './routes.types';
import Success from 'screens/success';

const Stack = createStackNavigator<StackTypesList>();

const optionsDefault = {
  options: {
    headerShown: false,
    gestureEnabled: false,
    animationEnabled: false,
  },
};

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} {...optionsDefault} />
      <Stack.Screen name="Cart" component={Cart} {...optionsDefault} />
      <Stack.Screen name="Success" component={Success} {...optionsDefault} />
    </Stack.Navigator>
  );
};

export default MainStack;
