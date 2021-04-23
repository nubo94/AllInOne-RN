// In App.js in a new project
import 'react-native-gesture-handler';
import React from 'react';
import {useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Provider
const Stack = createStackNavigator();

// Custom Hook
import {useLanguage} from '../providers';

// Screens
import HomeScreen from './Home';
import {Colors} from '../atoms/styles';

function RootScreen() {
  const isDarkMode = useColorScheme() === 'dark';
  const {lang} = useLanguage();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={lang?.appNAme}
          component={HomeScreen}
          options={{
            headerTintColor: isDarkMode
              ? Colors.neutral.white
              : Colors.neutral.s800,
            headerStyle: {
              elevation: 0, // android
              shadowOpacity: 0, // ios
              borderBottomWidth: 0, // remove the bottom divider
              backgroundColor: isDarkMode
                ? Colors.neutral.s800
                : Colors.neutral.s100,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootScreen;
