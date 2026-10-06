import React, { useEffect, useState, useRef } from 'react';
import { DemoProject } from '../types/demo';
import { DigitalEngineeringAtmosphere } from '../components/layout/DigitalEngineeringAtmosphere';
import { RevealOnScroll } from '../components/animation/RevealOnScroll';
import { StaggerGroup } from '../components/animation/StaggerGroup';
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Layers,
  ArrowRight,
  FileText,
  Cpu,
  Database,
  Globe,
  Workflow,
  Download,
  Eye,
  Check,
  Server,
  Code2,
  Terminal,
  LayoutDashboard,
  ChevronDown,
  ChevronUp,
  Activity,
  Zap,
} from 'lucide-react';

interface DemoDetailProps {
  demo: DemoProject;
  onBack: () => void;
  onOpenContact: (context?: string) => void;
  onNavigate?: (path: string) => void;
}

type NavGroupId = 'overview' | 'system' | 'workflow' | 'technology' | 'documentation';

export const DemoDetail: React.FC<DemoDetailProps> = ({
  demo,
  onBack,
  onOpenContact,
  onNavigate,
}) => {
  const [activeGroup, setActiveGroup] = useState<NavGroupId>('overview');
  const [showDocPreview, setShowDocPreview] = useState<boolean>(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState<boolean>(false);
  const [expandedModule, setExpandedModule] = useState<number | null>(0);
  const moreMenuRef = useRef<HTMLDivElement>(null);

  const isEcoIntel = demo.id === 'eco-intel';

  // Dynamic SEO Page Title
  useEffect(() => {
    document.title = `${demo.name} — Interactive Case Study | GJ Nexora Technologies`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return () => {
      document.title = 'GJ Nexora Demo Lab — Interactive Software Showcase';
    };
  }, [demo]);

  // Close mobile More dropdown on Escape key or outside click
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMoreOpen) {
        setMobileMoreOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(e.target as Node)) {
        setMobileMoreOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMoreOpen]);

  // Scroll-Spy with IntersectionObserver
  useEffect(() => {
    const sections: { id: string; group: NavGroupId }[] = [
      { id: 'overview', group: 'overview' },
      { id: 'system', group: 'system' },
      { id: 'challenge', group: 'system' },
      { id: 'capabilities', group: 'system' },
      { id: 'architecture', group: 'system' },
      { id: 'workflow', group: 'workflow' },
      { id: 'dataflow', group: 'workflow' },
      { id: 'technology', group: 'technology' },
      { id: 'techstack', group: 'technology' },
      { id: 'modules', group: 'technology' },
      { id: 'documentation', group: 'documentation' },
    ];

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const match = sections.find((s) => s.id === entry.target.id);
          if (match) {
            setActiveGroup(match.group);
          }
        }
      });
    }, observerOptions);

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToTarget = (sectionId: string, group: NavGroupId) => {
    setActiveGroup(group);
    setMobileMoreOpen(false);

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', `#${sectionId}`);
    }
  };

  const primaryNavItems: { id: NavGroupId; label: string; targetId: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'overview', label: 'Overview', targetId: 'overview', icon: LayoutDashboard },
    { id: 'system', label: 'System', targetId: 'system', icon: Layers },
    { id: 'workflow', label: 'Workflow', targetId: 'workflow', icon: Workflow },
    { id: 'technology', label: 'Technology', targetId: 'techstack', icon: Cpu },
    { id: 'documentation', label: 'Documentation', targetId: 'documentation', icon: FileText },
  ];

  const subSections = [
    { label: 'Problem & Approach', targetId: 'challenge', group: 'system' as NavGroupId },
    { label: 'Key Capabilities', targetId: 'capabilities', group: 'system' as NavGroupId },
    { label: 'System Architecture', targetId: 'architecture', group: 'system' as NavGroupId },
    { label: 'User Workflow', targetId: 'workflow', group: 'workflow' as NavGroupId },
    { label: 'Data Flow Matrix', targetId: 'dataflow', group: 'workflow' as NavGroupId },
    { label: 'Tech Stack Breakdown', targetId: 'techstack', group: 'technology' as NavGroupId },
    { label: 'Module Explorer', targetId: 'modules', group: 'technology' as NavGroupId },
    { label: 'Documentation & Specs', targetId: 'documentation', group: 'documentation' as NavGroupId },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0F172A]">
      
      {/* ========================================================================= */}
      {/* PREMIUM STICKY PROJECT NAVIGATION BAR */}
      {/* ========================================================================= */}
      <nav
        aria-label="Project Case Study Navigation"
        className="sticky top-16 sm:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs transition-all duration-200"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          
          {/* DESKTOP BAR (lg+) */}
          <div className="hidden lg:flex items-center justify-between h-14 gap-4">
            
            {/* Back Button */}
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-indigo-600 bg-slate-50 hover:bg-slate-100 px-3.5 py-2 rounded-xl border border-slate-200 transition-all shadow-2xs group cursor-pointer"
              aria-label="Back to Projects Showcase"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Projects</span>
            </button>

            {/* 5 Primary Navigation Pills */}
            <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-100/80 border border-slate-200/80 text-xs font-medium">
              {primaryNavItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeGroup === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToTarget(item.targetId, item.id)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-white text-indigo-700 font-bold shadow-xs border border-slate-200/60 ring-1 ring-indigo-500/10 -translate-y-[1px]'
                        : 'text-slate-600 hover:text-[#0F172A] hover:bg-white/60'
                    }`}
                  >
                    <IconComponent className={`w-3.5 h-3.5 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Launch Live Button */}
            {demo.url && (
              <a
                href={demo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 hover:from-indigo-500 hover:via-blue-500 hover:to-purple-500 px-4 py-2 rounded-xl transition-all shadow-sm shadow-indigo-600/20 active:scale-95"
              >
                <span>Launch Live</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>

          {/* MOBILE & TABLET COMPACT BAR (< lg) */}
          <div className="lg:hidden py-2.5 space-y-2">
            
            {/* Top Sub-Row: Back Button & Launch Button */}
            <div className="flex items-center justify-between gap-3">
              <button
                onClick={onBack}
                className="min-h-[40px] inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200 active:scale-95 transition-all cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Projects</span>
              </button>

              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-mono font-bold uppercase px-2 py-1 rounded border bg-indigo-50 text-indigo-700 border-indigo-200">
                  {demo.name}
                </span>
                {demo.url && (
                  <a
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[40px] inline-flex items-center gap-1 text-xs font-bold text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 px-3 py-1.5 rounded-xl shadow-xs active:scale-95"
                  >
                    <span>Launch</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>

            {/* Bottom Sub-Row: 3 Primary Pills + "More ▾" Menu */}
            <div className="flex items-center justify-between gap-1.5 pt-0.5 relative" ref={moreMenuRef}>
              
              <button
                onClick={() => scrollToTarget('overview', 'overview')}
                className={`flex-1 min-h-[42px] inline-flex items-center justify-center gap-1 text-xs rounded-xl font-bold transition-all cursor-pointer ${
                  activeGroup === 'overview'
                    ? 'bg-indigo-50 text-indigo-700 border border-indigo-200 shadow-2xs'
                    : 'bg-slate-50 text-slate-700 border border-slate-200/80 active:bg-slate-100'
                }`}
              >
                <span>Overview</span>
              </button>

              <button
                onClick={() => scrollToTarget('system', 'system')}
                className={`flex-1 min-h-[42px] inline-flex items-center justify-center gap-1 text-xs rounded-xl font-bold transition-all cursor-pointer ${
                  activeGroup === 'system'
                    ? 'bg-indigo-50 text-indigo-700 border border-indigo-200 shadow-2xs'
                    : 'bg-slate-50 text-slate-700 border border-slate-200/80 active:bg-slate-100'
                }`}
              >
                <span>System</span>
              </button>

              <button
                onClick={() => scrollToTarget('workflow', 'workflow')}
                className={`flex-1 min-h-[42px] inline-flex items-center justify-center gap-1 text-xs rounded-xl font-bold transition-all cursor-pointer ${
                  activeGroup === 'workflow'
                    ? 'bg-indigo-50 text-indigo-700 border border-indigo-200 shadow-2xs'
                    : 'bg-slate-50 text-slate-700 border border-slate-200/80 active:bg-slate-100'
                }`}
              >
                <span>Workflow</span>
              </button>

              {/* "More ▾" Menu Trigger */}
              <button
                onClick={() => setMobileMoreOpen(!mobileMoreOpen)}
                aria-expanded={mobileMoreOpen}
                aria-controls="mobile-project-more-menu"
                className={`min-h-[42px] px-3 inline-flex items-center justify-center gap-1 text-xs rounded-xl font-bold transition-all cursor-pointer ${
                  mobileMoreOpen || activeGroup === 'technology' || activeGroup === 'documentation'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 border border-slate-200 active:bg-slate-200'
                }`}
              >
                <span>More</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileMoreOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mobile "More" Dropdown Popover */}
              {mobileMoreOpen && (
                <div
                  id="mobile-project-more-menu"
                  className="absolute top-full right-0 mt-2 w-64 bg-white/98 backdrop-blur-xl rounded-2xl border border-slate-200 p-3 shadow-2xl z-40 animate-fade-in space-y-1"
                >
                  <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
                    All Project Sections
                  </div>
                  {subSections.map((sec) => (
                    <button
                      key={sec.targetId}
                      onClick={() => scrollToTarget(sec.targetId, sec.group)}
                      className="w-full text-left px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 active:bg-indigo-100 transition-colors flex items-center justify-between cursor-pointer"
                    >
                      <span>{sec.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                  ))}
                </div>
              )}

            </div>
          </div>

        </div>
      </nav>

      {/* ========================================================================= */}
      {/* 1. HERO SECTION WITH PROJECT-SPECIFIC DIGITAL ENGINEERING ATMOSPHERE */}
      {/* ========================================================================= */}
      <section className="relative pt-10 sm:pt-14 pb-16 sm:pb-20 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-slate-200/80">
        {/* Project-Specific Digital Engineering Atmosphere */}
        <DigitalEngineeringAtmosphere variant={isEcoIntel ? 'project-eco-intel' : 'project-eco-report'} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Narrative / Mobile Top Order */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="flex flex-wrap items-center gap-2.5 animate-fade-in" style={{ animationDelay: '100ms' }}>
                <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                  PROJECT #{demo.number}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate(`/projects?category=${demo.categoryId}`);
                    } else {
                      onBack();
                    }
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-md border bg-indigo-50 text-indigo-700 border-indigo-200/80 hover:bg-indigo-100 active:scale-95 transition-all cursor-pointer"
                  title={`View all ${demo.category} projects in catalogue`}
                >
                  <span>{demo.category}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  LIVE PUBLIC DEPLOYMENT
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.1] animate-hero-reveal" style={{ animationDelay: '200ms' }}>
                {demo.name}
              </h1>

              {demo.tagline && (
                <p className="text-lg sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 animate-fade-in" style={{ animationDelay: '300ms' }}>
                  {demo.tagline}
                </p>
              )}

              <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-xl font-normal animate-fade-in" style={{ animationDelay: '400ms' }}>
                {demo.description}
              </p>

              {/* Action Buttons */}
              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 animate-fade-in" style={{ animationDelay: '500ms' }}>
                {demo.url && (
                  <a
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 hover:from-indigo-500 hover:via-blue-500 hover:to-purple-500 transition-all shadow-md shadow-indigo-600/20 active:scale-[0.98] group/launch"
                  >
                    <span>Launch Live Platform</span>
                    <ExternalLink className="w-4 h-4 group-hover/launch:translate-x-0.5 group-hover/launch:-translate-y-0.5 transition-transform duration-200" />
                  </a>
                )}

                <button
                  onClick={() => scrollToTarget('documentation', 'documentation')}
                  className="min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:text-indigo-600 transition-colors shadow-2xs cursor-pointer hover:border-slate-300"
                >
                  <FileText className="w-4 h-4 text-indigo-600" />
                  <span>View Documentation</span>
                </button>
              </div>

              {/* Quick Metrics */}
              {demo.metrics && (
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-3 border-t border-slate-200 animate-fade-in" style={{ animationDelay: '600ms' }}>
                  {demo.metrics.map((m, idx) => (
                    <div key={idx} className="bg-slate-50 p-2.5 sm:p-3 rounded-xl border border-slate-200/80 card-interactive">
                      <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium">{m.label}</div>
                      <div className="text-xs sm:text-sm font-bold text-[#0F172A] mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Showcase Image Display */}
            <div className="lg:col-span-6 animate-fade-in" style={{ animationDelay: '350ms' }}>
              <div className="bg-white rounded-3xl p-2 border border-slate-200 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300 card-interactive">
                {/* Browser bar */}
                <div className="bg-slate-100 px-4 py-2.5 rounded-t-2xl flex items-center justify-between text-xs text-slate-500 border-b border-slate-200">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                    <span className="ml-2 font-mono text-[11px] text-slate-600 truncate max-w-[180px] sm:max-w-none">
                      {demo.url ? new URL(demo.url).hostname : 'production.app'}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 uppercase">
                    ● Production Live
                  </span>
                </div>

                {demo.image && (
                  <div className="overflow-hidden rounded-b-2xl bg-slate-950 aspect-[16/10]">
                    <img
                      src={demo.image}
                      alt={`${demo.name} Dashboard Showcase`}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. OVERVIEW GROUP */}
      {/* ========================================================================= */}
      <section id="overview" className="scroll-mt-32 py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                <LayoutDashboard className="w-3.5 h-3.5" />
                <span>PROJECT OVERVIEW</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                What Is {demo.name}?
              </h2>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={150}>
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm text-slate-700 leading-relaxed text-base sm:text-lg card-interactive">
              <p>{demo.overview}</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SYSTEM GROUP: PROBLEM, CAPABILITIES & ARCHITECTURE */}
      {/* ========================================================================= */}
      <div id="system" className="scroll-mt-32">
        
        {/* Sub-section: The Challenge, Approach & Result */}
        <section id="challenge" className="scroll-mt-32 py-16 sm:py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <RevealOnScroll direction="up">
              <div className="max-w-3xl space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                  <Layers className="w-3.5 h-3.5" />
                  <span>SYSTEM & PURPOSE</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                  Problem, Solution & Outcomes
                </h2>
              </div>
            </RevealOnScroll>

            <StaggerGroup staggerDelay={120} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* The Challenge */}
              <div className="bg-slate-50/90 rounded-2xl p-6 sm:p-7 border border-slate-200 flex flex-col justify-between hover:border-amber-300 transition-colors card-interactive">
                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-md inline-block">
                    01 — THE CHALLENGE
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F172A]">
                    The Problem in Practice
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                    {demo.challenge}
                  </p>
                </div>
              </div>

              {/* The Approach */}
              <div className="bg-slate-50/90 rounded-2xl p-6 sm:p-7 border border-indigo-200 shadow-xs flex flex-col justify-between hover:border-indigo-400 transition-colors card-interactive">
                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-1 rounded-md inline-block">
                    02 — THE APPROACH
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F172A]">
                    Engineering Solution
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                    {demo.approach}
                  </p>
                </div>
              </div>

              {/* The Result */}
              <div className="bg-slate-50/90 rounded-2xl p-6 sm:p-7 border border-slate-200 flex flex-col justify-between hover:border-emerald-300 transition-colors card-interactive">
                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md inline-block">
                    03 — THE RESULT
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F172A]">
                    Delivered Outcome
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                    {demo.result}
                  </p>
                </div>
              </div>
            </StaggerGroup>
          </div>
        </section>

        {/* Sub-section: Key Capabilities */}
        <section id="capabilities" className="scroll-mt-32 py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <RevealOnScroll direction="up">
              <div className="max-w-3xl space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                  <Zap className="w-3.5 h-3.5" />
                  <span>SYSTEM CAPABILITIES</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                  Verified System Feature Set
                </h2>
              </div>
            </RevealOnScroll>

            <StaggerGroup staggerDelay={80} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {demo.capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 flex items-center gap-3.5 hover:border-indigo-400 hover:shadow-sm transition-all card-interactive"
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isEcoIntel ? 'bg-indigo-50 text-indigo-600 border border-indigo-200' : 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                  }`}>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#0F172A]">{cap}</span>
                </div>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* Sub-section: System Architecture (Desktop Horizontal Flow + Mobile Vertical Spine) */}
        <section id="architecture" className="scroll-mt-32 py-16 sm:py-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <RevealOnScroll direction="up">
              <div className="max-w-3xl space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>SYSTEM ARCHITECTURE</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                  End-to-End System Diagram
                </h2>
                <p className="text-xs sm:text-sm text-[#475569] font-normal">
                  {demo.architecture.summary}
                </p>
              </div>
            </RevealOnScroll>

            {/* Architecture Flow Diagram Container */}
            <RevealOnScroll direction="zoom" delay={150}>
              <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
                
                {/* DESKTOP HORIZONTAL FLOW (lg+) */}
                <div className="hidden lg:flex items-center justify-between gap-3 relative">
                  {demo.architecture.nodes.map((node, idx) => {
                    const getIcon = () => {
                      switch (node.type) {
                        case 'client': return Globe;
                        case 'frontend': return Code2;
                        case 'api': return Server;
                        case 'engine': return Cpu;
                        case 'data': return Database;
                        default: return Layers;
                      }
                    };
                    const IconComponent = getIcon();

                    return (
                      <React.Fragment key={idx}>
                        <div className="flex-1 bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs text-center flex flex-col items-center justify-center hover:border-indigo-400 hover:shadow-md transition-all card-interactive">
                          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3 border border-indigo-200">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div className="text-[10px] font-mono text-slate-400 mb-1 font-bold">
                            LEVEL 0{idx + 1}
                          </div>
                          <div className="text-xs font-bold text-[#0F172A] tracking-tight mb-1">
                            {node.label}
                          </div>
                          <div className="text-[11px] text-slate-500 leading-tight">
                            {node.sub}
                          </div>
                        </div>

                        {idx < demo.architecture.nodes.length - 1 && (
                          <div className="text-indigo-500 flex items-center justify-center px-1 animate-pulse">
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>

                {/* MOBILE VERTICAL TIMELINE SPINE (< lg) */}
                <div className="lg:hidden space-y-3 relative pl-6">
                  <div className="absolute left-2.5 top-3 bottom-3 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500" />
                  
                  {demo.architecture.nodes.map((node, idx) => {
                    const getIcon = () => {
                      switch (node.type) {
                        case 'client': return Globe;
                        case 'frontend': return Code2;
                        case 'api': return Server;
                        case 'engine': return Cpu;
                        case 'data': return Database;
                        default: return Layers;
                      }
                    };
                    const IconComponent = getIcon();

                    return (
                      <div key={idx} className="relative bg-white rounded-xl p-4 border border-slate-200 shadow-2xs flex items-center gap-3.5 card-interactive">
                        <div className="absolute -left-[27px] w-4 h-4 rounded-full bg-indigo-600 border-2 border-white shadow-xs" />
                        <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-200 flex-shrink-0">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-[10px] font-mono font-bold text-indigo-600">LEVEL 0{idx + 1}</div>
                          <div className="text-xs font-bold text-[#0F172A]">{node.label}</div>
                          <div className="text-[11px] text-slate-500">{node.sub}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-4">
                  <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Decoupled Sandboxed Deployment
                  </span>
                  <span className="font-mono text-slate-500">Zero cross-system runtime latency</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

      </div>

      {/* ========================================================================= */}
      {/* 4. WORKFLOW GROUP: USER WORKFLOW & DATA FLOW */}
      {/* ========================================================================= */}
      <div id="workflow-group" className="scroll-mt-32">
        
        {/* User Operational Workflow */}
        <section id="workflow" className="scroll-mt-32 py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <RevealOnScroll direction="up">
              <div className="max-w-3xl space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                  <Workflow className="w-3.5 h-3.5" />
                  <span>USER WORKFLOW</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                  User Operational Journey
                </h2>
              </div>
            </RevealOnScroll>

            <StaggerGroup staggerDelay={100} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {demo.workflowSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-2xs flex flex-col justify-between hover:border-indigo-300 transition-colors card-interactive"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-bold font-mono shadow-2xs">
                        0{idx + 1}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">STAGE {idx + 1}</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-[#0F172A]">{step}</h3>
                  </div>
                </div>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* Data Flow (Distinct Information Movement) */}
        <section id="dataflow" className="scroll-mt-32 py-16 sm:py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <RevealOnScroll direction="up">
              <div className="max-w-3xl space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                  <Activity className="w-3.5 h-3.5" />
                  <span>DATA FLOW</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                  Information Movement Through the System
                </h2>
              </div>
            </RevealOnScroll>

            <StaggerGroup staggerDelay={100} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {demo.dataFlow.map((df, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200 relative hover:border-indigo-400 hover:bg-white hover:shadow-sm transition-all card-interactive"
                >
                  <div className="text-xs font-mono font-bold text-indigo-600 mb-2">
                    STEP {df.step}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#0F172A] mb-2">{df.title}</h3>
                  <p className="text-xs text-[#475569] leading-relaxed font-normal">{df.description}</p>
                </div>
              ))}
            </StaggerGroup>
          </div>
        </section>

      </div>

      {/* ========================================================================= */}
      {/* 5. TECHNOLOGY GROUP: TECH STACK & EXPANDABLE MODULES */}
      {/* ========================================================================= */}
      <div id="technology-group" className="scroll-mt-32">
        
        {/* Tech Stack Breakdown */}
        <section id="techstack" className="scroll-mt-32 py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <RevealOnScroll direction="up">
              <div className="max-w-3xl space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>TECHNICAL STACK</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                  Technologies & Infrastructure
                </h2>
              </div>
            </RevealOnScroll>

            <StaggerGroup staggerDelay={100} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {demo.techStack.map((stack, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-4 card-interactive"
                >
                  <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-700 border-b border-slate-100 pb-2">
                    {stack.category}
                  </h3>
                  <ul className="space-y-2">
                    {stack.technologies.map((tech, tIdx) => (
                      <li key={tIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700 tech-chip-interactive py-1 px-1.5 rounded">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* Modules Explorer with Interactive Toggle */}
        <section id="modules" className="scroll-mt-32 py-16 sm:py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <RevealOnScroll direction="up">
              <div className="max-w-3xl space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                  <span>MODULE EXPLORER</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                  Functional Platform Modules
                </h2>
              </div>
            </RevealOnScroll>

            <StaggerGroup staggerDelay={120} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {demo.modules.map((mod, idx) => {
                const isExpanded = expandedModule === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setExpandedModule(isExpanded ? null : idx)}
                    className={`bg-slate-50 rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between cursor-pointer group card-interactive ${
                      isExpanded ? 'border-indigo-400 bg-white shadow-md ring-2 ring-indigo-500/10' : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded border border-indigo-200">
                          {mod.tag}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-indigo-600" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-indigo-600" />
                        )}
                      </div>
                      <h3 className="text-base font-bold text-[#0F172A] mb-2">{mod.name}</h3>
                      <p className="text-xs text-[#475569] leading-relaxed mb-4">{mod.description}</p>
                    </div>

                    <div className="pt-3 border-t border-slate-200 space-y-1.5">
                      {mod.highlights.map((hl, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2 text-[11px] text-slate-600">
                          <Check className="w-3 h-3 text-indigo-600 flex-shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </StaggerGroup>
          </div>
        </section>

      </div>

      {/* ========================================================================= */}
      {/* 6. DOCUMENTATION GROUP & RUNBOOK VIEWER */}
      {/* ========================================================================= */}
      <section id="documentation" className="scroll-mt-32 py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                <FileText className="w-3.5 h-3.5" />
                <span>PROJECT DOCUMENTATION</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                Technical Documentation & Specifications
              </h2>
              <p className="text-xs sm:text-sm text-[#475569] font-normal">
                Structured architectural documentation, schema design notes, and deployment runbooks for {demo.name}.
              </p>
            </div>
          </RevealOnScroll>

          {/* Documentation Presentation Card */}
          <RevealOnScroll direction="up" delay={150}>
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md card-interactive">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Doc Details */}
                <div className="lg:col-span-8 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-200 flex items-center justify-center shadow-2xs">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0F172A]">{demo.documentation.title}</h3>
                      <span className="text-xs font-medium text-indigo-600">{demo.documentation.docType}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                    {demo.documentation.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Included Document Sections:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {demo.documentation.sections.map((sec, idx) => (
                        <div
                          key={idx}
                          className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-xs text-slate-700 flex items-center gap-2"
                        >
                          <span className="w-4 h-4 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-[10px] font-bold">
                            {idx + 1}
                          </span>
                          <span className="truncate">{sec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-3">
                    <span>Last Updated: {demo.documentation.lastUpdated}</span>
                    <span>•</span>
                    <span className="text-emerald-700 font-semibold">{demo.documentation.status}</span>
                  </div>
                </div>

                {/* Right Action Box */}
                <div className="lg:col-span-4 bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-4 text-center">
                  <div className="space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Document Actions
                    </div>
                    <div className="text-xs text-slate-500">
                      Full architectural and operational guide
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <button
                      onClick={() => setShowDocPreview(!showDocPreview)}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 transition-all shadow-sm cursor-pointer active:scale-95"
                    >
                      <Eye className="w-4 h-4" />
                      <span>{showDocPreview ? 'Hide Specification' : 'Read Specification'}</span>
                    </button>

                    <button
                      onClick={() => {
                        alert(`Technical specification document for ${demo.name} is available directly online.`);
                      }}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer active:scale-95"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Spec Sheet</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Embedded Documentation Preview */}
              {showDocPreview && (
                <div className="mt-8 pt-8 border-t border-slate-200 space-y-6 animate-fade-in">
                  <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-800 text-slate-300 space-y-6 font-mono text-xs shadow-xl">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-slate-400">
                      <span className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-indigo-400" />
                        <span>{demo.name.toUpperCase()}_SPECIFICATION_V2.6.MD</span>
                      </span>
                      <span>GJ NEXORA ENGINEERING</span>
                    </div>

                    <div className="space-y-4 text-slate-300 font-sans text-sm">
                      <div>
                        <h4 className="text-base font-bold text-white mb-1">1. System Scope & Objective</h4>
                        <p className="text-slate-400 text-xs leading-relaxed">{demo.overview}</p>
                      </div>

                      <div>
                        <h4 className="text-base font-bold text-white mb-1">2. Architecture & Data Ingestion</h4>
                        <p className="text-slate-400 text-xs leading-relaxed">{demo.architecture.summary}</p>
                      </div>

                      <div>
                        <h4 className="text-base font-bold text-white mb-1">3. Core Intelligence & Processing Modules</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                          {demo.modules.map((m, idx) => (
                            <div key={idx} className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                              <strong className="text-white block">{m.name}</strong>
                              <span className="text-xs text-slate-400">{m.description}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. GJ NEXORA SIGNATURE & FINAL CTA CARD */}
      {/* ========================================================================= */}
      <section id="live" className="py-16 sm:py-20 bg-slate-50/80 border-t border-slate-200/80 relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-100/50 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-100/40 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <RevealOnScroll direction="up">
            {/* Brand Signature Badge */}
            <div className="inline-flex items-center gap-3 p-2 px-4 rounded-2xl bg-white border border-slate-200 shadow-2xs card-interactive">
              <img src="/logo.gj.png" alt="GJ Nexora Logo" className="w-8 h-8 object-contain rounded-lg" />
              <div className="text-left">
                <div className="text-xs font-extrabold text-[#0F172A] tracking-wider uppercase">
                  GJ NEXORA TECHNOLOGIES
                </div>
                <div className="text-[10px] text-indigo-600 font-bold uppercase">
                  Building Digital Excellence
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={150}>
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
                Explore the Live Platform
              </h2>
              <p className="text-base sm:text-lg text-[#475569] max-w-xl mx-auto leading-relaxed font-normal">
                See {demo.name} in action or discuss engineering a custom digital platform tailored for your organization.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={250}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              {demo.url && (
                <a
                  href={demo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 hover:from-indigo-500 hover:via-blue-500 hover:to-purple-500 transition-all shadow-md shadow-indigo-600/20 active:scale-[0.98]"
                >
                  <span>Launch Live Platform</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              <button
                onClick={onBack}
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-[#0F172A] bg-white border border-slate-200 hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer active:scale-[0.98]"
              >
                <span>Back to Projects</span>
              </button>

              <button
                onClick={() => onOpenContact(`Inquiry inspired by ${demo.name}`)}
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-indigo-700 bg-indigo-50 border border-indigo-200 hover:bg-indigo-100 transition-colors cursor-pointer active:scale-[0.98]"
              >
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>Talk to GJ Nexora</span>
              </button>
            </div>
          </RevealOnScroll>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 8. SUBTLE MOBILE BOTTOM FLOATING ACTION BAR */}
      {/* ========================================================================= */}
      <div className="fixed bottom-0 left-0 right-0 z-30 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/90 p-3 px-4 flex items-center justify-between gap-3 shadow-xl">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 px-3.5 py-2.5 rounded-xl border border-slate-200 active:scale-95 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Projects</span>
        </button>

        {demo.url && (
          <a
            href={demo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 px-4 py-2.5 rounded-xl shadow-md active:scale-95 transition-all"
          >
            <span>Launch Live Platform</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  );
};
