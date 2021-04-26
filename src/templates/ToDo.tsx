import React, {useState, useEffect} from 'react';

// Custom Components
import {FlatList} from '../atoms';
import {CreateTask} from '../organisms';
import {TextWithIconButtons} from '../molecules';

// Custom Hook
import {useLanguage} from '../providers';
import {
  _add,
  _save,
  _remove,
  _negateBoolFromKeyInsideObjInArr,
} from '../functions';
import {withFetchFromLocalStorage} from '../HOC';

function ToDo({initialData}: any) {
  const {lang} = useLanguage();
  const [text, onChangeText] = useState('');
  const [tasks, setTasks] = useState<ITasks[]>([]);
  const [objToUpdate, setObjToUpdate] = useState<ITasks>(null as any);

  useEffect(() => {
    setTasks(initialData);
  }, [initialData]);

  function _handleAdd() {
    const objToAdd = {
      label: text,
      completed: false,
      id: Math.random(),
      created_at: new Date().toISOString(),
    };
    const added = _add(tasks, objToAdd);
    onChangeText('');
    setTasks(added as any);
    _save('ToDo', added);
  }

  function _handleUpdate() {
    const deleted = _remove(tasks, objToUpdate.id);
    const updated = _add(deleted, {...objToUpdate, label: text});
    onChangeText('');
    setTasks(updated as any);
    setObjToUpdate(null as any);
    _save('ToDo', updated);
  }

  function _handleRemove(id: string | number) {
    const deleted = _remove(tasks, id);
    setTasks(deleted as any);
    _save('ToDo', deleted);
  }

  function _handleEdit(obj: ITasks) {
    setObjToUpdate(obj);
    onChangeText(obj.label);
  }

  function _handleCheck(id: string | number) {
    const r = _negateBoolFromKeyInsideObjInArr(tasks, 'completed', id);
    setTasks(r as any);
    _save('ToDo', r);
  }

  const renderTasks = ({item}: any) => {
    return (
      <TextWithIconButtons
        label={item.label}
        mark={{
          colorIconType: 'primary',
          onPress: () => _handleCheck(item.id),
          iconName: item.completed ? 'check-circle' : 'circle',
        }}
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
        description={lang[1].description}
        actions={{
          button: {
            disabled: !text,
            title: objToUpdate
              ? lang[1].inputs?.action?.update
              : lang[1].inputs?.action?.create,
            onPress: () => (objToUpdate ? _handleUpdate() : _handleAdd()),
          },
          input: {
            value: text,
            onChangeText,
            placeholder: lang[1].inputs?.create,
          },
        }}
      />
      <FlatList
        keyExtractor={i => i.id}
        renderItem={renderTasks}
        empty={lang?.list?.empty}
        data={
          tasks?.sort(
            (a, b) =>
              (new Date(b.created_at) as any) - (new Date(a.created_at) as any),
          ) || []
        }
      />
    </>
  );
}

interface ITasks {
  label: string;
  created_at: string;
  id: number | string;
}

export default withFetchFromLocalStorage(ToDo, 'ToDo');
