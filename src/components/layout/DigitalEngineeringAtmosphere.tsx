import React from 'react';
import {
  Code2,
  Cpu,
  Database,
  Cloud,
  Workflow,
  Globe,
  Layers,
  Sparkles,
  ShieldCheck,
  Rocket,
  Target,
  Mail,
  MessageCircle,
  Phone,
  Send,
  Leaf,
  Sprout,
  BarChart3,
  Recycle,
  CloudSun,
  FileText,
  Activity,
  MapPin,
  TrendingUp,
  Droplets,
} from 'lucide-react';

export type AtmosphereVariant =
  | 'hero'
  | 'home'
  | 'projects'
  | 'project-eco-intel'
  | 'project-eco-report'
  | 'how-we-build'
  | 'about'
  | 'contact'
  | 'section';

interface DigitalEngineeringAtmosphereProps {
  variant?: AtmosphereVariant;
  className?: string;
  hideGrid?: boolean;
  hideIcons?: boolean;
  hideCircuits?: boolean;
  hideWatermarks?: boolean;
}

export const DigitalEngineeringAtmosphere: React.FC<DigitalEngineeringAtmosphereProps> = ({
  variant = 'hero',
  className = '',
  hideGrid = false,
  hideIcons = false,
  hideCircuits = false,
  hideWatermarks = false,
}) => {
  const isHero = variant === 'hero' || variant === 'home';
  const isProjects = variant === 'projects';
  const isEcoIntel = variant === 'project-eco-intel';
  const isEcoReport = variant === 'project-eco-report';
  const isHowWeBuild = variant === 'how-we-build';
  const isAbout = variant === 'about';
  const isContact = variant === 'contact';
  const isSection = variant === 'section';

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden pointer-events-none z-0 select-none ${className}`}
    >
      {/* ========================================================================= */}
      {/* 1. LAYERED ATMOSPHERIC RADIAL GLOWS (PERIMETER FOCUSED) */}
      {/* ========================================================================= */}
      {isHero && (
        <>
          {/* Top Left: Soft Blue / Indigo Glow */}
          <div className="absolute -top-12 -left-12 w-[420px] sm:w-[580px] h-[380px] sm:h-[480px] bg-gradient-to-br from-indigo-300/35 via-blue-200/25 to-transparent rounded-full blur-[100px] sm:blur-[130px]" />
          
          {/* Top Right: Soft Purple Glow */}
          <div className="absolute -top-12 -right-12 w-[420px] sm:w-[580px] h-[380px] sm:h-[480px] bg-gradient-to-bl from-purple-300/30 via-indigo-200/25 to-transparent rounded-full blur-[100px] sm:blur-[130px]" />
          
          {/* Mid Left: Subtle Indigo Glow */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-20 w-[380px] sm:w-[480px] h-[360px] bg-indigo-200/25 rounded-full blur-[110px]" />
          
          {/* Mid Right: Subtle Blue / Purple Glow */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-20 w-[380px] sm:w-[480px] h-[360px] bg-blue-200/25 rounded-full blur-[110px]" />
          
          {/* Lower Area: Subtle Cool Indigo Ambient Base */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[260px] bg-gradient-to-t from-indigo-200/30 via-slate-200/20 to-transparent rounded-full blur-[100px]" />
        </>
      )}

      {isProjects && (
        <>
          <div className="absolute -top-12 -left-10 w-[500px] h-[400px] bg-indigo-200/30 rounded-full blur-[110px]" />
          <div className="absolute -top-12 -right-10 w-[500px] h-[400px] bg-purple-200/25 rounded-full blur-[110px]" />
          <div className="absolute bottom-10 -right-10 w-[450px] h-[350px] bg-blue-200/25 rounded-full blur-[110px]" />
          <div className="absolute bottom-10 -left-10 w-[450px] h-[350px] bg-indigo-200/25 rounded-full blur-[110px]" />
        </>
      )}

      {isEcoIntel && (
        <>
          <div className="absolute top-0 -left-10 w-[520px] h-[420px] bg-emerald-200/30 rounded-full blur-[110px]" />
          <div className="absolute top-0 -right-10 w-[520px] h-[420px] bg-indigo-200/25 rounded-full blur-[110px]" />
          <div className="absolute bottom-10 left-1/4 w-[500px] h-[300px] bg-blue-200/20 rounded-full blur-[110px]" />
        </>
      )}

      {isEcoReport && (
        <>
          <div className="absolute top-0 -left-10 w-[520px] h-[420px] bg-teal-200/30 rounded-full blur-[110px]" />
          <div className="absolute top-0 -right-10 w-[520px] h-[420px] bg-emerald-200/25 rounded-full blur-[110px]" />
          <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-indigo-200/20 rounded-full blur-[110px]" />
        </>
      )}

      {isHowWeBuild && (
        <>
          <div className="absolute top-0 left-10 w-[550px] h-[380px] bg-indigo-200/30 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 right-10 w-[550px] h-[380px] bg-blue-200/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/3 w-[550px] h-[320px] bg-purple-200/25 rounded-full blur-[120px]" />
        </>
      )}

      {isAbout && (
        <>
          <div className="absolute top-0 -left-10 w-[500px] h-[380px] bg-indigo-200/25 rounded-full blur-[110px]" />
          <div className="absolute top-1/3 -right-10 w-[500px] h-[380px] bg-purple-200/25 rounded-full blur-[110px]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[280px] bg-blue-200/20 rounded-full blur-[110px]" />
        </>
      )}

      {isContact && (
        <>
          <div className="absolute top-0 -left-10 w-[500px] h-[380px] bg-indigo-200/30 rounded-full blur-[110px]" />
          <div className="absolute top-1/3 -right-10 w-[500px] h-[380px] bg-purple-200/25 rounded-full blur-[110px]" />
          <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-blue-200/25 rounded-full blur-[110px]" />
        </>
      )}

      {isSection && (
        <>
          <div className="absolute top-0 -left-10 w-[420px] h-[300px] bg-indigo-200/25 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 -right-10 w-[420px] h-[300px] bg-blue-200/20 rounded-full blur-[100px]" />
        </>
      )}

      {/* ========================================================================= */}
      {/* 2. TECHNICAL DIGITAL GRID (CLEARLY VISIBLE 5-8% CONTRAST CANVAS) */}
      {/* ========================================================================= */}
      {!hideGrid && (
        <div
          className={`absolute inset-0 ${
            isHero
              ? 'engineering-grid opacity-85'
              : isSection
              ? 'engineering-grid-subtle opacity-70'
              : 'engineering-grid opacity-75'
          }`}
        />
      )}

      {/* ========================================================================= */}
      {/* 3. PERIMETER CONNECTED ARCHITECTURAL CIRCUITS & DATA FLOW (SVG) */}
      {/* ========================================================================= */}
      {!hideCircuits && !isSection && (
        <>
          {/* Left Circuit Network (Outer Edge Protected) */}
          <svg
            className="absolute left-0 top-0 w-60 sm:w-72 lg:w-96 h-full opacity-80"
            viewBox="0 0 380 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id={`circuit-left-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#2563EB" stopOpacity="0.8" />
                <stop offset="100%" stopColor={isEcoIntel || isEcoReport ? '#059669' : '#7C3AED'} stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Circuit Bus Line 1 (Main Data Line) */}
            <path
              d="M 15 50 L 120 50 L 200 130 L 200 240 L 110 330 L 30 330"
              stroke={`url(#circuit-left-${variant})`}
              strokeWidth="1.75"
              strokeDasharray="6 8"
              className="animate-data-flow"
            />

            {/* Circuit Branch 2 (Secondary Pipeline) */}
            <path
              d="M 40 170 L 150 170 L 180 200 L 180 420 L 90 510 L 20 510"
              stroke={`url(#circuit-left-${variant})`}
              strokeWidth="1.25"
              strokeOpacity="0.7"
            />

            {/* Top Perimeter Micro-Bus */}
            <path
              d="M 15 15 L 80 15 L 110 45"
              stroke="#6366F1"
              strokeWidth="1"
              strokeOpacity="0.6"
            />

            {/* Connected Node Clusters */}
            {/* Node 1 */}
            <circle cx="120" cy="50" r="3.5" fill="#4F46E5" />
            
            {/* Node 2 - Pulsing Focal Point */}
            <circle cx="200" cy="130" r="7" fill="#2563EB" fillOpacity="0.15" className="animate-pulse-glow" />
            <circle cx="200" cy="130" r="4" fill="#2563EB" />
            <circle cx="200" cy="130" r="1.5" fill="#FFFFFF" />

            {/* Node 3 */}
            <circle cx="200" cy="240" r="3.5" fill={isEcoIntel || isEcoReport ? '#059669' : '#7C3AED'} />
            
            {/* Node 4 */}
            <circle cx="110" cy="330" r="4" fill="#4F46E5" />
            
            {/* Node 5 */}
            <circle cx="150" cy="170" r="3" fill="#2563EB" />
            
            {/* Node 6 - Pulsing Focal Point */}
            <circle cx="180" cy="420" r="7" fill={isEcoIntel || isEcoReport ? '#059669' : '#7C3AED'} fillOpacity="0.15" className="animate-pulse-glow" />
            <circle cx="180" cy="420" r="4" fill={isEcoIntel || isEcoReport ? '#059669' : '#7C3AED'} />
            <circle cx="180" cy="420" r="1.5" fill="#FFFFFF" />
            
            <circle cx="90" cy="510" r="3.5" fill="#4F46E5" />
          </svg>

          {/* Right Circuit Network (Outer Edge Protected) */}
          <svg
            className="absolute right-0 top-0 w-60 sm:w-72 lg:w-96 h-full opacity-80"
            viewBox="0 0 380 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id={`circuit-right-${variant}`} x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={isEcoIntel || isEcoReport ? '#059669' : '#7C3AED'} stopOpacity="0.9" />
                <stop offset="50%" stopColor="#2563EB" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Circuit Bus Line 1 */}
            <path
              d="M 365 70 L 260 70 L 180 150 L 180 270 L 270 360 L 350 360"
              stroke={`url(#circuit-right-${variant})`}
              strokeWidth="1.75"
              strokeDasharray="6 8"
              className="animate-data-flow"
            />

            {/* Circuit Branch 2 */}
            <path
              d="M 340 190 L 230 190 L 195 225 L 195 440 L 290 535 L 360 535"
              stroke={`url(#circuit-right-${variant})`}
              strokeWidth="1.25"
              strokeOpacity="0.7"
            />

            {/* Top Perimeter Micro-Bus */}
            <path
              d="M 365 20 L 300 20 L 270 50"
              stroke="#7C3AED"
              strokeWidth="1"
              strokeOpacity="0.6"
            />

            {/* Connected Node Clusters */}
            <circle cx="260" cy="70" r="3.5" fill={isEcoIntel || isEcoReport ? '#059669' : '#7C3AED'} />
            
            {/* Node 2 - Pulsing Focal Point */}
            <circle cx="180" cy="150" r="7" fill="#2563EB" fillOpacity="0.15" className="animate-pulse-glow" />
            <circle cx="180" cy="150" r="4" fill="#2563EB" />
            <circle cx="180" cy="150" r="1.5" fill="#FFFFFF" />

            <circle cx="180" cy="270" r="3.5" fill="#4F46E5" />
            <circle cx="270" cy="360" r="4" fill={isEcoIntel || isEcoReport ? '#059669' : '#7C3AED'} />
            <circle cx="230" cy="190" r="3" fill="#2563EB" />
            
            {/* Node 6 - Pulsing Focal Point */}
            <circle cx="195" cy="440" r="7" fill="#4F46E5" fillOpacity="0.15" className="animate-pulse-glow" />
            <circle cx="195" cy="440" r="4" fill="#4F46E5" />
            <circle cx="195" cy="440" r="1.5" fill="#FFFFFF" />

            <circle cx="290" cy="535" r="3.5" fill="#7C3AED" />
          </svg>
        </>
      )}

      {/* ========================================================================= */}
      {/* 4. VISIBLE BLUEPRINT / TECHNICAL WATERMARKS (OUTER EDGES ONLY) */}
      {/* ========================================================================= */}
      {!hideWatermarks && !isSection && (
        <div className="hidden lg:block select-none">
          {/* Hero / Home Watermarks */}
          {isHero && (
            <>
              <div className="absolute top-12 left-[3.5%] font-mono text-[11px] font-semibold tracking-[0.18em] text-indigo-950/45 uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600/70" />
                <span>SYS.RUNTIME // EDGE_01</span>
              </div>
              <div className="absolute top-44 left-[5%] font-mono text-[10px] font-medium tracking-[0.16em] text-slate-600/45 uppercase">
                [API_INTERFACE // DECOUPLED]
              </div>
              <div className="absolute bottom-28 left-[4%] font-mono text-[10px] font-medium tracking-[0.16em] text-slate-600/45 uppercase flex items-center gap-1.5">
                <span className="text-emerald-600/70">✓</span>
                <span>DATA_SCHEMAS.VERIFIED()</span>
              </div>

              <div className="absolute top-12 right-[3.5%] font-mono text-[11px] font-semibold tracking-[0.18em] text-purple-950/45 uppercase text-right flex items-center justify-end gap-1.5">
                <span>AI_MODELS // AGRI_ANALYTICS</span>
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600/70" />
              </div>
              <div className="absolute top-44 right-[5%] font-mono text-[10px] font-medium tracking-[0.16em] text-slate-600/45 uppercase text-right">
                [CLOUD_STORAGE.SYNC_REALTIME]
              </div>
              <div className="absolute bottom-28 right-[4%] font-mono text-[10px] font-medium tracking-[0.16em] text-slate-600/45 uppercase text-right">
                PRODUCTION_BUILD_V2.6 // LIVE
              </div>
            </>
          )}

          {/* Projects Page Watermarks */}
          {isProjects && (
            <>
              <div className="absolute top-12 left-[3.5%] font-mono text-[11px] font-semibold tracking-[0.18em] text-indigo-950/45 uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600/70" />
                <span>PROJECT_CATALOG // DEMO_LAB</span>
              </div>
              <div className="absolute top-44 left-[5%] font-mono text-[10px] font-medium tracking-[0.16em] text-slate-600/45 uppercase">
                [SYSTEM_SHOWCASE.INDEX()]
              </div>
              <div className="absolute bottom-28 left-[4%] font-mono text-[10px] font-medium tracking-[0.16em] text-slate-600/45 uppercase">
                STANDALONE_HOSTING.READY
              </div>

              <div className="absolute top-12 right-[3.5%] font-mono text-[11px] font-semibold tracking-[0.18em] text-purple-950/45 uppercase text-right flex items-center justify-end gap-1.5">
                <span>LIVE_DEPLOYMENTS.ACTIVE()</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600/70" />
              </div>
              <div className="absolute top-44 right-[5%] font-mono text-[10px] font-medium tracking-[0.16em] text-slate-600/45 uppercase text-right">
                [EDGE_ROUTING.GLOBAL]
              </div>
              <div className="absolute bottom-28 right-[4%] font-mono text-[10px] font-medium tracking-[0.16em] text-slate-600/45 uppercase text-right">
                VERIFIED_CODEBASES_2.0
              </div>
            </>
          )}

          {/* ECO-INTEL Case Study Watermarks */}
          {isEcoIntel && (
            <>
              <div className="absolute top-12 left-[3.5%] font-mono text-[11px] font-semibold tracking-[0.18em] text-emerald-950/50 uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600/70" />
                <span>AI_ENGINE // SMART_FARM</span>
              </div>
              <div className="absolute top-44 left-[5%] font-mono text-[10px] font-medium tracking-[0.16em] text-slate-600/45 uppercase">
                [AGRONOMY_NEURAL_NET.EXEC()]
              </div>
              <div className="absolute bottom-28 left-[4%] font-mono text-[10px] font-medium tracking-[0.16em] text-slate-600/45 uppercase">
                CARBON_CALC.REALTIME()
              </div>

              <div className="absolute top-12 right-[3.5%] font-mono text-[11px] font-semibold tracking-[0.18em] text-indigo-950/50 uppercase text-right flex items-center justify-end gap-1.5">
                <span>DECISION_MATRIX.STABLE</span>
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600/70" />
              </div>
              <div className="absolute top-44 right-[5%] font-mono text-[10px] font-medium tracking-[0.16em] text-slate-600/45 uppercase text-right">
                [WASTE_MANAGEMENT_PIPELINE]
              </div>
              <div className="absolute bottom-28 right-[4%] font-mono text-[10px] font-medium tracking-[0.16em] text-slate-600/45 uppercase text-right">
                PRODUCTION_API_V1.8
              </div>
            </>
          )}

          {/* Eco Report Case Study Watermarks */}
          {isEcoReport && (
            <>
              <div className="absolute top-12 left-[3.5%] font-mono text-[11px] font-semibold tracking-[0.18em] text-teal-950/50 uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600/70" />
                <span>ENVIRONMENTAL_TELEMETRY</span>
              </div>
              <div className="absolute top-44 left-[5%] font-mono text-[10px] font-medium tracking-[0.16em] text-slate-600/45 uppercase">
                [GEOSPATIAL_INDEX.QUERY()]
              </div>
              <div className="absolute bottom-28 left-[4%] font-mono text-[10px] font-medium tracking-[0.16em] text-slate-600/45 uppercase">
                COMPLIANCE_RUNBOOK.ACTIVE
              </div>

              <div className="absolute top-12 right-[3.5%] font-mono text-[11px] font-semibold tracking-[0.18em] text-indigo-950/50 uppercase text-right flex items-center justify-end gap-1.5">
                <span>COMMUNITY_REPORTING_NET</span>
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600/70" />
              </div>
              <div className="absolute top-44 right-[5%] font-mono text-[10px] font-medium tracking-[0.16em] text-slate-600/45 uppercase text-right">
                [FIREBASE_SYNC.REALTIME]
              </div>
              <div className="absolute bottom-28 right-[4%] font-mono text-[10px] font-medium tracking-[0.16em] text-slate-600/45 uppercase text-right">
                REPORT_PIPELINE_V2.1
              </div>
            </>
          )}

          {/* How We Build Watermarks */}
          {isHowWeBuild && (
            <>
              <div className="absolute top-12 left-[3.5%] font-mono text-[11px] font-semibold tracking-[0.18em] text-indigo-950/45 uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600/70" />
                <span>ENGINEERING_PIPELINE // 6_STAGE</span>
              </div>
              <div className="absolute top-44 left-[5%] font-mono text-[10px] font-medium tracking-[0.16em] text-slate-600/45 uppercase">
                [BUILD_PROCESS.DISCIPLINED()]
              </div>
              <div className="absolute bottom-28 left-[4%] font-mono text-[10px] font-medium tracking-[0.16em] text-slate-600/45 uppercase">
                QUALITY_GATES.STRICT()
              </div>

              <div className="absolute top-12 right-[3.5%] font-mono text-[11px] font-semibold tracking-[0.18em] text-purple-950/45 uppercase text-right flex items-center justify-end gap-1.5">
                <span>SYSTEM_ARCHITECTURE.STABLE</span>
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600/70" />
              </div>
              <div className="absolute top-44 right-[5%] font-mono text-[10px] font-medium tracking-[0.16em] text-slate-600/45 uppercase text-right">
                [CONTINUOUS_DEPLOYMENT.CDN]
              </div>
              <div className="absolute bottom-28 right-[4%] font-mono text-[10px] font-medium tracking-[0.16em] text-slate-600/45 uppercase text-right">
                REFINEMENT_LOOP_ACTIVE
              </div>
            </>
          )}

          {/* About Watermarks */}
          {isAbout && (
            <>
              <div className="absolute top-12 left-[3.5%] font-mono text-[11px] font-semibold tracking-[0.18em] text-indigo-950/45 uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600/70" />
                <span>COMPANY.SYSTEM // ARCHITECTURE</span>
              </div>
              <div className="absolute top-44 left-[5%] font-mono text-[10px] font-medium tracking-[0.16em] text-slate-600/45 uppercase">
                [SOFTWARE // PURPOSEFUL]
              </div>
              <div className="absolute bottom-28 left-[4%] font-mono text-[10px] font-medium tracking-[0.16em] text-slate-600/45 uppercase">
                DIGITAL.EXCELLENCE
              </div>

              <div className="absolute top-12 right-[3.5%] font-mono text-[11px] font-semibold tracking-[0.18em] text-purple-950/45 uppercase text-right flex items-center justify-end gap-1.5">
                <span>AI.SYSTEMS // APPLIED</span>
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600/70" />
              </div>
              <div className="absolute top-44 right-[5%] font-mono text-[10px] font-medium tracking-[0.16em] text-slate-600/45 uppercase text-right">
                [TECHNOLOGY // PRACTICAL]
              </div>
              <div className="absolute bottom-28 right-[4%] font-mono text-[10px] font-medium tracking-[0.16em] text-slate-600/45 uppercase text-right">
                MISSION.STATUS // ACTIVE
              </div>
            </>
          )}

          {/* Contact Watermarks */}
          {isContact && (
            <>
              <div className="absolute top-12 left-[3.5%] font-mono text-[11px] font-semibold tracking-[0.18em] text-indigo-950/45 uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600/70" />
                <span>CONTACT_INTERFACE // OPEN</span>
              </div>
              <div className="absolute top-44 left-[5%] font-mono text-[10px] font-medium tracking-[0.16em] text-slate-600/45 uppercase">
                [PROJECT_INQUIRY.STAGE_01]
              </div>
              <div className="absolute bottom-28 left-[4%] font-mono text-[10px] font-medium tracking-[0.16em] text-slate-600/45 uppercase">
                SECURE_GATEWAY_V2.0
              </div>

              <div className="absolute top-12 right-[3.5%] font-mono text-[11px] font-semibold tracking-[0.18em] text-purple-950/45 uppercase text-right flex items-center justify-end gap-1.5">
                <span>DIRECT_ENGINEER_ACCESS</span>
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600/70" />
              </div>
              <div className="absolute top-44 right-[5%] font-mono text-[10px] font-medium tracking-[0.16em] text-slate-600/45 uppercase text-right">
                [SLA_RESPONSE_24HR]
              </div>
              <div className="absolute bottom-28 right-[4%] font-mono text-[10px] font-medium tracking-[0.16em] text-slate-600/45 uppercase text-right">
                WHATSAPP_CONNECT.LIVE
              </div>
            </>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. CONTEXT-SPECIFIC FLOATING TECH ICONS (OUTER PERIPHERY ONLY) */}
      {/* ========================================================================= */}
      {!hideIcons && !isSection && (
        <>
          {/* Hero / Home Floating Icons */}
          {isHero && (
            <>
              <div className="absolute top-10 left-[4%] sm:left-[6%] text-indigo-700/60 animate-float-1 hidden sm:block">
                <div className="p-2.5 rounded-2xl bg-white/90 border border-indigo-200/80 shadow-xs backdrop-blur-xs">
                  <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>
              <div className="absolute top-1/2 -translate-y-6 left-[2%] sm:left-[3.5%] text-blue-700/60 animate-float-3 hidden sm:block">
                <div className="p-2 rounded-xl bg-white/90 border border-blue-200/80 shadow-xs backdrop-blur-xs">
                  <Database className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
              <div className="absolute bottom-16 left-[5%] sm:left-[7%] text-teal-700/55 animate-float-drift hidden md:block">
                <div className="p-2 rounded-xl bg-white/90 border border-teal-200/70 shadow-xs">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
              <div className="absolute top-12 right-[4%] sm:right-[6%] text-blue-700/60 animate-float-2 hidden sm:block">
                <div className="p-2.5 rounded-2xl bg-white/90 border border-blue-200/80 shadow-xs backdrop-blur-xs">
                  <Cloud className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>
              <div className="absolute top-1/2 -translate-y-6 right-[2%] sm:right-[3.5%] text-purple-700/60 animate-float-4 hidden sm:block">
                <div className="p-2 rounded-xl bg-white/90 border border-purple-200/80 shadow-xs backdrop-blur-xs">
                  <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
              <div className="absolute bottom-16 right-[5%] sm:right-[7%] text-indigo-700/55 animate-float-1 hidden md:block">
                <div className="p-2 rounded-xl bg-white/90 border border-indigo-200/70 shadow-xs">
                  <Workflow className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </>
          )}

          {/* Projects Page Floating Icons */}
          {isProjects && (
            <>
              <div className="absolute top-10 left-[4%] sm:left-[6%] text-indigo-700/60 animate-float-1 hidden sm:block">
                <div className="p-2.5 rounded-2xl bg-white/90 border border-indigo-200/80 shadow-xs backdrop-blur-xs">
                  <Layers className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>
              <div className="absolute top-1/2 -translate-y-6 left-[2%] sm:left-[3.5%] text-blue-700/60 animate-float-3 hidden sm:block">
                <div className="p-2 rounded-xl bg-white/90 border border-blue-200/80 shadow-xs backdrop-blur-xs">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
              <div className="absolute top-12 right-[4%] sm:right-[6%] text-purple-700/60 animate-float-2 hidden sm:block">
                <div className="p-2.5 rounded-2xl bg-white/90 border border-purple-200/80 shadow-xs backdrop-blur-xs">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>
              <div className="absolute top-1/2 -translate-y-6 right-[2%] sm:right-[3.5%] text-indigo-700/60 animate-float-4 hidden sm:block">
                <div className="p-2 rounded-xl bg-white/90 border border-indigo-200/80 shadow-xs backdrop-blur-xs">
                  <Workflow className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </>
          )}

          {/* ECO-INTEL Floating Icons */}
          {isEcoIntel && (
            <>
              <div className="absolute top-8 left-[5%] text-emerald-600/60 animate-float-1 hidden sm:block">
                <div className="p-2.5 rounded-2xl bg-white/90 border border-emerald-200/80 shadow-xs">
                  <Leaf className="w-6 h-6" />
                </div>
              </div>
              <div className="absolute top-12 right-[7%] text-indigo-700/60 animate-float-2 hidden sm:block">
                <div className="p-2.5 rounded-2xl bg-white/90 border border-indigo-200/80 shadow-xs">
                  <Cpu className="w-7 h-7" />
                </div>
              </div>
              <div className="absolute top-1/2 -translate-y-12 left-[3%] text-emerald-600/70 animate-float-3">
                <div className="p-2 rounded-xl bg-white/90 border border-emerald-200/80 shadow-xs">
                  <Sprout className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>
              <div className="absolute top-1/2 -translate-y-8 right-[3.5%] text-blue-700/60 animate-float-4">
                <div className="p-2.5 rounded-2xl bg-white/90 border border-blue-200/80 shadow-xs">
                  <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>
              <div className="absolute bottom-10 left-[8%] text-teal-600/50 animate-float-drift hidden md:block">
                <div className="p-2 rounded-xl bg-white/90 border border-teal-200/60 shadow-xs">
                  <Recycle className="w-5 h-5" />
                </div>
              </div>
              <div className="absolute bottom-12 right-[10%] text-emerald-600/60 animate-float-1 hidden md:block">
                <div className="p-2.5 rounded-2xl bg-white/90 border border-emerald-200/80 shadow-xs">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>
              <div className="absolute top-6 left-[48%] -translate-x-1/2 text-blue-500/35 animate-float-2 hidden lg:block">
                <Droplets className="w-5 h-5" />
              </div>
              <div className="absolute bottom-6 left-[45%] text-amber-500/35 animate-float-3 hidden lg:block">
                <CloudSun className="w-5 h-5" />
              </div>
            </>
          )}

          {/* Eco Report Floating Icons */}
          {isEcoReport && (
            <>
              <div className="absolute top-8 left-[5%] text-teal-700/60 animate-float-1 hidden sm:block">
                <div className="p-2.5 rounded-2xl bg-white/90 border border-teal-200/80 shadow-xs">
                  <Globe className="w-6 h-6" />
                </div>
              </div>
              <div className="absolute top-12 right-[7%] text-indigo-700/60 animate-float-2 hidden sm:block">
                <div className="p-2.5 rounded-2xl bg-white/90 border border-indigo-200/80 shadow-xs">
                  <FileText className="w-6 h-6" />
                </div>
              </div>
              <div className="absolute top-1/2 -translate-y-12 left-[3%] text-emerald-600/70 animate-float-3">
                <div className="p-2 rounded-xl bg-white/90 border border-emerald-200/80 shadow-xs">
                  <Leaf className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>
              <div className="absolute top-1/2 -translate-y-8 right-[3.5%] text-teal-700/60 animate-float-4">
                <div className="p-2.5 rounded-2xl bg-white/90 border border-teal-200/80 shadow-xs">
                  <Activity className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>
              <div className="absolute bottom-10 left-[8%] text-blue-700/50 animate-float-drift hidden md:block">
                <div className="p-2 rounded-xl bg-white/90 border border-blue-200/60 shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>
              <div className="absolute bottom-12 right-[10%] text-emerald-600/60 animate-float-1 hidden md:block">
                <div className="p-2.5 rounded-2xl bg-white/90 border border-emerald-200/80 shadow-xs">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>
            </>
          )}

          {/* How We Build Floating Icons */}
          {isHowWeBuild && (
            <>
              <div className="absolute top-10 left-[4%] sm:left-[6%] text-indigo-700/60 animate-float-1 hidden sm:block">
                <div className="p-2.5 rounded-2xl bg-white/90 border border-indigo-200/80 shadow-xs backdrop-blur-xs">
                  <Workflow className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>
              <div className="absolute top-1/2 -translate-y-6 left-[2%] sm:left-[3.5%] text-blue-700/60 animate-float-3 hidden sm:block">
                <div className="p-2 rounded-xl bg-white/90 border border-blue-200/80 shadow-xs backdrop-blur-xs">
                  <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
              <div className="absolute top-12 right-[4%] sm:right-[6%] text-purple-700/60 animate-float-2 hidden sm:block">
                <div className="p-2.5 rounded-2xl bg-white/90 border border-purple-200/80 shadow-xs backdrop-blur-xs">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>
              <div className="absolute top-1/2 -translate-y-6 right-[2%] sm:right-[3.5%] text-indigo-700/60 animate-float-4 hidden sm:block">
                <div className="p-2 rounded-xl bg-white/90 border border-indigo-200/80 shadow-xs backdrop-blur-xs">
                  <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </>
          )}

          {/* About Floating Icons */}
          {isAbout && (
            <>
              <div className="absolute top-10 left-[4%] sm:left-[6%] text-indigo-700/60 animate-float-1 hidden sm:block">
                <div className="p-2.5 rounded-2xl bg-white/90 border border-indigo-200/80 shadow-xs backdrop-blur-xs">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>
              <div className="absolute top-1/2 -translate-y-6 left-[2%] sm:left-[3.5%] text-blue-700/60 animate-float-3 hidden sm:block">
                <div className="p-2 rounded-xl bg-white/90 border border-blue-200/80 shadow-xs backdrop-blur-xs">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
              <div className="absolute top-12 right-[4%] sm:right-[6%] text-purple-700/60 animate-float-2 hidden sm:block">
                <div className="p-2.5 rounded-2xl bg-white/90 border border-purple-200/80 shadow-xs backdrop-blur-xs">
                  <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>
              <div className="absolute top-1/2 -translate-y-6 right-[2%] sm:right-[3.5%] text-indigo-700/60 animate-float-4 hidden sm:block">
                <div className="p-2 rounded-xl bg-white/90 border border-indigo-200/80 shadow-xs backdrop-blur-xs">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </>
          )}

          {/* Contact Floating Icons */}
          {isContact && (
            <>
              <div className="absolute top-10 left-[4%] sm:left-[6%] text-indigo-700/60 animate-float-1 hidden sm:block">
                <div className="p-2.5 rounded-2xl bg-white/90 border border-indigo-200/80 shadow-xs backdrop-blur-xs">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>
              <div className="absolute top-1/2 -translate-y-6 left-[2%] sm:left-[3.5%] text-blue-700/60 animate-float-3 hidden sm:block">
                <div className="p-2 rounded-xl bg-white/90 border border-blue-200/80 shadow-xs backdrop-blur-xs">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
              <div className="absolute top-12 right-[4%] sm:right-[6%] text-purple-700/60 animate-float-2 hidden sm:block">
                <div className="p-2.5 rounded-2xl bg-white/90 border border-purple-200/80 shadow-xs backdrop-blur-xs">
                  <Send className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>
              <div className="absolute top-1/2 -translate-y-6 right-[2%] sm:right-[3.5%] text-indigo-700/60 animate-float-4 hidden sm:block">
                <div className="p-2 rounded-xl bg-white/90 border border-indigo-200/80 shadow-xs backdrop-blur-xs">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </>
          )}

          {/* Mobile Ambient Subtle Badges (Clean, framing the edges) */}
          <div className="sm:hidden absolute top-3 left-3 text-indigo-600/40">
            {isHero || isProjects ? <Code2 className="w-4 h-4" /> : isHowWeBuild ? <Workflow className="w-4 h-4" /> : isContact ? <Mail className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
          </div>
          <div className="sm:hidden absolute top-3 right-3 text-purple-600/40">
            {isEcoIntel || isEcoReport ? <Leaf className="w-4 h-4" /> : <Cloud className="w-4 h-4" />}
          </div>
        </>
      )}
    </div>
  );
};
