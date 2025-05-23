import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ar from './locales/ar.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ar: {
        translation: ar
      }
    },
    lng: 'ar', // Set Arabic as the fixed language
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;