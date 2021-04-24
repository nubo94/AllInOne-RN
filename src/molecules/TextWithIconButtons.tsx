import React from 'react';
import {StyleSheet} from 'react-native';

// Custom Components
import {View, Text} from '../atoms';

const TextWithIconButton = () => {
  return (
    <View shadow={true} style={classes.main}>
      <View>
        <Text label="Hola mundo esto es una simple prueba!" />
      </View>
      <View>
        <Text label="Hola" />
      </View>
    </View>
  );
};

const classes = StyleSheet.create({
  main: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default TextWithIconButton;
