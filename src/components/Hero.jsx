import { motion } from 'framer-motion'
import Lottie from "react-lottie";

import { CONTENT, SOCIAL_MEDIA } from "../constants";
import Button from './Button';


const Hero = () => {
	const { hero } = CONTENT;
	const { link: linkedInLink } = SOCIAL_MEDIA[0]

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: hero.image,
		progressiveLoad: true,
		HorizontalOptions: "FillAndExpand",
		VerticalOptions: "FillAndExpand",
		rendererSettings: {
			preserveAspectRatio: "xMaxYmax meet"
		}
	};

	return (
		<motion.section
			initial={{ x: -100, opacity: 0.25 }}
			animate={{ x: 0, opacity: 1.5 }}
			transition={{ duration: 1 }}
			id="home" className="overflow-hidden bg-primaryLinear md:bg-none w-full">
			<div className="relative flex laptop:flex-row flex-col justify-around items-center">
				<div
					data-aos="slide-right"
					data-aos-delay="500"
					className="absolute hidden md:block w-screen h-full top-0 right-0 bg-primaryLinear bottom-0 -z-10"
				>
				</div>

				{/* first col */}
				<div className="pb-1 pt-5 mt-10 laptop:pl-10 w-auto flex flex-col">
					<div className='flex flex-col justify-between items-center w-full p-1'>
						<h2 className='flex-1 flex flex-col items-center font-Inria text-center font-semibold text-[52px] text-white leading-[75px]'>
							{hero.title}
							<br className='xs:hidden block' /> {" "}
							{hero.sub1 + " "}
							<br className='block' /> {" "}
							{hero.sub2}
						</h2>
						<div className="flex flex-col w-full items-center ">
							<h1 className=" text-dark_primary font-Poppins text-[56px] leading-[70px]">
								{hero.firstName}
								<span className="text-dark_primary"> <h1 className="text-[56px] sm:text-inherit text-center font-Poppins leading-[75px]" >{hero.LastName}</h1></span>
							</h1>
						</div>
					</div>


					<br />

					<div className="text-center">
						{hero.hero_content.map((content, i) => (
							<motion.div
								whileInView={{ y: [20, 0], opacity: [0, 1] }}
								transition={{ duration: 1, type: 'spring', stiffness: "120" }}
								key={i}
								className={`flex items-center w-auto xs:w-80 gap-1 ${i === 1 && " flex-row-reverse text-right"}  `}>
								<h3>{content.count}</h3>
								<p className="text-light_secondary">{content.text}</p>
							</motion.div>
						))}
					</div>

					<motion.div
						whileInView={{ y: [20, 0], opacity: [0, 1] }}
						transition={{ duration: 1, type: 'spring', stiffness: "120" }}
					>
						<a href={linkedInLink} target="_blank">
							<Button styles={'w-full bg-letsConnect font-bold mt-3'} text={'Lets connect'} />
						</a>
					</motion.div>
				</div>

				{/* sec col */}
				<div className="md:h-[37rem] pointer-events-none mt-3">
					<Lottie options={defaultOptions} />
				</div>
			</div>
		</motion.section>
	);
};

export default Hero;
