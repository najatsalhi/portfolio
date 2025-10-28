
import type { Experience, Project, SkillCategory, Certification, Education } from './types';

export const personalInfo = {
  name: "Najat Salhi",
  title: "Élève Ingénieure en Management et Gouvernance des Systèmes d'Information",
  profile: "Actuellement étudiante en 5ème année en Management et Gouvernance des Systèmes d'Information à l'ENSA d'Oujda, je suis à la recherche d'un stage de fin d'études d'une durée minimale de 4 mois, à partir de février 2026. Passionnée par le domaine des systèmes d'information et des nouvelles technologies, je souhaite mettre en pratique mes connaissances, approfondir mes compétences techniques et contribuer à des projets innovants dans un environnement professionnel stimulant.",
  contact: {
    phone: "0687501919",
    email: "najatsalhi2025@gmail.com",
    linkedin: "https://linkedin.com/in/najat-salhi",
    github: "https://github.com/najatsalhi",
    location: "Oujda, Maroc (Mobilité nationale)"
  },
  cvUrl: "/najat-salhi-cv.pdf"
};

export const educationData: Education[] = [
    {
        degree: "Cycle Ingénieur",
        institution: "École Nationale des Sciences Appliquées, Oujda",
        period: "2023 - 2026",
        details: "Filière: Management et Gouvernance des Systèmes d'Information (MGSI)"
    },
    {
        degree: "Cycle préparatoire intégré",
        institution: "École Nationale des Sciences Appliquées, Oujda",
        period: "2021 - 2023",
        details: ""
    },
    {
        degree: "Baccalauréat science physiques",
        institution: "Lycée IBNOU ZOHR, Beni Drar",
        period: "2019 - 2020",
        details: ""
    }
];

export const professionalExperiences: Experience[] = [
  {
    role: "Stage d'application | IA / Machine Learning appliqué à la santé",
    company: "Centre Hospitalier Universitaire (CHU) d'Oujda",
    period: "Juillet - Août 2025",
    description: "Développement d'une application web de diagnostic médical intelligent avec analyse automatique des symptômes.",
    technologies: ["Python", "Flask", "CatBoost", "HTML/CSS", "JavaScript", "Git/GitHub"],
  },
  {
    role: "Stage d'initiation | Développement Web Full-Stack",
    company: "Préfecture d'Oujda-Angad",
    period: "Juillet - Août 2024",
    description: "Conception et développement d'une application web pour la gestion d'un parc automobile et des stocks.",
    technologies: ["React.js", "Node.js", "SQL", "Git/GitHub"],
  },
];

export const academicProjects: Project[] = [
  {
    title: "Analyse de sentiments avec Machine Learning",
    context: "Projet PFA | Filière MGSI, ENSAO",
    period: "Mars - Juin 2025",
    description: "Conception et Développement d'une application d'IA utilisant le NLP et un modèle LSTM pour classifier automatiquement les avis clients (positif, négatif, neutre) via une interface web Streamlit.",
    technologies: ["Python", "NLP", "LSTM", "Streamlit"],
  },
  {
    title: "Système d'Information de Gestion des Stages",
    context: "Projet | Filière MGSI",
    period: "Décembre 2024",
    description: "Développement d'un Système d'Information de Gestion des Stages pour l'École Nationale des Sciences Appliquées (ENSA) avec Odoo.",
    technologies: ["Odoo", "Python", "XML", "PostgreSQL"],
  },
  {
    title: "Hackathon - Design Thinking et Innovation",
    context: "Événement | Filière MGSI, ENSAO",
    period: "Novembre 2024",
    description: "Participation à un hackathon de 2 jours pour concevoir une solution numérique innovante via Design Thinking et Lean Startup.",
    technologies: ["Balsamiq", "Figma", "Business Model Canvas"],
  },
  {
    title: "Site web de gestion de courriers",
    context: "Projet | Filière MGSI, ENSAO",
    period: "Mars 2024",
    description: "Conception et développement d'une plateforme web pour la gestion des courriers.",
    technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
  },
];

export const skillsData: SkillCategory[] = [
  {
    title: "Langages de Programmation",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "SQL", level: 80 },
      { name: "HTML/CSS", level: 95 },
      { name: "C", level: 70 },
    ],
  },
  {
    title: "Frameworks & Librairies",
    skills: [
      { name: "React.js", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Flask", level: 75 },
      { name: "CatBoost", level: 70 },
    ],
  },
  {
      title: "Gouvernance & Management SI",
      skills: [
          { name: "COBIT", level: 80 },
          { name: "ITIL", level: 75 },
          { name: "ISO 27001", level: 70 },
          { name: "Scrum", level: 85 },
      ],
  },
  {
    title: "Outils & Technologies",
    skills: [
      { name: "Odoo (ERP)", level: 80 },
      { name: "Power BI", level: 75 },
      { name: "Talend (ETL)", level: 70 },
      { name: "MySQL", level: 85 },
      { name: "UML", level: 90 },
      { name: "Git/GitHub", level: 90 },
      { name: "Salesforce", level: 65 },
    ],
  },
];

export const certificationsData: Certification[] = [
    {
        title: "NumPy, Pandas & Python for Data Analysis",
        issuer: "Udemy",
        date: "Mai 2025"
    },
    {
        title: "Build a Webpage with HTML and CSS",
        issuer: "Coursera",
        date: "Mars 2024"
    }
];

export const softSkills: string[] = [
    "Esprit d'équipe",
    "Résolution de problèmes",
    "Gestion du temps",
    "Autonomie",
    "Flexibilité et adaptabilité",
    "Créativité"
];

export const languages: {lang: string, level: string}[] = [
    {lang: "Anglais", level: "Intermédiaire"},
    {lang: "Français", level: "Intermédiaire"},
    {lang: "Arabe", level: "Langue maternelle"},
];
