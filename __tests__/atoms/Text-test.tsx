/**
 * Describe component Text
 * @format
 */

import React from 'react';
import renderer from 'react-test-renderer';
import {Text} from '../../src/atoms';

test('renders correctly - Text', () => {
  const expected = 'Hello Word!';
  const tree = renderer.create(<Text label={expected} />).toJSON();
  expect(tree).toMatchSnapshot();
});
