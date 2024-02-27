// import images
import Hero_person from "./assets/images/Hero/main_comp.json";
import nitk from '../src/assets/images/Education/nitk.png'
import openFoodFacts from './assets/images/OpenSrc/openFoodFacts.png'
import flood from "./assets/images/OpenSrc/flood.png"
import mattermost from './assets/images/OpenSrc/mattermost.jfif'
import bloodBank from './assets/images/Projects/bloodbank.webp'
import npm from './assets/images/Projects/npm.jpg'
import gocli from './assets/images/Projects/gocli.jpg'

export const resumeLink = "https://drive.google.com/file/d/1PK3-E3PpcOkn3GZBSbjhrTwzSmyu64IW/view?usp=sharing"
export const repoLink = "https://github.com/Sudhanva-Nadiger"

import {
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiMaterialui,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiJquery,
  SiVisualstudiocode,
  SiGit,
  SiMysql,
  SiNetlify,
  SiHtml5,
  SiVite,
  SiCss3,
  SiMongodb,
  SiRedux,
  SiJava,
  SiDart,
  SiFlutter,
  SiExpress,
  SiIntellijidea,
  SiNodedotjs
} from "react-icons/si";

import {
  AiFillGithub,
  AiFillHtml5,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";

import * as ic from 'react-icons/all'


import bookmark from "./assets/images/Projects/bookmark.jfif";
import bank from "./assets/images/Projects/bank.jpg";
import keep_notes from "./assets/images/Projects/keepNotes.png";
import movie_land from "./assets/images/Projects/movieLand.jfif";
import tindog from "./assets/images/Projects/tindog.png";
import videotube from "./assets/images/Projects/video-tube.png";
import TriNit from "./assets/images/TriNit.jfif";
import portfolio from './assets/images/Projects/portfolio.jpg';
import acm from './assets/images/Projects/acm.png';
import expenseTracker from './assets/images/Projects/expense-tracker.png';
import appFlowy from './assets/images/OpenSrc/appflowy.png'

export const content = {
  navs: [
    {
      link: "#skills",
      title: "Skills & Experience",
    },
    {
      link: "#education",
      title: "Education",
    },
    {
      link: "#projects",
      title: "Projects",
    },
    {
      link: "#openSrc",
      title: "Open Source",
    },
    {
      link: "#contact",
      title: "Contact Me",
    },
  ],
  hero: {
    title: `Hello,`,
    sub1: "there",
    sub2: "I am",
    firstName: "SUDHANVA",
    LastName: "NADIGER",
    image: Hero_person,
    hero_content: [
      {
        count: "",
        text: "Student developer based in India. Aspiring Software Development Engineer.",
      },
    ],
  },
  skillsList: [
    {
      title: "Programming Languages",
      items: [
        {
          id: "pl-1",
          icon: SiCplusplus,
          name: "C++",
        },
        {
          id: "pl-2",
          icon: SiPython,
          name: "Python",
        },
        {
          id: "pl-3",
          icon: SiJava,
          name: "JAVA",
        },
        {
          id: "pl-4",
          icon: SiC,
          name: "C",
        },
        {
          id: "pl-5",
          icon: SiHtml5,
          name: "HTML",
        },
        {
          id: "pl-6",
          icon: SiCss3,
          name: "CSS",
        },
        {
          id: "pl-7",
          icon: SiJavascript,
          name: "JavaScript",
        },
        {
          id: "pl-8",
          icon: SiDart,
          name: "Dart",
        },
      ],
    },
    {
      title: "Frameworks/ Libraries",
      items: [
        {
          id: "f-1",
          icon: SiReact,
          name: "ReactJS",
        },
        {
          id: "f-2",
          icon: SiRedux,
          name: "Redux",
        },
        {
          id: "f-3",
          icon: SiBootstrap,
          name: "Bootstrap",
        },
        {
          id: "f-4",
          icon: SiTailwindcss,
          name: "Tailwind CSS",
        },
        {
          id: "f-5",
          icon: SiJquery,
          name: "jQuery",
        },
        {
          id: "f-10",
          icon: SiExpress,
          name: "Express",
        },
        {
          id: "f-6",
          icon: SiGraphql,
          name: "GraphQL",
        },
        {
          id: "f-7",
          icon: SiFlutter,
          name: "Flutter",
        },
      ],
    },
    {
      title: "Tools",
      items: [
        {
          id: "t-1",
          icon: SiMysql,
          name: "MySQL",
        },

        {
          id: "t-3",
          icon: SiVisualstudiocode,
          name: "VS Code",
        },
        {
          id: "t-4",
          icon: SiGit,
          name: "Git",
        },
        {
          id: "t-5",
          icon: AiFillGithub,
          name: "GitHub",
        },
        {
          id: "t-7",
          icon: SiNetlify,
          name: "Netlify",
        },
        {
          id: "t-8",
          icon: SiVite,
          name: "ViteJS",
        },
        {
          id: "t-8",
          icon: SiIntellijidea,
          name: "IntelliJ",
        },
      ],
    },
  ],

  experiences: [
    {
      organisation: "TRI NIT Hackathon",
      logo: TriNit,
      link: "https://github.com/TRI-NIT",
      positions: [
        {
          title: "Web Developer",
          duration: "Jan 2023",
          content: [
            {
              text: "Contributed to Tri-Nit hackathon website.",
              link: "https://github.com/TRI-NIT",
            },
          ],
        },
      ],
    },
    {
      organisation: "ACM NITK",
      logo: acm,
      link: "https://github.com/TRI-NIT",
      positions: [
        {
          title: "Project Mentee",
          duration: "Jan-April 2022",
          content: [
            {
              text: "Analysed various games like Ludo, Mafia, Snake and Ladder in Python.",
              link: "",
            },
          ],
        },
        {
          title: "DSA mentor",
          duration: "May 2022",
          content: [
            {
              text: "Mentored 30+ students in summer mentorship program on topic data structures and algorithms.",
              link: "",
            },
          ],
        },
        {
          title: "Project Mentor",
          duration: "Jan 2023",
          content: [
            {
              text: "Mentoring team on a 'Online code editor' project.",
              link: "https://github.com/Amruth-S05/Online-Code-Editor",
            },
          ],
        },
      ],
    },
  ],

  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};

export const educationList = [
  {
    id: "education-1",
    icon: nitk,
    title: "National Institute of Technology Karnataka, Surathkal",
    degree: "Bachelor of Technology",
    duration: "December 2020 - May 2024",
    content1: "Major: Mechanical Engineering",
    content2: "Minor: Information Technology",
  },
];

export const projects = [
  {
    id: "project-100",
    title: "Hemo Tracker",
    github: "https://github.com/Sudhanva-Nadiger/blood-bank-management",
    link: "https://sbn-bloodbank.onrender.com/",
    image: bloodBank,
    content:
      "A comprehensive full stack web application for managing blood donatoins using the MERN stack.",
    stack: [
      {
        id: "icon-1",
        icon: SiMongodb,
        name: "MongoDB"
      },
      {
        id: "icon-2",
        icon: SiExpress,
        name: "Express"
      },
      {
        id: "icon-3",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-4",
        icon: SiNodedotjs,
        name: "Node.js"
      },
    ],
  },
  {
    id: "project-101",
    title: "React-Leetcode",
    github: "https://github.com/Sudhanva-Nadiger/react-leetcode",
    link: "https://react-leetcode-exampple.vercel.app/",
    image: npm,
    content:
      "Collection of components for showcasing your leetcode profile in your portfolio ✨.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tailwind CSS"
      },
      {
        id: "icon-3",
        icon: SiVite,
        name: "Vite"
      },
      {
        id: "icon-4",
        icon: ic.SiNpm,
        name: "NPM"
      },
    ],
  },
  {
    id: "project-1",
    title: "Bookmark App",
    github: "https://github.com/Sudhanva-Nadiger/Book-Mark-App",
    link: "",
    image: bookmark,
    content:
      "A full-stack web application that allows user to bookmark their favorite or frqunetly used website at one place without having it to search it again and again. ",
    stack: [
      {
        id: "icon-1",
        icon: SiMongodb,
        name: "MongoDB"
      },
      {
        id: "icon-2",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-3",
        icon: SiCss3,
        name: "CSS"
      },
      {
        id: "icon-4",
        icon: SiReact,
        name: "React"
      },
    ],
  },
  {
    id: "project-2",
    title: "Bank Landing Page",
    github: "https://github.com/Sudhanva-Nadiger/Modern_Bank_App",
    link: "https://sudhanva-nadiger.github.io/Modern_Bank_App/index.html",
    image: bank,
    content:
      "A landing page for a bank with modern UI/UX using React and Tailwind.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tailwind CSS"
      },

    ],
  },
  {
    id: "project-3",
    title: "Keep Notes",
    github: "https://github.com/Sudhanva-Nadiger/Keep-Notes-App",
    link: "",
    image: keep_notes,
    content: "A progressive note taking application developed using React and CSS. ",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiCss3,
        name: "CSS"
      },

    ],
  },
  {
    id: "project-4",
    title: "Movie Land",
    github: "https://github.com/Sudhanva-Nadiger/Movie_Land-2",
    link: "",
    image: movie_land,
    content:
      "A web application that easily provides guidance about any Movies & Tv shows.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-4",
        icon: SiRedux,
        name: "Redux Toolkit"
      },
      {
        id: "icon-5",
        icon: SiCss3,
        name: "CSS"
      },
    ],
  },
  {
    id: "project-5",
    title: "Cli Task Manager",
    github: "https://github.com/Sudhanva-Nadiger/go-cli-task-manager",
    image: gocli,
    content:
      "A simple CLI task manager developed using Go.",
    stack: [
      {
        id: "icon-1",
        icon: ic.SiGo,
        name: "Go"
      },
      {
        id: "icon-3",
        icon: ic.DiDatabase,
        name: "BoltDB"
      },
    ],
  },
  {
    id: "project-7",
    title: "Video Tube",
    github: "https://github.com/Sudhanva-Nadiger/My-App",
    link: "https://video-tube-react.netlify.app/",
    image: videotube,
    content:
      "A frontend web application for video links management. Provides the functionality like adding, editing, deleting, drag and drop, history of watched videos etc.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiRedux,
        name: "Redux Toolkit"
      },
      {
        id: "icon-3",
        icon: SiMaterialui,
        name: "Redux Toolkit"
      },
    ]
  },
  {
    id: "project-8",
    title: "Personal Portfolio",
    github: "https://github.com/Sudhanva-Nadiger/",
    link: "https://sudhanva-nadiger.netlify.app/",
    image: portfolio,
    content:
      "Personal portfolio website with React and Tailwind CSS.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tailwind CSS"
      },
      {
        id: "icon-3",
        icon: SiCss3,
        name: "CSS"
      },
    ],
  },
  {
    id: "project-9",
    title: "Expense Tracker",
    github: "https://github.com/Sudhanva-Nadiger/Personal_Expense_Tracker",
    link: "",
    image: expenseTracker,
    content:
      "An application developed using Flutter that helps to track the overall expenses made.",
    stack: [
      {
        id: "icon-1",
        icon: SiFlutter,
        name: "Flutter"
      },
      {
        id: "icon-2",
        icon: SiDart,
        name: "Dart"
      },
    ],
  },

]

export const openSourceContributions = [
  {
    id: "os-1",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "smooth-app",
    type: "pull-request",
    status: "merged",
    title:
      'Make "Start Scanning" Button',
    link: "https://github.com/openfoodfacts/smooth-app/pull/3569",
    number: "#3569",
    date: "Jan 12 2023",
    linesAdded: "34",
    linesDeleted: "29",
    technology: SiFlutter,
  },
  {
    id: "os-2",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "smooth-app",
    type: "pull-request",
    status: "merged",
    title: "Pop dialog navigator properly",
    link: "https://github.com/openfoodfacts/smooth-app/pull/3528",
    number: "#3538",
    date: "Jan 5 2023",
    linesAdded: "1",
    linesDeleted: "1",
    technology: SiFlutter,
  },
  {
    id: "os-3",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "smooth-app",
    type: "pull-request",
    status: "merged",
    title: "fab appearing in start scanning page",
    link: "https://github.com/openfoodfacts/smooth-app/pull/3550",
    number: "#3550",
    date: "Jan 8 2023",
    linesAdded: "1",
    linesDeleted: "1",
    technology: SiFlutter,
  },
  {
    id: "os-4",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "smooth-app",
    type: "pull-request",
    status: "merged",
    title: "feat: add troubleshooting section",
    link: "https://github.com/openfoodfacts/smooth-app/pull/3587",
    number: "#3587",
    date: "Jan 18 2023",
    linesAdded: "16",
    linesDeleted: "1",
    technology: SiFlutter,
  },
  {
    id: "os-5",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "smooth-app",
    type: "pull-request",
    status: "merged",
    title: "String with only spaces is considered as name !",
    link: "https://github.com/openfoodfacts/smooth-app/pull/3593",
    number: "#3593",
    date: "Jan 18 2023",
    linesAdded: "3",
    linesDeleted: "2",
    technology: SiFlutter,
  },
  {
    id: "os-6",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "smooth-app",
    type: "pull-request",
    status: "merged",
    title: "Alternate the color between packaging components to avoid any potential confusion",
    link: "https://github.com/openfoodfacts/smooth-app/pull/3619",
    number: "#3619",
    date: "Jan 23 2023",
    linesAdded: "22",
    linesDeleted: "1",
    technology: SiFlutter,
  },
  {
    id: "os-7",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "smooth-app",
    type: "pull-request",
    status: "merged",
    title: "Add undo option when product in list deleted!",
    link: "https://github.com/openfoodfacts/smooth-app/pull/3648",
    number: "#3648",
    date: "Jan 30 2023",
    linesAdded: "23",
    linesDeleted: "4",
    technology: SiFlutter,
  },
  {
    id: "os-8",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "hunger-games",
    type: "pull-request",
    status: "merged",
    title: "No intuitive way to close a modal on mobile",
    link: "https://github.com/openfoodfacts/hunger-games/pull/495",
    number: "#495",
    date: "Jan 31 2023",
    linesAdded: "27",
    linesDeleted: "2",
    technology: SiReact,
  },
  {
    id: "os-9",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "smooth-app",
    type: "pull-request",
    status: "merged",
    title: "Email sender application broken",
    link: "https://github.com/openfoodfacts/smooth-app/pull/3649",
    number: "#3649",
    date: "Jan 29 2023",
    linesAdded: "6",
    linesDeleted: "0",
    technology: SiFlutter,
  },
  {
    id: "os-10",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "smooth-app",
    type: "pull-request",
    status: "merged",
    title: "feat: Add copy to clipBoard button in send email manually when user has no email application",
    link: "https://github.com/openfoodfacts/smooth-app/pull/3651",
    number: "#3651",
    date: "Feb 8 2023",
    linesAdded: "63",
    linesDeleted: "11",
    technology: SiFlutter,
  },
  {
    id: "os-11",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "hunger-games",
    type: "pull-request",
    status: "merged",
    title: "Capitalize countries",
    link: "https://github.com/openfoodfacts/hunger-games/pull/522",
    number: "#522",
    date: "Feb 5 2023",
    linesAdded: "35",
    linesDeleted: "6",
    technology: SiReact,
  },
  {
    id: "os-12",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "hunger-games",
    type: "pull-request",
    status: "merged",
    title: "feat: add loading animation before question display",
    link: "https://github.com/openfoodfacts/hunger-games/pull/498",
    number: "#498",
    date: "Jan 31 5 2023",
    linesAdded: "14",
    linesDeleted: "3",
    technology: SiReact,
  },
  {
    id: "os-13",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "hunger-games",
    type: "pull-request",
    status: "merged",
    title: "fix: selectAll in logo game",
    link: "https://github.com/openfoodfacts/hunger-games/pull/530",
    number: "#530",
    date: "Feb 5 2023",
    linesAdded: "6",
    linesDeleted: "1",
    technology: SiReact,
  },
  {
    id: "os-14",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "smooth-app",
    type: "pull-request",
    status: "merged",
    title: "feat: format sign_up_errors to normal texts instead of HTML format",
    link: "https://github.com/openfoodfacts/smooth-app/pull/3692",
    number: "#3692",
    date: "Feb 16 2023",
    linesAdded: "33",
    linesDeleted: "13",
    technology: SiFlutter,
  },
  {
    id: "os-15",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "smooth-app",
    type: "pull-request",
    status: "merged",
    title: "feat: Improve user profile UI",
    link: "https://github.com/openfoodfacts/smooth-app/pull/3693",
    number: "#3693",
    date: "Feb 16 2023",
    linesAdded: "28",
    linesDeleted: "29",
    technology: SiFlutter,
  },
  {
    id: "os-16",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "smooth-app",
    type: "pull-request",
    status: "merged",
    title: "refactor: move usermanagement provider after if check!",
    link: "https://github.com/openfoodfacts/smooth-app/pull/3698",
    number: "#3698",
    date: "Feb 16 2023",
    linesAdded: "3",
    linesDeleted: "2",
    technology: SiFlutter,
  },
  {
    id: "os-17",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "hunger-games",
    type: "pull-request",
    status: "merged",
    title: "feat: Common footer module.",
    link: "https://github.com/openfoodfacts/hunger-games/pull/539",
    number: "#539",
    date: "Feb 14 2023",
    linesAdded: "565",
    linesDeleted: "90",
    technology: SiReact,
  },
  {
    id: "os-18",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "smooth-app",
    type: "pull-request",
    status: "merged",
    title: "feat: add rate the app link and share the app link in the settings page!",
    link: "https://github.com/openfoodfacts/smooth-app/pull/3704",
    number: "#3704",
    date: "Feb 21 2023",
    linesAdded: "111",
    linesDeleted: "0",
    technology: SiFlutter,
  },
  {
    id: "os-19",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "smooth-app",
    type: "pull-request",
    status: "merged",
    title: "fix: checkBox not showing right mark in dark theme",
    link: "https://github.com/openfoodfacts/smooth-app/pull/3725",
    number: "#3725",
    date: "Feb 21 2023",
    linesAdded: "2",
    linesDeleted: "0",
    technology: SiFlutter,
  },
  {
    id: "os-20",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "smooth-app",
    type: "pull-request",
    status: "merged",
    title: "feat: make nutrient search accentuation insensitive",
    link: "https://github.com/openfoodfacts/smooth-app/pull/3792",
    number: "#3792",
    date: "Mar 21 2023",
    linesAdded: "7",
    linesDeleted: "3",
    technology: SiFlutter,
  },
  {
    id: "os-21",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "smooth-app",
    type: "pull-request",
    status: "merged",
    title: "fix: remove validation check for basic info fields",
    link: "https://github.com/openfoodfacts/smooth-app/pull/3794",
    number: "#3794",
    date: "Apr 8 2023",
    linesAdded: "12",
    linesDeleted: "28",
    technology: SiFlutter,
  },
  {
    id: "os-22",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "smooth-app",
    type: "pull-request",
    status: "merged",
    title: "fix: visual inconsistency in app_settings",
    link: "https://github.com/openfoodfacts/smooth-app/pull/3818",
    number: "#3818",
    date: "Apr 8 2023",
    linesAdded: "77",
    linesDeleted: "49",
    technology: SiFlutter,
  },
  {
    id: "os-23",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "rate-my-recipe",
    type: "pull-request",
    status: "merged",
    title: "chore: refactor and enhancement",
    link: "https://github.com/openfoodfacts/rate-my-recipe/pull/27",
    number: "#27",
    date: "Jun 19 2023",
    linesAdded: "28",
    linesDeleted: "13",
    technology: SiReact,
  },
  {
    id: "os-24",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "hunger-games",
    type: "pull-request",
    status: "merged",
    title: "feat: Add lazy import for different routes",
    link: "https://github.com/openfoodfacts/hunger-games/pull/656",
    number: "#656",
    date: "Jul 9 2023",
    linesAdded: "660",
    linesDeleted: "600",
    technology: SiReact,
  },
  {
    id: "os-25",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "smooth-app",
    type: "pull-request",
    status: "merged",
    title: "feat: Create a screen listing all attributes for a product",
    link: "https://github.com/openfoodfacts/smooth-app/pull/4714",
    number: "#4714",
    date: "Nov 4 2023",
    linesAdded: "354",
    linesDeleted: "39",
    technology: SiReact,
  },
  {
    id: "os-26",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "open-prices",
    type: "pull-request",
    status: "merged",
    title: "feat: add endpoint to update price ",
    link: "https://github.com/openfoodfacts/open-prices/pull/202",
    number: "#202",
    date: "Feb 23 2024",
    linesAdded: "107",
    linesDeleted: "0",
    technology: SiPython,
  },
  {
    id: "os-101",
    organisation: "mattermost",
    logo: mattermost,
    repo: "mattermost-mobile",
    type: "pull-request",
    status: "merged",
    title: "fix: reset password bug",
    link: "https://github.com/mattermost/mattermost-mobile/pull/7135",
    number: "#7135",
    date: "Feb 16 2023",
    linesAdded: "3",
    linesDeleted: "4",
    technology: ic.TbBrandReactNative,
  },
  {
    id: "os-102",
    organisation: "mattermost",
    logo: mattermost,
    repo: "mattermost-mobile",
    type: "pull-request",
    status: "merged",
    title: "Feat: add copy to clipboard button in \"about\" mattermost page",
    link: "https://github.com/mattermost/mattermost-mobile/pull/7134",
    number: "#7134",
    date: "Jul 26 2023",
    linesAdded: "73",
    linesDeleted: "37",
    technology: ic.TbBrandReactNative,
  },
  {
    id: "os-103",
    organisation: "mattermost",
    logo: mattermost,
    repo: "mattermost",
    type: "pull-request",
    status: "merged",
    title: "Migrate \"advanced_create_post.test.jsx\" to Typescript",
    link: "https://github.com/mattermost/mattermost/pull/24955",
    number: "#24955",
    date: "Oct 24 2023",
    linesAdded: "471",
    linesDeleted: "232",
    technology: ic.SiTypescript,
  },
  {
    id: "os-104",
    organisation: "mattermost",
    logo: mattermost,
    repo: "mattermost",
    type: "pull-request",
    status: "merged",
    title: "Migrate \"interactive_dialog.jsx\" and tests to Typescript",
    link: "https://github.com/mattermost/mattermost/pull/25026",
    number: "#25026",
    date: "Oct 28 2023",
    linesAdded: "88",
    linesDeleted: "56",
    technology: ic.SiTypescript,
  },
  {
    id: "os-105",
    organisation: "mattermost",
    logo: mattermost,
    repo: "mattermost",
    type: "pull-request",
    status: "merged",
    title: "Replace usage of LocalizedIcon in 'plain_log_list.tsx' with i/span tags",
    link: "https://github.com/mattermost/mattermost/pull/25135",
    number: "#25135",
    date: "Oct 31 2023",
    linesAdded: "8",
    linesDeleted: "9",
    technology: SiReact,
  },
  {
    id: "os-106",
    organisation: "mattermost",
    logo: mattermost,
    repo: "mattermost",
    type: "pull-request",
    status: "merged",
    title: "Replace usage of LocalizedIcon in 'rhs_header_post.tsx' with i/span tags",
    link: "https://github.com/mattermost/mattermost/pull/25159",
    number: "#25159",
    date: "Oct 27 2023",
    linesAdded: "15",
    linesDeleted: "14",
    technology: SiReact,
  },
  {
    id: "os-107",
    organisation: "mattermost",
    logo: mattermost,
    repo: "mattermost",
    type: "pull-request",
    status: "merged",
    title: " Migrate 'switch_channel_provider.test.jsx' to TypeScript",
    link: "https://github.com/mattermost/mattermost/pull/25210",
    number: "#25210",
    date: "Oct 31 2023",
    linesAdded: "63",
    linesDeleted: "53",
    technology: ic.SiTypescript,
  },
  {
    id: "os-201",
    organisation: "CCExtractor",
    logo: flood,
    repo: "Flood_Mobile",
    type: "pull-request",
    status: "merged",
    title: "fix: make checkbox clearly visible onclick",
    link: "https://github.com/CCExtractor/Flood_Mobile/pull/160",
    number: "#160",
    date: "Jan 20 2023",
    linesAdded: "133",
    linesDeleted: "105",
    technology: SiFlutter,
  },
  {
    id: "os-301",
    organisation: "AppFlowy-IO",
    logo: appFlowy,
    repo: "AppFlowy",
    type: "pull-request",
    status: "merged",
    title: "feat: add icon to dropdown button in language view",
    link: "https://github.com/AppFlowy-IO/AppFlowy/pull/2031",
    number: "#2031",
    date: "Mar 20 2023",
    linesAdded: "24",
    linesDeleted: "23",
    technology: SiFlutter,
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/sudhanva-nadiger-b616a6212/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/Sudhanva-Nadiger",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:sudhanvanadiger12@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/sudhanva_nadiger__",
  },
  {
    id: "social-media-5",
    icon: ic.AiFillTwitterCircle,
    link: "https://twitter.com/SudhanvaNadiger",
  },
];

export const aboutMe = {
  name: "Sudhanva Nadiger",
  tagLine: "Final year student at NITK | Executive Member @ ACM NITK | Open Source Contributor",
  intro: content.hero.hero_content.text
}
