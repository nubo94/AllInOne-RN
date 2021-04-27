import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from '../atoms';
import {InputWithButton, InputWithButtonProps} from '../molecules';
import {Sizing, Typography} from '../atoms/styles';

export interface ITitleWithInputAndButtonProps {
  description: string;
  actions: InputWithButtonProps;
}

const TitleWithInputAndButton = ({
  actions,
  description,
}: ITitleWithInputAndButtonProps) => {
  return (
    <View style={classes.main}>
      <View>
        <Text label={description} style={classes.text} />
      </View>
      <InputWithButton {...actions} />
    </View>
  );
};

const classes = StyleSheet.create({
  main: {
    marginBottom: Sizing.x50,
  },
  text: {
    marginBottom: Sizing.x70,
    fontSize: Typography.fontSize.x50.fontSize,
  },
});

export default TitleWithInputAndButton;
