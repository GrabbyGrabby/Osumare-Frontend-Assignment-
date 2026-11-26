import { CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";

interface FormState {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    setSubmitted(true);
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 px-4 sm:px-6 ambient-dual-glow"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-[-0.02em] text-slate-900">
            Connect with Our Digital Marketing Experts
          </h2>
          <p className="mt-3 text-sm sm:text-base font-light text-slate-600">
            Reach Out for Tailored Strategies and Results-Driven Solutions.
            <br className="hidden sm:inline" /> Let&apos;s Elevate Your Online
            Presence Together
          </p>
        </div>

        <div className="mt-12 bg-white rounded-[28px] p-6 sm:p-10 border border-slate-200/80 shadow-[0_24px_56px_-16px_rgba(15,23,42,0.1)]">
          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <CheckCircle2
                className="w-12 h-12 text-[#0078ff] mx-auto"
                aria-hidden="true"
              />
              <h3 className="text-xl font-medium text-slate-900">
                Thank you for reaching out
              </h3>
              <p className="text-sm font-light text-slate-600 max-w-md mx-auto">
                Our digital marketing team will review your message and get back
                to you shortly.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-slate-800 mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, name: e.target.value }))
                      }
                      placeholder="Enter your name"
                      className="w-full rounded-[14px] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0078ff] focus:outline-none focus:ring-2 focus:ring-[#0078ff]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-sm font-medium text-slate-800 mb-1.5"
                    >
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, phone: e.target.value }))
                      }
                      placeholder="Enter your Number"
                      className="w-full rounded-[14px] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0078ff] focus:outline-none focus:ring-2 focus:ring-[#0078ff]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-slate-800 mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, email: e.target.value }))
                      }
                      placeholder="Enter your Email"
                      className="w-full rounded-[14px] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0078ff] focus:outline-none focus:ring-2 focus:ring-[#0078ff]/20 transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-slate-800 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={7}
                    value={form.message}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, message: e.target.value }))
                    }
                    placeholder="Enter your Message."
                    className="w-full flex-1 rounded-[14px] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0078ff] focus:outline-none focus:ring-2 focus:ring-[#0078ff]/20 transition-all resize-none"
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-[#0078ff] px-14 py-3.5 text-sm sm:text-base font-medium text-white shadow-[0_12px_28px_-8px_rgba(0,120,255,0.45)] transition-all duration-200 hover:bg-black hover:text-white active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0078ff] focus-visible:ring-offset-2"
                >
                  Get started
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
