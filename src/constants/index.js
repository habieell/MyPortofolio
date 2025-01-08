import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  umn,
  utf,
  threejs,
  laravel,
  mysql,
  umntech,
  thriftrove,
  mamappang,
  tahubulat,
  foodhub,
  sofeng
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
];

const experiences = [
  {
    title: "Web Developer Instructor Assistant",
    company_name: "Multimedia Nusantara University X LPDP",
    icon: umn,
    iconBg: "#E6DEDD",
    date: "19 February 2024 - 15 March 2024",
    points: [
      "Guided LPDP participants through comprehensive web development material.",
      "Crafted detailed learning modules for participants to master HTML, CSS, JS, and PHP.",
      "Assisted participants in troubleshooting and resolving website development issues.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "Umn Tech Festival",
    icon: utf,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developed the UTF Front End Website using Laravel, Inertia.js, and React.",
      "Created custom displays based on Figma UI designs using Tailwind CSS.",
      "Ensured responsive website design across various devices.",
      "Engaged in team bonding activities to enhance project collaboration with senior developers.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Built and maintained web applications using React.js and related technologies.",
  //     "Collaborated with designers, product managers, and developers to deliver high-quality products.",
  //     "Implemented responsive designs and ensured compatibility across different browsers.",
  //     "Conducted code reviews and provided constructive feedback to peers.",
  //   ],
  // },
  // {
  //   title: "Full Stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developed and maintained full-stack web applications using React.js and other technologies.",
  //     "Worked closely with cross-functional teams to create top-notch products.",
  //     "Ensured responsive design and cross-browser compatibility.",
  //     "Participated in code reviews, offering valuable feedback to fellow developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "MAMAPPANG",
    description:
      "Mamappang is a Web Programming final semester exam project group aimed at franchising. This website is a platform for selling and buying food and beverages.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: mamappang,
    source_code_link: "https://github.com/pemujakentang/mamappang-website",
  },
  {
    name: "Thriftrove",
    description:
      "Thriftrove is a project group for final semester exams based on E-commerce. This website uses axios api which is a dummy. Like e-commerce, it can do various features.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Axios",
        color: "green-text-gradient",
      },
      {
        name: "Scss",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "orange-text-gradient",
      },
    ],
    image: thriftrove,
    source_code_link: "https://github.com/habieell/TT",
  },
  {
    name: "UMN Tech Festival",
    description:
      "UTF is an event to showcase the latest technological innovations created by students of the Faculty of Engineering & Informatics and learn from fellow students.",
    tags: [
      {
        name: "Laravel",
        color: "orange-text-gradient",
      },
      {
        name: "Inertia JS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
    ],
    image: umntech,
    source_code_link: "https://github.com/atras30/Umn-Tech-Festival",
  },
  {
    name: "Tahu Bulat Games",
    description:
      "Tahu Bulat Games is a game that is inspired by the game Tahu Bulat. This game is a final exam group project for the Intro to Internet Technology course which emphasizes the auto clicker feature. This game is made using HTML, CSS, and Javascript.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
    ],
    image: tahubulat,
    source_code_link: "https://github.com/habieell/TahuBulat",
  },
  {
    name: "FoodHub",
    description:
      "FoodHub is a website for exploring food recommendations and viewing menus from various restaurants. Users can browse blog content for culinary inspiration and discover suggested eateries without direct ordering features.",
    tags: [
      {
        name: "Laravel",
        color: "orange-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
    ],
    image: foodhub,
    source_code_link: "https://github.com/habieell/FoodHub.git",
  },
  {
    name: "DJP Re-Design",
    description:
      "Re-Designing the UI/UX of the Directorate General of Tax application, this project is intended for the final semester exam for the Software Engineering course. Revising several icons that are less functional using Figma.",
    tags: [
      {
        name: "Figma",
        color: "green-text-gradient",
      },
    ],
    image: sofeng,
    source_code_link: "https://www.figma.com/design/Lo4wrEDLBWSJ8o2vvMELeV/UAS-sofeng?node-id=17-2897&t=cR9DmnCCn4NCKmZg-1",
  },
];

export { services, technologies, experiences, testimonials, projects };
