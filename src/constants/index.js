import Hero_person from "../assets/images/Hero/main_comp.json";

export { SOCIAL_MEDIA } from './socialMedia';
export { SKILLS_LIST } from './skillsList';
export { EXPERIENCES } from './experience';
export { EDUCATION_LIST } from './education';
export { PROJECTS } from './projects';
export { OPEN_SOURCE_CONTRIBUTIONS } from './openSource';

export const RESUME_LINK = "https://drive.google.com/file/d/1fAlHoNfCHkJCkmcpGFzbanTZorT2r2U_/view";
export const REPO_LINK = "https://github.com/Sudhanva-Nadiger/Portfolio";

export const CONTENT = {
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
                text: "Developer based in India. Aspiring Software Development Engineer.",
            },
        ],
    },

    Footer: {
        text: "All © Copy Right Reserved 2023",
    },
};

export const ABOUT_ME = {
    name: "Sudhanva Nadiger",
    tagLine: "Insanely ambitious coder | SWE intern @Appleute | Open source contributor",
    intro: CONTENT.hero.hero_content.text
};
