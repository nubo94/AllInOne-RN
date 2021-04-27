/**
 * Render Book description
 * @format
 */
import React from 'react';
import {render} from '@testing-library/react-native';

import {Book, IBookProps} from '../../src/organisms';

describe('Render create task component', () => {
  let expectedProps: IBookProps;
  beforeEach(() => {
    expectedProps = {
      url: '',
      author: 'Carl Sagan',
      published: '2019-02-13',
      title: 'Whimsical Cross-Stitch',
      uri: 'https://reactnative.dev/img/tiny_logo.png',
      description: 'More Than 130 Designs from Trendy to Traditional',
    };
  });

  it('render book text', async () => {
    const {getByText} = render(<Book {...expectedProps} />);
    expect(getByText(expectedProps.title as string)).toBeTruthy();
    expect(getByText(expectedProps.author as string)).toBeTruthy();
    expect(getByText(expectedProps.published as string)).toBeTruthy();
    expect(getByText(expectedProps.description as string)).toBeTruthy();
  });
});
