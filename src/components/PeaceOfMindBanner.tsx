export default function PeaceOfMindBanner() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 ambient-dual-glow">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl sm:text-4xl font-semibold tracking-[-0.02em] text-slate-900">
          Your Peace of Mind
        </h2>
        <p className="mt-4 text-sm sm:text-lg font-light text-slate-600 leading-relaxed">
          Through our conversion-focused strategies, we ensure that property
          seekers are not just visitors, but engaged prospects ready to make
          their next move in the real estate market
        </p>
        <div className="mt-8">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-[#0078ff] px-10 py-3.5 text-sm sm:text-base font-medium text-white shadow-[0_12px_28px_-8px_rgba(0,120,255,0.45)] transition-all duration-200 hover:bg-black hover:text-white active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0078ff] focus-visible:ring-offset-2"
          >
            Get started
          </a>
        </div>
      </div>
    </section>
  );
}
