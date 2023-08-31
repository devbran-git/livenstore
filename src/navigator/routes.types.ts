import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type StackTypesList = {
  Home: undefined;
  Cart: undefined;
  Success: undefined;
};

export type NavigationProps = NativeStackNavigationProp<StackTypesList>;
