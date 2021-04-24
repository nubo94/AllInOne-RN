import React from 'react';
import {FlatList as Fl, FlatListProps, StyleSheet} from 'react-native';
import {Text, View} from '.';
import {Colors, Typography} from './styles';

interface IFlatListProps extends FlatListProps<any> {
  empty: string;
}

const FlatList = ({empty, ...props}: IFlatListProps) => {
  return (
    <Fl
      ListEmptyComponent={
        <View style={classes.main}>
          <Text style={classes.empty} label={empty} />
        </View>
      }
      {...props}
    />
  );
};

const classes = StyleSheet.create({
  main: {
    display: 'flex',
    alignItems: 'center',
  },
  empty: {
    color: Colors.neutral.s400,
    fontSize: Typography.fontSize.x10.fontSize,
  },
});

export default FlatList;
