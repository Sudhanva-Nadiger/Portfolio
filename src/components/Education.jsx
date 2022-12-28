
import { educationList } from "../Content";
import Lottie from "react-lottie";
import animationData from "../assets/images/Education/login.json";
import { motion } from "framer-motion";

// lottie config
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const FeatureCard = ({
  icon,
  title,
  degree,
  duration,
  content1,
  content2,
  index,
}) => (
  <div
    className={`flex flex-row p-2 rounded-[20px]
	${index === educationList.length - 1 ? "mb-0" : "mb-6"} feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full items-center justify-center bg-dimBlue`}
    >
      {/* <img src="" alt="National Institute Of Technology, Karnataka@seekpng.com" className="bg-blue"></img> */}
      <img src={icon} alt="icon" className="w-[80%] h-[80%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-4">
      <h4 className="font-semibold text-dark_primary text-[20px] leading-[30px] mb-1 text-gradient2">
        {title}
      </h4>
      <p className="font-normal text-light_secondary text-[16px] leading-[30px] mb-1 ">
        {degree}
      </p>
      <p className="font-poppins font-normal text-dimWhite text-[14px] leading-[30px] mb-1">
        {duration}
      </p>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[30px] mb-1">
        - {content1}
      </p>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[30px] mb-1">
        - {content2}
      </p>
    </div>
  </div>
);

const Education = () => {
  return (
    <section id="education" className="bg-primaryLinear pt-4 min-h-screen">
      <h1 className="flex-1 font-semibold ss:text-[55px] text-[45px] sm:px-16 px-6 ss:leading-[80px] leading-[80px]">
        Education
      </h1>
      <motion.div
        className="flex md:flex-row flex-col-reverse py-1 gap-10 px-2"
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <div className="flex md:flex-row flex-col-reverse py-6">
            <Lottie options={defaultOptions} width={400} height={400} />
        </div>
        

        <div className={`flex-1 flex justify-center items-start flex-col`}>
          {educationList.map((feature, index) => (
            <FeatureCard key={feature.id} index={index} {...feature} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;