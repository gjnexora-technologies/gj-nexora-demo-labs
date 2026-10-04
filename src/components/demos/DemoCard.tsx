import React from 'react';
import { DemoProject } from '../../types/demo';
import { ArrowRight, ExternalLink, Check } from 'lucide-react';

interface DemoCardProps {
  demo: DemoProject;
  onViewDetails: (demo: DemoProject) => void;
}

export const DemoCard: React.FC<DemoCardProps> = ({ demo, onViewDetails }) => {
  const isLive = demo.status === 'live';

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between hover:border-indigo-300 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
      {/* Top Accent bar for live item */}
      {isLive && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600" />
      )}

      <div>
        {/* Header: Number, Category & Status */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
              #{demo.number}
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-md border border-indigo-200/60">
              {demo.category}
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            LIVE DEPLOYMENT
          </span>
        </div>

        {/* Project Thumbnail Image */}
        {demo.image && (
          <div className="mb-5 rounded-xl overflow-hidden border border-slate-200 bg-slate-950 aspect-video relative group-hover:border-indigo-300 transition-all shadow-xs">
            <img
              src={demo.image}
              alt={`${demo.name} Dashboard Preview`}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
        )}

        {/* Demo Name */}
        <h3 className="text-xl font-bold text-[#0F172A] tracking-tight mb-2 group-hover:text-indigo-600 transition-colors">
          {demo.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-5 min-h-[44px]">
          {demo.description}
        </p>

        {/* Key Capabilities List */}
        <div className="mb-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
            Key Capabilities
          </div>
          <div className="flex flex-wrap gap-1.5">
            {demo.capabilities.slice(0, 4).map((cap, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 text-xs font-medium text-slate-700 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200/80"
              >
                <Check className="w-3 h-3 text-indigo-600 flex-shrink-0" />
                <span>{cap}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        {demo.url ? (
          <div className="flex items-center gap-2.5 w-full">
            <a
              href={demo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 transition-all shadow-sm active:scale-[0.99]"
            >
              <span>Launch Demo</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={() => onViewDetails(demo)}
              className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-[#0F172A] hover:bg-slate-100 transition-colors border border-slate-200"
              title="View Architecture Details & Documentation"
            >
              Details
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between w-full">
            <button
              onClick={() => onViewDetails(demo)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200/80 hover:text-[#0F172A] transition-all"
            >
              <span>View Details</span>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
