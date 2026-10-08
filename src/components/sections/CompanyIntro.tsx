"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  Hammer,
  MapPin,
  Sparkles,
} from "lucide-react";
import { COMPANY_DATA } from "@/data/company";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CompanyIntro() {
  return (
    <section className="py-20 lg:py-28 bg-slate-900 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Column: Twin Facilities Showcase with Real Photos (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between pb-1">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                Integrated Facilities
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                Studio + Workshop
              </span>
            </div>

            {/* Facility Card 1: Uttara Architectural Studio */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl group bg-slate-950">
              <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80"
                  alt="Corporate Architectural Studio in Uttara Model Town, Dhaka"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Badge Overlay */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/90 backdrop-blur-md border border-slate-700 text-xs font-bold text-amber-400 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Corporate Studio // Uttara</span>
                </div>
              </div>

              <div className="p-4 sm:p-5 space-y-1.5 border-t border-slate-800">
                <div className="flex items-center justify-between">
                  <h4 className="text-white font-bold text-sm sm:text-base">
                    Corporate Design Studio
                  </h4>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800">
                    Active Hub
                  </span>
                </div>
                <p className="text-xs text-slate-300">
                  Architectural CAD/BIM studio, structural modeling (ETABS/SAFE) & client consultation suites.
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-amber-400/90 pt-1">
                  <MapPin className="w-3 h-3 shrink-0" />
                  <span className="truncate">House # 02, Road # 18, Sector # 12, Uttara Model Town</span>
                </div>
              </div>
            </div>

            {/* Facility Card 2: North Badda Joinery & Furniture Workshop */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl group bg-slate-950">
              <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80"
                  alt="Furniture & Joinery Workshop in North Badda, Dhaka"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Badge Overlay */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/90 backdrop-blur-md border border-slate-700 text-xs font-bold text-amber-400 flex items-center gap-1.5">
                  <Hammer className="w-3.5 h-3.5" />
                  <span>Joinery Plant // North Badda</span>
                </div>
              </div>

              <div className="p-4 sm:p-5 space-y-1.5 border-t border-slate-800">
                <div className="flex items-center justify-between">
                  <h4 className="text-white font-bold text-sm sm:text-base">
                    Joinery & Fabrication Plant
                  </h4>
                  <span className="text-[10px] font-mono text-amber-400 font-bold px-2 py-0.5 rounded bg-amber-950 border border-amber-800">
                    Industrial Unit
                  </span>
                </div>
                <p className="text-xs text-slate-300">
                  Custom teak furniture, CNC metal carving, gates, structural steel pipe & glass fittings.
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-amber-400/90 pt-1">
                  <MapPin className="w-3 h-3 shrink-0" />
                  <span className="truncate">14 Purbachal, North Badda, Dhaka-1212</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Editorial & Intro Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              align="left"
              badge="Integrated Building Contracting"
              title="Delivering Visionary Architecture &"
              titleHighlight="Structural Integrity"
              subtitle="From our Corporate Studio in Uttara to our Joinery Plant in North Badda, we unite licensed architects, structural engineers, and master craftsmen under one accountable roof."
            />

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Founded on the guiding ethos of <em>&ldquo;Creative | Honesty | Satisfaction&rdquo;</em>,
                RajTex Homes Ltd. provides full-lifecycle engineering and contracting services for
                private landowners, real estate developers, and corporate enterprises across Bangladesh.
              </p>
              <p>
                Unlike contractors who outsource critical stages to random third-party vendors, we
                operate two dedicated operational facilities: our <strong>Corporate Head Office in Uttara</strong>{" "}
                where our licensed architects and structural consultants engineer every calculation to
                BNBC 2020 standards, and our <strong>Joinery & Fabrication Workshop in North Badda</strong>,{" "}
                where we manufacture custom seasoned timber cabinetry, CNC ornamental steel partitions,
                and architectural glass boundary gates.
              </p>
            </div>

            {/* Core Pillars Bullet Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Strict adherence to BNBC 2020 & RAJUK bylaws</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Open-book BOQ transparency with zero hidden markups</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>In-house custom furniture & steel fabrication factory</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Milestone-backed schedules & guaranteed handovers</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 group"
              >
                <span>Read More About Our Company & Facilities</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------
            KEY STATISTICS WITH ANIMATED COUNTERS
            (Editable placeholder values structured in @/data/company.ts)
            ------------------------------------------------------------- */}
        <div className="mt-16 pt-12 border-t border-slate-800">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {COMPANY_DATA.stats.map((stat) => (
              <div
                key={stat.id}
                className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-amber-500/30 transition-all group"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-300 font-mono">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-bold text-white mt-2 group-hover:text-amber-400 transition-colors">
                  {stat.label}
                </div>
                <p className="text-xs text-slate-400 mt-1 leading-normal">
                  {stat.description}
                </p>
                {stat.isPlaceholder && (
                  <span className="sr-only">Editable placeholder in data/company.ts</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
