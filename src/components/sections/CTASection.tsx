import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, MessageSquare, ShieldCheck } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export function CTASection() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-slate-950 to-slate-900 text-white relative overflow-hidden">
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide">
          <ShieldCheck className="w-4 h-4" />
          <span>Turnkey Engineering & Construction Partner</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Have a Project in Mind?
        </h2>

        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Let&apos;s discuss your requirements and turn your vision into a professionally planned
          and executed project.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-850 hover:bg-slate-800 border border-slate-700 text-white font-bold text-base transition-all transform hover:-translate-y-0.5 shadow-lg"
          >
            <MessageSquare className="w-5 h-5 text-amber-400" />
            <span>Request a Consultation</span>
          </Link>

          <Link
            href="/quote"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-base transition-all transform hover:-translate-y-0.5 shadow-xl shadow-amber-500/25"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Direct Contact Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs sm:text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Direct Call:</span>
            <a
              href={`tel:${COMPANY_DATA.phones.rawPrimary}`}
              className="text-white font-semibold hover:text-amber-400"
            >
              {COMPANY_DATA.phones.formattedPrimary}
            </a>
          </div>

          <span className="hidden sm:inline text-slate-700">•</span>

          <div className="flex items-center gap-2">
            <span>Uttara Head Office:</span>
            <span className="text-slate-300">House # 02, Road # 18, Sector # 12</span>
          </div>
        </div>
      </div>
    </section>
  );
}
