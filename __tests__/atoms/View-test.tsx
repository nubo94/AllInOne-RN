import React from 'react';
import renderer from 'react-test-renderer';
import {Text, View} from '../../src/atoms';

test('renders correctly - View', () => {
  const tree = renderer
    .create(
      <View>
        <Text label="Hello Word!" />
      </View>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
