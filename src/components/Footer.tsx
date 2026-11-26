import { Mail, MessageCircle, Phone, Share2 } from "lucide-react";
import { OsumareLogo } from "./Illustrations";

const MENU_LINKS = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#services" },
  { label: "Blog", href: "#top" },
  { label: "Career", href: "#contact" },
];

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 9H16l.5-3h-3V4.5c0-.9.3-1.5 1.5-1.5h1.5V.2C16.2.1 15.1 0 13.9 0 11.4 0 9.8 1.5 9.8 4.2V6H7v3h2.8v9h3.7V9z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { label: "X (Twitter)", Icon: XIcon, href: "https://x.com" },
  { label: "Facebook", Icon: FacebookIcon, href: "https://facebook.com" },
  { label: "YouTube", Icon: YoutubeIcon, href: "https://youtube.com" },
  { label: "Pinterest", Icon: Share2, href: "https://pinterest.com" },
  { label: "WhatsApp", Icon: MessageCircle, href: "https://whatsapp.com" },
  { label: "Instagram", Icon: InstagramIcon, href: "https://instagram.com" },
];

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 bg-white">
      <div className="mx-auto max-w-6xl rounded-[32px] bg-gradient-to-br from-[#e0f0ff] via-[#eef6ff] to-[#d9ebff] p-8 sm:p-12 border border-sky-200/60">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Left Column */}
          <div className="md:col-span-5 space-y-5">
            <OsumareLogo />
            <p className="text-sm font-light text-slate-700 leading-relaxed max-w-sm">
              The best digital marketing agency in Pune with a proven track
              record of consistently delivering quality service.
            </p>

            <div className="space-y-1.5">
              <h3 className="text-sm font-semibold text-slate-900">Address</h3>
              <p className="text-sm font-light text-slate-700 leading-relaxed max-w-xs">
                Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi,
                Pune-14, Maharastra, India.
              </p>
            </div>

            <div className="space-y-2.5 pt-1">
              <h3 className="text-sm font-semibold text-slate-900">Contacts</h3>
              <a
                href="mailto:hello@osumare.in"
                className="flex items-center gap-2.5 text-sm font-light text-slate-800 hover:text-[#0078ff] transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>hello@osumare.in</span>
              </a>
              <a
                href="tel:+918459876226"
                className="flex items-center gap-2.5 text-sm font-light text-slate-800 hover:text-[#0078ff] transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>+91 8459 8762 26</span>
              </a>
            </div>
          </div>

          {/* Middle Column */}
          <div className="md:col-span-3">
            <h3 className="text-base font-semibold text-slate-900">Menu</h3>
            <ul className="mt-5 space-y-3">
              {MENU_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-normal text-slate-700 hover:text-[#0078ff] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="md:col-span-4">
            <h3 className="text-base font-semibold text-slate-900">Social</h3>
            <div className="mt-5 grid grid-cols-4 gap-3 max-w-[210px]">
              {SOCIAL_LINKS.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-sm transition-all duration-200 hover:bg-black hover:text-white hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0078ff]"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="mt-8 text-center text-xs sm:text-sm font-light text-slate-600">
        &copy; 2023 Osumare. All rights reserved.
      </p>
    </footer>
  );
}
