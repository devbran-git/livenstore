import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from 'navigator/routes.types';

import styles from './styles';

const Home: React.FC = () => {
  const {navigate} = useNavigation<NavigationProps>();

  const handleNavigateToCart = () => navigate('Cart');

  return (
    <View style={styles.container}>
      <Text>HOME</Text>

      <TouchableOpacity onPress={handleNavigateToCart}>
        <Text style={styles.button}>Ir para o Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;