import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from 'navigator/routes.types';

import styles from './styles';
import IconSvg from 'components/iconSvg';

const Home: React.FC = () => {
  const {navigate} = useNavigation<NavigationProps>();

  const handleNavigateToCart = () => navigate('Cart');

  return (
    <View style={styles.container}>
      <Text>HOME</Text>

      <TouchableOpacity style={styles.button} onPress={handleNavigateToCart}>
        <IconSvg name="cart" width={16} height={16} />
      </TouchableOpacity>
    </View>
  );
};

export default Home;
