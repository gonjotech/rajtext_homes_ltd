export interface CompanyStats {
  id: string;
  value: string;
  number: number;
  suffix: string;
  label: string;
  description: string;
  isPlaceholder: boolean; // Flag to indicate placeholder value that can be easily modified
}

export interface CompanyInfo {
  name: string;
  legalName: string;
  shortName: string;
  tagline: string;
  alternativeHeadline: string;
  motto: string;
  domain: string;
  description: string;
  establishedYear: number;
  
  // Addresses directly from official records
  headOffice: {
    title: string;
    building: string;
    address: string;
    area: string;
    city: string;
    country: string;
    postalCode: string;
    fullFormatted: string;
    mapQuery: string;
  };
  workshopAndFactory: {
    title: string;
    division: string;
    address: string;
    area: string;
    city: string;
    country: string;
    postalCode: string;
    fullFormatted: string;
  };

  phones: {
    primary: string;
    secondary: string;
    formattedPrimary: string;
    formattedSecondary: string;
    rawPrimary: string;
    rawSecondary: string;
    whatsapp: string;
  };

  emails: {
    info: string;
    support: string;
    projects: string;
    career: string;
  };

  socialLinks: {
    facebook?: string;
    linkedin?: string;
    youtube?: string;
    instagram?: string;
  };

  businessHours: string;
  
  // Stats (Clearly marked editable placeholders)
  stats: CompanyStats[];
}

export const COMPANY_DATA: CompanyInfo = {
  name: "RajTex Homes Ltd.",
  legalName: "RajTex Homes Limited",
  shortName: "RajTex",
  tagline: "Building Vision. Engineering Excellence.",
  alternativeHeadline: "From Vision to Structure.",
  motto: "Creative | Honesty | Satisfaction",
  domain: "https://rajtexhomesltd.com",
  description:
    "Integrated architectural, engineering and construction solutions for residential, commercial and industrial projects across Bangladesh. Delivering turnkey precision from conceptual blueprints to final handover.",
  establishedYear: 2014,

  headOffice: {
    title: "Corporate Head Office",
    building: "House # 02, Lift-06",
    address: "Road # 18, Sector # 12",
    area: "Uttara Model Town",
    city: "Dhaka",
    country: "Bangladesh",
    postalCode: "Dhaka-1230",
    fullFormatted: "House # 02 (Lift-06), Road # 18, Sector # 12, Uttara Model Town, Dhaka-1230, Bangladesh",
    mapQuery: "Uttara Sector 12, Dhaka, Bangladesh",
  },

  workshopAndFactory: {
    title: "Furniture & Fabrication Workshop",
    division: "Industrial Unit & Joinery Plant",
    address: "14 Purbachal",
    area: "North Badda",
    city: "Dhaka",
    country: "Bangladesh",
    postalCode: "Dhaka-1212",
    fullFormatted: "14 Purbachal, North Badda, Dhaka-1212, Bangladesh",
  },

  phones: {
    primary: "+880 1719-048724",
    secondary: "+880 1732-795399",
    formattedPrimary: "+880 1719-048724",
    formattedSecondary: "+880 1732-795399",
    rawPrimary: "+8801719048724",
    rawSecondary: "+8801732795399",
    whatsapp: "+8801719048724",
  },

  emails: {
    info: "info@rajtexhomesltd.com",
    support: "support@rajtexhomesltd.com",
    projects: "projects@rajtexhomesltd.com",
    career: "career@rajtexhomesltd.com",
  },

  socialLinks: {
    facebook: "https://facebook.com/rajtexhomesltd",
    linkedin: "https://linkedin.com/company/rajtex-homes-ltd",
    youtube: "https://youtube.com/@rajtexhomesltd",
    instagram: "https://instagram.com/rajtexhomesltd",
  },

  businessHours: "Saturday – Thursday: 9:00 AM – 7:00 PM (Friday Closed)",

  /*
   * -------------------------------------------------------------
   * PLACEHOLDER STATISTICS
   * Modify the numbers, values, and labels below at any time.
   * -------------------------------------------------------------
   */
  stats: [
    {
      id: "experience",
      value: "10+",
      number: 10,
      suffix: "+",
      label: "Years of Industry Experience",
      description: "Dedicated to architectural mastery and structural integrity",
      isPlaceholder: true,
    },
    {
      id: "projects",
      value: "50+",
      number: 50,
      suffix: "+",
      label: "Completed & Active Projects",
      description: "Residential towers, duplex residences, and commercial facilities",
      isPlaceholder: true,
    },
    {
      id: "coverage",
      value: "100%",
      number: 100,
      suffix: "%",
      label: "Commitment to Quality",
      description: "Zero compromise on BNBC standards and structural durability",
      isPlaceholder: true,
    },
    {
      id: "capability",
      value: "64",
      number: 64,
      suffix: " Districts",
      label: "Nationwide Project Capability",
      description: "Engineering execution across Dhaka, Chattogram and all divisions",
      isPlaceholder: true,
    },
  ],
};
