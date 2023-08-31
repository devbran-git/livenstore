import {colors} from 'globals/styles/colors';
import {medium, regular, semibold} from 'globals/styles/fonts';
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
    color: colors.black,
  },
  ghostView: {
    width: 16,
  },
  resumeSection: {
    marginTop: dynamicHeight(40),
    paddingHorizontal: dynamicWidth(24),
  },
  resumeSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  resumeSectionTitle: {
    fontFamily: medium,
    fontSize: 14,
    color: colors.black,
  },
  confirmToast: {
    position: 'absolute',
    top: dynamicHeight(24),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    gap: dynamicHeight(8),
    width: '100%',
    height: dynamicHeight(64),
    paddingHorizontal: dynamicHeight(12),
    borderRadius: dynamicHeight(4),
    backgroundColor: '#FFE8E8',
  },
  toastMessage: {
    fontFamily: medium,
    fontSize: 14,
    color: colors.black,
    textAlign: 'center',
  },
  toastButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: dynamicWidth(40),
  },
  toastButton: {},
  cancelText: {
    fontFamily: regular,
    fontSize: 12,
    color: colors.black,
  },
  confirmText: {
    fontFamily: semibold,
    fontSize: 12,
    color: colors.red,
  },
  productList: {
    marginTop: dynamicHeight(24),
  },
  listSeparator: {
    height: dynamicHeight(20),
  },
});

export default styles;
