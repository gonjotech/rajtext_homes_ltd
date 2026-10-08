import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Calendar,
  Layers,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Building,
  ShieldCheck,
  FileText,
  Clock,
} from "lucide-react";
import { PROJECTS_DATA } from "@/data/projects";
import { CTASection } from "@/components/sections/CTASection";

interface ProjectDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Projects`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} - RajTex Homes Ltd.`,
      description: project.shortDescription,
      images: [{ url: project.mainImage }],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailsPageProps) {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find next and previous projects for navigation
  const currentIndex = PROJECTS_DATA.findIndex((p) => p.slug === slug);
  const prevProject =
    currentIndex > 0 ? PROJECTS_DATA[currentIndex - 1] : PROJECTS_DATA[PROJECTS_DATA.length - 1];
  const nextProject =
    currentIndex < PROJECTS_DATA.length - 1 ? PROJECTS_DATA[currentIndex + 1] : PROJECTS_DATA[0];

  return (
    <main className="bg-slate-950 text-white min-h-screen">
      {/* Back button header */}
      <div className="bg-slate-900 border-b border-slate-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-amber-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>

          <span className="text-xs font-mono text-slate-500">
            CASE STUDY // {project.category.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Hero Banner with Main Visual */}
      <section className="relative py-16 lg:py-24 bg-slate-900 border-b border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Project Title & Meta (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-bold text-slate-200">
                  {project.category}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    project.status === "Completed"
                      ? "bg-emerald-950 border border-emerald-700/60 text-emerald-400"
                      : "bg-amber-950 border border-amber-700/60 text-amber-400"
                  }`}
                >
                  {project.status}
                </span>
                {project.client && (
                  <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                    Client: {project.client}
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {project.title}
              </h1>

              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{project.location}</span>
              </div>

              <p className="text-base text-slate-300 leading-relaxed">
                {project.shortDescription}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href={`/quote?service=${encodeURIComponent(project.category)}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all"
                >
                  <FileText className="w-4 h-4" />
                  <span>Inquire Similar Project</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-white transition-colors"
                >
                  <span>Talk to Lead Engineer</span>
                </Link>
              </div>
            </div>

            {/* Main Visual Display (6 cols) */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-[360px] sm:h-[460px] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
                <Image
                  src={project.mainImage}
                  alt={project.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4 px-3 py-1 rounded bg-slate-950/80 border border-slate-700 text-xs font-mono text-amber-400">
                  {project.area}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Matrix */}
      <section className="py-8 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">
                Total Built Area
              </span>
              <strong className="text-white text-base sm:text-lg font-bold font-mono">
                {project.area}
              </strong>
            </div>
            <div>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">
                Execution Duration
              </span>
              <strong className="text-white text-base sm:text-lg font-bold">
                {project.duration}
              </strong>
            </div>
            <div>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">
                Year / Handover
              </span>
              <strong className="text-white text-base sm:text-lg font-bold">
                {project.completionDate || project.year}
              </strong>
            </div>
            <div>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">
                Engineering Division
              </span>
              <strong className="text-amber-400 text-base sm:text-lg font-bold">
                RajTex Contracting
              </strong>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Overview & Scope */}
      <section className="py-20 lg:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Project Architectural & Engineering Overview
                </h2>
                <div className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed space-y-4">
                  <p>{project.fullOverview}</p>
                </div>
              </div>

              {/* Scope of Work */}
              <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  Full Contractual Scope of Work
                </h3>
                <ul className="space-y-3">
                  {project.scopeOfWork.map((scope, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{scope}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Challenges and Solutions if available */}
              {project.keyChallengesAndSolutions && (
                <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-amber-500" />
                    Engineering Challenges & Solutions
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.keyChallengesAndSolutions}
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar Structural Highlights (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6">
                <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-3">
                  Structural & Material Standards
                </h3>
                <ul className="space-y-4">
                  {project.structuralHighlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <div className="p-1 rounded bg-amber-500/10 text-amber-400 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-400">
                  <div className="flex justify-between">
                    <span>Structural Code:</span>
                    <strong className="text-white">BNBC 2020 / ACI 318</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Steel Grade:</span>
                    <strong className="text-white">500W High Strength TMT</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Quality Oversight:</span>
                    <strong className="text-white">RajTex QA/QC Division</strong>
                  </div>
                </div>
              </div>

              {/* Consultation Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-950 border border-amber-500/30 text-center space-y-3">
                <h4 className="text-base font-bold text-white">
                  Planning a Project in {project.city}?
                </h4>
                <p className="text-xs text-slate-300">
                  Contact our lead structural engineers in Uttara to discuss your architectural
                  blueprints, soil conditions, and BOQ estimates.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors"
                >
                  Schedule Site Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 lg:py-24 border-b border-slate-800 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-mono uppercase text-amber-400 tracking-wider font-semibold">
              Photographic Documentation
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-1">
              Project Visual Archive
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((imgUrl, idx) => (
              <div
                key={idx}
                className="relative h-72 rounded-2xl overflow-hidden border border-slate-800 group"
              >
                <Image
                  src={imgUrl}
                  alt={`${project.title} gallery photo ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 text-xs font-mono text-slate-300">
                  PLATE // 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next / Previous Project Navigation */}
      <section className="py-12 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              href={`/projects/${prevProject.slug}`}
              className="flex items-center gap-3 group text-left p-4 rounded-xl hover:bg-slate-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-amber-400 group-hover:-translate-x-1 transition-transform" />
              <div>
                <span className="text-xs text-slate-500 block uppercase font-mono">
                  Previous Project
                </span>
                <strong className="text-white text-sm group-hover:text-amber-400 transition-colors">
                  {prevProject.title}
                </strong>
              </div>
            </Link>

            <Link
              href="/projects"
              className="text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white px-4 py-2 rounded-lg border border-slate-800 hover:border-slate-700"
            >
              All Projects
            </Link>

            <Link
              href={`/projects/${nextProject.slug}`}
              className="flex items-center gap-3 group text-right p-4 rounded-xl hover:bg-slate-900 transition-colors"
            >
              <div>
                <span className="text-xs text-slate-500 block uppercase font-mono">
                  Next Project
                </span>
                <strong className="text-white text-sm group-hover:text-amber-400 transition-colors">
                  {nextProject.title}
                </strong>
              </div>
              <ArrowRight className="w-5 h-5 text-amber-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
