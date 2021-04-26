import React, {useState, useEffect} from 'react';
import Orientation from 'react-native-orientation';

interface IOrientation {
  orientation: OrientationProps;
}

type OrientationProps =
  | 'PORTRAIT'
  | 'UNKNOWN'
  | 'LANDSCAPE-LEFT'
  | 'LANDSCAPE-RIGHT'
  | 'PORTRAITUPSIDEDOWN';

export default function WithOrientationComponent<P>(
  WrappedComponent: React.ComponentType<P & IOrientation>,
) {
  const withOrientation = (props: P) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [orientation, setOrientation] = useState<OrientationProps>(
      'PORTRAIT',
    );

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      const _orientationDidChange = (o: string) => {
        setOrientation(o as OrientationProps);
      };
      Orientation.addOrientationListener(_orientationDidChange);
      return () => {
        Orientation.removeOrientationListener(_orientationDidChange);
      };
    }, []);

    return <WrappedComponent {...props} orientation={orientation} />;
  };
  return withOrientation;
}
