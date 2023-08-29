import React, {useMemo} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from 'navigator/routes.types';

import styles from './styles';
import IconSvg from 'components/iconSvg';
import {useProducts} from 'hooks/products/useProducts';

const Home: React.FC = () => {
  const {navigate} = useNavigation<NavigationProps>();

  const {products, isLoading} = useProducts();

  const productsToDisplay = useMemo(() => products, [products]);

  const handleNavigateToCart = () => navigate('Cart');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HOME</Text>

      <TouchableOpacity style={styles.button} onPress={handleNavigateToCart}>
        <IconSvg name="cart" width={16} height={16} />
      </TouchableOpacity>

      <FlatList
        data={productsToDisplay}
        keyExtractor={item => String(item?.id)}
        renderItem={({item}) => (
          <View style={{alignItems: 'center'}}>
            <Image
              style={{width: 80, height: 80}}
              source={{uri: item?.image}}
            />
            <Text>{item?.title}</Text>
            <Text>{item?.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Home;
