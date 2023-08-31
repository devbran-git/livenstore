import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import {useCart} from 'hooks/cart/useCart';

import Minus from 'assets/svg/minus.svg';
import Plus from 'assets/svg/plus.svg';
import Trash from 'assets/svg/trash.svg';

import {hitSlop} from 'globals/styles/spacing';
import styles from './resumeCard.styles';

import {ResumeCardProps} from './resumeCard.types';
import {OperatorsProps} from 'components/productCard/productCard.types';

const ResumeCard: React.FC<ResumeCardProps> = ({product}) => {
  const {cart, removeProductFromCart} = useCart();

  const [productCount, setProductCount] = useState(product.productCount);

  const handleProductCount = (operator: string) => {
    const operators: OperatorsProps = {
      minus: () => {
        if (productCount > 1) setProductCount(productCount - 1);
      },
      plus: () => setProductCount(productCount + 1),
    };

    operators[operator]();
  };

  const handleRemoveProduct = () => {
    removeProductFromCart(product.id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundToImage}>
        <Image
          style={styles.image}
          source={{uri: product?.image}}
          resizeMode="contain"
        />
      </View>

      <View style={styles.contentInfo}>
        <View style={styles.topContent}>
          <Text style={styles.productTitle} numberOfLines={2}>
            {product?.title}
          </Text>

          <View style={styles.subTotalContainer}>
            <Text style={styles.subtotalLabel}>Subtotal</Text>
            <Text style={styles.productPrice}>
              $ {(product.price * productCount).toFixed(2)}
            </Text>
          </View>
        </View>

        <View style={styles.productControls}>
          <View style={styles.counter}>
            {productCount > 1 ? (
              <TouchableOpacity
                activeOpacity={0.7}
                hitSlop={hitSlop}
                onPress={() => handleProductCount('minus')}>
                <Minus width={12} height={12} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                activeOpacity={0.7}
                hitSlop={hitSlop}
                onPress={handleRemoveProduct}>
                <Trash width={12} height={12} />
              </TouchableOpacity>
            )}

            <View style={styles.countDisplay}>
              <Text style={styles.count}>{productCount}</Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
              hitSlop={hitSlop}
              onPress={() => handleProductCount('plus')}>
              <Plus width={12} height={12} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.removeButton}
            onPress={handleRemoveProduct}>
            <Text style={styles.removeButtonTitle}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ResumeCard;
