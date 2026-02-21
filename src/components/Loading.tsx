import { motion } from "framer-motion";
import Lottie from "lottie-react";
import heroAnimation from "@/assets/images/Hero/main_comp.json";

export default function Loading() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-64 md:w-80"
      >
        <Lottie animationData={heroAnimation} loop />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="mt-6"
      >
        <span className="text-lg font-bold tracking-tight">
          <span className="text-muted-foreground">&lt;</span>
          <span className="gradient-text">Sudhanva</span>
          <span className="text-muted-foreground"> /&gt;</span>
        </span>
      </motion.div>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "8rem" }}
        transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
        className="mt-4 h-0.5 rounded-full bg-accent/60"
      />
    </motion.div>
  );
}
