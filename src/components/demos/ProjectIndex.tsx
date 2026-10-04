import React, { useState } from 'react';
import { DemoProject } from '../../types/demo';
import { DEMOS_DATA } from '../../data/demos';
import { ArrowUpRight, ExternalLink, Sparkles } from 'lucide-react';

interface ProjectIndexProps {
  onViewDetails: (demo: DemoProject) => void;
  onOpenContact: (context?: string) => void;
}

export const ProjectIndex: React.FC<ProjectIndexProps> = ({ onViewDetails, onOpenContact }) => {
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  return (
    <section id="demos" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-2">
              <span>CATALOG DIRECTORY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              Project Index
            </h2>
          </div>
          <div className="text-xs text-slate-500 font-mono">
            02 Verified Deployments • Direct Access
          </div>
        </div>

        {/* Compact Interactive Project Index List */}
        <div className="space-y-3">
          {DEMOS_DATA.map((demo) => {
            const isEcoIntel = demo.id === 'eco-intel';
            const isHovered = hoveredProjectId === demo.id;

            return (
              <div
                key={demo.id}
                onMouseEnter={() => setHoveredProjectId(demo.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
                className={`group bg-white rounded-2xl border transition-all duration-300 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative overflow-hidden ${
                  isHovered
                    ? isEcoIntel
                      ? 'border-indigo-400 shadow-lg bg-indigo-50/20'
                      : 'border-emerald-400 shadow-lg bg-emerald-50/20'
                    : 'border-slate-200/90 shadow-2xs hover:border-slate-300'
                }`}
              >
                {/* Left: Number, Title, Category */}
                <div className="flex items-center gap-4 sm:gap-6">
                  <span
                    className={`font-mono text-base font-extrabold px-3 py-1.5 rounded-xl border transition-colors ${
                      isHovered
                        ? isEcoIntel
                          ? 'bg-indigo-600 text-white border-indigo-600'
                          : 'bg-emerald-600 text-white border-emerald-600'
                        : 'bg-slate-100 text-slate-500 border-slate-200'
                    }`}
                  >
                    #{demo.number}
                  </span>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight group-hover:text-indigo-600 transition-colors">
                        {demo.name}
                      </h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        LIVE
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="font-semibold text-slate-700">{demo.category}</span>
                      <span>•</span>
                      <span className="line-clamp-1">{demo.tagline || demo.description}</span>
                    </div>
                  </div>
                </div>

                {/* Right: Quick Launch & Details Action */}
                <div className="flex items-center gap-3 pt-2 sm:pt-0 self-end sm:self-auto">
                  {demo.url && (
                    <a
                      href={demo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-indigo-600 bg-slate-50 px-3 py-2 rounded-xl border border-slate-200 transition-colors"
                      title="Launch Live Platform"
                    >
                      <span>Live URL</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <button
                    onClick={() => onViewDetails(demo)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 px-4 py-2 rounded-xl transition-all shadow-sm group-hover:shadow-md cursor-pointer"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Project Prompt Strip */}
        <div className="mt-8 bg-white p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 shadow-2xs">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-600 flex-shrink-0" />
            <span>Need a custom software system tailored to your unique operational workflow?</span>
          </div>
          <button
            onClick={() => onOpenContact('Project Index inquiry')}
            className="text-indigo-600 font-bold hover:text-indigo-800 transition-colors whitespace-nowrap cursor-pointer"
          >
            Request Custom Build →
          </button>
        </div>

      </div>
    </section>
  );
};
