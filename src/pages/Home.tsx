import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ArrowRight,
  ExternalLink,
  Layers,
  ChevronDown,
  CheckCircle2,
  Search,
  Workflow,
  Code2,
  ShieldCheck,
  Rocket,
  RefreshCw,
  FolderKanban,
} from 'lucide-react';
import { DEMOS_DATA, PROJECT_CATEGORIES } from '../data/demos';
import { CategoryId } from '../types/demo';
import { DigitalEngineeringAtmosphere } from '../components/layout/DigitalEngineeringAtmosphere';

interface HomeProps {
  onNavigate: (path: string) => void;
  onOpenContact: (context?: string) => void;
}

export const Home: React.FC<HomeProps> = ({
  onNavigate,
  onOpenContact,
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');

  useEffect(() => {
    document.title = 'GJ Nexora Demo Lab — Interactive Software Showcase | Building Digital Excellence';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const scrollToProjects = () => {
    const el = document.getElementById('real-projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate('/projects');
    }
  };

  // Filter projects dynamically
  const filteredProjects = selectedCategory === 'all'
    ? DEMOS_DATA
    : DEMOS_DATA.filter((project) => project.categoryId === selectedCategory);

  const steps = [
    {
      num: '01',
      name: 'Understand',
      desc: 'Analyze operational workflows, user needs, data constraints, and business goals before writing code.',
      icon: Search,
    },
    {
      num: '02',
      name: 'Architect',
      desc: 'Blueprint decoupled frontend-backend components, database schemas, and structured API contracts.',
      icon: Workflow,
    },
    {
      num: '03',
      name: 'Build',
      desc: 'Develop modular TypeScript codebases with strict typing, responsive layouts, and performant logic.',
      icon: Code2,
    },
    {
      num: '04',
      name: 'Test',
      desc: 'Validate payloads, stress-test responsive breakpoints (320px–4K), and audit error boundaries.',
      icon: ShieldCheck,
    },
    {
      num: '05',
      name: 'Deploy',
      desc: 'Publish to high-availability cloud CDN edge networks with automated CI/CD and SSL security.',
      icon: Rocket,
    },
    {
      num: '06',
      name: 'Refine',
      desc: 'Continuously tune UX, monitor real-time telemetry, and enhance system performance.',
      icon: RefreshCw,
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#0F172A] overflow-hidden">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (DIGITAL ENGINEERING ATMOSPHERE) */}
      {/* ========================================================================= */}
      <section className="relative pt-14 sm:pt-24 pb-16 sm:pb-24 overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-slate-100/70 via-[#F8FAFC] to-[#F8FAFC]">
        
        {/* Layered Digital Engineering Atmosphere */}
        <DigitalEngineeringAtmosphere variant="hero" />

        {/* Center Protected Quiet Zone */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6 sm:space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-indigo-200/80 text-indigo-700 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>GJ NEXORA DEMO LAB</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#0F172A] tracking-tight leading-[1.08]">
            Explore Software{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600">
              Built to Work.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-[#475569] max-w-2xl mx-auto font-normal leading-relaxed">
            Real projects. Real deployments. Practical digital engineering. Explore fully functioning standalone platforms engineered by GJ Nexora Technologies.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={() => onNavigate('/projects')}
              className="w-full sm:w-auto min-h-[48px] sm:min-h-[52px] inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 hover:from-indigo-500 hover:via-blue-500 hover:to-purple-500 active:scale-[0.98] transition-all shadow-lg shadow-indigo-600/20 group/btn cursor-pointer"
            >
              <Layers className="w-4 h-4" />
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('/how-we-build')}
              className="w-full sm:w-auto min-h-[48px] sm:min-h-[52px] inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-[#0F172A] bg-white hover:bg-slate-50 active:scale-[0.98] border border-slate-200 transition-all shadow-2xs cursor-pointer"
            >
              <span>How We Build →</span>
            </button>
          </div>

          {/* Quick Metrics Strip */}
          <div className="pt-6 flex items-center justify-center gap-8 sm:gap-12 text-xs sm:text-sm text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold text-slate-800">02 Live Platforms</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              <span className="font-bold text-slate-800">100% Production Ready</span>
            </div>
          </div>

          {/* Subtle Bottom Scroll Cue */}
          <div className="pt-4 sm:pt-6">
            <button
              onClick={scrollToProjects}
              className="inline-flex flex-col items-center gap-1 text-[11px] font-semibold text-slate-400 hover:text-indigo-600 transition-colors cursor-pointer group"
              aria-label="Scroll to live projects"
            >
              <span>Explore Projects Below</span>
              <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform text-indigo-500 animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION — REAL PROJECTS (CATEGORY-FILTERED SHOWCASE) */}
      {/* ========================================================================= */}
      <section id="real-projects" className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden">
        {/* Medium Project Atmosphere */}
        <DigitalEngineeringAtmosphere variant="projects" hideIcons={true} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 relative z-10">
          
          {/* Header Row: Left Title + Right Link */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/60 pb-6">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600">
                <span>REAL PROJECTS</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
                Two Live Platforms. Two Independent Deployments.
              </h2>
            </div>

            <button
              onClick={() => onNavigate(selectedCategory !== 'all' ? `/projects?category=${selectedCategory}` : '/projects')}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors self-start sm:self-auto group cursor-pointer"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Category Filter Controls & Dynamic Counter Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            
            {/* Scrollable Category Filter Row */}
            <div
              role="group"
              aria-label="Filter projects by category"
              className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0"
            >
              {PROJECT_CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`min-h-[44px] px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer flex-shrink-0 ${
                      isActive
                        ? 'bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 text-white shadow-md shadow-indigo-600/20 ring-2 ring-indigo-500/20'
                        : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/90 shadow-2xs active:scale-[0.98]'
                    }`}
                  >
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Contextual Live Project Counter */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 self-start sm:self-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>
                {filteredProjects.length === 1
                  ? '01 Live Project'
                  : `0${filteredProjects.length} Live Projects`}
              </span>
            </div>

          </div>

          {/* Filtered Project Cards Grid */}
          {filteredProjects.length > 0 ? (
            <div className={`grid grid-cols-1 ${filteredProjects.length > 1 ? 'md:grid-cols-2' : 'max-w-2xl mx-auto w-full'} gap-8 lg:gap-10 transition-all duration-300`}>
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden animate-fade-in"
                >
                  {/* Subtle ambient light */}
                  <div
                    className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] pointer-events-none ${
                      project.id === 'eco-intel' ? 'bg-indigo-50/80' : 'bg-emerald-50/80'
                    }`}
                  />

                  <div className="space-y-5 relative z-10">
                    {/* Image Container */}
                    <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 aspect-[16/10] shadow-2xs">
                      <img
                        src={project.image || undefined}
                        alt={project.name}
                        className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-emerald-700 border border-slate-200 shadow-2xs flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>{project.number} {project.category}</span>
                      </div>
                      <div className="absolute bottom-3.5 right-3.5 px-2.5 py-0.5 rounded-md bg-slate-900/80 backdrop-blur-md text-white font-mono text-[11px] font-medium">
                        PROJECT {project.number}
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] group-hover:text-indigo-600 transition-colors tracking-tight">
                        {project.name}
                      </h3>
                      <p className={`text-xs sm:text-sm font-semibold ${
                        project.id === 'eco-intel' ? 'text-indigo-900/80' : 'text-emerald-900/80'
                      }`}>
                        {project.tagline}
                      </p>
                      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed line-clamp-3 font-normal">
                        {project.description}
                      </p>
                    </div>

                    {/* Capability Badges */}
                    <div className="space-y-2 pt-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                        Core Capabilities
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.capabilities.slice(0, 5).map((cap, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700"
                          >
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            <span>{cap}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-slate-100 relative z-10">
                    <button
                      onClick={() => onNavigate(`/projects/${project.id}`)}
                      className={`min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white transition-all shadow-sm active:scale-[0.98] cursor-pointer ${
                        project.id === 'eco-intel'
                          ? 'bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 hover:from-indigo-500 hover:via-blue-500 hover:to-purple-500 shadow-indigo-600/20'
                          : 'bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 hover:from-emerald-500 hover:via-teal-500 hover:to-indigo-500 shadow-emerald-600/20'
                      }`}
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[44px] inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#0F172A] bg-slate-50 hover:bg-slate-100 active:scale-[0.98] border border-slate-200 transition-all shadow-2xs"
                      >
                        <span>Launch Live</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Reusable Empty State */
            <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-3 max-w-xl mx-auto shadow-sm">
              <FolderKanban className="w-10 h-10 text-slate-400 mx-auto" />
              <h3 className="text-lg font-bold text-[#0F172A]">No Projects Yet</h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Projects in this category will appear here as they are completed and deployed.
              </p>
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 transition-all cursor-pointer"
              >
                <span>View All Projects</span>
              </button>
            </div>
          )}

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SECTION — TRANSPARENT ENGINEERING SHOWROOM (3 CARDS) */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Technical Grid and Glow */}
        <DigitalEngineeringAtmosphere variant="section" hideCircuits={true} />
        
        {/* Section Blueprint Watermarks */}
        <div className="hidden xl:block pointer-events-none select-none">
          <div className="absolute top-10 left-[4%] font-mono text-[10px] font-semibold tracking-widest text-slate-500/35 uppercase">
            // SYSTEM.ARCHITECTURE
          </div>
          <div className="absolute bottom-10 left-[4%] font-mono text-[10px] font-semibold tracking-widest text-slate-500/35 uppercase">
            DATA_FLOW // VERIFIED
          </div>
          <div className="absolute top-10 right-[4%] font-mono text-[10px] font-semibold tracking-widest text-slate-500/35 uppercase text-right">
            DEPLOYMENT.STATUS // LIVE
          </div>
          <div className="absolute bottom-10 right-[4%] font-mono text-[10px] font-semibold tracking-widest text-slate-500/35 uppercase text-right">
            MODULES.INTEGRATED()
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
              <span>MORE THAN A PROJECT LIST</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
              A Transparent Showroom of Working Engineering
            </h2>
            <p className="text-base sm:text-lg text-[#475569] font-normal leading-relaxed max-w-2xl mx-auto">
              The GJ Nexora Demo Lab demonstrates our commitment to real software, independent cloud deployments, and documented engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Card 01 */}
            <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all space-y-4 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-1 rounded-md inline-block">
                  01
                </div>
                <h3 className="font-extrabold text-xl text-[#0F172A] tracking-tight">
                  Real Projects
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed font-normal">
                  Every application is a complete, functioning software system designed to solve specific operational challenges.
                </p>
              </div>
            </div>

            {/* Card 02 */}
            <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all space-y-4 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-1 rounded-md inline-block">
                  02
                </div>
                <h3 className="font-extrabold text-xl text-[#0F172A] tracking-tight">
                  Independent Deployments
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed font-normal">
                  Hosted separately on production cloud edge networks with their own databases, schemas, and live domains.
                </p>
              </div>
            </div>

            {/* Card 03 */}
            <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all space-y-4 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-1 rounded-md inline-block">
                  03
                </div>
                <h3 className="font-extrabold text-xl text-[#0F172A] tracking-tight">
                  Documented Engineering
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed font-normal">
                  Transparent system architecture, data flows, and tech stacks documented for technical review.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SECTION — HOW WE BUILD (6-STEP ENGINEERING TIMELINE) */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden">
        {/* Stronger Engineering Pipeline Atmosphere */}
        <DigitalEngineeringAtmosphere variant="how-we-build" hideIcons={true} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
              <span>HOW WE BUILD</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
              A Disciplined 6-Step Engineering Process
            </h2>
            <p className="text-base sm:text-lg text-[#475569] font-normal leading-relaxed">
              From raw problem discovery to cloud edge deployment.
            </p>
          </div>

          {/* Desktop 6-Card Row */}
          <div className="hidden lg:grid lg:grid-cols-6 gap-3.5">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className={`bg-white rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between cursor-pointer group ${
                    isActive
                      ? 'border-indigo-500 shadow-lg shadow-indigo-600/10 ring-2 ring-indigo-500/15 -translate-y-1'
                      : 'border-slate-200 shadow-2xs hover:border-indigo-300 hover:shadow-md hover:-translate-y-0.5'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded border transition-colors ${
                        isActive
                          ? 'bg-indigo-600 text-white border-transparent'
                          : 'bg-slate-100 text-slate-700 border-slate-200 group-hover:bg-indigo-50 group-hover:text-indigo-600'
                      }`}>
                        {step.num}
                      </span>
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                        isActive ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-50 text-slate-500 group-hover:text-indigo-600'
                      }`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-sm font-extrabold text-[#0F172A] tracking-tight">
                      {step.name}
                    </h3>

                    <p className="text-xs text-[#475569] leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Vertical Timeline */}
          <div className="lg:hidden space-y-3">
            {steps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 flex items-start gap-4 shadow-2xs"
                >
                  <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                        {step.num}
                      </span>
                      <h3 className="text-base font-bold text-[#0F172A]">{step.name}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => onNavigate('/how-we-build')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 hover:from-indigo-500 hover:via-blue-500 hover:to-purple-500 active:scale-95 transition-all shadow-md shadow-indigo-600/20 cursor-pointer"
            >
              <span>Explore Our Process →</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SECTION — GJ NEXORA BRAND STATEMENT */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Ambient Peripheral Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[280px] bg-gradient-to-r from-indigo-100/35 via-blue-50/25 to-purple-100/35 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
            <span>BUILDING DIGITAL EXCELLENCE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            We Build Practical Digital Solutions That Work.
          </h2>

          <p className="text-base sm:text-xl text-[#475569] leading-relaxed max-w-2xl mx-auto font-normal">
            GJ Nexora Technologies is dedicated to engineering purposeful software systems, applied AI applications, and digital platforms that deliver measurable value.
          </p>

          <div className="pt-2">
            <button
              onClick={() => onNavigate('/about')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 hover:bg-indigo-100 active:scale-95 transition-all cursor-pointer"
            >
              <span>About GJ Nexora Technologies →</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SECTION — FINAL CONVERSION CTA */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] relative overflow-hidden">
        {/* Enhanced Atmospheric Glow Behind Container */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-gradient-to-r from-indigo-200/45 via-blue-200/35 to-purple-200/45 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-14 text-center space-y-6 shadow-md relative overflow-hidden">
            {/* Ambient Interior Glow */}
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-indigo-100/60 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-100/50 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                <span>START A CONVERSATION</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
                Ready to Build{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600">
                  Something Useful?
                </span>
              </h2>

              <p className="text-base sm:text-lg text-[#475569] max-w-xl mx-auto font-normal leading-relaxed">
                Let's turn your idea, operational challenge, or digital vision into a real, high-performance software solution built to work.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <button
                  onClick={() => onNavigate('/projects')}
                  className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 hover:from-indigo-500 hover:via-blue-500 hover:to-purple-500 active:scale-[0.98] transition-all shadow-md shadow-indigo-600/20 cursor-pointer"
                >
                  <span>Explore Our Projects →</span>
                </button>
                <button
                  onClick={() => onOpenContact('Homepage Final CTA')}
                  className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-[#0F172A] bg-white hover:bg-slate-50 active:scale-[0.98] border border-slate-200 transition-all shadow-2xs cursor-pointer"
                >
                  <span>Talk to GJ Nexora →</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
