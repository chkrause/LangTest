/* src/App.js */
import React, { useEffect, useContext } from 'react'
import { AmplifyAuthenticator, AmplifySignOut, AmplifySignIn, AmplifySignUp } from '@aws-amplify/ui-react';
import { LanguageSelect, I18nContext, ServiceBookForm } from './components';

const App = () => {
  const { I18n, langCode } = useContext(I18nContext);
  I18n.setLanguage(langCode);

  useEffect(() => {
  }, []);

  return (
    <div>
      <LanguageSelect />
      <button>{langCode}</button>
      <div>{I18n.get('documents.results')}</div>
      <AmplifyAuthenticator>
        <AmplifySignIn slot="sign-in" />
        <AmplifySignUp slot="sign-up"
          usernameAlias="email"
          formFields={[
            { type: "username" },
            { type: "password" },
            { type: "email" }
          ]} />
        <AmplifySignOut />
        <ServiceBookForm />
      </AmplifyAuthenticator>
    </div>
  );
}

export default App;