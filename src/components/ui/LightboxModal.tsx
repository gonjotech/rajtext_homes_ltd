"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
  title?: string;
  subtitle?: string;
}

export function LightboxModal({
  isOpen,
  onClose,
  images,
  currentIndex,
  onPrev,
  onNext,
  title,
  subtitle,
}: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || images.length === 0) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6"
    >
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 sm:p-6 bg-gradient-to-b from-black/80 to-transparent">
        <div>
          {title && <h3 className="text-white text-lg font-bold">{title}</h3>}
          {subtitle && <p className="text-slate-400 text-xs sm:text-sm">{subtitle}</p>}
        </div>
        <button
          onClick={onClose}
          className="p-2 text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Container */}
      <div className="relative w-full max-w-6xl h-[70vh] sm:h-[80vh] flex items-center justify-center">
        <Image
          src={images[currentIndex]}
          alt={title || "Project preview"}
          fill
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-contain"
          priority
        />
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={onPrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 text-white bg-slate-900/70 hover:bg-slate-800 border border-slate-700 rounded-full transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={onNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 text-white bg-slate-900/70 hover:bg-slate-800 border border-slate-700 rounded-full transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image index counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 text-xs font-mono">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}
