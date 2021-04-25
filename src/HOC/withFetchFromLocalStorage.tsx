import React, {useState, useEffect} from 'react';
import {_get} from '../functions';

type ExtraProps = {
  initialData: any;
};

export default function withFetchFromLocalStorageComponent<P>(
  WrappedComponent: React.ComponentType<P & ExtraProps>,
  id: string,
) {
  const withFetchFromLocalStorage = (props: P) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState(null);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      _fetch();
    }, []);

    async function _fetch() {
      try {
        const localStorage = await _get(id);
        setData(localStorage);
      } catch (error) {
        console.error(error);
      }
    }
    return <WrappedComponent {...props} initialData={data} />;
  };
  return withFetchFromLocalStorage;
}
