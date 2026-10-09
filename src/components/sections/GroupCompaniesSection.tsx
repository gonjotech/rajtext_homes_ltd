"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Shirt,
  HardHat,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Layers,
} from "lucide-react";
import { GROUP_COMPANIES_DATA, GroupCompany } from "@/data/groupCompanies";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ICON_MAP: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-6 h-6 text-amber-400" />,
  Shirt: <Shirt className="w-6 h-6 text-amber-400" />,
  HardHat: <HardHat className="w-6 h-6 text-amber-400" />,
};

export function GroupCompaniesSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-900 border-b border-slate-800 text-white relative overflow-hidden">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading
            align="left"
            badge="Group Portfolio"
            title="Our Sister Concerns &"
            titleHighlight="Allied Companies"
            subtitle="Spanning architectural engineering, export-quality garments manufacturing, and civil land infrastructure development across Bangladesh."
          />

          <div className="shrink-0">
            <Link
              href="/sister-companies"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-700 hover:border-amber-500 text-xs font-bold uppercase tracking-wider text-white transition-all group"
            >
              <span>View All Group Companies</span>
              <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 3 Companies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {GROUP_COMPANIES_DATA.map((company) => (
            <div
              key={company.id}
              className="bg-slate-950 border border-slate-800 hover:border-amber-500/50 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1 group"
            >
              <div>
                {/* Visual Header */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={company.image}
                    alt={company.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-md bg-slate-950/90 backdrop-blur-md border border-slate-700 text-amber-400 font-mono text-xs font-bold">
                      {company.categoryBadge}
                    </span>
                  </div>

                  {/* Icon Emblem */}
                  <div className="absolute bottom-4 left-6 w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shadow-lg">
                    {ICON_MAP[company.iconName] || (
                      <Building2 className="w-6 h-6 text-amber-400" />
                    )}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {company.name}
                    </h3>
                    <p className="text-xs font-mono text-amber-500 font-semibold mt-0.5">
                      {company.businessType}
                    </p>
                    <p className="text-xs text-slate-400 italic mt-1 font-medium">
                      &ldquo;{company.tagline}&rdquo;
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {company.shortDescription}
                  </p>

                  {/* Capabilities Checklist */}
                  <div className="pt-3 border-t border-slate-800/80 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Core Operations:
                    </span>
                    <ul className="space-y-1.5">
                      {company.coreCapabilities.slice(0, 3).map((cap, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-slate-900 flex items-center justify-between">
                <Link
                  href={`/sister-companies#${company.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 group/link"
                >
                  <span>Company Overview</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>

                <span className="text-[11px] font-mono text-slate-500">
                  {company.location}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Group Synergy Callout Box */}
        <div className="mt-16 p-8 rounded-3xl bg-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
              <Layers className="w-4 h-4" />
              <span>Multi-Sector Industrial Strength</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Unified Standards of Integrity & Generational Quality
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
              Whether building architectural landmarks, delivering heavy civil foundations, or
              manufacturing export-quality garments, all group ventures are anchored in disciplined
              management, transparency, and client satisfaction.
            </p>
          </div>

          <Link
            href="/sister-companies"
            className="shrink-0 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-amber-500/20"
          >
            Explore Group Profile
          </Link>
        </div>
      </div>
    </section>
  );
}
