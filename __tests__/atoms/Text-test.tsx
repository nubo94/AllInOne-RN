import React from 'react';
import renderer from 'react-test-renderer';
import {Text} from '../../src/atoms';

test('renders correctly - Text', () => {
  const tree = renderer.create(<Text label="Hello Word!" />).toJSON();
  expect(tree).toMatchSnapshot();
});
