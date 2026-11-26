export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon:
    | "search"
    | "mouse-pointer"
    | "share"
    | "file-text"
    | "layout"
    | "bar-chart"
    | "layers"
    | "video";
}

export interface InsightItem {
  id: string;
  title: string;
  description: string;
  icon: "trending-up" | "users" | "compass" | "sparkles";
}

export interface PillarItem {
  id: string;
  title: string;
  description: string;
  icon: "target" | "zap" | "award" | "smartphone";
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  initials: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "automotive-seo",
    title: "Automotive SEO",
    description:
      "Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today",
    icon: "search",
  },
  {
    id: "ppc-precision",
    title: "PPC Precision",
    description:
      "Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns.",
    icon: "mouse-pointer",
  },
  {
    id: "social-acceleration",
    title: "Social Acceleration",
    description:
      "Engage and influence your audience across social media platforms, amplifying your brand's presence and connection.",
    icon: "share",
  },
  {
    id: "content-excellence",
    title: "Content Excellence",
    description:
      "Craft compelling, automotive-specific content that resonates with enthusiasts and drives engagement.",
    icon: "file-text",
  },
  {
    id: "web-design",
    title: "Web Design",
    description:
      "Transform visitors into customers with high-performance websites designed for seamless user experiences and increased conversions.",
    icon: "layout",
  },
  {
    id: "data-driven-insights",
    title: "Data-Driven Insights",
    description:
      "Leverage data to refine your strategies, making informed decisions that drive revenue growth.",
    icon: "bar-chart",
  },
  {
    id: "end-to-end-solutions",
    title: "End-to-End Solutions",
    description:
      "From initial awareness to post-purchase loyalty, we offer full-funnel solutions that guide customers through every step of their journey.",
    icon: "layers",
  },
  {
    id: "video-marketing",
    title: "Video marketing",
    description:
      "Unleash the Power of Video Marketing: Captivate, Engage, and Elevate Your Brand with Compelling Visual Stories.",
    icon: "video",
  },
];

export const INSIGHTS: InsightItem[] = [
  {
    id: "market-trends",
    title: "Market Trends Analysis",
    description: "Predictive insights to guide real estate strategies.",
    icon: "trending-up",
  },
  {
    id: "buyer-persona",
    title: "Targeted Buyer Persona",
    description: "Understand and connect with your ideal property buyers.",
    icon: "users",
  },
  {
    id: "competitor-insights",
    title: "Competitor Insights",
    description: "Stand out in the property market with informed strategies.",
    icon: "compass",
  },
  {
    id: "visual-appeal",
    title: "Visual Content Appeal",
    description:
      "Captivate buyers with appealing visuals and immersive experiences.",
    icon: "sparkles",
  },
];

export const CONVERSION_PILLARS: PillarItem[] = [
  {
    id: "cta-opt",
    title: "Call-to-Action Optimization",
    description:
      "Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates.",
    icon: "target",
  },
  {
    id: "landing-efficiency",
    title: "Landing Page Efficiency",
    description:
      "Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission.",
    icon: "zap",
  },
  {
    id: "social-proof",
    title: "Social Proof Utilization",
    description:
      "Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action",
    icon: "award",
  },
  {
    id: "mobile-friendly",
    title: "Mobile-Friendly Experience",
    description:
      "With a responsive design approach, our strategies ensure a seamless browsing experience across all devices. This responsiveness enhances engagement and conversions by accommodating the preferences of on-the-go property seekers.",
    icon: "smartphone",
  },
];

export const EXPERTISE_IN_ACTION: PillarItem[] = [
  {
    id: "effective-ctas",
    title: "Effective CTAs",
    description:
      "See how our strategic CTAs drove a significant increase in property inquiries and accelerated sales for a real estate agency.",
    icon: "target",
  },
  {
    id: "conversion-pages",
    title: "Conversion-Optimized Landing Pages",
    description:
      "Explore a case study where our landing page optimization increased property lead conversion rates by 30%",
    icon: "zap",
  },
  {
    id: "trust-building",
    title: "Trust Building with Social Proof",
    description:
      "Discover how leveraging client testimonials boosted buyer confidence, leading to higher conversion rates for a property development project",
    icon: "award",
  },
  {
    id: "mobile-success",
    title: "Mobile-First Success:",
    description:
      "Learn how our mobile-responsive design approach resulted in a 25% increase in inquiries from mobile users for a real estate agency.",
    icon: "smartphone",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "tabish-khan",
    name: "Tabish khan",
    role: "Managing Partner",
    quote:
      "Osumare's expertise in pharma marketing is unparalleled. Their strategies helped us navigate complex regulations while driving remarkable growth.",
    initials: "TK",
  },
  {
    id: "ananya-deshmukh",
    name: "Ananya Deshmukh",
    role: "VP of Growth, Horizon Realty",
    quote:
      "Their conversion-focused landing pages and targeted paid campaigns lifted our qualified property inquiries by 38% within the first quarter.",
    initials: "AD",
  },
  {
    id: "rohan-mehta",
    name: "Rohan Mehta",
    role: "Director, UrbanNest Developments",
    quote:
      "From market trend analysis to mobile-first execution, Osumare turned our digital presence into a predictable lead engine.",
    initials: "RM",
  },
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "1. How does Osumare tailor strategies for real estate brands?",
    answer:
      "We combine hyper-local market intelligence, buyer persona mapping, and full-funnel attribution so every campaign speaks directly to high-intent property seekers.",
  },
  {
    id: "faq-2",
    question: "2. What timeline can we expect for measurable lead growth?",
    answer:
      "Paid search and landing page optimizations typically show measurable inquiry lift within 2–4 weeks, while organic SEO and content authority compound over 60–90 days.",
  },
  {
    id: "faq-3",
    question: "3. How does Osumare measure campaign success?",
    answer:
      "We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.",
  },
];
