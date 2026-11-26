import {
  CONVERSION_PILLARS,
  EXPERTISE_IN_ACTION,
  type PillarItem,
} from "../data/landingData";

const PILLAR_IMG_MAP: Record<string, string> = {
  "cta-opt": "/assets/pillar-cta.png",
  "landing-efficiency": "/assets/pillar-landing.png",
  "social-proof": "/assets/pillar-social.png",
  "mobile-friendly": "/assets/pillar-mobile.png",
  "effective-ctas": "/assets/exp-cta.png",
  "conversion-pages": "/assets/exp-landing.png",
  "trust-building": "/assets/exp-social.png",
  "mobile-success": "/assets/exp-mobile.png",
};

function PillarGrid({
  heading,
  items,
}: {
  heading: string;
  items: PillarItem[];
}) {
  return (
    <div className="mx-auto max-w-5xl">
      <h2 className="text-center text-2xl sm:text-4xl font-semibold tracking-[-0.02em] text-slate-900">
        {heading}
      </h2>

      <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
        {items.map((item) => {
          const imgSrc = PILLAR_IMG_MAP[item.id];
          return (
            <article
              key={item.id}
              className="flex flex-col items-center text-center px-2"
            >
              <div className="w-28 h-28 rounded-full bg-[#f5f5f5] flex items-center justify-center p-5">
                <img
                  src={imgSrc}
                  alt=""
                  width={72}
                  height={72}
                  loading="lazy"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="mt-5 text-lg sm:text-xl font-medium text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm sm:text-base font-light text-slate-600 leading-relaxed max-w-md">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default function PillarsAndProof() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white space-y-20 sm:space-y-28">
      <PillarGrid
        heading="Driving Property Inquiries to Conversions"
        items={CONVERSION_PILLARS}
      />
      <PillarGrid heading="Our Expertise in Action" items={EXPERTISE_IN_ACTION} />
    </section>
  );
}
