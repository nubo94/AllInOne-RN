/**
 * Render Input custom Component
 * @format
 */
import React from 'react';
import {render, waitFor, cleanup} from '@testing-library/react-native';

import {Input} from '../../src/atoms';

afterEach(cleanup);
it('renders input component', async () => {
  const expected = 'Hello word!';
  const {getByPlaceholderText} = render(<Input placeholder={expected} />);
  await waitFor(() => getByPlaceholderText(expected));
});
