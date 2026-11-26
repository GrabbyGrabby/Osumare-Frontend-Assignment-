import { ArrowLeft, ArrowRight, Play, Quote } from "lucide-react";
import { useState } from "react";
import { TESTIMONIALS } from "../data/landingData";

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const current = TESTIMONIALS[index];

  const handlePrev = () => {
    setPlaying(false);
    setIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setPlaying(false);
    setIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-[-0.02em] text-slate-900">
            What Our Pharma Partners Say
          </h2>
          <p className="mt-3 text-sm sm:text-base font-light text-slate-600">
            Driving Transformations, One Brand at a Time
          </p>
        </div>

        <div className="mt-12 bg-white rounded-[28px] p-6 sm:p-10 border border-slate-200/80 shadow-[0_24px_56px_-16px_rgba(15,23,42,0.1)] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Video Thumbnail */}
          <div className="md:col-span-6 relative rounded-[20px] overflow-hidden bg-slate-900 aspect-[4/3] flex items-center justify-center group">
            <img
              src="/assets/tabish-photo.png"
              alt={`${current.name} testimonial video thumbnail`}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/24" />
            {playing && (
              <p className="relative z-10 mt-20 text-xs font-mono-accent uppercase tracking-widest text-white bg-black/60 px-3 py-1 rounded-full">
                Playing Partner Story...
              </p>
            )}

            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              aria-label={
                playing ? "Pause partner video" : "Play partner video"
              }
              className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-white text-[#0078ff] flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0078ff]"
            >
              <Play className="w-5 h-5 fill-current ml-0.5" aria-hidden="true" />
            </button>
          </div>

          {/* Quote Content */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#0078ff]/10 text-[#0078ff] flex items-center justify-center font-medium text-sm">
                  {current.initials}
                </div>
                <div>
                  <p className="text-base font-medium text-slate-900">
                    {current.name}
                  </p>
                  <p className="text-xs font-light text-slate-500">
                    {current.role}
                  </p>
                </div>
              </div>
              <Quote
                className="w-9 h-9 text-[#0078ff]/80 shrink-0"
                aria-hidden="true"
              />
            </div>

            <blockquote className="text-base sm:text-lg font-light text-slate-700 leading-relaxed">
              &ldquo;{current.quote}&rdquo;
            </blockquote>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="w-12 h-12 rounded-full border border-[#0078ff] text-[#0078ff] flex items-center justify-center transition-colors duration-200 hover:bg-black hover:text-white hover:border-black active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0078ff]"
          >
            <ArrowLeft className="w-5 h-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="w-12 h-12 rounded-full border border-[#0078ff] text-[#0078ff] flex items-center justify-center transition-colors duration-200 hover:bg-black hover:text-white hover:border-black active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0078ff]"
          >
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
