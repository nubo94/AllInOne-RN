import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';

// Custom Components
import {SafeAreaView} from './src/atoms';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    </SafeAreaView>
  );
};

export default App;
