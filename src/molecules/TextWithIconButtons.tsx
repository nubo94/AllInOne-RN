import React from 'react';
import {StyleSheet} from 'react-native';

// Theme
import {Sizing} from '../atoms/styles';

// Custom Components
import {View, Text, IconButton, IconButtonProps} from '../atoms';

export interface ITextWithIconButtonProps {
  label: string;
  update: IconButtonProps;
  delete: IconButtonProps;
}

const TextWithIconButton = ({label, ...props}: ITextWithIconButtonProps) => {
  return (
    <View shadow={true} style={classes.main}>
      <View>
        <Text label={label} />
      </View>
      <View style={classes.wrapperButtons}>
        <IconButton {...props.update} />
        <View style={classes.separator} />
        <IconButton {...props.delete} />
      </View>
    </View>
  );
};

const classes = StyleSheet.create({
  main: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: Sizing.x20,
    justifyContent: 'space-between',
  },
  wrapperButtons: {
    display: 'flex',
    flexDirection: 'row',
  },
  separator: {
    width: Sizing.x10,
  },
});

export default TextWithIconButton;
