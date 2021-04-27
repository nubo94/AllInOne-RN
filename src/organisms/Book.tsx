import React, {useCallback} from 'react';
import {StyleSheet, Linking, Alert, Image} from 'react-native';
import {Text, View} from '../atoms';
import {Colors, Sizing, Typography, Outlines} from '../atoms/styles';
import {useLanguage} from '../providers';

// Functions
import {_convertToHttps} from '../functions';

export interface IBookProps {
  url: string;
  uri: string;
  title: string;
  author: string;
  published: string;
  description: string;
}

const Book = ({
  uri,
  url,
  title,
  author,
  published,
  description,
}: IBookProps) => {
  const {lang} = useLanguage();
  let authorLabel = lang?.[3]?.bookField?.author;
  let publishedLabel = lang?.[3]?.bookField?.published;

  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <View shadow style={classes.main} touch={{onPress: () => handlePress()}}>
      <View style={classes.wrapper}>
        <View style={classes.wrapperImage}>
          <Image style={classes.image} source={{uri: _convertToHttps(uri)}} />
        </View>
        <View style={classes.wrapperTextMain}>
          <Text style={classes.title} label={title} />
          <View style={classes.wrapperText}>
            <Text label={authorLabel} style={classes.type} />
            <Text label={author} style={classes.normalText} />
          </View>

          <View style={classes.wrapperText}>
            <Text style={classes.type} label={publishedLabel} />
            <Text label={published} style={classes.normalText} />
          </View>
        </View>
      </View>
      <Text label={description} style={classes.description} />
    </View>
  );
};

const classes = StyleSheet.create({
  main: {
    marginBottom: Sizing.x10,
  },
  wrapper: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapperTextMain: {
    width: '67%',
  },
  wrapperImage: {
    width: '30%',
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    height: 140,
    width: '100%',
    borderRadius: Outlines.borderRadius.base,
  },
  wrapperText: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: Sizing.x15,
    color: Colors.primary.brand,
  },
  type: {
    fontSize: 12,
    marginTop: Sizing.x5,
    fontWeight: Typography.fontWeight.bold.fontWeight,
  },
  normalText: {
    fontSize: 12,
    marginTop: Sizing.x5,
  },
  description: {
    fontSize: 12,
    marginTop: Sizing.x10,
  },
});

export default Book;
