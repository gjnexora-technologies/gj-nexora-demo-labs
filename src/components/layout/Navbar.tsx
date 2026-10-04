import React, { useState, useEffect } from 'react';
import { Menu, X, Layers, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Handle scroll shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  const navLinks = [
    { path: '/projects', label: 'Projects' },
    { path: '/how-we-build', label: 'How We Build' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const isLinkActive = (path: string) => {
    if (path === '/projects') {
      return currentPath === '/projects' || currentPath.startsWith('/projects/') || currentPath.startsWith('/demos/');
    }
    return currentPath === path;
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm'
          : 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-2xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Brand Area */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
            <button
              onClick={() => handleNavClick('/')}
              className="flex items-center gap-2.5 sm:gap-3 text-left group focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-xl p-1 -ml-1 cursor-pointer"
              aria-label="GJ Nexora Demo Lab Home"
            >
              <div className="relative p-1 rounded-xl bg-slate-50 border border-slate-200 group-hover:border-indigo-400 transition-colors shadow-2xs flex-shrink-0">
                <img
                  src="/logo.gj.png"
                  alt="GJ Nexora Technologies Official Logo"
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="font-extrabold text-[#0F172A] tracking-tight text-base sm:text-lg leading-tight group-hover:text-indigo-600 transition-colors">
                    GJ NEXORA
                  </span>
                  <span className="px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-200/80 rounded-md">
                    DEMO LAB
                  </span>
                </div>
                <span className="text-[11px] sm:text-[12px] text-slate-500 font-medium leading-none mt-0.5 hidden xs:block">
                  Technologies Showroom
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-medium text-slate-600">
            {navLinks.map((link) => {
              const active = isLinkActive(link.path);
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`py-1 relative transition-colors duration-200 whitespace-nowrap focus:outline-none cursor-pointer ${
                    active
                      ? 'text-[#0F172A] font-semibold'
                      : 'hover:text-[#0F172A]'
                  }`}
                >
                  <span>{link.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-200 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Desktop Primary CTA */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={() => handleNavClick('/projects')}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 hover:from-indigo-500 hover:via-blue-500 hover:to-purple-500 transition-all shadow-md shadow-indigo-600/20 active:scale-[0.98] whitespace-nowrap cursor-pointer"
            >
              <Layers className="w-4 h-4" />
              <span>Explore Projects</span>
            </button>
          </div>

          {/* Mobile Menu Button (Comfortable 44px+ touch target) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 flex items-center justify-center rounded-xl text-slate-700 hover:text-[#0F172A] hover:bg-slate-100 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide-Down Panel */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-slate-200 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-4 animate-fade-in shadow-2xl"
        >
          <div className="flex flex-col divide-y divide-slate-100">
            {navLinks.map((link) => {
              const active = isLinkActive(link.path);
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`flex items-center justify-between text-left py-3.5 px-2 text-base font-semibold rounded-lg transition-colors cursor-pointer ${
                    active
                      ? 'text-indigo-600 bg-indigo-50/70'
                      : 'text-slate-800 active:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className={`w-4 h-4 ${active ? 'text-indigo-600' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>

          <div className="pt-2">
            <button
              onClick={() => handleNavClick('/projects')}
              className="w-full h-12 flex items-center justify-center gap-2 px-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 active:scale-[0.98] shadow-lg shadow-indigo-600/20 cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
