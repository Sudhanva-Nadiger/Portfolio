import TriNit from "../assets/images/Experience/TriNit.jfif";
import acm from '../assets/images/Experience/acm.png';
import appleute from '../assets/images/Experience/appleute.svg';

import {
    SiAntdesign,
    SiMaterialui,
    SiNestjs,
    SiPostgresql,
    SiPrisma,
    SiPython,
    SiReact,
    SiTypescript,
    TbBrandReactNative
} from "react-icons/all";


export const EXPERIENCES = [
  {
    organisation: "Appleute",
    logo: appleute,
    link: "https://www.appleute.de/en/",
    positions: [
      {
        title: "Software Engineering Intern (Remote)",
        duration: "May-2024 - Current",
        content: [
          {
            text: "Working on Full stack projects and App development with Agile Methodology.",
            tech: [
              {
                id: "f-2",
                icon: SiTypescript,
                name: "TypeScript",
              },
              {
                id: "f-1",
                icon: SiReact,
                name: "ReactJS",
              },
              {
                id: "f-3",
                icon: SiAntdesign,
                name: "Antd",
              },
              {
                id: "f-4",
                icon: TbBrandReactNative,
                name: "React Native",
              },
              {
                id: "f-5",
                icon: SiNestjs,
                name: "NestJS",
              },
              {
                id: "f-6",
                icon: SiPostgresql,
                name: "Postgres",
              },
              {
                id: "f-7",
                icon: SiPrisma,
                name: "Prisma ORM",
              },
            ]
          },
        ],
      },
    ],
  },
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
            tech: [
              {
                id: "f-1",
                icon: SiReact,
                name: "ReactJS",
              },
              {
                id: "f-2",
                icon: SiMaterialui,
                name: "Material UI",
              },
            ]
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
        title: "Project Mentor",
        duration: "Jan 2023",
        content: [
          {
            text: "Mentored team on a 'Online code editor' project.",
            link: "https://github.com/Amruth-S05/Online-Code-Editor",
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
        title: "Project Mentee",
        duration: "Jan-April 2022",
        content: [
          {
            text: "Analysed various games like Ludo, Mafia, Snake and Ladder in Python.",
            link: "",
            tech: [
              {
                id: "f-1",
                icon: SiPython,
                name: "Python"
              }
            ]
          },
        ],
      },
    ],
  },
]