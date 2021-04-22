import React from 'react';
import renderer from 'react-test-renderer';
import {Text} from 'react-native';
import {SafeAreaView} from '../../src/atoms';

test('renders correctly - SafeAreaView', () => {
  const tree = renderer
    .create(
      <SafeAreaView>
        <Text>Hello Word!</Text>
      </SafeAreaView>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
