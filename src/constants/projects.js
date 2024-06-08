import ehippo from '../assets/images/Projects/favicon.ico';
import uncover from '../assets/images/Projects/uncover.webp'
import bank from "../assets/images/Projects/bank.jpg";
import bloodBank from '../assets/images/Projects/bloodbank.webp';
import bookmark from "../assets/images/Projects/bookmark.jfif";
import expenseTracker from '../assets/images/Projects/expense-tracker.png';
import gocli from '../assets/images/Projects/gocli.jpg';
import keepNotes from "../assets/images/Projects/keepNotes.png";
import movieLand from "../assets/images/Projects/movieLand.jfif";
import npm from '../assets/images/Projects/npm.jpg';
import portfolio from '../assets/images/Projects/portfolio.jpg';
import videotube from "../assets/images/Projects/video-tube.png";

import {
    AiFillHtml5,
    BsDiamond,
    BsDroplet,
    DiDatabase,
    FaStripe,
    GiDiamondTrophy,
    GrDiamond,
    GrStripe,
    RiDrizzleFill,
    RiDrizzleLine,
    SiCss3,
    SiDart,
    SiExpress,
    SiFlutter,
    SiGo,
    SiMaterialui,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiNpm,
    SiReact,
    SiRedux,
    SiStripe,
    SiSupabase,
    SiTailwindcss,
    SiVite
} from "react-icons/all";

export const PROJECTS = [
  {
    id: "project-200",
    title: "E-Hippo",
    github: "https://github.com/Sudhanva-Nadiger/E-Hippo",
    link: "https://e-hippo.vercel.app/",
    image: ehippo,
    content:
      "Ecommerce website with Store and Admin dashboard! Built with NextJs.",
    stack: [
      {
        id: "icon-1",
        icon: SiNextdotjs,
        name: "NextJs"
      },
      {
        id: "icon-2",
        icon: SiSupabase,
        name: "Supabase"
      },
      {
        id: "icon-3",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-5",
        icon: BsDroplet,
        name: "Drizzle ORM"
      },
      {
        id: "icon-6",
        icon: SiTailwindcss,
        name: "Tailwind css"
      },
      {
        id: "icon-7",
        icon: GrDiamond,
        name: "Zod"
      },
      {
        id: "icon-8",
        icon: GrStripe,
        name: "Stripe"
      },
    ],
  },
  {
    id: "project-201",
    title: "Uncoover",
    github: "https://github.com/Sudhanva-Nadiger/uncover",
    link: "https://un-cover.vercel.app/",
    image: uncover,
    content:
      "Write AI generated Cover letter in seconds. (Applying to job doesnt have to suck anymore)",
    stack: [
      {
        id: "icon-1",
        icon: SiNextdotjs,
        name: "NextJs"
      },
      {
        id: "icon-3",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiSupabase,
        name: "Supabase"
      },
      {
        id: "icon-6",
        icon: SiTailwindcss,
        name: "Tailwind css"
      },
      {
        id: "icon-5",
        icon: BsDroplet,
        name: "Drizzle ORM"
      },
      {
        id: "icon-7",
        icon: GrDiamond,
        name: "Zod"
      },
      {
        id: "icon-8",
        icon: GrStripe,
        name: "Stripe"
      },
    ],
  },
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
        icon: SiNpm,
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
    image: keepNotes,
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
    image: movieLand,
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
        icon: SiGo,
        name: "Go"
      },
      {
        id: "icon-3",
        icon: DiDatabase,
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