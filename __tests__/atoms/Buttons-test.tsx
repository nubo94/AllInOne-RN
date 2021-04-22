import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import {Button} from '../../src/atoms';

const onPressMock = jest.fn();
test('button component test', () => {
  const expected = 'Press me';
  const {getByText} = render(<Button onPress={onPressMock} title={expected} />);
  fireEvent.press(getByText(expected));
  expect(onPressMock).toHaveBeenCalled();
});
