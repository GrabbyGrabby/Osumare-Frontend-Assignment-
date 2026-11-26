import {
  BarChart3,
  FileText,
  Layers,
  Layout,
  MousePointerClick,
  Search,
  Share2,
  Video,
} from "lucide-react";
import { SERVICES, type ServiceItem } from "../data/landingData";

const ICON_MAP: Record<ServiceItem["icon"], React.ComponentType<{ className?: string }>> = {
  search: Search,
  "mouse-pointer": MousePointerClick,
  share: Share2,
  "file-text": FileText,
  layout: Layout,
  "bar-chart": BarChart3,
  layers: Layers,
  video: Video,
};

export default function ServicesGrid() {
  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#f9fafb]">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-[-0.02em] text-slate-900">
            Our Service Offerings
          </h2>
          <p className="mt-3 text-sm sm:text-base font-light text-slate-600">
            Strategies that Drive Property Market Excellence
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <article
                key={service.id}
                className="group bg-white rounded-[24px] p-6 sm:p-7 border border-slate-200/70 shadow-[0_12px_36px_-12px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_-14px_rgba(0,120,255,0.12)] flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-[#0078ff] transition-colors duration-300 group-hover:bg-[#0078ff] group-hover:text-white">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-base sm:text-lg font-medium text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm font-light text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
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
