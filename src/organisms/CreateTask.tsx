import React from 'react';
import {StyleSheet} from 'react-native';
import {InputWithButton} from '../molecules';
import {Text, View} from '../atoms';
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
    <View style={styles.main}>
      <View style={styles.wrapperText}>
        <Text label={description} style={styles.text} />
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

const styles = StyleSheet.create({
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
