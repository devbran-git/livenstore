import React from 'react';
import {Image, Text, View} from 'react-native';

import styles from './productCard.styles';

import {ProductCardProps} from './productCard.types';
import IconSvg from 'components/iconSvg/iconSvg';

const ProductCard: React.FC<ProductCardProps> = ({product, index}) => {
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

          <IconSvg name="star" width={12} height={12} />

          <Text style={styles.ratingCount}>
            ({product?.rating.count} ratings)
          </Text>
        </View>

        <Text style={styles.productPrice}>$ {product.price}</Text>
      </View>
    </View>
  );
};

export default ProductCard;
