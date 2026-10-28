
import React, { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('safa-language');
    if (saved) return saved;
    // Auto-detect browser language
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith('ar') ? 'ar' : 'en';
  });

  const isArabic = language === 'ar';

  useEffect(() => {
    localStorage.setItem('safa-language', language);
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isArabic]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isArabic }}>
      {children}
    </LanguageContext.Provider>
  );
};
