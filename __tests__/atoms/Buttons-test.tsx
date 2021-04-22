import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import {Button} from '../../src/atoms';

const onPressMock = jest.fn();
test('button component test', () => {
  const {getByText} = render(<Button onPress={onPressMock} title="Press me" />);
  fireEvent.press(getByText('Press me'));
  expect(onPressMock).toHaveBeenCalled();
});
