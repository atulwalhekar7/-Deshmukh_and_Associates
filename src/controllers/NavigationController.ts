import { NavigateFunction } from 'react-router-dom';

export class NavigationController {
  private navigate: NavigateFunction;

  constructor(navigate: NavigateFunction) {
    this.navigate = navigate;
  }

  goToHome = () => {
    this.navigate('/');
  };

  goToAbout = () => {
    this.navigate('/about');
  };

  goToPracticeArea = (areaId: string) => {
    this.navigate(`/practice-areas/${areaId}`);
  };

  goToTeam = () => {
    this.navigate('/team');
  };

  goToContact = () => {
    this.navigate('/contact');
  };

  scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
}