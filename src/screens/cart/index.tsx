import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from 'navigator/routes.types';

import ArrowBack from 'assets/svg/arrowBack.svg';

import styles from './styles';

const Cart: React.FC = () => {
  const {goBack} = useNavigation<NavigationProps>();

  const handleNavigateToHome = () => goBack();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CART</Text>

      <TouchableOpacity style={styles.button} onPress={handleNavigateToHome}>
        <ArrowBack />
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
