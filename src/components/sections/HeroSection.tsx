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
          src="/images/duplex-construction.jpg"
          alt="Modern Duplex & Building Architectural Construction by RajTex Homes Ltd"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Layered High-Contrast Corporate Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-950/80" />
        {/* Subtle Architectural Blueprint Grid */}
        <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none" />
      </div>

      {/* Decorative Blueprint Corner Accent Lines */}
      <div className="absolute top-8 left-8 hidden lg:block text-slate-600/60 font-mono text-xs select-none">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-amber-500 rounded-full" />
          <span>RAJTEX_SPEC // BNBC_2020_COMPLIANT</span>
        </div>
        <span className="text-[10px] text-slate-500">UTTARA DESIGN STUDIO • NORTH BADDA JOINERY PLANT</span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Content (7 cols) */}
          <div className="lg:col-span-8 space-y-8 text-left">
            {/* Architectural Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span>Architectural Design • Duplex & Building Construction • Interior, Exterior & Ready Flats</span>
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
              Specialized in <strong className="text-white font-semibold">Architectural Design</strong>, luxury <strong className="text-white font-semibold">Duplex & Building Construction</strong>, bespoke <strong className="text-white font-semibold">Interior-Exterior Styling</strong>, and verified <strong className="text-white font-semibold">Ready Flats (Buy & Sell)</strong> across Dhaka, Bangladesh.
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
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                <Compass className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Architectural Design & Approval</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Duplex & Building Construction</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                <HardHat className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Interior, Exterior & Ready Flats</span>
              </div>
            </div>
          </div>

          {/* Quick Technical Card / Featured Teaser (4 cols) */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 backdrop-blur-xl shadow-2xl relative space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-[11px] font-mono uppercase text-amber-500 tracking-wider">
                    Core Specializations
                  </span>
                  <h3 className="text-base font-bold text-white">RajTex Homes Ltd.</h3>
                </div>
                <div className="h-8 w-8 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 text-xs font-bold">
                  RH
                </div>
              </div>

              <div className="space-y-3.5 text-sm">
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <div className="flex justify-between items-center text-xs text-slate-400 mb-1">
                    <span className="font-semibold text-amber-400">01 // Architectural Design</span>
                    <span className="text-emerald-400">CAD/BIM</span>
                  </div>
                  <p className="text-white font-medium text-xs">
                    2D/3D plans, structural engineering & RAJUK sanctioned drawings.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <div className="flex justify-between items-center text-xs text-slate-400 mb-1">
                    <span className="font-semibold text-amber-400">02 // Duplex & Construction</span>
                    <span className="text-emerald-400">Turnkey</span>
                  </div>
                  <p className="text-white font-medium text-xs">
                    Luxury duplex villas & multi-storey RCC buildings built to BNBC 2020.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <div className="flex justify-between items-center text-xs text-slate-400 mb-1">
                    <span className="font-semibold text-amber-400">03 // Interior & Ready Flats</span>
                    <span className="text-emerald-400">Buy & Sell</span>
                  </div>
                  <p className="text-white font-medium text-xs">
                    North Badda joinery plant, modern facades & verified ready flats.
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
