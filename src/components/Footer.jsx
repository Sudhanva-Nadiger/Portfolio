import React from "react";
import Button from "./Button";
import { socialMedia, aboutMe } from "../Content";
import  profilePic  from "../assets/images/Sudhanva.jpeg";
import { resumeLink, repoLink } from "../Content";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => (
  <footer id="contact" className=" bg-secondaryLinear sm:px-16 px-6">
    <div
      className={`flex md:flex-row flex-col-reverse sm:py-16 py-6 xl:max-w-[1280px] w-full mx-auto gap-y-4 `}
    >
      <div className={"flex-1 flex-col flex justify-center items-start"}>
        <h2 className="text-xl font-bold font-poppins dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
          {aboutMe.name}
        </h2>
        <p
          className={`font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px] max-w-[470px] mt-5`}
        >
        {aboutMe.tagLine}
        </p>
        <div className="flex flex-row mt-4">
          {socialMedia.map((social, index) => (
            <a
              href={social.link}
              target="_blank"
              key={social.id}
              index={index}
              className="mr-5 text-[25px] hover:text-teal-200"
            >
              {React.createElement(social.icon)}
            </a>
          ))}
        </div>

        <div className="grid grid-cols-2">
          {/* styles is a prop */}
          <a href={resumeLink} target="_blank">
            <Button styles="mt-10 mr-3" text="Resume" icon="AiFillGithub" />
          </a>
          <a href={repoLink} target="_blank">
            <Button
              styles="mt-10 inline-flex items-center justify-center"
              text="Star"
              icon={AiFillGithub}
            />
          </a>
        </div>
      </div>

      <div className="md:ml-auto mt-10 md:mt-0">
        <img
          src={profilePic}
          alt="Sudhanva Nadiger"
          className="w-[200px] h-[200px] border-2 border-teal-200 relative z-[5] rounded-full"
        />
      </div>
    </div>
  </footer>
);

export default Footer;