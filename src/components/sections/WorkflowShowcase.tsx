import React, { useState } from 'react';
import {
  Search,
  Workflow,
  Code2,
  ShieldCheck,
  Rocket,
  RefreshCw,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface WorkflowShowcaseProps {
  onExploreProcess?: () => void;
}

export const WorkflowShowcase: React.FC<WorkflowShowcaseProps> = ({
  onExploreProcess,
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const steps = [
    {
      step: '01',
      title: 'UNDERSTAND',
      subtitle: 'Understand the Requirement',
      desc: 'We analyze operational workflows, team handoffs, domain constraints, and exact data structures rather than imposing generic assumptions.',
      icon: Search,
    },
    {
      step: '02',
      title: 'ARCHITECT',
      subtitle: 'Plan the System',
      desc: 'We blueprint intuitive UI/UX workflows, decoupled schemas, and secure data interfaces engineered for high-density business productivity.',
      icon: Workflow,
    },
    {
      step: '03',
      title: 'BUILD',
      subtitle: 'Develop the Solution',
      desc: 'Engineered using high-performance React, TypeScript, and robust cloud services for lightning-fast responsiveness and maintainability.',
      icon: Code2,
    },
    {
      step: '04',
      title: 'TEST',
      subtitle: 'Validate the Implementation',
      desc: 'Rigorous end-to-end validation, performance auditing, edge case verification, and responsive QA before production rollout.',
      icon: ShieldCheck,
    },
    {
      step: '05',
      title: 'DEPLOY',
      subtitle: 'Publish Finished App',
      desc: 'Every system is hosted as a standalone, decoupled production deployment with isolated compute and dedicated cloud infrastructure.',
      icon: Rocket,
    },
    {
      step: '06',
      title: 'REFINE',
      subtitle: 'Improve the Experience',
      desc: 'Data-driven telemetry, regular iteration, and proactive scaling ensure your software continuously adapts as organizational needs evolve.',
      icon: RefreshCw,
    },
  ];

  const pipelineNodes = [
    { num: '01', name: 'IDEA', desc: 'Concept & Needs' },
    { num: '02', name: 'DESIGN', desc: 'UI/UX & Schema' },
    { num: '03', name: 'DEVELOPMENT', desc: 'Core Engineering' },
    { num: '04', name: 'INTEGRATION', desc: 'APIs & Services' },
    { num: '05', name: 'TESTING', desc: 'QA & Auditing' },
    { num: '06', name: 'DEPLOYMENT', desc: 'Live Standalone' },
  ];

  return (
    <section id="workflow" className="py-16 sm:py-24 bg-white text-[#0F172A] border-y border-slate-200/80 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-100/40 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-14 sm:space-y-16 z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl text-center mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>HOW WE BUILD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            A Disciplined Approach to Building Software That Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            From understanding the problem to deploying and refining the solution. Explore how <strong className="font-semibold text-[#0F172A]">GJ Nexora Technologies</strong> turns requirements into working digital products.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP TIMELINE TRACK */}
        {/* ========================================================================= */}
        <div className="hidden lg:block relative pt-2 pb-2">
          {/* Horizontal Track Line */}
          <div className="absolute top-[38px] left-[8%] right-[8%] h-0.5 bg-slate-200 z-0" />
          
          {/* Active Highlighted Track Segment */}
          <div
            className="absolute top-[38px] left-[8%] h-0.5 bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 transition-all duration-300 z-0"
            style={{ width: `${(activeStepIndex / (steps.length - 1)) * 84}%` }}
          />

          {/* 6 Step Nodes */}
          <div className="grid grid-cols-6 gap-3 relative z-10">
            {steps.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              const isPassed = activeStepIndex >= idx;

              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className="flex flex-col items-center text-center cursor-pointer group"
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-200 mb-3 shadow-sm ${
                      isActive
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white ring-4 ring-indigo-100 scale-110'
                        : isPassed
                        ? 'bg-indigo-50 border-2 border-indigo-600 text-indigo-700'
                        : 'bg-white border-2 border-slate-300 text-slate-500 group-hover:border-indigo-400 group-hover:text-indigo-600'
                    }`}
                  >
                    {step.step}
                  </div>

                  <span
                    className={`text-xs font-extrabold tracking-wider transition-colors ${
                      isActive
                        ? 'text-indigo-600'
                        : 'text-slate-700 group-hover:text-indigo-600'
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE-FIRST VERTICAL TIMELINE / DESKTOP GRID */}
        {/* ========================================================================= */}
        <div className="relative">
          {/* Vertical connecting line on Mobile */}
          <div className="lg:hidden absolute left-4 top-8 bottom-8 w-0.5 bg-gradient-to-b from-indigo-600 via-blue-600 to-purple-600 z-0" />

          <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-6 lg:gap-3.5 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeStepIndex === idx;

              return (
                <div
                  key={idx}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`bg-white rounded-2xl border transition-all duration-300 p-5 flex flex-col justify-between cursor-pointer ${
                    isActive
                      ? 'border-indigo-500 shadow-md ring-2 ring-indigo-500/15 -translate-y-0.5'
                      : 'border-slate-200/90 shadow-2xs hover:border-indigo-300 hover:shadow-sm'
                  } pl-12 lg:pl-5 relative group`}
                >
                  {/* Mobile Node Badge */}
                  <div className={`lg:hidden absolute left-2 top-5 w-6 h-6 rounded-full border-2 flex items-center justify-center font-mono text-[10px] font-bold shadow-xs ${
                    isActive
                      ? 'bg-indigo-600 text-white border-indigo-600 ring-2 ring-indigo-100'
                      : 'bg-white border-slate-300 text-slate-600'
                  }`}>
                    {item.step}
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`hidden lg:inline-block text-xs font-mono font-bold px-2 py-0.5 rounded border transition-colors ${
                        isActive
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-transparent'
                          : 'bg-slate-100 text-slate-700 border-slate-200 group-hover:bg-indigo-50 group-hover:text-indigo-600'
                      }`}>
                        {item.step}
                      </span>
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                        isActive
                          ? 'bg-indigo-50 text-indigo-600 ring-2 ring-indigo-100'
                          : 'bg-slate-50 text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="space-y-0.5">
                      <h3 className="text-sm font-extrabold text-[#0F172A] tracking-tight uppercase">
                        {item.title}
                      </h3>
                      <div className="text-[11px] font-semibold text-indigo-600">
                        {item.subtitle}
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ENGINEERING VISUAL ARCHITECTURE PIPELINE */}
        {/* ========================================================================= */}
        <div className="bg-slate-50/90 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm max-w-5xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-200/80 pb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                ENGINEERING ARCHITECTURE PIPELINE
              </span>
              <h4 className="text-lg sm:text-xl font-extrabold text-[#0F172A] tracking-tight">
                Continuous Delivery Lifecycle
              </h4>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Decoupled Standalone Runtimes</span>
            </div>
          </div>

          {/* Numbered Pipeline Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4 relative pt-1">
            {pipelineNodes.map((node, i) => (
              <div
                key={node.num}
                className="relative bg-white rounded-xl p-4 border border-slate-200 text-center flex items-center sm:flex-col justify-between sm:justify-center group hover:border-indigo-400 hover:shadow-sm transition-all shadow-2xs"
              >
                <div className="flex items-center gap-3 sm:flex-col sm:gap-0">
                  <span className="w-7 h-7 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-600 text-xs font-bold font-mono flex items-center justify-center sm:mb-2 shadow-2xs group-hover:bg-indigo-600 group-hover:text-white transition-colors flex-shrink-0">
                    {node.num}
                  </span>
                  <div className="text-left sm:text-center">
                    <span className="text-xs font-extrabold text-slate-800 tracking-wider block">
                      {node.name}
                    </span>
                    <span className="text-[10px] text-slate-500 block font-normal">
                      {node.desc}
                    </span>
                  </div>
                </div>

                {i < pipelineNodes.length - 1 && (
                  <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-slate-300 group-hover:text-indigo-600 transition-colors pointer-events-none">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {onExploreProcess && (
            <div className="text-center pt-2">
              <button
                onClick={onExploreProcess}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 hover:bg-indigo-100 transition-colors cursor-pointer"
              >
                <span>Explore Full Engineering Story →</span>
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
