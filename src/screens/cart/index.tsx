import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from 'navigator/routes.types';

import styles from './styles';

const Cart: React.FC = () => {
  const {navigate} = useNavigation<NavigationProps>();

  const handleNavigateToHome = () => navigate('Home');

  return (
    <View style={styles.container}>
      <Text>CART</Text>

      <TouchableOpacity onPress={handleNavigateToHome}>
        <Text style={styles.button}>Ir para a Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
