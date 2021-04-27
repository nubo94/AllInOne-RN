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

// Theme
import {Colors} from '../atoms/styles';

// Screens
import HomeScreen from './Home';
import TODOScreen from './TODO';
import BookFinder from './BookFinder';
import FizzBuzzScreen from './FizzBuzz';

function RootScreen() {
  const isDarkMode = useColorScheme() === 'dark';
  const {lang} = useLanguage();

  function _screens(k: number) {
    switch (k) {
      case 0:
        return HomeScreen;
      case 1:
        return TODOScreen;
      case 2:
        return FizzBuzzScreen;
      case 3:
        return BookFinder;
      default:
        break;
    }
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {lang.map((i: any, k: number) => (
          <Stack.Screen
            key={k}
            name={i.appName}
            component={_screens(k) as any}
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
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootScreen;
