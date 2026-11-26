import Lenis from "lenis";
import { useEffect } from "react";
import ContactSection from "./components/ContactSection";
import ConversionSection from "./components/ConversionSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import InsightsSection from "./components/InsightsSection";
import MasterySection from "./components/MasterySection";
import Navbar from "./components/Navbar";
import PeaceOfMindBanner from "./components/PeaceOfMindBanner";
import PillarsAndProof from "./components/PillarsAndProof";
import ServicesGrid from "./components/ServicesGrid";
import TestimonialsSection from "./components/TestimonialsSection";

export default function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <MasterySection />
        <ServicesGrid />
        <InsightsSection />
        <ConversionSection />
        <PillarsAndProof />
        <PeaceOfMindBanner />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
