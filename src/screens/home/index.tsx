import React, {useEffect, useMemo, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import ProductCard from 'components/productCard/productCard';
import Skeleton from 'components/skeleton/skeleton';
import Cart from 'assets/svg/cart.svg';

import {useProducts} from 'hooks/products/useProducts';
import {useCart} from 'hooks/cart/useCart';

import {NavigationProps} from 'navigator/routes.types';
import {Product} from 'hooks/products/products.types';
import {CartProduct} from 'hooks/cart/cart.types';

import styles from './styles';
import ProductModal from 'components/productModal/productModal';
import {Category} from './types';

const Home: React.FC = () => {
  const {navigate} = useNavigation<NavigationProps>();

  const {products, isLoading} = useProducts();
  const {cart, addProductToCart} = useCart();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [productsToDisplay, setProductsToDisplay] = useState<Product[]>([]);

  const categories = [
    {categoryId: 'all', name: 'All categories'},
    {categoryId: 'women', name: 'Women'},
    {categoryId: 'men', name: 'Men'},
    {categoryId: 'jewelery', name: 'Jewelery'},
    {categoryId: 'electronics', name: 'Electronics'},
  ];

  const allProducts = useMemo(() => products, [products]);

  const womenCategory = products.filter(product =>
    product.category.startsWith('women'),
  );

  const menCategory = products.filter(product =>
    product.category.startsWith('men'),
  );

  const jeweleryCategory = products.filter(
    product => product.category === 'jewelery',
  );

  const electronicsCategory = products.filter(
    product => product.category === 'electronics',
  );

  const handleNavigateToCart = () => navigate('Cart');

  const handleCloseModal = () => setIsModalOpen(false);

  const handleOpenModal = (productId: number) => {
    const clickedProduct = productsToDisplay?.find(
      product => product?.id === productId,
    );

    setSelectedProduct(clickedProduct);
    setIsModalOpen(true);
  };

  const handleAddProductsToCart = (product: Product, productCount: number) => {
    const productIsInCart = cart.find(
      cartProduct => cartProduct.id === product.id,
    );

    const newProductToCart: CartProduct = {
      ...product,
      productCount,
    };

    if (!productIsInCart) addProductToCart(newProductToCart);
  };

  const handleSelectCategory = (type: string) => {
    setSelectedCategory(type);

    const options: Category = {
      all: () => setProductsToDisplay(allProducts),
      women: () => setProductsToDisplay(womenCategory),
      men: () => setProductsToDisplay(menCategory),
      jewelery: () => setProductsToDisplay(jeweleryCategory),
      electronics: () => setProductsToDisplay(electronicsCategory),
    };

    options[type]();
  };

  useEffect(() => {
    if (products.length) setProductsToDisplay(products);
  }, [products]);

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

        {isLoading ? (
          <Skeleton />
        ) : (
          <>
            <View style={styles.productListContainer}>
              <View style={styles.categoryListContainer}>
                <ScrollView
                  contentContainerStyle={styles.categoryList}
                  horizontal
                  showsHorizontalScrollIndicator={false}>
                  {categories.map(category => (
                    <TouchableOpacity
                      key={String(category.categoryId)}
                      activeOpacity={0.7}
                      onPress={() => handleSelectCategory(category.categoryId)}>
                      <Text
                        style={[
                          styles.categoryLabel,
                          selectedCategory === category.categoryId &&
                            styles.boldCategory,
                        ]}>
                        {category.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>

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
                ItemSeparatorComponent={() => (
                  <View style={styles.listSeparator} />
                )}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </>
        )}
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
