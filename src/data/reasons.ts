export interface WhyChooseReason {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  keyPoints: string[];
  iconName: string;
  metricHighlight?: string;
  metricLabel?: string;
}

export const WHY_CHOOSE_REASONS: WhyChooseReason[] = [
  {
    id: "engineering-expertise",
    number: "01",
    title: "Engineering Expertise",
    tagline: "Led by certified civil and structural engineers",
    description:
      "Unlike traditional local masonry contractors who rely on guesswork, every RajTex project is engineered by qualified civil engineers and registered architects using finite element computer modeling and BNBC 2020 seismic guidelines.",
    keyPoints: [
      "Rigorous BNBC 2020 seismic and dynamic wind analysis",
      "In-house geotechnical subsoil assessment specialists",
      "Licensed architects blending climate responsiveness with luxury aesthetics",
    ],
    iconName: "Binary",
    metricHighlight: "100%",
    metricLabel: "Code Compliant Designs",
  },
  {
    id: "quality-materials",
    number: "02",
    title: "Quality Materials",
    tagline: "Certified, unadulterated construction grade supplies",
    description:
      "We enforce uncompromising material standards. We procure exclusively from top-tier national manufacturers—500W TMT steel, virgin Portland Composite Cement (PCC/OPC), washed Sylhet sand, and crushed stone aggregates with full mill test certificates.",
    keyPoints: [
      "No sub-standard rebar or recycled uncertified materials",
      "Regular third-party laboratory verification (BUET / Accredited Testing)",
      "Dedicated in-house furniture workshop in North Badda for seasoned timber and joinery",
    ],
    iconName: "Shield",
    metricHighlight: "Grade-A",
    metricLabel: "Procurement Verification",
  },
  {
    id: "professional-project-management",
    number: "03",
    title: "Professional Project Management",
    tagline: "Methodical scheduling, CPM tracking, and cost control",
    description:
      "We manage projects with corporate governance. Critical Path Method (CPM) scheduling, daily site logs, milestone cash flow forecasting, and proactive vendor coordination prevent site standstills and protect your capital from waste.",
    keyPoints: [
      "Digital milestone tracking with transparent weekly updates",
      "Rigorous supply chain management minimizing bottleneck downtime",
      "Single-point-of-contact project managers personally accountable for delivery",
    ],
    iconName: "Kanban",
    metricHighlight: "Zero",
    metricLabel: "Ambiguity in Scheduling",
  },
  {
    id: "transparent-communication",
    number: "04",
    title: "Transparent Communication",
    tagline: "Open-book estimation, photographic reporting & zero hidden costs",
    description:
      "We demystify construction for property owners and non-resident Bangladeshis. You receive itemized BOQ breakdowns, clear milestone payment schedules, and weekly high-resolution photographic and video site inspection reports.",
    keyPoints: [
      "Transparent Bill of Quantities with no hidden markups",
      "Weekly photo & drone progress digests sent directly to your inbox/WhatsApp",
      "Prompt consultation before any design modification or site variation",
    ],
    iconName: "Eye",
    metricHighlight: "Weekly",
    metricLabel: "Detailed Progress Digests",
  },
  {
    id: "safety-compliance",
    number: "05",
    title: "Safety & Compliance",
    tagline: "Strict occupational safety, RAJUK clearance, and fire codes",
    description:
      "Safety is paramount on our sites. We implement full Personal Protective Equipment (PPE) mandates, heavy-duty steel tubular scaffolding, edge fall protection, and thorough Fire Service & Civil Defence (FSCD) life-safety installations.",
    keyPoints: [
      "Rigorous on-site worker safety protocols and safety nets",
      "Full compliance with RAJUK, CDA, and Municipal development guidelines",
      "Environmental cleanliness, noise suppression, and neighbor-friendly site practices",
    ],
    iconName: "AlertTriangle",
    metricHighlight: "Zero-Harm",
    metricLabel: "Safety Philosophy",
  },
  {
    id: "on-time-delivery",
    number: "06",
    title: "On-Time Delivery",
    tagline: "Milestone-backed schedules and reliable project handovers",
    description:
      "We recognize the immense financial and emotional stakes in timely construction. Our pre-planned procurement schedules, disciplined subcontractor management, and weather-contingency plans ensure your keys are handed over as promised.",
    keyPoints: [
      "Contractually locked handover schedules",
      "Advanced procurement preventing local market supply shocks",
      "Accelerated finishing gangs to ensure spotless, ready-to-move delivery",
    ],
    iconName: "Clock",
    metricHighlight: "98%+",
    metricLabel: "Milestone Adherence",
  },
];
