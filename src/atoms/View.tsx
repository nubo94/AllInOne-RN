import React from 'react';
import {
  View as VW,
  StyleProp,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {Outlines, Colors, Sizing} from './styles';

export interface IViewProps {
  shadow?: boolean;
  style?: StyleProp<any>;
  touch?: TouchableOpacityProps;
  children?: JSX.Element[] | JSX.Element | null;
}

const View = ({touch, style, shadow, children, ...props}: IViewProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  return !touch ? (
    <VW
      style={[
        shadow ? (isDarkMode ? dClasses.main : lClasses.main) : null,
        style,
      ]}
      {...props}>
      {children}
    </VW>
  ) : (
    <TouchableOpacity activeOpacity={0.8} {...touch}>
      <VW
        style={[
          shadow ? (isDarkMode ? dClasses.main : lClasses.main) : null,
          style,
        ]}
        {...props}>
        {children}
      </VW>
    </TouchableOpacity>
  );
};

const lClasses = StyleSheet.create({
  main: {
    padding: Sizing.x10,
    backgroundColor: Colors.neutral.white,
    borderRadius: Outlines.borderRadius.small,
    ...Outlines.shadow.base,
    shadowRadius: 6,
  },
});

const dClasses = StyleSheet.create({
  main: {
    ...lClasses.main,
    shadowColor: Colors.neutral.black,
    backgroundColor: Colors.neutral.s700,
  },
});

export default View;
