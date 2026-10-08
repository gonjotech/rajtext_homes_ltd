import React from "react";
import Link from "next/link";
import { Quote, ArrowRight, CheckCircle2, ShieldCheck, Compass, HardHat } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export function CorporatePhilosophy() {
  return (
    <section className="py-20 lg:py-28 bg-slate-900 border-b border-slate-800 text-white relative overflow-hidden">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
            <Quote className="w-8 h-8" />
          </div>

          {/* Core Philosophy Statement */}
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-relaxed tracking-tight">
            &ldquo;At RajTex Homes Ltd., we believe every successful building begins with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-300">
              disciplined planning
            </span>
            , sound engineering and responsible execution.&rdquo;
          </blockquote>

          {/* Expanded Company Introduction */}
          <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed pt-4 text-justify sm:text-center max-w-3xl mx-auto">
            <p>
              In an evolving built environment like Bangladesh, constructing a building is one of
              the most capital-intensive and enduring commitments a client will ever undertake.
              Too often, the market suffers from fragmented responsibilities—architects who do not
              monitor site pours, contractors who cut rebar corners, and carpenters who lack
              technical drawings.
            </p>
            <p>
              RajTex Homes Ltd. was established to forge an integrated standard. Headquartered in
              Uttara with our own dedicated furniture and metal fabrication plant in North Badda,
              we bring total accountability under one roof. Our engineers test every batch of concrete,
              our architects review every spatial millimeter, and our project managers ensure your
              investment translates into lasting structural legacy.
            </p>
          </div>

          {/* Three Cornerstones */}
          <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
              <Compass className="w-6 h-6 text-amber-400" />
              <h4 className="text-base font-bold text-white">Disciplined Planning</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Bioclimatic architectural orientation, accurate spatial ergonomics, and
                unambiguous BOQ material forecasts before groundbreaking.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
              <ShieldCheck className="w-6 h-6 text-amber-400" />
              <h4 className="text-base font-bold text-white">Sound Engineering</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Seismic Zone 2 & 3 dynamic structural modeling, subsoil borehole validation,
                and cylinder compression testing on every casting milestone.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
              <HardHat className="w-6 h-6 text-amber-400" />
              <h4 className="text-base font-bold text-white">Responsible Execution</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Transparent client reporting, zero hidden variations, certified safety mandates,
                and punctuality backed by contract.
              </p>
            </div>
          </div>

          <div className="pt-6">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-sm font-bold text-white transition-colors"
            >
              <span>Learn More About Our Company & Facilities</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
