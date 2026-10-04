import React from 'react';
import { Sparkles, MessageSquare, ShieldCheck, Layers } from 'lucide-react';

interface FinalShowcaseCTAProps {
  onOpenContact: () => void;
  onExploreProjects: () => void;
}

export const FinalShowcaseCTA: React.FC<FinalShowcaseCTAProps> = ({
  onOpenContact,
  onExploreProjects,
}) => {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-white via-indigo-50/50 to-white relative overflow-hidden text-[#0F172A]">
      {/* Rich Atmospheric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-indigo-200/50 via-blue-200/40 to-purple-200/50 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Subtle Geometric Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
          <span>YOU'VE SEEN WHAT WE BUILD</span>
        </div>

        {/* Dramatic Main Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.1]">
          Now let's build <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600">
            what comes next.
          </span>
        </h2>

        {/* Company Identity Subtext */}
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
          Whether you need an AI-powered intelligence platform, a custom business automation engine, or a scalable web application — <strong className="font-semibold text-[#0F172A]">GJ Nexora Technologies</strong> is ready to engineer your solution.
        </p>

        {/* High-Impact Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 hover:from-indigo-500 hover:via-blue-500 hover:to-purple-500 transition-all shadow-xl shadow-indigo-600/25 active:scale-[0.99] cursor-pointer"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Start a Conversation →</span>
          </button>

          <button
            onClick={onExploreProjects}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 hover:text-indigo-600 border border-slate-200 transition-all shadow-sm cursor-pointer"
          >
            <Layers className="w-4 h-4 text-indigo-600" />
            <span>Revisit Projects</span>
          </button>
        </div>

        {/* Factual Direct Contacts */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Direct Engineer Engagement
          </span>
          <span>•</span>
          <span>gjnexoratech@gmail.com</span>
          <span>•</span>
          <span>Coimbatore, Tamil Nadu</span>
        </div>

      </div>
    </section>
  );
};
