import {colors} from 'globals/styles/colors';
import {bold, medium} from 'globals/styles/fonts';
import {dynamicHeight, dynamicWidth} from 'globals/styles/spacing';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: dynamicHeight(48),
    borderBottomColor: colors.black,
    borderBottomWidth: dynamicHeight(1),
    paddingHorizontal: dynamicWidth(24),
  },
  ghostView: {
    width: 16,
  },
  headerTitle: {
    fontFamily: medium,
    fontSize: 16,
    color: colors.black,
  },
  cartButton: {},
  productListContainer: {
    flex: 1,
    alignItems: 'center',
  },
  productList: {
    flexGrow: 1,
    paddingVertical: dynamicHeight(24),
  },
  listSeparator: {
    height: dynamicHeight(24),
  },
});

export default styles;
