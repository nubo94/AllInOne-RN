// In App.js in a new project
import 'react-native-gesture-handler';
import React from 'react';
import RootScreen from './src/screens';

// Provider
import {LanguageProvider} from './src/providers';

function App() {
  return (
    <LanguageProvider>
      <RootScreen />
    </LanguageProvider>
  );
}

export default App;
