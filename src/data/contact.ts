export interface OfficeLocation {
  id: string;
  name: string;
  badge: string;
  addressLine1: string;
  addressLine2: string;
  cityPostal: string;
  country: string;
  phone: string;
  email: string;
  hours: string;
  description: string;
  mapEmbedUrl: string; // Google Maps embed placeholder
}

export const CONTACT_OFFICES: OfficeLocation[] = [
  {
    id: "head-office-uttara",
    name: "Corporate Head Office",
    badge: "Executive & Design Studio",
    addressLine1: "House # 02, (Lift-06), Road # 18",
    addressLine2: "Sector # 12, Uttara Model Town",
    cityPostal: "Dhaka-1230",
    country: "Bangladesh",
    phone: "+880 1719-048724 / +880 1732-795399",
    email: "info@rajtexhomesltd.com",
    hours: "Saturday – Thursday: 9:00 AM – 7:00 PM (Friday Closed)",
    description:
      "Our central executive headquarters, architectural studio, structural engineering lab, and client consultation suites.",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14596.538566415668!2d90.3804824!3d23.8736854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c468e2171ec5%3A0x6b5c3be992c64bfa!2sSector%2012%2C%20Uttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd",
  },
  {
    id: "workshop-badda",
    name: "Furniture & Metal Workshop",
    badge: "Manufacturing & Joinery Plant",
    addressLine1: "14 Purbachal",
    addressLine2: "North Badda",
    cityPostal: "Dhaka-1212",
    country: "Bangladesh",
    phone: "+880 1719-048724",
    email: "projects@rajtexhomesltd.com",
    hours: "Saturday – Thursday: 8:30 AM – 6:30 PM",
    description:
      "Our specialized joinery, custom furniture fabrication, CNC sheet metal carving, and structural steel fitting facility.",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14603.957580766258!2d90.4244589!3d23.7834241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79247c45c2f%3A0xe54d0089fce97da5!2sNorth%20Badda%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd",
  },
];

export const PROJECT_TYPES_LIST = [
  "Residential Duplex / Villa",
  "Multi-Storey Apartment Tower",
  "Commercial Office Building",
  "Industrial Factory / PEB Warehouse",
  "Building Renovation & Retrofitting",
  "Luxury Interior Fit-out",
  "Turnkey Construction",
  "Architectural / Structural Design Only",
];

export const BUDGET_RANGES_LIST = [
  "BDT 10 Lac – BDT 50 Lac",
  "BDT 50 Lac – BDT 1 Crore",
  "BDT 1 Crore – BDT 3 Crore",
  "BDT 3 Crore – BDT 10 Crore",
  "BDT 10 Crore+",
  "To be determined with BOQ",
];
