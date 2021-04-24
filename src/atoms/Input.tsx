import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput as TI, TextInputProps, useColorScheme} from 'react-native';

// Theme
import {Outlines, Colors, Sizing} from './styles';

export interface InputProps extends TextInputProps {}

const Input = ({style, ...props}: InputProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <TI
      style={[isDarkMode ? dClasses.main : lClasses.main, style]}
      placeholderTextColor={
        isDarkMode ? Colors.neutral.s500 : Colors.neutral.s250
      }
      {...props}
    />
  );
};

const lClasses = StyleSheet.create({
  main: {
    height: Sizing.x50,
    padding: Sizing.x10,
    maxHeight: Sizing.x50,
    color: Colors.neutral.s900,
    borderColor: Colors.neutral.s150,
    backgroundColor: Colors.neutral.white,
    borderWidth: Outlines.borderWidth.thin,
    borderRadius: Outlines.borderRadius.small,
    ...Outlines.shadow.base,
  },
});

const dClasses = StyleSheet.create({
  main: {
    ...lClasses.main,
    color: Colors.neutral.s150,
    borderColor: Colors.neutral.s500,
    shadowColor: Colors.neutral.black,
    backgroundColor: Colors.neutral.s900,
  },
});

export default Input;
