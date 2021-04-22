import React from 'react';
import {StatusBar as SB, StatusBarProps, useColorScheme} from 'react-native';

interface IStatusBarProps extends StatusBarProps {}

const StatusBar = ({...props}: IStatusBarProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SB barStyle={isDarkMode ? 'light-content' : 'dark-content'} {...props} />
  );
};

export default StatusBar;
