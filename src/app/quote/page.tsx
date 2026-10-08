import React from "react";
import type { Metadata } from "next";
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Building2,
  HelpCircle,
  Phone,
} from "lucide-react";
import { COMPANY_DATA } from "@/data/company";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Request a Quote & Project Consultation",
  description:
    "Request a free preliminary architectural estimation, structural consultation, and Bill of Quantities (BOQ) assessment from RajTex Homes Ltd.",
};

const FAQS = [
  {
    question: "How long does it take to receive a preliminary BOQ estimate?",
    answer:
      "Following receipt of your plot dimensions and architectural scope, our quantity surveyors typically deliver a preliminary itemized estimate and rate analysis within 3 to 5 business days.",
  },
  {
    question: "Can RajTex construct if we already have our own architectural drawings?",
    answer:
      "Yes. We frequently serve as general civil contractors for clients who bring approved architectural plans. Our structural engineering department performs an initial vetting to ensure drawing feasibility and BNBC 2020 code compliance prior to site mobilization.",
  },
  {
    question: "Do you handle RAJUK / City Corporation permit clearances?",
    answer:
      "Yes. Our architectural and liaison team prepares all statutory submission sheets, structural vetting documents, and coordinates the regulatory approval process with RAJUK, CDA, or local municipal bodies.",
  },
  {
    question: "How are milestone payments structured?",
    answer:
      "We operate under a transparent, milestone-linked schedule (e.g. Foundation Casting, Superstructure Slabs, Masonry, Finishing). Payments are tied directly to verified physical progress on-site—never arbitrary calendar dates.",
  },
];

export default function QuotePage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-28 bg-slate-900 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <span>Feasibility & Quotation</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Request a Technical{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
                Consultation & Quote
              </span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Tell us about your plot location, proposed floor count, and desired finish quality.
              Our senior engineering consultants will prepare an itemized feasibility assessment.
            </p>
          </div>
        </div>
      </section>

      {/* Main Quote Form Section */}
      <section className="py-20 lg:py-28 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form Column (8 cols) */}
            <div className="lg:col-span-8">
              <QuoteForm />
            </div>

            {/* Sidebar Guidance & Reassurance (4 cols) */}
            <div className="lg:col-span-4 space-y-8">
              {/* Trust Box */}
              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white">Our Estimation Guarantee</h3>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Itemized material vs. labor breakdown</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Real-time local market rate indexing</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Zero hidden contractor escalation clauses</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Supervised by registered civil engineers</span>
                  </li>
                </ul>
              </div>

              {/* Direct Hotline Card */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 space-y-3">
                <span className="text-xs font-mono uppercase text-amber-400 tracking-wider font-semibold">
                  Urgent Project Requirement?
                </span>
                <h4 className="text-lg font-bold text-white">Speak With Our Lead Estimator</h4>
                <p className="text-xs text-slate-400">
                  Call our executive desk directly for rapid plot visits across Dhaka, Gazipur,
                  and Narayanganj.
                </p>

                <div className="pt-2">
                  <a
                    href={`tel:${COMPANY_DATA.phones.rawPrimary}`}
                    className="flex items-center gap-2 text-white font-bold text-sm hover:text-amber-400 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-amber-500" />
                    <span>{COMPANY_DATA.phones.formattedPrimary}</span>
                  </a>
                  <a
                    href={`tel:${COMPANY_DATA.phones.rawSecondary}`}
                    className="flex items-center gap-2 text-white font-bold text-sm hover:text-amber-400 transition-colors mt-1"
                  >
                    <Phone className="w-4 h-4 text-amber-500" />
                    <span>{COMPANY_DATA.phones.formattedSecondary}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 lg:py-24 bg-slate-900/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <SectionHeading
            badge="Common Questions"
            title="Estimation & Project"
            titleHighlight="Inquiry FAQs"
            subtitle="Essential information regarding our pricing structure, drawings, and statutory compliance."
          />

          <div className="space-y-4 mt-12">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-2"
              >
                <h3 className="text-base font-bold text-white flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
