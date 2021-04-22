/**
 * Render input with  button
 * @format
 */
import React from 'react';
import {render, waitFor, fireEvent} from '@testing-library/react-native';

import {InputWithButton, InputWithButtonProps} from '../../src/molecules';

describe('Render input with  button', () => {
  const onPressMock = jest.fn();
  let expectedProps: InputWithButtonProps;
  beforeEach(() => {
    expectedProps = {
      input: {
        placeholder: 'introduce your task',
      },
      button: {
        title: 'Press me',
        onPress: () => null,
      },
    };
  });

  it('render input', async () => {
    const {getByPlaceholderText} = render(
      <InputWithButton {...expectedProps} />,
    );
    await waitFor(() =>
      getByPlaceholderText(expectedProps.input.placeholder as string),
    );
  });
  it('render button', async () => {
    const {getByText} = render(<InputWithButton {...expectedProps} />);
    fireEvent.press(getByText(expectedProps.button.title as string));
    expect(onPressMock).toBeTruthy();
  });
});
