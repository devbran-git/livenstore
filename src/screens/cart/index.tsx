import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from 'navigator/routes.types';

import styles from './styles';
import IconSvg from 'components/iconSvg';

const Cart: React.FC = () => {
  const {goBack} = useNavigation<NavigationProps>();

  const handleNavigateToHome = () => goBack();

  return (
    <View style={styles.container}>
      <Text>CART</Text>

      <TouchableOpacity style={styles.button} onPress={handleNavigateToHome}>
        <IconSvg name="arrowBack" width={16} height={16} />
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
