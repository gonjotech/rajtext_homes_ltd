import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { CoreSpecializationsSection } from "@/components/sections/CoreSpecializationsSection";
import { CompanyIntro } from "@/components/sections/CompanyIntro";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { BusinessOwnerShowcase } from "@/components/sections/BusinessOwnerShowcase";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { CorporatePhilosophy } from "@/components/sections/CorporatePhilosophy";
import { GroupCompaniesSection } from "@/components/sections/GroupCompaniesSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <main>
      {/* 1. Premium Hero Section */}
      <HeroSection />

      {/* 2. Core Focus: Architectural Design | Duplex & Building Construction | Interior Exterior & Ready Flats */}
      <CoreSpecializationsSection />

      {/* 3. Trust / Company Intro + Real Photos of Uttara Studio & North Badda Workshop + Stats */}
      <CompanyIntro />

      {/* 3. Core Engineering & Construction Services */}
      <ServicesGrid />

      {/* 4. Dedicated Commercial & Industrial Section for Business Owners */}
      <BusinessOwnerShowcase />

      {/* 5. Filterable Project Gallery Showcase with Lightbox */}
      <ProjectShowcase initialLimit={6} />

      {/* 6. Six Pillars: Why Choose RajTex */}
      <WhyChooseUs />

      {/* 7. Visual 8-Step Process Workflow Timeline */}
      <ProcessTimeline />

      {/* 8. Large Editorial-Style Featured Project */}
      <FeaturedProject />

      {/* 9. Corporate Philosophy & Company Intro Statement */}
      <CorporatePhilosophy />

      {/* 10. Sister Concerns & Group Companies (RajTex Garments, Raj Builder, RajTex Homes) */}
      <GroupCompaniesSection />

      {/* 11. Direct CTA & Project Inquiries */}
      <CTASection />
    </main>
  );
}
