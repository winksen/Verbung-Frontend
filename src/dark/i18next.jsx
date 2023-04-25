// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './TR/translationEN.json';
import translationFR from './TR/translationFR.json';

const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;