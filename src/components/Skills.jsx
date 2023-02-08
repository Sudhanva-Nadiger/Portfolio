
import React from 'react'
import { content } from '../Content'
import { motion } from 'framer-motion'
import { BsLink45Deg } from "react-icons/bs";

const skillsList = content.skillsList
const experiences = content.experiences

export const SkillIcon = ({ icon, name }) => {
  return (
    <div className="flex flex-col">
      <span className="text-[#a8b6f1] text-[30px] hover:text-white">
        {React.createElement(icon)}
      </span>
      <p className="font-poppins text-[#caddf7] text-[12px] mt-2">{name}</p>
    </div>
  );
};

const SkillCard = (props) => {
  return (
    <motion.div
      whileInView={{ x: [20, 0], opacity: [0, 1] }}
      transition={{ duration: 1, type: 'spring', stiffness:"120" }}
      className="mt-4 border-l border-gray-200 dark:border-gray-700 mx-0 sm:mx-4"
    > 
      <div className="relative w-3 h-3 bg-bg_light_primary rounded-full top-5 right-[6.2px] border dark:border-gray-900 dark:bg-white"></div>
      <div className="flex flex-row items-center sm:mb-6 mb-0 ml-6">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px]">
          {props.title}
        </h4>
      </div>
      <br />
      <div className="grid grid-cols-3 gap-8 ml-8">
        {props.items.map((item, index) => (
          <SkillIcon key={item.id} index={index} {...item} />
        ))}
      </div>
    </motion.div>
  );
};

const Content = ({ text, link }) => {
  return (
    <div>
      <p className="font-poppins font-normal text-[14px] text-dimWhite mt-4">
        - {text}{" "}
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
    </div>
  );
};


const ExperienceCard = (props) => {
  return (
    <motion.div
    whileInView={{ y: [-20, 0], opacity: [0, 1] }}
    transition={{ duration: 1 }}
    >
      <div className="flex flex-row items-center mb-6">
        <img
          src={props.logo}
          alt={props.organisation}
          className="w-[52px] h-[52px] rounded-full z-[2]"
        />
        <h4 className="font-poppins font-semibold text-[20px] text-dark_primary leading-[32px] ml-2">
          {props.organisation}
        </h4>
      </div>
      <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-6">
        {props.positions.map((position, index) => (
          <li
            className={`${
              index === props.positions.length - 1 ? "mb-0" : "mb-4"
            } ml-4`}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-white"></div>
            <h3 className="text-lg font-semibold text-dark_primary">
              {position.title}
            </h3>
            <time className="mb-1 text-sm font-normal leading-none text-[#caddf7]">
              {position.duration}
            </time>
            {position.content.map((info, index) => (
              <Content index={index} {...info} />
            ))}
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"></p>
          </li>
        ))}
      </ol>
    </motion.div>
  );
};


const Skills = () => {
  return (
    <section id="skills" className="sm:mb-0 bg-secondaryLinear sm:px-16 px-6 min-h-screenn py-4">
      <motion.h1
       whileInView={{ y: [-20, 0], opacity: [0, 1] }}
       transition={{ duration: 1, type: 'spring', stiffness:"120"}}
       className="flex-1 font-Poppins font-semibold ss:text-[55px] sm:text-[45px] sm:px-10 px-2 ss:leading-[80px] leading-[80px] text-white">
        Skills & Experience
      </motion.h1>
      <div
       className={"flex md:flex-row flex-col sm:py-10 py-6" }
      // whileInView={{ y: [-20, 0], opacity: [0, 1] }}
      // transition={{ duration: 0.5 }}
      >
        {/* Skills */}
        <motion.div className={`ml-4 mb-6 flex-1 flex justify-start gap-3 items-start flex-col `}>
          {skillsList.map((skill, index) => (
            <SkillCard index={index} {...skill} />
          ))}
        </motion.div>

        {/* Experience */}
        <motion.div className="flex flex-1 items-start justify-start flex-col my-4 sm:my-2">
          {experiences.map((exp, index) => (
            <ExperienceCard index={index} {...exp} />
          ))}
        </motion.div>
      </div>
    </section>
  )
};

export default Skills;
