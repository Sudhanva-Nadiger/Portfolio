import type { IconType } from "react-icons";
import {
  SiCss3,
  SiDart,
  SiExpress,
  SiFlutter,
  SiGo,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiReact,
  SiRedux,
  SiSupabase,
  SiTailwindcss,
  SiVite,
  SiStripe,
} from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { BsDroplet } from "react-icons/bs";
import { DiDatabase } from "react-icons/di";
import { GrDiamond } from "react-icons/gr";

import ehippo from "@/assets/images/Projects/favicon.ico";
import uncover from "@/assets/images/Projects/uncover.webp";
import bank from "@/assets/images/Projects/bank.jpg";
import bloodBank from "@/assets/images/Projects/bloodbank.webp";
import bookmark from "@/assets/images/Projects/bookmark.jfif";
import expenseTracker from "@/assets/images/Projects/expense-tracker.png";
import gocli from "@/assets/images/Projects/gocli.jpg";
import keepNotes from "@/assets/images/Projects/keepNotes.png";
import movieLand from "@/assets/images/Projects/movieLand.jfif";
import npm from "@/assets/images/Projects/npm.jpg";
import videotube from "@/assets/images/Projects/video-tube.png";

export interface TechIcon {
  id: string;
  icon: IconType;
  name: string;
}

export interface Project {
  id: string;
  title: string;
  github: string;
  link?: string;
  image?: string;
  content: string;
  stack: TechIcon[];
}

export const PROJECTS: Project[] = [
  {
    id: "project-200",
    title: "E-Hippo",
    github: "https://github.com/Sudhanva-Nadiger/E-Hippo",
    link: "https://e-hippo.vercel.app/",
    image: ehippo,
    content:
      "Ecommerce website with Store and Admin dashboard! Built with NextJs.",
    stack: [
      { id: "icon-1", icon: SiNextdotjs, name: "Next.js" },
      { id: "icon-2", icon: SiSupabase, name: "Supabase" },
      { id: "icon-3", icon: SiReact, name: "React" },
      { id: "icon-5", icon: BsDroplet, name: "Drizzle ORM" },
      { id: "icon-6", icon: SiTailwindcss, name: "Tailwind" },
      { id: "icon-7", icon: GrDiamond, name: "Zod" },
      { id: "icon-8", icon: SiStripe, name: "Stripe" },
    ],
  },
  {
    id: "project-201",
    title: "Uncoover",
    github: "https://github.com/Sudhanva-Nadiger/uncover",
    link: "https://un-cover.vercel.app/",
    image: uncover,
    content:
      "Write AI generated Cover letter in seconds. Applying to jobs doesn't have to suck anymore.",
    stack: [
      { id: "icon-1", icon: SiNextdotjs, name: "Next.js" },
      { id: "icon-3", icon: SiReact, name: "React" },
      { id: "icon-2", icon: SiSupabase, name: "Supabase" },
      { id: "icon-6", icon: SiTailwindcss, name: "Tailwind" },
      { id: "icon-5", icon: BsDroplet, name: "Drizzle ORM" },
      { id: "icon-7", icon: GrDiamond, name: "Zod" },
      { id: "icon-8", icon: SiStripe, name: "Stripe" },
    ],
  },
  {
    id: "project-100",
    title: "Hemo Tracker",
    github: "https://github.com/Sudhanva-Nadiger/blood-bank-management",
    link: "https://sbn-bloodbank.onrender.com/",
    image: bloodBank,
    content:
      "A comprehensive full stack web application for managing blood donations using the MERN stack.",
    stack: [
      { id: "icon-1", icon: SiMongodb, name: "MongoDB" },
      { id: "icon-2", icon: SiExpress, name: "Express" },
      { id: "icon-3", icon: SiReact, name: "React" },
      { id: "icon-4", icon: SiNodedotjs, name: "Node.js" },
    ],
  },
  {
    id: "project-101",
    title: "React-Leetcode",
    github: "https://github.com/Sudhanva-Nadiger/react-leetcode",
    link: "https://react-leetcode-exampple.vercel.app/",
    image: npm,
    content:
      "Collection of React components for showcasing your LeetCode profile in your portfolio.",
    stack: [
      { id: "icon-1", icon: SiReact, name: "React" },
      { id: "icon-2", icon: SiTailwindcss, name: "Tailwind" },
      { id: "icon-3", icon: SiVite, name: "Vite" },
      { id: "icon-4", icon: SiNpm, name: "NPM" },
    ],
  },
  {
    id: "project-1",
    title: "Bookmark App",
    github: "https://github.com/Sudhanva-Nadiger/Book-Mark-App",
    image: bookmark,
    content:
      "A full-stack web application that allows users to bookmark frequently used websites in one place.",
    stack: [
      { id: "icon-1", icon: SiMongodb, name: "MongoDB" },
      { id: "icon-2", icon: AiFillHtml5, name: "HTML" },
      { id: "icon-3", icon: SiCss3, name: "CSS" },
      { id: "icon-4", icon: SiReact, name: "React" },
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
      { id: "icon-1", icon: SiReact, name: "React" },
      { id: "icon-2", icon: SiTailwindcss, name: "Tailwind" },
    ],
  },
  {
    id: "project-3",
    title: "Keep Notes",
    github: "https://github.com/Sudhanva-Nadiger/Keep-Notes-App",
    image: keepNotes,
    content:
      "A progressive note taking application developed using React and CSS.",
    stack: [
      { id: "icon-1", icon: SiReact, name: "React" },
      { id: "icon-2", icon: SiCss3, name: "CSS" },
    ],
  },
  {
    id: "project-4",
    title: "Movie Land",
    github: "https://github.com/Sudhanva-Nadiger/Movie_Land-2",
    image: movieLand,
    content:
      "A web application that provides guidance about any Movies & TV shows.",
    stack: [
      { id: "icon-1", icon: SiReact, name: "React" },
      { id: "icon-4", icon: SiRedux, name: "Redux" },
      { id: "icon-5", icon: SiCss3, name: "CSS" },
    ],
  },
  {
    id: "project-5",
    title: "CLI Task Manager",
    github: "https://github.com/Sudhanva-Nadiger/go-cli-task-manager",
    image: gocli,
    content: "A simple CLI task manager developed using Go.",
    stack: [
      { id: "icon-1", icon: SiGo, name: "Go" },
      { id: "icon-3", icon: DiDatabase, name: "BoltDB" },
    ],
  },
  {
    id: "project-7",
    title: "Video Tube",
    github: "https://github.com/Sudhanva-Nadiger/My-App",
    link: "https://video-tube-react.netlify.app/",
    image: videotube,
    content:
      "A frontend web application for video links management with add, edit, delete, and drag & drop.",
    stack: [
      { id: "icon-1", icon: SiReact, name: "React" },
      { id: "icon-2", icon: SiRedux, name: "Redux" },
      { id: "icon-3", icon: SiMui, name: "Material UI" },
    ],
  },
  {
    id: "project-9",
    title: "Expense Tracker",
    github: "https://github.com/Sudhanva-Nadiger/Personal_Expense_Tracker",
    image: expenseTracker,
    content: "A Flutter application that helps track overall expenses.",
    stack: [
      { id: "icon-1", icon: SiFlutter, name: "Flutter" },
      { id: "icon-2", icon: SiDart, name: "Dart" },
    ],
  },
];
