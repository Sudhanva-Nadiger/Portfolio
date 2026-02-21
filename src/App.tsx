import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Loading from "@/components/Loading";
import GradientOrbs from "@/components/GradientOrbs";
import CustomCursor from "@/components/CustomCursor";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";
import TLDR from "@/components/TLDR";
import Footer from "@/components/Footer";
import LightModeBanner from "@/components/LightModeBanner";
import TLDRFloat from "@/components/TLDRFloat";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) return;
    const hash = window.location.hash;
    if (!hash) return;
    requestAnimationFrame(() => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView();
    });
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loading key="loading" />}
      </AnimatePresence>

      {!loading && (
        <div className="relative min-h-screen">
          <CustomCursor />
          <LightModeBanner />
          <GradientOrbs />
          <Navbar />
          <ScrollToTop />
          <TLDRFloat />
          <main>
            <Hero />
            <MarqueeStrip />
            <Experience />
            <Skills />
            <Education />
            <Projects />
            <OpenSource />
            <TLDR />
            <Footer />
          </main>
        </div>
      )}
    </>
  );
}
