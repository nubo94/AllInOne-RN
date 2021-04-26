import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';

// Custom Components
import {CreateTask} from '../organisms';
import {TextWithIconButtons} from '../molecules';
import {Button, FlatList, View} from '../atoms';

// Custom Hook
import {useLanguage} from '../providers';
import {
  _add,
  _save,
  _remove,
  _negateBoolFromKeyInsideObjInArr,
} from '../functions';
import {withFetchFromLocalStorage} from '../HOC';
import {Sizing} from '../atoms/styles';

const cacheId = 'TO-DO';

function ToDo({initialData, orientation}: any) {
  const {lang} = useLanguage();
  const [text, onChangeText] = useState('');
  const [tasks, setTasks] = useState<ITasks[]>([]);
  const [filterBy, setFilterBy] = useState<IFilter>('all');
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
    _save(cacheId, added);
  }

  function _handleUpdate() {
    const deleted = _remove(tasks, objToUpdate.id);
    const updated = _add(deleted, {...objToUpdate, label: text});
    onChangeText('');
    setTasks(updated as any);
    setObjToUpdate(null as any);
    _save(cacheId, updated);
  }

  function _handleRemove(id: string | number) {
    const deleted = _remove(tasks, id);
    setTasks(deleted as any);
    _save(cacheId, deleted);
  }

  function _handleEdit(obj: ITasks) {
    setObjToUpdate(obj);
    onChangeText(obj.label);
  }

  function _handleCheck(id: string | number) {
    const r = _negateBoolFromKeyInsideObjInArr(tasks, 'completed', id);
    setTasks(r as any);
    _save(cacheId, r);
  }

  const renderTasks = ({item}: any) => {
    return (
      <TextWithIconButtons
        label={item.label}
        date={item.created_at}
        view={{touch: {onPress: () => _handleCheck(item.id)}}}
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
        mark={{
          colorIconType: 'primary',
          onPress: () => _handleCheck(item.id),
          iconName: item.completed ? 'check-circle' : 'circle',
        }}
      />
    );
  };

  function _orientation(className: TClasses) {
    switch (className) {
      case 'main':
        return orientation === 'PORTRAIT'
          ? PTClasses.main
          : orientation === 'PORTRAITUPSIDEDOWN'
          ? LSClasses.main
          : orientation === 'LANDSCAPE'
          ? LSClasses.main
          : PTClasses.main;
      case 'wrapperBtns':
        return orientation === 'PORTRAIT'
          ? PTClasses.wrapperBtns
          : orientation === 'PORTRAITUPSIDEDOWN'
          ? LSClasses.wrapperBtns
          : orientation === 'LANDSCAPE'
          ? LSClasses.wrapperBtns
          : PTClasses.wrapperBtns;
      case 'wrapper':
        return orientation === 'PORTRAIT'
          ? PTClasses.wrapper
          : orientation === 'PORTRAITUPSIDEDOWN'
          ? LSClasses.wrapper
          : orientation === 'LANDSCAPE'
          ? LSClasses.wrapper
          : PTClasses.wrapper;
      default:
        break;
    }
  }

  return (
    <View style={_orientation('main')}>
      <View style={_orientation('wrapper')}>
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
        <View style={_orientation('wrapperBtns')}>
          {lang[1]?.actions?.map((i: string, k: number) => (
            <Button
              key={k}
              title={i}
              style={LSClasses.button}
              onPress={() => setFilterBy(i as IFilter)}
            />
          ))}
        </View>
      </View>
      <View style={_orientation('wrapper')}>
        <FlatList
          keyExtractor={i => i.id}
          renderItem={renderTasks}
          empty={lang[1]?.list?.empty}
          data={
            tasks
              ?.sort(
                (a, b) =>
                  (new Date(b.created_at) as any) -
                  (new Date(a.created_at) as any),
              )
              .filter(f =>
                filterBy === 'all'
                  ? f
                  : filterBy === 'completed'
                  ? f.completed
                  : !f.completed,
              ) || []
          }
        />
      </View>
    </View>
  );
}

const PTClasses = StyleSheet.create({
  main: {
    display: 'flex',
  },
  wrapper: {
    width: '100%',
  },
  wrapperBtns: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: Sizing.x30,
    justifyContent: 'space-between',
  },
  button: {
    width: '32%',
  },
});

const LSClasses = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapper: {
    width: '48%',
  },
  wrapperBtns: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: Sizing.x30,
    justifyContent: 'space-between',
  },
  button: {
    width: '32%',
  },
});

type TClasses = 'main' | 'wrapperBtns' | 'wrapper';

type IFilter = 'all' | 'active' | 'completed';
interface ITasks {
  label: string;
  completed: boolean;
  created_at: string;
  id: number | string;
}

export default withFetchFromLocalStorage(ToDo, cacheId);
