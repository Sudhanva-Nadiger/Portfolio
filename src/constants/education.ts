import nitk from "@/assets/images/Education/nitk.png";

export interface Education {
  id: string;
  icon: string;
  title: string;
  degree: string;
  duration: string;
  content1: string;
  content2: string;
}

export const EDUCATION_LIST: Education[] = [
  {
    id: "education-1",
    icon: nitk,
    title: "National Institute of Technology Karnataka, Surathkal",
    degree: "Bachelor of Technology",
    duration: "December 2020 — April 2024",
    content1: "Major: Mechanical Engineering",
    content2: "Minor: Information Technology",
  },
];
