import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Building2,
  Hammer,
  Compass,
  CheckCircle2,
  ArrowRight,
  HardHat,
  Users,
  Award,
} from "lucide-react";
import { COMPANY_DATA } from "@/data/company";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about RajTex Homes Ltd., our engineering philosophy, corporate headquarters in Uttara, and custom furniture manufacturing workshop in North Badda, Dhaka.",
};

export default function AboutPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-28 bg-slate-900 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <span>Corporate Profile</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
                RajTex Homes Ltd.
              </span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              &ldquo;Creative | Honesty | Satisfaction&rdquo; — Pioneering high-integrity
              architectural design, structural engineering, and civil contracting in Bangladesh.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Narrative & Story */}
      <section className="py-20 lg:py-28 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="relative h-[420px] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
                  alt="Architectural engineers reviewing blueprints at RajTex Homes"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/90 border border-slate-800 backdrop-blur-md">
                  <div className="text-xs font-mono text-amber-400 font-bold uppercase">
                    Official Motto
                  </div>
                  <div className="text-white font-bold text-base mt-0.5">
                    Creative | Honesty | Satisfaction
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                align="left"
                badge="Our Foundation"
                title="Building Vision."
                titleHighlight="Engineering Excellence."
                subtitle="Bridging architectural imagination with disciplined construction governance."
              />

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  RajTex Homes Ltd. was established to solve one of the foremost pain points in the
                  Bangladeshi real estate and construction sectors: the lack of structural
                  rigor and accountability among unorganized general contractors.
                </p>
                <p>
                  We operate as a full-spectrum engineering and contracting company. We manage
                  every facet internally: preliminary geotechnical subsoil analysis, RAJUK
                  permitting, seismic dynamic structural design, high-strength RCC superstructure
                  execution, and turnkey architectural interior finishing.
                </p>
                <p>
                  Our twin pillars—the Corporate Head Office in Uttara Model Town and our
                  dedicated Furniture & Fabrication Workshop in North Badda—empower us to deliver
                  custom bespoke quality with zero dependency on third-party supply chain delays.
                </p>
              </div>

              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <strong className="text-white text-sm block">Registered In</strong>
                  <span className="text-xs text-slate-400">Dhaka, Bangladesh</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <strong className="text-white text-sm block">Core Focus</strong>
                  <span className="text-xs text-amber-400">Turnkey Construction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Twin Infrastructure Facilities (Uttara & North Badda) */}
      <section className="py-20 lg:py-28 bg-slate-900/60 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Strategic Operations"
            title="Our Integrated"
            titleHighlight="Facilities & Infrastructure"
            subtitle="Explore the executive design hub in Uttara and our specialized joinery and fabrication plant in North Badda."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Facility 1: Uttara Head Office */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 space-y-6 hover:border-amber-500/40 transition-all">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  <Building2 className="w-8 h-8" />
                </div>
                <span className="font-mono text-xs text-amber-400 font-bold px-2.5 py-1 rounded bg-amber-500/10">
                  EXECUTIVE HQ
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">Corporate Head Office</h3>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  Sector # 12, Uttara Model Town, Dhaka-1230
                </p>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                Our central nerve center housing our architectural CAD/BIM studio, structural
                engineering consultants, quantity surveyors, project management directors, and
                client consultation suites.
              </p>

              <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>3D Architectural Modeling & VR Walkthrough Suite</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Seismic ETABS & SAFE Structural Analysis Workstations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Client Conference & Material Sampling Archive</span>
                </li>
              </ul>
            </div>

            {/* Facility 2: North Badda Workshop */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 space-y-6 hover:border-amber-500/40 transition-all">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  <Hammer className="w-8 h-8" />
                </div>
                <span className="font-mono text-xs text-amber-400 font-bold px-2.5 py-1 rounded bg-amber-500/10">
                  MANUFACTURING PLANT
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">Furniture & Fabrication Workshop</h3>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  14 Purbachal, North Badda, Dhaka-1212
                </p>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                Our specialized industrial workshop facility dedicated to seasoned solid timber
                joinery, luxury cabinetry, CNC decorative metal cutting, structural steel welding,
                and architectural glass boundary fittings.
              </p>

              <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Computerized CNC Steel & Glass Partition Cutting</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Kiln-Seasoned Hardwood & Teak Joinery Fabrication</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Industrial Spray Booths & Anticorrosive Coatings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Core Values */}
      <section className="py-20 lg:py-28 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Our Mission</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                To engineer and construct enduring, architecturally refined structures that protect
                human life, elevate urban living standards, and optimize client capital with
                absolute honesty and technical precision.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Our Vision</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                To be recognized as Bangladesh&apos;s premier benchmark in corporate civil
                contracting, celebrated for flawless turnkeys, ethical engineering, and
                architectural innovation across South Asia.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Our Values</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Guided unyieldingly by <strong>Creative Thinking</strong>,{" "}
                <strong>Uncompromising Honesty</strong>, and{" "}
                <strong>Total Client Satisfaction</strong>. No corner cutting, no synthetic
                excuses, and zero safety compromise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Ribbon */}
      <section className="py-16 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_DATA.stats.map((st) => (
              <div key={st.id} className="text-center p-4">
                <div className="text-4xl sm:text-5xl font-mono font-extrabold text-amber-400">
                  <AnimatedCounter end={st.number} suffix={st.suffix} />
                </div>
                <div className="text-sm font-bold text-white mt-2">{st.label}</div>
                <p className="text-xs text-slate-400 mt-1">{st.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
