import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Binary,
  Shield,
  Kanban,
  Eye,
  AlertTriangle,
  Clock,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { WHY_CHOOSE_REASONS } from "@/data/reasons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Why Choose RajTex Homes Ltd.",
  description:
    "Explore the six pillars of engineering excellence that set RajTex Homes Ltd. apart from typical local contractors in Bangladesh.",
};

const ICON_MAP: Record<string, React.ReactNode> = {
  Binary: <Binary className="w-8 h-8 text-amber-400" />,
  Shield: <Shield className="w-8 h-8 text-amber-400" />,
  Kanban: <Kanban className="w-8 h-8 text-amber-400" />,
  Eye: <Eye className="w-8 h-8 text-amber-400" />,
  AlertTriangle: <AlertTriangle className="w-8 h-8 text-amber-400" />,
  Clock: <Clock className="w-8 h-8 text-amber-400" />,
};

const COMPARISON_ROWS = [
  {
    parameter: "Structural Engineering Standard",
    traditional: "Empirical guesswork by masons; no seismic dynamic modeling",
    rajtex: "Full BNBC 2020 & ACI 318 modeling via ETABS / SAFE by certified civil engineers",
  },
  {
    parameter: "Material Quality & Procurement",
    traditional: "Unverified retail supplies, mix ratio variances, risk of sub-grade rebar",
    rajtex: "Direct mill-tested 500W TMT steel, virgin OPC cement & regular lab cylinder tests",
  },
  {
    parameter: "Custom Woodwork & Joinery",
    traditional: "Outsourced to unvetted roadside carpenters with unseasoned damp timber",
    rajtex: "In-house joinery & CNC metal fabrication plant in North Badda with kiln-dried timber",
  },
  {
    parameter: "Cost Estimation & Financials",
    traditional: "Vague lumpsum quotes with frequent escalation claims and surprise extras",
    rajtex: "Itemized Bill of Quantities (BOQ) with transparent market rate analysis & locked phases",
  },
  {
    parameter: "Client Progress Reporting",
    traditional: "Occasional phone calls; client must physically visit site to detect mistakes",
    rajtex: "Weekly photo digests, milestone logs, and direct engineer access",
  },
  {
    parameter: "Occupational Safety & Site Health",
    traditional: "Minimal PPE, makeshift bamboo scaffolding, high risk of accident liabilities",
    rajtex: "Mandatory PPE gear, heavy steel scaffolding, safety nets & fire safety protocols",
  },
  {
    parameter: "Handover Accountability",
    traditional: "Frequent multi-year delays with excuses and abandonment during snagging",
    rajtex: "Contractually committed delivery milestones, warranty certification & As-Built dossiers",
  },
];

export default function WhyRajTexPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-28 bg-slate-900 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <span>The RajTex Standard</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Why RajTex Homes{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
                Is Different
              </span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              We replace the frustration, delays, and quality compromises common to the local
              building industry with international engineering standards and corporate integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Six Pillars Deep Dive */}
      <section className="py-20 lg:py-28 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Six Pillars of Excellence"
            title="Engineered for"
            titleHighlight="Generational Durability"
            subtitle="Explore how our principles ensure structural longevity, safety, and investment value."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_REASONS.map((reason) => (
              <div
                key={reason.id}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between hover:border-amber-500/50 transition-all shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                      {ICON_MAP[reason.iconName]}
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-500">
                      PILLAR // {reason.number}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white">{reason.title}</h3>
                  <p className="text-xs font-medium text-amber-400 mt-1">{reason.tagline}</p>
                  <p className="mt-4 text-slate-300 text-sm leading-relaxed">
                    {reason.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-slate-800 space-y-2">
                    {reason.keyPoints.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {reason.metricHighlight && (
                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-400">{reason.metricLabel}</span>
                    <span className="font-mono text-xs font-bold text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                      {reason.metricHighlight}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Matrix: Traditional vs. RajTex */}
      <section className="py-20 lg:py-28 bg-slate-900/60 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Direct Comparison"
            title="Traditional Local Contractors vs."
            titleHighlight="RajTex Homes Ltd."
            subtitle="An honest, objective comparison of why discerning landowners and investors choose RajTex for structural certainty."
          />

          <div className="mt-16 overflow-x-auto rounded-3xl border border-slate-800 shadow-2xl">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-950 border-b border-slate-800">
                  <th className="p-5 text-xs font-bold uppercase tracking-wider text-slate-400 w-1/4">
                    Evaluation Parameter
                  </th>
                  <th className="p-5 text-xs font-bold uppercase tracking-wider text-rose-400 w-3/8 bg-rose-950/20">
                    Typical Local Contractor
                  </th>
                  <th className="p-5 text-xs font-bold uppercase tracking-wider text-amber-400 w-3/8 bg-amber-950/30">
                    RajTex Homes Ltd.
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-xs sm:text-sm">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-900/50 transition-colors"
                  >
                    <td className="p-5 font-bold text-white bg-slate-950/80">
                      {row.parameter}
                    </td>
                    <td className="p-5 text-slate-400 bg-rose-950/10">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="p-5 text-slate-200 bg-amber-950/20 font-medium">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{row.rajtex}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
