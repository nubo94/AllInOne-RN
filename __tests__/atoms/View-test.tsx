/**
 * Describe component View
 * @format
 */

import React from 'react';
import renderer from 'react-test-renderer';
import {Text, View} from '../../src/atoms';

test('renders correctly - View', () => {
  const expected = 'Hello Word!';
  const tree = renderer
    .create(
      <View>
        <Text label={expected} />
      </View>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
