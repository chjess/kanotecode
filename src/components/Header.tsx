"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, Shield, Compass, Download } from "lucide-react";

export function Header() {
  const pathname = usePathname();

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
          <nav className="flex items-center gap-0.5">
            {items.map(({ href, label, icon: Icon }) => {
              const active = isActive(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className="relative flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-[#A8B0C2] hover:text-white transition-colors duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                  {active && (
                    <span className="absolute -bottom-[3px] left-1/2 -translate-x-1/2 w-6 h-[2px] bg-gradient-to-r from-violet-500 to-blue-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>
          <a
            href="https://github.com/DMV247/KanoteCode-Downloads/raw/refs/heads/main/Release/KanoteCode.apk"
            download
            className="inline-flex items-center justify-center rounded-full font-bold bg-gradient-to-r from-violet-500 to-blue-500 text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer px-4 py-2 text-sm"
          >
            ⬇ Tải APK
          </a>
        </div>
      </div>
    </header>
  );
}
