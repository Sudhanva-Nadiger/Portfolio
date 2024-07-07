import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { BsLink45Deg } from "react-icons/bs";

import "react-vertical-timeline-component/style.min.css";

import { EXPERIENCES } from "../constants";

const Content = ({ text, link, tech }) => {
    return (
        <div>
            <p className="font-poppins font-normal text-[14px] text-dimWhite mt-4">
                {text}{" "}
                {link ? (
                    <a href={link} target="_blank">
                        <BsLink45Deg
                            size="1rem"
                            className="inline hover:text-white"
                        ></BsLink45Deg>
                    </a>
                ) : (
                    ""
                )}
            </p>

            {tech && (
                <>
                    <p className="font-poppins font-normal text-dimWhite mt-3">
                        Tech Stack
                    </p>
                    <div className="mt-2 text-gray-500 capitalize dark:text-gray-300">
                        <p className="flex sm:flex-row flex-wrap gap-5">
                            {tech.map((tech, index) => (
                                <span
                                    key={tech.id}
                                    index={index}
                                    className="text-dimWhite text-[20px] hover:text-[#8dbbeb] tooltip"
                                >
                                    {React.createElement(tech.icon)}
                                    <span className="tooltiptext">{tech.name}</span>
                                </span>
                            ))}
                        </p>
                    </div>
                </>
            )}
        </div>
    );
};

const ExperienceCard = ({ experience }) => {
    const { logo, organisation, positions } = experience
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: 'transparent',
                border: '0.1px solid white',
                maxWidth: '600px'
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={experience.date}
            iconStyle={{ background: 'white' }}
            icon={
                <div className='flex justify-center items-center w-full h-full'>
                    <img
                        src={logo}
                        alt={organisation}
                        className='w-[60%] h-[60%] object-center'
                    />
                </div>
            }
        >
            <div>
                <h3 className='text-white text-[24px] font-bold'>{organisation}</h3>
            </div>

            <ol className='relative ml-5 mt-5 list-none space-y-2 border-l border-gray-200'>
                {positions.map((position, index) => {
                    return <li
                        key={`card-${index}`}
                        className={`${index === positions.length - 1 ? "mb-0" : "mb-4"
                            } ml-4`}
                    >
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-white"></div>
                        <h3 className="text-lg font-semibold text-dark_primary">
                            {position.title}
                        </h3>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                            {position.duration}
                        </time>
                        {position.content.map((info, index) => (
                            <Content key={`content-${index}`} index={index} {...info} />
                        ))}
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"></p>
                    </li>
                })}
            </ol>
        </VerticalTimelineElement>
    );
};

const Experience = () => {
    return (
        <div id="experience" className="sm:mb-0 sm:px-16 px-6 py-4">
            <motion.h1
                whileInView={{ y: [-20, 0], opacity: [0, 1] }}
                transition={{ duration: 1, type: 'spring', stiffness: "120" }}
                className="flex-1 font-Poppins font-semibold ss:text-[55px] sm:text-[45px] ss:leading-[80px] leading-[80px] text-white">
                Experience
            </motion.h1>

            <div className='mt-10 flex flex-col'>
                <VerticalTimeline>
                    {EXPERIENCES.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default Experience;