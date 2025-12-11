import { Certification } from '../types';

export const certifications: Certification[] = [
   {
    id: "cert1",
    title: "Java Programming Basics",
    issuer: "HackerRank",
    year: "2024",
    badge_url: "assets/java.png",
    certificate_url: "https://www.hackerrank.com/certificates/iframe/25efc3feec92",
    tags: ["Core Java", "OOPS"]
  },
  {
    id: "cert2",
    title: "React (Basic)",
    issuer: "HackerRank",
    year: "2023",
    badge_url: "assets/react.png",
    certificate_url: "https://www.hackerrank.com/certificates/iframe/ab6c946e0d02",
    tags: ["Frontend Development", "React"]
  },
  {
    id: "cert3",
    title: "UI/UX Basics",
    issuer: "Simplilearn",
    year: "2024",
    badge_url: "assets/uiux.png",
    certificate_url: "#",
    tags: ["Design", "Prototyping"]
  },
  {
    id: "cert4",
    title: "Introduction to SQL",
    issuer: "Simplilearn",
    year: "2024",
    badge_url: "assets/sql.png",
    certificate_url: "#",
    tags: ["Database", "Backend"]
  },
 
];