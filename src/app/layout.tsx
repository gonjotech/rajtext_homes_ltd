import type { Metadata } from "next";
import "./globals.css";
import { NavbarWrapper } from "@/components/layout/NavbarWrapper";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileBar } from "@/components/layout/StickyMobileBar";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { COMPANY_DATA } from "@/data/company";

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY_DATA.domain),
  title: {
    default: `${COMPANY_DATA.name} | Architecture, Engineering & Construction Bangladesh`,
    template: `%s | ${COMPANY_DATA.name}`,
  },
  description:
    "RajTex Homes Ltd. is a premier architecture, structural engineering, and building construction contracting company in Dhaka, Bangladesh. Offering turnkey residential, commercial, and industrial execution.",
  keywords: [
    "RajTex Homes Ltd",
    "construction company Bangladesh",
    "construction company Dhaka",
    "building construction Bangladesh",
    "engineering company Bangladesh",
    "architectural design Bangladesh",
    "structural engineering Bangladesh",
    "turnkey construction Bangladesh",
    "home construction Bangladesh",
    "commercial construction Bangladesh",
    "industrial construction Bangladesh",
    "duplex construction Dhaka",
    "Uttara construction firm",
  ],
  authors: [{ name: COMPANY_DATA.name, url: COMPANY_DATA.domain }],
  creator: COMPANY_DATA.name,
  publisher: COMPANY_DATA.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_BD",
    url: COMPANY_DATA.domain,
    title: `${COMPANY_DATA.name} | Architecture, Engineering & Construction Bangladesh`,
    description:
      "Integrated architectural, engineering and construction solutions for residential, commercial and industrial projects across Bangladesh. Building Vision. Engineering Excellence.",
    siteName: COMPANY_DATA.name,
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: `${COMPANY_DATA.name} - Architecture, Engineering & Construction`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_DATA.name} | Architecture, Engineering & Construction Bangladesh`,
    description:
      "Integrated architectural, engineering and construction solutions for residential, commercial and industrial projects across Bangladesh.",
    images: ["/logo.jpeg"],
  },
  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaOrgData = {
    "@context": "https://schema.org",
    "@type": ["GeneralContractor", "Organization"],
    name: COMPANY_DATA.name,
    legalName: COMPANY_DATA.legalName,
    url: COMPANY_DATA.domain,
    logo: `${COMPANY_DATA.domain}/logo.jpeg`,
    description: COMPANY_DATA.description,
    telephone: COMPANY_DATA.phones.primary,
    email: COMPANY_DATA.emails.info,
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "House # 02, Lift-06, Road # 18, Sector # 12, Uttara Model Town",
        addressLocality: "Dhaka",
        postalCode: "1230",
        addressCountry: "BD",
        name: "Corporate Head Office",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "14 Purbachal, North Badda",
        addressLocality: "Dhaka",
        postalCode: "1212",
        addressCountry: "BD",
        name: "Furniture Workshop & Fabrication Plant",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    areaServed: {
      "@type": "Country",
      name: "Bangladesh",
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgData) }}
        />
      </head>
      <body className="bg-slate-950 text-slate-100 antialiased min-h-screen flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
        <NavbarWrapper />
        <div className="flex-1 pb-16 sm:pb-0">{children}</div>
        <Footer />
        <StickyMobileBar />
        <WhatsAppButton />
      </body>
    </html>
  );
}
