export interface ProcessStep {
  stepNumber: string;
  title: string;
  shortTag: string;
  summary: string;
  detailedDescription: string;
  activities: string[];
  deliverable: string;
  iconName: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Consultation",
    shortTag: "Initial Discovery & Needs Analysis",
    summary:
      "We begin with an in-depth discussion to understand your vision, functional requirements, timeline, and preliminary investment parameters.",
    detailedDescription:
      "Every distinguished building begins with open listening. During this discovery phase, our lead architects and engineers meet with you to review your property goals, architectural preferences, family or business requirements, and preliminary budget expectations.",
    activities: [
      "Project vision, aesthetic taste & lifestyle requirement mapping",
      "Preliminary budget framework and feasibility review",
      "Project timeline expectations and statutory constraint briefing",
      "Assignment of dedicated RajTex technical lead",
    ],
    deliverable: "Initial Project Scope Brief & Feasibility Framework",
    iconName: "MessageSquare",
  },
  {
    stepNumber: "02",
    title: "Site Assessment",
    shortTag: "Topographic & Geotechnical Investigation",
    summary:
      "Our engineering team conducts rigorous on-site measurements, subsoil testing, and urban regulatory boundary verifications.",
    detailedDescription:
      "Sound structures depend on what lies beneath. We inspect the physical plot, conduct digital total-station boundary surveys, analyze road widths, evaluate neighborhood drainage corridors, and commission standard subsoil borehole investigations.",
    activities: [
      "Digital total-station topographic boundary surveying",
      "Subsoil geotechnical borehole testing (SPT N-value determination)",
      "Solar orientation, cross-wind corridors, and drainage access audits",
      "RAJUK/CDA setback alignment and FAR (Floor Area Ratio) calculation",
    ],
    deliverable: "Comprehensive Geotechnical & Urban Site Analysis Report",
    iconName: "MapPin",
  },
  {
    stepNumber: "03",
    title: "Design & Planning",
    shortTag: "Architectural, Structural & MEP Modeling",
    summary:
      "Our architects and licensed structural engineers translate concepts into photorealistic 3D models and precise construction blueprints.",
    detailedDescription:
      "Architecture and engineering evolve together. We prepare floor layouts, 3D exterior renders, interior walk-throughs, BNBC 2020 compliant structural analysis models (ETABS/SAFE), and integrated MEP coordination drawings.",
    activities: [
      "Conceptual spatial plans, functional zoning, and daylight modeling",
      "3D photorealistic exterior elevations and virtual walk-throughs",
      "Seismic and wind load structural engineering modeling",
      "MEP services coordination (electrical, plumbing, HVAC, fire safety)",
    ],
    deliverable: "Complete Architectural, Structural & MEP Design Package",
    iconName: "PenTool",
  },
  {
    stepNumber: "04",
    title: "Estimation & BOQ",
    shortTag: "Itemized Bill of Quantities & Material Schedules",
    summary:
      "We generate an itemized, transparent Bill of Quantities (BOQ) with exact market rate analysis, eliminating unexpected surprises.",
    detailedDescription:
      "Total financial clarity before groundbreaking. We break down the entire structure into measurable quantities—rebar tonnage, cement bags, sand volumes, sanitary fittings, electrical conduits—indexed against current market rates with zero hidden clauses.",
    activities: [
      "Precise drawing measurement take-offs for civil, electrical, and finishing works",
      "Transparent material-to-labor rate analysis per square foot",
      "Material quality specification schedule (grade of steel, cement brands, stone chips)",
      "Milestone-linked cash flow forecast matching construction stages",
    ],
    deliverable: "Itemized BOQ & Cash Flow Schedule",
    iconName: "Calculator",
  },
  {
    stepNumber: "05",
    title: "Contract & Approval",
    shortTag: "Statutory Permits & Transparent Agreement",
    summary:
      "We handle municipal regulatory clearances (RAJUK / City Corporation) and execute a legally binding, transparent construction agreement.",
    detailedDescription:
      "We prepare and submit all necessary statutory permit drawings to municipal authorities (RAJUK, CDA, Fire Department). Concurrently, we finalize a transparent contract outlining milestone timelines, material specs, penalties, and payment schedules.",
    activities: [
      "Preparation and liaison for RAJUK / local development authority plan approval",
      "Fire safety and environmental clearance filings where applicable",
      "Legally binding agreement detailing milestones and material warranties",
      "Establishment of digital client communication protocol",
    ],
    deliverable: "Approved Sanction Plans & Signed Construction Agreement",
    iconName: "FileCheck2",
  },
  {
    stepNumber: "06",
    title: "Construction",
    shortTag: "Civil Superstructure & High-Precision Execution",
    summary:
      "Groundbreaking, piling, RCC structural casting, masonry, and finishing executed under strict engineering supervision and safety protocols.",
    detailedDescription:
      "Your project springs to life on-site. RajTex mobilizes experienced site engineers, certified labor gangs, and quality construction machinery. From deep piling and continuous concrete vibration to curing regimes, we enforce immaculate craftsmanship.",
    activities: [
      "Mobilization, site camp erection, and health & safety barricading",
      "Substructure excavation, piling, and mat foundation casting",
      "Floor-by-floor RCC column-beam superstructure execution",
      "Masonry walls, electrical conduit installation, plastering, and waterproofing",
    ],
    deliverable: "Completed Structural Frame & Weather-Tight Shell",
    iconName: "HardHat",
  },
  {
    stepNumber: "07",
    title: "Quality Inspection",
    shortTag: "Multi-Tier QA/QC Lab Testing & Snagging",
    summary:
      "Continuous non-destructive testing, cylinder crush tests, plumbing pressure audits, and rigorous defect elimination.",
    detailedDescription:
      "Quality is not an afterthought at RajTex—it is verified continuously. Every concrete batch undergoes slump and compressive strength cylinder testing. Waterproofing undergoes 72-hour ponding tests, and electrical lines undergo insulation resistance checks.",
    activities: [
      "Standard 7-day and 28-day concrete cylinder compressive strength tests (BUET / Accredited Labs)",
      "72-hour hydraulic ponding tests on roof slabs, water reservoirs, and bathrooms",
      "Plumbing hydro-pressure testing and electrical insulation resistance testing",
      "Comprehensive multi-trade snagging inspection and defect remediation",
    ],
    deliverable: "Certified QA/QC Test Records & Structural Integrity Dossier",
    iconName: "CheckCircle2",
  },
  {
    stepNumber: "08",
    title: "Final Handover",
    shortTag: "Turnkey Commissioning, As-Builts & Warranty",
    summary:
      "Deep cleaning, equipment commissioning, delivery of as-built blueprints, warranty documentation, and celebratory key handover.",
    detailedDescription:
      "The culmination of engineering excellence. We conduct thorough deep-cleaning, test every light switch and water valve, supply complete laminated As-Built drawings, provide maintenance manuals, and hand over the keys to your pristine property.",
    activities: [
      "Complete deep-clean and mechanical systems commissioning",
      "Compilation of As-Built drawings (architectural, structural, MEP)",
      "Appliance warranties, paint codes, and maintenance care manuals",
      "Formal ceremonial handover with RajTex post-handover warranty support",
    ],
    deliverable: "Keys, As-Built Dossier, Warranties & Handover Certificate",
    iconName: "Award",
  },
];
