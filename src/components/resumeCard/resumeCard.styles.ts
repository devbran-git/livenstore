import {StyleSheet} from 'react-native';

import {dynamicHeight, dynamicWidth} from 'globals/styles/spacing';
import {bold, medium, regular, semibold} from 'globals/styles/fonts';
import {colors} from 'globals/styles/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.smoke,
    borderRadius: dynamicHeight(4),
  },
  backgroundToImage: {
    backgroundColor: colors.backgroundImage,
    padding: dynamicWidth(4),
  },
  image: {
    width: dynamicWidth(136),
    height: dynamicHeight(136),
  },
  contentInfo: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: dynamicHeight(16),
    paddingHorizontal: dynamicWidth(12),
  },
  topContent: {},
  productTitle: {
    fontFamily: medium,
    fontSize: 12,
    color: colors.black,
  },
  subTotalContainer: {
    gap: dynamicHeight(2),
    marginTop: dynamicHeight(8),
  },
  subtotalLabel: {
    fontFamily: regular,
    fontSize: 12,
    color: colors.black,
  },
  productPrice: {
    fontFamily: semibold,
    fontSize: 14,
    color: colors.black,
  },
  productControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: dynamicWidth(8),
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
    color: colors.black,
  },
  removeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: dynamicWidth(1),
    borderColor: colors.black,
    borderRadius: dynamicHeight(4),
    paddingVertical: dynamicHeight(4),
    paddingHorizontal: dynamicWidth(8),
  },
  removeButtonTitle: {
    fontFamily: medium,
    fontSize: 10,
    color: colors.black,
  },
});

export default styles;
