import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Shirt,
  HardHat,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Mail,
  Phone,
  Layers,
  ShieldCheck,
  TrendingUp,
  Award,
} from "lucide-react";
import { GROUP_COMPANIES_DATA } from "@/data/groupCompanies";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Sister Companies & Group Concerns",
  description:
    "Explore the group portfolio of RajTex: RajTex Homes Ltd. (Architecture & Construction), RajTex (Garments Manufacturer & Supplier), and Raj Builder (Civil Contracting & Land Development).",
};

const ICON_MAP: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-8 h-8 text-amber-400" />,
  Shirt: <Shirt className="w-8 h-8 text-amber-400" />,
  HardHat: <HardHat className="w-8 h-8 text-amber-400" />,
};

export default function SisterCompaniesPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-28 bg-slate-900 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <span>Group Portfolio & Allied Ventures</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Our Sister Companies &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
                Allied Concerns
              </span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Uniting architectural engineering, export-oriented garments manufacturing, and heavy
              civil land development under a single tradition of craftsmanship and corporate integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Jump Navigation */}
      <section className="py-5 bg-slate-950/80 border-b border-slate-800 sticky top-20 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-3 overflow-x-auto no-scrollbar">
          <span className="text-xs font-mono text-slate-500 uppercase tracking-widest shrink-0">
            Group Entities:
          </span>
          {GROUP_COMPANIES_DATA.map((c) => (
            <a
              key={c.id}
              href={`#${c.slug}`}
              className="px-4 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/50 text-xs font-bold text-slate-300 hover:text-white whitespace-nowrap transition-colors"
            >
              {c.name}
            </a>
          ))}
        </div>
      </section>

      {/* Deep-Dive Company Profiles */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {GROUP_COMPANIES_DATA.map((company, index) => (
            <div
              key={company.id}
              id={company.slug}
              className="scroll-mt-36 p-8 sm:p-12 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl relative overflow-hidden"
            >
              {/* Technical Watermark */}
              <div className="absolute top-4 right-8 font-mono text-8xl sm:text-9xl font-black text-slate-800/20 select-none pointer-events-none">
                0{index + 1}
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Visual Card (5 cols) */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-950">
                    <Image
                      src={company.image}
                      alt={company.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 500px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-md bg-slate-950/90 backdrop-blur-md border border-slate-700 text-amber-400 font-mono text-xs font-bold">
                        {company.categoryBadge}
                      </span>
                    </div>
                  </div>

                  {/* Contact / Inquiries Box */}
                  <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 text-xs">
                    <span className="text-[10px] font-mono uppercase text-amber-500 font-bold block">
                      Direct Corporate Desk
                    </span>
                    <div className="space-y-2 text-slate-300">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>{company.location}</span>
                      </div>
                      {company.contactPhone && (
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                          <span>{company.contactPhone}</span>
                        </div>
                      )}
                      {company.contactEmail && (
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                          <span>{company.contactEmail}</span>
                        </div>
                      )}
                    </div>

                    <div className="pt-3 border-t border-slate-800">
                      {company.id === "rajtex-homes-ltd" ? (
                        <Link
                          href="/services"
                          className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors"
                        >
                          <span>Explore Construction Services</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      ) : (
                        <Link
                          href="/contact"
                          className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider transition-colors border border-slate-700"
                        >
                          <span>Inquire Business Partnership</span>
                          <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                {/* Narrative Details (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0">
                      {ICON_MAP[company.iconName]}
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 block">
                        COMPANY PROFILE // 0{index + 1}
                      </span>
                      <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-0.5">
                        {company.name}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                        {company.businessType}
                      </p>
                    </div>
                  </div>

                  <blockquote className="p-4 rounded-xl bg-slate-950/60 border-l-4 border-amber-500 text-slate-300 italic text-sm">
                    &ldquo;{company.tagline}&rdquo;
                  </blockquote>

                  <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-3">
                    <p>{company.fullOverview}</p>
                  </div>

                  {/* Core Capabilities */}
                  <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-3">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      Core Capabilities & Operations:
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {company.coreCapabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Strategic Advantages:
                    </h4>
                    <ul className="space-y-1.5">
                      {company.keyHighlights.map((hl, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <span className="text-amber-500 font-mono text-[11px] mt-0.5 shrink-0">
                            [{i + 1}]
                          </span>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Strategic Synergy Section */}
      <section className="py-20 lg:py-24 bg-slate-900/60 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Collaborative Value"
            title="Strategic Synergy"
            titleHighlight="Across Our Group"
            subtitle="How our sister concerns interconnect to provide seamless execution from heavy earthwork and structural creation to corporate supply chains."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <HardHat className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">1. Ground Foundation & Earthwork</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                <strong>Raj Builder</strong> executes site grading, earth excavation, retention
                piling, and infrastructure preparation to secure solid bedrock.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">2. Architectural & Turnkey Build</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                <strong>RajTex Homes Ltd.</strong> designs the blueprints, casts the seismic
                superstructure, and manufactures custom timber joinery from North Badda.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Shirt className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">3. Global Textile & Supply Power</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                <strong>RajTex</strong> manufactures and exports high-standard knit and woven
                garments, corporate uniforms, and international apparel supply.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
