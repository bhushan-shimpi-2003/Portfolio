import { Project } from '../types';

export const projects: Project[] = [
  {
    id: "p1",
    title: "RapidRescue Ambulance",
    short_summary: "Emergency ambulance booking system built with Java servlets.",
    long_description: "RapidRescue is a GPS-enabled real-time tracking and intelligent dispatch module using Java Servlets and JSP, reducing average wait time through optimized route and allocation logic.",
    tech_stack: ["Java", "JSP", "Servlets", "MySQL", "Bootstrap"],
    year: "2024",
    role: "Backend Developer",
    highlights: [
      "Reduced booking latency by 40% using optimized SQL queries.",
      "Implemented role-based authentication for Drivers, Users, and Admins.",
      "Designed a clean JSP-based dashboard for dispatch management."
    ],
    links: {
   
    },
    images: ["../rapidrescue1.png", "../rapidrescue2.png"]
  },
  {
    id: "p2",
    title: "JobGenie AI Interviewer",
    short_summary: "AI-powered mock interviewer and job prep platform.",
    long_description: "JobGenie helps job seekers prepare for interviews by simulating real-world technical questions using AI. It features a MERN stack architecture with an integrated AI model to analyze user responses and provide constructive feedback.",
    tech_stack: ["MongoDB", "Express.js", "React", "Node.js", "OpenAI API"],
    year: "2025",
    role: "Full Stack Developer",
    highlights: [
      "Integrated OpenAI API to generate dynamic interview questions.",
      "Built a responsive React frontend with real-time feedback UI.",
      "Implemented JWT authentication and secure user data storage."
    ],
    links: {
      github: "",
      demo: "https://jobgenie-demo.vercel.app"
    },
    images: ["../jobgenie.png", "https://picsum.photos/800/450?random=4"]
  },
  {
    id: "p3",
    title: "Yang75Year2k",
    short_summary: "Modern redesign of a legacy event website.",
    long_description: "A complete overhaul of an existing community event website. The project focused on improving UX/UI, accessibility, and mobile responsiveness, resulting in a significant increase in user engagement and session duration.",
    tech_stack: ["React", "Tailwind CSS", "Shopify"],
    year: "2025",
    role: "Web Developer",
    highlights: [
      "Created and customized responsive websites using Wix.",
      "Improved UI elements to enhance user engagement.",
      "Collaborated using Agile methodology to deliver features on time."
    ],
    links: {
      github: "",
      demo: "https://yang75year2k.com/"
    },
    images: ["../yang.png", "../yang75year2k2.png"]
  }
];