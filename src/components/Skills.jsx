
import React from 'react'
import { SKILLS_LIST } from '../constants'
import { motion } from 'framer-motion'

export const SkillIcon = ({ icon, name, styles }) => {
  return (
    <div className={`flex flex-col`}>
      <span className={`hover:text-[#a8b6f1] ${styles ?? ""}`}>
        {React.createElement(icon)}
      </span>
      <p className="font-poppins text-[#caddf7] text-[12px] mt-2">{name}</p>
    </div>
  );
};

const SkillCard = (props) => {
  const { title, items, index } = props
  return (
    <motion.div
      whileInView={{ x: [20, 0], opacity: [0, 1] }}
      transition={{ duration: 1, type: 'spring', stiffness:"120" }}
      className="mt-4 border-l border-gray-200 dark:border-gray-700 mx-0 sm:mx-4"
      key={index}
    > 
      <div className="relative w-3 h-3 bg-bg_light_primary rounded-full top-5 right-[6.2px] border dark:border-gray-900 dark:bg-white"></div>
      <div className="flex flex-row items-center sm:mb-6 mb-0 ml-6">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px]">
          {title}
        </h4>
      </div>
      <br />
      <div className="grid grid-cols-3 gap-8 ml-8">
        {items.map((item, index) => (
          <SkillIcon key={item.id + index}  index={index} {...item} styles={'text-[30px] text-white'} />
        ))}
      </div>
    </motion.div>
  );
};


const Skills = () => {
  return (
    <section id="skills" className="sm:mb-0 sm:px-16 px-6 py-4">
      <motion.h1
       whileInView={{ y: [-20, 0], opacity: [0, 1] }}
       transition={{ duration: 1, type: 'spring', stiffness:"120"}}
       className="flex-1 font-Poppins font-semibold ss:text-[55px] sm:text-[45px] ss:leading-[80px] leading-[80px] text-white">
        Skills
      </motion.h1>
      <div
       className={"flex md:flex-row flex-col sm:py-10 py-6" }
      >
        {/* Skills */}
        <motion.div className={`ml-4 mb-6 flex-1 flex gap-3 items-start justify-between flex-col custom-MediaQuery1:flex-row`}>
          {SKILLS_LIST.map((skill, index) => (
            <SkillCard key={index} index={index} {...skill} />
          ))}
        </motion.div>
      </div>
    </section>
  )
};

export default Skills;
