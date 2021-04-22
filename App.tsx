import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// Custom Components
import {SafeAreaView, StatusBar} from './src/atoms';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <StatusBar />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
