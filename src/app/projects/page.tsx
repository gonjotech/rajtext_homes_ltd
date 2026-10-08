import React from "react";
import type { Metadata } from "next";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { BusinessOwnerShowcase } from "@/components/sections/BusinessOwnerShowcase";
import { CTASection } from "@/components/sections/CTASection";
import { COMPANY_DATA } from "@/data/company";

export const metadata: Metadata = {
  title: "Projects Portfolio",
  description:
    "Explore completed and ongoing construction, architectural, and engineering projects by RajTex Homes Ltd. in Dhaka, Banani, Uttara, Gazipur, and across Bangladesh.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-28 bg-slate-900 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <span>Executed Engineering</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Projects{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
                Showcase & Gallery
              </span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              From luxury residential duplexes in Banani to high-rise towers in Uttara, PEB
              industrial manufacturing plants, and heritage Dhanmondi retrofits.
            </p>
          </div>
        </div>
      </section>

      {/* Dedicated Section for Business Owners & Commercial Investors */}
      <BusinessOwnerShowcase />

      {/* Main Project Showcase with Full Filters and Lightbox */}
      <ProjectShowcase showTabs={true} />

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
