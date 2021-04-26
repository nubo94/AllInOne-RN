import React from 'react';
import {StyleSheet} from 'react-native';

// Theme
import {Sizing} from '../atoms/styles';

// Custom Components
import {View, Text, IconButton, IconButtonProps} from '../atoms';

export interface ITextWithIconButtonProps {
  label: string;
  mark: IconButtonProps;
  update: IconButtonProps;
  delete: IconButtonProps;
}

const TextWithIconButton = ({label, ...props}: ITextWithIconButtonProps) => {
  return (
    <View shadow={true} style={classes.main}>
      <View style={classes.wrapperMark}>
        <IconButton {...props.mark} />
      </View>
      <View style={classes.wrapperText}>
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
    flexDirection: 'row',
    marginBottom: Sizing.x20,
    justifyContent: 'space-between',
  },
  wrapperMark: {
    width: '10%',
  },
  wrapperText: {
    width: '72%',
  },
  wrapperButtons: {
    width: '18%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  separator: {
    width: Sizing.x10,
  },
});

export default TextWithIconButton;
