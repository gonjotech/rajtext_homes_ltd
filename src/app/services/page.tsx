import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  ShieldCheck,
  Hammer,
  Palette,
  Zap,
  Briefcase,
  Eye,
  Sparkles,
  Calculator,
  Key,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  FileText,
} from "lucide-react";
import { SERVICES_DATA } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Engineering & Construction Services",
  description:
    "Explore the 10 core services offered by RajTex Homes Ltd.: Architectural Design, Structural Engineering, Civil Contracting, Turnkey Construction, MEP, and more.",
};

const ICON_MAP: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-8 h-8 text-amber-400" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-amber-400" />,
  Hammer: <Hammer className="w-8 h-8 text-amber-400" />,
  Palette: <Palette className="w-8 h-8 text-amber-400" />,
  Zap: <Zap className="w-8 h-8 text-amber-400" />,
  Briefcase: <Briefcase className="w-8 h-8 text-amber-400" />,
  Eye: <Eye className="w-8 h-8 text-amber-400" />,
  Sparkles: <Sparkles className="w-8 h-8 text-amber-400" />,
  Calculator: <Calculator className="w-8 h-8 text-amber-400" />,
  Key: <Key className="w-8 h-8 text-amber-400" />,
};

export default function ServicesPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      {/* Page Header */}
      <section className="relative py-20 lg:py-28 bg-slate-900 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <span>Comprehensive Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Architectural, Engineering &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
                Contracting Services
              </span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              From soil investigation and seismic structural modeling to turnkey civil construction
              and luxury interior joinery, our services cover every stage of building execution in
              Bangladesh.
            </p>
          </div>
        </div>
      </section>

      {/* Services Jump Navigation */}
      <section className="py-6 bg-slate-950/80 border-b border-slate-800 sticky top-20 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto no-scrollbar">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest shrink-0 mr-2">
              Jump To:
            </span>
            {SERVICES_DATA.map((srv) => (
              <a
                key={srv.id}
                href={`#${srv.slug}`}
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/50 text-xs font-semibold text-slate-300 hover:text-white whitespace-nowrap transition-colors"
              >
                {srv.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Breakdown (All 10 Services) */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {SERVICES_DATA.map((srv, index) => (
            <div
              key={srv.id}
              id={srv.slug}
              className="scroll-mt-36 p-8 sm:p-12 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl relative overflow-hidden"
            >
              {/* Watermark Index */}
              <div className="absolute top-4 right-8 font-mono text-7xl sm:text-8xl font-black text-slate-800/30 select-none pointer-events-none">
                0{index + 1}
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Left Header & Overview (5 cols) */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                      {ICON_MAP[srv.iconName] || (
                        <Hammer className="w-8 h-8 text-amber-400" />
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block">
                        {srv.category}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                        {srv.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {srv.fullDescription}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Engineering Advantages:
                    </h3>
                    <ul className="space-y-1.5">
                      {srv.keyHighlights.map((hl, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Buttons */}
                  <div className="pt-4 flex items-center gap-3">
                    <Link
                      href={`/quote?service=${encodeURIComponent(srv.title)}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Inquire This Service</span>
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                    >
                      <span>Consult Lead Engineer</span>
                    </Link>
                  </div>
                </div>

                {/* Right Deliverables & Scope Matrix (7 cols) */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-950/60 p-6 sm:p-8 rounded-2xl border border-slate-800/80">
                  {/* Deliverables Column */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-amber-400 font-bold text-sm border-b border-slate-800 pb-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      <h4>Official Deliverables</h4>
                    </div>
                    <ul className="space-y-2.5">
                      {srv.deliverables.map((del, dIdx) => (
                        <li
                          key={dIdx}
                          className="flex items-start gap-2.5 text-xs text-slate-300"
                        >
                          <span className="text-amber-500 font-mono text-[11px] mt-0.5 shrink-0">
                            [{dIdx + 1}]
                          </span>
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Scope of Execution Column */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-amber-400 font-bold text-sm border-b border-slate-800 pb-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      <h4>Scope of Execution</h4>
                    </div>
                    <ul className="space-y-2.5">
                      {srv.scopePoints.map((scp, sIdx) => (
                        <li
                          key={sIdx}
                          className="flex items-start gap-2.5 text-xs text-slate-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{scp}</span>
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

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
