"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export function StickyMobileBar() {
  return (
    <aside
      aria-label="Mobile quick actions"
      className="xl:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-3 py-2 flex items-center justify-around gap-2 shadow-2xl"
    >
      {/* Call Button */}
      <a
        href={`tel:${COMPANY_DATA.phones.rawPrimary}`}
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-200 active:bg-slate-800 transition-colors"
      >
        <Phone className="w-4 h-4 text-amber-400" />
        <span>Call</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${COMPANY_DATA.phones.whatsapp}?text=Hello%20RajTex%20Homes%20Ltd,%20I%20am%20interested%20in%20consulting%20about%20a%20project.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-emerald-950/90 border border-emerald-700/60 text-xs font-semibold text-emerald-400 active:bg-emerald-900 transition-colors"
      >
        <MessageCircle className="w-4 h-4" />
        <span>WhatsApp</span>
      </a>

      {/* Request Quote Button */}
      <Link
        href="/quote"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 text-xs font-bold text-slate-950 shadow-md active:from-amber-500 active:to-amber-600 transition-all"
      >
        <FileText className="w-4 h-4" />
        <span>Quote</span>
      </Link>
    </aside>
  );
}
