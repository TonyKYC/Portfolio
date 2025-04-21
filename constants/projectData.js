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
  // Renwu
  {
    name: "Founder & Fullstack Developer",
    company: "Renwu",
    year: "2025 - Present",
    title: "Autonomous AI-powered platform for project management.",
    image: renwuLogo,
    imageAlt: "Renwu logo",
    details:
      "Spearheading the development of RENWU, an innovative platform that leverages advanced AI algorithms to automate project management workflows. The platform focuses on intelligent task allocation, predictive analytics, and autonomous decision-making to optimize project delivery and team efficiency.",
    status: "In Development",
    challenges:
      "Developing sophisticated AI algorithms that can accurately interpret project complexities and make reliable decisions, while ensuring seamless integration with existing project management methodologies and maintaining high standards of data security.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Zod",
      "ShadcnUI",
      "Supabase",
      "PostgresSQL",
      "Vercel",
      "AI",
    ],
    role: "Founder & Technical Lead",
    duration: "Ongoing",
    achievements: [
      "Developing state-of-the-art AI algorithms for project management",
      "Building a scalable and robust architecture",
      "Leading product strategy and development",
    ],
  },
  // Carrefour
  {
    name: "Agile Coach",
    company: "Carrefour",
    year: "2023 - 2024",
    title:
      "Scrum, Kanban and SAFe • RTE for 6a ARTs • Jira Admin • Coaching newcomers to agility.",
    image: carrefourLogo,
    imageAlt: "Carrefour logo",
    details:
      "Led a comprehensive agile transformation initiative at Carrefour, orchestrating the implementation of SAFe framework across 20 teams comprising 250 people. Established and mentored an agile community of practice, including 5 Scrum Masters and 1 RTE, while providing strategic guidance for organizational change management and process optimization.",
    status: "Completed",
    challenges:
      "Orchestrating a large-scale agile transformation across diverse business units while maintaining operational efficiency, managing cultural change resistance, and ensuring consistent delivery quality across all teams.",
    technologies: [
      "SAFe",
      "Scrum",
      "Kanban",
      "Jira",
      "Confluence",
      "Agile Coaching",
      "Miro",
      "CI/CD",
      "Documentation",
      "Scalability",
      "Agile Transformation",
    ],
    role: "Release Train Engineer (RTE) & Agile Coach",
    duration: "1 year",
    achievements: [
      "Implemented scaled agility for 250 people",
      "Streamlined project workflows, enhancing efficiency by more than 100%",
      "Led multiple teams in delivering complex engineering projects on time and within budget",
    ],
  },
  // RAS Interim
  {
    name: "Agile Coach",
    company: "RAS Interim",
    year: "2022 - 2023",
    title:
      "Implemented agility (Scrum, Kanban) within 2 companies simultaneously over a joint project.",
    image: rasLogo,
    imageAlt: "RAS Interim",
    details:
      "Orchestrated a unique dual-company agile transformation, implementing Scrum and Kanban methodologies across both organizations. Focused on optimizing Product Management processes and enhancing development team efficiency through standardized practices while maintaining each company's unique operational requirements.",
    status: "Completed",
    challenges:
      "Harmonizing different organizational cultures, aligning disparate business processes, and establishing unified agile practices while respecting each company's unique identity and requirements.",
    technologies: [
      "Scrum",
      "Kanban",
      "Jira",
      "Confluence",
      "Agile Coaching",
      "Miro",
      "CI/CD",
      "Documentation",
      "Scalability",
      "Agile Transformation",
    ],
    role: "Agile Coach",
    duration: "1 year",
    achievements: [
      "Coached Product Managers improving feature delivery rate by 200%",
      "Increased developer productivity from 20% to 80% dedicated work time",
      "Successfully implemented cross-company agile practices",
    ],
  },
  // ZoL
  {
    name: "Agile Coach",
    company: "ZoL",
    year: "2022 - 2023",
    title:
      "Implemented agility (Scrum, Kanban) within 2 companies simultaneously over a joint project.",
    image: zolLogo,
    imageAlt: "ZOL logo",
    details:
      "Managed a complex agile transformation project involving simultaneous implementation across two partner companies. Established cross-functional teams, implemented standardized agile ceremonies, and developed metrics-driven performance tracking systems to ensure successful collaboration and delivery.",
    status: "Completed",
    challenges:
      "Navigating complex inter-company dynamics while implementing consistent agile practices, managing stakeholder expectations across organizations, and establishing effective cross-team communication channels.",
    technologies: [
      "Scrum",
      "Kanban",
      "Jira",
      "Agile Coaching",
      "CI/CD",
      "Documentation",
      "Scalability",
      "Agile Transformation",
    ],
    role: "Agile Coach",
    duration: "1 year",
    achievements: [
      "Coached Product Managers improving feature delivery rate by 200%",
      "Increased developer productivity from 20% to 80% dedicated work time",
      "Successfully implemented cross-company agile practices",
    ],
  },
  // Vivlio
  {
    name: "Scrum Master",
    company: "Vivlio",
    year: "2021 - 2022",
    title:
      "Implemented agility across the entire IT department within multicultural teams.",
    image: vivlioLogo,
    imageAlt: "Vivlio logo",
    details:
      "Drove comprehensive agile transformation across Vivlio's IT department, focusing on integrating diverse multicultural teams. Implemented tailored agile practices that accommodated different working styles and time zones while establishing standardized processes for consistent delivery and collaboration. Developed scalable processes and infrastructure to support 5x company growth, including automated CI/CD pipelines, documentation standards, and team structure blueprints.",
    status: "Completed",
    challenges:
      "Bridging cultural gaps and time zone differences while maintaining team cohesion, implementing standardized agile practices across diverse teams, and ensuring effective communication in a multicultural environment. Designing processes that would remain effective at 5x scale while maintaining agility.",
    technologies: [
      "Scrum",
      "Kanban",
      "Agile Coaching",
      "Jira",
      "Confluence",
      "Miro",
      "CI/CD",
      "Documentation",
      "Scalability",
      "Agile Transformation",
      "Multicultural Teams",
    ],
    role: "Scrum Master",
    duration: "1 year",
    achievements: [
      "Implemented agility across entire IT department",
      "Improved on-time delivery and quality",
      "Collaborated with Engineering Manager to create processes for scaling environment",
      "Established scalable infrastructure and processes to support 5x growth",
      "Created team structure templates and documentation standards for scale",
    ],
  },
  // Thales
  {
    name: "Software Engineer",
    company: "THALES",
    year: "2019 - 2021",
    title: "Developed state-of-the-art software used for military purposes.",
    image: thalesLogo,
    imageAlt: "Thales logo",
    details:
      "Led development of mission-critical military software applications while serving dual roles as Software Engineer and Scrum Master. Implemented secure development practices and agile methodologies within the constraints of military specifications, ensuring both innovation and compliance.",
    status: "Completed",
    challenges:
      "Maintaining the delicate balance between agile development practices and stringent military security protocols, while ensuring high-quality deliverables that meet precise military specifications and security clearance requirements.",
    technologies: [
      "ReactJS",
      "Web Ecosystem",
      "Agile Methodologies",
      "Military-grade Security",
      "Military-grade Testing",
      "CI/CD",
      "Documentation",
    ],
    role: "Software Engineer & Scrum Master",
    duration: "2 years",
    achievements: [
      "Developed state-of-the-art military software",
      "Strengthened ReactJS and web ecosystem expertise",
      "Enhanced cross-functional team collaboration",
    ],
  },
  // University of Kent
  {
    name: "Computing & Entrepreneurship",
    company: "University of Kent",
    year: "2017 - 2018",
    title: "Top European University for Entrepreneurship and Computer Science",
    image: kentLogo,
    imageAlt: "University of Kent logo",
    details:
      "Pursued advanced studies in Computing and Entrepreneurship at a leading European institution, combining technical expertise with business acumen. Developed innovative solutions including a groundbreaking haptic glove system for sign language translation, demonstrating practical application of theoretical knowledge.",
    status: "Graduated",
    challenges:
      "Balancing technical innovation with business viability while developing cutting-edge solutions in haptic technology, requiring deep understanding of both computer science principles, market dynamics and ethical considerations.",
    technologies: [
      "Business Development",
      "Entrepreneurship",
      "Accounting",
      "Digital Marketing",
      "Computer Science",
      "Haptic Technology",
      "Thesis",
    ],
    role: "Master's Student",
    duration: "1 year",
    achievements: [
      "Specialized in Business Development for IT",
      "Developed thesis on haptic gloves for sign language translation",
      "Combined technical and business expertise",
    ],
  },
  // HEC Paris
  {
    name: "Digital Transformation & Consulting",
    company: "HEC Paris",
    year: "2017",
    title: "World best university for Management",
    image: hecLogo,
    imageAlt: "HEC Paris logo",
    details:
      "Completed specialized certification in Digital Transformation and Strategy at HEC Paris along with eMBA program, one of the world's premier management institutions. Gained comprehensive understanding of digital business transformation, change management, and strategic innovation in the context of modern business challenges.",
    status: "Graduated",
    challenges:
      "Mastering complex digital transformation frameworks and change management methodologies while developing practical strategies for real-world business applications in a rapidly evolving digital landscape.",
    technologies: [
      "Digital Strategy",
      "Business Transformation",
      "Management",
      "eMBA",
    ],
    role: "Certificate Student",
    duration: "1 year",
    achievements: [
      "Specialized in Digital Transformation & Strategy",
      "Learned from world-class management experts",
      "Developed strategic thinking in digital context",
    ],
  },
  // EPITECH
  {
    name: "Master Computer Science",
    company: "EPITECH",
    year: "2015 - 2019",
    title: "Best European University of Software Engineering and Technology",
    image: epitechLogo,
    imageAlt: "EPITECH logo",
    details:
      "Completed an intensive Master's program in Computer Science with specialization in C/C++ programming at EPITECH, one of Europe's leading technical institutions. Engaged in practical, project-based learning that emphasized both theoretical foundations and real-world application of software engineering principles.",
    status: "Graduated",
    challenges:
      "Mastering complex programming concepts and software engineering principles while managing intensive project-based coursework and developing practical solutions to real-world technical challenges.",
    technologies: [
      "C/C++",
      "Software Engineering",
      "Algorithm Design",
      "Architecture",
      "Design Patterns",
      "CI/CD",
      "Technical Documentation",
    ],
    role: "Master's Student",
    duration: "4 years",
    achievements: [
      "Specialized in C/C++ programming",
      "Developed strong foundation in software engineering",
      "Participated in numerous practical projects",
    ],
  },
];

export default projects;
