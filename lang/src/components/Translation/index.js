import React, { useReducer } from 'react';

import { I18n } from 'aws-amplify'

import eng from './languages/eng.json.js';
import deu from './languages/deu.json.js';

const translations   = { eng, deu };
const languageCodes = [];
Object.keys(translations  ).forEach(element => {
  languageCodes.push(translations[element]['countryCode']);
});

// This function will be used to create `translate` function for the context
I18n.putVocabularies(translations);

const initialState = {
  'I18n': I18n,
  translations: translations,
  langCode: "deu",
};

export const I18nContext = React.createContext(initialState);

export const I18nContextProvider = ({ children }) => {
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "setLanguage":
        return {
          'I18n': I18n,
          translations: translations,
          langCode: action.payload,
        };
      default:
        return { ...initialState };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <I18nContext.Provider value={{ ...state, dispatch }}>
      {children}
    </I18nContext.Provider>
  );
};