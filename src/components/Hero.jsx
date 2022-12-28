// import content
import { useEffect } from "react";
import Lottie from "react-lottie";
import { content } from "../Content";
const Hero = () => {
	const { hero } = content;

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: hero.image,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice"
		}
	};



	return (
		<section id="home" className="overflow-hidden bg-primaryLinear md:bg-none">
			<div className="min-h-screen relative flex lg:flex-row flex-col justify-center items-center">
				<div
					data-aos="slide-right"
					data-aos-delay="500"
					className="absolute hidden md:block w-screen h-full top-0 right-0 bg-primaryLinear bottom-0 -z-10"
				>
				</div>

				{/* first col */}
				<div className="pb-1 pt-5 mt-20 w-auto flex flex-col" data-aos="fade-down">
					<div className='flex flex-col justify-between items-center w-full p-1'>
						<h2 className='flex-1 flex flex-col items-center text-center font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]'>
							{hero.title}
							<br className='sm:hidden block' /> {" "}
							{hero.sub1 + " "}
							<br className='block' /> {" "}
							{hero.sub2}
						</h2>
						<div className="flex flex-col w-full items-center">
							<h1 className=" text-dark_primary">
								{hero.firstName}
								<span className="text-dark_primary"> <h1 className=" text-center" >{hero.LastName}</h1></span>
							</h1>
						</div>
					</div>


					<br />

					<div className="text-center">
						{hero.hero_content.map((content, i) => (
							<div
								key={i}
								data-aos="fade-down"
								data-aos-delay={i * 300}
								className={`flex items-center w-auto xs:w-80 gap-1 ${i === 1 && " flex-row-reverse text-right"}  `}>
								<h3>{content.count}</h3>
								<p className="text-light_secondary">{content.text}</p>
							</div>
						))}
					</div>
				</div>

				{/* sec col */}
				<div className="md:h-[37rem] pointer-events-none mt-3 md:w-[50%]">
					< Lottie options={defaultOptions} />
				</div>
			</div>
		</section>
	);
};

export default Hero;
