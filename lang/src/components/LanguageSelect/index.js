import React, { useContext } from "react";

import { I18nContext } from "../Translation";

export const LanguageSelect = props => {

  /* Another hook here: useContext will receive a Context
  and return anything provided in the Provider */
  const { dispatch, langCode } = useContext(I18nContext);

  /* We will dispatch an action to set the language with the
  value of <select /> component. This will also change the 
  translate method in the context to translate keys into 
  the language we select */
  const onLanguageClick = e => {
    dispatch({ type: "setLanguage", payload: e.target.getAttribute('value') });
  }
  /*
    const renderOption = code => (
      <option value={code} selected={code === langCode}>
        {code}
      </option>
    );
    const keys = Object.keys(translations)
  */
  const styles = {
    selected: { backgroundColor: '#ddd' },
    unselected: { backgroundColor: '#fff' }
  }

  return (
    <div>
      <div id='lang-deu' style={(langCode === 'deu') ? styles.selected : styles.unselected} onClick={onLanguageClick} value='deu'>deu</div>
      <div id='lang-eng' style={(langCode === 'eng') ? styles.selected : styles.unselected} onClick={onLanguageClick} value='eng'>eng</div>
      <div>{langCode}</div>
    </div>
  );
};

