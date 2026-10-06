import React, { useEffect } from 'react';
import {
  Sparkles,
  ExternalLink,
  MapPin,
  Mail,
  Phone,
  Globe,
  Quote,
  ArrowRight,
  Target,
  Cpu,
  Layers,
  Lightbulb,
  Search,
  Wrench,
  CheckCircle2,
  TrendingUp,
  Compass,
  ShieldCheck,
  Zap,
  Workflow,
  Radio,
} from 'lucide-react';
import { DigitalEngineeringAtmosphere } from '../components/layout/DigitalEngineeringAtmosphere';
import { RevealOnScroll } from '../components/animation/RevealOnScroll';
import { StaggerGroup } from '../components/animation/StaggerGroup';

interface AboutProps {
  onOpenContact?: (context?: string) => void;
  onNavigate: (path: string) => void;
}

export const About: React.FC<AboutProps> = ({
  onOpenContact,
  onNavigate,
}) => {
  useEffect(() => {
    document.title = 'About GJ Nexora Technologies | Building Digital Excellence';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleContact = (context = 'General Inquiry from About Page') => {
    if (onOpenContact) {
      onOpenContact(context);
    } else {
      onNavigate('/contact');
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#0F172A] overflow-hidden">
      
      {/* ========================================================================= */}
      {/* 1. HERO — COMPANY IDENTITY & ENGINEERING BLUEPRINT */}
      {/* ========================================================================= */}
      <section className="relative pt-12 sm:pt-20 lg:pt-28 pb-16 sm:pb-24 lg:pb-32 overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-slate-100/80 via-[#F8FAFC] to-[#F8FAFC]">
        {/* Layered Digital Engineering Atmosphere */}
        <DigitalEngineeringAtmosphere variant="about" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Narrative & Actions */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Eyebrow & Status Tag */}
              <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5 animate-fade-in" style={{ animationDelay: '100ms' }}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-indigo-200/80 text-indigo-700 text-xs font-bold uppercase tracking-wider shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                  <span>ABOUT GJ NEXORA</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100/90 border border-slate-200 text-slate-600 font-mono text-[11px] font-semibold tracking-wider uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>TECHNOLOGY • PURPOSE • POSSIBILITY</span>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.12] animate-hero-reveal" style={{ animationDelay: '200ms' }}>
                Building Digital Excellence Through{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600">
                  Practical Technology.
                </span>
              </h1>

              {/* Supporting Copy */}
              <div className="space-y-3 max-w-2xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '350ms' }}>
                <p className="text-base sm:text-xl text-[#334155] font-normal leading-relaxed">
                  GJ Nexora Technologies is a technology company focused on transforming ideas, requirements, and real-world challenges into practical digital solutions.
                </p>
                <p className="text-sm sm:text-base text-[#64748B] font-normal leading-relaxed">
                  We build software systems, applied AI solutions, digital platforms, and technology products designed around real needs.
                </p>
              </div>

              {/* CTA Action Cluster */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 animate-fade-in" style={{ animationDelay: '500ms' }}>
                <a
                  href="https://gjnexoratech.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 hover:from-indigo-500 hover:via-blue-500 hover:to-purple-500 active:scale-[0.98] transition-all shadow-md shadow-indigo-600/20 cursor-pointer"
                >
                  <span>Explore GJ Nexora</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={() => handleContact('Hero Let\'s Talk')}
                  className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-[#0F172A] bg-white hover:bg-slate-50 active:scale-[0.98] border border-slate-200 transition-all shadow-2xs cursor-pointer"
                >
                  <span>Let's Talk →</span>
                </button>
              </div>
            </div>

            {/* Right Column: Abstract Engineering Identity Composition */}
            <div className="lg:col-span-5 relative animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="relative mx-auto max-w-md sm:max-w-lg lg:max-w-none">
                {/* Backdrop Glow */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-200/40 via-purple-200/30 to-blue-200/35 rounded-3xl blur-2xl -z-10" />

                {/* Blueprint Composition Card */}
                <div className="relative bg-white/90 backdrop-blur-md rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xl shadow-slate-200/50 overflow-hidden card-interactive">
                  {/* Subtle Grid Canvas */}
                  <div className="absolute inset-0 engineering-grid-subtle opacity-60 pointer-events-none" />

                  {/* Header Blueprint Annotations */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-6 font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500 relative z-10">
                    <span className="flex items-center gap-1.5 text-indigo-700">
                      <Radio className="w-3 h-3 text-indigo-600 animate-pulse" />
                      COMPANY.SYSTEM
                    </span>
                    <span className="text-emerald-700">MISSION.STATUS // ACTIVE</span>
                  </div>

                  {/* Central Node Visual */}
                  <div className="relative my-4 flex flex-col items-center justify-center py-6 text-center space-y-4 z-10">
                    {/* Pulsing Core Node */}
                    <div className="relative">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-600 p-0.5 shadow-lg shadow-indigo-600/30 flex items-center justify-center">
                        <div className="w-full h-full bg-slate-900 rounded-[14px] flex flex-col items-center justify-center text-white">
                          <Cpu className="w-7 h-7 sm:w-8 sm:h-8 text-indigo-400 mb-1" />
                          <span className="font-mono text-[9px] tracking-wider text-indigo-200 font-bold uppercase">NEXORA.CORE</span>
                        </div>
                      </div>
                      {/* Pulse rings */}
                      <div className="absolute -inset-2 rounded-3xl border border-indigo-400/40 animate-ping opacity-25 pointer-events-none" />
                    </div>

                    {/* Dynamic Blueprint Tags */}
                    <div className="text-center space-y-1">
                      <div className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider">
                        IDEA → SYSTEM
                      </div>
                      <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                        PURPOSE // TECHNOLOGY
                      </div>
                    </div>
                  </div>

                  {/* Connected Orbiting Tech Clusters */}
                  <div className="grid grid-cols-2 gap-3 pt-2 relative z-10">
                    <div className="p-3 rounded-xl bg-slate-50/90 border border-slate-200/80 flex items-center gap-2.5 tech-chip-interactive">
                      <div className="w-7 h-7 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-700 shrink-0">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-mono text-[10px] font-bold text-slate-900 uppercase">SOFTWARE</div>
                        <div className="text-[10px] text-slate-500">Robust Architecture</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50/90 border border-slate-200/80 flex items-center gap-2.5 tech-chip-interactive">
                      <div className="w-7 h-7 rounded-lg bg-purple-100 flex items-center justify-center text-purple-700 shrink-0">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-mono text-[10px] font-bold text-slate-900 uppercase">APPLIED AI</div>
                        <div className="text-[10px] text-slate-500">Intelligent Systems</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50/90 border border-slate-200/80 flex items-center gap-2.5 tech-chip-interactive">
                      <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 shrink-0">
                        <Workflow className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-mono text-[10px] font-bold text-slate-900 uppercase">PLATFORMS</div>
                        <div className="text-[10px] text-slate-500">Scalable Clouds</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50/90 border border-slate-200/80 flex items-center gap-2.5 tech-chip-interactive">
                      <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                        <Target className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-mono text-[10px] font-bold text-slate-900 uppercase">DIGITAL.EXCELLENCE</div>
                        <div className="text-[10px] text-slate-500">Measurable Value</div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Blueprint Watermark */}
                  <div className="mt-4 pt-3 border-t border-slate-100 text-center font-mono text-[9px] text-slate-600 tracking-wider uppercase">
                    GJ NEXORA TECHNOLOGIES • ARCHITECTURE ENGINE V2.6
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION — WHO WE ARE */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Background Glow + Grid */}
        <div className="absolute inset-0 engineering-grid-subtle opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-indigo-50/60 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll direction="up">
            <div className="space-y-3 mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                <span>WHO WE ARE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
                Technology With a Purpose.
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Big Editorial Statement */}
            <RevealOnScroll direction="left" delay={150} className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-slate-50/80 border border-slate-200/80 shadow-2xs card-interactive">
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0F172A] leading-snug tracking-tight">
                  GJ Nexora Technologies exists to turn ideas into useful digital systems.
                </p>
                <div className="mt-6 pt-6 border-t border-slate-200/70 flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-indigo-600" />
                  <span className="font-mono text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    PURPOSE-DRIVEN ENGINEERING
                  </span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Right Detailed Narrative */}
            <RevealOnScroll direction="right" delay={250} className="lg:col-span-7">
              <div className="space-y-6 text-base sm:text-lg text-[#475569] leading-relaxed font-normal">
                <p>
                  We focus on <strong className="font-semibold text-slate-900">practical technology</strong> — solutions that address real requirements rather than technology for technology's sake.
                </p>
                <p>
                  Our approach combines software engineering, applied artificial intelligence, digital platforms, automation, and data-driven thinking to create solutions that can be genuinely useful in the real world.
                </p>
                <p className="text-sm sm:text-base text-slate-500 pt-2 border-l-2 border-indigo-300 pl-4">
                  Whether creating intelligent software, optimizing complex workflows, or architecting dependable digital systems, we build with intentionality, craftsmanship, and a focus on long-term sustainability.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. "FROM IDEA TO IMPACT" — PHILOSOPHY VISUALIZATION */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden">
        {/* Technical Grid Atmosphere */}
        <div className="absolute inset-0 engineering-grid-subtle opacity-50 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-indigo-100/40 via-blue-100/30 to-purple-100/35 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll direction="up">
            <div className="text-center space-y-3 max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                <span>HOW IDEAS BECOME REALITY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                From Concept to Meaningful Impact.
              </h2>
              <p className="text-base sm:text-lg text-[#64748B]">
                A simple conceptual philosophy guiding every initiative at GJ Nexora Technologies.
              </p>
            </div>
          </RevealOnScroll>

          {/* 5-Step Connected Flow (Desktop Horizontal / Mobile Timeline) */}
          <StaggerGroup staggerDelay={100} className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            
            {/* Step 1: IDEA */}
            <div className="relative group bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-indigo-300 transition-all card-interactive">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 font-bold font-mono text-sm border border-indigo-100">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div className="font-mono text-[11px] font-bold text-indigo-600 uppercase tracking-wider mb-1">
                STEP 01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">IDEA</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A need, opportunity, or real-world challenge.
              </p>
            </div>

            {/* Step 2: UNDERSTANDING */}
            <div className="relative group bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all card-interactive">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 font-bold font-mono text-sm border border-blue-100">
                <Search className="w-5 h-5" />
              </div>
              <div className="font-mono text-[11px] font-bold text-blue-600 uppercase tracking-wider mb-1">
                STEP 02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">UNDERSTANDING</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Understand what actually matters.
              </p>
            </div>

            {/* Step 3: TECHNOLOGY */}
            <div className="relative group bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-purple-300 transition-all card-interactive">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4 font-bold font-mono text-sm border border-purple-100">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="font-mono text-[11px] font-bold text-purple-600 uppercase tracking-wider mb-1">
                STEP 03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">TECHNOLOGY</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Choose the right digital approach.
              </p>
            </div>

            {/* Step 4: SOLUTION */}
            <div className="relative group bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-indigo-300 transition-all card-interactive">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 font-bold font-mono text-sm border border-indigo-100">
                <Wrench className="w-5 h-5" />
              </div>
              <div className="font-mono text-[11px] font-bold text-indigo-600 uppercase tracking-wider mb-1">
                STEP 04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">SOLUTION</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Build something practical.
              </p>
            </div>

            {/* Step 5: IMPACT */}
            <div className="relative group bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all card-interactive">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 font-bold font-mono text-sm border border-emerald-100">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="font-mono text-[11px] font-bold text-emerald-600 uppercase tracking-wider mb-1">
                STEP 05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">IMPACT</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Create useful outcomes.
              </p>
            </div>

          </StaggerGroup>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SECTION — WHAT DRIVES US */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll direction="up">
            <div className="space-y-3 mb-14 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                <span>WHAT DRIVES US</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
                Useful Technology Over Unnecessary Complexity.
              </h2>
            </div>
          </RevealOnScroll>

          <StaggerGroup staggerDelay={120} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Principle 01 */}
            <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200/80 space-y-4 hover:border-indigo-300 transition-all group card-interactive">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-100">
                  01
                </span>
                <Compass className="w-6 h-6 text-indigo-600 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 pt-2">
                Purpose Before Technology
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Technology should serve a real purpose. We begin with the problem, opportunity, or requirement — not with a technology trend.
              </p>
            </div>

            {/* Principle 02 */}
            <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200/80 space-y-4 hover:border-blue-300 transition-all group card-interactive">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100">
                  02
                </span>
                <Zap className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 pt-2">
                Practical Over Complicated
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                The best solution is not always the most complex one. We value clarity, usability, maintainability, and meaningful outcomes.
              </p>
            </div>

            {/* Principle 03 */}
            <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200/80 space-y-4 hover:border-purple-300 transition-all group card-interactive">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-100">
                  03
                </span>
                <ShieldCheck className="w-6 h-6 text-purple-600 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 pt-2">
                Build for the Real World
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Ideas become valuable when they can move beyond a concept and become something people can actually use.
              </p>
            </div>

          </StaggerGroup>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. VISUAL ANCHOR — LARGE EDITORIAL STATEMENT */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-indigo-50/60 via-purple-50/40 to-slate-50 border-b border-slate-200/80 relative overflow-hidden">
        {/* Soft Radial Atmospheric Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[400px] bg-gradient-to-r from-indigo-200/40 via-purple-200/35 to-blue-200/30 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <RevealOnScroll direction="zoom">
            <Quote className="w-12 h-12 text-indigo-400/70 mx-auto mb-6" />
            
            <blockquote className="text-[clamp(1.75rem,4.2vw,3.75rem)] font-extrabold text-[#0F172A] tracking-tight leading-[1.18] max-w-4xl mx-auto">
              “Technology is most valuable when it makes something clearer, faster, smarter, or more useful.”
            </blockquote>

            <div className="pt-4">
              <span className="font-mono text-sm sm:text-base font-bold text-indigo-700 tracking-wider uppercase">
                — GJ Nexora Technologies
              </span>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SECTION — OUR GOAL & GOAL VISUAL */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Narrative */}
            <RevealOnScroll direction="left" className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                <span>OUR GOAL</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
                Turn Ideas Into Technology That Works.
              </h2>

              <p className="text-base sm:text-xl text-[#334155] leading-relaxed font-normal">
                Our goal is to make technology more practical and accessible by turning ideas and challenges into reliable digital solutions that create real value.
              </p>

              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed font-normal">
                We aim to build technology that helps businesses, organizations, and individuals work smarter, solve problems more effectively, and move their ideas forward.
              </p>
            </RevealOnScroll>

            {/* Right Goal Visual: Converging System Visual */}
            <RevealOnScroll direction="right" delay={150} className="lg:col-span-6">
              <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 shadow-sm relative overflow-hidden card-interactive">
                <div className="text-center font-mono text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-6">
                  MISSION ARCHITECTURE // VALUE CONVERGENCE
                </div>

                {/* Core Converging Architecture Diagram */}
                <div className="relative py-4 flex flex-col items-center justify-center space-y-6">
                  
                  {/* Surrounding Nodes Grid */}
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5 w-full">
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-center shadow-2xs tech-chip-interactive">
                      <div className="font-mono text-[10px] font-bold text-indigo-700">SOFTWARE</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-center shadow-2xs tech-chip-interactive">
                      <div className="font-mono text-[10px] font-bold text-purple-700">AI</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-center shadow-2xs tech-chip-interactive">
                      <div className="font-mono text-[10px] font-bold text-blue-700">DATA</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-center shadow-2xs tech-chip-interactive">
                      <div className="font-mono text-[10px] font-bold text-teal-700">AUTOMATION</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-center shadow-2xs col-span-3 sm:col-span-1 tech-chip-interactive">
                      <div className="font-mono text-[10px] font-bold text-slate-800">PLATFORMS</div>
                    </div>
                  </div>

                  {/* Convergence Indicator */}
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-6 bg-gradient-to-b from-slate-300 to-indigo-500" />
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex flex-col items-center justify-center shadow-lg shadow-indigo-500/25 animate-pulse">
                      <span className="font-mono text-[10px] uppercase tracking-wider font-bold">CORE</span>
                      <span className="text-xs font-bold">IDEA</span>
                    </div>
                    <div className="w-0.5 h-6 bg-gradient-to-b from-indigo-500 to-emerald-500" />
                  </div>

                  {/* Destination: REAL VALUE */}
                  <div className="w-full p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span className="font-mono text-sm font-bold text-emerald-800 uppercase tracking-wide">
                      REAL VALUE & MEASURABLE OUTCOMES
                    </span>
                  </div>

                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. SECTION — TECHNOLOGY PHILOSOPHY */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/80 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll direction="up">
            <div className="space-y-3 mb-14 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                <span>OUR PHILOSOPHY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
                Technology Should Feel Useful.
              </h2>
            </div>
          </RevealOnScroll>

          <StaggerGroup staggerDelay={120} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Philosophy 1 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-2xs space-y-3 hover:border-indigo-300 transition-all card-interactive">
              <div className="font-mono text-xs font-bold text-indigo-600 tracking-wider uppercase">
                [PHIL.01 // CLEAR]
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">CLEAR</h3>
              <p className="text-base text-slate-600 leading-relaxed pt-1">
                Technology should reduce confusion, not create it.
              </p>
            </div>

            {/* Philosophy 2 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-2xs space-y-3 hover:border-blue-300 transition-all card-interactive">
              <div className="font-mono text-xs font-bold text-blue-600 tracking-wider uppercase">
                [PHIL.02 // CAPABLE]
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">CAPABLE</h3>
              <p className="text-base text-slate-600 leading-relaxed pt-1">
                Solutions should solve meaningful problems.
              </p>
            </div>

            {/* Philosophy 3 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-2xs space-y-3 hover:border-purple-300 transition-all card-interactive">
              <div className="font-mono text-xs font-bold text-purple-600 tracking-wider uppercase">
                [PHIL.03 // ADAPTABLE]
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">ADAPTABLE</h3>
              <p className="text-base text-slate-600 leading-relaxed pt-1">
                Systems should have room to evolve as needs change.
              </p>
            </div>

          </StaggerGroup>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. SECTION — WHERE WE ARE HEADED */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80 relative overflow-hidden">
        {/* Soft Blue Horizon Atmosphere */}
        <div className="absolute inset-0 engineering-grid-subtle opacity-35 pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-100/35 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <RevealOnScroll direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <span>LOOKING AHEAD</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
              Building Toward a More Useful Digital Future.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#475569] leading-relaxed max-w-3xl mx-auto pt-2">
              <p>
                GJ Nexora is focused on continuously exploring better ways to apply software, artificial intelligence, automation, and digital technologies to practical challenges.
              </p>
              <p className="font-semibold text-slate-800">
                The goal is not simply to build more technology — but to build technology that matters.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. MAIN COMPANY WEBSITE BRIDGE & PREVIEW CARD */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden">
        {/* Purple / Indigo Ambient Highlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-gradient-to-r from-purple-200/35 via-indigo-200/30 to-blue-200/25 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Bridge Copy */}
            <RevealOnScroll direction="left" className="lg:col-span-6 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                <Globe className="w-3.5 h-3.5 text-indigo-600" />
                <span>THE MAIN COMPANY</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                Explore GJ Nexora Technologies.
              </h2>

              <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
                The Demo Lab showcases working software. Our main website provides the broader picture of GJ Nexora Technologies, our services, solutions, and company presence.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <a
                  href="https://gjnexoratech.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 hover:from-indigo-500 hover:via-blue-500 hover:to-purple-500 active:scale-[0.98] transition-all shadow-md shadow-indigo-600/20 cursor-pointer"
                >
                  <span>Visit Main Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={() => handleContact('Bridge CTA Contact')}
                  className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm sm:text-base font-semibold text-[#0F172A] bg-white hover:bg-slate-50 active:scale-[0.98] border border-slate-200 transition-all shadow-2xs cursor-pointer"
                >
                  <span>Contact GJ Nexora →</span>
                </button>
              </div>
            </RevealOnScroll>

            {/* Right Preview Card Representation */}
            <RevealOnScroll direction="right" delay={150} className="lg:col-span-6">
              <a
                href="https://gjnexoratech.in"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-3xl bg-white p-8 border border-slate-200/90 shadow-md hover:shadow-xl hover:border-indigo-300 transition-all relative overflow-hidden card-interactive"
              >
                {/* Subtle top banner line */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600" />
                
                <div className="flex items-center justify-between text-slate-500 text-xs font-mono mb-6">
                  <span className="font-bold text-slate-800 tracking-wider uppercase">GJ NEXORA TECHNOLOGIES</span>
                  <ExternalLink className="w-4 h-4 text-indigo-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                <div className="space-y-2 py-4">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                    Building Digital Excellence
                  </div>
                  <div className="text-sm font-medium text-slate-500">
                    Software • AI • Digital Solutions
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between font-mono text-xs text-indigo-600 font-semibold">
                  <span>gjnexoratech.in</span>
                  <span className="group-hover:underline">Visit Site →</span>
                </div>
              </a>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. COMPACT COMPANY INFORMATION ROW */}
      {/* ========================================================================= */}
      <section className="py-12 bg-white border-b border-slate-200/80 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll direction="up">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div>
                <div className="font-extrabold text-[#0F172A] text-base tracking-tight">
                  GJ Nexora Technologies
                </div>
                <div className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 font-bold tracking-wider uppercase mt-0.5">
                  Building Digital Excellence
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 text-xs sm:text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-indigo-600" />
                  <span>Coimbatore, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-indigo-600" />
                  <a href="mailto:gjnexoratech@gmail.com" className="hover:text-indigo-600 transition-colors">
                    gjnexoratech@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-indigo-600" />
                  <a href="tel:+918438749286" className="hover:text-indigo-600 transition-colors">
                    +91 84387 49286
                  </a>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. FINAL CTA */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] relative overflow-hidden">
        {/* Atmospheric Glow & Grid */}
        <div className="absolute inset-0 engineering-grid-subtle opacity-55 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[340px] bg-gradient-to-r from-indigo-200/40 via-purple-200/35 to-blue-200/30 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll direction="up">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl border border-slate-200 p-8 sm:p-14 text-center space-y-6 shadow-md relative overflow-hidden card-interactive">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                  <span>LET'S BUILD</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
                  Have an Idea{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600">
                    Worth Building?
                  </span>
                </h2>

                <p className="text-base sm:text-lg text-[#475569] max-w-xl mx-auto font-normal leading-relaxed">
                  Let's turn your idea, challenge, or opportunity into a practical digital solution.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <a
                  href="https://gjnexoratech.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 hover:from-indigo-500 hover:via-blue-500 hover:to-purple-500 active:scale-[0.98] transition-all shadow-md shadow-indigo-600/20 cursor-pointer"
                >
                  <span>Visit GJ Nexora</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={() => handleContact('Final CTA Contact')}
                  className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-[#0F172A] bg-white hover:bg-slate-50 active:scale-[0.98] border border-slate-200 transition-all shadow-2xs cursor-pointer"
                >
                  <span>Contact Us →</span>
                </button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

    </div>
  );
};
