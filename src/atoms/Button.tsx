import React from 'react';
import {Button as Btn, ButtonProps} from 'react-native';

export interface IButtonProps extends ButtonProps {}

const Button = ({...props}: IButtonProps) => {
  return <Btn {...props} />;
};

export default Button;
