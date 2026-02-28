import { translations } from './translations';

export type Locale = 'es' | 'en' | 'pt' | 'it';

export const getDictionary = (locale: Locale) => {
    return translations[locale] || translations['es'];
};
