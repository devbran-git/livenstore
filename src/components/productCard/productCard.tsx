import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import {useCart} from 'hooks/cart/useCart';

import AddCart from 'assets/svg/addCart.svg';
import Star from 'assets/svg/star.svg';
import Minus from 'assets/svg/minus.svg';
import Plus from 'assets/svg/plus.svg';
import Trash from 'assets/svg/trash.svg';

import {hitSlop} from 'globals/styles/spacing';
import styles from './productCard.styles';

import {OperatorsProps, ProductCardProps} from './productCard.types';
import {Product} from 'hooks/products/products.types';

const ProductCard: React.FC<ProductCardProps> = ({
  index,
  product,
  handleAddProductsToCart,
  handleOpenModal,
}) => {
  const {cart, removeProductFromCart} = useCart();

  const [productCount, setProductCount] = useState(1);
  const [productInCart, setProductInCart] = useState({} as Product);

  const handleProductCount = (operator: string) => {
    const operators: OperatorsProps = {
      minus: () => {
        if (productCount > 1) setProductCount(productCount - 1);
      },
      plus: () => setProductCount(productCount + 1),
    };

    operators[operator]();
  };

  const handleAddProduct = () => {
    handleAddProductsToCart(product, productCount);
  };

  const handleRemoveProduct = () => {
    removeProductFromCart(product.id);
    setProductCount(1);
  };

  const isEvenNumber = index % 2 === 0;

  useFocusEffect(() => {
    const identifiedProduct = cart.find(i => i.id === product.id);

    setProductInCart(identifiedProduct as Product);
  });

  return (
    <View style={[styles.container, {marginRight: isEvenNumber ? 8 : 0}]}>
      <TouchableOpacity
        style={styles.backgroundToImage}
        activeOpacity={0.7}
        onPress={() => handleOpenModal(product.id)}>
        <Image
          style={styles.image}
          source={{uri: product?.image}}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <View style={styles.contentInfo}>
        <View style={styles.topContent}>
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

          <Text style={styles.productPrice}>$ {product.price.toFixed(2)}</Text>
        </View>

        <View style={styles.bottomContent}>
          {productInCart?.id === product.id ? (
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.addRemoveButton}
              onPress={handleRemoveProduct}>
              <Trash />
              <Text style={styles.addRemoveButtonTitle}>Remove</Text>
            </TouchableOpacity>
          ) : (
            <>
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
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.addRemoveButton}
                onPress={handleAddProduct}>
                <AddCart />
                <Text style={styles.addRemoveButtonTitle}>Add to cart</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
