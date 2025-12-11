export interface Project {
  id: string;
  title: string;
  short_summary: string;
  long_description: string;
  tech_stack: string[];
  year: string;
  role: string;
  highlights: string[];
  links: {
    demo?: string;
    github?: string;
  };
  images: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  badge_url: string;
  certificate_url: string;
  tags: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  path: string;
}