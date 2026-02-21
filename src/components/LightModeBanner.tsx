import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, AlertTriangle } from "lucide-react";
import { useTheme } from "@/lib/theme";

export default function LightModeBanner() {
  const { theme } = useTheme();
  const [dismissed, setDismissed] = useState(false);

  if (theme === "dark" || dismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 200 }}
        className="fixed bottom-6 left-6 z-[60] flex items-center gap-2.5 rounded-lg border border-amber-400/30
                   bg-amber-50 px-4 py-2.5 shadow-lg dark:hidden"
      >
        <AlertTriangle className="h-4 w-4 shrink-0 text-amber-600" />
        <span className="text-xs font-medium text-amber-800">
          Light mode is experimental. There might be some visual quirks.
        </span>
        <button
          onClick={() => setDismissed(true)}
          className="ml-1 shrink-0 rounded-full p-0.5 text-amber-600 transition-colors hover:bg-amber-200/50"
          aria-label="Dismiss"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
