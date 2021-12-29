import { DynamicStyleSheet } from 'react-native-dark-mode';

import { ResponsiveUtils, ThemeUtils, Colors } from '@common';

export const styles = new DynamicStyleSheet({
  container: {
    flex: 1,
    paddingHorizontal: ResponsiveUtils.normalize(16),
    paddingVertical: ResponsiveUtils.normalize(24),
    backgroundColor: ThemeUtils.getDynamicValue('backgroundColor'),
  },
  btnAddNew: {
    width: ResponsiveUtils.normalize(160),
    marginBottom: ResponsiveUtils.normalize(24),
    marginLeft: ResponsiveUtils.normalize(16),
    backgroundColor: ThemeUtils.getDynamicValue('primaryColor'),
    borderRadius: 4,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  lbAddNew: {
    fontSize: ResponsiveUtils.normalize(16),
    paddingVertical: ResponsiveUtils.normalize(12),
    color: '#FFF',
    ...ThemeUtils.fontMaker({ weight: '700' }),
  },
  label: {
    width: ResponsiveUtils.normalize(150),
    fontSize: ResponsiveUtils.normalize(14),
    color: ThemeUtils.getDynamicValue('primaryTextColor'),
    ...ThemeUtils.fontMaker({ weight: '500' }),
  },
  settingContainer: {
    width: ResponsiveUtils.normalize(600),
    paddingVertical: ResponsiveUtils.normalize(30),
  },
  btnSelect: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: ThemeUtils.getDynamicValue('containerBgColor'),
    marginTop: ResponsiveUtils.normalize(13),
    marginBottom: ResponsiveUtils.normalize(24),
    borderRadius: 4,
    paddingVertical: ResponsiveUtils.normalize(13),
    paddingHorizontal: ResponsiveUtils.normalize(20),
  },
  selectValue: {
    flex: 1,
    fontSize: ResponsiveUtils.normalize(16),
    color: ThemeUtils.getDynamicValue('primaryTextColor'),
    ...ThemeUtils.fontMaker({ weight: '400' }),
  },
  icArrowRight: {
    width: ResponsiveUtils.normalize(12),
    height: ResponsiveUtils.normalize(12),
    resizeMode: 'contain',
  },
  lbCurrency: {
    color: Colors.primaryColor.light,
  },
});
