import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { HowWeBuild } from './pages/HowWeBuild';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { DemoDetail } from './pages/DemoDetail';
import { ContactModal } from './components/sections/ContactModal';
import { DemoProject } from './types/demo';
import { DEMOS_DATA } from './data/demos';
import { ScrollProgressIndicator } from './components/layout/ScrollProgressIndicator';

export const App: React.FC = () => {
  // Navigation & Page routing state
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname + window.location.search || '/';
  });

  // Contact Modal state
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [contactContext, setContactContext] = useState<string>('');

  // Handle URL changes & browser history
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname + window.location.search || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Direct demo lookup for /projects/:id or /demos/:id
  const getActiveDemoFromPath = (): DemoProject | null => {
    const pathname = currentPath.split('?')[0];
    const match = pathname.match(/^\/(?:projects|demos)\/([a-zA-Z0-9_-]+)$/);
    if (match && match[1]) {
      const demoId = match[1];
      return DEMOS_DATA.find((d) => d.id === demoId) || null;
    }
    return null;
  };

  const currentDemo = getActiveDemoFromPath();

  const handleOpenContact = (context: string = '') => {
    setContactContext(context);
    setIsContactOpen(true);
  };

  const basePath = currentPath.split('?')[0];

  // Determine which page component to render
  const renderCurrentPage = () => {
    if (currentDemo) {
      return (
        <DemoDetail
          demo={currentDemo}
          onBack={() => navigateTo('/projects')}
          onOpenContact={handleOpenContact}
          onNavigate={navigateTo}
        />
      );
    }

    switch (basePath) {
      case '/projects':
        return (
          <Projects
            onViewDetails={(demo) => navigateTo(`/projects/${demo.id}`)}
            onOpenContact={handleOpenContact}
            onNavigate={navigateTo}
          />
        );
      case '/how-we-build':
        return (
          <HowWeBuild
            onOpenContact={handleOpenContact}
            onNavigate={navigateTo}
          />
        );
      case '/about':
        return (
          <About
            onOpenContact={handleOpenContact}
            onNavigate={navigateTo}
          />
        );
      case '/contact':
        return (
          <Contact
            onNavigate={navigateTo}
          />
        );
      case '/':
      case '/home':
      default:
        return (
          <Home
            onOpenContact={handleOpenContact}
            onNavigate={navigateTo}
          />
        );
    }
  };

  const isContactPage = basePath === '/contact';
  const isDetailPage = !!currentDemo;

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0F172A] font-sans selection:bg-indigo-500 selection:text-white">
      {/* Scroll Progress Bar */}
      <ScrollProgressIndicator />

      {/* Top Navigation */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigateTo}
        onOpenContact={() => handleOpenContact('Navbar CTA')}
      />

      {/* Main Page View with smooth transition */}
      <main key={currentPath} className="flex-1 animate-fade-in">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenContact={handleOpenContact}
        variant={isContactPage || isDetailPage ? 'compact' : 'full'}
      />

      {/* Contact & Custom System Modal Overlay */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => {
          setIsContactOpen(false);
          setContactContext('');
        }}
        initialContext={contactContext}
      />
    </div>
  );
};

export default App;
