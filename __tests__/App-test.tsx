/**
 * Render Stack app
 * @format
 */
import React from 'react';
import {render, waitFor} from '@testing-library/react-native';

import App from '../App';

/* test('renders correctly', () => {
   renderer.create(<App />);
 }); */

describe('App', () => {
  it('renders app stack', async () => {
    const {getByText} = render(<App />);
    await waitFor(() => getByText('Todo App'));
  });
});
