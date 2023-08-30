import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from 'navigator/routes.types';

import ArrowBack from 'assets/svg/arrowBack.svg';

import styles from './styles';

const Cart: React.FC = () => {
  const {goBack} = useNavigation<NavigationProps>();

  const handleNavigateToHome = () => goBack();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleNavigateToHome}>
          <ArrowBack width={16} height={16} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Cart</Text>
        <View style={styles.ghostView} />
      </View>
    </SafeAreaView>
  );
};

export default Cart;
