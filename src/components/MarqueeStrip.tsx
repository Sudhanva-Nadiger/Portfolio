import { motion } from "framer-motion";

const KEYWORDS = [
  "Full-Stack",
  "Open Source",
  "React",
  "TypeScript",
  "System Design",
  "Problem Solver",
  "Cloud Native",
  "Performance",
  "Scalable",
  "Ambitious",
];

function KeywordSet() {
  return (
    <>
      {KEYWORDS.map((word, i) => (
        <span key={`${word}-${i}`} className="flex shrink-0 items-center gap-6">
          <span className="whitespace-nowrap text-sm font-medium text-foreground/80 md:text-base">
            {word}
          </span>
          <span className="text-accent/60">&#9670;</span>
        </span>
      ))}
    </>
  );
}

export default function MarqueeStrip() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden border-y border-border/30 bg-muted/20 py-4 backdrop-blur-sm"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />

      <div
        className="marquee-scroll flex w-max gap-6"
      >
        <KeywordSet />
        <KeywordSet />
      </div>
    </motion.div>
  );
}
