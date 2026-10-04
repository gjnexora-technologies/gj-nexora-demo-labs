import React, { useState, useEffect } from 'react';
import {
  Search,
  Workflow,
  Code2,
  ShieldCheck,
  Rocket,
  RefreshCw,
  Layers,
  Zap,
  Globe,
  Database,
  Cpu,
  Server,
  Cloud,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

import { DigitalEngineeringAtmosphere } from '../components/layout/DigitalEngineeringAtmosphere';

interface HowWeBuildProps {
  onOpenContact: (context?: string) => void;
  onNavigate: (path: string) => void;
}

export const HowWeBuild: React.FC<HowWeBuildProps> = ({
  onOpenContact,
  onNavigate,
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    document.title = 'How We Build | GJ Nexora Technologies';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const steps = [
    {
      num: '01',
      title: 'UNDERSTAND',
      subtitle: 'Understand the Requirement',
      desc: 'Understand the requirement before building the system. We analyze real operational workflows, operator needs, data constraints, and business goals.',
      icon: Search,
      deliverables: ['Problem Definition', 'Workflow Analysis', 'Scope Matrix', 'Data Requirements'],
    },
    {
      num: '02',
      title: 'ARCHITECT',
      subtitle: 'Plan the System',
      desc: 'Plan the system with architectural clarity. We blueprint decoupled frontend-backend components, database schemas, and structured API contracts.',
      icon: Workflow,
      deliverables: ['System Architecture', 'Database Schemas', 'API Contracts', 'Tech Stack Selection'],
    },
    {
      num: '03',
      title: 'BUILD',
      subtitle: 'Develop the Solution',
      desc: 'Develop the solution with clean, modular TypeScript and modern frameworks, ensuring strict typing, responsive layouts, and performant logic.',
      icon: Code2,
      deliverables: ['Production Frontend', 'Backend Services', 'State Architecture', 'Component UI'],
    },
    {
      num: '04',
      title: 'TEST',
      subtitle: 'Validate the Implementation',
      desc: 'Validate the implementation across edge cases, stress testing performance across screen sizes (320px to 4K), networks, and boundary conditions.',
      icon: ShieldCheck,
      deliverables: ['Cross-Device QA', 'Payload Validation', 'Error Boundaries', 'Performance Auditing'],
    },
    {
      num: '05',
      title: 'DEPLOY',
      subtitle: 'Publish the Application',
      desc: 'Publish the application to high-availability cloud CDN edge networks with automated CI/CD, SSL encryption, and isolated runtime environments.',
      icon: Rocket,
      deliverables: ['Live HTTPS URL', 'Edge CDN Hosting', 'Environment Setup', 'Uptime Telemetry'],
    },
    {
      num: '06',
      title: 'REFINE',
      subtitle: 'Improve the Experience',
      desc: 'Improve the experience through continuous telemetry, user feedback integration, algorithm enhancements, and proactive performance tuning.',
      icon: RefreshCw,
      deliverables: ['Performance Optimization', 'UX Refinements', 'Feature Enhancements', 'Ongoing Health Checks'],
    },
  ];

  const pipelineStages = [
    { step: '01', name: 'IDEA', detail: 'Concept & Needs' },
    { step: '02', name: 'DESIGN', detail: 'UI/UX & Schema' },
    { step: '03', name: 'DEVELOPMENT', detail: 'Core Logic & UI' },
    { step: '04', name: 'INTEGRATION', detail: 'APIs & Pipelines' },
    { step: '05', name: 'TESTING', detail: 'QA & Auditing' },
    { step: '06', name: 'DEPLOYMENT', detail: 'Edge CDN Launch' },
  ];

  const principles = [
    {
      num: '01',
      title: 'PURPOSE BEFORE COMPLEXITY',
      desc: 'We prioritize practical utility and workflow ergonomics over unnecessary technical complexity or hype-driven dependencies.',
      icon: Zap,
    },
    {
      num: '02',
      title: 'MODULAR ARCHITECTURE',
      desc: 'Decoupled systems with clean separation between UI components, state management, API services, and data persistence layers.',
      icon: Layers,
    },
    {
      num: '03',
      title: 'REAL DEPLOYMENT',
      desc: 'Every application is an authentic, functioning production deployment accessible via live HTTPS URLs with real cloud databases.',
      icon: Rocket,
    },
    {
      num: '04',
      title: 'CONTINUOUS REFINEMENT',
      desc: 'Software is continuously tuned for performance, responsive accessibility (320px to 4K), and maintainability over time.',
      icon: RefreshCw,
    },
  ];

  const techGroups = [
    {
      title: 'WEB & CLIENT',
      icon: Globe,
      technologies: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Lucide Icons'],
    },
    {
      title: 'BACKEND & SERVICES',
      icon: Server,
      technologies: ['Python', 'Flask APIs', 'Node.js', 'Express', 'REST Endpoints'],
    },
    {
      title: 'AI & INTELLIGENCE',
      icon: Cpu,
      technologies: ['Machine Learning', 'Agronomic Decision Trees', 'Emissions Modeling', 'Telemetry Analytics'],
    },
    {
      title: 'DATA & STORAGE',
      icon: Database,
      technologies: ['Firebase Cloud Firestore', 'Realtime Database', 'Structured JSON Schemas', 'Cloud Storage'],
    },
    {
      title: 'DEPLOYMENT & CLOUD',
      icon: Cloud,
      technologies: ['Vercel Edge Network', 'Firebase Hosting', 'Cloudflare CDN', 'HTTPS / TLS 1.3'],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0F172A] py-12 sm:py-16 relative overflow-hidden">
      {/* Reusable Digital Engineering Atmosphere */}
      <DigitalEngineeringAtmosphere variant="how-we-build" />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 relative z-10">
        
        {/* ========================================================================= */}
        {/* 1. SECTION INTRODUCTION */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>HOW WE BUILD</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.12]">
            A Disciplined Approach to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600">
              Building Software That Works.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto font-normal">
            From understanding the problem to deploying and refining the solution. Explore how GJ Nexora Technologies turns requirements into reliable digital products.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. SIX-STEP ENGINEERING PROCESS (DESKTOP: HORIZONTAL TIMELINE, MOBILE: VERTICAL) */}
        {/* ========================================================================= */}
        <div className="space-y-8">
          <div className="text-center space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              Six-Step Engineering Methodology
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Click any stage to inspect specific activities and deliverables.
            </p>
          </div>

          {/* ======================================================================= */}
          {/* DESKTOP TIMELINE TRACK & CONNECTORS */}
          {/* ======================================================================= */}
          <div className="hidden lg:block relative pt-4 pb-2">
            {/* Horizontal Track Line */}
            <div className="absolute top-[38px] left-[8%] right-[8%] h-0.5 bg-slate-200 z-0" />
            
            {/* Active Highlighted Track Segment */}
            <div
              className="absolute top-[38px] left-[8%] h-0.5 bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 transition-all duration-300 z-0"
              style={{ width: `${(activeStep / (steps.length - 1)) * 84}%` }}
            />

            {/* 6 Step Nodes */}
            <div className="grid grid-cols-6 gap-3 relative z-10">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                const isPassed = activeStep >= idx;

                return (
                  <div
                    key={step.num}
                    onClick={() => setActiveStep(idx)}
                    className="flex flex-col items-center text-center cursor-pointer group"
                  >
                    {/* Circle Node on Timeline */}
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-200 mb-4 shadow-sm ${
                        isActive
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white ring-4 ring-indigo-100 scale-110'
                          : isPassed
                          ? 'bg-indigo-50 border-2 border-indigo-600 text-indigo-700'
                          : 'bg-white border-2 border-slate-300 text-slate-500 group-hover:border-indigo-400 group-hover:text-indigo-600'
                      }`}
                    >
                      {step.num}
                    </div>

                    {/* Step Name */}
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

          {/* ======================================================================= */}
          {/* 6 PROCESS CARDS GRID (DESKTOP 6-COL / TABLET 3-COL / MOBILE VERTICAL TIMELINE) */}
          {/* ======================================================================= */}
          
          {/* Mobile Vertical Timeline (Visible on screens < lg) */}
          <div className="lg:hidden relative pl-8 sm:pl-10 space-y-6">
            {/* Vertical Connector Line on Mobile */}
            <div className="absolute left-3.5 sm:left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-600 via-blue-600 to-purple-600" />

            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;

              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className={`relative bg-white rounded-2xl border transition-all duration-300 p-5 space-y-3 cursor-pointer ${
                    isActive
                      ? 'border-indigo-500 shadow-md ring-2 ring-indigo-500/15 -translate-y-0.5'
                      : 'border-slate-200/90 shadow-2xs hover:border-slate-300 hover:bg-slate-50/50'
                  }`}
                >
                  {/* Timeline Pin Node */}
                  <div
                    className={`absolute -left-[30px] sm:-left-[34px] top-5 w-6 h-6 rounded-full flex items-center justify-center font-mono text-[10px] font-bold shadow-xs transition-all ${
                      isActive
                        ? 'bg-indigo-600 text-white ring-4 ring-indigo-100'
                        : 'bg-white border-2 border-slate-300 text-slate-600'
                    }`}
                  >
                    {step.num}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                        {step.num}
                      </span>
                      <h3 className="text-base font-extrabold text-[#0F172A] tracking-tight">
                        {step.title}
                      </h3>
                    </div>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isActive ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-100 text-slate-500'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                    {step.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {step.deliverables.map((item, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-[11px] font-medium text-slate-700"
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop 6-Card Row (Visible on lg+) */}
          <div className="hidden lg:grid lg:grid-cols-6 gap-3.5">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;

              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className={`bg-white rounded-2xl border transition-all duration-300 p-5 flex flex-col justify-between cursor-pointer group ${
                    isActive
                      ? 'border-indigo-500 shadow-lg shadow-indigo-600/10 ring-2 ring-indigo-500/15 -translate-y-1 scale-[1.015]'
                      : 'border-slate-200 shadow-2xs hover:border-indigo-300 hover:shadow-md hover:-translate-y-1'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded border transition-colors ${
                        isActive
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-transparent'
                          : 'bg-slate-100 text-slate-700 border-slate-200 group-hover:bg-indigo-50 group-hover:text-indigo-600'
                      }`}>
                        {step.num}
                      </span>
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                        isActive
                          ? 'bg-indigo-50 text-indigo-600 ring-2 ring-indigo-100'
                          : 'bg-slate-50 text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-sm font-extrabold text-[#0F172A] tracking-tight uppercase">
                        {step.title}
                      </h3>
                      <div className="text-[11px] font-semibold text-indigo-600">
                        {step.subtitle}
                      </div>
                    </div>

                    <p className="text-xs text-[#475569] leading-relaxed font-normal line-clamp-4">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 mt-3">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Key Deliverable
                    </span>
                    <span className="text-xs font-medium text-slate-800 truncate block mt-0.5">
                      {step.deliverables[0]}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 3. ENGINEERING ARCHITECTURE PIPELINE (LIGHT-THEME) */}
        {/* ========================================================================= */}
        <div className="bg-slate-50/90 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-200/80 pb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                SYSTEM PIPELINE
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
                Continuous Architecture Pipeline
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Decoupled Standalone Runtimes</span>
            </div>
          </div>

          {/* Desktop Horizontal / Mobile Vertical Pipeline Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 pt-1">
            {pipelineStages.map((stage, i) => (
              <div
                key={stage.step}
                className="bg-white rounded-2xl p-4 border border-slate-200 hover:border-indigo-400 hover:shadow-md transition-all group space-y-2 relative"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                    {stage.step}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-indigo-600 transition-colors" />
                </div>
                <div className="text-sm font-extrabold text-[#0F172A] tracking-tight">
                  {stage.name}
                </div>
                <div className="text-xs text-slate-500 font-normal">
                  {stage.detail}
                </div>

                {i < pipelineStages.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-slate-300 group-hover:text-indigo-600 transition-colors pointer-events-none">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. FOUR ENGINEERING PRINCIPLES */}
        {/* ========================================================================= */}
        <div className="space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              ENGINEERING PRINCIPLES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              Our Core Standards
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              The foundational engineering principles that govern every application we architect.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {principles.map((prin) => {
              const PrinIcon = prin.icon;
              return (
                <div
                  key={prin.num}
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all space-y-3.5 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                        <PrinIcon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {prin.num}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-sm sm:text-base text-[#0F172A] tracking-tight uppercase">
                      {prin.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                      {prin.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. TECHNOLOGY APPROACH GROUPING (LIGHT-THEME) */}
        {/* ========================================================================= */}
        <div className="space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              TECHNOLOGY STACK
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              Verified Production Technologies
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              The foundational tech stacks powering our live software platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {techGroups.map((group) => {
              const TechIcon = group.icon;
              return (
                <div
                  key={group.title}
                  className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 hover:border-indigo-300 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                    <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                      <TechIcon className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                      {group.title}
                    </h4>
                  </div>

                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {group.technologies.map((tech, i) => (
                      <li key={i} className="flex items-center gap-1.5 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 6. CONVERSION CTA BANNER */}
        {/* ========================================================================= */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-12 text-center space-y-6 shadow-sm">
          <div className="max-w-2xl mx-auto space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              Ready to Build with This Disciplined Process?
            </h3>
            <p className="text-sm sm:text-base text-[#475569] font-normal leading-relaxed">
              Explore our live standalone project case studies or discuss how we can engineer a custom software system for your team.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={() => onNavigate('/projects')}
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 hover:from-indigo-500 hover:via-blue-500 hover:to-purple-500 active:scale-[0.98] transition-all shadow-md shadow-indigo-600/20 cursor-pointer"
            >
              <span>Explore Projects →</span>
            </button>
            <button
              onClick={() => onOpenContact('Inquiry from How We Build Page')}
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold text-[#0F172A] bg-white hover:bg-slate-100 active:scale-[0.98] border border-slate-200 transition-all cursor-pointer"
            >
              <span>Discuss Your Project</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
