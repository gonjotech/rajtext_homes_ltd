import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Users, GraduationCap, Clock, ArrowRight, ShieldCheck, HardHat } from "lucide-react";
import { TEAM_MEMBERS } from "@/data/team";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Engineering Leadership & Team",
  description:
    "Meet the senior architects, structural engineers, and project execution directors behind RajTex Homes Ltd. in Dhaka, Bangladesh.",
};

export default function TeamPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-28 bg-slate-900 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <span>Technical Leadership</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Engineering &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
                Architectural Leadership
              </span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Our multidisciplinary team unites certified civil engineers, creative spatial
              architects, quantity surveyors, and master joinery craftsmen.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Leadership Roster"
            title="The Minds Behind"
            titleHighlight="RajTex Excellence"
            subtitle="Guiding every foundation casting and architectural stroke with disciplined precision."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="bg-slate-900 border border-slate-800 hover:border-amber-500/40 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 group"
              >
                <div>
                  {/* Photo container */}
                  <div className="relative h-72 w-full bg-slate-950 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.role}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-700 text-amber-400 text-xs font-mono font-bold">
                      {member.department}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-xs font-bold text-amber-500 tracking-wide mt-0.5">
                        {member.role}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {member.bio}
                    </p>

                    <div className="pt-3 border-t border-slate-800 space-y-2 text-xs text-slate-400">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{member.education}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                        <span>Experience: {member.experienceYears}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-900 mt-2">
                  <span className="text-[10px] font-mono text-slate-500 block">
                    {member.isPlaceholder ? "Configured in data/team.ts" : "Verified Profile"}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Department Breakdown Cards */}
          <div className="mt-20 pt-16 border-t border-slate-800">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Integrated Project Departments
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
                <span className="text-amber-400 text-xs font-mono font-bold">[ DEP 01 ]</span>
                <h4 className="text-base font-bold text-white">Architectural CAD/BIM</h4>
                <p className="text-xs text-slate-400">
                  Concept sketches, RAJUK clearance plans, photorealistic 3D visual renders.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
                <span className="text-amber-400 text-xs font-mono font-bold">[ DEP 02 ]</span>
                <h4 className="text-base font-bold text-white">Structural & Geotech</h4>
                <p className="text-xs text-slate-400">
                  Seismic modeling, subsoil borehole vetting, foundation design, and rebar schedules.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
                <span className="text-amber-400 text-xs font-mono font-bold">[ DEP 03 ]</span>
                <h4 className="text-base font-bold text-white">Civil Site Operations</h4>
                <p className="text-xs text-slate-400">
                  On-site cast supervision, cylinder lab testing, heavy machinery logistics.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
                <span className="text-amber-400 text-xs font-mono font-bold">[ DEP 04 ]</span>
                <h4 className="text-base font-bold text-white">North Badda Joinery Plant</h4>
                <p className="text-xs text-slate-400">
                  CNC metal design, kiln-seasoned hardwood joinery, and custom furniture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
