"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="hidden sm:block fixed bottom-6 right-6 z-40">
      {/* Tooltip message */}
      {showTooltip && (
        <div className="absolute bottom-16 right-0 w-64 p-3 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl text-xs text-slate-200 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex justify-between items-start mb-1">
            <span className="font-bold text-emerald-400">RajTex Engineering Support</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-slate-300">
            Have a project question? Chat directly with our civil & architectural team on WhatsApp.
          </p>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={`https://wa.me/${COMPANY_DATA.phones.whatsapp}?text=Hello%20RajTex%20Homes%20Ltd,%20I%20would%20like%20to%20discuss%20a%20construction/design%20project.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with RajTex Homes Ltd."
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:shadow-emerald-500/30 transition-all transform hover:scale-105"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 border-2 border-slate-950 rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 border-2 border-slate-950 rounded-full" />
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
