import React from 'react';
import {StyleSheet} from 'react-native';
import moment from 'moment';

// Theme
import {Colors, Sizing} from '../atoms/styles';

// Custom Components
import {View, Text, IconButton, IconButtonProps, IViewProps} from '../atoms';

export interface ITextWithIconButtonProps {
  date: string;
  label: string;
  view?: IViewProps;
  mark: IconButtonProps;
  update: IconButtonProps;
  delete: IconButtonProps;
}

const TextWithIconButton = ({
  view,
  date,
  label,
  ...props
}: ITextWithIconButtonProps) => {
  return (
    <>
      <View style={classes.main} {...view}>
        <View shadow style={classes.wrapperPaper}>
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
        <Text style={classes.date} label={moment(date).fromNow() || ''} />
      </View>
    </>
  );
};

const classes = StyleSheet.create({
  main: {
    marginBottom: Sizing.x20,
  },
  date: {
    textAlign: 'right',
    fontStyle: 'italic',
    fontSize: Sizing.x10,
    marginTop: Sizing.x10,
    color: Colors.neutral.s300,
  },
  wrapperPaper: {
    display: 'flex',
    flexDirection: 'row',
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
