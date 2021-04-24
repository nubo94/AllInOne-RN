import React, {useState} from 'react';

// Custom Components
import {FlatList} from '../atoms';
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
    onChangeText('');
    setTasks(added as any);
  }

  function _handleUpdate() {
    const deleted = _remove(tasks, objToUpdate.id);
    const updated = _add(deleted, {...objToUpdate, label: text});
    onChangeText('');
    setTasks(updated as any);
    setObjToUpdate(null as any);
  }

  function _handleRemove(id: string | number) {
    const deleted = _remove(tasks, id);
    setTasks(deleted as any);
  }

  function _handleEdit(obj: ITasks) {
    setObjToUpdate(obj);
    onChangeText(obj.label);
  }

  const renderTasks = ({item}: any) => {
    return (
      <TextWithIconButtons
        label={item.label}
        update={{
          iconName: 'edit-2',
          colorIconType: 'normal',
          onPress: () => _handleEdit(item),
        }}
        delete={{
          iconName: 'trash',
          colorIconType: 'danger',
          onPress: () => _handleRemove(item.id),
        }}
      />
    );
  };

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
      <FlatList
        keyExtractor={i => i.id}
        renderItem={renderTasks}
        empty={lang?.list?.empty}
        data={tasks.sort(
          (a, b) =>
            (new Date(b.created_at) as any) - (new Date(a.created_at) as any),
        )}
      />
    </>
  );
}

interface ITasks {
  label: string;
  created_at: string;
  id: number | string;
}

export default ToDo;
