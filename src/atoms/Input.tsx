import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput as TI, TextInputProps} from 'react-native';

// Theme
import {Outlines, Colors, Sizing} from './styles';

export interface InputProps extends TextInputProps {}

const Input = ({style, ...props}: InputProps) => {
  return <TI style={[classes.main, style]} {...props} />;
};

const classes = StyleSheet.create({
  main: {
    padding: Sizing.x10,
    borderColor: Colors.neutral.s150,
    backgroundColor: Colors.neutral.white,
    borderWidth: Outlines.borderWidth.thin,
    borderRadius: Outlines.borderRadius.small,
    ...Outlines.shadow.base,
  },
});

export default Input;
