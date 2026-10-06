import React from 'react';

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

/**
 * DigitalEngineeringAtmosphere - Studio Lighting System
 * 
 * Replaces robotic circuit boards, glowing nodes, and HUD blueprint watermarks
 * with a sophisticated, restrained digital product studio atmosphere:
 * - Soft, diffuse peripheral ambient lighting
 * - Subtle tonal transitions
 * - Clean, distraction-free surfaces that prioritize real product interfaces
 */
export const DigitalEngineeringAtmosphere: React.FC<DigitalEngineeringAtmosphereProps> = ({
  variant = 'hero',
  className = '',
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
      {/* 1. SOFT AMBIENT STUDIO GLOWS */}
      {isHero && (
        <>
          {/* Top Center Subtle Warm/Indigo Ambient Light */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[400px] bg-gradient-to-b from-indigo-100/40 via-blue-50/30 to-transparent rounded-full blur-[120px]" />
          
          {/* Top Left Soft Tint */}
          <div className="absolute -top-16 -left-16 w-[400px] sm:w-[500px] h-[350px] bg-gradient-to-br from-indigo-100/30 via-slate-100/20 to-transparent rounded-full blur-[100px]" />
          
          {/* Top Right Soft Tint */}
          <div className="absolute -top-16 -right-16 w-[400px] sm:w-[500px] h-[350px] bg-gradient-to-bl from-purple-100/25 via-blue-50/20 to-transparent rounded-full blur-[100px]" />
        </>
      )}

      {isProjects && (
        <>
          <div className="absolute top-0 left-1/4 w-[600px] h-[350px] bg-indigo-100/30 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 right-10 w-[500px] h-[350px] bg-purple-100/20 rounded-full blur-[110px]" />
          <div className="absolute bottom-10 left-10 w-[450px] h-[300px] bg-blue-100/20 rounded-full blur-[100px]" />
        </>
      )}

      {isEcoIntel && (
        <>
          <div className="absolute -top-10 left-1/4 w-[600px] h-[380px] bg-emerald-100/30 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 right-10 w-[500px] h-[350px] bg-indigo-100/25 rounded-full blur-[110px]" />
        </>
      )}

      {isEcoReport && (
        <>
          <div className="absolute -top-10 right-1/4 w-[600px] h-[380px] bg-teal-100/30 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 left-10 w-[500px] h-[350px] bg-emerald-100/25 rounded-full blur-[110px]" />
        </>
      )}

      {isHowWeBuild && (
        <>
          <div className="absolute top-0 left-1/3 w-[600px] h-[350px] bg-indigo-100/25 rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-blue-100/20 rounded-full blur-[110px]" />
        </>
      )}

      {isAbout && (
        <>
          <div className="absolute top-0 left-1/4 w-[600px] h-[350px] bg-indigo-100/25 rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-1/3 w-[500px] h-[300px] bg-purple-100/20 rounded-full blur-[110px]" />
        </>
      )}

      {isContact && (
        <>
          <div className="absolute top-0 right-1/4 w-[550px] h-[350px] bg-indigo-100/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[450px] h-[300px] bg-blue-100/20 rounded-full blur-[100px]" />
        </>
      )}

      {isSection && (
        <>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-indigo-50/50 rounded-full blur-[90px]" />
        </>
      )}
    </div>
  );
};
