import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { OsumareLogo } from "./Illustrations";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 96) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <div className="fixed inset-x-0 top-0 z-50 px-4 sm:px-6 pt-4 pointer-events-none flex justify-center">
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -80, opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.24, ease: "easeInOut" }}
        className="pointer-events-auto w-full max-w-6xl bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-full px-4 sm:px-6 h-16 flex items-center justify-between shadow-[0_10px_30px_-10px_rgba(15,23,42,0.08)]"
      >
        <OsumareLogo />

        <nav aria-label="Primary navigation" className="flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-900/20 bg-white px-5 py-2 text-sm font-medium text-slate-900 transition-all duration-200 hover:bg-slate-900 hover:text-white active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0078ff]"
          >
            Contact us
          </a>
        </nav>
      </motion.header>
    </div>
  );
}
