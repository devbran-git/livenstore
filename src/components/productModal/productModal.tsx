import React, {useState} from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';

import AddCart from 'assets/svg/addCart.svg';
import Star from 'assets/svg/star.svg';
import Minus from 'assets/svg/minus.svg';
import Plus from 'assets/svg/plus.svg';

import {hitSlop} from 'globals/styles/spacing';
import styles from './productModal.styles';

import {ProductModalProps} from './productModal.types';
import {OperatorsProps} from 'components/productCard/productCard.types';

const ProductModal: React.FC<ProductModalProps> = ({
  isModalOpen,
  selectedProduct,
  handleCloseModal,
}) => {
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
  return (
    <Modal transparent visible={isModalOpen} onRequestClose={handleCloseModal}>
      <View style={styles.modalContent}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.productImage}
            source={{uri: selectedProduct?.image}}
            resizeMode="contain"
          />

          <View style={styles.ratingSection}>
            <Text style={styles.ratingValue}>
              {selectedProduct?.rating.rate}
            </Text>

            <Star width={14} height={14} />

            <Text style={styles.ratingCount}>
              ({selectedProduct?.rating.count} ratings)
            </Text>
          </View>

          <View style={styles.productPriceContainer}>
            <Text style={styles.productPrice}>$ {selectedProduct?.price}</Text>
          </View>
        </View>

        <View style={styles.bottomContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.productTitle}>{selectedProduct?.title}</Text>
            <Text style={styles.productDescription}>
              {selectedProduct?.description}
            </Text>
          </View>

          <View style={styles.counterContainer}>
            <View style={styles.counter}>
              <TouchableOpacity
                activeOpacity={0.7}
                hitSlop={hitSlop}
                onPress={() => handleProductCount('minus')}>
                <Minus width={16} height={16} />
              </TouchableOpacity>
              <View style={styles.countDisplay}>
                <Text style={styles.count}>{productCount}</Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                hitSlop={hitSlop}
                onPress={() => handleProductCount('plus')}>
                <Plus width={16} height={16} />
              </TouchableOpacity>
            </View>

            <TouchableOpacity activeOpacity={0.7} style={styles.addButton}>
              <AddCart />
              <Text style={styles.addButtonTitle}>Adicionar ao carrinho</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.closeModalButton}
              onPress={handleCloseModal}>
              <Text style={styles.closeModalButtonTitle}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.65}
        style={styles.backdrop}
        onPress={handleCloseModal}
      />
    </Modal>
  );
};

export default ProductModal;
