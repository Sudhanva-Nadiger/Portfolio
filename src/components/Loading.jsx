
import { motion } from "framer-motion";
import Logo from "./Logo";


const Loading = ({isLoading}) => {
    return(
        <motion.div
            id="loading"
            className={`w-[100vw] h-[100vh] flex justify-center items-center`}
            initial={{ scale: 1.0, opacity: 0.25 }}
            animate={{ scale: 2.0, opacity: 1 }}
            transition={{
                yoyo: Infinity,
                duration: 1.0,
                ease: "easeInOut",
            }}
          >
           <Logo isLoading={isLoading} />
          </motion.div>
        )
   
};

export default Loading;