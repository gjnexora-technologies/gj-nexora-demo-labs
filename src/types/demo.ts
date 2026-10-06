export type DemoStatus = "live" | "coming-soon";

export type CategoryId =
  | 'all'
  | 'ai-intelligence'
  | 'sustainability-environment'
  | 'business-technology'
  | 'healthcare-veterinary'
  | 'healthcare-clinics'
  | 'fitness-wellness'
  | 'beauty-grooming'
  | 'fashion-boutique';

export interface ProjectCategory {
  id: CategoryId;
  name: string;
  slug: string;
  description?: string;
}

export type DemoCategory =
  | 'All'
  | 'AI & Intelligence'
  | 'Sustainability & Environment'
  | 'Business & Technology'
  | 'Healthcare & Veterinary'
  | 'Healthcare & Clinics'
  | 'Fitness & Wellness'
  | 'Beauty & Grooming'
  | 'Fashion & Boutique';

export interface ArchitectureNode {
  label: string;
  sub: string;
  type: 'client' | 'frontend' | 'api' | 'engine' | 'data';
}

export interface TechStackCategory {
  category: string;
  technologies: string[];
}

export interface ProjectModule {
  name: string;
  tag: string;
  description: string;
  highlights: string[];
}

export interface ProjectDocumentation {
  title: string;
  description: string;
  sections: string[];
  docType?: string;
  lastUpdated?: string;
  status: string;
}

export interface DemoProject {
  id: string;
  number: string;
  name: string;
  category: Exclude<DemoCategory, 'All'>;
  categoryId: Exclude<CategoryId, 'all'>;
  status: DemoStatus;
  url?: string | null;
  image?: string;
  preview?: string;
  tagline?: string;
  description: string;
  overview: string;
  challenge: string;
  approach: string;
  result: string;
  capabilities: string[];
  workflowSteps: string[];
  dataFlow: { step: string; title: string; description: string }[];
  architecture: {
    summary: string;
    nodes: ArchitectureNode[];
  };
  techStack: TechStackCategory[];
  modules: ProjectModule[];
  documentation: ProjectDocumentation;
  metrics?: { label: string; value: string }[];
  detailedCapabilities?: { title: string; desc: string }[];
  projectType?: string;
  industry?: string;
}

export interface FilterState {
  category: DemoCategory;
  categoryId: CategoryId;
  searchQuery: string;
}
