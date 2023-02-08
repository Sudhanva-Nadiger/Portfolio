import React, { useState, useEffect } from "react";
import { openSourceContributions } from "../Content";
import { DiGitMerge, DiGitPullRequest } from "react-icons/di";
import { VscIssues } from "react-icons/vsc";
import { motion } from "framer-motion";

const Contribution = (props) => {
  return (
    <motion.div
      className="flex flex-col bg-dark_primary justify-evenly max-w-[320px] p-6 rounded-[20px] my-5 transition-colors duration-300 transform border hover:border-transparent dark:border-gray-700 dark:hover:border-transparent"
      whileInView={{ x: [-80, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-row w-full">
        <img
          src={props.logo}
          alt={props.organisation}
          className="w-[30px] h-[30px] rounded-full mt-2"
        />
        <div className="flex flex-col ml-4 flex-wrap">
          <a
            className="font-poppins font-normal text-[16px] text-gray-200 my-1 leading-[24px] hover:text-[bg_light_primary]"
            href={props.link}
            target="_blank"
          >
            {props.title}
          </a>
          <p className="font-poppins italic font-normal flex-wrap text-[14px] text-gray-400 text-dimWhite my-1">
            {props.organisation}/{" " + props.repo}
          </p>
        </div>
      </div>

      <div
        className={`flex flex-row ${
          props.linesAdded ? "justify-around ml-2" : "ml-10"
        } mt-4`}
      >
        <a
          className="font-poppins font-normal text-[12px] text-gray-400 inline"
          href={props.link}
          target="_blank"
        >
          {props.type === "pull-request" ? (
            props.status === "merged" ? (
              <DiGitMerge size="1.5rem" className="text-violet-700 inline" />
            ) : (
              <DiGitPullRequest
                size="1.5rem"
                className="text-green-600 inline"
              />
            )
          ) : props.status === "open" ? (
            <VscIssues size="1.5rem" className="text-green-600 inline" />
          ) : (
            <VscIssues size="1.5rem" className="text-violet-700 inline" />
          )}{" "}
          {props.number}
        </a>
        {props.linesAdded ? (
          <p className="font-poppins font-normal text-[14px]">
            <span className="text-green-600">+{props.linesAdded} </span>
            <span className="text-red-700">-{props.linesDeleted}</span>
          </p>
        ) : (
          ""
        )}
      </div>
    </motion.div>
  );
};

const OpenSource = () => {
  const [contributions, setContributions] = useState([]);
  const [filterContribution, setFilterContribution] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    setContributions(openSourceContributions);
    setFilterContribution(openSourceContributions);
  }, []);

  const handleContributionFilter = (item) => {
    setActiveFilter(item);

    setTimeout(() => {
      if (item === "All") {
        setFilterContribution(contributions);
      } else {
        setFilterContribution(
          contributions.filter(
            (contribution) => contribution.organisation == item
          )
        );
      }
    }, 500);
  };

  return (
    <section id="openSrc" className="bg-primaryLinear mx:3 p-4">
      <h1 className="flex-1 pl-2 font-Poppins font-semibold ss:text-[55px] sm:text-[45px] ss:leading-[80px] leading-[80px]">
        Open Source Contributions
      </h1>

      <div className="py-5 mb-8 flex justify-center">
        {/* <div class="flex items-center justify-center">
          <div class="flex items-center p-1 border border-blue-gradient dark:border-teal-400 rounded-xl">
            {["PublicLab", "Zulip", "All"].map((item, index) => (
              <button
                key={index}
                onClick={() => handleContributionFilter(item)}
                className={`px-2 py-2 text-sm font-medium text-white md:py-3 rounded-xl md:px-6 capitalize transition-colors duration-300 focus:outline-none hover:bg-teal-400 font-poppins ${
                  activeFilter === item ? "bg-teal-400" : ""
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div> */}

        <div className="grid grid-cols-1 justify-center gap-8 mt-8 md:mt-16 tablet:grid-cols-2 laptop:grid-cols-3 sm:grid-cols-2">
          {filterContribution.map((contribution, index) => (
            <Contribution
              key={contribution.id}
              index={index}
              {...contribution}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSource;