import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { SOCIAL_MEDIA, ABOUT_ME, RESUME_LINK } from "@/constants";
import Magnetic from "./Magnetic";
import profilePic from "@/assets/images/profile.png";

export default function Footer() {
  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center"
      >
        <div className="relative mb-6">
          <div className="h-28 w-28 overflow-hidden rounded-full border-2 border-accent/30 p-1">
            <img
              src={profilePic}
              alt={ABOUT_ME.name}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[10px] text-accent-foreground">
            👋
          </span>
        </div>

        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle mx-auto mt-3">
          I'm currently open to new opportunities. Whether you have a question
          or just want to say hi, my inbox is always open.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Magnetic strength={0.2}>
            <a
              href={`mailto:${ABOUT_ME.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5
                         text-sm font-medium text-accent-foreground transition-all
                         hover:opacity-90 hover:shadow-lg hover:shadow-accent/20"
            >
              <Mail className="h-4 w-4" />
              Say Hello
            </a>
          </Magnetic>
          <Magnetic strength={0.2}>
            <a
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border
                         bg-card/50 px-6 py-2.5 text-sm font-medium transition-all hover:bg-muted"
            >
              Resume
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Magnetic>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          {SOCIAL_MEDIA.map((social) => (
            <Magnetic key={social.id} strength={0.4}>
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <social.icon className="h-5 w-5" />
              </a>
            </Magnetic>
          ))}
        </div>
      </motion.div>

      <footer className="mt-16 border-t border-border/50 pt-8 text-center">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {ABOUT_ME.name}.
        </p>
      </footer>
    </section>
  );
}
