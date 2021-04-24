import React, {useState} from 'react';

// Custom Components
import {CreateTask} from '../organisms';
import {TextWithIconButtons} from '../molecules';

// Custom Hook
import {useLanguage} from '../providers';
import {_add, _remove} from '../functions';

function ToDo() {
  const {lang} = useLanguage();
  const [text, onChangeText] = useState('');
  const [tasks, setTasks] = useState<ITasks[]>([]);

  function _handleAdd() {
    const objToAdd = {id: Math.random(), label: text};
    const added = _add(tasks, objToAdd);
    setTasks(added as any);
    onChangeText('');
  }

  function _handleRemove(id: string | number) {
    const deleted = _remove(tasks, id);
    setTasks(deleted as any);
  }

  return (
    <>
      <CreateTask
        description={lang?.description}
        actions={{
          button: {
            onPress: () => _handleAdd(),
            title: lang?.inputs?.action,
          },
          input: {
            value: text,
            onChangeText,
            placeholder: lang?.inputs?.create,
          },
        }}
      />
      {tasks.map((i, k) => (
        <TextWithIconButtons
          key={k}
          label={i.label}
          update={{
            iconName: 'edit-2',
            colorIconType: 'normal',
          }}
          delete={{
            iconName: 'trash',
            colorIconType: 'danger',
            onPress: () => _handleRemove(i.id),
          }}
        />
      ))}
    </>
  );
}

interface ITasks {
  label: string;
  id: number | string;
}

export default ToDo;
