import React from 'react';
import { DemoProject } from '../../types/demo';
import { FloatingProjectIcons } from './FloatingProjectIcons';
import { ExternalLink, ArrowRight, Check, ShieldCheck } from 'lucide-react';

interface EcoIntelStoryProps {
  demo: DemoProject;
  onViewDetails: (demo: DemoProject) => void;
}

export const EcoIntelStory: React.FC<EcoIntelStoryProps> = ({ demo, onViewDetails }) => {
  const microCapabilities = [
    'Crop Intelligence',
    'Waste Analysis',
    'Carbon Insights',
    'Profit Estimation',
    'Manure Guidance',
  ];

  return (
    <section id="eco-intel-story" className="py-16 sm:py-24 bg-white relative overflow-hidden border-b border-slate-200/80">
      {/* Floating Agriculture & AI Icons System */}
      <FloatingProjectIcons projectId="eco-intel" />

      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-indigo-50/70 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-2.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200/70">
                  PROJECT 01
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-700 bg-indigo-50/70 px-2.5 py-1 rounded-md border border-indigo-200/60">
                  AI & Intelligence
                </span>
                <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  LIVE
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
                ECO-INTEL
              </h2>

              <p className="text-base sm:text-xl font-medium text-slate-700 leading-snug">
                AI-powered agriculture intelligence for smarter, data-driven decisions.
              </p>
            </div>

            {/* Mobile Project Image Display (visible on mobile between title and text) */}
            <div className="lg:hidden">
              <div className="bg-white rounded-2xl p-1 shadow-lg border border-slate-200 relative overflow-hidden">
                <div className="bg-slate-100/90 px-3 py-2 rounded-t-xl flex items-center justify-between text-[11px] text-slate-500 border-b border-slate-200">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-slate-300" />
                    <span className="w-2 h-2 rounded-full bg-slate-300" />
                    <span className="w-2 h-2 rounded-full bg-slate-300" />
                    <span className="ml-1 font-mono text-[10px] text-slate-600 font-medium">eco-intel-frontend.vercel.app</span>
                  </div>
                  <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                    ● LIVE
                  </span>
                </div>
                {demo.image && (
                  <div className="aspect-[16/10] overflow-hidden rounded-b-xl bg-slate-50">
                    <img
                      src={demo.image}
                      alt="ECO-INTEL Live Platform Screenshot"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Designed and built by GJ Nexora Technologies, ECO-INTEL integrates multiple machine learning analytical factors to evaluate soil conditions, agricultural waste valorization, and carbon footprints into actionable farming guidance.
            </p>

            {/* Micro-Capabilities Strip */}
            <div className="space-y-2 pt-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                CORE CAPABILITY DOMAINS
              </span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {microCapabilities.map((cap, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-800 bg-slate-50 border border-slate-200/90 px-2.5 sm:px-3 py-1.5 rounded-lg shadow-2xs"
                  >
                    <Check className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                    <span>{cap}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Actions (Full-width on mobile, comfortable touch targets) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {demo.url && (
                <a
                  href={demo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 active:scale-[0.98] shadow-md shadow-indigo-600/20 cursor-pointer"
                >
                  <span>Launch Live Platform</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              <button
                onClick={() => onViewDetails(demo)}
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 active:scale-[0.98] transition-all border border-slate-200 cursor-pointer"
              >
                <span>View Architecture & Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-500 pt-1">
              <span className="flex items-center gap-1 text-emerald-700 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Verified Production Build
              </span>
              <span>•</span>
              <span className="font-mono text-slate-400">eco-intel-frontend.vercel.app</span>
            </div>
          </div>

          {/* Right Column: Desktop Scale-Reveal Browser Frame */}
          <div className="hidden lg:block lg:col-span-7">
            <div className="bg-white rounded-3xl p-1.5 shadow-xl border border-slate-200/90 relative group overflow-hidden transition-all duration-300 hover:border-indigo-300 hover:shadow-2xl">
              {/* Browser Header Bar */}
              <div className="bg-slate-100/90 px-4 py-3 rounded-t-2xl flex items-center justify-between text-xs text-slate-500 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-slate-300" />
                  <span className="w-3 h-3 rounded-full bg-slate-300" />
                  <span className="w-3 h-3 rounded-full bg-slate-300" />
                  <span className="ml-2 font-mono text-[11px] text-slate-600 font-medium">
                    eco-intel-frontend.vercel.app
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">
                  ● PRODUCTION DEPLOYMENT
                </span>
              </div>

              {/* Real Project Image */}
              <div className="p-3 sm:p-4 bg-slate-50/50 rounded-b-2xl">
                {demo.image && (
                  <div className="rounded-xl overflow-hidden border border-slate-200 bg-white aspect-[16/10] relative shadow-sm">
                    <img
                      src={demo.image}
                      alt="ECO-INTEL Live Platform Screenshot"
                      className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
