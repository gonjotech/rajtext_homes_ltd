"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Compass,
  Building,
  Home,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  FileText,
  Key,
} from "lucide-react";

interface PillarItem {
  id: string;
  badge: string;
  bnBadge: string;
  title: string;
  bnTitle: string;
  tagline: string;
  image: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaLink: string;
  accentColor: string;
}

const PILLARS: PillarItem[] = [
  {
    id: "architectural-design",
    badge: "Pillar 01 // Design & Planning",
    bnBadge: "আর্কিটেকচারাল ডিজাইন",
    title: "Architectural Design",
    bnTitle: "আধুনিক ও নান্দনিক আর্কিটেকচারাল ডিজাইন",
    tagline: "Conceptual 2D/3D Plans, Structural BIM & RAJUK Approvals",
    image: "/images/architectural-design.jpg",
    description:
      "From bioclimatic spatial planning and photorealistic 3D elevations to BNBC 2020 seismic structural engineering, our Uttara studio creates architectural landmarks that balance aesthetic elegance with engineering precision.",
    features: [
      "Master floor plans, 3D exterior & interior photorealistic renders",
      "BNBC 2020 seismic & wind load structural engineering (ETABS / SAFE)",
      "RAJUK, CDA & City Corporation approval-ready working drawings",
      "Integrated MEP (Electrical Single Line, Plumbing & Fire Hydrant) design",
    ],
    ctaLabel: "Consult Architectural Design",
    ctaLink: "/quote?service=architectural-design",
    accentColor: "from-amber-400 to-amber-500",
  },
  {
    id: "duplex-construction",
    badge: "Pillar 02 // Civil & Contracting",
    bnBadge: "ডুপ্লেক্স ও বিল্ডিং কনস্ট্রাকশন",
    title: "Duplex & Building Construction",
    bnTitle: "লাক্সারি ডুপ্লেক্স ও বহুতল ভবন নির্মাণ",
    tagline: "Turnkey Luxury Duplexes & Multi-Storey RCC Superstructures",
    image: "/images/duplex-construction.jpg",
    description:
      "We deliver high-end duplex residences and multi-storey residential/commercial buildings with complete turnkey contracting—from deep piling and earth excavation to heavy RCC casting and refined facade handovers.",
    features: [
      "Bespoke luxury contemporary duplex villas & executive residences",
      "Multi-storey commercial & residential RCC structural frames",
      "Tier-1 materials: 500W TMT steel, OPC cement, graded stone aggregates",
      "100% transparent milestone-linked BOQ with zero hidden markups",
    ],
    ctaLabel: "View Duplex & Building Projects",
    ctaLink: "/projects",
    accentColor: "from-blue-400 to-blue-500",
  },
  {
    id: "interior-exterior-ready-flats",
    badge: "Pillar 03 // Interior, Exterior & Flats",
    bnBadge: "ইন্টেরিয়র, এক্সটেরিয়র ও রেডি ফ্ল্যাট",
    title: "Interior Exterior & Buy / Sell Ready Flats",
    bnTitle: "ইন্টেরিয়র, এক্সটেরিয়র এবং রেডি ফ্ল্যাট ক্রয়-বিক্রয়",
    tagline: "In-House Woodwork Plant, Facade Elevations & Verified Ready Flats",
    image: "/images/interior-exterior-ready-flats.jpg",
    description:
      "Transform your space with custom teakwood joinery manufactured in our North Badda factory plant, architectural exterior facade louvers, plus verified, legally clear ready flats for sale and purchase across Dhaka.",
    features: [
      "Bespoke furniture & modular joinery from North Badda workshop",
      "Modern exterior elevations: louvers, HPL, glass facades & ACP panels",
      "Buy & Sell verified ready flats in Uttara, Gulshan, Banani & Bashundhara",
      "100% vetted legal land ownership & immediate handover assurance",
    ],
    ctaLabel: "Inquire Ready Flats & Interior",
    ctaLink: "/quote?service=ready-flats",
    accentColor: "from-emerald-400 to-emerald-500",
  },
];

export function CoreSpecializationsSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden border-b border-slate-800">
      {/* Blueprint Grid & Ambient Glows */}
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Our Core Focus // আমাদের প্রধান সেবাসমূহ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Architectural Design, Duplex Construction &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
              Ready Flats Solutions
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            RajTex Homes Ltd. provides disciplined engineering, luxury residential building,
            and turnkey interior execution across three core specializations.
          </p>
        </div>

        {/* 3 Pillars Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1.5 group"
            >
              <div>
                {/* Visual Imagery Header */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />

                  {/* Top Badge Overlay */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-md bg-slate-950/90 backdrop-blur-md border border-slate-700 font-mono text-[11px] font-bold text-amber-400">
                      {pillar.badge}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-amber-500/20 backdrop-blur-md border border-amber-500/40 text-[11px] font-semibold text-amber-300">
                      {pillar.bnBadge}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-amber-500/90 font-medium mt-0.5">
                      {pillar.bnTitle}
                    </p>
                    <p className="text-xs font-mono text-slate-400 mt-1 italic">
                      &ldquo;{pillar.tagline}&rdquo;
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Bullet Points */}
                  <div className="pt-2 border-t border-slate-800/80 space-y-2.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                      Key Highlights & Capabilities:
                    </span>
                    <ul className="space-y-2">
                      {pillar.features.map((feat, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs text-slate-200"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 sm:p-7 pt-0">
                <Link
                  href={pillar.ctaLink}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-700 hover:border-amber-400 text-xs font-bold uppercase tracking-wider text-white transition-all group-hover:text-amber-300"
                >
                  <span>{pillar.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
