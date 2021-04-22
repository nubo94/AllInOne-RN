import React from 'react';
import {View as VW, ViewProps} from 'react-native';

interface IViewProps extends ViewProps {
  children: JSX.Element[] | JSX.Element;
}

const View = ({children, ...props}: IViewProps) => {
  return <VW {...props}>{children}</VW>;
};

export default View;
