import React from 'react';

// Custom Components
import {CreateTask} from '../organisms';
import {TextWithIconButtons} from '../molecules';

// Custom Hook
import {useLanguage} from '../providers';

function ToDo() {
  const {lang} = useLanguage();
  return (
    <>
      <CreateTask
        description={lang?.description}
        titleAction={lang?.inputs?.action}
        placeholder={lang?.inputs?.create}
      />
      <TextWithIconButtons />
    </>
  );
}

export default ToDo;
