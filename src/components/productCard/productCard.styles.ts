import {colors} from 'globals/styles/colors';
import {bold, regular, semibold} from 'globals/styles/fonts';
import {dynamicHeight, dynamicWidth} from 'globals/styles/spacing';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderWidth: dynamicHeight(1),
    borderColor: colors.platinum,
    backgroundColor: colors.smoke,
    borderRadius: dynamicHeight(4),
    width: dynamicWidth(160),
    height: dynamicHeight(334),
    overflow: 'hidden',
  },
  backgroundToImage: {
    backgroundColor: colors.backgroundImage,
    padding: dynamicWidth(4),
  },
  image: {
    width: dynamicWidth(152),
    height: dynamicHeight(152),
  },
  contentInfo: {
    paddingTop: dynamicHeight(12),
    paddingHorizontal: dynamicWidth(8),
    paddingBottom: dynamicHeight(16),
  },
  productTitle: {
    fontFamily: semibold,
    fontSize: 12,
    color: colors.black,
  },
  ratingSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: dynamicHeight(8),
  },
  ratingValue: {
    fontFamily: regular,
    fontSize: 12,
    color: colors.black,
    marginRight: 2,
  },
  ratingCount: {
    fontFamily: regular,
    fontSize: 10,
    color: colors.black,
  },
  productPrice: {
    fontFamily: bold,
    fontSize: 14,
    marginTop: dynamicHeight(12),
    color: colors.black,
  },
  bottomContent: {},
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: dynamicWidth(12),
    alignSelf: 'center',
    marginVertical: dynamicHeight(16),
  },
  countDisplay: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2,
    width: dynamicWidth(40),
    height: dynamicHeight(18),
    borderRadius: 4,
    backgroundColor: colors.white,
  },
  count: {
    fontFamily: semibold,
    fontSize: 12,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: dynamicWidth(8),
    alignSelf: 'center',
  },
  addButtonTitle: {
    fontFamily: semibold,
    fontSize: 14,
  },
});

export default styles;
