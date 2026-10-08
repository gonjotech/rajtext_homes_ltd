"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  ArrowRight,
  Maximize2,
  Clock,
  Layers,
  CheckCircle,
} from "lucide-react";
import { PROJECTS_DATA, ProjectItem } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LightboxModal } from "@/components/ui/LightboxModal";

const FILTER_TABS = [
  "All",
  "Residential",
  "Commercial",
  "Industrial",
  "Renovation",
  "Interior",
  "Ongoing",
  "Completed",
] as const;

interface ProjectShowcaseProps {
  initialLimit?: number;
  showTabs?: boolean;
}

export function ProjectShowcase({ initialLimit, showTabs = true }: ProjectShowcaseProps) {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxTitle, setLightboxTitle] = useState("");
  const [lightboxSubtitle, setLightboxSubtitle] = useState("");

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeTab === "All") return true;
    if (activeTab === "Ongoing") return project.status === "Ongoing";
    if (activeTab === "Completed") return project.status === "Completed";
    return project.category === activeTab;
  });

  const displayedProjects = initialLimit
    ? filteredProjects.slice(0, initialLimit)
    : filteredProjects;

  const handleOpenLightbox = (project: ProjectItem) => {
    const images = [project.mainImage, ...project.gallery];
    const uniqueImages = Array.from(new Set(images));
    setLightboxImages(uniqueImages);
    setCurrentImageIndex(0);
    setLightboxTitle(project.title);
    setLightboxSubtitle(`${project.location} • ${project.category} (${project.status})`);
    setLightboxOpen(true);
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-900 border-b border-slate-800 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Distinguished Portfolio"
          title="Executed Projects &"
          titleHighlight="Structural Works"
          subtitle="Explore our cross-sector portfolio spanning luxury residences, commercial office towers, industrial manufacturing plants, and heritage renovations."
        />

        {/* Filter Tabs */}
        {showTabs && (
          <div className="mt-12 flex items-center justify-start sm:justify-center overflow-x-auto pb-4 gap-2 no-scrollbar">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all ${
                  activeTab === tab
                    ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 font-bold"
                    : "bg-slate-950/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-950 border border-slate-800 hover:border-amber-500/40 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1"
            >
              <div>
                {/* Project Image Container */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={project.mainImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30" />

                  {/* Category & Status Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-700 text-slate-200 text-xs font-semibold">
                      {project.category}
                    </span>
                    <span
                      className={`px-2.5 py-1 rounded-md text-xs font-bold backdrop-blur-md ${
                        project.status === "Completed"
                          ? "bg-emerald-950/80 text-emerald-400 border border-emerald-700/60"
                          : "bg-amber-950/80 text-amber-400 border border-amber-700/60"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Lightbox Quick Trigger */}
                  <button
                    onClick={() => handleOpenLightbox(project)}
                    aria-label={`Open photo lightbox for ${project.title}`}
                    className="absolute top-4 right-4 p-2 rounded-lg bg-slate-950/70 hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-700/60 transition-colors"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>

                  {/* Area Specification Badge */}
                  <div className="absolute bottom-3 left-4 text-xs font-mono text-amber-400 font-medium">
                    {project.area}
                  </div>
                </div>

                {/* Project Card Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span className="line-clamp-1">{project.location}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                    <Link href={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-900 text-xs">
                <Link
                  href={`/projects/${project.slug}`}
                  className="font-bold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1.5 group/btn"
                >
                  <span>View Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>

                <span className="text-slate-500 font-mono">{project.year}</span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        {initialLimit && (
          <div className="mt-14 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-700 text-sm font-bold text-white hover:border-amber-500 transition-all"
            >
              <span>Explore Complete Projects Portfolio</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </Link>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={lightboxImages}
        currentIndex={currentImageIndex}
        onPrev={() =>
          setCurrentImageIndex((prev) =>
            prev === 0 ? lightboxImages.length - 1 : prev - 1
          )
        }
        onNext={() =>
          setCurrentImageIndex((prev) =>
            prev === lightboxImages.length - 1 ? 0 : prev + 1
          )
        }
        title={lightboxTitle}
        subtitle={lightboxSubtitle}
      />
    </section>
  );
}
