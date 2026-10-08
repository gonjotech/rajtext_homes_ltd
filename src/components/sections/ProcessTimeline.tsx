"use client";

import React, { useState } from "react";
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
  ShieldAlert,
} from "lucide-react";
import { PROCESS_STEPS } from "@/data/process";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ICON_MAP: Record<string, React.ReactNode> = {
  MessageSquare: <MessageSquare className="w-5 h-5 text-amber-400" />,
  MapPin: <MapPin className="w-5 h-5 text-amber-400" />,
  PenTool: <PenTool className="w-5 h-5 text-amber-400" />,
  Calculator: <Calculator className="w-5 h-5 text-amber-400" />,
  FileCheck2: <FileCheck2 className="w-5 h-5 text-amber-400" />,
  HardHat: <HardHat className="w-5 h-5 text-amber-400" />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5 text-amber-400" />,
  Award: <Award className="w-5 h-5 text-amber-400" />,
};

export function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className="py-20 lg:py-28 bg-slate-900 border-b border-slate-800 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Structured Methodology"
          title="Our 8-Step"
          titleHighlight="Project Execution Workflow"
          subtitle="A disciplined, transparent journey from initial site consultation to ceremonial key handover, ensuring every milestone satisfies structural standards."
        />

        {/* Timeline Desktop Stepper Bar */}
        <div className="hidden lg:grid grid-cols-8 gap-2 mt-16 pb-4 border-b border-slate-800">
          {PROCESS_STEPS.map((step, idx) => (
            <button
              key={step.stepNumber}
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-xl text-left transition-all relative ${
                activeStep === idx
                  ? "bg-slate-800/90 border border-amber-500/50 shadow-lg shadow-amber-500/10"
                  : "bg-slate-950/40 hover:bg-slate-950 border border-slate-800/60"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`font-mono text-xs font-bold ${
                    activeStep === idx ? "text-amber-400" : "text-slate-500"
                  }`}
                >
                  {step.stepNumber}
                </span>
                <span className="p-1 rounded bg-slate-900">
                  {ICON_MAP[step.iconName]}
                </span>
              </div>
              <div
                className={`text-xs font-bold line-clamp-1 ${
                  activeStep === idx ? "text-white" : "text-slate-400"
                }`}
              >
                {step.title}
              </div>
              {activeStep === idx && (
                <div className="absolute -bottom-[17px] left-1/2 -translate-x-1/2 w-3 h-3 bg-amber-500 rotate-45" />
              )}
            </button>
          ))}
        </div>

        {/* Active Step Feature Box */}
        <div className="mt-8 bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Step Content (8 cols) */}
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-sm font-bold">
                  Step {PROCESS_STEPS[activeStep].stepNumber} of 08
                </span>
                <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                  {PROCESS_STEPS[activeStep].shortTag}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {PROCESS_STEPS[activeStep].title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {PROCESS_STEPS[activeStep].detailedDescription}
              </p>

              {/* Activities Checklist */}
              <div className="pt-2 space-y-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Key Engineering Activities:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {PROCESS_STEPS[activeStep].activities.map((act, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-xs sm:text-sm text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Deliverable */}
              <div className="pt-4 border-t border-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="text-xs text-slate-400">
                  <span className="text-slate-500 block">Milestone Output:</span>
                  <strong className="text-amber-400 font-semibold text-sm">
                    {PROCESS_STEPS[activeStep].deliverable}
                  </strong>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 disabled:opacity-40 text-xs text-white"
                  >
                    ← Previous
                  </button>
                  <button
                    disabled={activeStep === PROCESS_STEPS.length - 1}
                    onClick={() =>
                      setActiveStep((prev) =>
                        Math.min(PROCESS_STEPS.length - 1, prev + 1)
                      )
                    }
                    className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-xs text-slate-950 font-bold"
                  >
                    Next Step →
                  </button>
                </div>
              </div>
            </div>

            {/* Side Technical Graphic / Card (4 cols) */}
            <div className="lg:col-span-4 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center mx-auto text-amber-400">
                {ICON_MAP[PROCESS_STEPS[activeStep].iconName]}
              </div>

              <div className="text-sm font-bold text-white">
                Quality Assurance Gate
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Work cannot proceed past Stage {PROCESS_STEPS[activeStep].stepNumber} without formal
                client written sign-off and lead structural engineer inspection clearance.
              </p>

              <div className="pt-2">
                <Link
                  href="/process"
                  className="text-xs font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1"
                >
                  <span>Explore Full Process Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Stepper Grid (sm and down) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:hidden mt-8">
          {PROCESS_STEPS.map((step, idx) => (
            <button
              key={step.stepNumber}
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-xl text-left border ${
                activeStep === idx
                  ? "bg-slate-800 border-amber-500 text-amber-400"
                  : "bg-slate-950 border-slate-800 text-slate-400"
              }`}
            >
              <div className="font-mono text-xs">{step.stepNumber}</div>
              <div className="text-xs font-bold truncate mt-0.5">{step.title}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
