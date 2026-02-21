import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { GraduationCap, MapPin, BookOpen } from "lucide-react";
import { EDUCATION_LIST } from "@/constants";
import educationAnimation from "@/assets/images/Education/login.json";

export default function Education() {
  const edu = EDUCATION_LIST[0];

  return (
    <section id="education" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">Academic background</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="relative mt-12 overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm"
      >
        {/* Decorative background gradient */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/5 blur-[80px]" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-sky-400/5 blur-[80px]" />
        </div>

        <div className="relative grid items-center gap-6 p-6 md:grid-cols-5 md:gap-10 md:p-10">
          {/* Lottie — takes 2 cols */}
          <div className="order-2 flex items-center justify-center md:order-1 md:col-span-2">
            <div className="w-48 md:w-full md:max-w-[280px]">
              <Lottie animationData={educationAnimation} loop />
            </div>
          </div>

          {/* Content — takes 3 cols */}
          <div className="order-1 md:order-2 md:col-span-3">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white/90 p-1.5 shadow-sm dark:bg-white/10">
                <img
                  src={edu.icon}
                  alt={edu.title}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold leading-tight md:text-xl">
                  {edu.title}
                </h3>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2.5">
              <GraduationCap className="h-4 w-4 text-accent" />
              <span className="font-medium text-accent">{edu.degree}</span>
            </div>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <div className="flex items-center gap-2.5 rounded-lg bg-muted/40 px-3 py-2.5">
                <BookOpen className="h-4 w-4 shrink-0 text-muted-foreground" />
                <span className="text-sm">{edu.content1}</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-lg bg-muted/40 px-3 py-2.5">
                <BookOpen className="h-4 w-4 shrink-0 text-muted-foreground" />
                <span className="text-sm">{edu.content2}</span>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                <span>Surathkal, Karnataka</span>
              </div>
              <span className="text-border">|</span>
              <span>{edu.duration}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
