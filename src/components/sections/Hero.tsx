import React from 'react';
import { Layers, Workflow, ArrowDown } from 'lucide-react';

interface HeroProps {
  onExploreProjects: () => void;
  onHowWeBuild: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onHowWeBuild }) => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-16 pb-20 overflow-hidden bg-gradient-to-b from-white via-slate-50/60 to-white text-[#0F172A]">
      {/* Soft Purple & Blue Radial Atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-tr from-indigo-100/70 via-blue-100/60 to-purple-100/50 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Fine Geometric Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-35 pointer-events-none" />

      {/* Floating Subtle Ambient Accents */}
      <div className="absolute top-24 left-[12%] w-2 h-2 rounded-full bg-indigo-400/40 animate-pulse pointer-events-none hidden md:block" />
      <div className="absolute top-40 right-[15%] w-3 h-3 rounded-full bg-purple-400/30 animate-pulse pointer-events-none hidden md:block" />
      <div className="absolute bottom-28 left-[18%] w-2.5 h-2.5 rounded-full bg-blue-400/40 animate-pulse pointer-events-none hidden md:block" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="space-y-7 max-w-3xl mx-auto">
          
          {/* 1. Staggered Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-indigo-200/90 text-indigo-700 text-xs font-bold uppercase tracking-wider shadow-sm animate-fade-in backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
            <span>GJ NEXORA TECHNOLOGIES</span>
            <span className="text-slate-300 font-normal">|</span>
            <span className="text-slate-600 font-semibold">Interactive Software Showcase</span>
          </div>

          {/* 2. Main Editorial Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#0F172A] tracking-tight leading-[1.08]">
            Explore Software <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600">
              Built to Work.
            </span>
          </h1>

          {/* 3. Subtitle & Positioning */}
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            <strong className="font-semibold text-slate-800">Real projects. Real deployments. Real engineering.</strong>
            <br />
            A guided digital exhibition of software platforms developed and deployed independently by GJ Nexora Technologies.
          </p>

          {/* 4. Primary & Secondary Navigation CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-3">
            <button
              onClick={onExploreProjects}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 hover:from-indigo-500 hover:via-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-600/20 active:scale-[0.99] cursor-pointer"
            >
              <Layers className="w-4 h-4" />
              <span>Explore Projects</span>
            </button>

            <button
              onClick={onHowWeBuild}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 hover:text-indigo-600 border border-slate-200 transition-all shadow-2xs cursor-pointer"
            >
              <Workflow className="w-4 h-4 text-indigo-600" />
              <span>How We Build</span>
            </button>
          </div>

          {/* 5. Minimalistic Live Verification Badge */}
          <div className="pt-8 flex items-center justify-center gap-6 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>08 Live Deployed Systems</span>
            </div>
            <span className="text-slate-300">•</span>
            <div>100% Standalone Architectures</div>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <div className="hidden sm:block">Publicly Accessible</div>
          </div>

          {/* Subtle Down Scroll Indicator */}
          <div className="pt-6">
            <button
              onClick={onExploreProjects}
              className="inline-flex flex-col items-center gap-1.5 text-xs text-slate-400 hover:text-indigo-600 transition-colors"
              aria-label="Scroll to projects"
            >
              <span className="font-mono text-[11px]">BEGIN SHOWCASE</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
