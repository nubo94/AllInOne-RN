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
  colorIconType: 'danger' | 'normal';
}

const IconButton = ({
  iconName,
  disabled,
  colorIconType,
  ...props
}: IconButtonProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <TouchableOpacity activeOpacity={0.8} disabled={disabled} {...props}>
      {disabled ? (
        <ActivityIndicator
          size="small"
          color={isDarkMode ? Colors.neutral.s400 : Colors.neutral.black}
        />
      ) : (
        <Icon
          name={iconName}
          size={Sizing.x20}
          style={
            isDarkMode
              ? colorIconType === 'danger'
                ? dClasses.danger
                : dClasses.primary
              : colorIconType === 'danger'
              ? lClasses.danger
              : lClasses.primary
          }
        />
      )}
    </TouchableOpacity>
  );
};

const lClasses = StyleSheet.create({
  primary: {
    color: Colors.neutral.s900,
  },
  danger: {
    color: Colors.danger.s400,
  },
});
const dClasses = StyleSheet.create({
  primary: {
    color: Colors.neutral.s300,
  },
  danger: {
    color: Colors.danger.s400,
  },
});

export default IconButton;
