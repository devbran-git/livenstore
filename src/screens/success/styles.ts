import {colors} from 'globals/styles/colors';
import {regular, semibold} from 'globals/styles/fonts';
import {dynamicHeight} from 'globals/styles/spacing';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    paddingBottom: dynamicHeight(24),
  },
  successMessage: {
    fontFamily: semibold,
    fontSize: 16,
    color: colors.black,
    marginTop: dynamicHeight(32),
    marginBottom: dynamicHeight(24),
  },
  backToStoreButtonText: {
    fontFamily: regular,
    fontSize: 14,
    color: colors.black,
    marginBottom: dynamicHeight(24),
  },
});

export default styles;
