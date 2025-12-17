import { Course, ProjectCategory, ServiceItem } from './types';
import * as Icons from 'lucide-react';

export const COMPANY_NAME = "AI Insight Labz";
export const TAGLINE = "Empowering Skills, Projects & Innovations";
export const PHONE_NUMBER = "+91 90145 55370";
export const EMAIL_ADDRESS = "anilaiinsightlabz@gmail.com";
export const ADDRESS = "Benz Circle, Vijayawada";

export const COURSES: Course[] = [
  {
    id: "java-fs",
    title: "Java Full Stack",
    overview: "Master backend and frontend development with Java, Spring Boot, React, and MySQL.",
    duration: "6 Months",
    technologies: ["Java", "Spring Boot", "React", "Hibernate", "MySQL"]
  },
  {
    id: "python-fs",
    title: "Python Full Stack",
    overview: "Comprehensive training in Python, Django/Flask, and modern frontend frameworks.",
    duration: "5 Months",
    technologies: ["Python", "Django", "Flask", "JavaScript", "PostgreSQL"]
  },
  {
    id: "ai-ml",
    "title": "AI & Machine Learning",
    overview: "Deep dive into algorithms, neural networks, and predictive modeling using Python.",
    duration: "6 Months",
    technologies: ["Python", "TensorFlow", "Pandas", "Scikit-Learn", "Keras"]
  },
  {
    id: "data-science",
    title: "Data Science",
    overview: "Learn to analyze complex data sets and derive actionable insights for business.",
    duration: "5 Months",
    technologies: ["Python", "R", "Tableau", "SQL", "Statistics"]
  },
  {
    id: "web-dev",
    title: "Web Development",
    overview: "Build responsive websites from scratch using HTML5, CSS3, and JavaScript.",
    duration: "3 Months",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Git"]
  }
];

export const PROJECTS: ProjectCategory[] = [
  {
    category: "AI / ML",
    titles: [
      "Smart Traffic Management System using Computer Vision",
      "Disease Prediction using Machine Learning",
      "Fake News Detection using NLP",
      "Customer Churn Prediction for Telecom"
    ]
  },
  {
    category: "Java",
    titles: [
      "E-Commerce Platform with Microservices",
      "Online Banking System",
      "Hospital Management System",
      "Library Management System"
    ]
  },
  {
    category: "Python",
    titles: [
      "Automated Stock Trading Bot",
      "Student Attendance System via Face Recognition",
      "Voice Assistant for Desktop",
      "Weather Forecasting App"
    ]
  },
  {
    category: "Web Development",
    titles: [
      "Real-estate Management Portal",
      "Online Food Ordering System",
      "Portfolio Generator Tool",
      "Collaborative Task Manager"
    ]
  },
  {
    category: "IoT",
    titles: [
      "Smart Home Automation System",
      "IoT Based Health Monitoring System",
      "Smart Agriculture System",
      "Garbage Monitoring System"
    ]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Mini & Major Projects",
    description: "Expert guidance for academic projects.",
    icon: Icons.Code,
    features: ["B.Tech / M.Tech / MCA", "AI, ML, Java, Python", "IEEE Standards", "Real-time Scenarios"]
  },
  {
    title: "Online Trainings",
    description: "Industry-standard skill development courses.",
    icon: Icons.Monitor,
    features: ["Java Full Stack", "Python Full Stack", "AI / ML & Data Science", "Cloud Computing Basics"]
  },
  {
    title: "Training & Placements",
    description: "Bridging the gap between campus and corporate.",
    icon: Icons.Briefcase,
    features: ["Job-oriented Curriculum", "Resume Building", "Mock Interviews", "Placement Tie-ups"]
  },
  {
    title: "Corporate Training",
    description: "Upskilling workforce for better productivity.",
    icon: Icons.Users,
    features: ["Custom Training Programs", "Technology Workshops", "Leadership Seminars", "Hands-on Sessions"]
  },
  {
    title: "App & Web Development",
    description: "End-to-end software solutions for business.",
    icon: Icons.Laptop,
    features: ["Responsive Websites", "Full-stack Applications", "Mobile Apps (Android/iOS)", "Maintenance & Support"]
  },
  {
    title: "Consultancy Services",
    description: "Strategic academic and recruitment partnerships.",
    icon: Icons.Building,
    features: ["College FDPs", "Campus Recruitment Training", "Technical Consultancy", "Guest Lectures"]
  }
];