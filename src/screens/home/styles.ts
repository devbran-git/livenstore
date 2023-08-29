import {colors} from 'globals/styles/colors';
import {bold} from 'globals/styles/fonts';
import {dynamicHeight} from 'globals/styles/spacing';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: colors.white,
  },
  title: {
    fontFamily: bold,
    color: colors.black,
    fontSize: dynamicHeight(20),
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: dynamicHeight(40),
  },
});

export default styles;
