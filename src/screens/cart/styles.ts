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
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width,
    paddingHorizontal: dynamicWidth(24),
    marginTop: dynamicHeight(24),
  },
  headerTitle: {
    fontFamily: medium,
    fontSize: 16,
    color: colors.black,
  },
  ghostView: {
    width: 16,
  },
  emptyCart: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: dynamicHeight(24),
    bottom: dynamicHeight(24),
  },
  emptyCartMessage: {
    fontFamily: semibold,
    fontSize: 16,
    color: colors.black,
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
    zIndex: 1,
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
    paddingBottom: dynamicWidth(300),
  },
  listSeparator: {
    height: dynamicHeight(20),
  },
  totalContainer: {
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    backgroundColor: colors.smoke,
    paddingTop: dynamicHeight(24),
    paddingBottom: dynamicHeight(40),
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 2,
  },
  totalInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: dynamicWidth(8),
  },
  totalLabel: {
    fontFamily: medium,
    fontSize: 16,
    color: colors.black,
  },
  totalAmount: {
    fontFamily: semibold,
    fontSize: 18,
    color: colors.black,
  },
  finalizeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: dynamicWidth(200),
    paddingVertical: dynamicHeight(12),
    paddingHorizontal: dynamicHeight(40),
    borderWidth: dynamicWidth(2),
    borderColor: colors.black,
    borderRadius: dynamicHeight(4),
    marginTop: dynamicHeight(24),
    marginBottom: dynamicHeight(16),
  },
  finalizeButtonText: {
    fontFamily: semibold,
    fontSize: 14,
    color: colors.black,
  },
  backToStoreButtonText: {
    fontFamily: regular,
    fontSize: 14,
    color: colors.black,
  },
});

export default styles;
