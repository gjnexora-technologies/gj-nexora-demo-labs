import React from 'react';

export const ProjectConnector: React.FC = () => {
  return (
    <div className="py-10 bg-gradient-to-b from-white via-slate-50 to-white flex flex-col items-center justify-center relative overflow-hidden" aria-hidden="true">
      {/* Visual Narrative Line */}
      <div className="flex items-center gap-3 text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
        <span className="text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200/60">
          AI & Agriculture
        </span>
        <span className="text-slate-300">→</span>
        <span className="text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/60">
          Data & Intelligence
        </span>
        <span className="text-slate-300">→</span>
        <span className="text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/60">
          Sustainability & Environment
        </span>
      </div>

      {/* Pulsing Central Connector Dot and Vertical Line */}
      <div className="flex flex-col items-center mt-4">
        <div className="w-0.5 h-8 bg-gradient-to-b from-indigo-500 via-blue-500 to-emerald-500 rounded-full" />
        <div className="w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-emerald-100 animate-pulse" />
      </div>
    </div>
  );
};
