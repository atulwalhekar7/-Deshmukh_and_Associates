export class ThemeController {
  private static instance: ThemeController;
  private isDarkMode: boolean = true;

  private constructor() {
    this.initializeTheme();
  }

  static getInstance(): ThemeController {
    if (!ThemeController.instance) {
      ThemeController.instance = new ThemeController();
    }
    return ThemeController.instance;
  }

  private initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark' || (!savedTheme && true);
    this.applyTheme();
  }

  toggleTheme = () => {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  };

  private applyTheme() {
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  get currentTheme() {
    return this.isDarkMode ? 'dark' : 'light';
  }

  get isDark() {
    return this.isDarkMode;
  }
}