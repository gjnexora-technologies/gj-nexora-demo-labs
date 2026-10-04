import React, { useState, useMemo } from 'react';
import { DemoProject, DemoCategory } from '../../types/demo';
import { DEMOS_DATA } from '../../data/demos';
import { DemoCard } from './DemoCard';
import { DemoFilters } from './DemoFilters';
import { SearchX, Sparkles } from 'lucide-react';

interface DemoDirectoryProps {
  onViewDetails: (demo: DemoProject) => void;
  selectedCategory: DemoCategory;
  onSelectCategory: (category: DemoCategory) => void;
  onOpenContact: (context?: string) => void;
}

export const DemoDirectory: React.FC<DemoDirectoryProps> = ({
  onViewDetails,
  selectedCategory,
  onSelectCategory,
  onOpenContact,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered Demos
  const filteredDemos = useMemo(() => {
    return DEMOS_DATA.filter((demo) => {
      // Category match
      const matchesCategory =
        selectedCategory === 'All' || demo.category === selectedCategory;

      if (!matchesCategory) return false;

      // Search match
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const inName = demo.name.toLowerCase().includes(q);
      const inDesc = demo.description.toLowerCase().includes(q);
      const inCat = demo.category.toLowerCase().includes(q);
      const inCaps = demo.capabilities.some((cap) =>
        cap.toLowerCase().includes(q)
      );
      const inTagline = demo.tagline?.toLowerCase().includes(q) || false;

      return inName || inDesc || inCat || inCaps || inTagline;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="demos" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="max-w-3xl mb-10 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
          <span>PROJECT CATALOG</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
          All Verified Deployments
        </h2>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Explore live software platforms engineered by <strong className="text-[#0F172A]">GJ Nexora Technologies</strong>. Each showcase represents an independent digital architecture built for practical industry execution.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <DemoFilters
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        resultCount={filteredDemos.length}
      />

      {/* Demos Grid */}
      {filteredDemos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl">
          {filteredDemos.map((demo) => (
            <DemoCard
              key={demo.id}
              demo={demo}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto space-y-4 shadow-xs">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
            <SearchX className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-[#0F172A]">
            No matching projects found
          </h3>
          <p className="text-sm text-slate-500">
            We couldn't find any business projects matching "<span className="font-semibold text-slate-700">{searchQuery}</span>" in the selected category.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => {
                setSearchQuery('');
                onSelectCategory('All');
              }}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              Reset Filters
            </button>
            <button
              onClick={() => onOpenContact(`Custom request for: ${searchQuery}`)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Request this System</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
