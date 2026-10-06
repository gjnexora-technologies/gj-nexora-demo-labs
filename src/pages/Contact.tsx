import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Sparkles,
  Send,
  CheckCircle2,
  Globe,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { DigitalEngineeringAtmosphere } from '../components/layout/DigitalEngineeringAtmosphere';
import { sendEnquiryEmail } from '../services/emailService';
import { RevealOnScroll } from '../components/animation/RevealOnScroll';

interface ContactProps {
  onNavigate?: (path: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Contact GJ Nexora | Let’s Build Something Useful';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Custom Software Development',
    message: '',
    honeypot: '', // Spam honeypot
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Client-side validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (!formData.email.trim() || !validateEmail(formData.email)) {
      setErrorMessage('Please enter a valid work email address.');
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      setErrorMessage('Please describe your project requirements or the system you need built.');
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await sendEnquiryEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        honeypot: formData.honeypot,
      });

      if (result.success) {
        setIsSubmitted(true);
        setErrorMessage(null);
        // Reset form data only on success
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'Custom Software Development',
          message: '',
          honeypot: '',
        });
      } else {
        setErrorMessage(result.message || 'We couldn’t send your enquiry right now. Please try again in a moment.');
      }
    } catch (err) {
      console.error('[Contact] Submission error:', err);
      setErrorMessage('We couldn’t send your enquiry right now. Please try again in a moment.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'Custom Software Development',
    'Applied AI & Machine Learning',
    'Cloud Systems & SaaS Platform',
    'Workflow Automation & Telemetry',
    'Mobile-First Web Applications',
    'Architecture Consulting',
  ];

  return (
    <div className="relative min-h-screen bg-white text-[#0F172A] py-12 sm:py-16 overflow-hidden">
      {/* Digital Engineering Atmosphere: Contact Variant */}
      <DigitalEngineeringAtmosphere variant="contact" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* ========================================================================= */}
        {/* 1. HEADER (QUIET ZONE PROTECTED) */}
        {/* ========================================================================= */}
        <RevealOnScroll direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50/90 backdrop-blur-xs border border-indigo-200/80 text-indigo-700 text-xs font-bold uppercase tracking-wider shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>START A PROJECT</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
              Let's Build Something{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600">
                Useful.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-normal">
              Have an idea? Need a custom system, AI solution, or operational application? Reach out directly or submit your project enquiry below.
            </p>
          </div>
        </RevealOnScroll>

        {/* ========================================================================= */}
        {/* 2. MAIN CONTACT GRID (FORM LEFT, CHANNELS RIGHT) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Form Column (Span 7) */}
          <div className="lg:col-span-7 bg-slate-50/90 backdrop-blur-xs rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-md relative overflow-hidden card-interactive">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100/40 rounded-full blur-[80px] pointer-events-none" />

            {isSubmitted ? (
              <div className="py-12 text-center space-y-6 animate-fade-in">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm ring-8 ring-emerald-50">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-[#0F172A]">
                    ✓ Enquiry Sent Successfully
                  </h3>
                  <p className="text-sm sm:text-base text-[#475569] max-w-md mx-auto leading-relaxed">
                    Enquiry sent successfully. We'll get back to you soon.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setErrorMessage(null);
                    }}
                    className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-indigo-700 bg-indigo-50 border border-indigo-200 hover:bg-indigo-100 transition-colors cursor-pointer"
                  >
                    Send Another Enquiry
                  </button>
                  {onNavigate && (
                    <button
                      onClick={() => onNavigate('/projects')}
                      className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all shadow-sm cursor-pointer"
                    >
                      Back to Projects →
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10" noValidate>
                <div className="border-b border-slate-200/80 pb-4">
                  <h2 className="text-xl font-bold text-[#0F172A]">
                    Project Enquiry Form
                  </h2>
                  <p className="text-xs text-slate-500">
                    Tell us what you are trying to build and we'll schedule a technical discovery call.
                  </p>
                </div>

                {/* Friendly Error Feedback */}
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2.5 animate-fade-in" role="alert">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{errorMessage}</span>
                  </div>
                )}

                {/* Spam Honeypot (Hidden) */}
                <input
                  type="text"
                  name="website"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 group/field">
                    <label
                      htmlFor="contact-name"
                      className="text-xs font-bold uppercase tracking-wider text-slate-700 group-focus-within/field:text-indigo-600 transition-colors cursor-pointer"
                    >
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#0F172A] focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 shadow-2xs transition-all"
                    />
                  </div>

                  <div className="space-y-1.5 group/field">
                    <label
                      htmlFor="contact-email"
                      className="text-xs font-bold uppercase tracking-wider text-slate-700 group-focus-within/field:text-indigo-600 transition-colors cursor-pointer"
                    >
                      Work Email *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#0F172A] focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 shadow-2xs transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 group/field">
                    <label
                      htmlFor="contact-phone"
                      className="text-xs font-bold uppercase tracking-wider text-slate-700 group-focus-within/field:text-indigo-600 transition-colors cursor-pointer"
                    >
                      Phone Number (Optional)
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#0F172A] focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 shadow-2xs transition-all"
                    />
                  </div>

                  <div className="space-y-1.5 group/field">
                    <label
                      htmlFor="contact-service"
                      className="text-xs font-bold uppercase tracking-wider text-slate-700 group-focus-within/field:text-indigo-600 transition-colors cursor-pointer"
                    >
                      Primary Service
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#0F172A] focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 shadow-2xs transition-all cursor-pointer"
                    >
                      {services.map((svc) => (
                        <option key={svc} value={svc}>
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5 group/field">
                  <label
                    htmlFor="contact-message"
                    className="text-xs font-bold uppercase tracking-wider text-slate-700 group-focus-within/field:text-indigo-600 transition-colors cursor-pointer"
                  >
                    Project Requirements *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Describe what your system should do, key features needed, or problems you are aiming to solve..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#0F172A] focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 shadow-2xs transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 hover:from-indigo-500 hover:via-blue-500 hover:to-purple-500 active:scale-[0.98] transition-all shadow-md shadow-indigo-600/20 disabled:opacity-60 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Enquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Direct Details & Digital Channels Column (Span 5) */}
          <RevealOnScroll direction="right" delay={150} className="lg:col-span-5 space-y-8">
            
            {/* Direct Official Contact Cards */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm card-interactive">
              <h3 className="text-base font-bold text-[#0F172A] uppercase tracking-wider text-xs">
                Official Direct Channels
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:gjnexoratech@gmail.com"
                  className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Direct Email</div>
                    <div className="text-sm font-bold text-[#0F172A] group-hover:text-indigo-600 transition-colors">
                      gjnexoratech@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+918438749286"
                  className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Phone Support</div>
                    <div className="text-sm font-bold text-[#0F172A] group-hover:text-indigo-600 transition-colors">
                      +91 84387 49286
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-xl">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Headquarters</div>
                    <div className="text-sm font-bold text-[#0F172A]">
                      Coimbatore, Tamil Nadu, India
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="pt-2 border-t border-slate-100">
                <a
                  href="https://wa.me/918438749286"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[44px] flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm font-bold text-emerald-700 hover:bg-emerald-100/80 active:scale-98 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Chat Directly on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Official Digital Channels */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4 shadow-sm card-interactive">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 border-b border-slate-100 pb-2">
                Official Digital Footprint
              </h4>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://gjnexoratech.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:text-indigo-600 hover:border-indigo-300 hover:bg-white transition-all shadow-2xs"
                >
                  <Globe className="w-4 h-4 text-indigo-600" />
                  <span>Website</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/gj-nexora-tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:text-blue-600 hover:border-blue-300 hover:bg-white transition-all shadow-2xs"
                >
                  <svg className="w-4 h-4 text-blue-600 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://www.instagram.com/gjnexora/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:text-pink-600 hover:border-pink-300 hover:bg-white transition-all shadow-2xs"
                >
                  <svg className="w-4 h-4 text-pink-600 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </a>
                <a
                  href="https://github.com/gjnexora-technologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:border-slate-400 hover:bg-white transition-all shadow-2xs"
                >
                  <svg className="w-4 h-4 text-slate-700 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Engagement Timeline Preview */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-4 card-interactive">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                What Happens Next?
              </h4>
              <div className="space-y-3 text-xs text-[#475569]">
                <div className="flex items-start gap-2.5">
                  <span className="font-mono font-bold text-indigo-600 bg-white px-1.5 py-0.5 rounded border border-slate-200">
                    01
                  </span>
                  <span><strong>Discovery Call:</strong> We discuss problem scope and technical requirements.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-mono font-bold text-indigo-600 bg-white px-1.5 py-0.5 rounded border border-slate-200">
                    02
                  </span>
                  <span><strong>Architecture Proposal:</strong> We deliver system schema, tech stack, and timeline.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-mono font-bold text-indigo-600 bg-white px-1.5 py-0.5 rounded border border-slate-200">
                    03
                  </span>
                  <span><strong>Engineering & Launch:</strong> Agile sprints with working build demos up to CDN deployment.</span>
                </div>
              </div>
            </div>

          </RevealOnScroll>

        </div>

      </div>
    </div>
  );
};
