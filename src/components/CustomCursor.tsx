import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const LINK_SELECTORS =
  "a, button, [data-cursor-hover]";

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    },
    [cursorX, cursorY]
  );

  useEffect(() => {
    const hasTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(hasTouch);
    if (hasTouch) return;

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseleave", () => setHidden(true));
    window.addEventListener("mouseenter", () => setHidden(false));

    const onOver = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest(LINK_SELECTORS)) setHovered(true);
    };
    const onOut = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest(LINK_SELECTORS)) setHovered(false);
    };

    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseout", onOut, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, [onMouseMove]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Small trailing dot — always visible */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: hidden ? 0 : 1,
          scale: hovered ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      >
        <div className="h-1.5 w-1.5 rounded-full bg-white" />
      </motion.div>

      {/* Ring — only appears on link/button hover */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: hidden ? 0 : hovered ? 1 : 0,
          scale: hovered ? 1 : 0.5,
          width: 56,
          height: 56,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      >
        <div
          className="h-full w-full rounded-full border border-white/60"
          style={{ background: "rgba(255,255,255,0.06)" }}
        />
      </motion.div>
    </>
  );
}
