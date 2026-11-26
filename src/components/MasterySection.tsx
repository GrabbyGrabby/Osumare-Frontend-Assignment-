export default function MasterySection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl sm:text-4xl font-semibold tracking-[-0.02em] text-slate-900">
          Real Estate-Focused Digital Mastery
        </h2>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-1">
            <div
              className="relative w-full max-w-[480px] aspect-[5/4] mx-auto"
              role="img"
              aria-label="Illustration of digital growth with an upward blue arrow"
            >
              <img
                src="/assets/mastery-bg1.svg"
                alt=""
                loading="lazy"
                className="absolute inset-0 w-full h-full object-contain"
              />
              <img
                src="/assets/mastery-bg2.svg"
                alt=""
                loading="lazy"
                className="absolute inset-0 w-full h-full object-contain"
              />
              <img
                src="/assets/mastery-floor.svg"
                alt=""
                loading="lazy"
                className="absolute bottom-0 inset-x-0 w-full object-contain"
              />
              <img
                src="/assets/mastery-plant.svg"
                alt=""
                loading="lazy"
                className="absolute bottom-0 left-[4%] w-[18%] object-contain"
              />
              <img
                src="/assets/mastery-arrow.svg"
                alt=""
                loading="lazy"
                className="absolute bottom-0 left-[4%] w-[84%] object-contain"
              />
              <img
                src="/assets/mastery-bubble.svg"
                alt=""
                loading="lazy"
                className="absolute top-[14%] right-[8%] w-[14%] object-contain"
              />
              <img
                src="/assets/mastery-char.svg"
                alt=""
                loading="lazy"
                className="absolute bottom-0 right-[6%] w-[36%] object-contain"
              />
            </div>
          </div>

          <div className="order-2 space-y-5">
            <h3 className="text-xl sm:text-3xl font-medium tracking-[-0.015em] text-slate-900 leading-snug">
              Unlock the Potential of Digital Real Estate Excellence
            </h3>
            <p className="text-sm sm:text-base font-light text-slate-600 leading-relaxed">
              At Osumare, we understand that the real estate landscape demands a
              digital presence that aligns with the intricacies of property
              marketing. Our range of specialized services is meticulously
              designed to catapult your brand&apos;s success in the
              ever-evolving digital property market.
            </p>
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#0078ff] px-9 py-3 text-sm sm:text-base font-medium text-white shadow-[0_10px_24px_-8px_rgba(0,120,255,0.45)] transition-all duration-200 hover:bg-black hover:text-white active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0078ff] focus-visible:ring-offset-2"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
