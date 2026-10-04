import React from 'react';
import { DemoProject } from '../../types/demo';
import { DEMOS_DATA } from '../../data/demos';
import { ExternalLink, Check, TrendingUp, Cpu, ShieldCheck, ArrowRight, Sprout, Leaf, FileSpreadsheet } from 'lucide-react';

interface LiveDemoSpotlightProps {
  featuredDemo?: DemoProject;
  onViewDetails: (demo: DemoProject) => void;
  onOpenFeaturedPage?: () => void;
}

export const LiveDemoSpotlight: React.FC<LiveDemoSpotlightProps> = ({
  onViewDetails,
  onOpenFeaturedPage,
}) => {
  const ecoIntel = DEMOS_DATA.find((d) => d.id === 'eco-intel') || DEMOS_DATA[0];
  const ecoReport = DEMOS_DATA.find((d) => d.id === 'eco-report') || DEMOS_DATA[1];

  return (
    <section id="live-demo" className="py-16 sm:py-24 bg-white border-y border-slate-200/80 relative overflow-hidden">
      {/* Subtle Background Geometry */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50/70 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50/70 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-20 sm:space-y-28">
        
        {/* ========================================================================= */}
        {/* PROJECT 1: ECO-INTEL (AI & Intelligence) */}
        {/* ========================================================================= */}
        <div>
          {/* Section Eyebrow */}
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-3.5 py-1 rounded-full uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
              FEATURED PROJECT 01
            </span>
            <span className="text-xs font-semibold text-slate-400">
              • AI & Intelligence Showcase
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Narrative & Action */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200/60">
                    {ecoIntel.category}
                  </span>
                  <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    LIVE PUBLIC DEPLOYMENT
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mt-2 mb-3">
                  {ecoIntel.name}
                </h2>
                {ecoIntel.tagline && (
                  <p className="text-lg font-medium text-slate-700 leading-snug">
                    {ecoIntel.tagline}
                  </p>
                )}
              </div>

              <p className="text-base text-slate-600 leading-relaxed">
                {ecoIntel.description}
              </p>

              {/* Key Capabilities Checklist */}
              <div className="grid grid-cols-2 gap-3 py-1">
                {ecoIntel.capabilities.map((cap, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm font-medium text-slate-800">
                    <div className="w-5 h-5 rounded bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {ecoIntel.url && (
                  <a
                    href={ecoIntel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 transition-all shadow-md shadow-indigo-600/20 active:scale-[0.99]"
                  >
                    <span>Launch Live Platform</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                <button
                  onClick={() => {
                    if (onOpenFeaturedPage) {
                      onOpenFeaturedPage();
                    } else {
                      onViewDetails(ecoIntel);
                    }
                  }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-[#0F172A] transition-colors border border-slate-200"
                >
                  <span>System Architecture</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Verified Production Deployment
                </span>
                <span>•</span>
                <span className="font-mono text-slate-400">eco-intel-frontend.vercel.app</span>
              </div>
            </div>

            {/* Right Column: High Fidelity UI Preview Card (Light Theme Browser Mockup) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-1.5 shadow-xl border border-slate-200/90 relative group overflow-hidden">
                {/* Window Bar */}
                <div className="bg-slate-100/90 px-4 py-3 rounded-t-2xl flex items-center justify-between text-xs text-slate-500 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-slate-300" />
                    <span className="w-3 h-3 rounded-full bg-slate-300" />
                    <span className="w-3 h-3 rounded-full bg-slate-300" />
                    <span className="ml-2 font-mono text-[11px] text-slate-600 font-medium">
                      eco-intel-frontend.vercel.app
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      LIVE PUBLIC
                    </span>
                  </div>
                </div>

                {/* Simulated UI Surface */}
                <div className="bg-slate-50/60 p-5 sm:p-6 rounded-b-2xl text-slate-800 space-y-5 font-sans">
                  {/* Top Metrics Row */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white border border-slate-200/90 rounded-xl p-3.5 shadow-2xs">
                      <div className="flex items-center justify-between text-slate-500 text-xs mb-1">
                        <span>Intelligence Model</span>
                        <Cpu className="w-3.5 h-3.5 text-indigo-600" />
                      </div>
                      <div className="text-lg sm:text-xl font-bold text-[#0F172A]">Multi-Factor AI</div>
                      <div className="text-[11px] text-emerald-700 font-medium mt-0.5 flex items-center gap-0.5">
                        <TrendingUp className="w-3 h-3" /> Real-time Analytics
                      </div>
                    </div>

                    <div className="bg-white border border-slate-200/90 rounded-xl p-3.5 shadow-2xs">
                      <div className="flex items-center justify-between text-slate-500 text-xs mb-1">
                        <span>Domain Focus</span>
                        <Sprout className="w-3.5 h-3.5 text-emerald-600" />
                      </div>
                      <div className="text-lg sm:text-xl font-bold text-[#0F172A]">Agriculture</div>
                      <div className="text-[11px] text-indigo-600 font-medium mt-0.5">Crop & Soil AI</div>
                    </div>

                    <div className="bg-white border border-slate-200/90 rounded-xl p-3.5 shadow-2xs">
                      <div className="flex items-center justify-between text-slate-500 text-xs mb-1">
                        <span>Sustainability</span>
                        <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                      </div>
                      <div className="text-lg sm:text-xl font-bold text-[#0F172A]">Carbon & Waste</div>
                      <div className="text-[11px] text-emerald-700 font-medium mt-0.5">Yield Optimization</div>
                    </div>
                  </div>

                  {/* Real Live Dashboard Preview */}
                  {ecoIntel.image && (
                    <div className="rounded-xl overflow-hidden border border-slate-200 bg-white aspect-[16/9] relative shadow-sm">
                      <img
                        src={ecoIntel.image}
                        alt={`${ecoIntel.name} Live Interface`}
                        className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>
                  )}

                  {/* Bottom interactive prompt strip */}
                  <div className="flex items-center justify-between pt-1 text-xs text-slate-500">
                    <span>AI-powered agricultural decisions in production</span>
                    {ecoIntel.url && (
                      <a
                        href={ecoIntel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-800 font-semibold flex items-center gap-1 transition-colors"
                      >
                        Launch Live Platform <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PROJECT 2: ECO REPORT (Sustainability & Environment) - Visual Rhythm Layout */}
        {/* ========================================================================= */}
        <div className="pt-12 border-t border-slate-200">
          {/* Section Eyebrow */}
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              FEATURED PROJECT 02
            </span>
            <span className="text-xs font-semibold text-slate-400">
              • Sustainability & Environmental Reporting Showcase
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: High Fidelity UI Preview Card (Light Theme Browser Mockup) */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="bg-white rounded-3xl p-1.5 shadow-xl border border-slate-200/90 relative group overflow-hidden">
                {/* Window Bar */}
                <div className="bg-slate-100/90 px-4 py-3 rounded-t-2xl flex items-center justify-between text-xs text-slate-500 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-slate-300" />
                    <span className="w-3 h-3 rounded-full bg-slate-300" />
                    <span className="w-3 h-3 rounded-full bg-slate-300" />
                    <span className="ml-2 font-mono text-[11px] text-slate-600 font-medium">
                      eco-report-7dab1.web.app
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      LIVE DEPLOYMENT
                    </span>
                  </div>
                </div>

                {/* Simulated UI Surface */}
                <div className="bg-slate-50/60 p-5 sm:p-6 rounded-b-2xl text-slate-800 space-y-5 font-sans">
                  {/* Top Metrics Row */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white border border-slate-200/90 rounded-xl p-3.5 shadow-2xs">
                      <div className="flex items-center justify-between text-slate-500 text-xs mb-1">
                        <span>Platform Type</span>
                        <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                      </div>
                      <div className="text-lg sm:text-xl font-bold text-[#0F172A]">Digital Reporting</div>
                      <div className="text-[11px] text-emerald-700 font-medium mt-0.5 flex items-center gap-0.5">
                        <TrendingUp className="w-3 h-3" /> Audit & Tracking
                      </div>
                    </div>

                    <div className="bg-white border border-slate-200/90 rounded-xl p-3.5 shadow-2xs">
                      <div className="flex items-center justify-between text-slate-500 text-xs mb-1">
                        <span>Domain Focus</span>
                        <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                      </div>
                      <div className="text-lg sm:text-xl font-bold text-[#0F172A]">Sustainability</div>
                      <div className="text-[11px] text-teal-700 font-medium mt-0.5">Community Impact</div>
                    </div>

                    <div className="bg-white border border-slate-200/90 rounded-xl p-3.5 shadow-2xs">
                      <div className="flex items-center justify-between text-slate-500 text-xs mb-1">
                        <span>Architecture</span>
                        <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                      </div>
                      <div className="text-lg sm:text-xl font-bold text-[#0F172A]">Firebase Web</div>
                      <div className="text-[11px] text-blue-700 font-medium mt-0.5">Real-time Sync</div>
                    </div>
                  </div>

                  {/* Real Live Dashboard Preview */}
                  {ecoReport.image && (
                    <div className="rounded-xl overflow-hidden border border-slate-200 bg-white aspect-[16/10] relative shadow-sm">
                      <img
                        src={ecoReport.image}
                        alt={`${ecoReport.name} Live Interface`}
                        className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>
                  )}

                  {/* Bottom interactive prompt strip */}
                  <div className="flex items-center justify-between pt-1 text-xs text-slate-500">
                    <span>Environmental monitoring and structured sustainability data</span>
                    {ecoReport.url && (
                      <a
                        href={ecoReport.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 hover:text-emerald-900 font-semibold flex items-center gap-1 transition-colors"
                      >
                        Launch Live Platform <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative & Action */}
            <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/60">
                    {ecoReport.category}
                  </span>
                  <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    LIVE PUBLIC DEPLOYMENT
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mt-2 mb-3">
                  {ecoReport.name}
                </h2>
                {ecoReport.tagline && (
                  <p className="text-lg font-medium text-slate-700 leading-snug">
                    {ecoReport.tagline}
                  </p>
                )}
              </div>

              <p className="text-base text-slate-600 leading-relaxed">
                {ecoReport.description}
              </p>

              {/* Key Capabilities Checklist */}
              <div className="grid grid-cols-2 gap-3 py-1">
                {ecoReport.capabilities.map((cap, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm font-medium text-slate-800">
                    <div className="w-5 h-5 rounded bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {ecoReport.url && (
                  <a
                    href={ecoReport.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 transition-all shadow-md shadow-emerald-500/20 active:scale-[0.99]"
                  >
                    <span>Launch Live Platform</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                <button
                  onClick={() => onViewDetails(ecoReport)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-[#0F172A] transition-colors border border-slate-200"
                >
                  <span>System Architecture</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Verified Production Deployment
                </span>
                <span>•</span>
                <span className="font-mono text-slate-400">eco-report-7dab1.web.app</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
