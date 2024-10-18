import { meta, shopify, starbucks, tesla,mms } from "../assets/images";
import {
  todo,
  shopping,
  apple,
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  pgsql,
  php,
  bootstrap,
  laravel,
  typescript,
  shadcn,
  vite,
  zustand,
  whatsapp,
  facebook,
  webDevelopment,
  university,
  udemy,
  mysql,
  contactBook,
  restaurant,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: bootstrap,
    name: "Bootstrap CSS",
    type: "Frontend",
  },
  {
    imageUrl: shadcn,
    name: "ShadCN-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: zustand,
    name: "Zustand",
    type: "State Management",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: php,
    name: "Php",
    type: "Backend",
  },
  {
    imageUrl: laravel,
    name: "Laravel",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  //   {
  //     imageUrl: mongodb,
  //     name: "MongoDB",
  //     type: "Database",
  //   },
  {
    imageUrl: pgsql,
    name: "PgSQL",
    type: "Database",
  },
  {
    imageUrl: mysql,
    name: "MySQL",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  //   {
  //     imageUrl: mui,
  //     name: "Material-UI",
  //     type: "Frontend",
  //   },
  {
    imageUrl: vite,
    name: "Vite",
    type: "JS build Tool",
  },
];

export const experiences = [
  {
    title: "Front-End InternShip Web Developer",
    company_name: "MMS-IT",
    icon: mms,
    iconBg: "#accbe1",
    date: "March 2023 - August 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#fbc3bc",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#b7e4c7",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#a2d2ff",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Hanhtunaung97",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/han-htunaung-7720a526a/",
  },
  {
    name: "Facebook",
    iconUrl: facebook,
    link: "https://www.facebook.com/profile.php?id=100004888456380&mibextid=LQQJ4d",
  },
  {
    name: "WhatsApp",
    iconUrl: whatsapp,
    link: "whatsapp://send?text=Hello&phone=+601123858843",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Voucher Management Application",
    description:
      "Developed a web application that can manage products and operate sale voucher.First,authentication and authorization is required to register user.And then,other processes can doable with review voucher list and can review voucher details with printable and downloadable pdf file.",
    link: "https://github.com/Hanhtunaung97/Voucher-app.git",
  },
  {
    iconUrl: contactBook,
    theme: "btn-back-green",
    name: "Contact Management Application",
    description:
      'Created a contact management book that can manage and create people information in details format.Before using the app,authentication and authorization is required to register user-profile and then,other processes can doable with review contact list and can review contact details.',
    link: "https://github.com/Hanhtunaung97/Contact-app-project.git",
  },
  {
    iconUrl: apple,
    theme: "btn-back-blue",
    name: "Apple Website",
    description:
      "Designed and built a apple iphone 15 pro website that can perform 3D rendering and smooth animation with GSAP.",
    link: "https://github.com/Hanhtunaung97/Apple-website.git",
  },
  {
    iconUrl: restaurant,
    theme: "btn-back-pink",
    name: "Restaurant Landing Page",
    description:
      "Built a complete restaurant Landing Page with React.js and fully responsive design in across all devices.",
    link: "https://github.com/Hanhtunaung97/Restaurant-Landing-Page.git",
  },
  {
    iconUrl: shopping,
    theme: "btn-back-black",
    name: "Sample E-commerce Application",
    description:
      "Developed a web application for e-commerce online shop with vanilla JavaScript,can manage and operate the whole process of online sale in sample process.",
    link: "https://github.com/Hanhtunaung97/JS-product-card-management-jsonserver.git",
  },
  {
    iconUrl: todo,
    theme: "btn-back-yellow",
    name: "Todo List Application",
    description:
      "App that can process of the todo list with creation and updating of todo list.Developing with React.js and implemented with beautiful UI/UX design.",
    link: "https://github.com/Hanhtunaung97/React-todo-app.git",
  },
];
export const educations = [
  {
    iconUrl: university,
    title: "Computer Science",
    camp_name: "Computer University Mandalay",
    iconBg: "#fcb1b1",
    date: "May 2014 - Feb 2019",
  },
  {
    iconUrl: webDevelopment,
    title: "Front-End Web Development",
    camp_name: "MMS-IT Solution",
    iconBg: "#96f7d2",
    date: "March 2023 - Oct 2024",
  },
  {
    iconUrl: udemy,
    title: "Complete Web Development BootCamp",
    camp_name: "UDEMY Academy",
    iconBg: "#cabbe9",
    date: "May 2023 - August 2024",
  },
];
