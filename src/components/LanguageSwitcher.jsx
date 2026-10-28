
import React from 'react';
import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';

const LanguageSwitcher = ({ className = "" }) => {
  const { language, setLanguage } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors border border-white/10 ${className}`}
      aria-label="Toggle Language"
    >
      <Globe className="w-4 h-4 text-white" />
      <div className="flex items-center text-xs font-bold text-white/80">
        <span className={`${language === 'en' ? 'text-white' : ''}`}>EN</span>
        <span className="mx-1.5 opacity-50">|</span>
        <span className={`font-['Cairo'] ${language === 'ar' ? 'text-[hsl(var(--accent-gold))] text-sm' : ''}`}>عربي</span>
      </div>
    </button>
  );
};

export default LanguageSwitcher;
