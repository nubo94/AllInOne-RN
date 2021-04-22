import React, {createContext, useContext} from 'react';
import language from '../translations';

export const LanguageContext = createContext<IContextProps>({lang: null});
export const LanguageProvider = ({children}: ILanguageProps) => {
  return (
    <LanguageContext.Provider value={{lang: language.en[0]}}>
      {children}
    </LanguageContext.Provider>
  );
};

// Convert Context to custom hook
export const useLanguage = () => useContext(LanguageContext);

interface ILanguageProps {
  children: JSX.Element[] | JSX.Element;
}

type IContextProps = {
  lang: any;
};
