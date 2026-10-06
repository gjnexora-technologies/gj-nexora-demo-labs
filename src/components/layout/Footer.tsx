import React from 'react';
import {
  ArrowUp,
  ArrowRight,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Globe,
  MessageCircle,
} from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenContact?: (context?: string) => void;
  variant?: 'full' | 'compact';
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  variant = 'full',
}) => {
  const isCompact = variant === 'compact';
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-[#0F172A] border-t border-slate-200/90 relative overflow-hidden select-none">
      {/* 1. STUDIO LIGHTING ATMOSPHERE */}
      <div className="absolute top-0 left-1/3 -translate-x-1/2 w-[600px] h-[280px] bg-gradient-to-b from-indigo-100/30 via-blue-50/20 to-transparent rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[240px] bg-gradient-to-t from-purple-100/25 via-indigo-50/15 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12 sm:pt-16 pb-10">
        
        {/* ========================================================================= */}
        {/* 2. TOP BRAND STATEMENT */}
        {/* ========================================================================= */}
        {!isCompact && (
          <div className="pb-10 sm:pb-12 border-b border-slate-200/80">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold tracking-wide shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-indigo-600" />
                  <span className="font-bold tracking-wider uppercase text-[11px] text-indigo-700">GJ NEXORA TECHNOLOGIES</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                  Building Digital Excellence.
                </h3>
                <p className="text-sm sm:text-base text-slate-600 max-w-2xl font-normal leading-relaxed">
                  Practical software systems, applied AI applications, and digital platforms engineered to work.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-xl border border-emerald-200 shadow-2xs self-start md:self-auto">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>02 Production Deployments Online</span>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 3. MAIN FOOTER INFORMATION GRID (4 COLUMNS) */}
        {/* ========================================================================= */}
        <div className="py-10 sm:py-12 grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Column 1: BRAND & CONTACT DETAILS (Span 5 - 2fr) */}
          <div className="md:col-span-5 space-y-5">
            <div className="space-y-3">
              <button
                onClick={() => onNavigate('/')}
                className="flex items-center gap-3.5 text-left group cursor-pointer focus:outline-none"
              >
                <div className="p-1.5 rounded-2xl bg-[#FAFAFA] border border-slate-200 shadow-xs flex-shrink-0 group-hover:border-indigo-400 transition-colors">
                  <img
                    src="/logo.gj.png"
                    alt="GJ Nexora Technologies Official Logo"
                    className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-xl"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-[#0F172A] text-lg sm:text-xl tracking-tight leading-tight group-hover:text-indigo-600 transition-colors">
                    GJ NEXORA TECHNOLOGIES
                  </span>
                  <span className="text-[11px] sm:text-xs text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 font-bold tracking-wider uppercase mt-0.5">
                    Building Digital Excellence
                  </span>
                </div>
              </button>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md font-normal">
                GJ Nexora Technologies builds practical digital solutions, AI-powered applications, software systems, and technology products that help businesses and organizations work smarter and grow digitally.
              </p>
            </div>

            {/* Verified Contact Details with Icons */}
            <div className="space-y-2.5 pt-1 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200/90 text-indigo-600 flex items-center justify-center flex-shrink-0 shadow-2xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-medium text-slate-700">Coimbatore, Tamil Nadu, India</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200/90 text-indigo-600 flex items-center justify-center flex-shrink-0 shadow-2xs">
                  <Mail className="w-4 h-4" />
                </div>
                <a
                  href="mailto:gjnexoratech@gmail.com"
                  className="font-medium text-slate-700 hover:text-indigo-600 transition-colors py-0.5"
                >
                  gjnexoratech@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200/90 text-indigo-600 flex items-center justify-center flex-shrink-0 shadow-2xs">
                  <Phone className="w-4 h-4" />
                </div>
                <a
                  href="tel:+918438749286"
                  className="font-medium text-slate-700 hover:text-indigo-600 transition-colors py-0.5"
                >
                  +91 84387 49286
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: COMPANY (Span 2 - 1fr) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] border-b border-slate-200/80 pb-2">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <button
                  onClick={() => onNavigate('/about')}
                  className="group/link inline-flex items-center gap-1 text-slate-600 hover:text-indigo-600 transition-colors py-1 text-left cursor-pointer"
                >
                  <span>About GJ Nexora</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-indigo-600" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/how-we-build')}
                  className="group/link inline-flex items-center gap-1 text-slate-600 hover:text-indigo-600 transition-colors py-1 text-left cursor-pointer"
                >
                  <span>How We Build</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-indigo-600" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="group/link inline-flex items-center gap-1 text-slate-600 hover:text-indigo-600 transition-colors py-1 text-left cursor-pointer"
                >
                  <span>Contact</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-indigo-600" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: PROJECTS (Span 2 - 1fr) */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                Projects
              </h4>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                02 LIVE
              </span>
            </div>

            <ul className="space-y-3 text-sm font-medium">
              <li>
                <button
                  onClick={() => onNavigate('/projects/eco-intel')}
                  className="group/proj flex flex-col text-left py-1 cursor-pointer w-full"
                >
                  <div className="flex items-center gap-1.5 text-[#0F172A] group-hover/proj:text-indigo-600 transition-colors">
                    <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-200 group-hover/proj:bg-indigo-600 group-hover/proj:text-white transition-colors">
                      01
                    </span>
                    <span className="font-bold">ECO-INTEL</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/proj:opacity-100 group-hover/proj:translate-x-0.5 transition-all text-indigo-600" />
                  </div>
                  <span className="text-[11px] text-slate-500 font-normal pl-6">
                    AI & Intelligence
                  </span>
                </button>
              </li>

              <li>
                <button
                  onClick={() => onNavigate('/projects/eco-report')}
                  className="group/proj flex flex-col text-left py-1 cursor-pointer w-full"
                >
                  <div className="flex items-center gap-1.5 text-[#0F172A] group-hover/proj:text-teal-700 transition-colors">
                    <span className="text-xs font-mono font-bold text-teal-700 bg-teal-50 px-1.5 py-0.5 rounded border border-teal-200 group-hover/proj:bg-teal-600 group-hover/proj:text-white transition-colors">
                      02
                    </span>
                    <span className="font-bold">Eco Report</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/proj:opacity-100 group-hover/proj:translate-x-0.5 transition-all text-teal-600" />
                  </div>
                  <span className="text-[11px] text-slate-500 font-normal pl-6">
                    Sustainability & Environment
                  </span>
                </button>
              </li>

              <li className="pt-1">
                <button
                  onClick={() => onNavigate('/projects')}
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>View Project Catalogue</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: CONNECT / SOCIAL ACTION BUTTONS (Span 3 - 1.5fr) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] border-b border-slate-200/80 pb-2">
              Connect
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              Official digital channels, repositories, and direct messaging.
            </p>

            {/* Structured Compact Outlined Action Buttons */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href="https://gjnexoratech.in"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:text-indigo-600 hover:border-indigo-300 hover:bg-white active:scale-95 transition-all shadow-2xs"
              >
                <Globe className="w-4 h-4 text-indigo-600" />
                <span>Website</span>
              </a>

              <a
                href="https://www.linkedin.com/in/gj-nexora-tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:text-blue-600 hover:border-blue-300 hover:bg-white active:scale-95 transition-all shadow-2xs"
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
                className="min-h-[44px] flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:text-pink-600 hover:border-pink-300 hover:bg-white active:scale-95 transition-all shadow-2xs"
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
                className="min-h-[44px] flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:border-slate-400 hover:bg-white active:scale-95 transition-all shadow-2xs"
              >
                <svg className="w-4 h-4 text-slate-700 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>

              {/* Chat on WhatsApp Button */}
              <a
                href="https://wa.me/918438749286"
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-2 min-h-[44px] flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-emerald-300 text-xs font-semibold text-emerald-700 hover:text-emerald-800 hover:border-emerald-500 hover:bg-emerald-50/50 active:scale-95 transition-all shadow-2xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 4. DIVIDER */}
        {/* ========================================================================= */}
        <div className="relative flex items-center justify-center py-6" aria-hidden="true">
          <div className="w-full h-px bg-slate-200" />
          <div className="absolute px-3 py-0.5 rounded-full bg-white border border-slate-200 text-slate-400 text-xs flex items-center gap-1 shadow-2xs">
            <Sparkles className="w-3 h-3 text-indigo-600" />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. BOTTOM UTILITY & STATUS BAR */}
        {/* ========================================================================= */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center sm:text-left font-normal">
            &copy; 2026 GJ Nexora Technologies. Building Digital Excellence.
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6">
            <span className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              02 Verified Standalone Deployments
            </span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:text-indigo-600 hover:border-indigo-300 active:scale-95 transition-all shadow-2xs cursor-pointer group/top"
              aria-label="Back to top"
            >
              <span className="font-medium text-xs">Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-slate-500 group-hover/top:text-indigo-600 group-hover/top:-translate-y-0.5 transition-all" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
