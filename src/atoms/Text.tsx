import React from 'react';
import {Text as Tt, TextProps} from 'react-native';

interface ITextProps extends TextProps {
  label: string;
}

const Text = ({label, ...props}: ITextProps) => {
  return <Tt {...props}>{label}</Tt>;
};

export default Text;
