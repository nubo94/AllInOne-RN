/**
 * Describe component StatusBar
 * @format
 */

import React from 'react';
import renderer from 'react-test-renderer';
import {StatusBar} from '../../src/atoms';

test('renders correctly - StatusBar', () => {
  const tree = renderer.create(<StatusBar />).toJSON();
  expect(tree).toMatchSnapshot();
});
