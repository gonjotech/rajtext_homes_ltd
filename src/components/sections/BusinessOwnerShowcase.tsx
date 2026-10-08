"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Factory,
  TrendingUp,
  ShieldCheck,
  Clock,
  ArrowRight,
  Maximize2,
  CheckCircle2,
  FileSpreadsheet,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const BUSINESS_PROJECTS = [
  {
    id: "apex-corporate-landmark",
    slug: "gulshan-corporate-center",
    title: "Apex Corporate Landmark",
    type: "Commercial Office Tower",
    client: "Apex Financial Holdings",
    location: "Gulshan Avenue, Gulshan-2, Dhaka",
    area: "65,000 Sft",
    timeline: "18 Months Handover",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Column-free post-tensioned floorplates for maximum workstation density",
      "Unitized Low-E glass curtain wall cutting cooling expenditure by 35%",
      "UL-listed automated fire hydrant and pressurized escape stairs",
    ],
    badge: "Corporate HQ",
  },
  {
    id: "gazipur-logistics-hub",
    slug: "gazipur-logistics-industrial-park",
    title: "Modern Logistics & Manufacturing Hub",
    type: "Heavy Industrial & PEB Facility",
    client: "Bengal Industrial Corporation",
    location: "Kashimpur Industrial Zone, Gazipur",
    area: "120,000 Sft",
    timeline: "11 Months Fast-Track",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "45m clear-span PEB portal frames optimized for forklift logistics",
      "Laser-screeded heavy duty industrial floor (7.5 Ton/m² point loading)",
      "High-bay smoke vents, fire ring line & rain runoff retention",
    ],
    badge: "Industrial & PEB",
  },
  {
    id: "mirpur-commercial-plaza",
    slug: "mirpur-commercial-complex",
    title: "Metro Plaza Mixed-Use Complex",
    type: "Retail Shopping & Office Atrium",
    client: "Metro Properties Ltd.",
    location: "Mirpur-10 Circle, Dhaka",
    area: "75,000 Sft",
    timeline: "20 Months Execution",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Special seismic moment resisting frames with vibration isolation",
      "Multi-level retail atrium designed for continuous footfall circulation",
      "Automated basement stack parking maximizing vehicle capacity",
    ],
    badge: "Retail & Mixed-Use",
  },
];

const BUSINESS_BENEFITS = [
  {
    icon: <TrendingUp className="w-5 h-5 text-amber-400" />,
    title: "Maximum Space Yield & FAR Optimization",
    description:
      "We design floorplates to squeeze every compliant square inch out of RAJUK/CDA setback and FAR regulations, directly multiplying your leasable rental income.",
  },
  {
    icon: <Clock className="w-5 h-5 text-amber-400" />,
    title: "Fast-Track Handover for Rapid ROI",
    description:
      "Delayed construction destroys business cashflow. Our CPM milestone scheduling and pre-procured materials ensure early commercial occupancy.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
    title: "BNBC Fire & Department Approvals",
    description:
      "Full turnkey support for Fire Service & Civil Defence (FSCD), Department of Environment (DoE), and factory compliance audits without regulatory bottlenecks.",
  },
  {
    icon: <Factory className="w-5 h-5 text-amber-400" />,
    title: "In-House Custom Wood & Metal Fabrication",
    description:
      "Our North Badda workshop delivers executive boardrooms, corporate workstations, and bespoke showroom facades with factory-direct pricing and zero delay.",
  },
];

export function BusinessOwnerShowcase() {
  return (
    <section className="py-20 lg:py-28 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading
            align="left"
            badge="For Business Owners & Developers"
            title="Commercial & Industrial"
            titleHighlight="Building Solutions"
            subtitle="Tailored construction contracting for corporate towers, pre-engineered steel (PEB) factories, logistics warehouses, and commercial developments across Bangladesh."
          />

          <div className="shrink-0 flex items-center gap-3">
            <Link
              href="/quote?projectType=Commercial"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Commercial BOQ Inquiry</span>
            </Link>
          </div>
        </div>

        {/* 3 Core Commercial Projects Showcase with Real Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {BUSINESS_PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="bg-slate-900 border border-slate-800 hover:border-amber-500/40 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 group"
            >
              <div>
                {/* Photo container */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-950">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-md bg-slate-950/90 backdrop-blur-md border border-slate-700 text-amber-400 font-mono text-xs font-bold">
                      {proj.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-4 px-3 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-700 font-mono text-xs text-white">
                    {proj.area}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-xs font-mono text-amber-500 block uppercase">
                      {proj.type}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors mt-0.5">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">{proj.location}</p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Commercial Highlights:
                    </span>
                    <ul className="space-y-1.5">
                      {proj.highlights.map((hl, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="px-6 pb-6 pt-3 border-t border-slate-800/60 flex items-center justify-between">
                <Link
                  href={`/projects/${proj.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 group/link"
                >
                  <span>View Project Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>

                <span className="text-[11px] font-mono text-slate-500">
                  {proj.timeline}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition Grid for Business Owners */}
        <div className="mt-16 pt-12 border-t border-slate-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BUSINESS_BENEFITS.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/30 transition-all space-y-3"
              >
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 w-fit">
                  {item.icon}
                </div>
                <h4 className="text-sm font-bold text-white">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Business Consultation Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Planning a Factory, Corporate Tower or Commercial Development?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Schedule a strategic consultation at our Uttara Corporate Studio with our principal
              structural engineer and senior commercial estimators.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              href="/quote"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider text-center transition-colors"
            >
              Get Commercial Feasibility
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs text-center border border-slate-700 transition-colors"
            >
              Contact Commercial Desk
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
