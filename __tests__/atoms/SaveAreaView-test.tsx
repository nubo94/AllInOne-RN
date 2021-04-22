/**
 * Describe component SafeAreaView
 * @format
 */

import React from 'react';
import renderer from 'react-test-renderer';
import {SafeAreaView, Text} from '../../src/atoms';

test('renders correctly - SafeAreaView', () => {
  const expected = 'Hello Word!';
  const tree = renderer
    .create(
      <SafeAreaView>
        <Text label={expected} />
      </SafeAreaView>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
