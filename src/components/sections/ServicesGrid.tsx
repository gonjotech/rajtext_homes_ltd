"use client";

import React, { useState } from "react";
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
  Home,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { SERVICES_DATA, ServiceItem } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ICON_MAP: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-6 h-6 text-amber-400" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-amber-400" />,
  Hammer: <Hammer className="w-6 h-6 text-amber-400" />,
  Palette: <Palette className="w-6 h-6 text-amber-400" />,
  Zap: <Zap className="w-6 h-6 text-amber-400" />,
  Briefcase: <Briefcase className="w-6 h-6 text-amber-400" />,
  Eye: <Eye className="w-6 h-6 text-amber-400" />,
  Sparkles: <Sparkles className="w-6 h-6 text-amber-400" />,
  Calculator: <Calculator className="w-6 h-6 text-amber-400" />,
  Key: <Key className="w-6 h-6 text-amber-400" />,
  Home: <Home className="w-6 h-6 text-amber-400" />,
};

interface ServicesGridProps {
  limit?: number;
  showAllLink?: boolean;
}

export function ServicesGrid({ limit, showAllLink = true }: ServicesGridProps) {
  const displayServices = limit ? SERVICES_DATA.slice(0, limit) : SERVICES_DATA;

  return (
    <section className="py-20 lg:py-28 bg-slate-950 text-white relative">
      {/* Background Subtle Blueprint Grid */}
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="End-to-End Capabilities"
          title="Engineering & Construction"
          titleHighlight="Services"
          subtitle="Specialized architectural planning, structural analysis, turnkey general contracting, and bespoke interior manufacturing tailored for Bangladesh."
        />

        {/* Services Grid (10 Services) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayServices.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1"
            >
              <div>
                {/* Card Top: Technical Index & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-amber-500/40 group-hover:bg-amber-500/10 transition-colors">
                    {ICON_MAP[service.iconName] || (
                      <Hammer className="w-6 h-6 text-amber-400" />
                    )}
                  </div>
                  <span className="font-mono text-xs text-slate-500 font-semibold tracking-widest">
                    [ 0{index + 1} ]
                  </span>
                </div>

                {/* Service Category Tag */}
                <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400/90 block mb-1">
                  {service.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Key Deliverables Highlights */}
                <div className="mt-5 pt-4 border-t border-slate-800/80 space-y-1.5">
                  {service.deliverables.slice(0, 2).map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <Link
                  href={`/services#${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 group/link"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href={`/quote?service=${encodeURIComponent(service.title)}`}
                  className="text-[11px] text-slate-400 hover:text-white transition-colors"
                >
                  Inquire Scope
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA Banner beneath grid */}
        {showAllLink && (
          <div className="mt-16 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-amber-500 text-sm font-bold text-white transition-all"
            >
              <span>Explore Complete Services & Methodologies</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
