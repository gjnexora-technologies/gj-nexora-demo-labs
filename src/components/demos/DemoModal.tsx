import React, { useEffect } from 'react';
import { DemoProject } from '../../types/demo';
import { X, ExternalLink, CheckCircle2, ArrowRight, Layers } from 'lucide-react';

interface DemoModalProps {
  demo: DemoProject | null;
  onClose: () => void;
  onOpenContact?: (context?: string) => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ demo, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (demo) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [demo, onClose]);

  if (!demo) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/80 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-demo-title"
    >
      <div
        className="bg-[#0F172A] text-white rounded-3xl border border-slate-800 shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="p-6 sm:p-7 border-b border-slate-800 flex items-start justify-between gap-4 bg-[#0B0F19]">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono font-bold text-slate-400 bg-slate-900 px-2 py-0.5 rounded-md border border-slate-700/80">
                PROJECT #{demo.number}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-300 bg-indigo-950/80 px-2.5 py-0.5 rounded-md border border-indigo-800/60">
                {demo.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2.5 py-0.5 rounded-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                LIVE PUBLIC DEPLOYMENT
              </span>
            </div>
            <h2 id="modal-demo-title" className="text-2xl font-bold text-white tracking-tight">
              {demo.name}
            </h2>
            {demo.tagline && (
              <p className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">{demo.tagline}</p>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 divide-y divide-slate-800">
          {/* Overview */}
          <div>
            {demo.image && (
              <div className="mb-6 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 aspect-[16/9] shadow-md">
                <img
                  src={demo.image}
                  alt={`${demo.name} Preview`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            )}

            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              System Overview
            </h3>
            <p className="text-base text-slate-300 leading-relaxed">
              {demo.description}
            </p>

            {/* Metrics badges if available */}
            {demo.metrics && demo.metrics.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                {demo.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#0B0F19] border border-slate-800 flex flex-col"
                  >
                    <span className="text-xs text-slate-400 font-medium">{m.label}</span>
                    <span className="text-lg font-bold text-indigo-400">{m.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Workflow Sequence */}
          {demo.workflowSteps && demo.workflowSteps.length > 0 && (
            <div className="pt-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-indigo-400" />
                Operational Workflow Sequence
              </h3>
              <div className="bg-[#0B0F19] rounded-2xl p-4 border border-slate-800">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-1 flex-wrap">
                  {demo.workflowSteps.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <div className="flex items-center gap-2 bg-[#0F172A] px-3 py-2 rounded-xl border border-slate-800 shadow-2xs text-xs font-semibold text-slate-200">
                        <span className="w-4 h-4 rounded-full bg-indigo-950 text-indigo-400 border border-indigo-800 flex items-center justify-center text-[10px] font-bold">
                          {idx + 1}
                        </span>
                        <span>{step}</span>
                      </div>
                      {idx < demo.workflowSteps!.length - 1 && (
                        <ArrowRight className="hidden sm:inline w-3.5 h-3.5 text-slate-600 mx-1 flex-shrink-0" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Capabilities Grid */}
          <div className="pt-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Core Functional Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {demo.capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-800 bg-[#0B0F19] hover:border-indigo-500/50 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <span className="text-sm font-medium text-slate-200">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Features breakdown */}
          {demo.detailedCapabilities && demo.detailedCapabilities.length > 0 && (
            <div className="pt-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Architectural Highlights
              </h3>
              <div className="space-y-3">
                {demo.detailedCapabilities.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#0B0F19] border border-slate-800 text-sm"
                  >
                    <div className="font-semibold text-white mb-1">{item.title}</div>
                    <div className="text-slate-400 text-xs leading-relaxed">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture Isolation Note */}
          <div className="pt-6 text-xs text-slate-400 bg-[#080C14] p-4 rounded-xl border border-slate-800/80">
            <span className="font-semibold text-slate-200">Architecture Isolation:</span> This application is engineered as an independent, standalone business system. It does not share runtime dependencies, LocalStorage, or database schemas with other demos in the showroom.
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="p-5 sm:p-6 border-t border-slate-800 bg-[#0B0F19] flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            Close
          </button>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {demo.url && (
              <a
                href={demo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 hover:from-indigo-500 hover:via-blue-500 hover:to-purple-500 transition-all shadow-md shadow-indigo-600/20 active:scale-[0.99]"
              >
                <span>Launch Live Platform</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
