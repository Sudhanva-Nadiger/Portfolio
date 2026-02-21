import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import type { IconType } from "react-icons";

export interface SocialLink {
  id: string;
  icon: IconType;
  link: string;
  label: string;
}

export const SOCIAL_MEDIA: SocialLink[] = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/sudhanva-nadiger-b616a6212/",
    label: "LinkedIn",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/Sudhanva-Nadiger",
    label: "GitHub",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:sudhanvanadiger12@gmail.com",
    label: "Email",
  },
  {
    id: "social-media-4",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/sudhanva_nadiger__",
    label: "Instagram",
  },
  {
    id: "social-media-5",
    icon: FaXTwitter,
    link: "https://twitter.com/SudhanvaNadiger",
    label: "X (Twitter)",
  },
];
