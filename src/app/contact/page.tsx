import React from "react";
import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building2,
  Hammer,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { COMPANY_DATA } from "@/data/company";
import { CONTACT_OFFICES } from "@/data/contact";
import { ContactForm } from "@/components/sections/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact Offices & Headquarters",
  description:
    "Contact RajTex Homes Ltd. Visit our Corporate Head Office in Uttara Sector 12 or our Furniture Workshop in North Badda, Dhaka. Call +880 1719-048724.",
};

export default function ContactPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-28 bg-slate-900 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <span>Direct Inquiries</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Connect With Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
                Engineering Team
              </span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Schedule an in-person architectural consultation at our Uttara Head Office, visit our
              North Badda joinery plant, or connect directly via phone and WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Offices & Interactive Contact Form */}
      <section className="py-20 lg:py-28 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Office Locations & Direct Contacts (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <SectionHeading
                  align="left"
                  badge="Official Locations"
                  title="Our Operating"
                  titleHighlight="Headquarters"
                  subtitle="Visit our design studios or manufacturing workshops in Dhaka."
                />
              </div>

              {/* Office Cards */}
              <div className="space-y-6">
                {CONTACT_OFFICES.map((office) => (
                  <div
                    key={office.id}
                    className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-colors space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[11px] font-bold">
                        {office.badge}
                      </span>
                      {office.id === "head-office-uttara" ? (
                        <Building2 className="w-5 h-5 text-amber-400" />
                      ) : (
                        <Hammer className="w-5 h-5 text-amber-400" />
                      )}
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white">{office.name}</h3>
                      <p className="text-xs text-slate-400 mt-1">{office.description}</p>
                    </div>

                    <div className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
                      <div className="flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>
                          {office.addressLine1}, {office.addressLine2}, {office.cityPostal},{" "}
                          {office.country}
                        </span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>{office.phone}</span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>{office.email}</span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                        <span className="text-slate-400">{office.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Instant WhatsApp Quick Callout */}
              <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-800/80 flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white">Instant WhatsApp Consultation</h4>
                  <p className="text-xs text-emerald-300">
                    Chat directly with our on-duty civil engineers.
                  </p>
                </div>
                <a
                  href={`https://wa.me/${COMPANY_DATA.phones.whatsapp}?text=Hello%20RajTex%20Homes%20Ltd,%20I%20would%20like%20to%20discuss%20a%20construction%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors shrink-0"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right: Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed Section */}
      <section className="py-20 lg:py-24 bg-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <SectionHeading
            badge="Interactive Location Maps"
            title="Locate Our"
            titleHighlight="Offices & Workshop"
            subtitle="Find our central executive studio in Uttara Sector 12 and our manufacturing plant in North Badda."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {/* Map 1: Uttara Head Office */}
            <div className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl space-y-3 p-4">
              <div className="flex items-center justify-between px-2 pt-2">
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Corporate Head Office (Uttara Model Town)
                  </h4>
                  <p className="text-xs text-slate-400">
                    House # 02, Lift-06, Road # 18, Sector # 12, Dhaka-1230
                  </p>
                </div>
                <span className="p-1 rounded bg-amber-500/10 text-amber-400 text-xs font-mono">
                  MAP // 01
                </span>
              </div>
              <div className="relative h-80 w-full rounded-2xl overflow-hidden border border-slate-800">
                <iframe
                  title="RajTex Homes Ltd Uttara Head Office Map"
                  src={CONTACT_OFFICES[0].mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Map 2: North Badda Workshop */}
            <div className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl space-y-3 p-4">
              <div className="flex items-center justify-between px-2 pt-2">
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Furniture & Metal Workshop (North Badda)
                  </h4>
                  <p className="text-xs text-slate-400">
                    14 Purbachal, North Badda, Dhaka-1212
                  </p>
                </div>
                <span className="p-1 rounded bg-amber-500/10 text-amber-400 text-xs font-mono">
                  MAP // 02
                </span>
              </div>
              <div className="relative h-80 w-full rounded-2xl overflow-hidden border border-slate-800">
                <iframe
                  title="RajTex Homes Ltd North Badda Workshop Map"
                  src={CONTACT_OFFICES[1].mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
