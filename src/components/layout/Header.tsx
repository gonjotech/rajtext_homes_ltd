"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  ArrowRight,
  Compass,
  ShieldCheck,
  Hammer,
  Palette,
  Zap,
  Briefcase,
  Eye,
  Sparkles,
  Calculator,
  Key,
  Home,
} from "lucide-react";
import { COMPANY_DATA } from "@/data/company";
import { SERVICES_DATA } from "@/data/services";

const ICON_MAP: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-5 h-5 text-amber-500" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-amber-500" />,
  Hammer: <Hammer className="w-5 h-5 text-amber-500" />,
  Palette: <Palette className="w-5 h-5 text-amber-500" />,
  Zap: <Zap className="w-5 h-5 text-amber-500" />,
  Briefcase: <Briefcase className="w-5 h-5 text-amber-500" />,
  Eye: <Eye className="w-5 h-5 text-amber-500" />,
  Sparkles: <Sparkles className="w-5 h-5 text-amber-500" />,
  Calculator: <Calculator className="w-5 h-5 text-amber-500" />,
  Key: <Key className="w-5 h-5 text-amber-500" />,
  Home: <Home className="w-5 h-5 text-amber-500" />,
};

interface HeaderProps {
  onToggleMobileMenu?: () => void;
  isMobileMenuOpen?: boolean;
}

export function Header({ onToggleMobileMenu, isMobileMenuOpen }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setIsServicesOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
    },
    { name: "Projects", href: "/projects" },
    { name: "Our Process", href: "/process" },
    { name: "Why RajTex", href: "/why-rajtex" },
    { name: "Sister Concerns", href: "/sister-companies" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Corporate Utility Bar */}
      <div className="hidden lg:block bg-slate-950 text-slate-400 text-xs border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
              Uttara Head Office & Badda Joinery Plant
            </span>
            <span className="text-slate-600">|</span>
            <Link
              href="/sister-companies"
              className="text-slate-400 hover:text-amber-400 transition-colors"
            >
              Group Concerns: <strong className="text-amber-400 font-semibold">RajTex (Garments) • Raj Builder</strong>
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href={`tel:${COMPANY_DATA.phones.rawPrimary}`}
              className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>Hotline: {COMPANY_DATA.phones.formattedPrimary}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={`mailto:${COMPANY_DATA.emails.info}`}
              className="text-slate-400 hover:text-white transition-colors"
            >
              {COMPANY_DATA.emails.info}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-950/95 backdrop-blur-md shadow-2xl border-b border-slate-800"
            : "bg-slate-950/80 backdrop-blur-sm border-b border-slate-800/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-12 w-36 sm:w-44 bg-white px-2 py-1 rounded flex items-center justify-center shadow-sm">
                <Image
                  src="/logo.jpeg"
                  alt="RajTex Homes Ltd."
                  fill
                  sizes="(max-width: 640px) 144px, 176px"
                  className="object-contain p-1"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-1 2xl:space-x-2">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className={`px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${
                          isActive
                            ? "text-amber-400 bg-slate-900/80"
                            : "text-slate-200 hover:text-white hover:bg-slate-900/50"
                        }`}
                      >
                        {link.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isServicesOpen ? "rotate-180 text-amber-400" : ""
                          }`}
                        />
                      </Link>

                      {/* Services Mega Dropdown */}
                      {isServicesOpen && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] pt-2 z-50">
                          <div className="bg-slate-950 border border-slate-800 rounded-xl shadow-2xl p-6 backdrop-blur-xl grid grid-cols-2 gap-4">
                            <div className="col-span-2 pb-2 mb-2 border-b border-slate-800 flex justify-between items-center">
                              <div>
                                <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">
                                  Comprehensive Capabilities
                                </span>
                                <h4 className="text-sm font-bold text-white">
                                  End-to-End Architectural & Construction Services
                                </h4>
                              </div>
                              <Link
                                href="/services"
                                className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 group"
                              >
                                View All 10 Services
                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                              </Link>
                            </div>

                            {SERVICES_DATA.map((srv) => (
                              <Link
                                key={srv.id}
                                href={`/services#${srv.slug}`}
                                className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-900/90 transition-colors group"
                              >
                                <div className="p-2 rounded bg-slate-900 border border-slate-800 group-hover:border-amber-500/40 transition-colors shrink-0">
                                  {ICON_MAP[srv.iconName] || (
                                    <Hammer className="w-5 h-5 text-amber-500" />
                                  )}
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-slate-100 group-hover:text-amber-400 transition-colors">
                                    {srv.title}
                                  </div>
                                  <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                                    {srv.shortDescription}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive
                        ? "text-amber-400 bg-slate-900/80"
                        : "text-slate-200 hover:text-white hover:bg-slate-900/50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden xl:flex items-center space-x-3">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-lg hover:shadow-amber-500/20 transition-all transform hover:-translate-y-0.5"
              >
                Request a Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex xl:hidden items-center space-x-3">
              <Link
                href="/quote"
                className="text-xs font-bold text-slate-950 bg-amber-500 px-3 py-1.5 rounded-md"
              >
                Quote
              </Link>
              <button
                onClick={onToggleMobileMenu}
                aria-label="Toggle Navigation Menu"
                className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-amber-500" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
