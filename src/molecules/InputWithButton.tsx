import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Input, Button, IButtonProps, InputProps} from '../atoms';
import {Sizing} from '../atoms/styles';

export interface InputWithButtonProps {
  input: InputProps;
  button: IButtonProps;
}

const InputWithButton = ({input, button}: InputWithButtonProps) => {
  return (
    <View style={styles.main}>
      <Input {...input} style={styles.input} />
      <Button {...button} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexGrow: 1,
  },
  input: {
    marginTop: Sizing.x10,
    marginBottom: Sizing.x20,
  },
});

export default InputWithButton;
