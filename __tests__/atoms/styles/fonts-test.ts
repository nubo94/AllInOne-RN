/**
 * Describe font theme
 * @format
 */

import 'react-native';
import {Fonts} from '../../../src/atoms/styles';

test('should be a object - fonts', () => {
  const expected = {
    FONT_SIZE_SMALL: 12,
    FONT_SIZE_MEDIUM: 14,
    FONT_SIZE_LARGE: 16,
    FONT_WEIGHT_LIGHT: 200,
    FONT_WEIGHT_MEDIUM: 600,
    FONT_WEIGHT_HEAVY: 800,
    FONT_FAMILY: "'Lato', sans-serif;",
  };
  expect(Fonts).toEqual(expected);
  expect(Fonts).toMatchSnapshot();
});
