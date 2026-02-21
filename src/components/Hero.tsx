import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { ArrowDown, FileText, Linkedin } from "lucide-react";
import { ABOUT_ME, SOCIAL_MEDIA, RESUME_LINK } from "@/constants";

const LINKEDIN_URL = "https://www.linkedin.com/in/sudhanva-nadiger-b616a6212/";
import Magnetic from "./Magnetic";
import heroAnimation from "@/assets/images/Hero/main_comp.json";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="cyan__gradient absolute left-1/3 top-1/4 h-[350px] w-[350px] -translate-x-1/2 rounded-full opacity-20 dark:opacity-[0.06]" />
      </div>

      <div className="section-container relative">
        <div className="grid items-center gap-10 md:grid-cols-5 md:gap-12">
          {/* Left — Text content */}
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-border
                         bg-card/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Available for opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              Hi, I'm{" "}
              <span className="gradient-text">{ABOUT_ME.firstName}</span>
              <br />
              <span className="gradient-text">{ABOUT_ME.lastName}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 max-w-md text-base text-muted-foreground md:text-lg"
            >
              {ABOUT_ME.tagLine}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 flex items-center gap-3"
            >
              {SOCIAL_MEDIA.map((social) => (
                <Magnetic key={social.id} strength={0.4}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full
                               border border-border bg-card/50 text-muted-foreground
                               transition-all hover:-translate-y-0.5 hover:border-accent/50
                               hover:text-foreground hover:shadow-lg hover:shadow-accent/5"
                  >
                    <social.icon className="h-[18px] w-[18px]" />
                  </a>
                </Magnetic>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <Magnetic strength={0.2}>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5
                             text-sm font-medium text-accent-foreground transition-all
                             hover:opacity-90 hover:shadow-lg hover:shadow-accent/20"
                >
                  Let's Connect
                  <Linkedin className="h-4 w-4" />
                </a>
              </Magnetic>
              <Magnetic strength={0.2}>
                <a
                  href={RESUME_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border
                             bg-card/50 px-6 py-2.5 text-sm font-medium text-foreground
                             transition-all hover:bg-muted"
                >
                  <FileText className="h-4 w-4" />
                  Resume
                </a>
              </Magnetic>
            </motion.div>
          </div>

          {/* Right — Lottie animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="hidden md:col-span-2 md:block"
          >
            <div className="relative">
              <div className="cyan__gradient absolute -right-10 -top-10 h-48 w-48 rounded-full opacity-25 dark:opacity-10" />
              <Lottie
                animationData={heroAnimation}
                loop
                className="w-full max-w-md"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll down arrow */}
        <motion.a
          href="#experience"
          aria-label="Scroll to experience section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-5 w-5 text-muted-foreground/50 transition-colors hover:text-accent" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
