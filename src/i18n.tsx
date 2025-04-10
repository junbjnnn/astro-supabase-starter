import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import viTranslation from './locales/vi/translation.json';
import enTranslation from './locales/en/translation.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            vi: {
                translation: viTranslation
            },
            en: {
                translation: enTranslation
            }
        },
        fallbackLng: 'vi',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;