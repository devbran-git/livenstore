import React, {useState} from 'react';
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import ResumeCard from 'components/resumeCard/resumeCard';
import ArrowBack from 'assets/svg/arrowBack.svg';
import Trash from 'assets/svg/trash.svg';
import EmptyIcon from 'assets/svg/emptyCart.svg';

import {useCart} from 'hooks/cart/useCart';

import styles from './styles';

import {NavigationProps} from 'navigator/routes.types';
import {hitSlop} from 'globals/styles/spacing';

const Cart: React.FC = () => {
  const {goBack, navigate} = useNavigation<NavigationProps>();

  const {cart, cartTotal, resetCart} = useCart();

  const [isToastVisible, setIsToastVisible] = useState(false);

  const handleNavigateToHome = () => goBack();

  const handleFinalize = () => {
    navigate('Success');
    resetCart();
  };

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
          hitSlop={hitSlop}
          onPress={handleNavigateToHome}>
          <ArrowBack width={16} height={16} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Cart</Text>
        <View style={styles.ghostView} />
      </View>

      {cart.length ? (
        <>
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

            <FlatList
              data={cart}
              contentContainerStyle={styles.productList}
              keyExtractor={item => String(item?.id)}
              renderItem={({item}) => <ResumeCard product={item} />}
              ItemSeparatorComponent={() => (
                <View style={styles.listSeparator} />
              )}
              showsVerticalScrollIndicator={false}
            />
          </View>

          <View style={styles.totalContainer}>
            <View style={styles.totalInfo}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalAmount}>$ {cartTotal?.toFixed(2)}</Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.finalizeButton}
              onPress={handleFinalize}>
              <Text style={styles.finalizeButtonText}>Finalize</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.backToStoreButton}
              onPress={handleNavigateToHome}>
              <Text style={styles.backToStoreButtonText}>Back to store</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.emptyCart}>
          <EmptyIcon width={280} height={280} />
          <Text style={styles.emptyCartMessage}>Your cart is still empty.</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.backToStoreButton}
            onPress={handleNavigateToHome}>
            <Text style={styles.backToStoreButtonText}>Back to store</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Cart;
