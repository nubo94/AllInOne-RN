import React from 'react';
import {StyleSheet} from 'react-native';

// Custom Components
import {SafeAreaView, StatusBar, View} from '../atoms';

interface IScreenProps {
  children: JSX.Element[] | JSX.Element;
}

function Screen({children}: IScreenProps) {
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.root}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 20,
  },
});

export default Screen;
