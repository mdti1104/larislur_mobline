import { DynamicStyleSheet, DynamicValue } from 'react-native-dark-mode';

import { ResponsiveUtils, ThemeUtils, Colors } from '@common';

export const styles = new DynamicStyleSheet({
  container: {
    flex: 1,
    backgroundColor: ThemeUtils.getDynamicValue('backgroundColor'),
  },
  headContainer: {
    marginTop: ResponsiveUtils.normalize(23),
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    marginTop: ResponsiveUtils.normalize(16),
    paddingHorizontal: ResponsiveUtils.normalize(120),
  },
  title: {
    marginLeft: ResponsiveUtils.normalize(50),
    fontSize: ResponsiveUtils.normalize(18),
    color: ThemeUtils.getDynamicValue('primaryTextColor'),
    ...ThemeUtils.fontMaker({ weight: '700' }),
  },
  btnBack: {
    marginLeft: ResponsiveUtils.normalize(16),
    width: ResponsiveUtils.normalize(104),
    backgroundColor: ThemeUtils.getDynamicValue('containerBgColor'),
    alignItems: 'center',
    borderRadius: 4,
  },
  lbBack: {
    paddingVertical: ResponsiveUtils.normalize(12),
    fontSize: ResponsiveUtils.normalize(16),
    color: ThemeUtils.getDynamicValue('primaryTextColor'),
    ...ThemeUtils.fontMaker({ weight: '500' }),
  },
  btnAddNew: {
    alignSelf: 'flex-start',
    backgroundColor: ThemeUtils.getDynamicValue('primaryColor'),
    borderRadius: 4,
    width: ResponsiveUtils.normalize(152),
    height: ResponsiveUtils.normalize(44),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: ResponsiveUtils.normalize(10),
  },
  lbAddNew: {
    fontSize: ResponsiveUtils.normalize(16),
    color: '#FFF',
    ...ThemeUtils.fontMaker({ weight: '700' }),
  },
  inputLabel: {
    marginTop: ResponsiveUtils.normalize(24),
    marginBottom: ResponsiveUtils.normalize(12),
    fontSize: ResponsiveUtils.normalize(15),
    color: ThemeUtils.getDynamicValue('primaryTextColor'),
    ...ThemeUtils.fontMaker({ weight: '500' }),
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: ResponsiveUtils.normalize(16),
  },
  imageWrapper: {
    marginRight: ResponsiveUtils.normalize(16),
    marginBottom: ResponsiveUtils.normalize(16),
    width: ResponsiveUtils.normalize(98),
    height: ResponsiveUtils.normalize(96),
    backgroundColor: ThemeUtils.getDynamicValue('containerBgColor'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    overflow: 'hidden',
  },
  categoryImage: {
    resizeMode: 'contain',
    width: ResponsiveUtils.normalize(98),
    height: ResponsiveUtils.normalize(96),
  },
  btnAddImage: {
    backgroundColor: new DynamicValue('#f3f3f3', Colors.containerBgColor.dark),
    borderWidth: 1,
    borderColor: '#C5C4C4',
  },
  icAddPhoto: {
    width: ResponsiveUtils.normalize(24),
    height: ResponsiveUtils.normalize(24),
    resizeMode: 'contain',
  },
  btnCloseImage: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  icCloseCircle: {
    margin: ResponsiveUtils.normalize(6),
    backgroundColor: ThemeUtils.getDynamicValue('containerBgColor'),
    width: ResponsiveUtils.normalize(20),
    height: ResponsiveUtils.normalize(20),
    borderRadius: ResponsiveUtils.normalize(10),
  },
  icCloseImage: {
    width: ResponsiveUtils.normalize(20),
    height: ResponsiveUtils.normalize(20),
    resizeMode: 'contain',
  }
});
