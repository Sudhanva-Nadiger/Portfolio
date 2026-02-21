import type { IconType } from "react-icons";
import { AiFillGithub } from "react-icons/ai";
import {
  SiBootstrap,
  SiC,
  SiCplusplus,
  SiCss3,
  SiDart,
  SiExpress,
  SiFlutter,
  SiGit,
  SiGraphql,
  SiHtml5,
  SiIntellijidea,
  SiJavascript,
  SiJquery,
  SiKubernetes,
  SiMysql,
  SiNetlify,
  SiOpenjdk,
  SiPostman,
  SiPython,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

export interface Skill {
  id: string;
  icon: IconType;
  name: string;
}

export interface SkillGroup {
  title: string;
  items: Skill[];
}

export const SKILLS_LIST: SkillGroup[] = [
  {
    title: "Programming Languages",
    items: [
      { id: "pl-1", icon: SiCplusplus, name: "C++" },
      { id: "pl-2", icon: SiPython, name: "Python" },
      { id: "pl-3", icon: SiOpenjdk, name: "Java" },
      { id: "pl-4", icon: SiC, name: "C" },
      { id: "pl-5", icon: SiHtml5, name: "HTML" },
      { id: "pl-6", icon: SiCss3, name: "CSS" },
      { id: "pl-7", icon: SiJavascript, name: "JavaScript" },
      { id: "pl-8", icon: SiDart, name: "Dart" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { id: "f-1", icon: SiReact, name: "React" },
      { id: "f-2", icon: SiRedux, name: "Redux" },
      { id: "f-3", icon: SiBootstrap, name: "Bootstrap" },
      { id: "f-4", icon: SiTailwindcss, name: "Tailwind CSS" },
      { id: "f-5", icon: SiJquery, name: "jQuery" },
      { id: "f-6", icon: SiExpress, name: "Express" },
      { id: "f-7", icon: SiGraphql, name: "GraphQL" },
      { id: "f-8", icon: SiFlutter, name: "Flutter" },
    ],
  },
  {
    title: "Tools",
    items: [
      { id: "t-1", icon: SiMysql, name: "MySQL" },
      { id: "t-2", icon: VscCode, name: "VS Code" },
      { id: "t-3", icon: SiGit, name: "Git" },
      { id: "t-4", icon: AiFillGithub, name: "GitHub" },
      { id: "t-5", icon: SiNetlify, name: "Netlify" },
      { id: "t-6", icon: SiVite, name: "Vite" },
      { id: "t-7", icon: SiIntellijidea, name: "IntelliJ" },
      { id: "t-8", icon: SiPostman, name: "Postman" },
      { id: "t-9", icon: SiKubernetes, name: "Kubernetes" },
    ],
  },
];
