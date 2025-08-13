export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  icon: string;
  fullDescription: string;
  services: string[];
  experience: string;
  successRate: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialization: string;
  image: string;
  bio: string;
  experience: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  rating: number;
  case: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
}