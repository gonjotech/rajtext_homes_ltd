"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  ArrowRight,
  CheckCircle2,
  Building2,
  Maximize2,
  ShieldCheck,
} from "lucide-react";
import { PROJECTS_DATA } from "@/data/projects";

export function FeaturedProject() {
  // Use Asian Duplex Banani or Horizon Heights as featured
  const project = PROJECTS_DATA.find((p) => p.featured) || PROJECTS_DATA[0];

  return (
    <section className="py-20 lg:py-28 bg-slate-950 text-white border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full text-xs font-semibold tracking-wider uppercase border border-amber-500/30 bg-amber-500/10 text-amber-400">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Editorial Project Feature
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Flagship Engineering &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
              Architectural Execution
            </span>
          </h2>
        </div>

        {/* Large Editorial Side-by-Side Container */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Large Visual Column (7 cols) */}
            <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[500px] lg:min-h-full bg-slate-950">
              <Image
                src={project.mainImage}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

              {/* Status and Location Overlay */}
              <div className="absolute top-6 left-6 flex items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-slate-950/90 backdrop-blur-md border border-slate-700 text-xs font-bold text-white">
                  {project.category}
                </span>
                <span className="px-3 py-1 rounded-md bg-emerald-950/90 backdrop-blur-md border border-emerald-700/60 text-xs font-bold text-emerald-400">
                  {project.status}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800 hidden sm:flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{project.location}</span>
                </div>
                <span className="text-xs font-mono font-bold text-amber-400">
                  {project.area}
                </span>
              </div>
            </div>

            {/* Information Column (5 cols) */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                {/* Meta details */}
                <div className="space-y-1">
                  {project.client && (
                    <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                      Client: {project.client}
                    </span>
                  )}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    {project.title}
                  </h3>
                </div>

                {/* Specs Matrix */}
                <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-800 text-xs">
                  <div>
                    <span className="text-slate-500 uppercase tracking-wider block font-semibold">
                      Project Type
                    </span>
                    <strong className="text-white text-sm">{project.category}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 uppercase tracking-wider block font-semibold">
                      Location
                    </span>
                    <strong className="text-white text-sm">{project.city}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 uppercase tracking-wider block font-semibold">
                      Floor Area
                    </span>
                    <strong className="text-amber-400 text-sm font-mono">{project.area}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 uppercase tracking-wider block font-semibold">
                      Status
                    </span>
                    <strong className="text-emerald-400 text-sm">{project.status}</strong>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Scope of Work */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Scope of Work:
                  </h4>
                  <ul className="space-y-2">
                    {project.scopeOfWork.slice(0, 4).map((scope, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>{scope}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* View Project Action */}
              <div className="pt-4 border-t border-slate-800">
                <Link
                  href={`/projects/${project.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/20 transition-all transform hover:-translate-y-0.5"
                >
                  <span>View Project Full Specifications</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
