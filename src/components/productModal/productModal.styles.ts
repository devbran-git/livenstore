import {StyleSheet} from 'react-native';

import {
  dynamicHeight,
  dynamicWidth,
  height,
  width,
} from 'globals/styles/spacing';
import {colors} from 'globals/styles/colors';
import {bold, medium, regular, semibold} from 'globals/styles/fonts';

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    width: width,
    height: height,
    backgroundColor: colors.black,
    opacity: 0.7,
  },
  modalContent: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    width: width,
    height: '85%',
    borderRadius: dynamicHeight(24),
    backgroundColor: colors.smoke,
    overflow: 'hidden',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    paddingVertical: dynamicHeight(24),
    backgroundColor: colors.backgroundImage,
  },
  productImage: {
    width: dynamicWidth(200),
    height: dynamicWidth(200),
  },
  bottomContent: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: dynamicHeight(24),
    paddingHorizontal: dynamicHeight(24),
    paddingBottom: dynamicHeight(40),
  },
  titleContainer: {
    flex: 1,
    gap: dynamicHeight(16),
  },
  productTitle: {
    fontFamily: medium,
    fontSize: 16,
    color: colors.black,
  },
  productDescription: {
    fontFamily: regular,
    fontSize: 14,
    color: colors.black,
  },
  ratingSection: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: dynamicHeight(6),
    paddingHorizontal: dynamicWidth(12),
    borderTopRightRadius: dynamicHeight(4),
    backgroundColor: colors.gray,
  },
  ratingValue: {
    fontFamily: regular,
    fontSize: 14,
    color: colors.smoke,
    marginRight: 4,
  },
  ratingCount: {
    fontFamily: regular,
    fontSize: 12,
    color: colors.smoke,
    marginLeft: 2,
  },
  productPriceContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: colors.gray,
    paddingVertical: dynamicWidth(6),
    paddingHorizontal: dynamicWidth(12),
    borderTopLeftRadius: dynamicHeight(4),
  },
  productPrice: {
    fontFamily: bold,
    fontSize: 24,
    color: colors.smoke,
  },
  counterContainer: {},
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: dynamicWidth(16),
    alignSelf: 'center',
    marginVertical: dynamicHeight(24),
  },
  countDisplay: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: dynamicHeight(5),
    width: dynamicWidth(160),
    height: dynamicHeight(32),
    borderRadius: 4,
    backgroundColor: colors.white,
  },
  count: {
    fontFamily: semibold,
    fontSize: 18,
    color: colors.black,
  },
  addRemoveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: dynamicWidth(8),
    alignSelf: 'center',
    width: dynamicWidth(225),
    paddingVertical: dynamicHeight(12),
    paddingHorizontal: dynamicHeight(24),
    borderWidth: dynamicWidth(2),
    borderColor: colors.black,
    borderRadius: dynamicHeight(4),
  },
  addRemoveButtonTitle: {
    fontFamily: semibold,
    fontSize: 14,
    color: colors.black,
  },
  closeModalButton: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: dynamicHeight(16),
  },
  closeModalButtonTitle: {
    fontFamily: medium,
    fontSize: 14,
    color: colors.black,
  },
});

export default styles;
