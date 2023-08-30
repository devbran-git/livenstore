import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from 'navigator/routes.types';

import ArrowBack from 'assets/svg/arrowBack.svg';
import Trash from 'assets/svg/trash.svg';

import styles from './styles';
import {useCart} from 'hooks/cart/useCart';

const Cart: React.FC = () => {
  const {goBack} = useNavigation<NavigationProps>();

  const {resetCart} = useCart();

  const [isToastVisible, setIsToastVisible] = useState(false);

  const handleNavigateToHome = () => goBack();

  const handleRemoveAllProducts = () => {
    resetCart();
    setIsToastVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.7}
          onPress={handleNavigateToHome}>
          <ArrowBack width={16} height={16} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Cart</Text>
        <View style={styles.ghostView} />
      </View>

      <View style={styles.resumeSection}>
        <View style={styles.resumeSectionHeader}>
          <Text style={styles.resumeSectionTitle}>Resume</Text>

          <TouchableOpacity
            style={{opacity: isToastVisible ? 0.7 : 1}}
            activeOpacity={0.7}
            onPress={() => setIsToastVisible(true)}>
            <Trash width={12} height={14} />
          </TouchableOpacity>
        </View>

        {isToastVisible && (
          <View style={styles.confirmToast}>
            <Text style={styles.toastMessage}>
              Sure to remove all products from cart?
            </Text>

            <View style={styles.toastButtonsContainer}>
              <TouchableOpacity
                style={styles.toastButton}
                onPress={() => setIsToastVisible(false)}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.toastButton}
                onPress={handleRemoveAllProducts}>
                <Text style={styles.confirmText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Cart;
