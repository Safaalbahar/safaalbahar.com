import { useContext } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  
  const { language, toggleLanguage, isRTL } = context;
  const t = translations[language];
  
  return { language, toggleLanguage, isRTL, t };
};