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
];

export const CATEGORIES: DemoCategory[] = [
  'All',
  'AI & Intelligence',
  'Sustainability & Environment',
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
        'Decoupled web architecture with a modern React TypeScript client consuming structured intelligence services and environmental calculation pipelines.',
      nodes: [
        { label: 'Agricultural Operator', sub: 'Web / Mobile Interface', type: 'client' },
        { label: 'Frontend Client', sub: 'React 19 & TypeScript on Vercel', type: 'frontend' },
        { label: 'API Services', sub: 'Structured Calculation Endpoints', type: 'api' },
        { label: 'Intelligence Engine', sub: 'Multi-Factor Decision Models', type: 'engine' },
        { label: 'Knowledge Repository', sub: 'Soil, Crop & Carbon Emission Matrix', type: 'data' },
      ],
    },
    techStack: [
      {
        category: 'Frontend Engineering',
        technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Lucide React Icons'],
      },
      {
        category: 'Intelligence & Algorithms',
        technologies: ['Multi-Factor Crop Suitability Model', 'Agronomic Decision Trees', 'Emissions Factor Matrix'],
      },
      {
        category: 'Architecture & Deployment',
        technologies: ['Vercel Edge Network', 'Decoupled Client Architecture', 'HTTPS / TLS 1.3 Security'],
      },
      {
        category: 'Data & Modeling',
        technologies: ['Soil Chemistry Matrix (N-P-K-pH)', 'Agri-Waste Conversion Formulas', 'Financial Forecasting Models'],
      },
    ],
    modules: [
      {
        name: 'Crop Recommendation Engine',
        tag: 'AI Intelligence',
        description:
          'Data-driven crop suitability evaluation based on soil chemistry (N-P-K-pH), regional rainfall, and temperature profiles.',
        highlights: [
          'Suitability ranking scores',
          'Climate compatibility checking',
          'Optimized sowing timelines',
        ],
      },
      {
        name: 'Waste Analysis & Advisory',
        tag: 'Sustainability',
        description:
          'Practical circular-economy guidance for agricultural waste utilization and organic compost formulation.',
        highlights: [
          'Agri-waste byproduct recycling',
          'Organic composting recipes',
          'Chemical fertilizer reduction',
        ],
      },
      {
        name: 'Carbon Footprint Calculator',
        tag: 'Environmental Analytics',
        description:
          'Holistic environmental impact calculation assessing emissions across farming practices, fuel, and input materials.',
        highlights: [
          'CO2 equivalent metrics',
          'Emission mitigation suggestions',
          'Sustainability benchmark scoring',
        ],
      },
      {
        name: 'Yield Profit Estimator',
        tag: 'Financial Forecasting',
        description:
          'Agricultural economic forecast combining expected crop yields, market rates, and baseline input costs.',
        highlights: [
          'Net profit projections',
          'Cost vs. revenue breakdown',
          'Scenario comparison',
        ],
      },
      {
        name: 'Manure Formulation Guidance',
        tag: 'Soil Enrichment',
        description:
          'Customized organic manure recipes tailored to correct specific soil nutrient deficiencies.',
        highlights: [
          'Nutrient balancing formulas',
          'Application schedule advisory',
          'Soil vitality preservation',
        ],
      },
    ],
    documentation: {
      title: 'ECO-INTEL System Architecture & Specification',
      description:
        'Technical specification covering agronomic decision models, schema structures, carbon calculation methodologies, and frontend component architecture.',
      sections: [
        'System Architecture & Decoupled Design',
        'Agronomic Logic & Multi-Factor Decision Modeling',
        'Soil Chemistry & Carbon Formula Specifications',
        'Frontend Component Hierarchy & State Flow',
        'Production Deployment Runbook & Edge Caching',
      ],
      docType: 'Technical Specification & Architecture Report',
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
  },
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
  },
];
