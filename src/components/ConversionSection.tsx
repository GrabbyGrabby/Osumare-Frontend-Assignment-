export default function ConversionSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#f9fafb]">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-[-0.02em] text-slate-900">
            Driving Property Inquiries to Conversions
          </h2>
          <p className="mt-3 text-sm sm:text-base font-light text-slate-600">
            Streamlined Strategies for Real Estate Success
          </p>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div
              className="relative w-full max-w-[500px] aspect-[5/4] mx-auto"
              role="img"
              aria-label="House inspected by a magnifying glass"
            >
              <img
                src="/assets/conv-bg.svg"
                alt=""
                loading="lazy"
                className="absolute inset-0 w-full h-full object-contain"
              />
              <img
                src="/assets/conv-clouds.svg"
                alt=""
                loading="lazy"
                className="absolute top-0 left-[14%] w-[60%] object-contain"
              />
              <img
                src="/assets/conv-house.svg"
                alt=""
                loading="lazy"
                className="absolute top-[22%] left-[9%] w-[78%] object-contain"
              />
              <img
                src="/assets/conv-glass.svg"
                alt=""
                loading="lazy"
                className="absolute bottom-0 right-[2%] w-[85%] object-contain"
              />
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-xl sm:text-3xl font-medium tracking-[-0.015em] text-slate-900 leading-snug">
              Optimized Path to Property Purchase
            </h3>
            <p className="text-sm sm:text-base font-light text-slate-600 leading-relaxed">
              In the dynamic realm of real estate, the journey from a property
              inquiry to a successful conversion demands a well-crafted
              approach. At Osumare, we specialize in guiding potential buyers
              through this journey seamlessly, maximizing
              inquiries-turned-conversions with expert strategies.
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
