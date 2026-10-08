export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  education: string;
  experienceYears: string;
  bio: string;
  image: string;
  isPlaceholder: boolean; // Flag indicating editable placeholder
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "managing-director",
    name: "[Executive Name / Founder]",
    role: "Managing Director & CEO",
    department: "Executive Leadership",
    education: "B.Sc. in Civil Engineering / Management",
    experienceYears: "15+ Years",
    bio: "Guiding the strategic vision and engineering ethics of RajTex Homes Ltd. Dedicated to establishing corporate accountability and modern construction practices across Bangladesh.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    isPlaceholder: true,
  },
  {
    id: "principal-architect",
    name: "[Principal Architect Name]",
    role: "Chief Architect & Head of Design",
    department: "Architectural Studio",
    education: "B.Arch / M.Arch (BUET / Equivalent)",
    experienceYears: "12+ Years",
    bio: "Specializing in bioclimatic tropical architecture, contemporary spatial minimalism, and luxury residential duplex layouts that harmonize with urban surroundings.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    isPlaceholder: true,
  },
  {
    id: "lead-structural-engineer",
    name: "[Lead Structural Engineer Name]",
    role: "Principal Structural Consultant",
    department: "Structural & Geotechnical Engineering",
    education: "M.Sc. in Structural Engineering (BUET)",
    experienceYears: "14+ Years",
    bio: "Authority on seismic dynamic modeling, high-rise RCC framing, deep piling foundations, and BNBC 2020 code compliance with zero-tolerance safety standards.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    isPlaceholder: true,
  },
  {
    id: "head-of-construction",
    name: "[Head of Project Execution Name]",
    role: "Director of Construction & Operations",
    department: "Civil Contracting & Site Operations",
    education: "B.Sc. in Civil Engineering / PMP",
    experienceYears: "16+ Years",
    bio: "Oversees site mobilization, heavy machinery logistics, on-site QA/QC protocols, and on-time structural milestone delivery across Dhaka and divisional project hubs.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
    isPlaceholder: true,
  },
  {
    id: "mep-consultant",
    name: "[Senior MEP Engineer Name]",
    role: "Lead MEP Consultant",
    department: "Mechanical, Electrical & Plumbing",
    education: "B.Sc. in Electrical / Mechanical Engineering",
    experienceYears: "10+ Years",
    bio: "Directs intelligent substation integration, life-safety fire protection networks, energy-efficient HVAC ducting, and water management systems.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    isPlaceholder: true,
  },
  {
    id: "interior-workshop-director",
    name: "[Joinery & Workshop Head Name]",
    role: "Head of Workshop & Interior Fabrication",
    department: "North Badda Furniture & Joinery Unit",
    education: "Diploma in Fine Woodworking & Interior Architecture",
    experienceYears: "15+ Years",
    bio: "Oversees the North Badda furniture and metal workshop, directing CNC precision cutting, seasoned timber processing, and custom architectural metal fabrication.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    isPlaceholder: true,
  },
];
