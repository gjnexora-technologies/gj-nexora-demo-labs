import React from 'react';
import { ShieldCheck, Code2, Sparkles } from 'lucide-react';

export const BrandStatement: React.FC = () => {
  const domains = ['Web', 'AI', 'Automation', 'Mobile', 'Data', 'Cloud'];

  return (
    <section id="about" className="py-14 sm:py-20 bg-slate-50/80 border-y border-slate-200/80 relative overflow-hidden text-[#0F172A]">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-indigo-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-purple-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Big Brand Statement */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>ABOUT GJ NEXORA</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-snug">
              GJ Nexora Technologies builds practical digital solutions, AI-powered applications, software systems, and technology products that help{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600">
                businesses and organizations work smarter and grow digitally.
              </span>
            </h2>
          </div>

          {/* Right Column: Supporting explanation & key engineering metrics */}
          <div className="lg:col-span-5 space-y-5 lg:border-l lg:border-slate-200 lg:pl-10">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Based in Coimbatore, Tamil Nadu, we engineer practical, high-performance software systems. Every platform featured in this Demo Lab is an independent, live public deployment demonstrating end-to-end architecture.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                <div className="flex items-center gap-2 text-indigo-600 mb-1">
                  <Code2 className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700">Engineering</span>
                </div>
                <div className="text-sm font-bold text-[#0F172A]">100% In-House Built</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Modern Web & AI Stacks</div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                <div className="flex items-center gap-2 text-emerald-600 mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700">Deployments</span>
                </div>
                <div className="text-sm font-bold text-[#0F172A]">Decoupled Systems</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Zero Shared Runtimes</div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Brand Statement Signature Strip */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              BUILDING DIGITAL EXCELLENCE
            </div>
            <div className="text-base sm:text-lg font-bold text-[#0F172A]">
              Turning ideas into practical digital solutions.
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold text-slate-700">
            {domains.map((domain, i) => (
              <React.Fragment key={domain}>
                <span className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200/80 hover:border-indigo-400 hover:text-indigo-600 transition-colors">
                  {domain}
                </span>
                {i < domains.length - 1 && <span className="text-slate-300 hidden sm:inline">•</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
