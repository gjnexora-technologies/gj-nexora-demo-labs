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
  Cpu,
  Lightbulb,
  Search,
  Wrench,
  CheckCircle2,
  TrendingUp,
  Compass,
  ShieldCheck,
  Zap,
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
    document.title = 'About GJ Nexora Technologies | Digital Product Studio & Engineering';
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
    <div className="relative min-h-screen bg-[#FAFAFA] text-[#0F172A] overflow-hidden">
      
      {/* ========================================================================= */}
      {/* 1. HERO — COMPANY IDENTITY */}
      {/* ========================================================================= */}
      <section className="relative pt-12 sm:pt-20 lg:pt-28 pb-16 sm:pb-24 lg:pb-32 overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-white via-slate-50/50 to-[#FAFAFA]">
        {/* Studio Lighting Atmosphere */}
        <DigitalEngineeringAtmosphere variant="about" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Narrative & Actions */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Eyebrow */}
              <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5 animate-fade-in" style={{ animationDelay: '100ms' }}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-indigo-700 text-xs font-bold uppercase tracking-wider shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                  <span>ABOUT GJ NEXORA</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>DIGITAL PRODUCT STUDIO</span>
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
                <p className="text-base sm:text-xl text-slate-700 font-normal leading-relaxed">
                  GJ Nexora Technologies is a technology company focused on transforming ideas, requirements, and real-world challenges into practical digital solutions.
                </p>
                <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed">
                  We engineer bespoke software systems, applied AI solutions, digital platforms, and technology products designed around real operational workflows.
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
                  <span>Explore Main Website</span>
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

            {/* Right Column: Editorial Company Profile Card */}
            <div className="lg:col-span-5 relative animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="relative mx-auto max-w-md sm:max-w-lg lg:max-w-none">
                {/* Backdrop Glow */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-100/50 via-purple-100/40 to-blue-100/40 rounded-3xl blur-2xl -z-10" />

                {/* Company Studio Card */}
                <div className="relative bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xl overflow-hidden card-interactive">
                  
                  {/* Header Row */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                    <div className="flex items-center gap-3">
                      <img src="/logo.gj.png" alt="GJ Nexora Logo" className="w-10 h-10 object-contain rounded-xl" />
                      <div>
                        <div className="font-extrabold text-sm text-[#0F172A]">GJ NEXORA</div>
                        <div className="text-[11px] text-slate-500 font-medium">Technologies</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      ● Active Studio
                    </span>
                  </div>

                  {/* Editorial Focus Areas */}
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                      <div className="text-xs font-bold text-[#0F172A] uppercase tracking-wide">Core Philosophy</div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Practical technology designed around authentic human and operational workflows.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                        <div className="text-[11px] font-bold text-indigo-700 uppercase">01 Software</div>
                        <div className="text-xs font-semibold text-[#0F172A] mt-0.5">Standalone Platforms</div>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                        <div className="text-[11px] font-bold text-purple-700 uppercase">02 Intelligence</div>
                        <div className="text-xs font-semibold text-[#0F172A] mt-0.5">Applied AI Solutions</div>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                        <div className="text-[11px] font-bold text-blue-700 uppercase">03 Cloud</div>
                        <div className="text-xs font-semibold text-[#0F172A] mt-0.5">Edge Hosting</div>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                        <div className="text-[11px] font-bold text-teal-700 uppercase">04 Impact</div>
                        <div className="text-xs font-semibold text-[#0F172A] mt-0.5">Measurable Value</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>Coimbatore, TN, India</span>
                    <span className="font-mono text-indigo-600 font-semibold">gjnexoratech.in</span>
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
              <div className="p-8 rounded-3xl bg-[#FAFAFA] border border-slate-200/90 shadow-2xs card-interactive">
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0F172A] leading-snug tracking-tight">
                  GJ Nexora Technologies exists to turn ideas into useful digital systems.
                </p>
                <div className="mt-6 pt-6 border-t border-slate-200/70 flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-indigo-600" />
                  <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                    Purpose-Driven Engineering
                  </span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Right Detailed Narrative */}
            <RevealOnScroll direction="right" delay={250} className="lg:col-span-7">
              <div className="space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                <p>
                  We focus on <strong className="font-semibold text-slate-900">practical technology</strong> — solutions that address real requirements rather than technology for technology's sake.
                </p>
                <p>
                  Our approach combines software engineering, applied artificial intelligence, digital platforms, automation, and data-driven thinking to create solutions that can be genuinely useful in the real world.
                </p>
                <p className="text-sm sm:text-base text-slate-500 pt-2 border-l-2 border-indigo-300 pl-4">
                  Whether creating intelligent software, optimizing complex workflows, or architecting dependable digital systems, we build with intentionality, craftsmanship, and a focus on long-term utility.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. "FROM IDEA TO IMPACT" — PHILOSOPHY VISUALIZATION */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FAFAFA] border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll direction="up">
            <div className="text-center space-y-3 max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                <span>HOW IDEAS BECOME REALITY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                From Concept to Meaningful Impact.
              </h2>
              <p className="text-base sm:text-lg text-slate-600">
                A simple conceptual philosophy guiding every initiative at GJ Nexora Technologies.
              </p>
            </div>
          </RevealOnScroll>

          {/* 5-Step Connected Flow */}
          <StaggerGroup staggerDelay={100} className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            
            {/* Step 1: IDEA */}
            <div className="relative group bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-indigo-300 transition-all card-interactive">
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
            <div className="relative group bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all card-interactive">
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
            <div className="relative group bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-purple-300 transition-all card-interactive">
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
            <div className="relative group bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-indigo-300 transition-all card-interactive">
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
            <div className="relative group bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all card-interactive">
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
            <div className="p-8 rounded-3xl bg-[#FAFAFA] border border-slate-200/80 space-y-4 hover:border-indigo-300 transition-all group card-interactive">
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
            <div className="p-8 rounded-3xl bg-[#FAFAFA] border border-slate-200/80 space-y-4 hover:border-blue-300 transition-all group card-interactive">
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
            <div className="p-8 rounded-3xl bg-[#FAFAFA] border border-slate-200/80 space-y-4 hover:border-purple-300 transition-all group card-interactive">
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
      <section className="py-24 sm:py-32 bg-gradient-to-b from-indigo-50/50 via-purple-50/30 to-slate-50 border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <RevealOnScroll direction="zoom">
            <Quote className="w-12 h-12 text-indigo-400/70 mx-auto mb-6" />
            
            <blockquote className="text-[clamp(1.75rem,4.2vw,3.75rem)] font-extrabold text-[#0F172A] tracking-tight leading-[1.18] max-w-4xl mx-auto">
              “Technology is most valuable when it makes something clearer, faster, smarter, or more useful.”
            </blockquote>

            <div className="pt-4">
              <span className="text-sm sm:text-base font-bold text-indigo-700 tracking-wider uppercase">
                — GJ Nexora Technologies
              </span>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SECTION — OUR GOAL */}
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

              <p className="text-base sm:text-xl text-slate-700 leading-relaxed font-normal">
                Our goal is to make technology more practical and accessible by turning ideas and challenges into reliable digital solutions that create real value.
              </p>

              <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
                We aim to build technology that helps businesses, organizations, and individuals work smarter, solve problems more effectively, and move their ideas forward.
              </p>
            </RevealOnScroll>

            {/* Right Goal Visual */}
            <RevealOnScroll direction="right" delay={150} className="lg:col-span-6">
              <div className="p-8 rounded-3xl bg-[#FAFAFA] border border-slate-200/90 shadow-sm relative overflow-hidden card-interactive space-y-6">
                
                <div className="grid grid-cols-2 gap-3 w-full">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center shadow-2xs tech-chip-interactive">
                    <div className="text-xs font-bold text-indigo-700">SOFTWARE</div>
                    <div className="text-[11px] text-slate-500">Custom Systems</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center shadow-2xs tech-chip-interactive">
                    <div className="text-xs font-bold text-purple-700">INTELLIGENCE</div>
                    <div className="text-[11px] text-slate-500">Applied AI</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center shadow-2xs tech-chip-interactive">
                    <div className="text-xs font-bold text-blue-700">DATA</div>
                    <div className="text-[11px] text-slate-500">Analytics & Telemetry</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center shadow-2xs tech-chip-interactive">
                    <div className="text-xs font-bold text-teal-700">AUTOMATION</div>
                    <div className="text-[11px] text-slate-500">Workflow Engines</div>
                  </div>
                </div>

                {/* Destination: REAL VALUE */}
                <div className="w-full p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-bold text-emerald-800 uppercase tracking-wide">
                    Real Value & Measurable Outcomes
                  </span>
                </div>

              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. SECTION — TECHNOLOGY PHILOSOPHY */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FAFAFA] border-b border-slate-200/80 relative">
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
              <div className="text-xs font-bold text-indigo-600 tracking-wider uppercase">
                CLEAR
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">Clear</h3>
              <p className="text-base text-slate-600 leading-relaxed pt-1">
                Technology should reduce confusion, not create it.
              </p>
            </div>

            {/* Philosophy 2 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-2xs space-y-3 hover:border-blue-300 transition-all card-interactive">
              <div className="text-xs font-bold text-blue-600 tracking-wider uppercase">
                CAPABLE
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">Capable</h3>
              <p className="text-base text-slate-600 leading-relaxed pt-1">
                Solutions should solve meaningful problems.
              </p>
            </div>

            {/* Philosophy 3 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-2xs space-y-3 hover:border-purple-300 transition-all card-interactive">
              <div className="text-xs font-bold text-purple-600 tracking-wider uppercase">
                ADAPTABLE
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">Adaptable</h3>
              <p className="text-base text-slate-600 leading-relaxed pt-1">
                Systems should have room to evolve as needs change.
              </p>
            </div>

          </StaggerGroup>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. MAIN COMPANY WEBSITE BRIDGE & PREVIEW CARD */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80 relative overflow-hidden">
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

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
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
                className="group block rounded-3xl bg-[#FAFAFA] p-8 border border-slate-200/90 shadow-md hover:shadow-xl hover:border-indigo-300 transition-all relative overflow-hidden card-interactive"
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

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-indigo-600 font-semibold">
                  <span>gjnexoratech.in</span>
                  <span className="group-hover:underline">Visit Site →</span>
                </div>
              </a>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. COMPACT COMPANY INFORMATION ROW */}
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
      {/* 10. FINAL CTA */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FAFAFA] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll direction="up">
            <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-14 text-center space-y-6 shadow-md relative overflow-hidden card-interactive">
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

                <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-normal leading-relaxed">
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
