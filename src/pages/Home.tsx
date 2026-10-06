import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ExternalLink,
  Layers,
  CheckCircle2,
  Search,
  Workflow,
  Code2,
  ShieldCheck,
  Rocket,
  FileCheck,
} from 'lucide-react';
import { DEMOS_DATA, PROJECT_CATEGORIES } from '../data/demos';
import { CategoryId } from '../types/demo';
import { DigitalEngineeringAtmosphere } from '../components/layout/DigitalEngineeringAtmosphere';
import { RevealOnScroll } from '../components/animation/RevealOnScroll';
import { StaggerGroup } from '../components/animation/StaggerGroup';

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
    document.title = 'GJ Nexora Demo Lab — Digital Product Studio & Software Showcase';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const scrollToProjects = () => {
    const el = document.getElementById('selected-work');
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

  const ecoIntelProject = DEMOS_DATA.find((p) => p.id === 'eco-intel') || DEMOS_DATA[0];
  const ecoReportProject = DEMOS_DATA.find((p) => p.id === 'eco-report') || DEMOS_DATA[1];
  const techSolutionsProject = DEMOS_DATA.find((p) => p.id === 'tech-solutions') || DEMOS_DATA[3];

  const steps = [
    {
      num: '01',
      name: 'Discover',
      desc: 'Analyze operational workflows, operator constraints, and system requirements before writing code.',
      icon: Search,
    },
    {
      num: '02',
      name: 'Define',
      desc: 'Architect decoupled components, data schemas, API contracts, and user interaction flows.',
      icon: Workflow,
    },
    {
      num: '03',
      name: 'Design',
      desc: 'Craft clear, responsive interfaces with strict typography, high usability, and zero visual clutter.',
      icon: Code2,
    },
    {
      num: '04',
      name: 'Build',
      desc: 'Engineer modular TypeScript codebases with strict typing, robust state handling, and performant logic.',
      icon: Layers,
    },
    {
      num: '05',
      name: 'Validate',
      desc: 'Audit edge cases, cross-device responsiveness (320px–4K), error boundaries, and payload flows.',
      icon: ShieldCheck,
    },
    {
      num: '06',
      name: 'Launch',
      desc: 'Deploy to high-availability cloud CDN edge networks with automated CI/CD and production SSL.',
      icon: Rocket,
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#FAFAFA] text-[#0F172A] overflow-hidden">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION — EDITORIAL PRODUCT STUDIO */}
      {/* ========================================================================= */}
      <section className="relative pt-12 sm:pt-20 lg:pt-28 pb-16 sm:pb-24 lg:pb-28 overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-white via-slate-50/50 to-[#FAFAFA]">
        {/* Restrained Studio Lighting */}
        <DigitalEngineeringAtmosphere variant="hero" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Confident Editorial Narrative */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-center lg:text-left">
              
              {/* Eyebrow Label */}
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 text-xs font-semibold tracking-wide shadow-2xs animate-fade-in"
                style={{ animationDelay: '100ms' }}
              >
                <span className="w-2 h-2 rounded-full bg-indigo-600" />
                <span className="font-bold tracking-wider uppercase text-[11px] text-indigo-700">GJ NEXORA DEMO LAB</span>
                <span className="text-slate-300">|</span>
                <span className="text-slate-600 font-medium text-[11px]">Product Showcase</span>
              </div>

              {/* Main Headline */}
              <h1
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#0F172A] tracking-tight leading-[1.06] animate-hero-reveal"
                style={{ animationDelay: '200ms' }}
              >
                Real software.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600">
                  Built for real problems.
                </span>
              </h1>

              {/* Supporting Editorial Copy */}
              <p
                className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed animate-fade-in"
                style={{ animationDelay: '350ms' }}
              >
                The Demo Lab showcases selected software platforms, AI applications, and digital systems built by GJ Nexora Technologies. Every application is an authentic, independent cloud deployment.
              </p>

              {/* Action Buttons */}
              <div
                className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 animate-fade-in"
                style={{ animationDelay: '500ms' }}
              >
                <button
                  onClick={scrollToProjects}
                  className="w-full sm:w-auto min-h-[48px] sm:min-h-[52px] inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 hover:from-indigo-500 hover:via-blue-500 hover:to-purple-500 active:scale-[0.98] transition-all shadow-md shadow-indigo-600/20 group/btn cursor-pointer"
                >
                  <Layers className="w-4 h-4" />
                  <span>Explore Projects</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>

                <button
                  onClick={() => onOpenContact('Homepage Hero')}
                  className="w-full sm:w-auto min-h-[48px] sm:min-h-[52px] inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-[#0F172A] bg-white hover:bg-slate-50 active:scale-[0.98] border border-slate-200 transition-all shadow-2xs cursor-pointer hover:border-slate-300"
                >
                  <span>Start a Project →</span>
                </button>
              </div>

              {/* Status Indicators Strip */}
              <div
                className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 text-xs sm:text-sm text-slate-600 font-medium animate-fade-in"
                style={{ animationDelay: '650ms' }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-semibold text-slate-800">08 Live Platforms</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500" />
                  <span className="font-semibold text-slate-800">Independent Deployments</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500" />
                  <span className="font-semibold text-slate-800">Verified Architecture</span>
                </div>
              </div>

            </div>

            {/* Right Column: Layered Real Product Showcase Composition */}
            <div
              className="lg:col-span-6 relative animate-fade-in"
              style={{ animationDelay: '300ms' }}
            >
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                
                {/* Subtle Ambient Background Light */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-100/60 via-blue-50/40 to-purple-100/50 rounded-3xl blur-2xl -z-10" />

                {/* Primary Browser Mockup (ECO-INTEL) */}
                <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden card-interactive group">
                  {/* Browser Bar */}
                  <div className="bg-slate-100 px-4 py-2.5 flex items-center justify-between text-xs text-slate-500 border-b border-slate-200">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                      <span className="ml-2 font-mono text-[11px] text-slate-600 font-medium">
                        eco-intel-frontend.vercel.app
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>LIVE</span>
                    </div>
                  </div>

                  {/* Real Product Screenshot */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 cursor-pointer" onClick={() => onNavigate('/projects/eco-intel')}>
                    <img
                      src="/ECO-INTEL AI Smart Farming Dashboard.png"
                      alt="ECO-INTEL AI Smart Farming Dashboard Live Interface"
                      className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                      <span className="px-3 py-1 rounded-lg bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold shadow-sm">
                        ECO-INTEL — AI Agriculture
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-mono font-medium">
                        Explore System →
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Offset Card: Eco Report Secondary Preview */}
                <div
                  onClick={() => onNavigate('/projects/eco-report')}
                  className="hidden sm:flex absolute -bottom-6 -left-6 bg-white/98 backdrop-blur-md rounded-2xl border border-slate-200/90 p-4 shadow-lg items-center gap-3.5 max-w-xs cursor-pointer hover:border-emerald-300 hover:shadow-xl transition-all card-interactive group/card z-20"
                >
                  <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 flex-shrink-0 group-hover/card:scale-105 transition-transform">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-1.5 py-0.2 rounded">
                        SUSTAINABILITY
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <div className="text-xs font-bold text-[#0F172A] group-hover/card:text-teal-700 transition-colors">
                      Eco Report
                    </div>
                    <div className="text-[11px] text-slate-500 font-normal">
                      Compliance & ESG Auditing Engine
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION — SELECTED WORK (THE PRODUCT SHOWCASE CENTERPIECE) */}
      {/* ========================================================================= */}
      <section id="selected-work" className="py-20 sm:py-28 bg-[#FAFAFA] border-b border-slate-200/80 relative overflow-hidden">
        <DigitalEngineeringAtmosphere variant="projects" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 relative z-10">
          
          {/* Header & Category Controls */}
          <RevealOnScroll direction="up" delay={0}>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/70 pb-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                    <Layers className="w-3.5 h-3.5 text-indigo-600" />
                    <span>SELECTED WORK</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
                    Real Software Engineered for Impact.
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 max-w-2xl font-normal leading-relaxed">
                    Explore our active software deployments. Each project represents a complete, functioning system with custom architecture, live cloud hosting, and real-world utility.
                  </p>
                </div>

                <button
                  onClick={() => onNavigate('/projects')}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors self-start sm:self-auto group cursor-pointer"
                >
                  <span>View All Projects</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>

              {/* Category Filter Chips */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
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
                        className={`min-h-[42px] px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer flex-shrink-0 ${
                          isActive
                            ? 'bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 text-white shadow-md shadow-indigo-600/20'
                            : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/90 shadow-2xs active:scale-[0.98]'
                        }`}
                      >
                        <span>{cat.name}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 self-start sm:self-auto">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>
                    {filteredProjects.length === 1
                      ? '01 Active Platform'
                      : `0${filteredProjects.length} Active Platforms`}
                  </span>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* ========================================================================= */}
          {/* ASYMMETRICAL EDITORIAL PROJECT SHOWCASES */}
          {/* ========================================================================= */}

          {/* PROJECT 01: ECO-INTEL (Featured Asymmetrical Layout) */}
          {(selectedCategory === 'all' || selectedCategory === 'ai-intelligence') && (
            <RevealOnScroll direction="up" delay={50}>
              <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 lg:p-12 shadow-sm card-interactive hover:border-indigo-300 hover:shadow-xl transition-all relative overflow-hidden group">
                
                {/* Subtle Ambient Accent */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50/60 rounded-full blur-[100px] pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                  
                  {/* Visual Side (Span 7 - Large Feature Area) */}
                  <div className="lg:col-span-7">
                    <div
                      onClick={() => onNavigate('/projects/eco-intel')}
                      className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md group-hover:shadow-lg transition-all aspect-[16/10] cursor-pointer"
                    >
                      <img
                        src={ecoIntelProject.image || undefined}
                        alt="ECO-INTEL AI Agriculture Smart Farming Dashboard Interface"
                        className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      
                      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-emerald-700 text-xs font-bold shadow-2xs">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span>LIVE DEPLOYMENT</span>
                      </div>

                      <div className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md text-white text-xs font-mono font-medium shadow-2xs">
                        <span>PROJECT 01</span>
                      </div>
                    </div>
                  </div>

                  {/* Editorial Content Side (Span 5) */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200">
                          AI & Intelligence
                        </span>
                      </div>

                      <h3
                        onClick={() => onNavigate('/projects/eco-intel')}
                        className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight group-hover:text-indigo-600 transition-colors cursor-pointer"
                      >
                        {ecoIntelProject.name}
                      </h3>

                      <p className="text-sm font-semibold text-indigo-900/90">
                        {ecoIntelProject.tagline}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {ecoIntelProject.description}
                    </p>

                    {/* Capabilities Badges */}
                    <div className="space-y-2.5">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                        Core Capabilities
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {ecoIntelProject.capabilities.map((cap, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 tech-chip-interactive"
                          >
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            <span>{cap}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <button
                        onClick={() => onNavigate('/projects/eco-intel')}
                        className="min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 hover:from-indigo-500 hover:via-blue-500 hover:to-purple-500 transition-all shadow-md shadow-indigo-600/20 active:scale-[0.98] group/btn cursor-pointer"
                      >
                        <span>Explore ECO-INTEL</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                      </button>

                      {ecoIntelProject.url && (
                        <a
                          href={ecoIntelProject.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="min-h-[46px] inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#0F172A] bg-slate-50 hover:bg-slate-100 active:scale-[0.98] border border-slate-200 transition-all shadow-2xs group/ext cursor-pointer"
                        >
                          <span>Launch Live</span>
                          <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover/ext:translate-x-0.5 group-hover/ext:-translate-y-0.5 transition-transform duration-200" />
                        </a>
                      )}
                    </div>

                  </div>

                </div>
              </div>
            </RevealOnScroll>
          )}

          {/* PROJECT 02: Eco Report (Distinct Reversed Editorial Composition) */}
          {(selectedCategory === 'all' || selectedCategory === 'sustainability-environment') && (
            <RevealOnScroll direction="up" delay={100}>
              <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 lg:p-12 shadow-sm card-interactive hover:border-teal-300 hover:shadow-xl transition-all relative overflow-hidden group">
                
                {/* Subtle Ambient Accent */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-teal-50/60 rounded-full blur-[100px] pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                  
                  {/* Editorial Content Side (Span 5 - Ordered First on Desktop for Rhythm) */}
                  <div className="lg:col-span-5 space-y-6 lg:order-1">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-teal-50 text-teal-700 border border-teal-200">
                          Sustainability & Environment
                        </span>
                      </div>

                      <h3
                        onClick={() => onNavigate('/projects/eco-report')}
                        className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight group-hover:text-teal-700 transition-colors cursor-pointer"
                      >
                        {ecoReportProject.name}
                      </h3>

                      <p className="text-sm font-semibold text-teal-900/90">
                        {ecoReportProject.tagline}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {ecoReportProject.description}
                    </p>

                    {/* Capabilities Badges */}
                    <div className="space-y-2.5">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                        Core Capabilities
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {ecoReportProject.capabilities.map((cap, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 tech-chip-interactive"
                          >
                            <CheckCircle2 className="w-3 h-3 text-teal-600" />
                            <span>{cap}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <button
                        onClick={() => onNavigate('/projects/eco-report')}
                        className="min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-teal-600 via-emerald-600 to-indigo-600 hover:from-teal-500 hover:via-emerald-500 hover:to-indigo-500 transition-all shadow-md shadow-teal-600/20 active:scale-[0.98] group/btn cursor-pointer"
                      >
                        <span>Explore Eco Report</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                      </button>

                      {ecoReportProject.url && (
                        <a
                          href={ecoReportProject.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="min-h-[46px] inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#0F172A] bg-slate-50 hover:bg-slate-100 active:scale-[0.98] border border-slate-200 transition-all shadow-2xs group/ext cursor-pointer"
                        >
                          <span>Launch Live</span>
                          <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover/ext:translate-x-0.5 group-hover/ext:-translate-y-0.5 transition-transform duration-200" />
                        </a>
                      )}
                    </div>

                  </div>

                  {/* Visual Side (Span 7 - Ordered Second on Desktop) */}
                  <div className="lg:col-span-7 lg:order-2">
                    <div
                      onClick={() => onNavigate('/projects/eco-report')}
                      className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md group-hover:shadow-lg transition-all aspect-[16/10] cursor-pointer"
                    >
                      <img
                        src={ecoReportProject.image || undefined}
                        alt="Eco Report Greener Communities Sustainability Dashboard Interface"
                        className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      
                      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-teal-700 text-xs font-bold shadow-2xs">
                        <span className="w-2 h-2 rounded-full bg-teal-500" />
                        <span>LIVE DEPLOYMENT</span>
                      </div>

                      <div className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md text-white text-xs font-mono font-medium shadow-2xs">
                        <span>PROJECT 02</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </RevealOnScroll>
          )}

          {/* PROJECT 03: Tech Solutions (Featured Corporate Engineering Showcase) */}
          {(selectedCategory === 'all' || selectedCategory === 'business-technology') && (
            <RevealOnScroll direction="up" delay={150}>
              <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 lg:p-12 shadow-sm card-interactive hover:border-indigo-300 hover:shadow-xl transition-all relative overflow-hidden group">
                
                {/* Subtle Ambient Accent */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/60 rounded-full blur-[100px] pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                  
                  {/* Visual Side (Span 7) */}
                  <div className="lg:col-span-7">
                    <div
                      onClick={() => onNavigate('/projects/tech-solutions')}
                      className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md group-hover:shadow-lg transition-all aspect-[16/10] cursor-pointer"
                    >
                      <img
                        src={techSolutionsProject.image || undefined}
                        alt="Tech Solutions Corporate Engineering Portfolio Interface"
                        className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      
                      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-blue-700 text-xs font-bold shadow-2xs">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span>LIVE DEPLOYMENT</span>
                      </div>

                      <div className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md text-white text-xs font-mono font-medium shadow-2xs">
                        <span>PROJECT 04</span>
                      </div>
                    </div>
                  </div>

                  {/* Editorial Content Side (Span 5) */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                          Business & Technology
                        </span>
                      </div>

                      <h3
                        onClick={() => onNavigate('/projects/tech-solutions')}
                        className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight group-hover:text-blue-600 transition-colors cursor-pointer"
                      >
                        {techSolutionsProject.name}
                      </h3>

                      <p className="text-sm font-semibold text-slate-700">
                        {techSolutionsProject.tagline}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {techSolutionsProject.description}
                    </p>

                    {/* Capabilities Badges */}
                    <div className="space-y-2.5">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                        Core Capabilities
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {techSolutionsProject.capabilities.slice(0, 5).map((cap, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 tech-chip-interactive"
                          >
                            <CheckCircle2 className="w-3 h-3 text-blue-600" />
                            <span>{cap}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <button
                        onClick={() => onNavigate('/projects/tech-solutions')}
                        className="min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 transition-all shadow-md shadow-blue-600/20 active:scale-[0.98] group/btn cursor-pointer"
                      >
                        <span>Explore Tech Solutions</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                      </button>

                      {techSolutionsProject.url && (
                        <a
                          href={techSolutionsProject.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="min-h-[46px] inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#0F172A] bg-slate-50 hover:bg-slate-100 active:scale-[0.98] border border-slate-200 transition-all shadow-2xs group/ext cursor-pointer"
                        >
                          <span>Launch Live</span>
                          <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover/ext:translate-x-0.5 group-hover/ext:-translate-y-0.5 transition-transform duration-200" />
                        </a>
                      )}
                    </div>

                  </div>

                </div>
              </div>
            </RevealOnScroll>
          )}

          {/* EXPLORE MORE WORK — COMPACT PORTFOLIO HUB */}
          <RevealOnScroll direction="up" delay={200}>
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="max-w-4xl space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-indigo-200 text-xs font-bold uppercase tracking-wider">
                  <span>EXPANDED SHOWCASE</span>
                  <span className="text-white/40">&bull;</span>
                  <span>08 TOTAL PLATFORMS</span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                    Explore Across Real-World Industries
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
                    Beyond AI & Digital Systems, the Demo Lab includes working platforms for Healthcare & Clinics, Veterinary Medicine, Fitness & Wellness, Grooming, and Boutique Retail.
                  </p>
                </div>

                {/* Compact Industry Chips */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
                  <button
                    onClick={() => onNavigate('/projects/riverdale-veterinary-clinic')}
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-400/50 hover:bg-white/10 transition-all text-left group/chip cursor-pointer"
                  >
                    <div className="text-xs font-mono text-indigo-300">05 Veterinary</div>
                    <div className="text-sm font-bold text-white group-hover/chip:text-indigo-200 transition-colors truncate">Riverdale Clinic</div>
                  </button>

                  <button
                    onClick={() => onNavigate('/projects/meridian-clinic')}
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-400/50 hover:bg-white/10 transition-all text-left group/chip cursor-pointer"
                  >
                    <div className="text-xs font-mono text-indigo-300">06 Healthcare</div>
                    <div className="text-sm font-bold text-white group-hover/chip:text-indigo-200 transition-colors truncate">Meridian Clinic</div>
                  </button>

                  <button
                    onClick={() => onNavigate('/projects/ironcore-fitness')}
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-400/50 hover:bg-white/10 transition-all text-left group/chip cursor-pointer"
                  >
                    <div className="text-xs font-mono text-indigo-300">03 Fitness</div>
                    <div className="text-sm font-bold text-white group-hover/chip:text-indigo-200 transition-colors truncate">IronCore Fitness</div>
                  </button>

                  <button
                    onClick={() => onNavigate('/projects/ironhand-barber-studio')}
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-400/50 hover:bg-white/10 transition-all text-left group/chip cursor-pointer"
                  >
                    <div className="text-xs font-mono text-indigo-300">07 Grooming</div>
                    <div className="text-sm font-bold text-white group-hover/chip:text-indigo-200 transition-colors truncate">Ironhand Barber</div>
                  </button>

                  <button
                    onClick={() => onNavigate('/projects/maison-ivoire')}
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-400/50 hover:bg-white/10 transition-all text-left group/chip cursor-pointer col-span-2 sm:col-span-1"
                  >
                    <div className="text-xs font-mono text-indigo-300">08 Fashion</div>
                    <div className="text-sm font-bold text-white group-hover/chip:text-indigo-200 transition-colors truncate">Maison Ivoire</div>
                  </button>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    onClick={() => onNavigate('/projects')}
                    className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 transition-all shadow-lg active:scale-[0.98] group/all cursor-pointer"
                  >
                    <span>Explore All 08 Projects in Catalogue</span>
                    <ArrowRight className="w-4 h-4 text-slate-900 group-hover/all:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          </RevealOnScroll>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SECTION — TRANSPARENT ENGINEERING SHOWROOM (3 EDITORIAL PANELS) */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <DigitalEngineeringAtmosphere variant="section" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 relative z-10">
          
          <RevealOnScroll direction="up" delay={0}>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                <span>OUR COMMITMENT</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
                A Transparent Showroom of Working Engineering
              </h2>
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
                The GJ Nexora Demo Lab is built on verifiable software, independent cloud infrastructure, and documented engineering.
              </p>
            </div>
          </RevealOnScroll>

          <StaggerGroup staggerDelay={100} baseDelay={0} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Card 01 */}
            <div className="p-8 rounded-3xl bg-[#FAFAFA] border border-slate-200/90 card-interactive hover:border-indigo-300 hover:shadow-lg space-y-4 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-1 rounded-md inline-block">
                  01
                </div>
                <h3 className="font-extrabold text-xl text-[#0F172A] tracking-tight group-hover:text-indigo-600 transition-colors">
                  Real Projects
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Every application is a complete, functioning software system designed to address practical operational challenges.
                </p>
              </div>
            </div>

            {/* Card 02 */}
            <div className="p-8 rounded-3xl bg-[#FAFAFA] border border-slate-200/90 card-interactive hover:border-indigo-300 hover:shadow-lg space-y-4 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-1 rounded-md inline-block">
                  02
                </div>
                <h3 className="font-extrabold text-xl text-[#0F172A] tracking-tight group-hover:text-indigo-600 transition-colors">
                  Independent Deployments
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Hosted separately on production cloud edge networks with their own databases, API endpoints, and live HTTPS domains.
                </p>
              </div>
            </div>

            {/* Card 03 */}
            <div className="p-8 rounded-3xl bg-[#FAFAFA] border border-slate-200/90 card-interactive hover:border-indigo-300 hover:shadow-lg space-y-4 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-1 rounded-md inline-block">
                  03
                </div>
                <h3 className="font-extrabold text-xl text-[#0F172A] tracking-tight group-hover:text-indigo-600 transition-colors">
                  Documented Engineering
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Transparent system architecture, data workflows, and tech stacks documented for thorough technical review.
                </p>
              </div>
            </div>

          </StaggerGroup>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SECTION — HOW WE BUILD (6-STEP ENGINEERING PROGRESSION) */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FAFAFA] border-b border-slate-200/80 relative overflow-hidden">
        <DigitalEngineeringAtmosphere variant="how-we-build" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 relative z-10">
          
          <RevealOnScroll direction="up" delay={0}>
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                <span>ENGINEERING STORY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
                A Disciplined 6-Step Engineering Process
              </h2>
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                From initial problem discovery to cloud edge launch.
              </p>
            </div>
          </RevealOnScroll>

          {/* Desktop 6-Card Row */}
          <StaggerGroup staggerDelay={80} baseDelay={0} className="hidden lg:grid lg:grid-cols-6 gap-3.5">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className={`bg-white rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between cursor-pointer group card-interactive ${
                    isActive
                      ? 'border-indigo-500 shadow-md ring-2 ring-indigo-500/15 -translate-y-1'
                      : 'border-slate-200 shadow-2xs hover:border-indigo-300 hover:shadow-md'
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

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </StaggerGroup>

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
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <RevealOnScroll direction="up" delay={120}>
            <div className="text-center pt-2">
              <button
                onClick={() => onNavigate('/how-we-build')}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 hover:from-indigo-500 hover:via-blue-500 hover:to-purple-500 active:scale-95 transition-all shadow-md shadow-indigo-600/20 cursor-pointer"
              >
                <span>Explore Our Full Process →</span>
              </button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SECTION — BRAND STATEMENT */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <RevealOnScroll direction="up" delay={0}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
              <span>BUILDING DIGITAL EXCELLENCE</span>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={100}>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
              We Build Practical Digital Solutions That Work.
            </h2>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={180}>
            <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
              GJ Nexora Technologies is dedicated to engineering purposeful software systems, applied AI applications, and digital platforms that deliver measurable value.
            </p>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={240}>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('/about')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 hover:bg-indigo-100 active:scale-95 transition-all cursor-pointer"
              >
                <span>About GJ Nexora Technologies →</span>
              </button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SECTION — FINAL CONVERSION CTA */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FAFAFA] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll direction="zoom" delay={0}>
            <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-14 text-center space-y-6 shadow-md relative overflow-hidden card-interactive">
              
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

                <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-normal leading-relaxed">
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
                    className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-[#0F172A] bg-white hover:bg-slate-50 active:scale-[0.98] border border-slate-200 transition-all shadow-2xs cursor-pointer hover:border-slate-300"
                  >
                    <span>Talk to GJ Nexora →</span>
                  </button>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

    </div>
  );
};
