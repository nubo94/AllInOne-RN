import React from 'react';
import {SafeAreaView as SAV, useColorScheme} from 'react-native';

// Theme
import {Colors} from './styles';

interface ISafeAreaView {
  children: JSX.Element[] | JSX.Element;
}

const SafeAreaView = ({children, ...props}: ISafeAreaView) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode
      ? Colors.darker.primaryBackground.main
      : Colors.lighter.primaryBackground.main,
  };
  return (
    <SAV style={backgroundStyle} {...props}>
      {children}
    </SAV>
  );
};

export default SafeAreaView;
