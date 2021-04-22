import React from 'react';

// Custom Components
import {CreateTask} from '../organisms';

// Custom Hook
import {useLanguage} from '../providers';

function ToDo() {
  const {lang} = useLanguage();
  return (
    <CreateTask
      description={lang?.description}
      titleAction={lang?.inputs?.action}
      placeholder={lang?.inputs?.create}
    />
  );
}

export default ToDo;
