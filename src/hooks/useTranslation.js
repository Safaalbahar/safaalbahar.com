
import { useContext } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

export const useTranslation = () => {
  const { language, isArabic, setLanguage } = useContext(LanguageContext);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        // Fallback to English if translation is missing
        let fallback = translations['en'];
        for (const fk of keys) {
          if (fallback && fallback[fk]) {
            fallback = fallback[fk];
          } else {
            return key; // Return key if entirely missing
          }
        }
        return fallback;
      }
    }
    return value;
  };

  return { t, language, isArabic, setLanguage };
};
