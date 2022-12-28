
import React from 'react'
import { content } from '../Content'
import { motion } from 'framer-motion'

const skillsList = content.skillsList

export const SkillIcon = ({ icon, name }) => {
  return (
    <div className="flex flex-col">
      <span className="text-[#6ba0f5] text-[30px] hover:text-white">
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
      transition={{ duration: 1 }}
      className="mt-4 border-l border-gray-200 dark:border-gray-700 mx-0 sm:mx-4"
    > 
      <div className="relative w-3 h-3 bg-bg_light_primary rounded-full top-5 right-[6.2px] border dark:border-gray-900 dark:bg-gray-700"></div>
      <div className="flex flex-row items-center sm:mb-6 mb-0 ml-6">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px]">
          {props.title}
        </h4>
      </div>
      <div className="grid grid-cols-3 gap-8 ml-8">
        {props.items.map((item, index) => (
          <SkillIcon key={item.id} index={index} {...item} />
        ))}
      </div>
    </motion.div>
  );
};


const Skills = () => {
  return (
    <section id="skills" className="sm:mb-0 bg-secondaryLinear sm:px-16 px-6 min-h-screen pt-4">
      <h1 data-aos="zoom-in" data-aos-once="false" className="flex-1 font-poppins text-bg_light_primary font-semibold ss:text-[55px] text-[45px] ss:leading-[80px] leading-[80px]">
        Skills
      </h1>
      <div
       className={"flex md:flex-row flex-col sm:py-10 py-6" }
      // whileInView={{ y: [-20, 0], opacity: [0, 1] }}
      // transition={{ duration: 0.5 }}
      >
        {/* Skills */}
        <motion.div className={`ml-2 mb-6 flex-1 flex justify-start gap-3 items-start flex-col md:flex-row `}>
          {skillsList.map((skill, index) => (
            <SkillCard index={index} {...skill} />
          ))}
        </motion.div>

        {/* Experience */}
        {/* <motion.div className="flex flex-1 items-center justify-start flex-col">
          {experiences.map((exp, index) => (
            <ExperienceCard index={index} {...exp} />
          ))}
        </motion.div> */}
      </div>
    </section>
  )
};

export default Skills;
