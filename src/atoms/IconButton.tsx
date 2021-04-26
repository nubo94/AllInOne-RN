import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
  ActivityIndicator,
  TouchableOpacityProps,
} from 'react-native';

// Theme
import {Colors, Sizing} from './styles';
export interface IconButtonProps extends TouchableOpacityProps {
  iconName: string;
  disabled?: boolean;
  colorIconType: 'danger' | 'normal' | 'disable' | 'primary';
}

const IconButton = ({
  iconName,
  disabled,
  colorIconType,
  ...props
}: IconButtonProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  function _color() {
    switch (colorIconType) {
      case 'danger':
        return isDarkMode ? dClasses.danger : lClasses.danger;
      case 'normal':
        return isDarkMode ? dClasses.normal : lClasses.normal;
      case 'disable':
        return isDarkMode ? dClasses.disable : lClasses.disable;
      case 'primary':
        return isDarkMode ? dClasses.primary : lClasses.primary;
      default:
        break;
    }
  }

  return (
    <TouchableOpacity activeOpacity={0.8} disabled={disabled} {...props}>
      {disabled ? (
        <ActivityIndicator
          size="small"
          color={isDarkMode ? Colors.neutral.s400 : Colors.neutral.black}
        />
      ) : (
        <Icon name={iconName} size={Sizing.x20} style={_color()} />
      )}
    </TouchableOpacity>
  );
};

const lClasses = StyleSheet.create({
  normal: {
    color: Colors.neutral.s900,
  },
  danger: {
    color: Colors.danger.s400,
  },
  disable: {
    color: Colors.neutral.s150,
  },
  primary: {
    color: Colors.primary.brand,
  },
});
const dClasses = StyleSheet.create({
  normal: {
    color: Colors.neutral.s300,
  },
  danger: {
    color: Colors.danger.s400,
  },
  disable: {
    color: Colors.neutral.s500,
  },
  primary: {
    color: Colors.neutral.white,
  },
});

export default IconButton;
