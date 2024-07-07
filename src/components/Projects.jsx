import React from "react";
import { PROJECTS } from "../constants";
import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { motion } from "framer-motion";

const Project = (props) => {
  return (
    <motion.div
      className="proj feature-card hover:text-white px-12 py-8 transition-colors duration-300 transform border rounded-xl hover:border-transparent group dark:border-gray-700 dark:hover:border-transparent"
      whileInView={{ y: [-40, 0], opacity: [0, 1] }}
      transition={{ duration: 1, type: 'spring', stiffness: "120" }}
    >
      <div className="flex flex-col sm:-mx-4 sm:flex-row">
        <img
          className="flex-shrink-0 bg-white object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
          src={props.image}
          alt=""
        />

        <div className="mt-4 sm:mx-4 sm:mt-0">
          <h1 className="text-xl font-semibold font-poppins text-gray-200 capitalize md:text-2x">
            {props.title}
          </h1>
          <p className="font-poppins font-normal text-dimWhite mt-3">
            Tech Stack
          </p>
          <div className="mt-2 text-gray-500 capitalize dark:text-gray-300">
            <p className="flex sm:flex-row flex-wrap gap-5">
              {props.stack.map((tech, index) => (
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
        </div>
      </div>

      <p className="mt-8 p font-poppins text-[#414551]">
        {props.content}
      </p>

      <div className="flex mt-4 -mx-2">
        {props.github ? (
          <a href={props.github} target="_blank">
            <AiFillGithub
              size="2rem"
              className="text-white mr-1 hover:text-[#8dbbeb]"
            ></AiFillGithub>
          </a>
        ) : (
          ""
        )}
        {props.link ? (
          <a href={props.link} target="_blank">
            <BsLink45Deg
              size="2rem"
              className="text-white hover:text-[#8dbbeb]"
            ></BsLink45Deg>
          </a>
        ) : (
          ""
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="bg-secondaryLinear sm:px-16 px-6 py-4" >
      <motion.div
       whileInView={{ y: [-20, 0], opacity: [0, 1] }}
       transition={{ duration: 1, type: 'spring', stiffness:"120"}}
      >
        <h1 className="flex-1 font-Poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
          Projects
        </h1>
      </motion.div>

      <div className="container px-2 py-10 mx-auto">
        <div className="grid grid-cols-1 gap-8 mt-8 sm:mt-1 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <Project key={project.id} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;