import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import moment from 'moment';
import truncate from 'lodash/truncate';
import uniqBy from 'lodash/uniqBy';

// Custom Components
import {View, FlatList} from '../atoms';
import {Book, TitleWithInputAndButton} from '../organisms';

// Custom Hook
import {useLanguage} from '../providers';
import {withFetchFromLocalStorage} from '../HOC';

const cacheId = 'Book-Finder';
const apiKey = 'AIzaSyDw9UUJKx6-Fw6nx23vDw6f37sF85egczk';

function BookFinder({orientation}: any) {
  const {lang} = useLanguage();
  const [text, onChangeText] = useState('');
  const [books, setBooks] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pagination, setPagination] = useState(0);

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

  async function _handleFetch(reset?: boolean) {
    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${text}+startIndex=${pagination}&key=${apiKey}`,
      ).then(r => r.json());
      _merge(res, reset);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  }

  function _handlePagination() {
    setPagination(pagination + 1);
    if (pagination <= books?.items?.length) {
      _handleFetch(false);
    }
  }

  function _merge(res: any, reset?: boolean) {
    reset
      ? setBooks(res)
      : res?.items
      ? setBooks({
          ...res,
          items: uniqBy([...(books?.items || []), ...(res.items || [])], 'id'),
        })
      : setBooks({items: [], totalItems: 0});
  }

  return (
    <View style={_orientation('main')}>
      <View style={_orientation('wrapper')}>
        <TitleWithInputAndButton
          description={lang[3].description}
          actions={{
            input: {
              value: text,
              onChangeText,
              placeholder: lang[3].placeholder,
            },
            button: {
              isLoading,
              disabled: !text,
              title: lang[3].action,
              onPress: () => {
                setPagination(0);
                setIsLoading(true);
                _handleFetch(true);
              },
            },
          }}
        />
      </View>
      <FlatList
        data={books?.items || []}
        onEndReachedThreshold={0}
        style={PTClasses.flatList}
        keyExtractor={i => i?.id as any}
        onEndReached={() => _handlePagination()}
        empty={
          !text ? lang[3].empty : books?.items?.length ? '' : lang[3].notFound
        }
        renderItem={({item}) => (
          <Book
            title={item?.volumeInfo?.title || '-'}
            uri={
              item?.volumeInfo?.imageLinks?.smallThumbnail ||
              item?.volumeInfo?.imageLinks?.thumbnail
            }
            author={item?.volumeInfo?.authors?.toString() || '-'}
            published={
              item?.volumeInfo?.publishedDate
                ? moment(item?.volumeInfo?.publishedDate).calendar()
                : '-'
            }
            description={
              truncate(item?.volumeInfo?.description, {
                length: 200,
                separator: '...',
              }) || '-'
            }
          />
        )}
      />
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
  button: {
    width: '32%',
  },
  flatList: {
    marginTop: 10,
    marginBottom: 250,
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
  button: {
    width: '32%',
  },
});

type TClasses = 'main' | 'wrapperBtns' | 'wrapper';

export default withFetchFromLocalStorage(BookFinder, cacheId);
