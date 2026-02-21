import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants";
import ThemeToggle from "./ThemeToggle";
import Magnetic from "./Magnetic";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.link.replace("#", ""));

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    }

    const homeEl = document.getElementById("home");
    const homeObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActiveSection("");
      },
      { threshold: 0.4 }
    );
    if (homeEl) homeObserver.observe(homeEl);

    return () => {
      sectionObserver.disconnect();
      homeObserver.disconnect();
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/50 bg-background/80 backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Magnetic strength={0.3}>
          <a
            href="#"
            className="text-lg font-bold tracking-tight transition-colors hover:text-accent"
          >
            <span className="text-muted-foreground">&lt;</span>
            SN
            <span className="text-muted-foreground"> /&gt;</span>
          </a>
        </Magnetic>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((item) => (
            <Magnetic key={item.link} strength={0.25}>
              <a
                href={item.link}
                className={`relative text-sm font-medium transition-colors ${
                  activeSection === item.link
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.title}
                {activeSection === item.link && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            </Magnetic>
          ))}
          <Magnetic strength={0.3}>
            <ThemeToggle />
          </Magnetic>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full
                       border border-border bg-card"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-b border-border/50 bg-background/95 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.link}
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    activeSection === item.link
                      ? "bg-accent/10 text-accent"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
