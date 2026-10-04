import React from 'react';
import { Cpu, Leaf, ArrowRight } from 'lucide-react';

interface ProjectStoryIntroProps {
  onSelectProject: (projectId: string) => void;
}

export const ProjectStoryIntro: React.FC<ProjectStoryIntroProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-16 sm:py-20 bg-slate-50/70 border-y border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
            <span>EXHIBITION INTRODUCTION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Real Projects. Real Deployments.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Two completed platforms. Two independent architectures. Engineered and actively maintained in production by <strong className="font-semibold text-[#0F172A]">GJ Nexora Technologies</strong>.
          </p>
        </div>

        {/* Two Compact Project Indicator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
          {/* Project 01 Pill Card */}
          <button
            onClick={() => onSelectProject('eco-intel-story')}
            className="group bg-white rounded-2xl border border-slate-200/90 p-6 text-left hover:border-indigo-400 hover:shadow-lg transition-all duration-300 relative flex items-center justify-between shadow-2xs cursor-pointer"
          >
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded border border-indigo-200/70">
                  PROJECT 01
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  AI & Intelligence
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] tracking-tight group-hover:text-indigo-600 transition-colors flex items-center gap-2">
                <Cpu className="w-5 h-5 text-indigo-600" />
                ECO-INTEL
              </h3>
              <p className="text-xs text-slate-500 line-clamp-1">
                AI-powered agriculture intelligence platform
              </p>
            </div>

            <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all flex-shrink-0 ml-4">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </button>

          {/* Project 02 Pill Card */}
          <button
            onClick={() => onSelectProject('eco-report-story')}
            className="group bg-white rounded-2xl border border-slate-200/90 p-6 text-left hover:border-emerald-400 hover:shadow-lg transition-all duration-300 relative flex items-center justify-between shadow-2xs cursor-pointer"
          >
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200/70">
                  PROJECT 02
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Sustainability & Environment
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] tracking-tight group-hover:text-emerald-700 transition-colors flex items-center gap-2">
                <Leaf className="w-5 h-5 text-emerald-600" />
                Eco Report
              </h3>
              <p className="text-xs text-slate-500 line-clamp-1">
                Digital environmental reporting and sustainability workflows
              </p>
            </div>

            <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all flex-shrink-0 ml-4">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </button>
        </div>

        {/* Subtext */}
        <div className="text-center pt-8 text-xs text-slate-400 font-mono">
          Scroll down to explore the interactive project stories & technical architectures ↓
        </div>
      </div>
    </section>
  );
};
