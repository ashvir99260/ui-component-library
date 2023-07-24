import React, { ReactNode, useEffect } from 'react';
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';

// Import translation files
import enTranslation from '../locales/en/translation.json';
import frTranslation from '../locales/fr/translation.json';

i18n.init({
  debug: true,
  fallbackLng: 'en',
  ns: ['ui'],
  defaultNS: 'ui',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: { ui: enTranslation },
    fr: { ui: frTranslation },
  },
});

interface AppProviderProps {
  children: ReactNode;
  lang: string;
}

const AppProvider: React.FC<AppProviderProps> = ({ children, lang }) => {
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default AppProvider;
