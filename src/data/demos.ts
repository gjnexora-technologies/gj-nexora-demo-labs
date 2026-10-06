import { DemoProject, DemoCategory, ProjectCategory } from '../types/demo';

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  {
    id: 'all',
    slug: 'all',
    name: 'All Projects',
    description: 'All live production platforms engineered and deployed by GJ Nexora Technologies.',
  },
  {
    id: 'ai-intelligence',
    slug: 'ai-intelligence',
    name: 'AI & Intelligence',
    description: 'Applied machine learning, algorithmic decision support, and intelligent forecasting suites.',
  },
  {
    id: 'sustainability-environment',
    slug: 'sustainability-environment',
    name: 'Sustainability & Environment',
    description: 'Digital environmental reporting, ecological telemetry, and compliance audit platforms.',
  },
  {
    id: 'business-technology',
    slug: 'business-technology',
    name: 'Business & Technology',
    description: 'Enterprise software architecture, digital products, automation suites, and business systems.',
  },
  {
    id: 'healthcare-veterinary',
    slug: 'healthcare-veterinary',
    name: 'Healthcare & Veterinary',
    description: 'Dedicated veterinary clinical portals, pet healthcare systems, and diagnostic appointment workflows.',
  },
  {
    id: 'healthcare-clinics',
    slug: 'healthcare-clinics',
    name: 'Healthcare & Clinics',
    description: 'Human-centered private clinic websites, specialist profiles, and patient care management.',
  },
  {
    id: 'fitness-wellness',
    slug: 'fitness-wellness',
    name: 'Fitness & Wellness',
    description: 'Performance training portals, personal coaching showcases, and gym membership platforms.',
  },
  {
    id: 'beauty-grooming',
    slug: 'beauty-grooming',
    name: 'Beauty & Grooming',
    description: 'Artisanal barber and styling studios, appointment systems, and visual grooming showcases.',
  },
  {
    id: 'fashion-boutique',
    slug: 'fashion-boutique',
    name: 'Fashion & Boutique',
    description: 'Editorial boutique showcases, curated fashion collections, and quiet-luxury styling experiences.',
  },
];

export const CATEGORIES: DemoCategory[] = [
  'All',
  'AI & Intelligence',
  'Sustainability & Environment',
  'Business & Technology',
  'Healthcare & Veterinary',
  'Healthcare & Clinics',
  'Fitness & Wellness',
  'Beauty & Grooming',
  'Fashion & Boutique',
];

export const getCategoryById = (id: string): ProjectCategory => {
  return (
    PROJECT_CATEGORIES.find((cat) => cat.id === id || cat.slug === id) ||
    PROJECT_CATEGORIES[0]
  );
};

export const getCategoryName = (categoryId: string): string => {
  const cat = PROJECT_CATEGORIES.find((c) => c.id === categoryId || c.slug === categoryId);
  return cat ? cat.name : 'All Projects';
};

export const DEMOS_DATA: DemoProject[] = [
  // =========================================================================
  // 01. ECO-INTEL
  // =========================================================================
  {
    id: 'eco-intel',
    number: '01',
    name: 'ECO-INTEL',
    category: 'AI & Intelligence',
    categoryId: 'ai-intelligence',
    status: 'live',
    url: 'https://eco-intel-frontend.vercel.app/',
    image: '/ECO-INTEL AI Smart Farming Dashboard.png',
    tagline: 'AI-Powered Agriculture Intelligence & Decision-Support Platform',
    description:
      'AI-powered agriculture platform that provides intelligent crop recommendations, waste analysis, carbon footprint insights, profit estimation, and manure guidance.',
    overview:
      'ECO-INTEL is an applied AI platform engineered to support modern agricultural decision-making. By consolidating soil analysis, climate parameters, waste recycling advisory, and carbon footprint telemetry into a unified digital dashboard, the platform empowers agricultural operators to optimize yield profitability while reducing ecological impact.',
    challenge:
      'Agricultural practitioners frequently face fragmented decision environments. Soil reports, climate forecasts, waste recycling options, and carbon impact metrics are siloed across disconnected tools or manual records, leading to delayed interventions and suboptimal crop resource allocation.',
    approach:
      'GJ Nexora Technologies engineered a centralized web intelligence suite. ECO-INTEL unites multi-factor analytical models with an intuitive desktop and mobile interface, ingesting key agro-environmental inputs to generate structured recommendations and financial forecasts in real time.',
    result:
      'A production-deployed agricultural intelligence platform that provides real-time crop suitability, organic waste recycling guidance, carbon footprint calculation, and yield profit estimations within seconds.',
    capabilities: [
      'AI-Powered Agriculture',
      'Crop Recommendation',
      'Waste Analysis',
      'Carbon Footprint',
      'Profit Estimation',
      'Manure Guidance',
    ],
    workflowSteps: [
      'Access Platform & Agricultural Dashboard',
      'Input Soil Chemistry, Nutrient & Climate Data',
      'Run Multi-Factor Crop Suitability Engine',
      'Analyze Organic Waste & Generate Custom Manure Plan',
      'Evaluate Carbon Footprint & Estimated Profit Forecast',
    ],
    dataFlow: [
      {
        step: '01',
        title: 'Input Capture',
        description: 'Operator inputs regional climate, rainfall, and soil parameters (N, P, K, pH).',
      },
      {
        step: '02',
        title: 'Analytical Ingestion',
        description: 'Frontend validates telemetry and dispatches structured payloads to intelligence services.',
      },
      {
        step: '03',
        title: 'Decision Processing',
        description: 'Multi-factor agronomic algorithms evaluate compatibility against crop models and emission factors.',
      },
      {
        step: '04',
        title: 'Actionable Delivery',
        description: 'Results render as actionable crop rankings, organic manure formulation recipes, and profit graphs.',
      },
    ],
    architecture: {
      summary:
        'A decoupled cloud client architecture utilizing React TypeScript on Vercel CDN with analytical modeling algorithms for agro-climatic decision support.',
      nodes: [
        { label: 'Agricultural Operator', sub: 'Web / Tablet Interface', type: 'client' },
        { label: 'Interactive Dashboard', sub: 'React, TypeScript & Tailwind', type: 'frontend' },
        { label: 'Analytical Engine', sub: 'Agronomic Suitability Models', type: 'api' },
        { label: 'Carbon & Waste Evaluator', sub: 'Recycling & Emissions Logic', type: 'engine' },
        { label: 'Cloud CDN Infrastructure', sub: 'Vercel Edge Network', type: 'data' },
      ],
    },
    techStack: [
      {
        category: 'Client Architecture',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Lucide Vector System'],
      },
      {
        category: 'Analytical Services',
        technologies: ['Crop Suitability Models', 'NPK Soil Evaluation Matrix', 'Emission Calculation Tables'],
      },
      {
        category: 'Cloud & CDN',
        technologies: ['Vercel Edge Hosting', 'Automated Production CI/CD', 'HTTPS & Edge Caching'],
      },
      {
        category: 'Data & Workflows',
        technologies: ['Agro-Climatic Parameters', 'Organic Manure Formulations', 'Financial Yield Modeling'],
      },
    ],
    modules: [
      {
        name: 'Intelligent Crop Recommendation Suite',
        tag: 'Agronomic AI',
        description:
          'Evaluates soil nitrogen, phosphorus, potassium, pH, and precipitation against crop cultivation requirements.',
        highlights: [
          'Multi-parameter soil suitability matrix',
          'Confidence-ranked crop candidates',
          'Seasonal rainfall and temperature correlation',
        ],
      },
      {
        name: 'Organic Waste & Manure Advisory',
        tag: 'Sustainability Engine',
        description:
          'Provides step-by-step guidance on transforming agricultural byproducts and animal waste into nutrient-dense organic fertilizer.',
        highlights: [
          'Byproduct categorization recipes',
          'Composting cycle estimates',
          'Chemical fertilizer replacement strategies',
        ],
      },
      {
        name: 'Carbon Impact & Profit Estimator',
        tag: 'Financial & ESG Analytics',
        description:
          'Estimates projected agricultural yield returns alongside carbon footprint offsets for sustainable farming practices.',
        highlights: [
          'Yield margin projections',
          'Carbon emission baseline calculations',
          'ROI estimates for organic transitions',
        ],
      },
      {
        name: 'Agricultural Telemetry Dashboard',
        tag: 'Visualization Hub',
        description:
          'Real-time overview consolidating farm inputs, environmental conditions, and actionable intervention checklists.',
        highlights: [
          'Cross-device responsive ergonomics',
          'Interactive input validation',
          'Instant calculation feedback',
        ],
      },
    ],
    documentation: {
      title: 'ECO-INTEL System Specification & Architectural Reference',
      description:
        'Comprehensive documentation covering the agro-intelligence algorithms, client validation models, and production CDN configuration.',
      sections: [
        'System Architecture & Core Design Patterns',
        'Soil Chemistry & Agronomic Algorithms',
        'Waste Recycling & Organic Manure Calculation Matrices',
        'Carbon Offsetting Models & Revenue Estimations',
        'Production Deployment on Vercel Edge Network',
      ],
      docType: 'Technical Architecture & Algorithmic Blueprint',
      lastUpdated: 'October 2026',
      status: 'Production Verified',
    },
    metrics: [
      { label: 'Intelligence Model', value: 'Multi-Factor AI' },
      { label: 'Domain Focus', value: 'Agriculture' },
      { label: 'Platform Status', value: 'Live Deployment' },
    ],
    detailedCapabilities: [
      {
        title: 'Intelligent Crop Recommendation',
        desc: 'Data-driven crop suitability suggestions based on soil parameters, weather conditions, and seasonal factors.',
      },
      {
        title: 'Waste & Manure Advisory',
        desc: 'Practical guidance for agricultural waste utilization and organic manure optimization.',
      },
      {
        title: 'Carbon Footprint & Profit Estimation',
        desc: 'Holistic environmental impact metrics paired with agricultural profit forecasting.',
      },
    ],
    projectType: 'Applied AI / Agricultural Intelligence Platform',
    industry: 'Agriculture & Intelligence',
  },

  // =========================================================================
  // 02. ECO REPORT
  // =========================================================================
  {
    id: 'eco-report',
    number: '02',
    name: 'Eco Report',
    category: 'Sustainability & Environment',
    categoryId: 'sustainability-environment',
    status: 'live',
    url: 'https://eco-report-7dab1.web.app/',
    image: '/Eco Report_ Greener Communities Dashboard.png',
    tagline: 'Digital Environmental Reporting & Sustainability Platform',
    description:
      'A digital environmental reporting platform designed to support sustainability-focused reporting, monitoring, and environmental data workflows.',
    overview:
      'Eco Report is a digital sustainability platform designed to streamline environmental reporting, ecological monitoring, and community impact tracking. The application provides organizations with an intuitive digital workflow to record environmental observations, generate structured sustainability reports, and maintain compliance transparency.',
    challenge:
      'Traditional environmental auditing and community ecological reporting often depend on paper forms, dispersed emails, and manual collation. This results in delayed incident reporting, lack of verifiable audit trails, and difficulty in aggregating environmental metrics over time.',
    approach:
      'GJ Nexora Technologies built an agile, cloud-backed web platform focused on frictionless data entry, instant categorization, real-time database synchronization, and structured reporting workflows accessible from any modern browser or device.',
    result:
      'A live, production-ready reporting environment that centralizes environmental logs, tracks remediation workflows, and provides clear visibility into sustainability milestones across community initiatives.',
    capabilities: [
      'Environmental Reporting',
      'Sustainability Data',
      'Monitoring Workflows',
      'Digital Audits',
      'Compliance Tracking',
      'Data Visualization',
    ],
    workflowSteps: [
      'Access Eco Report Web Application',
      'Log Environmental Observation or Sustainability Metric',
      'Categorize Incident / Metric & Attach Verification Data',
      'Real-Time Cloud Synchronization & Audit Record Creation',
      'Generate Standardized Sustainability Summary & Report',
    ],
    dataFlow: [
      {
        step: '01',
        title: 'Observation Capture',
        description: 'User records localized environmental observations, metric readings, or community reports.',
      },
      {
        step: '02',
        title: 'Validation & Categorization',
        description: 'Application sanitizes records, applies category tags, and structures metadata.',
      },
      {
        step: '03',
        title: 'Cloud Persistence',
        description: 'Data syncs securely with Firebase cloud infrastructure with real-time replication.',
      },
      {
        step: '04',
        title: 'Dashboard Aggregation',
        description: 'Real-time telemetry aggregates records into searchable audit directories and charts.',
      },
    ],
    architecture: {
      summary:
        'Serverless web application architecture leveraging React with Firebase Cloud Services for rapid data capture, real-time synchronization, and global CDN delivery.',
      nodes: [
        { label: 'Environmental Officer / User', sub: 'Web Browser / Mobile Client', type: 'client' },
        { label: 'Web Application Client', sub: 'React & Component UI', type: 'frontend' },
        { label: 'Firebase Services', sub: 'Authentication & Cloud Logic', type: 'api' },
        { label: 'Real-Time Database', sub: 'Cloud Firestore / Realtime DB', type: 'engine' },
        { label: 'Cloud Storage & Hosting', sub: 'Firebase Global CDN Hosting', type: 'data' },
      ],
    },
    techStack: [
      {
        category: 'Frontend Engineering',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive UI Framework'],
      },
      {
        category: 'Cloud Backend & Database',
        technologies: ['Firebase Cloud Platform', 'Cloud Firestore / Realtime Database', 'Firebase Authentication'],
      },
      {
        category: 'Infrastructure & CDN',
        technologies: ['Firebase Web Hosting', 'Google Cloud Platform CDN', 'SSL / TLS Encryption'],
      },
      {
        category: 'Workflows & Auditing',
        technologies: ['Categorized Incident Logging', 'Real-Time Sync Listeners', 'Standardized PDF/Export Workflows'],
      },
    ],
    modules: [
      {
        name: 'Environmental Incident & Metric Logger',
        tag: 'Data Capture',
        description:
          'Frictionless digital interface for recording ecological observations, energy metrics, and status updates.',
        highlights: [
          'Structured categorization',
          'Timestamped audit trails',
          'Observation attachment support',
        ],
      },
      {
        name: 'Sustainability Report Generator',
        tag: 'Reporting & Compliance',
        description:
          'Standardized reporting views tailored for organizational stakeholders and environmental auditing bodies.',
        highlights: [
          'Compliance summary views',
          'Exportable audit records',
          'Milestone progress tracking',
        ],
      },
      {
        name: 'Compliance & Audit Directory',
        tag: 'Audit Trail',
        description:
          'Chronological archive of environmental submissions with search, filter, and verification status indicators.',
        highlights: [
          'Verification status badges',
          'Multi-filter search index',
          'Historical archive access',
        ],
      },
      {
        name: 'Community Impact Metrics',
        tag: 'Analytics & Visualization',
        description:
          'Aggregated indicators reflecting localized sustainability actions and ecological progress.',
        highlights: [
          'Community-level KPI summary',
          'Interactive progress metrics',
          'Action item prioritization',
        ],
      },
    ],
    documentation: {
      title: 'Eco Report Architecture & Deployment Specification',
      description:
        'Technical documentation detailing Firebase integration schemas, client-side state models, reporting data workflows, and hosting configurations.',
      sections: [
        'Platform Architecture & Serverless Design',
        'Firebase Schema, Security Rules & Authentication Flow',
        'Reporting Data Ingestion & Audit Lifecycle',
        'UI Workflow & Mobile Ergonomics',
        'Production Deployment on Firebase Hosting',
      ],
      docType: 'Technical Architecture & Deployment Guide',
      lastUpdated: 'October 2026',
      status: 'Production Verified',
    },
    metrics: [
      { label: 'Platform Scope', value: 'Environmental Audit' },
      { label: 'Data Model', value: 'Real-Time Sync' },
      { label: 'Platform Status', value: 'Live Deployment' },
    ],
    detailedCapabilities: [
      {
        title: 'Sustainability-Focused Reporting',
        desc: 'Structured digital reports for environmental metrics, compliance oversight, and sustainability audits.',
      },
      {
        title: 'Environmental Data Monitoring',
        desc: 'Organized data collection workflows to track ecological indicators and reporting timelines.',
      },
    ],
    projectType: 'Sustainability Platform / ESG Reporting',
    industry: 'Sustainability & Environment',
  },

  // =========================================================================
  // 03. IRONCORE FITNESS
  // =========================================================================
  {
    id: 'ironcore-fitness',
    number: '03',
    name: 'IronCore Fitness',
    category: 'Fitness & Wellness',
    categoryId: 'fitness-wellness',
    status: 'live',
    url: 'https://ironcore-fitness-smoky.vercel.app/',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1400&auto=format&fit=crop',
    tagline: 'High-Performance Fitness, Training Programs & Gym Membership Platform',
    description:
      'Premium fitness website showcasing training programs, personal coaching, trainers, memberships, gallery, and free-trial booking.',
    overview:
      'IronCore Fitness is a premium fitness and gym website designed around training programs, coaching, memberships, and the overall member experience. The experience presents strength training, personal training, functional training, HIIT, trainers, membership plans, and a visual gym gallery in a strong fitness-focused interface.',
    challenge:
      'Modern fitness centers need a digital presence that conveys high performance, builds trust with prospective members, clearly segments workout disciplines, and simplifies trial class bookings across mobile and desktop devices.',
    approach:
      'GJ Nexora Technologies engineered a high-impact digital web experience combining strong typography, dynamic visual galleries, structured program breakdowns, and frictionless appointment / trial pass conversion funnels.',
    result:
      'A production-ready fitness platform delivering seamless program discovery, coach profiles, membership tier comparisons, and instant trial booking capabilities.',
    capabilities: [
      'Fitness Program Presentation',
      'Personal Training Showcase',
      'Trainer Profiles',
      'Membership Plans',
      'Training Program Discovery',
      'Gym Gallery',
      'Free Trial CTA',
      'Responsive Experience',
    ],
    workflowSteps: [
      'Discover Gym Philosophy & State-of-the-Art Facilities',
      'Explore Specialized Training Programs (Strength, HIIT, Functional)',
      'Review Certified Trainer Profiles & Specializations',
      'Compare Transparent Membership Tiers & Inclusions',
      'Claim Free Day Pass or Book Personal Coaching Session',
    ],
    dataFlow: [
      {
        step: '01',
        title: 'Program Discovery',
        description: 'Prospective member explores strength, cardio, functional, and group training curricula.',
      },
      {
        step: '02',
        title: 'Trainer & Facility Review',
        description: 'User evaluates certified coach credentials, equipment amenities, and studio photo galleries.',
      },
      {
        step: '03',
        title: 'Plan Selection',
        description: 'Customer reviews structured tier pricing (Monthly, Quarterly, Annual) with transparent benefits.',
      },
      {
        step: '04',
        title: 'Booking Conversion',
        description: 'Client submits trial pass details with immediate verification and scheduling confirmation.',
      },
    ],
    architecture: {
      summary:
        'Responsive single-page application built on modern web standards with optimized media assets, modular component design, and high-conversion booking workflows.',
      nodes: [
        { label: 'Gym Member / Visitor', sub: 'Mobile & Desktop Client', type: 'client' },
        { label: 'Interactive Fitness UI', sub: 'React, Vite & Tailwind CSS', type: 'frontend' },
        { label: 'Booking & Ingestion Flow', sub: 'Client Validation & Schedule API', type: 'api' },
        { label: 'Media & Gallery Engine', sub: 'Optimized Image CDN Pipeline', type: 'engine' },
        { label: 'Cloud Edge Hosting', sub: 'Vercel Global Network', type: 'data' },
      ],
    },
    techStack: [
      {
        category: 'Frontend Engineering',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Lucide Vector System'],
      },
      {
        category: 'Interaction & Media',
        technologies: ['Responsive Visual Carousel', 'Dynamic Gallery Grid', 'Smooth Scroll Interaction'],
      },
      {
        category: 'Cloud & Infrastructure',
        technologies: ['Vercel Edge Hosting', 'Automated CI/CD', 'SSL Encryption'],
      },
      {
        category: 'Conversion & Forms',
        technologies: ['Free Trial Lead Generation', 'Tier Pricing Matrix', 'Trainer Profile Modals'],
      },
    ],
    modules: [
      {
        name: 'Training Programs Hub',
        tag: 'Curriculum Showcase',
        description:
          'Deep dives into Strength Conditioning, HIIT, Functional Movement, and Personalized Coaching routines.',
        highlights: [
          'Detailed program breakdowns',
          'Intensity & duration indicators',
          'Target fitness outcome tags',
        ],
      },
      {
        name: 'Elite Trainer Profiles',
        tag: 'Team Directory',
        description:
          'Spotlight on certified personal trainers, their certifications, philosophy, and booking availability.',
        highlights: [
          'Certified credentials showcase',
          'Specialization badges',
          'Direct coach contact triggers',
        ],
      },
      {
        name: 'Membership Tier Matrix',
        tag: 'Pricing Engine',
        description:
          'Clear side-by-side comparison of membership plans with detailed feature checklists and monthly/annual toggles.',
        highlights: [
          'Transparent price points',
          'Included amenity checklists',
          'Highlighted recommended tier',
        ],
      },
      {
        name: 'Trial Pass & Scheduling CTA',
        tag: 'Lead Funnel',
        description:
          'Fast lead-capture modal enabling prospective members to secure an introductory workout pass.',
        highlights: [
          'Zero-friction form fields',
          'Instant client validation',
          'Mobile-optimized touch targets',
        ],
      },
    ],
    documentation: {
      title: 'IronCore Fitness Technical & Brand Implementation',
      description:
        'Technical overview detailing responsive layout ergonomics, asset performance optimization, and membership funnel architecture.',
      sections: [
        'Responsive Design System & Fitness Typography',
        'Component Architecture & Program Directory',
        'Membership Pricing Matrix State Management',
        'Lead Capture Workflow & Validation Rules',
        'Production Deployment on Vercel Edge CDN',
      ],
      docType: 'Production Showcase & Engineering Guide',
      lastUpdated: 'October 2026',
      status: 'Production Verified',
    },
    metrics: [
      { label: 'Industry', value: 'Fitness & Wellness' },
      { label: 'Architecture', value: 'Single-Page App' },
      { label: 'Platform Status', value: 'Live Deployment' },
    ],
    detailedCapabilities: [
      {
        title: 'Training Program Presentation',
        desc: 'Comprehensive showcases for strength, HIIT, bodybuilding, and functional fitness programs.',
      },
      {
        title: 'Trainer & Studio Profiles',
        desc: 'Engaging visual presentation of certified instructors, facilities, and workout equipment.',
      },
      {
        title: 'Membership & Trial Booking',
        desc: 'Conversion-optimized workflows for tier selection and free trial session appointments.',
      },
    ],
    projectType: 'Industry Website / Business Website',
    industry: 'Fitness & Wellness',
  },

  // =========================================================================
  // 04. TECH SOLUTIONS
  // =========================================================================
  {
    id: 'tech-solutions',
    number: '04',
    name: 'Tech Solutions',
    category: 'Business & Technology',
    categoryId: 'business-technology',
    status: 'live',
    url: 'https://tech-solutions-portfolio.vercel.app/',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop',
    tagline: 'Enterprise Software Engineering, AI Systems & Automation Portfolio',
    description:
      'Corporate technology website presenting software development, business systems, AI solutions, automation, analytics, and digital products.',
    overview:
      'Tech Solutions is a corporate technology portfolio designed to communicate digital product development and business technology capabilities. The website presents software development, AI solutions, business systems, automation, analytics, cloud solutions, industries, technology stack, development process, and representative product showcases.',
    challenge:
      'B2B technology consultancies struggle to effectively communicate complex technical capabilities—from machine learning pipelines to cloud ERP integrations—in an articulate, elegant narrative that engages enterprise executives and technical stakeholders alike.',
    approach:
      'GJ Nexora Technologies built a sleek, authoritative corporate digital portfolio structuring multi-domain engineering services, technological stack breakdowns, enterprise case studies, and transparent development lifecycle methodologies.',
    result:
      'A state-of-the-art corporate technology platform showcasing end-to-end digital engineering services, interactive stack directories, and enterprise consultation funnels.',
    capabilities: [
      'Corporate Technology Presentation',
      'Software Service Showcase',
      'Business Systems Presentation',
      'AI Solution Showcase',
      'Automation Services',
      'Analytics Services',
      'Technology Stack Presentation',
      'Development Process Storytelling',
    ],
    workflowSteps: [
      'Explore Comprehensive Enterprise Engineering Capabilities',
      'Inspect Applied AI, Cloud & Automation Service Suites',
      'Review Multi-Tier Modern Technology Stack Architecture',
      'Walk Through the 5-Stage Disciplined Development Lifecycle',
      'Schedule Enterprise Architecture Consultation',
    ],
    dataFlow: [
      {
        step: '01',
        title: 'Capability Ingestion',
        description: 'Enterprise visitor browses structured service pillars (AI, Cloud, Systems, Automation).',
      },
      {
        step: '02',
        title: 'Stack & Process Deep Dive',
        description: 'Technical lead examines stack technologies, process milestones, and case studies.',
      },
      {
        step: '03',
        title: 'Industry Alignment',
        description: 'Stakeholder evaluates domain-specific solutions (FinTech, Healthcare, Logistics, Retail).',
      },
      {
        step: '04',
        title: 'Consultation Pipeline',
        description: 'User submits project scoping parameters for technical evaluation and proposal generation.',
      },
    ],
    architecture: {
      summary:
        'Enterprise-grade corporate web application featuring modular service catalogs, interactive tech stack matrices, and secure lead orchestration.',
      nodes: [
        { label: 'Enterprise Decision Maker', sub: 'Desktop / Corporate Client', type: 'client' },
        { label: 'Corporate Tech Portal', sub: 'React, TypeScript & Modern CSS', type: 'frontend' },
        { label: 'Service Catalog Engine', sub: 'Dynamic Capability Router', type: 'api' },
        { label: 'Process & Case Visualizer', sub: 'Interactive Architecture Flow', type: 'engine' },
        { label: 'Production Cloud CDN', sub: 'Vercel Edge Infrastructure', type: 'data' },
      ],
    },
    techStack: [
      {
        category: 'Client Architecture',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Animation Patterns'],
      },
      {
        category: 'Showcase Domains',
        technologies: ['Artificial Intelligence', 'Cloud Native Systems', 'Business Automation', 'Data Analytics'],
      },
      {
        category: 'Infrastructure & CDN',
        technologies: ['Vercel Edge Network', 'Automated CI/CD Pipelines', 'Global SSL / TLS'],
      },
      {
        category: 'Enterprise Storytelling',
        technologies: ['Development Lifecycle Flow', 'Industry Case Studies', 'Architecture Diagrams'],
      },
    ],
    modules: [
      {
        name: 'Enterprise Service Matrix',
        tag: 'Core Capabilities',
        description:
          'Structured breakdown of Custom Software Engineering, AI Integration, Cloud Migration, and Workflow Automation.',
        highlights: [
          'Granular service descriptions',
          'Key technology deliverables',
          'Enterprise business benefits',
        ],
      },
      {
        name: 'Modern Tech Stack Showcase',
        tag: 'Engineering Depth',
        description:
          'Categorized matrix covering Languages, Frameworks, Cloud Providers, Databases, and DevOps tooling.',
        highlights: [
          'Frontend, Backend & Mobile tech',
          'AI/ML and Data frameworks',
          'Cloud infrastructure ecosystem',
        ],
      },
      {
        name: 'Development Lifecycle Methodology',
        tag: 'Engineering Process',
        description:
          'Step-by-step presentation of Discovery, Architecture, Agile Sprints, Quality Assurance, and Cloud Launch.',
        highlights: [
          'Milestone deliverable definitions',
          'Rigorous QA & security stages',
          'Post-deployment support models',
        ],
      },
      {
        name: 'Enterprise Scoping & Contact Hub',
        tag: 'Inquiry Funnel',
        description:
          'Structured project scoping workflow for enterprise inquiries and technical consultations.',
        highlights: [
          'Multi-domain requirement selection',
          'Direct contact pathways',
          'Prompt response protocol',
        ],
      },
    ],
    documentation: {
      title: 'Tech Solutions Corporate Portal Blueprint',
      description:
        'Comprehensive documentation on corporate technical narrative structure, service taxonomy, and deployment architecture.',
      sections: [
        'Corporate Identity & Capability Taxonomy',
        'Component Architecture & Service Modules',
        'Tech Stack & Engineering Lifecycle Visualizers',
        'Enterprise Lead Capture & Validation Protocol',
        'Production Deployment on Global Edge CDN',
      ],
      docType: 'Corporate Portfolio & Architecture Spec',
      lastUpdated: 'October 2026',
      status: 'Production Verified',
    },
    metrics: [
      { label: 'Focus Area', value: 'Enterprise Tech' },
      { label: 'Capabilities', value: 'AI, Cloud & Apps' },
      { label: 'Platform Status', value: 'Live Deployment' },
    ],
    detailedCapabilities: [
      {
        title: 'Software & Cloud Engineering',
        desc: 'Custom enterprise software, microservices, cloud infrastructure, and robust API development.',
      },
      {
        title: 'Applied AI & Automation',
        desc: 'Machine learning integrations, workflow automation, and intelligent data analytics systems.',
      },
      {
        title: 'Strategic Digital Consulting',
        desc: 'Architectural roadmaps, technology modernization, and digital transformation strategy.',
      },
    ],
    projectType: 'Corporate Website / Technology Portfolio',
    industry: 'Business & Technology',
  },

  // =========================================================================
  // 05. RIVERDALE VETERINARY CLINIC
  // =========================================================================
  {
    id: 'riverdale-veterinary-clinic',
    number: '05',
    name: 'Riverdale Veterinary Clinic',
    category: 'Healthcare & Veterinary',
    categoryId: 'healthcare-veterinary',
    status: 'live',
    url: 'https://veterinary-clinic-portfolio.vercel.app/',
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=1400&auto=format&fit=crop',
    tagline: 'Compassionate Pet Healthcare, Diagnostics & Clinical Appointment System',
    description:
      'Pet-care website presenting veterinary services, diagnostics, wellness, grooming, doctors, pet resources, and appointment booking.',
    overview:
      'Riverdale Veterinary Clinic is a warm, pet-friendly healthcare website designed around veterinary care and pet wellness. It presents medical services, vaccination, diagnostics, surgery, dental care, grooming, wellness information, veterinary profiles, pet categories, gallery content, and appointment pathways.',
    challenge:
      'Pet owners require an empathetic, crystal-clear digital portal where they can quickly understand available clinical procedures, verify veterinarian credentials, access preventative wellness tips, and book urgent or routine appointments without friction.',
    approach:
      'GJ Nexora Technologies developed a compassionate, highly accessible pet-care platform balancing medical rigor with warmth, featuring dedicated animal-specific care guides, veterinarian showcases, and intuitive multi-service booking workflows.',
    result:
      'A production healthcare website facilitating comprehensive pet wellness education, clinic transparency, and reliable appointment booking across all device form factors.',
    capabilities: [
      'Veterinary Service Presentation',
      'Pet Wellness Information',
      'Veterinary Team Profiles',
      'Pet Category Navigation',
      'Grooming Service Presentation',
      'Diagnostics & Surgery Info',
      'Pet Gallery',
      'Appointment Booking CTA',
      'Responsive Healthcare Experience',
    ],
    workflowSteps: [
      'Explore Animal Care Specializations (Dogs, Cats, Exotic Pets)',
      'Review Medical, Surgical, Dental & Diagnostic Services',
      'Learn About Certified Veterinary Doctors & Care Staff',
      'Access Preventative Health Tips & Vaccination Guides',
      'Book Online Appointment or Request Emergency Consultation',
    ],
    dataFlow: [
      {
        step: '01',
        title: 'Pet Care Selection',
        description: 'Pet owner selects species category and relevant medical concern (Wellness, Surgery, Grooming).',
      },
      {
        step: '02',
        title: 'Doctor & Facility Validation',
        description: 'User reviews specialized veterinary surgeons, diagnostic equipment, and clinic hygiene standards.',
      },
      {
        step: '03',
        title: 'Service Detail & Health Guide',
        description: 'Client accesses pre-visit instructions, dietary advice, and routine vaccination checklists.',
      },
      {
        step: '04',
        title: 'Appointment Confirmation',
        description: 'Owner schedules preferred visit date and time with patient details and confirmation alert.',
      },
    ],
    architecture: {
      summary:
        'Warm, accessible healthcare web application engineered with modular service directories, pet category navigators, and streamlined appointment scheduling.',
      nodes: [
        { label: 'Pet Parent / Client', sub: 'Mobile & Desktop Interface', type: 'client' },
        { label: 'Veterinary Web Portal', sub: 'React, TypeScript & Tailwind CSS', type: 'frontend' },
        { label: 'Appointment Scheduling Flow', sub: 'Client Validation & Time Slot Engine', type: 'api' },
        { label: 'Pet Health Knowledge Base', sub: 'Curated Wellness & Diagnostic Content', type: 'engine' },
        { label: 'High Availability CDN', sub: 'Vercel Edge Global Hosting', type: 'data' },
      ],
    },
    techStack: [
      {
        category: 'Frontend Engineering',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Accessible Color Tokens'],
      },
      {
        category: 'Clinical Showcase',
        technologies: ['Pet Category System', 'Veterinary Staff Directory', 'Emergency Contact Bar'],
      },
      {
        category: 'Cloud & Hosting',
        technologies: ['Vercel Edge Network', 'Automated CI/CD', 'SSL Security'],
      },
      {
        category: 'User Experience',
        technologies: ['Interactive Pet Gallery', 'Service Accordions', 'Appointment Booking Modals'],
      },
    ],
    modules: [
      {
        name: 'Clinical Services Directory',
        tag: 'Medical Treatments',
        description:
          'Detailed information on Routine Checkups, Vaccinations, Surgery, Diagnostics, Dental Care, and Grooming.',
        highlights: [
          'Pre-procedure preparation guides',
          'Transparent diagnostic capabilities',
          'Post-treatment recovery overviews',
        ],
      },
      {
        name: 'Veterinary Team & Specialists',
        tag: 'Doctor Profiles',
        description:
          'Profiles of licensed veterinarians, surgical specialists, and compassionate veterinary nurses.',
        highlights: [
          'Veterinary board certifications',
          'Areas of clinical passion',
          'Direct consultation booking',
        ],
      },
      {
        name: 'Pet Health & Wellness Library',
        tag: 'Preventative Care',
        description:
          'Curated educational content on seasonal pet care, nutrition guidelines, and early symptom detection.',
        highlights: [
          'Species-specific care checklists',
          'Vaccination timeline guides',
          'Emergency symptom red-flags',
        ],
      },
      {
        name: 'Appointment & Emergency Hub',
        tag: 'Booking Funnel',
        description:
          'Direct booking system for wellness visits, specialized surgeries, and 24/7 urgent care access.',
        highlights: [
          'Instant emergency telephone hotlines',
          'Flexible date & time scheduling',
          'Pet history capture fields',
        ],
      },
    ],
    documentation: {
      title: 'Riverdale Veterinary Clinic Platform Documentation',
      description:
        'Architectural and design documentation detailing accessible healthcare UI standards, appointment workflows, and deployment setups.',
      sections: [
        'Healthcare UI Design System & Pet-Friendly Palette',
        'Service Taxonomy & Veterinary Team Directory',
        'Educational Content & Gallery Architecture',
        'Appointment Booking & Emergency Action Routing',
        'Production Deployment on Vercel Edge CDN',
      ],
      docType: 'Clinical Platform & Implementation Blueprint',
      lastUpdated: 'October 2026',
      status: 'Production Verified',
    },
    metrics: [
      { label: 'Domain', value: 'Veterinary Healthcare' },
      { label: 'Services', value: 'Medical, Surgery & Spa' },
      { label: 'Platform Status', value: 'Live Deployment' },
    ],
    detailedCapabilities: [
      {
        title: 'Comprehensive Veterinary Services',
        desc: 'Clear presentation of preventative wellness, surgical care, diagnostic imaging, and pet dental.',
      },
      {
        title: 'Veterinary Team Credibility',
        desc: 'Engaging doctor biographies, certifications, and clinical care philosophies.',
      },
      {
        title: 'Streamlined Appointment Booking',
        desc: 'Accessible scheduling funnels tailored for both routine checkups and urgent animal care.',
      },
    ],
    projectType: 'Healthcare Website',
    industry: 'Veterinary / Pet Healthcare',
  },

  // =========================================================================
  // 06. MERIDIAN CLINIC
  // =========================================================================
  {
    id: 'meridian-clinic',
    number: '06',
    name: 'Meridian Clinic',
    category: 'Healthcare & Clinics',
    categoryId: 'healthcare-clinics',
    status: 'live',
    url: 'https://clinic-portfolio-sandy.vercel.app/',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1400&auto=format&fit=crop',
    tagline: 'Human-Centered Healthcare, Specialist Care & Preventive Health Platform',
    description:
      'Calm, human-centered clinic website presenting healthcare services, specialists, wellness programs, facilities, health insights, and appointment booking.',
    overview:
      'Meridian Clinic is a modern private healthcare website designed around a calm and human patient experience. The website presents primary care, heart and blood services, wellness and sleep care, featured health checks, doctors, facilities, health insights, and an appointment booking journey.',
    challenge:
      'Medical websites often overwhelm patients with dense clinical jargon, cold color schemes, and convoluted navigation during stressful healthcare moments. Patients need a tranquil, reassuring digital environment that inspires trust and simplifies specialist selection.',
    approach:
      'GJ Nexora Technologies engineered a calming, human-first digital healthcare portal featuring peaceful aesthetics, clear doctor directories, transparent health check packages, and structured appointment booking pathways.',
    result:
      'A refined clinical web platform providing effortless discovery of primary care, cardiology, wellness programs, doctor credentials, and direct consultation scheduling.',
    capabilities: [
      'Healthcare Service Presentation',
      'Doctor Profiles',
      'Appointment Booking Interface',
      'Health Check Promotion',
      'Wellness Service Presentation',
      'Facility Showcase',
      'Patient Journey Storytelling',
      'Health Insights Section',
      'Responsive Healthcare Experience',
    ],
    workflowSteps: [
      'Discover Clinic Philosophy & Serene Treatment Environment',
      'Explore Specialist Services (Primary Care, Cardiology, Wellness, Sleep)',
      'Review Comprehensive Preventive Health Check Packages',
      'Examine Doctor Credentials, Specializations & Hospital Affiliations',
      'Book Seamless Clinical Consultation or Diagnostic Test',
    ],
    dataFlow: [
      {
        step: '01',
        title: 'Department Browsing',
        description: 'Patient selects medical specialty (General Medicine, Cardiology, Sleep Health, Preventive).',
      },
      {
        step: '02',
        title: 'Physician Selection',
        description: 'User evaluates consultant doctor qualifications, clinical experience, and patient reviews.',
      },
      {
        step: '03',
        title: 'Health Package Evaluation',
        description: 'Patient reviews tailored screening packages (Executive, Senior, Cardiac, Complete Wellness).',
      },
      {
        step: '04',
        title: 'Secure Booking Intake',
        description: 'Patient enters appointment preferences with automated slot validation and reminder dispatch.',
      },
    ],
    architecture: {
      summary:
        'Tranquil, high-performance healthcare platform built with modular clinical service trees, practitioner profiles, and patient appointment orchestration.',
      nodes: [
        { label: 'Patient / Healthcare Consumer', sub: 'Mobile & Web Client', type: 'client' },
        { label: 'Clinical Frontend Portal', sub: 'React, TypeScript & Tailwind CSS', type: 'frontend' },
        { label: 'Appointment Routing Engine', sub: 'Slot Validation & Patient Booking Flow', type: 'api' },
        { label: 'Health Knowledge Matrix', sub: 'Clinical Articles & Screening Insights', type: 'engine' },
        { label: 'Global Edge Cloud', sub: 'Vercel Edge Network', type: 'data' },
      ],
    },
    techStack: [
      {
        category: 'Client Architecture',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Accessible Typography Tokens'],
      },
      {
        category: 'Clinical Experience',
        technologies: ['Specialist Profiles', 'Health Package Directory', 'Calm Color Harmonies'],
      },
      {
        category: 'Cloud & Security',
        technologies: ['Vercel Edge Hosting', 'End-to-End HTTPS Encryption', 'Automated CI/CD'],
      },
      {
        category: 'Patient Funnel',
        technologies: ['Consultation Booking Workflow', 'Facility Gallery', 'Preventive Health Insights'],
      },
    ],
    modules: [
      {
        name: 'Medical Specializations Hub',
        tag: 'Clinical Care',
        description:
          'Structured presentation of Primary Care, Cardiovascular Medicine, Preventive Diagnostics, and Sleep Disorders.',
        highlights: [
          'Evidence-based service details',
          'Treatment scope outlines',
          'Department-specific physician lists',
        ],
      },
      {
        name: 'Preventive Health Check Packages',
        tag: 'Health Screening',
        description:
          'Comprehensive health screening suites designed for early detection, executive wellness, and senior care.',
        highlights: [
          'Itemized test checklists',
          'Turnaround timeline info',
          'One-click package reservation',
        ],
      },
      {
        name: 'Consultant Doctor Directory',
        tag: 'Physician Profiles',
        description:
          'Detailed profiles for resident and visiting specialist physicians, including fellowships and consultation hours.',
        highlights: [
          'Academic and clinical credentials',
          'Consultation scheduling triggers',
          'Patient care ethos quotes',
        ],
      },
      {
        name: 'Patient Journey & Booking Suite',
        tag: 'Conversion Hub',
        description:
          'Frictionless consultation booking with preferred doctor selection, date pickers, and reassurance messaging.',
        highlights: [
          'Transparent consultation policies',
          'Clear clinic location & parking guidance',
          'Instant confirmation workflow',
        ],
      },
    ],
    documentation: {
      title: 'Meridian Clinic Platform Architecture & UX Guide',
      description:
        'Comprehensive documentation on patient-centered UX guidelines, healthcare taxonomy, and cloud hosting architecture.',
      sections: [
        'Calm Healthcare Visual Language & Design Tokens',
        'Departmental Service Tree & Doctor Profiles Architecture',
        'Health Package Pricing & Screening Matrix',
        'Patient Intake & Booking Flow Validation',
        'Production Deployment on Vercel Edge Network',
      ],
      docType: 'Healthcare Portfolio & Technical Architecture',
      lastUpdated: 'October 2026',
      status: 'Production Verified',
    },
    metrics: [
      { label: 'Domain', value: 'Private Healthcare' },
      { label: 'Philosophy', value: 'Human-Centered Care' },
      { label: 'Platform Status', value: 'Live Deployment' },
    ],
    detailedCapabilities: [
      {
        title: 'Specialist Medical Services',
        desc: 'Comprehensive clinical presentations for primary care, cardiology, wellness, and diagnostics.',
      },
      {
        title: 'Preventive Health Packages',
        desc: 'Structured health screening packages with clear test inclusions and booking workflows.',
      },
      {
        title: 'Calm & Reassuring Patient UX',
        desc: 'Human-centered design language that reduces patient anxiety and facilitates easy appointment booking.',
      },
    ],
    projectType: 'Healthcare Website / Clinic Portfolio',
    industry: 'Healthcare & Clinics',
  },

  // =========================================================================
  // 07. IRONHAND BARBER STUDIO
  // =========================================================================
  {
    id: 'ironhand-barber-studio',
    number: '07',
    name: 'Ironhand Barber Studio',
    category: 'Beauty & Grooming',
    categoryId: 'beauty-grooming',
    status: 'live',
    url: 'https://ironhand-barber-shop.vercel.app/',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1400&auto=format&fit=crop',
    tagline: "Artisanal Men's Grooming, Precision Haircuts & Studio Experience",
    description:
      'Premium barber studio website showcasing grooming services, styles, barbers, pricing, studio experience, and appointment booking.',
    overview:
      'Ironhand Barber Studio is a premium grooming website focused on precision haircuts, fades, beard styling, personal style, and appointment booking. The website combines service presentation with a strong visual style gallery and studio identity.',
    challenge:
      'Modern artisanal barbershops need a digital storefront that reflects their craftsmanship, displays signature haircut styles, establishes master barber credibility, and enables effortless appointment scheduling on mobile devices.',
    approach:
      'GJ Nexora Technologies crafted a rich, tactile grooming showcase characterized by bold typography, high-contrast visual galleries, transparent service pricing menus, and instant appointment booking flows.',
    result:
      'A refined grooming website that captures the authentic studio atmosphere, showcases master barber portfolios, and drives appointment conversions with minimal user friction.',
    capabilities: [
      'Barber Service Showcase',
      'Haircut & Fade Presentation',
      'Beard Styling Services',
      'Transparent Pricing Menu',
      'Visual Style Gallery',
      'Master Barber Profiles',
      'Studio Story & Atmosphere',
      'Appointment Booking CTA',
      'Responsive Grooming Experience',
    ],
    workflowSteps: [
      'Explore Artisanal Grooming Philosophy & Studio Ambiance',
      'Browse Signature Haircuts, Fades & Hot Towel Shave Services',
      'Review Transparent Service Pricing & Package Options',
      'Inspect Master Barber Portfolios & Cutting Specializations',
      'Select Preferred Barber & Reserve Chair Appointment',
    ],
    dataFlow: [
      {
        step: '01',
        title: 'Style Discovery',
        description: 'Client browses visual style gallery (Skin Fades, Classic Pompadours, Beard Sculpting).',
      },
      {
        step: '02',
        title: 'Service & Pricing Selection',
        description: 'Customer selects service packages with transparent durations and price tags.',
      },
      {
        step: '03',
        title: 'Barber Choice',
        description: 'User evaluates master barber portfolios, chair availability, and stylistic expertise.',
      },
      {
        step: '04',
        title: 'Chair Reservation',
        description: 'Client completes booking with appointment timestamp and immediate calendar confirmation.',
      },
    ],
    architecture: {
      summary:
        'Tactile, high-contrast lifestyle web application featuring visual style lookbooks, master barber portfolios, and rapid appointment scheduling.',
      nodes: [
        { label: 'Grooming Client', sub: 'Mobile & Desktop Client', type: 'client' },
        { label: 'Barber Studio Web UI', sub: 'React, TypeScript & Tailwind CSS', type: 'frontend' },
        { label: 'Booking Orchestration', sub: 'Chair Selection & Time Slot Validation', type: 'api' },
        { label: 'Visual Lookbook Engine', sub: 'High-Res Style Showcase CDN', type: 'engine' },
        { label: 'Global CDN Hosting', sub: 'Vercel Edge Network', type: 'data' },
      ],
    },
    techStack: [
      {
        category: 'Client Architecture',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'High-Contrast Dark Aesthetic'],
      },
      {
        category: 'Visual & Media',
        technologies: ['Responsive Style Gallery', 'Lookbook Carousel', 'Smooth Hover Transitions'],
      },
      {
        category: 'Cloud & Infrastructure',
        technologies: ['Vercel Edge Hosting', 'Automated CI/CD', 'SSL Security'],
      },
      {
        category: 'Conversion Suite',
        technologies: ['Service Pricing Matrix', 'Barber Selection Hub', 'Chair Booking Modal'],
      },
    ],
    modules: [
      {
        name: 'Signature Services & Pricing Menu',
        tag: 'Grooming Services',
        description:
          'Comprehensive pricing for Executive Haircuts, Beard Shaping, Hot Towel Straight-Razor Shaves, and Spa Treatments.',
        highlights: [
          'Service duration time estimates',
          'Included grooming extras',
          'Combo package specials',
        ],
      },
      {
        name: 'Visual Style Lookbook',
        tag: 'Photo Gallery',
        description:
          'High-definition gallery displaying precision fades, classic tapers, modern textures, and beard grooming craftsmanship.',
        highlights: [
          'Categorized cut types',
          'Client before & after highlights',
          'Real studio photography',
        ],
      },
      {
        name: 'Master Barber Profiles',
        tag: 'Craftsman Showcase',
        description:
          'Profiles highlighting individual barbers, their years behind the chair, cutting specialties, and personal styling philosophy.',
        highlights: [
          'Barber portfolio links',
          'Chair reservation triggers',
          'Experience credentials',
        ],
      },
      {
        name: 'Chair Booking & Studio Access',
        tag: 'Reservation Hub',
        description:
          'Fast appointment scheduling with barber selection, time slots, studio location map, and walk-in policies.',
        highlights: [
          'Mobile-first date picker',
          'Studio operating hours',
          'Directions & parking details',
        ],
      },
    ],
    documentation: {
      title: 'Ironhand Barber Studio Platform Blueprint',
      description:
        'Design and technical reference covering high-contrast visual styling, service menu architectures, and appointment funnels.',
      sections: [
        'Artisanal Brand Identity & Dark-Mode Design System',
        'Service Menu & Pricing Architecture',
        'Lookbook Media Optimization & Gallery Grid',
        'Chair Reservation State Flow & Validation',
        'Production Deployment on Vercel Edge Network',
      ],
      docType: 'Lifestyle Portfolio & Implementation Spec',
      lastUpdated: 'October 2026',
      status: 'Production Verified',
    },
    metrics: [
      { label: 'Category', value: 'Artisanal Grooming' },
      { label: 'Style Focus', value: 'Precision Hair & Beard' },
      { label: 'Platform Status', value: 'Live Deployment' },
    ],
    detailedCapabilities: [
      {
        title: 'Precision Grooming Services',
        desc: 'Transparent presentation of haircuts, fades, beard treatments, and luxury hot towel shaves.',
      },
      {
        title: 'Visual Lookbook & Craftsmanship',
        desc: 'Engaging photo galleries showcasing real barber artistry and signature client hairstyles.',
      },
      {
        title: 'Effortless Chair Booking',
        desc: 'Quick online reservation system connecting clients with their favorite master barber.',
      },
    ],
    projectType: 'Business Website / Service Website',
    industry: 'Beauty & Grooming',
  },

  // =========================================================================
  // 08. MAISON IVOIRE
  // =========================================================================
  {
    id: 'maison-ivoire',
    number: '08',
    name: 'Maison Ivoire',
    category: 'Fashion & Boutique',
    categoryId: 'fashion-boutique',
    status: 'live',
    url: 'https://gj-nexora-boutique-portfolio.vercel.app/',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1400&auto=format&fit=crop',
    tagline: 'Curated Luxury Fashion, Editorial Collections & Bespoke Styling Boutique',
    description:
      'Editorial boutique website showcasing curated fashion collections, traditional wear, ethnic wear, accessories, styling, and boutique experience.',
    overview:
      'Maison Ivoire is a premium boutique fashion website built around a quiet-luxury visual experience. The website presents curated collections, traditional wear, party wear, accessories, new arrivals, ethnic wear, casual wear, boutique storytelling, styling philosophy, gallery content, and store contact information.',
    challenge:
      'High-end fashion boutiques require an online experience that mirrors the sophistication of a luxury showroom—rich imagery, editorial typography, curated lookbooks, and personalized styling pathways that elevate the brand above generic e-commerce templates.',
    approach:
      'GJ Nexora Technologies engineered an editorial luxury fashion website utilizing sophisticated serif typography, spacious layouts, curated seasonal lookbooks, and high-touch concierge styling inquiry pathways.',
    result:
      'An exquisite digital boutique portal highlighting traditional couture, ethnic silhouettes, modern evening wear, and personalized in-store styling appointments.',
    capabilities: [
      'Fashion Collection Showcase',
      'Traditional Wear Presentation',
      'Ethnic Wear Presentation',
      'Party Wear Presentation',
      'Accessories Showcase',
      'New Arrivals Gallery',
      'Boutique Storytelling',
      'Personal Styling Presentation',
      'Store Visit CTA',
      'Responsive Fashion Experience',
    ],
    workflowSteps: [
      'Immerse in Maison Ivoire Quiet-Luxury Heritage & Styling Philosophy',
      'Explore Curated Seasonal Lookbooks & Editorial Collections',
      'Discover Traditional Couture, Ethnic Drapes & Evening Wear',
      'Browse Handcrafted Jewelry & Artisanal Accessories',
      'Book Private Styling Consultation or Plan Store Visit',
    ],
    dataFlow: [
      {
        step: '01',
        title: 'Editorial Discovery',
        description: 'Shopper explores seasonal capsule lookbooks with high-resolution editorial photography.',
      },
      {
        step: '02',
        title: 'Category & Fabric Curation',
        description: 'Visitor filters collections by occasion (Traditional, Ethnic, Party Wear, Casual Luxury).',
      },
      {
        step: '03',
        title: 'Styling & Fit Evaluation',
        description: 'Client reviews garment details, craftsmanship notes, fabric heritage, and styling pairings.',
      },
      {
        step: '04',
        title: 'Boutique Concierge Connection',
        description: 'Shopper schedules private in-boutique fitting or requests bespoke styling advisory.',
      },
    ],
    architecture: {
      summary:
        'Quiet-luxury editorial web application built with high-definition media delivery, elegant typographic grids, and private styling concierge workflows.',
      nodes: [
        { label: 'Fashion Connoisseur', sub: 'Mobile & Desktop Client', type: 'client' },
        { label: 'Editorial Boutique UI', sub: 'React, TypeScript & Tailwind CSS', type: 'frontend' },
        { label: 'Lookbook & Capsule Router', sub: 'Curated Category Orchestrator', type: 'api' },
        { label: 'High-Res Media Pipeline', sub: 'Optimized Fashion Image CDN', type: 'engine' },
        { label: 'Global Edge Cloud', sub: 'Vercel Edge Network', type: 'data' },
      ],
    },
    techStack: [
      {
        category: 'Client Architecture',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Editorial Typography Tokens'],
      },
      {
        category: 'Lookbook & Visuals',
        technologies: ['High-Resolution Asset CDN', 'Asymmetrical Lookbook Grid', 'Curated Capsule Filters'],
      },
      {
        category: 'Cloud & CDN',
        technologies: ['Vercel Edge Network', 'Automated CI/CD', 'SSL Security'],
      },
      {
        category: 'Boutique Experience',
        technologies: ['Private Styling Reservation', 'Artisanal Fabric Stories', 'Store Locator & Hours'],
      },
    ],
    modules: [
      {
        name: 'Curated Collections & Capsule Lookbooks',
        tag: 'Editorial Showcase',
        description:
          'Showcases of Traditional Silhouettes, Festive Ethnic Wear, Contemporary Evening Gowns, and Resort Casuals.',
        highlights: [
          'Fabric provenance & craftsmanship details',
          'High-definition zoomable lookbooks',
          'Color palette and silhouette guides',
        ],
      },
      {
        name: 'Artisanal Accessories & Jewelry',
        tag: 'Accessories Hub',
        description:
          'Curated gallery of handcrafted jewelry, statement clutches, artisanal footwear, and heirloom stoles.',
        highlights: [
          'Handcrafted material specifications',
          'Editorial pairing suggestions',
          'Limited-edition availability tags',
        ],
      },
      {
        name: 'Private Styling & Concierge Advisory',
        tag: 'Personal Shopping',
        description:
          'Dedicated portal for reserving one-on-one styling sessions with resident fashion consultants.',
        highlights: [
          'Occasion-based wardrobe planning',
          'Bespoke tailoring inquiries',
          'Bridal & trousseau consultations',
        ],
      },
      {
        name: 'Boutique Story & Flagship Experience',
        tag: 'Brand Heritage',
        description:
          'Storytelling narrative detailing brand origins, sustainable fabric sourcing, and flagship store visit details.',
        highlights: [
          'Store hours & private appointment times',
          'Flagship location & valet info',
          'Direct concierge WhatsApp / phone links',
        ],
      },
    ],
    documentation: {
      title: 'Maison Ivoire Editorial Boutique Platform Blueprint',
      description:
        'Architectural and design guide detailing quiet-luxury typography, high-res lookbook orchestration, and concierge styling funnels.',
      sections: [
        'Quiet-Luxury Design System & Typography Standards',
        'Editorial Lookbook Grid & Capsule Taxonomy',
        'Personal Styling Concierge Workflow & State Model',
        'High-Resolution Image Delivery & Lazy Loading Pipeline',
        'Production Deployment on Vercel Edge Network',
      ],
      docType: 'Fashion Portfolio & Architecture Guide',
      lastUpdated: 'October 2026',
      status: 'Production Verified',
    },
    metrics: [
      { label: 'Industry', value: 'Luxury Fashion & Boutique' },
      { label: 'Aesthetic', value: 'Quiet Luxury / Editorial' },
      { label: 'Platform Status', value: 'Live Deployment' },
    ],
    detailedCapabilities: [
      {
        title: 'Editorial Fashion Collections',
        desc: 'Stunning visual showcases for traditional wear, ethnic couture, evening wear, and accessories.',
      },
      {
        title: 'Bespoke Styling Concierge',
        desc: 'Personalized private styling appointments and custom wardrobe consultation booking.',
      },
      {
        title: 'Luxury Boutique Brand Narrative',
        desc: 'Quiet-luxury aesthetic highlighting craftsmanship, sustainable fabrics, and flagship showroom ambiance.',
      },
    ],
    projectType: 'Retail Website / Fashion Portfolio',
    industry: 'Fashion & Boutique',
  },
];
