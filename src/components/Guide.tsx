"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Tabs } from "@/components/ui/tabs";

export function Guide() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tabs = [
    {
      id: "t-openai",
      label: "OpenAI",
      content: (
        <div className="grid gap-3">
          <div className="bg-[#0A1630] border border-[#162B55] rounded-xl px-5 py-4">
            <p className="text-sm font-bold text-violet-400 mb-2">1. Truy cập trang</p>
            <p className="text-[#C8D0E0] text-sm">Vào <a href="https://platform.openai.com" target="_blank" rel="noopener noreferrer" className="text-violet-300 underline">platform.openai.com</a>, đăng ký tài khoản bằng Google hoặc email.</p>
          </div>
          <div className="bg-[#0A1630] border border-[#162B55] rounded-xl px-5 py-4">
            <p className="text-sm font-bold text-violet-400 mb-2">2. Tạo API Key</p>
            <p className="text-[#C8D0E0] text-sm">Vào Settings → API Keys → Create new secret key. Đặt tên key, chọn model (GPT-4o-mini free), rồi tạo.</p>
          </div>
          <div className="bg-[#0A1630] border border-[#162B55] rounded-xl px-5 py-4">
            <p className="text-sm font-bold text-violet-400 mb-2">3. Copy Key</p>
            <p className="text-[#C8D0E0] text-sm">Copy key ngay (chỉ hiện 1 lần). Không chia sẻ cho ai. Lưu vào nơi an toàn.</p>
          </div>
          <div className="bg-[#0A1630] border border-[#162B55] rounded-xl px-5 py-4">
            <p className="text-sm font-bold text-violet-400 mb-2">4. Gắn vào app</p>
            <p className="text-[#C8D0E0] text-sm">Trong app: Cài đặt → API Keys → Thêm → Chọn OpenAI → Paste key → Lưu. Test ngay!</p>
          </div>
        </div>
      ),
    },
    {
      id: "t-openrouter",
      label: "OpenRouter",
      content: (
        <div className="grid gap-3">
          <div className="bg-[#0A1630] border border-[#162B55] rounded-xl px-5 py-4">
            <p className="text-sm font-bold text-violet-400 mb-2">1. Truy cập trang</p>
            <p className="text-[#C8D0E0] text-sm">Vào <a href="https://openrouter.ai" target="_blank" rel="noopener noreferrer" className="text-violet-300 underline">openrouter.ai</a>, đăng ký tài khoản bằng Google hoặc email.</p>
          </div>
          <div className="bg-[#0A1630] border border-[#162B55] rounded-xl px-5 py-4">
            <p className="text-sm font-bold text-violet-400 mb-2">2. Tạo API Key</p>
            <p className="text-[#C8D0E0] text-sm">Vào Profile → API Keys → Generate new key. Đặt tên key rồi tạo.</p>
          </div>
          <div className="bg-[#0A1630] border border-[#162B55] rounded-xl px-5 py-4">
            <p className="text-sm font-bold text-violet-400 mb-2">3. Copy Key</p>
            <p className="text-[#C8D0E0] text-sm">Copy key ngay. Không chia sẻ cho ai.</p>
          </div>
          <div className="bg-[#0A1630] border border-[#162B55] rounded-xl px-5 py-4">
            <p className="text-sm font-bold text-violet-400 mb-2">4. Gắn vào app</p>
            <p className="text-[#C8D0E0] text-sm">Trong app: Cài đặt → API Keys → Thêm → Chọn OpenRouter → Paste key → Lưu.</p>
          </div>
        </div>
      ),
    },
    {
      id: "t-groq",
      label: "Groq",
      content: (
        <div className="grid gap-3">
          <div className="bg-[#0A1630] border border-[#162B55] rounded-xl px-5 py-4">
            <p className="text-sm font-bold text-violet-400 mb-2">1. Truy cập trang</p>
            <p className="text-[#C8D0E0] text-sm">Vào <a href="https://console.groq.com" target="_blank" rel="noopener noreferrer" className="text-violet-300 underline">console.groq.com</a>, đăng ký tài khoản.</p>
          </div>
          <div className="bg-[#0A1630] border border-[#162B55] rounded-xl px-5 py-4">
            <p className="text-sm font-bold text-violet-400 mb-2">2. Tạo API Key</p>
            <p className="text-[#C8D0E0] text-sm">Vào API Keys → Create API Key. Đặt tên key, chọn model (Llama 3 free), rồi tạo.</p>
          </div>
          <div className="bg-[#0A1630] border border-[#162B55] rounded-xl px-5 py-4">
            <p className="text-sm font-bold text-violet-400 mb-2">3. Copy Key</p>
            <p className="text-[#C8D0E0] text-sm">Copy key ngay. Không chia sẻ cho ai.</p>
          </div>
          <div className="bg-[#0A1630] border border-[#162B55] rounded-xl px-5 py-4">
            <p className="text-sm font-bold text-violet-400 mb-2">4. Gắn vào app</p>
            <p className="text-[#C8D0E0] text-sm">Trong app: Cài đặt → API Keys → Thêm → Chọn Groq → Paste key → Lưu.</p>
          </div>
        </div>
      ),
    },
    {
      id: "t-deepseek",
      label: "DeepSeek",
      content: (
        <div className="grid gap-3">
          <div className="bg-[#0A1630] border border-[#162B55] rounded-xl px-5 py-4">
            <p className="text-sm font-bold text-violet-400 mb-2">1. Truy cập trang</p>
            <p className="text-[#C8D0E0] text-sm">Vào <a href="https://platform.deepseek.com" target="_blank" rel="noopener noreferrer" className="text-violet-300 underline">platform.deepseek.com</a>, đăng ký tài khoản.</p>
          </div>
          <div className="bg-[#0A1630] border border-[#162B55] rounded-xl px-5 py-4">
            <p className="text-sm font-bold text-violet-400 mb-2">2. Tạo API Key</p>
            <p className="text-[#C8D0E0] text-sm">Vào Settings → API Keys → Create. Chọn model (DeepSeek-Coder free), rồi tạo.</p>
          </div>
          <div className="bg-[#0A1630] border border-[#162B55] rounded-xl px-5 py-4">
            <p className="text-sm font-bold text-violet-400 mb-2">3. Copy Key</p>
            <p className="text-[#C8D0E0] text-sm">Copy key ngay. Không chia sẻ cho ai.</p>
          </div>
          <div className="bg-[#0A1630] border border-[#162B55] rounded-xl px-5 py-4">
            <p className="text-sm font-bold text-violet-400 mb-2">4. Gắn vào app</p>
            <p className="text-[#C8D0E0] text-sm">Trong app: Cài đặt → API Keys → Thêm → Chọn DeepSeek → Paste key → Lưu.</p>
          </div>
        </div>
      ),
    },
    {
      id: "t-opencode",
      label: "OpenCode Zen",
      content: (
        <div className="grid gap-3">
          <div className="bg-[#0A1630] border border-[#162B55] rounded-xl px-5 py-4">
            <p className="text-sm font-bold text-violet-400 mb-2">1. Truy cập trang</p>
            <p className="text-[#C8D0E0] text-sm">Vào <a href="https://opencode.ai/auth" target="_blank" rel="noopener noreferrer" className="text-violet-300 underline">opencode.ai/auth</a>, đăng ký bằng GitHub hoặc Google.</p>
          </div>
          <div className="bg-[#0A1630] border border-[#162B55] rounded-xl px-5 py-4">
            <p className="text-sm font-bold text-violet-400 mb-2">2. Tạo API Key</p>
            <p className="text-[#C8D0E0] text-sm">Vào OpenCode Zen → bấm Create API Key. Không cần nạp tiền — có sẵn model miễn phí (Big Pickle, MiMo, Nemotron...). Chỉ nạp tiền nếu muốn dùng model trả phí.</p>
          </div>
          <div className="bg-[#0A1630] border border-[#162B55] rounded-xl px-5 py-4">
            <p className="text-sm font-bold text-violet-400 mb-2">3. Copy Key</p>
            <p className="text-[#C8D0E0] text-sm">Copy key (dạng sk-...). Không chia sẻ cho ai.</p>
          </div>
          <div className="bg-[#0A1630] border border-[#162B55] rounded-xl px-5 py-4">
            <p className="text-sm font-bold text-violet-400 mb-2">4. Gắn vào app</p>
            <p className="text-[#C8D0E0] text-sm">Trong app: Cài đặt → API Keys → Thêm → Chọn OpenCode → Paste key → Lưu. Truy cập hàng trăm model qua 1 key duy nhất.</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="guide" className="py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-bold tracking-widest uppercase text-violet-300 mb-3">Bắt đầu</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Hướng dẫn</h2>
          <p className="text-[#C8D0E0] mb-8">Bắt đầu trong 5 phút — tạo API key 5 nhà cung cấp rồi gắn vào app. Có nhiều model miễn phí.</p>
          <Tabs tabs={tabs} defaultTab="t-openai" />
        </motion.div>
      </div>
    </section>
  );
}