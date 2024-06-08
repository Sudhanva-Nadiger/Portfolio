import React, { useState, useEffect } from "react";
import { OPEN_SOURCE_CONTRIBUTIONS } from "../constants";
import { DiGitMerge, DiGitPullRequest } from "react-icons/di";
import { VscIssues } from "react-icons/vsc";
import { motion } from "framer-motion";
import { SkillIcon } from "./Skills";

const Contribution = (props) => {
  const { logo, organisation, link, title, repo, linesAdded, linesDeleted, type, status, number, technology } = props
  return (
    <motion.div
      className="flex flex-col bg-dark_primary justify-evenly max-w-[320px] p-6 rounded-[20px] my-5 transition-colors duration-300 transform border hover:border-transparent dark:border-gray-700 dark:hover:border-transparent"
      whileInView={{ x: [-80, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-row w-full">
        <img
          src={logo}
          alt={organisation}
          className="w-[30px] h-[30px] rounded-full mt-2"
        />
        <div className="flex flex-col ml-4 flex-wrap">
          <a
            className="font-poppins font-normal text-[16px] text-gray-200 my-1 leading-[24px] hover:text-[bg_light_primary]"
            href={link}
            target="_blank"
          >
            {title}
          </a>
          <p className="font-poppins italic font-normal flex-wrap text-[14px] text-gray-400 text-dimWhite my-1">
            {organisation}/{" " + repo}
          </p>
        </div>
      </div>

      <div
        className={`flex flex-row ${linesAdded ? "justify-around ml-2" : "ml-10"
          } mt-4`}
      >
        <a
          className="font-poppins font-normal text-[12px] text-gray-400 inline"
          href={link}
          target="_blank"
        >
          {type === "pull-request" ? (
            status === "merged" ? (
              <DiGitMerge size="1.5rem" className="text-violet-700 inline" />
            ) : (
              <DiGitPullRequest
                size="1.5rem"
                className="text-green-600 inline"
              />
            )
          ) : status === "open" ? (
            <VscIssues size="1.5rem" className="text-green-600 inline" />
          ) : (
            <VscIssues size="1.5rem" className="text-violet-700 inline" />
          )}
          {number}
        </a>
        {technology && <SkillIcon styles={'text-[20px] text-[#a8b6f1]'} icon={technology} />}
        {linesAdded ? (
          <p className="font-poppins font-normal text-[14px]">
            <span className="text-green-600">+{linesAdded} </span>
            <span className="text-red-700">-{linesDeleted}</span>
          </p>
        ) : (
          ""
        )}
      </div>
    </motion.div>
  );
};

const OpenSource = () => {

  return (
    <section id="openSrc" className="bg-primaryLinear mx:3 sm:px-16 px-6 py-4">
      <motion.div
        whileInView={{ y: [-20, 0], opacity: [0, 1] }}
        transition={{ duration: 1, type: 'spring', stiffness: "120" }}
      >
        <h1 className="flex-1 pl-2 font-Poppins font-semibold ss:text-[55px] sm:text-[45px] ss:leading-[80px] leading-[80px]">
          Open Source Contributions
        </h1>
      </motion.div>

      <div className="py-5 mb-8 flex justify-center">
        <div className="grid grid-cols-1 justify-center gap-8 mt-4 md:mt-8 tablet:grid-cols-2 laptop:grid-cols-3 sm:grid-cols-2">
          {OPEN_SOURCE_CONTRIBUTIONS.map((contribution, index) => {
            return <Contribution
              key={contribution.id}
              index={index}
              {...contribution}
            />
          })}
        </div>
      </div>
    </section>
  );
};

export default OpenSource;