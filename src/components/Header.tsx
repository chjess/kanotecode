"use client";

import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#162B55] bg-[#080B12]/80 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="text-lg font-extrabold gradient-text">KanoteCode</Link>
          <nav className="flex items-center gap-4">
            <Link href="/" className="text-sm text-[#C8D0E0] hover:text-white transition-colors">Trang chủ</Link>
            <Link href="/security" className="text-sm text-[#C8D0E0] hover:text-white transition-colors">Bảo mật</Link>
            <Link href="/guide" className="text-sm text-[#C8D0E0] hover:text-white transition-colors">Hướng dẫn</Link>
            <Link href="/#features" className="text-sm text-[#C8D0E0] hover:text-white transition-colors">Tính năng</Link>
            <Link href="/#how" className="text-sm text-[#C8D0E0] hover:text-white transition-colors">Cách dùng</Link>
            <Link href="/#download" className="text-sm text-[#C8D0E0] hover:text-white transition-colors">Tải về</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}