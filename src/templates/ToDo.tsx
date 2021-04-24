import React, {useState, useEffect} from 'react';

// Custom Components
import {FlatList} from '../atoms';
import {CreateTask} from '../organisms';
import {TextWithIconButtons} from '../molecules';

// Custom Hook
import {useLanguage} from '../providers';
import {_add, _get, _remove, _save} from '../functions';

function ToDo() {
  const {lang} = useLanguage();
  const [text, onChangeText] = useState('');
  const [tasks, setTasks] = useState<ITasks[]>([]);
  const [objToUpdate, setObjToUpdate] = useState<ITasks>(null as any);

  useEffect(() => {
    _fetch();
  }, []);

  function _handleAdd() {
    const objToAdd = {
      label: text,
      id: Math.random(),
      created_at: new Date().toISOString(),
    };
    const added = _add(tasks, objToAdd);
    onChangeText('');
    setTasks(added as any);
    _save(added);
  }

  function _handleUpdate() {
    const deleted = _remove(tasks, objToUpdate.id);
    const updated = _add(deleted, {...objToUpdate, label: text});
    onChangeText('');
    setTasks(updated as any);
    setObjToUpdate(null as any);
    _save(updated);
  }

  function _handleRemove(id: string | number) {
    const deleted = _remove(tasks, id);
    setTasks(deleted as any);
    _save(deleted);
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

  async function _fetch() {
    try {
      const localStorage = await _get();
      setTasks(localStorage);
    } catch (error) {
      console.error(error);
    }
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
