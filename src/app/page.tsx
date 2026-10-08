import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { CompanyIntro } from "@/components/sections/CompanyIntro";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { CorporatePhilosophy } from "@/components/sections/CorporatePhilosophy";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <main>
      {/* 1. Premium Hero Section */}
      <HeroSection />

      {/* 2. Trust / Company Intro + Animated Counter Stats */}
      <CompanyIntro />

      {/* 3. Core Engineering & Construction Services */}
      <ServicesGrid />

      {/* 4. Filterable Project Gallery Showcase with Lightbox */}
      <ProjectShowcase initialLimit={6} />

      {/* 5. Six Pillars: Why Choose RajTex */}
      <WhyChooseUs />

      {/* 6. Visual 8-Step Process Workflow Timeline */}
      <ProcessTimeline />

      {/* 7. Large Editorial-Style Featured Project */}
      <FeaturedProject />

      {/* 8. Corporate Philosophy & Company Intro Statement */}
      <CorporatePhilosophy />

      {/* 9. Direct CTA & Project Inquiries */}
      <CTASection />
    </main>
  );
}
