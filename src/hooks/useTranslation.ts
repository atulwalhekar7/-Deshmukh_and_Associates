import { useState, useEffect } from 'react';
import { LanguageController } from '../controllers/LanguageController';
import { getTranslation } from '../data/translations';

export const useTranslation = () => {
  const languageController = LanguageController.getInstance();
  const [language, setLanguage] = useState<'en' | 'mr'>(languageController.language);

  useEffect(() => {
    const unsubscribe = languageController.subscribe(setLanguage);
    return unsubscribe;
  }, [languageController]);

  const t = (key: string, replacements?: Record<string, string>) => {
    return getTranslation(key, language, replacements);
  };

  const toggleLanguage = () => {
    languageController.toggleLanguage();
  };

  return { t, language, toggleLanguage };
};