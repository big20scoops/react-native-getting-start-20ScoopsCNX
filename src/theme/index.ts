import { Platform } from 'react-native';

import { colors } from './Colors';
import { fontSizes, fonts } from './Fonts';
import { space } from './Space';

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

const Theme = {
  colors,
  space,
  fonts,
  fontSizes,
  isIOS,
  isAndroid,
};

export default Theme;
