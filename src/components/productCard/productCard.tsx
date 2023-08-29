import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import AddCart from 'assets/svg/addCart.svg';
import Star from 'assets/svg/star.svg';
import Minus from 'assets/svg/minus.svg';
import Plus from 'assets/svg/plus.svg';

import {hitSlop} from 'globals/styles/spacing';
import styles from './productCard.styles';

import {OperatorsProps, ProductCardProps} from './productCard.types';

const ProductCard: React.FC<ProductCardProps> = ({product, index}) => {
  const [productCount, setProductCount] = useState(1);

  const handleProductCount = (operator: string) => {
    const operators: OperatorsProps = {
      minus: () => {
        if (productCount > 1) setProductCount(productCount - 1);
      },
      plus: () => setProductCount(productCount + 1),
    };

    operators[operator]();
  };

  const isEvenNumber = index % 2 === 0;
  return (
    <View style={[styles.container, {marginRight: isEvenNumber ? 8 : 0}]}>
      <View style={styles.backgroundToImage}>
        <Image
          style={styles.image}
          source={{uri: product?.image}}
          resizeMode="contain"
        />
      </View>

      <View style={styles.contentInfo}>
        <Text style={styles.productTitle} numberOfLines={2}>
          {product?.title}
        </Text>

        <View style={styles.ratingSection}>
          <Text style={styles.ratingValue}>{product?.rating.rate}</Text>

          <Star />

          <Text style={styles.ratingCount}>
            ({product?.rating.count} ratings)
          </Text>
        </View>

        <Text style={styles.productPrice}>$ {product.price}</Text>

        <View style={styles.bottomContent}>
          <View style={styles.counter}>
            <TouchableOpacity
              activeOpacity={0.7}
              hitSlop={hitSlop}
              onPress={() => handleProductCount('minus')}>
              <Minus />
            </TouchableOpacity>

            <View style={styles.countDisplay}>
              <Text style={styles.count}>{productCount}</Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
              hitSlop={hitSlop}
              onPress={() => handleProductCount('plus')}>
              <Plus />
            </TouchableOpacity>
          </View>

          <TouchableOpacity activeOpacity={0.7} style={styles.addButton}>
            <AddCart />
            <Text style={styles.addButtonTitle}>Adicionar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
