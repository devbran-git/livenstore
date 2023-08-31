import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import ProductCard from 'components/productCard/productCard';
import Cart from 'assets/svg/cart.svg';

import {useProducts} from 'hooks/products/useProducts';
import {useCart} from 'hooks/cart/useCart';

import {NavigationProps} from 'navigator/routes.types';
import {Product} from 'hooks/products/products.types';
import {CartProduct} from 'hooks/cart/cart.types';

import styles from './styles';
import ProductModal from 'components/productModal/productModal';

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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product>();

  const handleNavigateToCart = () => navigate('Cart');

  const handleCloseModal = () => setIsModalOpen(false);

  const handleOpenModal = (productId: number) => {
    const clickedProduct = productsToDisplay.find(
      product => product?.id === productId,
    );

    setSelectedProduct(clickedProduct);
    setIsModalOpen(true);
  };

  // const productsToDisplay = useMemo(() => products, [products]);

  const handleAddProductsToCart = (product: Product, productCount: number) => {
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
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.ghostView} />
          <Text style={styles.headerTitle}>Liven Store</Text>

          <TouchableOpacity onPress={handleNavigateToCart}>
            <Cart />

            {cart.length > 0 && <View style={styles.cartIndicator} />}
          </TouchableOpacity>
        </View>

        <View style={styles.productListContainer}>
          <FlatList
            data={productsToDisplay}
            contentContainerStyle={styles.productList}
            keyExtractor={item => String(item?.id)}
            renderItem={({item, index}) => (
              <ProductCard
                index={index}
                product={item}
                handleAddProductsToCart={handleAddProductsToCart}
                handleOpenModal={handleOpenModal}
              />
            )}
            numColumns={2}
            ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>

      <ProductModal
        isModalOpen={isModalOpen}
        selectedProduct={selectedProduct}
        handleAddProductsToCart={handleAddProductsToCart}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
};

export default Home;
