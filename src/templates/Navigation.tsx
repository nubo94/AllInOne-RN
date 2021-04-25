import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View, Button} from '../atoms';
import {Sizing, Typography} from '../atoms/styles';
import {useLanguage} from '../providers';
import {useNavigation} from '@react-navigation/native';

function Navigation() {
  const {lang} = useLanguage();
  const navigation = useNavigation();
  return (
    <View style={classes.main}>
      <Text label={lang[0].description} style={classes.description} />
      {lang.slice(1).map((i: any, k: number) => (
        <View key={k} style={classes.wrapperBtn}>
          <Button
            title={i.appName}
            iconRight={{iconName: 'chevron-right'}}
            onPress={() => navigation.navigate(i.appName)}
          />
        </View>
      ))}
    </View>
  );
}
const classes = StyleSheet.create({
  main: {
    flexGrow: 1,
  },
  description: {
    marginBottom: Sizing.x80,
    fontSize: Typography.fontSize.x50.fontSize,
  },
  wrapperBtn: {
    marginBottom: Sizing.x20,
  },
});

export default Navigation;
