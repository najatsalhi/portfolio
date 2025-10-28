
export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Project {
  title: string;
  context: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
    details: string;
}
