"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  X,
  ChevronDown,
  Phone,
  MessageCircle,
  ArrowRight,
  MapPin,
  Clock,
} from "lucide-react";
import { COMPANY_DATA } from "@/data/company";
import { SERVICES_DATA } from "@/data/services";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 xl:hidden bg-black/80 backdrop-blur-md flex justify-end"
    >
      <div className="w-full max-w-sm sm:max-w-md bg-slate-950 h-full overflow-y-auto border-l border-slate-800 p-6 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-800">
            <Link href="/" onClick={onClose} className="block">
              <div className="relative h-10 w-36 bg-white px-2 py-1 rounded">
                <Image
                  src="/logo.jpeg"
                  alt="RajTex Homes Ltd."
                  fill
                  sizes="144px"
                  className="object-contain"
                />
              </div>
            </Link>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 space-y-1">
            <Link
              href="/"
              onClick={onClose}
              className={`block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                pathname === "/"
                  ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                  : "text-slate-200 hover:bg-slate-900"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={onClose}
              className={`block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                pathname.startsWith("/about")
                  ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                  : "text-slate-200 hover:bg-slate-900"
              }`}
            >
              About Us
            </Link>

            {/* Expandable Services */}
            <div>
              <button
                onClick={() => setIsServicesExpanded(!isServicesExpanded)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold text-slate-200 hover:bg-slate-900 transition-colors"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform ${
                    isServicesExpanded ? "rotate-180 text-amber-400" : ""
                  }`}
                />
              </button>

              {isServicesExpanded && (
                <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-900/60 rounded-lg mt-1 border border-slate-800/80">
                  <Link
                    href="/services"
                    onClick={onClose}
                    className="block px-3 py-2 text-xs font-bold uppercase tracking-wider text-amber-400 border-b border-slate-800 mb-1"
                  >
                    View All Services Overview →
                  </Link>
                  {SERVICES_DATA.map((srv) => (
                    <Link
                      key={srv.id}
                      href={`/services#${srv.slug}`}
                      onClick={onClose}
                      className="block px-3 py-2 text-sm text-slate-300 hover:text-amber-400 rounded transition-colors"
                    >
                      {srv.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/projects"
              onClick={onClose}
              className={`block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                pathname.startsWith("/projects")
                  ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                  : "text-slate-200 hover:bg-slate-900"
              }`}
            >
              Projects Portfolio
            </Link>

            <Link
              href="/process"
              onClick={onClose}
              className={`block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                pathname.startsWith("/process")
                  ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                  : "text-slate-200 hover:bg-slate-900"
              }`}
            >
              Our 8-Step Process
            </Link>

            <Link
              href="/why-rajtex"
              onClick={onClose}
              className={`block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                pathname.startsWith("/why-rajtex")
                  ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                  : "text-slate-200 hover:bg-slate-900"
              }`}
            >
              Why Choose RajTex
            </Link>

            <Link
              href="/team"
              onClick={onClose}
              className={`block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                pathname.startsWith("/team")
                  ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                  : "text-slate-200 hover:bg-slate-900"
              }`}
            >
              Engineering & Leadership Team
            </Link>

            <Link
              href="/contact"
              onClick={onClose}
              className={`block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                pathname.startsWith("/contact")
                  ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                  : "text-slate-200 hover:bg-slate-900"
              }`}
            >
              Contact Offices
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="mt-6 space-y-3">
            <Link
              href="/quote"
              onClick={onClose}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/20"
            >
              Request a Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${COMPANY_DATA.phones.rawPrimary}`}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-200 hover:text-white"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                Call Now
              </a>
              <a
                href={`https://wa.me/${COMPANY_DATA.phones.whatsapp}?text=Hello%20RajTex%20Homes%20Ltd,%20I%20would%20like%20to%20inquire%20about%20a%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-emerald-950/60 border border-emerald-800 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Corporate Address Footer */}
        <div className="mt-8 pt-6 border-t border-slate-900 text-xs text-slate-400 space-y-2">
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span>
              <strong>Uttara Office:</strong> {COMPANY_DATA.headOffice.fullFormatted}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-slate-500 shrink-0" />
            <span>{COMPANY_DATA.businessHours}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
