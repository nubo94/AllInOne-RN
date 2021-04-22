import React from 'react';

import {InputWithButton} from '../molecules';
import {Text} from '../atoms';

export interface ICreateTaskProps {
  description: string;
  placeholder: string;
  titleAction: string;
}

const CreateTask = ({
  titleAction,
  description,
  placeholder,
}: ICreateTaskProps) => {
  return (
    <>
      <Text label={description} />
      <InputWithButton
        input={{placeholder}}
        button={{
          title: titleAction,
          onPress: () => null,
        }}
      />
    </>
  );
};

export default CreateTask;
