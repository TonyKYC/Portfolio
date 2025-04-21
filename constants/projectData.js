import renwuLogo from "/app/assets/covers/renwu-cover.png";
import carrefourLogo from "/app/assets/covers/carrefour-cover.png";
import rasLogo from "/app/assets/covers/ras-cover.png";
import zolLogo from "/app/assets/covers/zol-cover.png";
import vivlioLogo from "/app/assets/covers/vivlio-cover.png";
import thalesLogo from "/app/assets/covers/thales-cover.png";
import kentLogo from "/app/assets/covers/kent-cover.png";
import hecLogo from "/app/assets/covers/hec-cover.png";
import epitechLogo from "/app/assets/covers/epitech-cover.png";

const projects = [
  {
    name: "Founder & Fullstack Developer",
    company: "RENWU",
    year: "2025 - Present",
    details:
      "World's first autonomous AI-powered platform for project management.",
    description:
      "World's first autonomous AI-powered platform for project management.",
    image: renwuLogo,
    imageAlt: "Renwu logo",
    longDescription:
      "Leading the development of an innovative AI-powered project management platform, focusing on autonomous decision-making and workflow optimization.",
    status: "In Progress",
    challenges:
      "Building a complex AI system that can understand and manage project workflows autonomously while maintaining user trust and system reliability.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "AI/ML",
      "Python",
      "Node.js",
    ],
    role: "Founder & Technical Lead",
    duration: "Ongoing",
    achievements: [
      "Developing state-of-the-art AI algorithms for project management",
      "Building a scalable and robust architecture",
      "Leading product strategy and development",
    ],
  },
  {
    name: "Agile Coach",
    company: "Carrefour",
    year: "2023 - 2024",
    details:
      "Scrum, Kanban and SAFe • RTE for 6 ARTs • Jira Admin • Coaching newcomers to agility.",
    description:
      "Scrum, Kanban and SAFe • RTE for 6 ARTs • Jira Admin • Coaching newcomers to agility.",
    image: carrefourLogo,
    imageAlt: "Carrefour logo",
    longDescription:
      "Implemented scaled agility using the SAFe framework across 20 teams (250 people) with the help of an agile community composed of 5 Scrum Masters, 1 RTE and a organizational coach.",
    status: "Completed",
    challenges:
      "Coordinating large-scale agile transformation across multiple teams while maintaining productivity and team morale.",
    technologies: ["SAFe", "Scrum", "Kanban", "Jira", "Confluence"],
    role: "Release Train Engineer (RTE) & Agile Coach",
    duration: "1 year",
    achievements: [
      "Implemented scaled agility for 250 people",
      "Streamlined project workflows, enhancing efficiency by more than 100%",
      "Led multiple teams in delivering complex engineering projects on time and within budget",
    ],
  },
  {
    name: "Agile Coach",
    company: "RAS Interim",
    year: "2022 - 2023",
    details:
      "Implemented agility (Scrum, Kanban) within 2 companies simultaneously over a joint project.",
    description:
      "Implemented agility (Scrum, Kanban) within 2 companies simultaneously over a joint project.",
    image: rasLogo,
    imageAlt: "RAS Interim",
    longDescription:
      "Successfully managed dual-company agile implementation, focusing on Product Management and development team efficiency.",
    status: "Completed",
    challenges:
      "Coordinating agile practices across two different company cultures while maintaining alignment and productivity.",
    technologies: ["Scrum", "Kanban", "Jira", "Agile Coaching"],
    role: "Agile Coach",
    duration: "1 year",
    achievements: [
      "Coached Product Managers improving feature delivery rate by 200%",
      "Increased developer productivity from 20% to 80% dedicated work time",
      "Successfully implemented cross-company agile practices",
    ],
  },
  {
    name: "Agile Coach",
    company: "ZoL",
    year: "2022 - 2023",
    details:
      "Implemented agility (Scrum, Kanban) within 2 companies simultaneously over a joint project.",
    description:
      "Implemented agility (Scrum, Kanban) within 2 companies simultaneously over a joint project.",
    image: zolLogo,
    imageAlt: "ZOL logo",
    longDescription:
      "Successfully managed dual-company agile implementation, focusing on Product Management and development team efficiency.",
    status: "Completed",
    challenges:
      "Coordinating agile practices across two different company cultures while maintaining alignment and productivity.",
    technologies: ["Scrum", "Kanban", "Jira", "Agile Coaching"],
    role: "Agile Coach",
    duration: "1 year",
    achievements: [
      "Coached Product Managers improving feature delivery rate by 200%",
      "Increased developer productivity from 20% to 80% dedicated work time",
      "Successfully implemented cross-company agile practices",
    ],
  },
  {
    name: "Scrum Master",
    company: "Vivlio",
    year: "2021 - 2022",
    details:
      "Implemented agility across the entire IT department within multicultural teams.",
    description:
      "Implemented agility across the entire IT department within multicultural teams.",
    image: vivlioLogo,
    imageAlt: "Vivlio logo",
    longDescription:
      "Led agile transformation across IT department, focusing on multicultural team integration and process improvement.",
    status: "Completed",
    challenges:
      "Managing cultural differences and timezone challenges while maintaining team cohesion and productivity.",
    technologies: ["Scrum", "Kanban", "Agile Coaching", "Jira"],
    role: "Scrum Master",
    duration: "1 year",
    achievements: [
      "Implemented agility across entire IT department",
      "Improved on-time delivery and quality",
      "Collaborated with Engineering Manager to create processes for scaling environment (x7)",
    ],
  },
  {
    name: "Software Engineer",
    company: "THALES",
    year: "2019 - 2021",
    details: "Developed state-of-the-art software used for military purposes.",
    description:
      "Developed state-of-the-art software used for military purposes.",
    image: thalesLogo,
    imageAlt: "Thales logo",
    longDescription:
      "Combined software engineering with Scrum Master responsibilities, developing military-grade applications while ensuring agile practices.",
    status: "Completed",
    challenges:
      "Balancing security requirements with agile development practices in a military context.",
    technologies: [
      "ReactJS",
      "Web Ecosystem",
      "Agile Methodologies",
      "Military-grade Security",
    ],
    role: "Software Engineer & Scrum Master",
    duration: "2 years",
    achievements: [
      "Developed state-of-the-art military software",
      "Strengthened ReactJS and web ecosystem expertise",
      "Enhanced cross-functional team collaboration",
    ],
  },

  {
    name: "Computing & Entrepreneurship",
    company: "University of Kent",
    year: "2017 - 2018",
    details:
      "Top European University for Entrepreneurship and Computer Science",
    description:
      "Top European University for Entrepreneurship and Computer Science",
    image: kentLogo,
    imageAlt: "University of Kent logo",
    longDescription:
      "Specialized in Business Development within IT industry, culminating in innovative thesis project.",
    status: "Completed",
    technologies: [
      "Business Development",
      "Computer Science",
      "Haptic Technology",
    ],
    role: "Master's Student",
    duration: "1 year",
    achievements: [
      "Specialized in Business Development for IT",
      "Developed thesis on haptic gloves for sign language translation",
      "Combined technical and business expertise",
    ],
  },
  {
    name: "Digital Transformation & Consulting",
    company: "HEC Paris",
    year: "2017",
    details: "World best university for Management",
    description: "World best university for Management",
    image: hecLogo,
    imageAlt: "HEC Paris logo",
    longDescription:
      "Specialized certification in Digital Transformation and Strategy from world-renowned management institution.",
    status: "Completed",
    technologies: ["Digital Strategy", "Business Transformation", "Management"],
    role: "Certificate Student",
    duration: "1 year",
    achievements: [
      "Specialized in Digital Transformation & Strategy",
      "Learned from world-class management experts",
      "Developed strategic thinking in digital context",
    ],
  },
  {
    name: "Master Computer Science",
    company: "EPITECH",
    year: "2015 - 2019",
    details: "Best European University of Software Engineering and Technology",
    description:
      "Best European University of Software Engineering and Technology",
    image: epitechLogo,
    imageAlt: "EPITECH logo",
    longDescription:
      "Completed comprehensive computer science education with specialization in C/C++ programming.",
    status: "Completed",
    technologies: ["C/C++", "Software Engineering", "Algorithm Design"],
    role: "Student",
    duration: "4 years",
    achievements: [
      "Specialized in C/C++ programming",
      "Developed strong foundation in software engineering",
      "Participated in numerous practical projects",
    ],
  },
];

export default projects;
