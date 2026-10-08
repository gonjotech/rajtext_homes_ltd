"use client";

import React, { useState } from "react";
import {
  FileText,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Building,
  MapPin,
  Calendar,
  Layers,
  ArrowRight,
} from "lucide-react";
import { SERVICES_DATA } from "@/data/services";
import { PROJECT_TYPES_LIST, BUDGET_RANGES_LIST } from "@/data/contact";

interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  projectType: string;
  projectLocation: string;
  estimatedArea: string;
  estimatedBudget: string;
  requiredService: string;
  projectDescription: string;
  timelineRequirement: string;
  botTrap: string; // Anti-spam honeypot
}

export function QuoteForm() {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: "",
    phone: "",
    email: "",
    projectType: PROJECT_TYPES_LIST[0],
    projectLocation: "",
    estimatedArea: "",
    estimatedBudget: BUDGET_RANGES_LIST[0],
    requiredService: SERVICES_DATA[0].title,
    projectDescription: "",
    timelineRequirement: "Immediate (Within 1-2 months)",
    botTrap: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.botTrap) {
      setStatus("success");
      return;
    }

    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.projectLocation.trim()) {
      setErrorMessage("Please fill in your Name, Phone Number, and Project Location.");
      setStatus("error");
      return;
    }

    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        projectType: PROJECT_TYPES_LIST[0],
        projectLocation: "",
        estimatedArea: "",
        estimatedBudget: BUDGET_RANGES_LIST[0],
        requiredService: SERVICES_DATA[0].title,
        projectDescription: "",
        timelineRequirement: "Immediate (Within 1-2 months)",
        botTrap: "",
      });
    }, 1400);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Decorative Blueprint Corner Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-500/10 via-transparent to-transparent pointer-events-none" />

      {status === "success" ? (
        <div className="py-12 px-4 text-center space-y-6 max-w-xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10 text-emerald-400" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Consultation Request Received!
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Thank you for submitting your project specifications to RajTex Homes Ltd.
              Our Chief Project Estimator and Senior Structural Engineer will review your
              parameters and contact you for an initial technical consultation.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 space-y-1">
            <p>
              Expected response window: <strong className="text-amber-400">Within 24 Hours</strong>
            </p>
            <p>Direct Hotlines: +880 1719-048724 | +880 1732-795399</p>
          </div>
          <button
            onClick={() => setStatus("idle")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-colors"
          >
            Submit Another Specification
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot field */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="botTrap"
              value={formData.botTrap}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="border-b border-slate-800 pb-4 mb-6">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
              Direct Quotation & Feasibility
            </span>
            <h3 className="text-2xl font-bold text-white mt-1">Project Technical Inquiry</h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Provide your plot coordinates and structural vision to receive a comprehensive
              preliminary estimate and scope breakdown.
            </p>
          </div>

          {/* Section 1: Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Full Name <span className="text-amber-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Dr. Kazi Rahman"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Phone Number <span className="text-amber-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 01719-XXXXXX"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. k.rahman@gmail.com"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
              />
            </div>
          </div>

          {/* Section 2: Project Specifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Project Type
              </label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
              >
                {PROJECT_TYPES_LIST.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Project Location <span className="text-amber-500">*</span>
              </label>
              <input
                type="text"
                name="projectLocation"
                required
                value={formData.projectLocation}
                onChange={handleChange}
                placeholder="e.g. Uttara Sector 14 / Banani / Purbachal"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Estimated Area (Sq. Ft / Katha)
              </label>
              <input
                type="text"
                name="estimatedArea"
                value={formData.estimatedArea}
                onChange={handleChange}
                placeholder="e.g. 5 Katha (approx. 12,000 Sft)"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Estimated Budget Bracket
              </label>
              <select
                name="estimatedBudget"
                value={formData.estimatedBudget}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
              >
                {BUDGET_RANGES_LIST.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Primary Required Service
              </label>
              <select
                name="requiredService"
                value={formData.requiredService}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
              >
                {SERVICES_DATA.map((srv) => (
                  <option key={srv.id} value={srv.title}>
                    {srv.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Target Timeline
              </label>
              <select
                name="timelineRequirement"
                value={formData.timelineRequirement}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
              >
                <option value="Immediate (Within 1-2 months)">Immediate (Within 1-2 months)</option>
                <option value="Planning Phase (3-6 months)">Planning Phase (3-6 months)</option>
                <option value="Future Investment (6+ months)">Future Investment (6+ months)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Project Description & Requirements
            </label>
            <textarea
              name="projectDescription"
              rows={4}
              value={formData.projectDescription}
              onChange={handleChange}
              placeholder="Tell us about the soil conditions, desired architectural style, number of stories, basement requirement, or special material preferences..."
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 resize-y"
            />
          </div>

          {status === "error" && (
            <div className="flex items-center gap-2 p-3 rounded-lg bg-rose-950/60 border border-rose-800/80 text-rose-300 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              <span>All consultations supervised by registered engineers & architects</span>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-base shadow-xl hover:shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 disabled:opacity-50"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Processing Engineering Parameters...</span>
                </>
              ) : (
                <>
                  <span>Request a Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
