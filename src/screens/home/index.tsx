import React, {useMemo, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import IconSvg from 'components/iconSvg/iconSvg';

import {useNavigation} from '@react-navigation/native';

import {useProducts} from 'hooks/products/useProducts';
import {useCart} from 'hooks/cart/useCart';

import styles from './styles';

import {NavigationProps} from 'navigator/routes.types';
import {Product} from 'hooks/products/products.types';
import {CartProduct} from 'hooks/cart/cart.types';
import {colors} from 'globals/styles/colors';
import ProductCard from 'components/productCard/productCard';

const productsToDisplay = [
  {
    category: "men's clothing",
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    id: 1,
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    price: 109.95,
    rating: {count: 120, rate: 3.9},
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  },
  {
    category: "men's clothing",
    description:
      'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    id: 2,
    image:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    price: 22.3,
    rating: {count: 259, rate: 4.1},
    title: 'Mens Casual Premium Slim Fit T-Shirts ',
  },
  {
    category: "men's clothing",
    description:
      'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
    id: 3,
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    price: 55.99,
    rating: {count: 500, rate: 4.7},
    title: 'Mens Cotton Jacket',
  },
];

const Home: React.FC = () => {
  const {navigate} = useNavigation<NavigationProps>();

  const {products, isLoading} = useProducts();
  const {cart, updateCart, removeProductFromCart} = useCart();

  const [productCount, setProductCount] = useState(1);

  // const productsToDisplay = useMemo(() => products, [products]);

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
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.ghostView} />
        <Text style={styles.headerTitle}>Liven Store</Text>

        <TouchableOpacity
          style={styles.cartButton}
          onPress={handleNavigateToCart}>
          <IconSvg name="cart" width={16} height={16} />
        </TouchableOpacity>
      </View>

      <View style={styles.productListContainer}>
        <FlatList
          data={productsToDisplay}
          contentContainerStyle={styles.productList}
          keyExtractor={item => String(item?.id)}
          renderItem={({item, index}) => (
            <ProductCard product={item} index={index} />
          )}
          numColumns={2}
          ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
