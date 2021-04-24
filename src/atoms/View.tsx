import React from 'react';
import {View as VW, ViewProps, StyleSheet, useColorScheme} from 'react-native';
import {Outlines, Colors, Sizing} from './styles';

interface IViewProps extends ViewProps {
  children: JSX.Element[] | JSX.Element;
  shadow?: boolean;
}

const View = ({style, shadow, children, ...props}: IViewProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <VW
      style={[
        shadow ? (isDarkMode ? dClasses.main : lClasses.main) : null,
        style,
      ]}
      {...props}>
      {children}
    </VW>
  );
};

const lClasses = StyleSheet.create({
  main: {
    ...Outlines.shadow.base,
  },
});

const dClasses = StyleSheet.create({
  main: {
    padding: Sizing.x10,
    backgroundColor: Colors.neutral.s700,
    borderRadius: Outlines.borderRadius.small,
    ...Outlines.shadow.base,
    shadowColor: Colors.neutral.black,
  },
});

export default View;
