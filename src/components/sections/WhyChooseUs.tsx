"use client";

import React from "react";
import Link from "next/link";
import {
  Binary,
  Shield,
  Kanban,
  Eye,
  AlertTriangle,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { WHY_CHOOSE_REASONS } from "@/data/reasons";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ICON_MAP: Record<string, React.ReactNode> = {
  Binary: <Binary className="w-6 h-6 text-amber-400" />,
  Shield: <Shield className="w-6 h-6 text-amber-400" />,
  Kanban: <Kanban className="w-6 h-6 text-amber-400" />,
  Eye: <Eye className="w-6 h-6 text-amber-400" />,
  AlertTriangle: <AlertTriangle className="w-6 h-6 text-amber-400" />,
  Clock: <Clock className="w-6 h-6 text-amber-400" />,
};

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="The RajTex Difference"
          title="Why Choose"
          titleHighlight="RajTex Homes Ltd."
          subtitle="We eliminate the compromises typical of the construction sector by fusing professional corporate governance with uncompromising structural standards."
        />

        {/* 6 Reasons Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_REASONS.map((reason) => (
            <div
              key={reason.id}
              className="bg-slate-900/70 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 group"
            >
              <div>
                {/* Header: Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-amber-500/40 group-hover:bg-amber-500/10 transition-colors">
                    {ICON_MAP[reason.iconName] || (
                      <Shield className="w-6 h-6 text-amber-400" />
                    )}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-500 tracking-wider">
                    Pillar {reason.number}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-xs font-medium text-amber-400/90 mt-1">
                  {reason.tagline}
                </p>

                {/* Description */}
                <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                  {reason.description}
                </p>

                {/* Key Points */}
                <div className="mt-6 pt-4 border-t border-slate-800 space-y-2">
                  {reason.keyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metric Highlight Badge if present */}
              {reason.metricHighlight && (
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400">{reason.metricLabel}</span>
                  <span className="font-mono text-xs font-extrabold text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                    {reason.metricHighlight}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Comparison Callout */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white">
              Need a Comparative Technical Evaluation for Your Land or Building?
            </h4>
            <p className="text-sm text-slate-400">
              Our registered structural engineers can audit your drawings, soil tests, or BOQ estimates.
            </p>
          </div>
          <Link
            href="/why-rajtex"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm whitespace-nowrap transition-colors"
          >
            <span>Learn How We Compare</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
