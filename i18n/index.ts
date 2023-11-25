import 'intl-pluralrules';
import i18n, { LanguageDetectorAsyncModule, Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';
import zh from './zh';
import en from './en';
import { getLocales } from 'react-native-localize';

const locales = getLocales();
const resources: Resource = {
  zh,
  en,
};

export function getRegion() {
  if (locales.length > 0) {
    return locales[0].countryCode.toLowerCase();
  } else {
    return 'cn';
  }
}

export function getLanguage() {
  if (locales.length > 0) {
    return locales[0].languageCode.toLowerCase();
  } else {
    return 'en';
  }
}

const langDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  detect: (cb: (lng: string) => void) => {
    cb(getLanguage());
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(initReactI18next)
  .use(langDetector)
  .init({
    debug: true,
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
