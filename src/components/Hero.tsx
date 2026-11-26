import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden hero-grid-bg pt-32 pb-16 sm:pt-40 sm:pb-24 px-4 sm:px-6"
    >
      {/* Subtle ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[680px] h-[360px] rounded-full bg-sky-200/35 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-3xl sm:text-5xl lg:text-[52px] font-medium tracking-[-0.02em] leading-[1.18] text-slate-900"
        >
          Elevate{" "}
          <span className="text-[#0078ff] font-semibold">
            Real Estate Success
          </span>{" "}
          with
          <br className="hidden sm:inline" /> Osumare&apos;s Digital Expertise
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
          className="mt-5 text-base sm:text-lg font-light text-slate-600 max-w-2xl mx-auto"
        >
          Tailored Solutions for Thriving in the Digital Real Estate Landscape
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
          className="mt-8"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-[#0078ff] px-10 py-3.5 text-sm sm:text-base font-medium text-white shadow-[0_12px_28px_-8px_rgba(0,120,255,0.45)] transition-all duration-200 hover:bg-black hover:text-white hover:-translate-y-0.5 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0078ff] focus-visible:ring-offset-2"
          >
            Get started
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
          className="mt-12 sm:mt-16"
        >
          <img
            src="/assets/hero-house.png"
            alt="Illustration of a house next to a wooden sign reading We Need Marketing"
            width={797}
            height={539}
            loading="eager"
            fetchPriority="high"
            className="w-full max-w-[560px] h-auto mx-auto object-contain mix-blend-multiply"
          />
        </motion.div>
      </div>
    </section>
  );
}
