import React from 'react';
import { Sparkles, Layers, MessageSquare, Code2, Cpu, Globe, Smartphone, BarChart3, CheckCircle2 } from 'lucide-react';

interface CustomSoftwareCTAProps {
  onOpenContact: () => void;
  onExploreDemos: () => void;
}

export const CustomSoftwareCTA: React.FC<CustomSoftwareCTAProps> = ({
  onOpenContact,
  onExploreDemos,
}) => {
  const serviceOfferings = [
    { name: 'Web Applications', icon: Globe, desc: 'High-performance web apps & client portals' },
    { name: 'Business Systems', icon: Code2, desc: 'Custom operations, workflows & ERP tools' },
    { name: 'AI Solutions', icon: Cpu, desc: 'Intelligent decision models & LLM integration' },
    { name: 'Automation Platforms', icon: Sparkles, desc: 'End-to-end task automation & pipeline sync' },
    { name: 'Mobile Applications', icon: Smartphone, desc: 'Responsive iOS & Android applications' },
    { name: 'Data & Analytics', icon: BarChart3, desc: 'Custom reporting dashboards & metrics' },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white text-[#0F172A] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100/60 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-12">
        
        {/* ========================================================================= */}
        {/* CUSTOM ENGINEERING SERVICE OFFERING BLOCK */}
        {/* ========================================================================= */}
        <div className="bg-slate-50/80 rounded-3xl p-5 sm:p-10 lg:p-14 border border-slate-200/90 shadow-xl relative overflow-hidden">
          {/* Top accent gradient border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column: Heading & CTAs */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                <span>CUSTOM SOFTWARE ENGINEERING</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
                Need Something Built for Your Business?
              </h2>

              <p className="text-sm sm:text-lg text-slate-600 leading-relaxed font-normal">
                Have an idea worth building? Let's turn it into a working product. <strong className="text-[#0F172A] font-semibold">GJ Nexora Technologies</strong> engineers bespoke, scalable software solutions architected around your operational reality.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={onOpenContact}
                  className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-xl text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 hover:from-indigo-500 hover:via-blue-500 hover:to-purple-500 active:scale-[0.98] transition-all shadow-lg shadow-indigo-600/20 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Talk to GJ Nexora →</span>
                </button>

                <button
                  onClick={onExploreDemos}
                  className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm sm:text-base font-semibold text-slate-700 bg-white hover:bg-slate-100 hover:text-[#0F172A] active:scale-[0.98] border border-slate-200 transition-colors shadow-2xs cursor-pointer"
                >
                  <Layers className="w-4 h-4 text-indigo-600" />
                  <span>Explore Our Projects</span>
                </button>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Direct engineer consultation
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  No third-party SaaS lock-in
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Transparent architecture
                </span>
              </div>
            </div>

            {/* Right Column: Service Capabilities Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
              {serviceOfferings.map((srv, idx) => {
                const Icon = srv.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white p-4 rounded-xl border border-slate-200/90 hover:border-indigo-400 active:border-indigo-400 hover:shadow-md transition-all group shadow-2xs"
                  >
                    <div className="flex items-center gap-3 mb-1.5">
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-bold text-[#0F172A] tracking-tight">{srv.name}</span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {srv.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
