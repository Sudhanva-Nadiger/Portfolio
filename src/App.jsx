// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";
import Loading from "./components/Loading";
import OpenSource from "./components/OpenSource";
import Experience from "./components/Experience";

const App = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => { setIsLoading(false) }, 1600);
  }, [])

  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);

  if (isLoading) {
    return (
      <div className="bg-primary w-full overflow-hidden bg-secondaryLinear">
        <Loading isLoading={isLoading} />
      </div>
    )
  }

  return (
    <div className="overflow-hidden">
      <div className={`sm:px-16 px-6 flex justify-center items-center`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <Navbar />
        </div>
      </div>

      <div className={`flex justify-center items-start`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <Hero />
        </div>
      </div>
      <div className="bg-secondaryLinear pb-5">
        <Skills />
        <Experience />
      </div>
      <Education />
      <Projects />
      <OpenSource/>
      <Footer />
    </div>
  );
};

export default App;
