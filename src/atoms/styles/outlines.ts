import {ViewStyle, StyleSheet} from 'react-native';

import * as Colors from './colors';

type BorderRadius = 'small' | 'base' | 'large' | 'max';
export const borderRadius: Record<BorderRadius, number> = {
  small: 5,
  base: 10,
  large: 20,
  max: 9999,
};

type BorderWidth = 'hairline' | 'thin' | 'base' | 'thick';
export const borderWidth: Record<BorderWidth, number> = {
  hairline: StyleSheet.hairlineWidth,
  thin: 1,
  base: 2,
  thick: 3,
};

type Shadow = 'base' | 'disable';
export const shadow: Record<Shadow, ViewStyle> = {
  base: {
    shadowColor: Colors.neutral.s400,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 20.65,
    elevation: 6,
  },
  disable: {
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
};
