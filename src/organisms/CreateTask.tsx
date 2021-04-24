import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from '../atoms';
import {InputWithButton, InputWithButtonProps} from '../molecules';
import {Sizing, Typography} from '../atoms/styles';

export interface ICreateTaskProps {
  description: string;
  actions: InputWithButtonProps;
}

const CreateTask = ({description, actions}: ICreateTaskProps) => {
  return (
    <View style={classes.main}>
      <View style={classes.wrapperText}>
        <Text label={description} style={classes.text} />
      </View>
      <InputWithButton {...actions} />
    </View>
  );
};

const classes = StyleSheet.create({
  main: {
    marginBottom: Sizing.x80,
  },
  wrapperText: {
    marginTop: Sizing.x20,
    paddingBottom: Sizing.x20,
  },
  text: {
    fontSize: Typography.fontSize.x20.fontSize,
    fontWeight: Typography.fontWeight.bold.fontWeight,
  },
});

export default CreateTask;
