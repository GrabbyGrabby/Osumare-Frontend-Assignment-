export default function InsightsSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-[-0.02em] text-slate-900">
            Navigating Real Estate&apos;s Digital Landscape
          </h2>
          <p className="mt-3 text-sm sm:text-base font-light text-slate-600">
            Insights for Real Estate Marketing Advantage
          </p>
        </div>

        <div className="mt-12 sm:mt-16">
          <img
            src="/assets/insights-expert.png"
            alt="Navigating Real Estate's Digital Landscape — Market Trends Analysis, Targeted Buyer Persona, Competitor Insights, Visual Content Appeal, and We Are Expert presentation"
            width={1024}
            height={574}
            loading="lazy"
            className="w-full max-w-5xl h-auto mx-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
