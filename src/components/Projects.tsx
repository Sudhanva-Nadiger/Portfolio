import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import { PROJECTS } from "@/constants";

const INITIAL_SHOW = 6;

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, INITIAL_SHOW);

  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">A selection of things I've built</p>
      </motion.div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="glass-card group flex flex-col p-5"
            >
              <div className="flex items-start gap-4">
                {/* Round image icon */}
                {project.image && (
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-muted/50">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold transition-colors group-hover:text-accent">
                      {project.title}
                    </h3>
                    <div className="flex shrink-0 items-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                        aria-label={`${project.title} GitHub`}
                      >
                        <Github className="h-4 w-4" />
                      </a>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground transition-colors hover:text-foreground"
                          aria-label={`${project.title} live demo`}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {project.content}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span key={tech.id} className="pill text-[11px]">
                    <tech.icon className="h-3 w-3" />
                    {tech.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {PROJECTS.length > INITIAL_SHOW && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 rounded-full border border-border
                       bg-card/50 px-5 py-2 text-sm font-medium text-muted-foreground
                       transition-all hover:border-accent/30 hover:text-foreground"
          >
            {showAll ? (
              <>
                Show Less <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                Show All ({PROJECTS.length}){" "}
                <ChevronDown className="h-4 w-4" />
              </>
            )}
          </button>
        </motion.div>
      )}
    </section>
  );
}
