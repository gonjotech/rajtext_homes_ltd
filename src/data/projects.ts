export type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "Industrial"
  | "Renovation"
  | "Interior";

export type ProjectStatus = "Ongoing" | "Completed";

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  client?: string;
  category: ProjectCategory;
  status: ProjectStatus;
  location: string;
  city: string;
  area: string; // e.g. "18,500 Sft"
  duration: string;
  year: string;
  completionDate?: string;
  featured?: boolean;
  shortDescription: string;
  fullOverview: string;
  scopeOfWork: string[];
  structuralHighlights: string[];
  keyChallengesAndSolutions?: string;
  mainImage: string;
  gallery: string[];
  isPlaceholderData: boolean; // Marked for easy client replacement
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "asian-duplex-banani",
    slug: "asian-duplex-banani",
    title: "Asian Duplex Residence",
    client: "Asian Duplex Town Ltd.",
    category: "Residential",
    status: "Completed",
    location: "House-41, Road-07, Banani, Dhaka",
    city: "Dhaka",
    area: "9,200 Sft",
    duration: "14 Months",
    year: "2026",
    completionDate: "October 2026",
    featured: true,
    shortDescription:
      "A luxury contemporary duplex residence featuring architectural MS Box CNC partition gates, 10mm coffee color structural glass boundaries, and refined custom interior woodwork.",
    fullOverview:
      "Commissioned by Asian Duplex Town Ltd., this flagship residential project demonstrates RajTex's integrated craftsmanship across architectural detailing, custom metal fabrication, and luxury finishing. Our North Badda workshop manufactured bespoke CNC ornamental boundary gates, precision steel column pipes, and coffee glass enclosures that define the residence's signature street presence.",
    scopeOfWork: [
      "Custom 30' Height MS Column Pipe & Foundation Fabrication",
      "MS Box CNC Design Ornamental Partition Gate with Anticorrosive Coating",
      "10mm Coffee Color Tempered Glass Boundary Facade",
      "Full Interior Duplex Joinery & Custom Hardwood Cabinetry",
      "Structural Civil Finishing & Precision Electrical Integration",
    ],
    structuralHighlights: [
      "Heavy gauge 3\"x3\" 3mm structural pipe framing engineered for wind stability",
      "CNC cut architectural steel patterns treated against tropical corrosion",
      "Grade-A tempered safety glass with stainless steel flush architectural hardware",
    ],
    keyChallengesAndSolutions:
      "The tight urban footprint on Banani Road 07 required off-site precision prefabrication. RajTex leveraged its North Badda fabrication workshop to build and dry-fit the gate columns and glass hardware prior to rapid on-site assembly, minimizing street congestion and dust pollution.",
    mainImage: "/images/duplex-construction.jpg",
    gallery: [
      "/images/duplex-construction.jpg",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    ],
    isPlaceholderData: false, // Based directly on official billing records
  },
  {
    id: "uttara-horizon-tower",
    slug: "uttara-horizon-tower",
    title: "Horizon Heights Residential Tower",
    client: "Horizon Living Consortium",
    category: "Residential",
    status: "Ongoing",
    location: "Sector 14, Uttara Model Town, Dhaka",
    city: "Dhaka",
    area: "42,000 Sft",
    duration: "24 Months",
    year: "2026",
    completionDate: "Target Dec 2027",
    featured: true,
    shortDescription:
      "A 14-story earthquake-resistant luxury apartment tower featuring underground double-basement parking, rooftop biophilic gardens, and smart energy infrastructure.",
    fullOverview:
      "Horizon Heights represents a benchmark in urban residential development. Engineered to BNBC 2020 seismic standards, RajTex Homes Ltd. provides full turnkey construction services including deep cast-in-situ bored piling, shore piling protection, RCC framing, and high-spec architectural finishing.",
    scopeOfWork: [
      "Deep Cast-in-Situ Bored Piling (60ft depth) and Mat Raft Foundation",
      "14-Storey RCC Superstructure Frame with Zone 3 Seismic Detailing",
      "Double Basement Shoring with Waterproof Bentonite Slurry Walls",
      "Complete MEP Engineering, Substation & 500kVA Generator Installation",
      "Rooftop Community Pavilion, Infinity Pool & Biophilic Landscaping",
    ],
    structuralHighlights: [
      "500W Grade High-Strength Deformed TMT Steel rebar with calibrated lap splices",
      "Ready-mix concrete with 4000 PSI compressive strength cylinder verification",
      "High-performance double-glazed Low-E facade reducing solar heat gain by 40%",
    ],
    mainImage:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    ],
    isPlaceholderData: true,
  },
  {
    id: "gulshan-corporate-center",
    slug: "gulshan-corporate-center",
    title: "Apex Corporate Landmark",
    client: "Apex Financial Holdings",
    category: "Commercial",
    status: "Completed",
    location: "Gulshan Avenue, Gulshan-2, Dhaka",
    city: "Dhaka",
    area: "65,000 Sft",
    duration: "18 Months",
    year: "2025",
    completionDate: "November 2025",
    featured: false,
    shortDescription:
      "Grade-A corporate office headquarters engineered with column-free flexible floorplates, acoustic glass curtain walling, and automated building management systems.",
    fullOverview:
      "Designed for multinational corporate tenants, Apex Landmark integrates sustainable architecture with heavy civil engineering. The building boasts expansive clear-span post-tensioned floor beams to deliver open-plan flexibility without internal column interference.",
    scopeOfWork: [
      "Post-Tensioned (PT) Flat Slab Structural Construction",
      "Unitized Glass Curtain Wall Façade with Thermal Break Transoms",
      "Central VRF Air Conditioning & Smart Building Management System (BMS)",
      "Full Interior Corporate Fit-out for Executive Boardrooms & Workstations",
      "UL-Listed Fire Sprinkler, Hose Reel & Pressurized Smoke Evacuation Stairs",
    ],
    structuralHighlights: [
      "Post-tensioned unbonded tendon slabs maximizing head clearance",
      "Wind tunnel calibrated structural frame resisting cyclone forces",
      "Heavy duty sub-station with automated synchronized generator busbars",
    ],
    mainImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
    ],
    isPlaceholderData: true,
  },
  {
    id: "gazipur-logistics-industrial-park",
    slug: "gazipur-logistics-industrial-park",
    title: "Modern Logistics & Manufacturing Hub",
    client: "Bengal Industrial Corporation",
    category: "Industrial",
    status: "Completed",
    location: "Kashimpur Industrial Zone, Gazipur",
    city: "Gazipur",
    area: "120,000 Sft",
    duration: "11 Months",
    year: "2024",
    completionDate: "August 2024",
    featured: false,
    shortDescription:
      "Heavy industrial facility built with pre-engineered steel buildings (PEB), laser-screeded heavy duty flooring, and green building environmental standards.",
    fullOverview:
      "An industrial complex designed for rapid warehousing and high-capacity manufacturing. Built with high-tensile pre-engineered steel frames and an automated stormwater drainage system capable of handling monsoon cloudbursts.",
    scopeOfWork: [
      "Pre-Engineered Steel Building (PEB) Erection with 45m Clear Span",
      "Laser-Screeded Super-Flat Floor Slabs with Metallic Hardener",
      "Heavy-Duty Industrial Stormwater Drainage & Effluent Treatment Conduits",
      "High-Bay Fire Suppression & Automated Smoke Vent Louvers",
      "Overhead Crane Runway Beams (10-Ton Lifting Capacity)",
    ],
    structuralHighlights: [
      "Clear span portal frames eliminating interior columns for forklift transit",
      "Floor load capacity rated for 7.5 Ton/m2 point loading",
      "Insulated sandwich roof panels reducing internal temperatures by 5°C",
    ],
    mainImage:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    ],
    isPlaceholderData: true,
  },
  {
    id: "dhanmondi-heritage-renovation",
    slug: "dhanmondi-heritage-renovation",
    title: "Dhanmondi Estate Retrofit & Remodeling",
    client: "Private Family Estate",
    category: "Renovation",
    status: "Completed",
    location: "Road 9A, Dhanmondi, Dhaka",
    city: "Dhaka",
    area: "11,500 Sft",
    duration: "7 Months",
    year: "2025",
    completionDate: "April 2025",
    featured: false,
    shortDescription:
      "Complete structural retrofitting, CFRP column strengthening, and contemporary interior modernization of a 30-year-old family estate.",
    fullOverview:
      "Revitalizing an iconic brick estate without compromising its historic charm. Our structural team performed non-destructive rebound hammer tests, reinforced stressed load-bearing columns with carbon fiber wraps, and transformed the interior into an open-plan luxury sanctuary.",
    scopeOfWork: [
      "Non-Destructive Structural Health Audit & Ferroscan Concrete Analysis",
      "Carbon Fiber Reinforced Polymer (CFRP) Column & Beam Jacketing",
      "Full Replacement of 30-Year Old Galvanized Plumbing & Electrical Risers",
      "Modern Minimalist Facade Transformation with Custom Louvers",
      "Full Interior Redesign featuring Handcrafted Badda Workshop Woodwork",
    ],
    structuralHighlights: [
      "35% increase in structural load capacity via CFRP composites",
      "Complete damp-proofing and sub-grade crystalline waterproofing",
      "Preservation of original structural footprint while doubling open living space",
    ],
    mainImage:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    ],
    isPlaceholderData: true,
  },
  {
    id: "bashundhara-penthouse-interior",
    slug: "bashundhara-penthouse-interior",
    title: "Penthouse Horizon Interior Architecture",
    client: "Private Corporate Executive",
    category: "Interior",
    status: "Completed",
    location: "Block I, Bashundhara R/A, Dhaka",
    city: "Dhaka",
    area: "4,800 Sft",
    duration: "5 Months",
    year: "2026",
    completionDate: "January 2026",
    featured: false,
    shortDescription:
      "Custom architectural interior fit-out featuring Italian marble flooring, concealed acoustic paneling, and bespoke joinery manufactured at our North Badda workshop.",
    fullOverview:
      "An ultra-premium penthouse interior showcasing the pinnacle of RajTex craftsmanship. From solid teakwood wall louvers to recessed magnetic track lighting, every detail was custom-crafted to create an oasis of tranquility.",
    scopeOfWork: [
      "Complete Interior Architectural Layout & 3D Walkthrough Modeling",
      "Custom Teakwood & Fluted Panel Joinery from North Badda Workshop",
      "Imported Statuario Italian Marble Floor Installation with Brass Inlays",
      "Smart Home Automation for Lighting, HVAC, and Motorized Curtains",
      "Custom Island Kitchen with Quartz Countertops and Blum Hardware",
    ],
    structuralHighlights: [
      "Precision laser-leveled subflooring with acoustic sound-damping underlay",
      "Concealed air distribution ducts integrated into multi-tiered drywall ceilings",
      "Zero-formaldehyde VOC compliant finishes for healthy indoor air quality",
    ],
    mainImage: "/images/interior-exterior-ready-flats.jpg",
    gallery: [
      "/images/interior-exterior-ready-flats.jpg",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    ],
    isPlaceholderData: true,
  },
  {
    id: "mirpur-commercial-complex",
    slug: "mirpur-commercial-complex",
    title: "Metro Plaza Mixed-Use Commercial Complex",
    client: "Metro Properties Ltd.",
    category: "Commercial",
    status: "Ongoing",
    location: "Mirpur-10 Circle, Dhaka",
    city: "Dhaka",
    area: "75,000 Sft",
    duration: "20 Months",
    year: "2026",
    completionDate: "Target Mid 2027",
    featured: false,
    shortDescription:
      "10-story commercial shopping and corporate tower situated directly beside the Dhaka Metro Rail corridor with heavy vibration isolation engineering.",
    fullOverview:
      "Engineered to withstand heavy dynamic vibration from adjacent mass transit corridors, Metro Plaza incorporates specialized elastomeric isolation pads and robust shear wall framing.",
    scopeOfWork: [
      "Deep Foundation with 80ft Secant Pile Wall for Groundwater Exclusion",
      "Vibration-Damping Structural Shear Core & Concrete Encasement",
      "Multi-Level Retail Atrium with Structural Glass Skylight",
      "High-Efficiency Chilled Water HVAC System & Escalator Shafts",
      "Automated Basement Stack-Parking System",
    ],
    structuralHighlights: [
      "Special seismic moment resisting frames (SMRF) design",
      "Elastomeric damping pads at foundation interfaces",
      "Post-tensioned cantilever facade projections",
    ],
    mainImage:
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=1200&q=80",
    ],
    isPlaceholderData: true,
  },
  {
    id: "purbachal-villa-sanctuary",
    slug: "purbachal-villa-sanctuary",
    title: "Purbachal Architectural Villa & Masterplan",
    client: "Private Real Estate Investor",
    category: "Residential",
    status: "Completed",
    location: "Sector 17, Purbachal New Town, Dhaka",
    city: "Dhaka",
    area: "8,500 Sft",
    duration: "12 Months",
    year: "2025",
    completionDate: "September 2025",
    featured: false,
    shortDescription:
      "A master-planned bioclimatic architectural duplex villa integrating 3D CAD/BIM modeling, fair-faced concrete, exposed brick masonry, and solar micro-generation.",
    fullOverview:
      "Set in the green expanse of Purbachal New Town, this private villa combines brutalist architectural honesty with warm residential charm. Features comprehensive architectural layout planning, fair-faced exposed concrete walls, cantilevered balconies, and full solar integration.",
    scopeOfWork: [
      "Architectural 2D/3D BIM Modeling & RAJUK Compliance Drawings",
      "Fair-Faced Architectural Concrete Shuttering & Casting",
      "Traditional Gas-Fired Hand-Sorted Exposed Brick Masonry",
      "Biophilic Internal Courtyard with Rainwater Retention & Koi Pond",
      "Solar Photovoltaic 12kW Net-Metered Microgrid Installation",
      "Full Custom Joinery from North Badda Workshop",
    ],
    structuralHighlights: [
      "Bespoke shuttering plywood treated to produce immaculate satin concrete surfaces",
      "Thermally insulated cavity brick walls reducing summer heat by 6°C",
      "Long-span cantilever roof canopies engineered without drop beams",
    ],
    mainImage: "/images/architectural-design.jpg",
    gallery: [
      "/images/architectural-design.jpg",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    ],
    isPlaceholderData: true,
  },
];
