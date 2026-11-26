import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { FAQS } from "../data/landingData";

export default function FaqSection() {
  const [openId, setOpenId] = useState<string>("faq-3");

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#f9fafb]">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-[-0.02em] text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base font-light text-slate-600 max-w-xl mx-auto">
            Pinpoint your audience with precision, ensuring your marketing
            efforts reach those most likely to engage with your brand.
          </p>
        </div>

        <div className="mt-12 bg-white rounded-[24px] overflow-hidden border border-slate-200/80 shadow-[0_16px_40px_-14px_rgba(15,23,42,0.08)] divide-y divide-slate-100">
          {FAQS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`panel-${item.id}`}
                  onClick={() => setOpenId(isOpen ? "" : item.id)}
                  className={`w-full px-6 py-5 text-left flex items-center justify-between gap-4 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0078ff] ${
                    isOpen
                      ? "bg-[#0078ff] text-white"
                      : "bg-white text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <span className="text-sm sm:text-base font-medium">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-white" : "text-slate-500"
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`panel-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-5 text-sm sm:text-base font-light text-slate-600 leading-relaxed bg-white">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
