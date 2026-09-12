import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import viMessages from './locales/vi/messages.json';
import enMessages from './locales/en/messages.json';

const resources = {
    vi: {
        translation: viMessages
    },
    en: {
        translation: enMessages
    }
};

const savedLanguage = localStorage.getItem('language') || 'vi';

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: savedLanguage,
        fallbackLng: 'vi',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
