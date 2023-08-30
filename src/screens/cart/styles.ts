import {colors} from 'globals/styles/colors';
import {bold, medium} from 'globals/styles/fonts';
import {dynamicHeight, dynamicWidth, width} from 'globals/styles/spacing';
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
    width: width,
    paddingHorizontal: dynamicWidth(24),
    marginTop: dynamicHeight(24),
  },
  backButton: {},
  headerTitle: {
    fontFamily: medium,
    fontSize: 16,
  },
  ghostView: {
    width: 16,
  },
});

export default styles;
