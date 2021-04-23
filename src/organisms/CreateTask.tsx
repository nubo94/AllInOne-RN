import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from '../atoms';
import {InputWithButton} from '../molecules';
import {Sizing, Typography} from '../atoms/styles';

export interface ICreateTaskProps {
  description: string;
  placeholder: string;
  titleAction: string;
}

const CreateTask = ({
  titleAction,
  description,
  placeholder,
}: ICreateTaskProps) => {
  return (
    <View style={classes.main}>
      <View style={classes.wrapperText}>
        <Text label={description} style={classes.text} />
      </View>
      <InputWithButton
        input={{placeholder}}
        button={{
          disabled: false,
          title: titleAction,
          onPress: () => null,
        }}
      />
    </View>
  );
};

const classes = StyleSheet.create({
  main: {
    flexGrow: 1,
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
