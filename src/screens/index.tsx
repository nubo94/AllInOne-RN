// In App.js in a new project
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Provider
const Stack = createStackNavigator();

// Custom Hook
import {useLanguage} from '../providers';

// Screens
import HomeScreen from './Home';

function RootScreen() {
  const {lang} = useLanguage();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={lang?.appNAme} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootScreen;
