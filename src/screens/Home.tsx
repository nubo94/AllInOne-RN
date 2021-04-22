import React from 'react';

// Custom Components
import {SafeAreaView, StatusBar, Text} from '../atoms';

function HomeScreen() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Text label="Home Screen" />
    </SafeAreaView>
  );
}

export default HomeScreen;
