import React from 'react';
import {View, Input, Button, IButtonProps, InputProps} from '../atoms';

export interface InputWithButtonProps {
  input: InputProps;
  button: IButtonProps;
}

const InputWithButton = ({input, button}: InputWithButtonProps) => {
  return (
    <View>
      <Input {...input} />
      <Button {...button} />
    </View>
  );
};

export default InputWithButton;
