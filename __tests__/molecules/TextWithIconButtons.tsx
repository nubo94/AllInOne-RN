/**
 * Render a paper with shadow and buttons with text
 * @format
 */
import React from 'react';
import {render} from '@testing-library/react-native';

import {
  TextWithIconButtons,
  ITextWithIconButtonProps,
} from '../../src/molecules';

describe('Render a paper with shadow and buttons with text', () => {
  const onPressMock = jest.fn();
  let expectedProps: ITextWithIconButtonProps;
  beforeEach(() => {
    expectedProps = {
      date: '',
      label: 'hello word!',
      delete: {
        iconName: 'edit-2',
        onPress: onPressMock,
        colorIconType: 'normal',
      },
      update: {
        iconName: 'trash',
        onPress: onPressMock,
        colorIconType: 'danger',
      },
      mark: {onPress: () => null, iconName: 'circle', colorIconType: 'normal'},
    };
  });

  it('render icon button', async () => {
    const {getByText} = render(<TextWithIconButtons {...expectedProps} />);
    expect(onPressMock).toBeTruthy();
    expect(getByText(expectedProps.label as string)).toBeTruthy();
  });
});
