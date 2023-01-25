// import images
import Hero_person from "./assets/images/Hero/main_comp.json";
import nitk from '../src/assets/images/Education/nitk.png'
import openFoodFacts from './assets/images/OpenSrc/openFoodFacts.png'
import flood from "./assets/images/OpenSrc/flood.png"

export const resumeLink = ""
export const repoLink = ""

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
  SiIntellijidea
} from "react-icons/si";

import {
  AiFillGithub,
  AiFillHtml5,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";


import bookmark from "./assets/images/Projects/bookmark.jfif";
import bank from "./assets/images/projects/bank.jpg";
import keep_notes from "./assets/images/projects/keepNotes.png";
import movie_land from "./assets/images/projects/movieLand.jfif";
import tindog from "./assets/images/projects/tindog.png";
import videotube from "./assets/images/projects/video-tube.png";
import TriNit from "./assets/images/TriNit.jfif"
import portfolio from './assets/images/Projects/portfolio.jpg'


export const content = {
  nav: [
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
        text: "Student developer based in India. Web development and App development enthusiast.",
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
          duration: "Jan 2023 - Present",
          content: [
            {
              text: "Contributed to Tri-Nit hackathon website.",
              link: "",
            },
          ],
        },
      ],
    },
  ],

  Footer: {
    text: "All © Copy Right Reserved 2022",
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
    title: "Tin Dog",
    github: "https://github.com/Sudhanva-Nadiger/Tin-Dog-Website",
    link: "https://sudhanva-nadiger.github.io/Tin-Dog-Website/TinDog/",
    image: tindog,
    content:
      "A home page website which provides details of the application to the end user like the desscription of the website, from where we can download the application, a section that displays the feedback from the clients and different plans and subscriptions.",
    stack: [
      {
        id: "icon-1",
        icon: SiHtml5,
        name: "HTML"
      },
      {
        id: "icon-3",
        icon: SiCss3,
        name: "CSS"
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
      "A frontend web application for video links management. Provides the functionality like adding, editing, deleting, drag and drop, history of watchedd videos etc.",
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
    link: "",
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
    linesAdded: "86",
    linesDeleted: "106",
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
  },
  {
    id: "os-5",
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
  },
  {
    id: "os-6",
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
];

export const aboutMe = {
  name: "Sudhanva Nadiger",
  tagLine: "Pre final year student at NITK | Executive Member @ ACM NITK | ",
  intro: content.hero.hero_content.text
}
