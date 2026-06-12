export const personalInfo = {
  name: "Popoola Habeeb",
  title: "Engineering Graduate & Web Developer",
  bio: "Passionate software engineer with 2+ years of hands-on experience and strong foundation in programming and web development. Enthusiastic about creating innovative solutions and learning emerging technologies.",
  location: "Nigeria",
  email: "popoolahabeeb9@gmail.com",
  phone: "+234 2986 0114",
  image: "MeInBlueTop.jpeg",
};

export const socialLinks = {
  github: "https://github.com/De-khunle",
  linkedin: "https://www.linkedin.com/in/habeeb-popoola-2b2770222/",
  twitter: "https://twitter.com/habeeb_jr",
};

export const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const skills = {
  programming: [{ name: "JavaScript", level: 80 }],
  webDevelopment: [
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "Tailwind CSS", level: 90 },
    { name: "React", level: 85 },
    { name: "GSAP", level: 75 },
    { name: "Framer Motion", level: 75 },
    { name: "SwiperJS", level: 75 },
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "GitHub", level: 90 },
    { name: "Vite", level: 90 },
    { name: "VS Code", level: 95 },
  ],
  softSkills: [
    { name: "Problem Solving", level: 90 },
    { name: "Team Collaboration", level: 85 },
    { name: "Communication", level: 80 },
    { name: "Time Management", level: 85 },
  ],
};

export const projects = [
  {
    id: 1,
    name: "FinanceFlow",
    description:
      "Fully responsive multi-page crypto platform engineered for seamless navigation and cross-device compatibility",
    image: "/finance-flow.png",
    tech: ["JavaScript", "CSS", "HTML"],
    liveDemo: "https://de-khunle.github.io/Finance-flow/",
    github: "https://github.com/de-khunle/Finance-flow",
    category: "Web Dev",
  },
  {
    id: 2,
    name: "Numify",
    description:
      "Numerical architecture tool designed for high-precision data processing and algorithmic efficiency",
    image: "/numify.png",
    tech: ["JavaScript", "CSS", "HTML"],
    liveDemo: "https://de-khunle.github.io/Numify/",
    github: "https://github.com/de-khunle/Numify",
    category: "Web Dev",
  },
  {
    id: 3,
    name: "ClimaCore",
    description: "Real-time weather application using API integration",
    image: "/climaCore.png",
    tech: ["JavaScript", "API", "CSS", "HTML"],
    liveDemo: "https://de-khunle.github.io/ClimaCore/",
    github: "https://github.com/de-khunle/ClimaCore",
    category: "Web Dev",
  },
  {
    id: 4,
    name: "TipSwift",
    description:
      "Specialized performance-incentive engine designed to streamline the allocation of service-based rewards within professional environments",
    image: "tipSwift.png",
    tech: ["JavaScript", "CSS", "HTML"],
    liveDemo: "https://de-khunle.github.io/TipSwift/",
    github: "https://github.com/de-khunle/TipSwift",
    category: "Web Dev",
  },
];

export const education = [
  {
    degree: "Bachelor of Engineering (B.Eng)",
    institution: "Federal University of Technology, Minna",
    location: "Minna, Niger State",
    // period: "2018 - 2025",
    gpa: "4.14/5",
    achievements: [
      "Vice Chancellor's Certificate of Academic Excellence",
      "Certificate of Service (National Association of Engineering Students)",
      "Led the Blockfest 1.0 initiatives for onboarding students into Web3 ",
    ],
    courses: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Computer Networks",
      "Operating Systems",
    ],
  },
];

export const experience = [
  {
    position: "Freelance Web Developer",
    company: "Upwork",
    location: "Remote",
    period: "August 2024 - January 2025",
    responsibilities: [
      "Designed and developed websites for small businesses and Web3 projects.",
      "Implemented responsive designs and ensured cross-browser compatibility",
      "Maintained client relationships and provided technical support",
      "Delivered projects on time and within budget",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
  },
  {
    position: "Web Development Intern",
    company: "Femtech Information Technology Ltd",
    location: "On-site",
    period: "January 2024 - June 2024",
    responsibilities: [
      "Developed responsive web pages using HTML, CSS and JavaScript",
      "Collaborated with senior developers to implement new features",
      "Optimized website performance and fixed UI/UX issues",
      "Participated in daily stand-up meetings and sprint planning",
    ],
    technologies: ["JavaScript", "HTML", "CSS", "Git"],
  },

  {
    position: "Open Source Contributor",
    company: "Various Projects",
    location: "Remote",
    period: "June 2025 - Present",
    responsibilities: [
      "Contributed to open-source projects on GitHub",
      "Fixed bugs and implemented new features",
      "Collaborated with developers around the world",
      "Participated in code reviews and discussions",
    ],
    technologies: ["JavaScript", "React", "Git", "GitHub"],
  },
];
