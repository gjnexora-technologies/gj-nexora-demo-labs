import React from 'react';
import { Zap, Layers, Rocket, RefreshCw } from 'lucide-react';

export const CapabilitiesOverview: React.FC = () => {
  const principles = [
    {
      num: '01',
      icon: Zap,
      title: 'Purpose Before Complexity',
      desc: 'We engineer intuitive solutions focused on high user adoption and actual business outcomes, avoiding bloated dependencies and complex learning curves.',
    },
    {
      num: '02',
      icon: Layers,
      title: 'Modular Architecture',
      desc: 'Decoupled system architecture guarantees that individual applications scale independently with zero cascading points of failure.',
    },
    {
      num: '03',
      icon: Rocket,
      title: 'Real Deployment',
      desc: 'We do not build speculative prototypes. Every system is taken through end-to-end testing and deployed to live, verifiable cloud environments.',
    },
    {
      num: '04',
      icon: RefreshCw,
      title: 'Continuous Refinement',
      desc: 'Clean codebases, strict typing, and telemetry ensure applications continually adapt and scale alongside real organizational requirements.',
    },
  ];

  return (
    <section id="capabilities" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-center mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
            <span>ENGINEERING PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Built with Purpose. Engineered for Impact.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            How <strong className="text-[#0F172A]">GJ Nexora Technologies</strong> approaches software development — practical engineering without generic SaaS compromises.
          </p>
        </div>

        {/* 4 Concise Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/70 rounded-2xl border border-slate-200/90 p-6 sm:p-7 hover:border-indigo-400 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded border border-indigo-200/80">
                      {item.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#0F172A] tracking-tight mb-2 group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
