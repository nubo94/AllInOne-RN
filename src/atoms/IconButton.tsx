import React from 'react';
//import {StyleSheet} from 'react-native';
import {
  useColorScheme,
  TouchableOpacity,
  ActivityIndicator,
  TouchableOpacityProps,
} from 'react-native';

// Custom Component
import Text from './Text';

// Theme
import {Colors} from './styles';
export interface IButtonProps extends TouchableOpacityProps {
  title: string;
  disabled?: boolean;
}

const IconButton = ({disabled, title, ...props}: IButtonProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <TouchableOpacity activeOpacity={0.8} disabled={disabled} {...props}>
      {disabled ? (
        <ActivityIndicator
          size="small"
          color={isDarkMode ? Colors.neutral.s400 : Colors.neutral.black}
        />
      ) : (
        <Text label={title} />
      )}
    </TouchableOpacity>
  );
};

export default IconButton;
