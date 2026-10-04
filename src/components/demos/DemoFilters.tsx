import React from 'react';
import { Search, X, Filter } from 'lucide-react';
import { DemoCategory } from '../../types/demo';
import { CATEGORIES } from '../../data/demos';

interface DemoFiltersProps {
  selectedCategory: DemoCategory;
  onSelectCategory: (category: DemoCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  resultCount: number;
}

export const DemoFilters: React.FC<DemoFiltersProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  resultCount,
}) => {
  return (
    <div className="space-y-4 mb-8">
      {/* Search Bar & Result Counter */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-lg">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by project name, category, or capability (e.g. agriculture, carbon)..."
            className="w-full pl-10 pr-9 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto text-xs font-semibold text-slate-600 bg-slate-100 px-3.5 py-2.5 rounded-xl border border-slate-200">
          <Filter className="w-3.5 h-3.5 text-indigo-600" />
          <span>Showing {resultCount} {resultCount === 1 ? 'Live Project' : 'Live Projects'}</span>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {CATEGORIES.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-1 ${
                isActive
                  ? 'bg-[#0F172A] text-white shadow-sm border border-slate-800'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-[#0F172A]'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};
