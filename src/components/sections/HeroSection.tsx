"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass, ShieldCheck, HardHat, PhoneCall } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center bg-slate-950 text-white overflow-hidden">
      {/* Background Architectural Project Imagery */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="Modern Architectural Engineering by RajTex Homes Ltd"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Layered High-Contrast Corporate Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/70" />
        {/* Subtle Architectural Blueprint Grid */}
        <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
      </div>

      {/* Decorative Blueprint Corner Accent Lines */}
      <div className="absolute top-8 left-8 hidden lg:block text-slate-600/60 font-mono text-xs select-none">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-amber-500 rounded-full" />
          <span>RAJTEX_SPEC // BNBC_2020_COMPLIANT</span>
        </div>
        <span className="text-[10px] text-slate-500">LAT 23.8737° N, LON 90.3805° E (UTTARA HQ)</span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Content (7 cols) */}
          <div className="lg:col-span-8 space-y-8 text-left">
            {/* Architectural Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span>Architecture • Engineering • Construction • Turnkey</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white">
                Building Vision.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-300 block sm:inline">
                  Engineering Excellence.
                </span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
              Integrated architectural, engineering and construction solutions for
              residential, commercial and industrial projects across Bangladesh.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/20 hover:shadow-amber-500/35 transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="ml-2.5 w-5 h-5" />
              </Link>

              <Link
                href="/quote"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-500/50 backdrop-blur-md transition-all transform hover:-translate-y-0.5"
              >
                <span>Start Your Project</span>
              </Link>

              <a
                href={`tel:${COMPANY_DATA.phones.rawPrimary}`}
                className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-4 text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-amber-500" />
                <span>Call Hotline</span>
              </a>
            </div>

            {/* Micro Pillars */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" />
                <span>BNBC 2020 Standard</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <Compass className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Modern Spatial Design</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <HardHat className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Turnkey Accountability</span>
              </div>
            </div>
          </div>

          {/* Quick Technical Card / Featured Teaser (4 cols) */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-xl shadow-2xl relative space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-[11px] font-mono uppercase text-amber-500 tracking-wider">
                    Company Highlights
                  </span>
                  <h3 className="text-base font-bold text-white">Full-Cycle Engineering</h3>
                </div>
                <div className="h-8 w-8 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 text-xs font-bold">
                  RH
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="flex justify-between items-center text-xs text-slate-400 mb-1">
                    <span>Corporate Office</span>
                    <span className="text-emerald-400">Uttara, Dhaka</span>
                  </div>
                  <p className="text-white font-medium text-xs">
                    House # 02, Road # 18, Sector # 12
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="flex justify-between items-center text-xs text-slate-400 mb-1">
                    <span>Industrial Workshop</span>
                    <span className="text-amber-400">North Badda, Dhaka</span>
                  </div>
                  <p className="text-white font-medium text-xs">
                    Furniture, Joinery & Metal Fabrication Plant
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="flex justify-between items-center text-xs text-slate-400 mb-1">
                    <span>Direct Inquiries</span>
                    <span className="text-slate-300">01719-048724</span>
                  </div>
                  <p className="text-white font-medium text-xs">
                    01732-795399 / info@rajtexhomesltd.com
                  </p>
                </div>
              </div>

              <Link
                href="/projects"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors"
              >
                <span>View Completed Portfolios</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
