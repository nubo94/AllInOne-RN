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
  const [objToUpdate, setObjToUpdate] = useState<ITasks>(null as any);

  function _handleAdd() {
    const objToAdd = {
      label: text,
      id: Math.random(),
      created_at: new Date().toISOString(),
    };
    const added = _add(tasks, objToAdd);
    setTasks(added as any);
    onChangeText('');
  }

  function _handleUpdate() {
    const deleted = _remove(tasks, objToUpdate.id);
    const updated = _add(deleted, {...objToUpdate, label: text});
    onChangeText('');
    setTasks(updated as any);
  }

  function _handleRemove(id: string | number) {
    const deleted = _remove(tasks, id);
    setTasks(deleted as any);
  }

  function _handleEdit(obj: ITasks) {
    setObjToUpdate(obj);
    onChangeText(obj.label);
  }

  return (
    <>
      <CreateTask
        description={lang?.description}
        actions={{
          button: {
            disabled: !text,
            title: objToUpdate
              ? lang?.inputs?.action?.update
              : lang?.inputs?.action?.create,
            onPress: () => (objToUpdate ? _handleUpdate() : _handleAdd()),
          },
          input: {
            value: text,
            onChangeText,
            placeholder: lang?.inputs?.create,
          },
        }}
      />
      {tasks
        .sort(
          (a, b) =>
            (new Date(b.created_at) as any) - (new Date(a.created_at) as any),
        )
        .map((i, k) => (
          <TextWithIconButtons
            key={k}
            label={i.label}
            update={{
              iconName: 'edit-2',
              colorIconType: 'normal',
              onPress: () => _handleEdit(i),
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
  created_at: string;
  id: number | string;
}

export default ToDo;
