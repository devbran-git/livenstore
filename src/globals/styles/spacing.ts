import {Dimensions, Platform} from 'react-native';

export const isIOS = Platform.OS === 'ios';

export const {height, width} = Dimensions.get('window');

export const dynamicWidth = (value: number) => {
  return (value * width) / 375;
};

export const dynamicHeight = (value: number) => {
  return (value * height) / 812;
};

export const hitSlop = {top: 5, right: 5, bottom: 5, left: 5};
