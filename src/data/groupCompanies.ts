export interface GroupCompany {
  id: string;
  slug: string;
  name: string;
  businessType: string;
  categoryBadge: string;
  tagline: string;
  shortDescription: string;
  fullOverview: string;
  coreCapabilities: string[];
  keyHighlights: string[];
  stats?: { label: string; value: string }[];
  establishedYear?: string;
  location: string;
  iconName: string;
  image: string;
  websiteUrl?: string;
  contactEmail?: string;
  contactPhone?: string;
}

export const GROUP_COMPANIES_DATA: GroupCompany[] = [
  {
    id: "rajtex-homes-ltd",
    slug: "rajtex-homes-ltd",
    name: "RajTex Homes Ltd.",
    businessType: "Architecture, Engineering, Construction & Turnkey Contracting",
    categoryBadge: "Building & Construction",
    tagline: "Building Vision. Engineering Excellence.",
    shortDescription:
      "Integrated architectural design, BNBC 2020 compliant structural engineering, turnkey duplex construction, and in-house furniture & metal fabrication plant.",
    fullOverview:
      "RajTex Homes Ltd. serves as the premier construction and architectural engineering pillar of the group. Headquartered in Uttara Model Town with a dedicated furniture and fabrication plant in North Badda, Dhaka, the company delivers end-to-end building solutions from preliminary subsoil investigation and municipal RAJUK clearances to heavy RCC superstructure casting and bespoke interior handovers.",
    coreCapabilities: [
      "Architectural CAD/BIM & Bioclimatic Spatial Design",
      "BNBC 2020 & ACI 318 Seismic Structural Engineering",
      "Turnkey Residential Duplex & High-Rise Civil Contracting",
      "In-House Teakwood Joinery & CNC Metal Fabrication",
      "Industrial PEB Warehouse & Factory Construction",
    ],
    keyHighlights: [
      "Twin facilities: Executive Studio in Uttara & Joinery Plant in North Badda",
      "Strict quality control with third-party cylinder compression testing",
      "Transparent milestone-linked BOQ estimation with zero hidden markups",
    ],
    stats: [
      { label: "Core Divisions", value: "Design + Contracting + Joinery" },
      { label: "Engineering Standard", value: "BNBC 2020 Compliant" },
    ],
    location: "Uttara Model Town & North Badda, Dhaka",
    iconName: "Building2",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    websiteUrl: "https://rajtexhomesltd.com",
    contactEmail: "info@rajtexhomesltd.com",
    contactPhone: "+880 1719-048724",
  },
  {
    id: "rajtex-garments",
    slug: "rajtex-garments",
    name: "RajTex",
    businessType: "Garments Manufacturer & Global Apparel Supplier",
    categoryBadge: "Apparel & Textile Manufacturing",
    tagline: "Global Standards in Quality Garment Manufacturing & Supply.",
    shortDescription:
      "Export-quality ready-made garments (RMG) manufacturing, apparel sourcing, knitwear and woven production supplying international retailers with ethical compliance.",
    fullOverview:
      "RajTex operates as a forward-thinking garments manufacturing and apparel supply concern. With a steadfast commitment to fabric quality, modern industrial sewing lines, ethical labor practices, and on-time global shipments, RajTex delivers premier knit, woven, and specialized apparel products for corporate and global consumer markets.",
    coreCapabilities: [
      "Knitwear & Woven Garment Manufacturing",
      "High-Volume Apparel Sourcing & Supply Chain Management",
      "Modern Sewing, Cutting & Automated Finishing Lines",
      "Quality Assurance & Multi-Tier Fabric Inspection Protocols",
      "Custom Corporate Uniforms, Workwear & Fashion Apparel",
    ],
    keyHighlights: [
      "Strict compliance with international workplace safety & labor standards",
      "High-capacity production lines ensuring dependable shipment deliveries",
      "Sustainable fabric sourcing and eco-friendly dye processing options",
    ],
    stats: [
      { label: "Industry Focus", value: "Knitwear & Woven Apparel" },
      { label: "Market Reach", value: "Domestic & International Supply" },
    ],
    location: "Dhaka, Bangladesh",
    iconName: "Shirt",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80",
    websiteUrl: "https://rajtexhomesltd.com/sister-companies#rajtex-garments",
    contactEmail: "info@rajtexhomesltd.com",
    contactPhone: "+880 1719-048724",
  },
  {
    id: "raj-builder",
    slug: "raj-builder",
    name: "Raj Builder",
    businessType: "Civil Contracting, Land Development & Infrastructure",
    categoryBadge: "Civil Contracting & Development",
    tagline: "Foundations for Urban Development & Infrastructure.",
    shortDescription:
      "Heavy civil contracting, land development, earthwork excavation, residential site prep, and structural foundation execution across Dhaka and divisional hubs.",
    fullOverview:
      "Raj Builder is the civil contracting and land infrastructure division, specialized in heavy site development, earthmoving logistics, shore piling, foundation excavation, and municipal infrastructure works. Partnering closely with developers, landowners, and industrial clients, Raj Builder lays the bedrock upon which landmark structures stand.",
    coreCapabilities: [
      "Land Development, Grading & Bulk Earthmoving",
      "Deep Foundation Excavation & Cast-in-Situ Bored Piling",
      "Shore Piling, Retention Wall & Shoring Infrastructure",
      "Drainage Networks, Culverts & Site Access Roadways",
      "Heavy Civil Substructure Contracting",
    ],
    keyHighlights: [
      "Heavy construction equipment fleet and experienced site machinery operators",
      "Rapid site preparation enabling prompt structural superstructure mobilization",
      "Strict geotechnical safety protocols and embankment slope stability",
    ],
    stats: [
      { label: "Core Competency", value: "Land & Foundation Infrastructure" },
      { label: "Project Footprint", value: "Dhaka & Surrounding Divisions" },
    ],
    location: "Dhaka, Bangladesh",
    iconName: "HardHat",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=1200&q=80",
    websiteUrl: "https://rajtexhomesltd.com/sister-companies#raj-builder",
    contactEmail: "info@rajtexhomesltd.com",
    contactPhone: "+880 1732-795399",
  },
];
