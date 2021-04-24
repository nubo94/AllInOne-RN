/**
 * Render Create Task component
 * @format
 */
import React from 'react';
import {render, waitFor} from '@testing-library/react-native';

import {CreateTask, ICreateTaskProps} from '../../src/organisms';

describe('Render create task component', () => {
  let expectedProps: ICreateTaskProps;
  beforeEach(() => {
    expectedProps = {
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      actions: {
        input: {
          placeholder: 'create your task',
        },
        button: {
          title: 'create',
        },
      },
    };
  });

  it('render create task component', async () => {
    const {getByText, getByPlaceholderText} = render(
      <CreateTask {...expectedProps} />,
    );
    expect(getByText(expectedProps.description as string)).toBeTruthy();
    expect(
      getByText(expectedProps.actions.button.title as string),
    ).toBeTruthy();
    await waitFor(() =>
      getByPlaceholderText(expectedProps.actions.input.placeholder as string),
    );
  });
});
