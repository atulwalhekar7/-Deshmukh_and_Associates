export class LanguageController {
  private static instance: LanguageController;
  private currentLanguage: 'en' | 'mr' = 'en';
  private listeners: ((language: 'en' | 'mr') => void)[] = [];

  private constructor() {
    this.initializeLanguage();
  }

  static getInstance(): LanguageController {
    if (!LanguageController.instance) {
      LanguageController.instance = new LanguageController();
    }
    return LanguageController.instance;
  }

  private initializeLanguage() {
    const savedLanguage = localStorage.getItem('language') as 'en' | 'mr';
    this.currentLanguage = savedLanguage || 'en';
  }

  toggleLanguage = () => {
    this.currentLanguage = this.currentLanguage === 'en' ? 'mr' : 'en';
    localStorage.setItem('language', this.currentLanguage);
    this.notifyListeners();
  };

  setLanguage = (language: 'en' | 'mr') => {
    this.currentLanguage = language;
    localStorage.setItem('language', language);
    this.notifyListeners();
  };

  subscribe = (callback: (language: 'en' | 'mr') => void) => {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(listener => listener !== callback);
    };
  };

  private notifyListeners = () => {
    this.listeners.forEach(listener => listener(this.currentLanguage));
  };

  get language() {
    return this.currentLanguage;
  }
}