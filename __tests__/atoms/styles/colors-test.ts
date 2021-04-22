/**
 * Describe color theme
 * @format
 */

import 'react-native';
import Colors from '../../../src/atoms/styles/colors';

test('should be a object', () => {
  const expected = {
    light: {
      primary: {
        dark: '#5A6AE5',
        main: '#6C75F5',
        light: '#F3F5FF',
        ultraDark: '#475ABE',
      },
      secondary: {
        dark: '#E5D55A',
        main: '#F5EC6C',
        light: '#FFFDF3',
        ultraDark: '#BEAB47',
      },
      primaryText: {
        dark: '#212121',
        main: '#333333',
        light: '#BDBDBD',
        ultraLight: '#E0E0E0',
      },
      primaryBackground: {
        main: '#FAFAFA',
      },
      secondaryBackground: {
        main: '#FFFFFF',
      },
      divider: {
        main: '#EEEEEE',
      },
      status: {
        info: '#333',
        danger: '#f44336',
        success: '#43A047',
        warning: '#E65100',
      },
    },
    dark: {
      primary: {
        dark: '#212121',
        main: '#424242',
        light: '#424242',
        ultraDark: '#424242',
      },
      secondary: {
        dark: '#3A3509',
        main: '#888009',
        light: '#4F4200',
        ultraDark: '#453E18',
      },
      primaryText: {
        dark: '#E0E0E0',
        main: '#FFFFFF',
        light: '#BDBDBD',
        ultraLight: '#EEEEEE',
      },
      divider: {
        main: '#616161',
      },
      primaryBackground: {
        main: '#303030',
      },
      secondaryBackground: {
        main: '#424242',
      },
      status: {
        info: '#E0E0E0',
        danger: '#B71C1C',
        success: '#1B5E20',
        warning: '#FF6D00',
      },
    },
  };

  expect(Colors).toEqual(expected);
});
