/**
 * Render icon button
 * @format
 */

import React from 'react';
import {render} from '@testing-library/react-native';

import {IconButton, IconButtonProps} from '../../src/atoms';

const onPressMock = jest.fn();
describe('Icon button test', () => {
  let expectedProps: IconButtonProps;
  beforeEach(() => {
    expectedProps = {
      onPress: onPressMock,
      colorIconType: 'normal',
      iconName: 'alert-circle',
    };
  });

  test('Press button', () => {
    render(<IconButton {...expectedProps} />);
    expect(onPressMock).toBeTruthy();
  });
});
