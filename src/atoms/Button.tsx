import React from 'react';
import {StyleSheet} from 'react-native';
import {
  TouchableOpacity,
  ActivityIndicator,
  TouchableOpacityProps,
} from 'react-native';

// Custom Component
import Text from './Text';

// Theme
import {Outlines, Colors, Sizing, Typography} from './styles';
export interface IButtonProps extends TouchableOpacityProps {
  title: string;
  disabled?: boolean;
}

const Button = ({disabled, style, title, ...props}: IButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled}
      style={[style, disabled ? disabledStyle.main : classes.main]}
      {...props}>
      {disabled ? (
        <ActivityIndicator size="small" color={Colors.neutral.black} />
      ) : (
        <Text label={title} style={classes.text} />
      )}
    </TouchableOpacity>
  );
};

const classes = StyleSheet.create({
  main: {
    width: '100%',
    display: 'flex',
    height: Sizing.x50,
    padding: Sizing.x10,
    alignItems: 'center',
    maxHeight: Sizing.x50,
    justifyContent: 'center',
    borderColor: Colors.neutral.s150,
    backgroundColor: Colors.primary.brand,
    borderWidth: Outlines.borderWidth.thin,
    borderRadius: Outlines.borderRadius.small,
    ...Outlines.shadow.base,
  },
  text: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: Colors.neutral.white,
    fontSize: Typography.fontSize.x20.fontSize,
    fontWeight: Typography.fontWeight.bold.fontWeight,
  },
});

const disabledStyle = StyleSheet.create({
  main: {
    ...classes.main,
    backgroundColor: Colors.neutral.s250,
    ...Outlines.shadow.disable,
  },
});

export default Button;
