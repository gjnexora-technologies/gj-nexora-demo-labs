import React from 'react';
import {
  Leaf,
  Sprout,
  Cpu,
  BarChart3,
  Recycle,
  TrendingUp,
  Droplets,
  CloudSun,
  Globe,
  FileText,
  Activity,
  MapPin,
  ShieldCheck,
  PieChart,
  Cloud,
} from 'lucide-react';

interface FloatingProjectIconsProps {
  projectId: 'eco-intel' | 'eco-report' | string;
}

export const FloatingProjectIcons: React.FC<FloatingProjectIconsProps> = ({ projectId }) => {
  if (projectId === 'eco-intel') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
        {/* Desktop / Tablet Icons */}
        
        {/* Top-left: Leaf (emerald, mid) */}
        <div className="absolute top-8 left-[6%] text-emerald-500/35 animate-float-1 hidden sm:block">
          <div className="p-2.5 rounded-2xl bg-emerald-50/60 border border-emerald-200/50 shadow-xs">
            <Leaf className="w-6 h-6" />
          </div>
        </div>

        {/* Top-right: Brain/AI (indigo, foreground) */}
        <div className="absolute top-12 right-[8%] text-indigo-600/45 animate-float-2 hidden sm:block">
          <div className="p-2.5 rounded-2xl bg-indigo-50/70 border border-indigo-200/60 shadow-xs">
            <Cpu className="w-7 h-7" />
          </div>
        </div>

        {/* Mid-left: Sprout (emerald, foreground) */}
        <div className="absolute top-1/2 -translate-y-12 left-[3%] text-emerald-600/50 animate-float-3">
          <div className="p-2 rounded-xl bg-emerald-50/80 border border-emerald-200/60 shadow-xs">
            <Sprout className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </div>

        {/* Mid-right: Analytics Chart (blue, mid) */}
        <div className="absolute top-1/2 -translate-y-8 right-[4%] text-blue-600/40 animate-float-4">
          <div className="p-2.5 rounded-2xl bg-blue-50/70 border border-blue-200/60 shadow-xs">
            <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </div>

        {/* Bottom-left: Recycle / Waste (teal, background) */}
        <div className="absolute bottom-10 left-[10%] text-teal-600/30 animate-float-drift hidden md:block">
          <div className="p-2 rounded-xl bg-teal-50/50 border border-teal-200/40">
            <Recycle className="w-5 h-5" />
          </div>
        </div>

        {/* Bottom-right: Profit / Trending Up (emerald, mid) */}
        <div className="absolute bottom-12 right-[12%] text-emerald-600/40 animate-float-1 hidden md:block">
          <div className="p-2.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/50 shadow-xs">
            <TrendingUp className="w-5 h-5" />
          </div>
        </div>

        {/* Center top ambient: Moisture / Droplet (blue, faint background) */}
        <div className="absolute top-6 left-[48%] -translate-x-1/2 text-blue-500/25 animate-float-2 hidden lg:block">
          <Droplets className="w-5 h-5" />
        </div>

        {/* Lower center ambient: Weather / Climate (amber, faint background) */}
        <div className="absolute bottom-6 left-[45%] text-amber-500/25 animate-float-3 hidden lg:block">
          <CloudSun className="w-5 h-5" />
        </div>
      </div>
    );
  }

  // Eco Report Icons (Sustainability, Reporting, Earth, Analytics)
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {/* Top-left: Globe (emerald/teal, foreground) */}
      <div className="absolute top-8 left-[6%] text-teal-600/45 animate-float-1 hidden sm:block">
        <div className="p-2.5 rounded-2xl bg-teal-50/70 border border-teal-200/60 shadow-xs">
          <Globe className="w-6 h-6" />
        </div>
      </div>

      {/* Top-right: File / Report (indigo, mid) */}
      <div className="absolute top-12 right-[8%] text-indigo-600/40 animate-float-2 hidden sm:block">
        <div className="p-2.5 rounded-2xl bg-indigo-50/70 border border-indigo-200/60 shadow-xs">
          <FileText className="w-6 h-6" />
        </div>
      </div>

      {/* Mid-left: Environment Leaf (emerald, foreground) */}
      <div className="absolute top-1/2 -translate-y-12 left-[3%] text-emerald-600/50 animate-float-3">
        <div className="p-2 rounded-xl bg-emerald-50/80 border border-emerald-200/60 shadow-xs">
          <Leaf className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
      </div>

      {/* Mid-right: Activity / Monitoring (teal, mid) */}
      <div className="absolute top-1/2 -translate-y-8 right-[4%] text-teal-600/40 animate-float-4">
        <div className="p-2.5 rounded-2xl bg-teal-50/70 border border-teal-200/60 shadow-xs">
          <Activity className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
      </div>

      {/* Bottom-left: Location MapPin (blue, background) */}
      <div className="absolute bottom-10 left-[10%] text-blue-600/35 animate-float-drift hidden md:block">
        <div className="p-2 rounded-xl bg-blue-50/50 border border-blue-200/40">
          <MapPin className="w-5 h-5" />
        </div>
      </div>

      {/* Bottom-right: Audit Shield / Compliance (emerald, mid) */}
      <div className="absolute bottom-12 right-[12%] text-emerald-600/40 animate-float-1 hidden md:block">
        <div className="p-2.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/50 shadow-xs">
          <ShieldCheck className="w-5 h-5" />
        </div>
      </div>

      {/* Center top ambient: Cloud Monitoring (blue, faint) */}
      <div className="absolute top-6 left-[48%] -translate-x-1/2 text-blue-500/25 animate-float-2 hidden lg:block">
        <Cloud className="w-5 h-5" />
      </div>

      {/* Lower center ambient: Pie Chart / Metric (indigo, faint) */}
      <div className="absolute bottom-6 left-[45%] text-indigo-500/25 animate-float-3 hidden lg:block">
        <PieChart className="w-5 h-5" />
      </div>
    </div>
  );
};
