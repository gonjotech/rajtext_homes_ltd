"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, Award, Building, Wrench } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CompanyIntro() {
  return (
    <section className="py-20 lg:py-28 bg-slate-900 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl group">
              <div className="relative h-[440px] sm:h-[500px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=1200&q=80"
                  alt="RajTex site engineers conducting quality supervision"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              </div>

              {/* Floating Corporate Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/90 border border-slate-800 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">
                      Integrated Building Contracting
                    </h4>
                    <p className="text-slate-400 text-xs">
                      Corporate Studio in Uttara • Joinery Plant in North Badda
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Small decorative corner backdrop */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-28 h-28 border-t-2 border-l-2 border-amber-500/40 rounded-tl-xl pointer-events-none" />
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-28 h-28 border-b-2 border-r-2 border-amber-500/40 rounded-br-xl pointer-events-none" />
          </div>

          {/* Right Editorial & Intro Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              align="left"
              badge="About RajTex Homes Ltd."
              title="Delivering Visionary Architecture &"
              titleHighlight="Structural Integrity"
              subtitle="We unite licensed architects, seasoned structural consultants, and disciplined site contracting teams under one accountable umbrella."
            />

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Founded on the guiding ethos of <em>&ldquo;Creative | Honesty | Satisfaction&rdquo;</em>,
                RajTex Homes Ltd. provides full-lifecycle engineering services for private
                landowners, real estate developers, and corporate enterprises across Bangladesh.
              </p>
              <p>
                From initial subsoil testing and BNBC-compliant structural modeling to
                high-precision RCC casting, custom joinery manufactured in our North Badda
                workshop, and final handover, we eliminate the costly disconnect between design
                intent and on-site construction reality.
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
                <span>Read More About Our Company</span>
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
