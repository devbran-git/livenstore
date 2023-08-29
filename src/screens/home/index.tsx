import React, {useMemo, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import IconSvg from 'components/iconSvg';

import {useNavigation} from '@react-navigation/native';

import {useProducts} from 'hooks/products/useProducts';
import {useCart} from 'hooks/cart/useCart';

import styles from './styles';

import {NavigationProps} from 'navigator/routes.types';
import {Product} from 'hooks/products/products.types';
import {CartProduct} from 'hooks/cart/cart.types';
import {colors} from 'globals/styles/colors';

const Home: React.FC = () => {
  const {navigate} = useNavigation<NavigationProps>();

  const {products, isLoading} = useProducts();
  const {cart, updateCart, removeProductFromCart} = useCart();

  const [productCount, setProductCount] = useState(1);

  const productsToDisplay = useMemo(() => products, [products]);

  const handleNavigateToCart = () => navigate('Cart');

  const handleAddProductsToCart = (product: Product) => {
    const productIsInCart = cart.find(
      cartProduct => cartProduct.id === product.id,
    );

    const newProductToCart: CartProduct = {
      ...product,
      productCount,
    };

    if (!productIsInCart) updateCart(newProductToCart);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HOME</Text>

      <TouchableOpacity style={styles.button} onPress={handleNavigateToCart}>
        <IconSvg name="cart" width={16} height={16} />
      </TouchableOpacity>

      <FlatList
        data={productsToDisplay}
        style={{flexGrow: 1}}
        keyExtractor={item => String(item?.id)}
        renderItem={({item}) => (
          <View style={{alignItems: 'center', width: 120, marginBottom: 24}}>
            <Image
              style={{width: 80, height: 80}}
              source={{uri: item?.image}}
            />
            <Text style={{color: colors.black}}>{item?.title}</Text>

            <View>
              <TouchableOpacity
                onPress={() => setProductCount(productCount - 1)}>
                <Text style={{color: colors.black}}>-</Text>
              </TouchableOpacity>

              <Text style={{color: colors.black}}>{productCount}</Text>

              <TouchableOpacity
                onPress={() => setProductCount(productCount + 1)}>
                <Text style={{color: colors.black}}>+</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => handleAddProductsToCart(item)}>
              <Text style={{color: colors.black}}>Adicionar ao carrinho</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => removeProductFromCart(item)}>
              <Text style={{color: colors.black}}>Excluir do carrinho</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Home;
