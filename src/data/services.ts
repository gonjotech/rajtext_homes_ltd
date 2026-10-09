export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: "Design & Planning" | "Engineering & Structure" | "Construction & Execution" | "Supervision & Management";
  iconName: string;
  deliverables: string[];
  keyHighlights: string[];
  scopePoints: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "architectural-design",
    slug: "architectural-design",
    title: "Architectural Design",
    shortDescription:
      "Modern, functional, and bioclimatic spatial planning crafted for residential duplexes, apartment towers, and corporate headquarters.",
    fullDescription:
      "Our architectural design team fuses aesthetic elegance with functional practicality. We conceptualize, model, and detail residential, commercial, and institutional buildings tailored for Bangladesh's climate, urban regulations (RAJUK, CDA, KDA), and client aspirations.",
    category: "Design & Planning",
    iconName: "Compass",
    deliverables: [
      "Master Site Planning & Spatial Layouts",
      "Floor Plans, Elevations & Sectional Drawings",
      "3D Photorealistic Exterior & Interior Visualizations",
      "RAJUK & Municipal Authority Approval Drawings",
      "Detailed Construction & Working Drawings",
    ],
    keyHighlights: [
      "Optimal natural cross-ventilation and daylight harvesting",
      "Seamless alignment with BNBC and RAJUK setback regulations",
      "Custom aesthetic identity reflecting client heritage or corporate brand",
    ],
    scopePoints: [
      "Site survey analysis & sun/wind path orientation study",
      "Schematic design and preliminary architectural concept validation",
      "Design development and finish specifications",
      "Permit documentation and regulatory coordination",
    ],
  },
  {
    id: "structural-engineering",
    slug: "structural-engineering",
    title: "Structural Engineering",
    shortDescription:
      "Robust, earthquake-resilient, and BNBC-compliant structural design ensuring maximum safety and economic material efficiency.",
    fullDescription:
      "Engineered by senior structural consultants, our designs prioritize human life safety, seismic resilience, and foundation stability. We employ industry-standard structural analysis (ETABS, SAFE, STAAD.Pro) calibrated to BNBC 2020 code standards.",
    category: "Engineering & Structure",
    iconName: "ShieldCheck",
    deliverables: [
      "Subsoil Investigation Assessment & Foundation Design",
      "Seismic Analysis & Wind Load Structural Modeling",
      "RCC Framing & Column-Beam Structural Details",
      "Retaining Wall & Basement Shoring Designs",
      "Rebar Schedules & Material Bar-Bending Schedules (BBS)",
    ],
    keyHighlights: [
      "Strict compliance with BNBC 2020 and ACI standards",
      "Seismic Zone 2 & Zone 3 earthquake resistance modeling",
      "Material optimization to avoid rebar wastage without compromising strength",
    ],
    scopePoints: [
      "Geotechnical report evaluation and pile/mat foundation calculation",
      "Dynamic computer modeling under dead, live, wind, and seismic loads",
      "Comprehensive structural vetting and peer reviews",
      "Periodic structural site audits during concrete pouring",
    ],
  },
  {
    id: "construction-contracting",
    slug: "construction-contracting",
    title: "Duplex & Building Construction",
    shortDescription:
      "Turnkey luxury duplex villas, multi-storey residential towers, and commercial building construction from piling to finishing.",
    fullDescription:
      "From bespoke contemporary duplex villas to multi-storey apartment towers, RajTex Homes Ltd. operates as your dependable general contractor. We manage piling, heavy RCC structural casting, brickwork, and turnkey finishes to deliver structures built to last generations.",
    category: "Construction & Execution",
    iconName: "Hammer",
    deliverables: [
      "Luxury Contemporary Duplex Villa Construction",
      "Site Earthwork, Shore Piling & Deep Excavation",
      "Substructure & Superstructure RCC Casting (BNBC 2020)",
      "High-Precision Masonry, Plaster & Waterproofing Works",
      "Façade Cladding, Glass Curtain Walls & Turnkey Handover Certification",
    ],
    keyHighlights: [
      "Tier-1 construction materials (500W TMT steel, OPC cement, graded stone chips)",
      "Strict on-site batching, slump testing, and cylinder compressive testing",
      "Comprehensive occupational health, safety, and PPE compliance",
      "Dedicated focus on architectural duplexes and residential complexes",
    ],
    scopePoints: [
      "Procurement of certified raw materials with mill test reports",
      "Supervised formwork shuttering, rebar binding, and concrete vibration",
      "Systematic curing protocols adhering strictly to ASTM specs",
      "Progress reporting with weekly photographic milestones",
    ],
  },
  {
    id: "interior-exterior-design",
    slug: "interior-exterior-design",
    title: "Interior & Exterior Design",
    shortDescription:
      "Bespoke interior architecture, custom joinery, modern façade treatments, and landscaping for luxury living and corporate workspaces.",
    fullDescription:
      "Our in-house design atelier and dedicated furniture workshop in North Badda craft refined interior spaces and iconic exterior façades. We blend architectural lighting, premium materials, and custom woodwork to create harmonious living and working environments.",
    category: "Design & Planning",
    iconName: "Palette",
    deliverables: [
      "Conceptual 3D Mood Boards & Material Samples",
      "Comprehensive Interior Layout & Ceiling Reflected Plans",
      "Custom Cabinetry & Joinery from North Badda Workshop",
      "Exterior Façade Modernization (HPL, Louvers, CNC Panels, Curtain Glass)",
      "Smart Lighting & Acoustic Design",
    ],
    keyHighlights: [
      "Manufactured in our dedicated North Badda furniture and fabrication plant",
      "Fine craftsmanship using seasoned solid wood, marine plywood, and imported fittings",
      "Harmonious integration with MEP conduits and architectural lighting",
    ],
    scopePoints: [
      "Client lifestyle and ergonomic requirement profiling",
      "3D photorealistic walkthrough renders prior to production",
      "Precision CNC sheet metal and timber fabrication",
      "Turnkey on-site installation and snagging elimination",
    ],
  },
  {
    id: "mep-engineering",
    slug: "mep-engineering",
    title: "MEP Engineering",
    shortDescription:
      "Integrated Mechanical, Electrical, and Plumbing engineering ensuring energy efficiency, fire safety, and dependable building operation.",
    fullDescription:
      "A building is only as reliable as its internal infrastructure. RajTex delivers integrated MEP solutions encompassing power distribution, lightning protection, sanitary drainage, HVAC ventilation, and life-safety fire hydrant installations.",
    category: "Engineering & Structure",
    iconName: "Zap",
    deliverables: [
      "Substation, Transformer & Generator Layouts",
      "Single Line Diagrams (SLD) & Power Distribution Networks",
      "Plumbing, Water Filtration & Drainage Networks",
      "Fire Hydrant, Sprinkler & Smoke Detection Schemes",
      "HVAC Ducting & VRF Air-Conditioning Schemes",
    ],
    keyHighlights: [
      "Fire Department (FSCD) safety regulation compliance",
      "Energy-conserving electrical layout with power factor correction",
      "Dual plumbing networks for water conservation and rainwater harvesting",
    ],
    scopePoints: [
      "Total building electrical connected load estimation",
      "Water pressure gradient calculation and pump sizing",
      "Coordination shop drawings to prevent structural beam clashing",
      "System commissioning and pressure testing",
    ],
  },
  {
    id: "project-management",
    slug: "project-management",
    title: "Project Management",
    shortDescription:
      "Disciplined scheduling, cost containment, vendor coordination, and milestone governance from groundbreaking to closeout.",
    fullDescription:
      "We apply rigorous project management methodologies to protect your investment. Utilizing CPM scheduling, earned value analysis, and dedicated client dashboards, we eliminate cost overruns and maintain stringent timeline adherence.",
    category: "Supervision & Management",
    iconName: "Briefcase",
    deliverables: [
      "Master Construction Gantt Chart & Milestone Schedules",
      "Weekly & Monthly Executive Progress Reports",
      "Cash Flow Forecasts & Vendor Payment Audits",
      "Risk Mitigation & Change Order Governance",
      "Final As-Built Handover Documentation",
    ],
    keyHighlights: [
      "Transparent budget monitoring eliminating surprise expenses",
      "Strict milestone tracking avoiding common Bangladeshi project delays",
      "Clear, accountable single-point-of-contact for project owners",
    ],
    scopePoints: [
      "Project charter and contractual baseline establishment",
      "Supply chain and subcontractor quality auditing",
      "Weekly progress sync meetings with stakeholders",
      "Dispute prevention through objective documentation",
    ],
  },
  {
    id: "construction-supervision",
    slug: "construction-supervision",
    title: "Construction Supervision",
    shortDescription:
      "Independent technical oversight, material testing, and QA/QC quality assurance to ensure exact adherence to drawings.",
    fullDescription:
      "Protect your structure against contractor shortcuts. Our seasoned site engineers provide continuous on-site supervision, inspecting formwork, checking rebar spacing, validating concrete mixing, and enforcing architectural specifications.",
    category: "Supervision & Management",
    iconName: "Eye",
    deliverables: [
      "Daily Site Quality Logs & Manpower Reports",
      "Pre-Pour Rebar & Shuttering Inspection Checklists",
      "Material Lab Test Verification (Cylinder, Tensile Steel Tests)",
      "Defect & Snagging Notices with Remediation Audits",
      "Certificate of Structural Milestone Compliance",
    ],
    keyHighlights: [
      "Impartial verification protecting developer and client capital",
      "Immediate detection of construction flaws before concrete pour",
      "Detailed photographic logs of every structural member prior to concealment",
    ],
    scopePoints: [
      "Daily site presence during critical casting windows",
      "Verification of raw material quality upon arrival at site",
      "Enforcement of safety protocols and scaffolding stability",
      "Final verification against approved engineering drawings",
    ],
  },
  {
    id: "renovation-remodeling",
    slug: "renovation-remodeling",
    title: "Renovation & Remodeling",
    shortDescription:
      "Transforming aging residences, retail showrooms, and corporate offices with structural retrofitting and modern aesthetic renewal.",
    fullDescription:
      "Whether revitalizing a heritage residential property, modernizing a 20-year-old apartment building, or reconfiguring a corporate floorplate, RajTex brings surgical precision to structural retrofitting, space reconfiguration, and finish upgrades.",
    category: "Construction & Execution",
    iconName: "Sparkles",
    deliverables: [
      "Structural Health Assessment & Ferroscan Non-Destructive Testing",
      "Space Reconfiguration & Demolition Safety Plans",
      "Carbon Fiber (CFRP) & Steel Jacketing Retrofit Drawings",
      "Complete Electrical & Plumbing Modernization",
      "Contemporary Finish Overhaul & Smart Upgrades",
    ],
    keyHighlights: [
      "Extending structural lifespan with certified engineering methods",
      "Minimal disruption to surrounding properties and occupied zones",
      "Substantial increase in property valuation and rental yields",
    ],
    scopePoints: [
      "Comprehensive structural condition and moisture penetration audit",
      "Phased renovation scheduling to minimize downtime",
      "Clean execution with dust containment and debris haulage",
      "Final aesthetic and mechanical warranty handover",
    ],
  },
  {
    id: "estimation-boq",
    slug: "estimation-boq",
    title: "Estimation & BOQ",
    shortDescription:
      "Transparent, itemized Bill of Quantities (BOQ), rate analysis, and material forecasting preventing budget escalation.",
    fullDescription:
      "A successful construction project starts with financial clarity. Our quantity surveying team develops thorough, market-calibrated BOQs and itemized material schedules so you know exact expenditure down to the square foot before work begins.",
    category: "Design & Planning",
    iconName: "Calculator",
    deliverables: [
      "Itemized Bill of Quantities (BOQ) with Detailed Rate Analysis",
      "Raw Material Volume Forecast (Cement, Steel, Sand, Aggregates, Bricks)",
      "Cash Flow Projections Linked to Construction Milestones",
      "Comparative Tender Document Preparation & Vendor Evaluation",
      "Value Engineering Recommendations for Cost Optimization",
    ],
    keyHighlights: [
      "Calibrated with current PWD/BNBC schedules and local market retail rates",
      "Transparent breakdown of material vs. labor expenses",
      "Elimination of unexpected contractor cost claims and hidden fees",
    ],
    scopePoints: [
      "Exact architectural and structural drawing take-offs",
      "Comprehensive market rate analysis across local and imported supplies",
      "Contingency planning and material inflation risk models",
      "Tender analysis support for competitive developer bidding",
    ],
  },
  {
    id: "turnkey-construction",
    slug: "turnkey-construction",
    title: "Turnkey Construction",
    shortDescription:
      "End-to-end single-contract delivery from bare soil to ready-to-move architectural masterpiece with guaranteed handover dates.",
    fullDescription:
      "Experience hassle-free building creation. RajTex takes total accountability: architectural design, municipal approvals, foundation engineering, full civil construction, interior finishing, and final key handover under a single unified contract.",
    category: "Construction & Execution",
    iconName: "Key",
    deliverables: [
      "Single Point of Responsibility Agreement & Guaranteed Handover",
      "Architectural, Structural, MEP Design & Municipal Approvals",
      "Complete Civil Superstructure Construction",
      "Complete Interior Woodwork, Kitchen & Sanitary Finishing",
      "Utility Connections Coordination & Ready-to-Live Handover",
    ],
    keyHighlights: [
      "Complete peace of mind for expatriates, busy executives, and land owners",
      "Guaranteed delivery milestone dates with contractual assurances",
      "Harmonious synergy between design vision and construction reality",
    ],
    scopePoints: [
      "Turnkey scope definition, specification fixing, and milestone scheduling",
      "Dedicated client portal with weekly digital site inspection reports",
      "Pre-handover deep cleaning, MEP load testing, and snag rectifications",
      "Official handover ceremony with warranty certificates and maintenance manuals",
    ],
  },
  {
    id: "ready-flats-buy-sell",
    slug: "ready-flats-buy-sell",
    title: "Buy & Sell Ready Flats",
    shortDescription:
      "Verified luxury ready-to-move-in duplexes and apartment flats with crystal clear legal documentation across prime Dhaka locations.",
    fullDescription:
      "RajTex Homes Ltd. bridges high-quality architectural construction with dependable real estate handovers. We facilitate the direct purchase and sale of vetted, premium ready flats and duplexes in Dhaka's premier residential enclaves (Uttara, Gulshan, Banani, Bashundhara, and Mirpur DOHS). Every property is subjected to rigorous structural safety audits and legal title verification.",
    category: "Construction & Execution",
    iconName: "Home",
    deliverables: [
      "Verified Ready Flats in Prime Residential Hubs",
      "Complete Land Title & RAJUK Approval Due Diligence",
      "Turnkey Interior-Finished Ready-to-Move Units",
      "Transparent Deed Registration & Legal Handover Support",
      "Post-Handover Structural & MEP Defect Liability Support",
    ],
    keyHighlights: [
      "100% free of legal encumbrances, bank mortgage issues, or municipal disputes",
      "Built or vetted directly by RajTex engineering standards",
      "Immediate possession with active utility (electricity, gas/LPG, water) connections",
      "Direct consultation with zero hidden broker markups",
    ],
    scopePoints: [
      "Client requirement mapping (budget, location, sft size, floor preference)",
      "Physical site inspections and structural finish verification",
      "Vetting of title deeds, mutation records, and RAJUK sanction approvals",
      "Execution of legally binding sale-purchase agreements and final keys handover",
    ],
  },
];

