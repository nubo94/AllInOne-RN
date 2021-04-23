import React from 'react';
import {StyleSheet} from 'react-native';
import {
  useColorScheme,
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
  const isDarkMode = useColorScheme() === 'dark';

  function _classes() {
    return [
      disabled
        ? isDarkMode
          ? disableDClasses.main
          : disableLClasses.main
        : isDarkMode
        ? dClasses.main
        : lClasses.main,
      style,
    ];
  }

  return (
    <TouchableOpacity
      style={_classes()}
      activeOpacity={0.8}
      disabled={disabled}
      {...props}>
      {disabled ? (
        <ActivityIndicator
          size="small"
          color={isDarkMode ? Colors.neutral.s400 : Colors.neutral.black}
        />
      ) : (
        <Text label={title} style={lClasses.text} />
      )}
    </TouchableOpacity>
  );
};

const lClasses = StyleSheet.create({
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

const dClasses = StyleSheet.create({
  main: {
    ...lClasses.main,
    borderColor: Colors.neutral.s500,
    shadowColor: Colors.neutral.black,
    backgroundColor: Colors.neutral.s900,
  },
});

const disableLClasses = StyleSheet.create({
  main: {
    ...lClasses.main,
    backgroundColor: Colors.neutral.s250,
    ...Outlines.shadow.disable,
  },
});

const disableDClasses = StyleSheet.create({
  main: {
    ...disableLClasses.main,
    borderColor: Colors.neutral.s700,
    backgroundColor: Colors.neutral.s700,
  },
});

export default Button;
