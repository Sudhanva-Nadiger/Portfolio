import type { IconType } from "react-icons";
import {
  SiAntdesign,
  SiCircleci,
  SiDocker,
  SiGit,
  SiGo,
  SiKubernetes,
  SiMui,
  SiMysql,
  SiNestjs,
  SiOpenjdk,
  SiOpentelemetry,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiRuby,
  SiSpringboot,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

import nutanix from "@/assets/images/Experience/nutanix.png";
import flipkart from "@/assets/images/Experience/flipkart.png";
import appleute from "@/assets/images/Experience/appleute.svg";
import trinit from "@/assets/images/Experience/TriNit.jfif";
import acm from "@/assets/images/Experience/acm.png";

export interface TechItem {
  id: string;
  icon: IconType;
  name: string;
}

export interface Position {
  title: string;
  duration: string;
  content?: { text: string; link?: string; tech?: TechItem[] }[];
}

export interface Experience {
  organisation: string;
  logo: string;
  link: string;
  positions: Position[];
}

export const EXPERIENCES: Experience[] = [
  {
    organisation: "Nutanix",
    logo: nutanix,
    link: "https://www.nutanix.com/",
    positions: [
      {
        title: "Member of Technical Staff",
        duration: "Jan 2026 — Present",
        content: [
          {
            text: "Working with the CPaaS (Compute Platform as a Service) team.",
            tech: [
              { id: "nt-1", icon: SiGo, name: "Go" },
              { id: "nt-2", icon: SiPython, name: "Python" },
              { id: "nt-3", icon: SiOpentelemetry, name: "OpenTelemetry" },
              { id: "nt-4", icon: SiGit, name: "Git" },
              { id: "nt-5", icon: SiKubernetes, name: "Kubernetes" },
              { id: "nt-6", icon: SiDocker, name: "Docker" },
              { id: "nt-7", icon: SiCircleci, name: "CircleCI" },
            ],
          },
        ],
      },
    ],
  },
  {
    organisation: "Flipkart",
    logo: flipkart,
    link: "https://www.flipkart.com/",
    positions: [
      {
        title: "Software Development Engineer",
        duration: "Oct 2024 — Jan 2026",
        content: [
          {
            text: "Played a key role in migrating non-customer outbound workflows from a monolith to microservices by developing several APIs and collaborating with UI and QA teams.",
            tech: [
              { id: "fk-1", icon: SiOpenjdk, name: "Java" },
              { id: "fk-2", icon: SiSpringboot, name: "Spring Boot" },
              { id: "fk-3", icon: SiRuby, name: "Ruby" },
              { id: "fk-4", icon: SiMysql, name: "MySQL" },
              { id: "fk-5", icon: SiKubernetes, name: "Kubernetes" },
            ],
          },
          {
            text: "Built a CLI tool (sc-warehouse screen finder) to help developers locate active Kubernetes pod screens, reducing on-call resolution time.",
          },
          {
            text: "Optimized latency-critical APIs by reducing redundant DB calls and implementing object caching, resulting in significant performance improvements.",
          },
          {
            text: "Spearheaded platform-wide stability initiatives; resolved numerous P0 incidents and addressed critical NFRs, significantly enhancing system resilience.",
          },
          {
            text: "Emerged as a Subject Matter Expert (SME) within the picking domain, providing expertise on complex technical challenges and new feature development.",
          },
        ],
      },
    ],
  },
  {
    organisation: "Appleute",
    logo: appleute,
    link: "https://www.appleute.de/en/",
    positions: [
      {
        title: "Software Engineering Intern (Remote)",
        duration: "May 2024 — Oct 2024",
        content: [
          {
            text: "Developed a complex CRM system (frontend & backend) enabling real-time tracking of customer interactions and increasing user engagement by 40%.",
            tech: [
              { id: "e-1", icon: SiTypescript, name: "TypeScript" },
              { id: "e-2", icon: SiReact, name: "React" },
              { id: "e-3", icon: SiAntdesign, name: "Ant Design" },
              { id: "e-4", icon: TbBrandReactNative, name: "React Native" },
              { id: "e-5", icon: SiNestjs, name: "NestJS" },
              { id: "e-6", icon: SiPostgresql, name: "PostgreSQL" },
              { id: "e-7", icon: SiPrisma, name: "Prisma" },
            ],
          },
          {
            text: "Collaborated with cross-functional teams to design and implement new features for app screens in React Native, resulting in a 30% increase in user engagement.",
          },
          {
            text: "Developed and integrated a secure login system for customers in the React Native app, reducing login errors by 15% and increasing user satisfaction by 20%.",
          },
        ],
      },
    ],
  },
  {
    organisation: "TRI NIT Hackathon",
    logo: trinit,
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
              { id: "t-1", icon: SiReact, name: "React" },
              { id: "t-2", icon: SiMui, name: "Material UI" },
            ],
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
        title: "DSA Mentor",
        duration: "May 2022",
        content: [
          {
            text: "Mentored 30+ students in summer mentorship program on data structures and algorithms.",
          },
        ],
      },
      {
        title: "Project Mentee",
        duration: "Jan — Apr 2022",
        content: [
          {
            text: "Analysed various games like Ludo, Mafia, Snake and Ladder in Python.",
            tech: [{ id: "p-1", icon: SiPython, name: "Python" }],
          },
        ],
      },
    ],
  },
];
