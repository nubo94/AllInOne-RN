/**
 * Describe component Screen
 * @format
 */

import React from 'react';
import {render} from '@testing-library/react-native';
import {Text} from '../../src/atoms';
import {Screen} from '../../src/molecules';

test('renders correctly - Screen', () => {
  const expected = 'Hello word!';
  const {getByText} = render(
    <Screen>
      <Text label={expected} />
    </Screen>,
  );
  expect(getByText(expected as string)).toBeTruthy();
});
