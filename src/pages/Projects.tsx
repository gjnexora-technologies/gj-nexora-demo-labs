import React, { useState, useEffect } from 'react';
import { DemoProject, CategoryId } from '../types/demo';
import { DEMOS_DATA, PROJECT_CATEGORIES, getCategoryById } from '../data/demos';
import { ArrowRight, ExternalLink, Layers, CheckCircle2, FolderKanban } from 'lucide-react';
import { DigitalEngineeringAtmosphere } from '../components/layout/DigitalEngineeringAtmosphere';

interface ProjectsProps {
  onViewDetails: (demo: DemoProject) => void;
  onOpenContact: (context?: string) => void;
  onNavigate: (path: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  onViewDetails,
  onOpenContact,
  onNavigate,
}) => {
  // Read initial category from query parameters if present
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('category');
    if (cat === 'ai-intelligence' || cat === 'sustainability-environment') {
      return cat;
    }
    return 'all';
  });

  useEffect(() => {
    document.title = 'Project Catalogue — Live Production Platforms | GJ Nexora Technologies';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Sync category with URL state
  const handleCategoryChange = (catId: CategoryId) => {
    setSelectedCategory(catId);
    const newUrl = catId === 'all' ? '/projects' : `/projects?category=${catId}`;
    window.history.pushState({}, '', newUrl);
  };

  // Filter projects based on active category
  const filteredProjects = selectedCategory === 'all'
    ? DEMOS_DATA
    : DEMOS_DATA.filter((project) => project.categoryId === selectedCategory);

  const activeCategoryInfo = getCategoryById(selectedCategory);

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#0F172A] py-12 sm:py-16 overflow-hidden">
      {/* Digital Engineering Atmosphere: Projects Catalog Variant */}
      <DigitalEngineeringAtmosphere variant="projects" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 relative z-10">
        
        {/* ========================================================================= */}
        {/* 1. HEADER & INTRO (QUIET ZONE PROTECTED) */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-xs border border-indigo-200/80 text-indigo-700 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Layers className="w-3.5 h-3.5 text-indigo-600" />
            <span>PROJECT CATALOGUE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            Explore Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600">
              Working Software
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-normal">
            Browse real applications engineered, deployed, and documented by GJ Nexora Technologies. Each application represents an independent system with custom architecture, live cloud hosting, and real-world utility.
          </p>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white text-slate-700 text-xs font-semibold border border-slate-200 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>02 Live Production Deployments Active</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. CATEGORY NAVIGATION & FILTER CONTROL BAR */}
        {/* ========================================================================= */}
        <div className="space-y-4 border-b border-slate-200/80 pb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            
            {/* Category Filter Buttons */}
            <div
              role="group"
              aria-label="Filter project catalogue by category"
              className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0"
            >
              {PROJECT_CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`min-h-[44px] px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer flex-shrink-0 ${
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

            {/* Dynamic Count Badge */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold font-mono text-slate-700 uppercase self-start sm:self-auto px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>
                {filteredProjects.length === 1
                  ? '01 LIVE PROJECT'
                  : `0${filteredProjects.length} LIVE PROJECTS`}
              </span>
            </div>

          </div>

          {/* Contextual Category Sub-Header when Filtered */}
          {selectedCategory !== 'all' && (
            <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-indigo-900">
                Category: <strong className="text-[#0F172A]">{activeCategoryInfo.name}</strong> ({filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'})
              </span>
              <button
                type="button"
                onClick={() => handleCategoryChange('all')}
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 underline underline-offset-2 cursor-pointer"
              >
                Reset to All Projects
              </button>
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* 3. PROJECT CATALOG CARDS */}
        {/* ========================================================================= */}
        {filteredProjects.length > 0 ? (
          <div className="space-y-10 sm:space-y-14">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 lg:p-12 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-300 relative overflow-hidden group animate-fade-in"
              >
                {/* Subtle Project Ambient Glow */}
                <div
                  className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] pointer-events-none transition-opacity duration-300 ${
                    project.id === 'eco-intel'
                      ? 'bg-indigo-100/60 group-hover:bg-indigo-200/50'
                      : 'bg-emerald-100/60 group-hover:bg-emerald-200/50'
                  }`}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center relative z-10">
                  
                  {/* Visual Thumbnail Side (Span 6) */}
                  <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md group-hover:shadow-lg transition-shadow aspect-[16/10]">
                      <img
                        src={project.image || undefined}
                        alt={project.name}
                        className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                        loading="lazy"
                      />
                      
                      {/* Live Badge Overlay */}
                      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-emerald-700 text-xs font-bold shadow-xs">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span>LIVE DEPLOYMENT</span>
                      </div>

                      <div className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md text-white text-xs font-mono font-medium shadow-xs">
                        <span>PROJECT {project.number}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Details Side (Span 6) */}
                  <div className={`lg:col-span-6 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md border ${
                          project.id === 'eco-intel'
                            ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                            : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        }`}>
                          {project.number} {project.category}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                        {project.name}
                      </h2>

                      <p className={`text-sm sm:text-base font-semibold ${
                        project.id === 'eco-intel' ? 'text-indigo-900/90' : 'text-emerald-900/90'
                      }`}>
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Key Capabilities Badges */}
                    <div className="space-y-2.5">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Core Platform Capabilities
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.capabilities.slice(0, 5).map((cap, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 shadow-2xs"
                          >
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            <span>{cap}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions: View Case Study & Direct Launch */}
                    <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <button
                        onClick={() => onViewDetails(project)}
                        className={`min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all shadow-md active:scale-[0.98] group/btn cursor-pointer ${
                          project.id === 'eco-intel'
                            ? 'bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 hover:from-indigo-500 hover:via-blue-500 hover:to-purple-500 shadow-indigo-600/20'
                            : 'bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 hover:from-emerald-500 hover:via-teal-500 hover:to-indigo-500 shadow-emerald-600/20'
                        }`}
                      >
                        <span>View Project Case Study</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>

                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-[#0F172A] bg-slate-50 hover:bg-slate-100 active:scale-[0.98] border border-slate-200 transition-all shadow-2xs cursor-pointer"
                        >
                          <span>Launch Live Platform</span>
                          <ExternalLink className="w-4 h-4 text-slate-500" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Reusable Empty State */
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-4 max-w-xl mx-auto shadow-sm">
            <FolderKanban className="w-12 h-12 text-slate-400 mx-auto" />
            <h3 className="text-xl font-bold text-[#0F172A]">No Projects Yet</h3>
            <p className="text-sm text-[#475569] leading-relaxed">
              Projects in this category will appear here as they are completed and deployed.
            </p>
            <button
              type="button"
              onClick={() => handleCategoryChange('all')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-xs cursor-pointer"
            >
              <span>View All Projects</span>
            </button>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 4. BOTTOM GUIDANCE / WORKFLOW BANNER (LIGHT-THEME SIGNATURE) */}
        {/* ========================================================================= */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 text-center space-y-6 shadow-sm relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              Curious How We Engineer These Platforms?
            </h3>
            <p className="text-sm sm:text-base text-[#475569] font-normal leading-relaxed">
              Explore our disciplined 6-step engineering methodology, decoupled architecture pipeline, and production standards.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 relative z-10">
            <button
              onClick={() => onNavigate('/how-we-build')}
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 hover:from-indigo-500 hover:via-blue-500 hover:to-purple-500 active:scale-[0.98] transition-all shadow-md shadow-indigo-600/20 cursor-pointer"
            >
              <span>Explore How We Build →</span>
            </button>
            <button
              onClick={() => onOpenContact('Project Inquiry from Projects Page')}
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold text-[#0F172A] bg-white hover:bg-slate-50 active:scale-[0.98] border border-slate-200 transition-all shadow-2xs cursor-pointer"
            >
              <span>Discuss a Custom Project</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
