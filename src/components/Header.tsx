"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";
import { Home, Shield, Compass, Download, Menu, X } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const firstItemRef = useRef<HTMLAnchorElement>(null);

  const items = [
    { href: "/", label: "Trang chủ", icon: Home },
    { href: "/security", label: "Bảo mật", icon: Shield },
    { href: "/guide", label: "Hướng dẫn", icon: Compass },
    { href: "/#download", label: "Tải về", icon: Download },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href;
  };

  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (open && firstItemRef.current) {
      firstItemRef.current.focus();
    }
  }, [open]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#162B55]/30 bg-[#080B12]/80 backdrop-blur-xl">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          <Link
            href="/"
            className="text-xl font-extrabold gradient-text"
            style={{ textShadow: "0 0 24px rgba(123,63,242,0.45)" }}
          >
            KanoteCode
          </Link>
          <div className="flex items-center gap-3">
            <nav className="hidden md:flex items-center gap-0.5">
              {items.map(({ href, label, icon: Icon }) => {
                const active = isActive(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    className="group relative flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-[#A8B0C2] hover:text-white transition-colors duration-200"
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {label}
                    <span
                      className={`absolute -bottom-[3px] left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-violet-500 to-blue-500 rounded-full transition-all duration-300 ${
                        active ? "w-6 opacity-100" : "w-0 opacity-0 group-hover:w-6 group-hover:opacity-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>
            <a
              href="https://github.com/DMV247/KanoteCode-Downloads/raw/refs/heads/main/Release/KanoteCode.apk"
              download
              className="hidden md:inline-flex items-center justify-center rounded-full font-bold bg-gradient-to-r from-violet-500 to-blue-500 text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer px-4 py-2 text-sm"
            >
              ⬇ Tải APK
            </a>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Đóng menu" : "Mở menu"}
              aria-expanded={open}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full border border-[#162B55] bg-[#0A1630]/50 hover:border-violet-500/50 hover:bg-[#0A1630] transition-colors"
            >
              {open ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 z-40 md:hidden" onKeyDown={handleKeyDown}>
          <div className="absolute inset-0 bg-[#080B12]/95 backdrop-blur-sm" onClick={closeMenu} />
          <div
            ref={ref}
            className="absolute top-14 left-4 right-4 mx-auto bg-[#0E1525]/95 border border-[#162B55] rounded-2xl p-4 shadow-xl shadow-violet-500/30 max-w-xs"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <nav className="flex flex-col gap-1">
              {items.map(({ href, label, icon: Icon }, i) => {
                const active = isActive(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    ref={i === 0 ? firstItemRef : null}
                    onClick={closeMenu}
                    className={`relative flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      active
                        ? "bg-gradient-to-r from-violet-500/20 to-blue-500/20 text-white"
                        : "text-[#E0E6F0] hover:text-white hover:bg-[#1A2540]/80"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {label}
                    {active && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-violet-500 to-blue-500 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-3 pt-3 border-t border-[#162B55]/50">
              <a
                href="https://github.com/DMV247/KanoteCode-Downloads/raw/refs/heads/main/Release/KanoteCode.apk"
                download
                onClick={closeMenu}
                className="inline-flex items-center justify-center rounded-full font-bold bg-gradient-to-r from-violet-500 to-blue-500 text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer px-6 py-3 text-sm w-full"
              >
                ⬇ Tải APK
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
