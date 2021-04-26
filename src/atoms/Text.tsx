import React from 'react';
import {Text as Tt, TextProps, StyleSheet, useColorScheme} from 'react-native';
import {Colors} from './styles';

interface ITextProps extends TextProps {
  label: string | number;
}

const Text = ({style, label, ...props}: ITextProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Tt style={[isDarkMode ? dClasses.main : lClasses.main, style]} {...props}>
      {label}
    </Tt>
  );
};

const lClasses = StyleSheet.create({
  main: {
    color: Colors.neutral.s900,
  },
});
const dClasses = StyleSheet.create({
  main: {
    color: Colors.neutral.s150,
  },
});

export default Text;
