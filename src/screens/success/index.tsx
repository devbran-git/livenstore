import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import SuccessIcon from 'assets/svg/success.svg';

import styles from './styles';

import {NavigationProps} from 'navigator/routes.types';

const Success: React.FC = () => {
  const {navigate} = useNavigation<NavigationProps>();

  const handleNavigateToHome = () => navigate('Home');

  return (
    <SafeAreaView style={styles.container}>
      <SuccessIcon width={120} height={120} />
      <Text style={styles.successMessage}>You made it successfully!</Text>

      <TouchableOpacity activeOpacity={0.7} onPress={handleNavigateToHome}>
        <Text style={styles.backToStoreButtonText}>Back to home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Success;
