import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TLDRFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("home");
      const tldr = document.getElementById("tldr");
      if (!hero) return;

      const pastHero = window.scrollY > hero.offsetHeight * 0.6;
      const atTldr = tldr
        ? tldr.getBoundingClientRect().top < window.innerHeight * 0.8
        : false;

      setVisible(pastHero && !atTldr);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#tldr"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          style={{
            position: "fixed",
            right: 0,
            top: 112,
            zIndex: 50,
            borderTopLeftRadius: 12,
            borderBottomLeftRadius: 12,
            borderRight: "none",
          }}
          className="flex items-center gap-2.5 border border-border/50
                     bg-card/80 px-4 pr-3 py-3 shadow-md backdrop-blur-md
                     transition-all duration-300 hover:border-accent/30 hover:text-foreground"
        >
          <span className="flex h-6 w-6 items-center justify-center bg-accent/15 text-sm">
            ⚡
          </span>
          <span className="text-[11px] font-semibold text-muted-foreground">
            TL;DR
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
