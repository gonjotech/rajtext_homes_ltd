import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ShieldCheck,
  Building2,
  Hammer,
  ExternalLink,
} from "lucide-react";
import { COMPANY_DATA } from "@/data/company";
import { SERVICES_DATA } from "@/data/services";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 relative overflow-hidden">
      {/* Subtle blueprint grid overlay */}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand & Corporate Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <div className="relative h-14 w-44 bg-white px-2 py-1.5 rounded shadow-sm">
                <Image
                  src="/logo.jpeg"
                  alt="RajTex Homes Ltd."
                  fill
                  sizes="176px"
                  className="object-contain"
                />
              </div>
            </Link>

            <div className="space-y-1">
              <p className="text-sm font-semibold text-white tracking-wide uppercase">
                RajTex Homes Ltd.
              </p>
              <p className="text-xs font-medium text-amber-400 tracking-wider">
                Architecture | Engineering | Construction
              </p>
              <p className="text-xs text-slate-400 italic">
                &ldquo;Building Vision. Engineering Excellence.&rdquo;
              </p>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Integrated architectural, engineering and construction solutions for
              residential, commercial and industrial projects across Bangladesh.
              Engineered with precision from planning to final handover.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Core Motto:
              </span>
              <span className="text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2.5 py-1 rounded">
                Creative | Honesty | Satisfaction
              </span>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-amber-500/60" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-amber-500/60" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-amber-500/60" />
                  Projects Showcase
                </Link>
              </li>
              <li>
                <Link
                  href="/process"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-amber-500/60" />
                  Our 8-Step Process
                </Link>
              </li>
              <li>
                <Link
                  href="/why-rajtex"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-amber-500/60" />
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link
                  href="/sister-companies"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-amber-500/60" />
                  Sister Concerns
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-amber-500/60" />
                  Engineering Team
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-amber-500/60" />
                  Contact Offices
                </Link>
              </li>
              <li>
                <Link
                  href="/quote"
                  className="text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-amber-500" />
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Key Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Engineering Services
            </h4>
            <ul className="space-y-2 text-sm">
              {SERVICES_DATA.slice(0, 8).map((srv) => (
                <li key={srv.id}>
                  <Link
                    href={`/services#${srv.slug}`}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-xs sm:text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 inline-block" />
                    {srv.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-amber-400 hover:text-amber-300 text-xs font-semibold flex items-center gap-1 pt-1"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Official Contact & Offices (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Official Headquarters
            </h4>

            <div className="space-y-3.5 text-xs sm:text-sm">
              {/* Uttara Head Office */}
              <div className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <div>
                  <strong className="text-white block font-medium">
                    Corporate Head Office:
                  </strong>
                  <span className="text-slate-400">
                    House # 02, (Lift-06), Road # 18, Sector # 12, Uttara Model Town,
                    Dhaka-1230, Bangladesh
                  </span>
                </div>
              </div>

              {/* Badda Factory */}
              <div className="flex items-start gap-2.5">
                <Hammer className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <div>
                  <strong className="text-white block font-medium">
                    Workshop & Furniture Factory:
                  </strong>
                  <span className="text-slate-400">
                    14 Purbachal, North Badda, Dhaka-1212, Bangladesh
                  </span>
                </div>
              </div>

              {/* Phones */}
              <div className="flex items-start gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <div>
                  <strong className="text-white block font-medium">Hotlines:</strong>
                  <a
                    href={`tel:${COMPANY_DATA.phones.rawPrimary}`}
                    className="hover:text-amber-400 block transition-colors"
                  >
                    {COMPANY_DATA.phones.formattedPrimary}
                  </a>
                  <a
                    href={`tel:${COMPANY_DATA.phones.rawSecondary}`}
                    className="hover:text-amber-400 block transition-colors"
                  >
                    {COMPANY_DATA.phones.formattedSecondary}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`mailto:${COMPANY_DATA.emails.info}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_DATA.emails.info}
                </a>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                <span className="text-xs text-slate-400">
                  {COMPANY_DATA.businessHours}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Developer Credits & Legal */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>
              &copy; {new Date().getFullYear()} {COMPANY_DATA.name} All rights
              reserved.
            </p>
            <span className="hidden sm:inline text-slate-700">|</span>
            <p className="flex items-center gap-1.5 text-slate-400">
              <span>Developed by</span>
              <a
                href="https://gonjotech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-amber-400 hover:text-amber-300 transition-colors hover:underline inline-flex items-center gap-1"
              >
                <span>GonjoTech</span>
              </a>
              <span className="text-slate-500">(<a href="https://gonjotech.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">gonjotech.com</a>)</span>
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <Link href="/about" className="hover:text-slate-300 transition-colors">
              About
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Offices
            </Link>
            <span>•</span>
            <span className="text-slate-600">Privacy Policy</span>
            <span>•</span>
            <span className="text-slate-600">Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
