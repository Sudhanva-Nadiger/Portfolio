import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { EXPERIENCES } from "@/constants";

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">Where I've worked and contributed</p>
      </motion.div>

      <div className="relative mt-12">
        {/* Timeline line */}
        <div className="absolute left-[19px] top-2 hidden h-[calc(100%-16px)] w-px bg-border md:block" />

        <div className="space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.organisation}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-2.5 top-1.5 hidden h-3 w-3 rounded-full border-2 border-accent bg-background md:block" />

              <div className="glass-card p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-muted">
                      <img
                        src={exp.logo}
                        alt={exp.organisation}
                        className="h-7 w-7 object-contain"
                      />
                    </div>
                    <div>
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold transition-colors hover:text-accent"
                      >
                        {exp.organisation}
                      </a>
                    </div>
                  </div>
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                <div className="mt-4 space-y-4">
                  {exp.positions.map((pos, posIdx) => {
                    const allTech = pos.content
                      ?.flatMap((c) => c.tech ?? [])
                      .filter(
                        (t, i, arr) => arr.findIndex((x) => x.id === t.id) === i
                      );

                    return (
                      <div
                        key={posIdx}
                        className={
                          posIdx > 0 ? "border-t border-border/50 pt-4" : ""
                        }
                      >
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                          <h4 className="text-sm font-medium">{pos.title}</h4>
                          <span className="text-xs text-muted-foreground">
                            {pos.duration}
                          </span>
                        </div>

                        {pos.content && pos.content.length > 0 && (
                          <div className="mt-2.5 space-y-1.5">
                            {pos.content.map((c, cIdx) => (
                              <div key={cIdx} className="flex gap-2 text-sm text-muted-foreground">
                                {pos.content!.length > 1 && (
                                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
                                )}
                                <p>{c.text}</p>
                              </div>
                            ))}
                          </div>
                        )}

                        {allTech && allTech.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {allTech.map((t) => (
                              <span key={t.id} className="pill text-[11px]">
                                <t.icon className="h-3 w-3" />
                                {t.name}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
