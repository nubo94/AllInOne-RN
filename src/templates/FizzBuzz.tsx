import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Text, View, Button} from '../atoms';
import {Colors, Sizing, Typography} from '../atoms/styles';
import {useLanguage} from '../providers';

// Functions
import {_fizzBuzz, _save} from '../functions';

// HOC
import {withFetchFromLocalStorage} from '../HOC';

function FizzBuzz({initialData}: any) {
  const {lang} = useLanguage();
  const [num, setNum] = useState<number>(1);

  useEffect(() => {
    // eslint-disable-next-line radix
    setNum(parseInt(initialData) || 1);
  }, [initialData]);

  return (
    <View style={classes.main}>
      <Text label={lang[2].description} style={classes.description} />
      <Text label={_fizzBuzz(num)} style={classes.playText} />
      <View style={classes.wrapperBtn}>
        <Button
          title={lang[2].action}
          onPress={() => {
            setNum(num + 1);
            _save('FizzBuzz', num + 1);
          }}
        />
      </View>
      <View>
        <Text
          label="Restore"
          onPress={() => {
            setNum(1);
            _save('FizzBuzz', 1);
          }}
          style={classes.restoreText}
        />
      </View>
    </View>
  );
}
const classes = StyleSheet.create({
  main: {
    flexGrow: 1,
  },
  description: {
    marginBottom: Sizing.x50,
    fontSize: Typography.fontSize.x50.fontSize,
  },
  playText: {
    textAlign: 'center',
    marginBottom: Sizing.x50,
    fontSize: Typography.fontSize.x70.fontSize,
  },
  wrapperBtn: {
    marginBottom: Sizing.x20,
  },
  restoreText: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: Colors.neutral.s300,
  },
});

export default withFetchFromLocalStorage(FizzBuzz, 'FizzBuzz');
