import { DynamicStyleSheet, DynamicValue } from 'react-native-dark-mode';

import { ResponsiveUtils, ThemeUtils, Colors } from '@common';

export const styles = new DynamicStyleSheet({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: ResponsiveUtils.normalize(32),
    paddingBottom: ResponsiveUtils.normalize(20),
    paddingHorizontal: ResponsiveUtils.normalize(16),
    backgroundColor: ThemeUtils.getDynamicValue('backgroundColor'),
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    width: ResponsiveUtils.normalize(360),
    marginLeft: ResponsiveUtils.normalize(10),
    backgroundColor: ThemeUtils.getDynamicValue('containerBgColor'),
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: ResponsiveUtils.normalize(10),
    alignItems: 'center',
    backgroundColor: ThemeUtils.getDynamicValue('containerBgColor'),
    borderRadius: 4,
    elevation: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  icSearch: {
    marginRight: 22,
    width: ResponsiveUtils.normalize(24),
    height: ResponsiveUtils.normalize(24),
    resizeMode: 'contain',
  },
  textSearch: {
    flex: 1,
    paddingVertical: 0,
    fontSize: ResponsiveUtils.normalize(16),
    color: ThemeUtils.getDynamicValue('primaryTextColor'),
  },
  centerContainer: {
    flex: 1,
    marginTop: ResponsiveUtils.normalize(17),
    backgroundColor: ThemeUtils.getDynamicValue('containerBgColor'),
  },
  groupTitleContainer: {
    borderBottomColor: ThemeUtils.getDynamicValue('borderColor'),
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: ResponsiveUtils.normalize(16),
  },
  groupTitle: {
    marginVertical: ResponsiveUtils.normalize(22),
    fontSize: ResponsiveUtils.normalize(17),
    color: ThemeUtils.getDynamicValue('primaryTextColor'),
  },
  dropdownContainer: {
    flexDirection: 'row',
    marginHorizontal: 11,
    paddingVertical: ResponsiveUtils.normalize(14),
    paddingHorizontal: 10,
    width: ResponsiveUtils.normalize(200),
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: ThemeUtils.getDynamicValue('selectBgColor'),
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  lbSelectValue: {
    flex: 1,
    fontSize: ResponsiveUtils.normalize(14),
    color: ThemeUtils.getDynamicValue('primaryTextColor'),
  },
  dropdownItemText: {
    fontSize: ResponsiveUtils.normalize(14),
    color: ThemeUtils.getDynamicValue('primaryTextColor'),
  },
  icDropdown: {
    width: ResponsiveUtils.normalize(12),
    height: ResponsiveUtils.normalize(12),
    resizeMode: 'contain',
  },
  pickerStyle: {
    backgroundColor: ThemeUtils.getDynamicValue('selectBgColor'),
  },
  productsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: ResponsiveUtils.normalize(24),
  },
  icBackWrapper: {
    backgroundColor: new DynamicValue('#f3f3f3', Colors.containerBgColor.dark),
    marginLeft: ResponsiveUtils.normalize(16),
    width: ResponsiveUtils.normalize(130),
    height: ResponsiveUtils.normalize(136),
    borderWidth: 1,
    borderColor: new DynamicValue('#f3f3f3', '#C5C4C4'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    // elevation: 2,
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 2,
  },
  iconBack: {
    width: ResponsiveUtils.normalize(31),
    height: ResponsiveUtils.normalize(22),
    resizeMode: 'contain',
  },
  btnDelete: {
    backgroundColor: '#ff5066',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
  },
  icDelete: {
    width: ResponsiveUtils.normalize(20),
    height: ResponsiveUtils.normalize(20),
    resizeMode: 'contain',
  },
  hiddenSwipeOut: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  addCouponContainer: {
    backgroundColor: new DynamicValue('#f3f3f3', Colors.backgroundColor.dark),
  },
  lbAddCoupon: {
    marginVertical: ResponsiveUtils.normalize(14),
    fontSize: ResponsiveUtils.normalize(12),
    color: ThemeUtils.getDynamicValue('primaryTextColor'),
    ...ThemeUtils.fontMaker({ weight: '500' }),
  },
  addCustomerContainer: {
    borderTopWidth: 1,
    borderTopColor: ThemeUtils.getDynamicValue('borderColor'),
    backgroundColor: new DynamicValue('#f3f3f3', Colors.backgroundColor.dark),
  },
  lbSubtotal: {
    marginVertical: ResponsiveUtils.normalize(14),
    fontSize: ResponsiveUtils.normalize(14),
    color: ThemeUtils.getDynamicValue('primaryTextColor'),
    ...ThemeUtils.fontMaker({ weight: '400' }),
  },
  lbTotal: {
    ...ThemeUtils.fontMaker({ weight: '700' }),
    color: '#FF5066',
  },
  icAdd: {
    marginLeft: ResponsiveUtils.normalize(16),
    width: ResponsiveUtils.normalize(26),
    height: ResponsiveUtils.normalize(26),
  },
  row: {
    backgroundColor: ThemeUtils.getDynamicValue('containerBgColor'),
    flexDirection: 'row',
    paddingLeft: ResponsiveUtils.normalize(50),
    paddingRight: ResponsiveUtils.normalize(16),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  borderLine: {
    height: 2,
    marginLeft: ResponsiveUtils.normalize(50),
    marginRight: ResponsiveUtils.normalize(16),
    backgroundColor: ThemeUtils.getDynamicValue('borderColor'),
  },
  btnCheckout: {
    flex: 1,
    marginVertical: ResponsiveUtils.normalize(12),
    paddingVertical: ResponsiveUtils.normalize(12),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: ThemeUtils.getDynamicValue('primaryColor'),
  },
  lbCheckout: {
    color: '#FFF',
    fontSize: ResponsiveUtils.normalize(16),
  },
  modalStyle: {
    justifyContent: 'center',
  },
  couponsWrapper: {
    flexDirection: 'row',
    marginVertical: ResponsiveUtils.normalize(36),
    flexWrap: 'wrap',
  },
  couponItem: {
    backgroundColor: new DynamicValue('#F3F3F3', Colors.selectBgColor.dark),
    paddingHorizontal: ResponsiveUtils.normalize(16),
    paddingVertical: ResponsiveUtils.normalize(8),
    marginRight: ResponsiveUtils.normalize(16),
    marginVertical: ResponsiveUtils.normalize(16),
  },
  couponName: {
    fontSize: ResponsiveUtils.normalize(16),
    color: ThemeUtils.getDynamicValue('primaryTextColor'),
    ...ThemeUtils.fontMaker({ weight: '600' }),
  },
  icLoadingMore: {
    alignItems: 'center',
    paddingVertical: 10,
  }
});
