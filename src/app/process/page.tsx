import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageSquare,
  MapPin,
  PenTool,
  Calculator,
  FileCheck2,
  HardHat,
  CheckCircle2,
  Award,
  ArrowRight,
  ShieldCheck,
  FileText,
} from "lucide-react";
import { PROCESS_STEPS } from "@/data/process";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Our 8-Step Construction Process",
  description:
    "Discover the disciplined 8-step architectural and construction methodology of RajTex Homes Ltd. From consultation to certified handover.",
};

const ICON_MAP: Record<string, React.ReactNode> = {
  MessageSquare: <MessageSquare className="w-8 h-8 text-amber-400" />,
  MapPin: <MapPin className="w-8 h-8 text-amber-400" />,
  PenTool: <PenTool className="w-8 h-8 text-amber-400" />,
  Calculator: <Calculator className="w-8 h-8 text-amber-400" />,
  FileCheck2: <FileCheck2 className="w-8 h-8 text-amber-400" />,
  HardHat: <HardHat className="w-8 h-8 text-amber-400" />,
  CheckCircle2: <CheckCircle2 className="w-8 h-8 text-amber-400" />,
  Award: <Award className="w-8 h-8 text-amber-400" />,
};

export default function ProcessPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-28 bg-slate-900 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <span>Disciplined Execution</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Our 8-Step{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
                Engineering Workflow
              </span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              We replace chaos and guesswork with structured engineering governance. Follow our
              systematic path from conceptual feasibility to final handover.
            </p>
          </div>
        </div>
      </section>

      {/* Process Deep Dive (8 Steps) */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.stepNumber}
              className="relative p-8 sm:p-12 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl overflow-hidden hover:border-amber-500/40 transition-all"
            >
              {/* Massive Technical Watermark Number */}
              <div className="absolute top-4 right-8 font-mono text-8xl sm:text-9xl font-black text-slate-800/25 select-none pointer-events-none">
                {step.stepNumber}
              </div>

              <div className="relative z-10 space-y-6">
                {/* Header Tag & Title */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0">
                      {ICON_MAP[step.iconName]}
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block">
                        STAGE {step.stepNumber} // {step.shortTag}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                        {step.title}
                      </h2>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-right sm:max-w-xs">
                    <span className="text-slate-500 block uppercase font-mono text-[10px]">
                      Key Deliverable:
                    </span>
                    <strong className="text-amber-400 font-semibold">{step.deliverable}</strong>
                  </div>
                </div>

                {/* Narrative Details */}
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  {step.detailedDescription}
                </p>

                {/* Activity Checklist */}
                <div className="bg-slate-950/60 p-6 rounded-2xl border border-slate-800/80 space-y-3">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Stage Milestone Scope & Verification Steps:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {step.activities.map((act, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </div>
                    ))}
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
