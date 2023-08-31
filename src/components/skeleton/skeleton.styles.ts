import {StyleSheet} from 'react-native';

import {dynamicHeight, dynamicWidth} from 'globals/styles/spacing';
import {colors} from 'globals/styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    flexWrap: 'wrap',
    marginTop: dynamicHeight(24),
  },
  block: {
    backgroundColor: colors.smoke,
    borderRadius: dynamicHeight(4),
    width: dynamicWidth(160),
    height: dynamicHeight(334),
    overflow: 'hidden',
  },
});

export default styles;
