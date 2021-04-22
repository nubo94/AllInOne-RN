import React from 'react';
import {TextInput as TI, TextInputProps} from 'react-native';

export interface InputProps extends TextInputProps {}

const Input = ({...props}: InputProps) => {
  return <TI {...props} />;
};

export default Input;
