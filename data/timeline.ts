export interface EducationItem {
  year: string;
  degree: string;
  institution: string;
  details: string;
  score: string | null;
}

export interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  duration: string;
  desc: string;
}

export const educationData: EducationItem[] = [
  {
    year: "2024 - Present",
    degree: "Master of Computer Applications",
    institution: "Indira College of Engineering & Management",
    details: "Expected Graduation: 2026",
    score: null
  },
  {
    year: "2021 - 2024",
    degree: "Bachelor of Computer Applications",
    institution: "North Maharashtra University",
    details: "Graduated with Distinction",
    score: "CGPA: 9.21/10"
  },
  {
    year: "2019 - 2021",
    degree: "Higher Secondary Certificate",
    institution: "Maharashtra State Board",
    details: "Science Stream",
    score: "84.40%"
  },
  {
    year: "2019",
    degree: "Secondary School Certificate",
    institution: "NMV School, Chunchale",
    details: "General Education",
    score: "76.60%"
  }
];

export const experienceData: ExperienceItem[] = [
  {
    year: "2025",
    role: "Frontend Developer",
    company: "Yang75Year2k",
    duration: "Feb 2025- Mar 2025",
    desc: "Revamped legacy event website with React & Tailwind, improving UX and accessibility scores by 30%."
  }
];