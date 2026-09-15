"use client";

import * as React from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs } from "@/components/ui/tabs";
import {
  Wrench, GitCompare, MonitorPlay, FolderOpen, FileCode,
  Terminal, Shield, Sparkles, ChevronLeft, ChevronRight, Smartphone, Zap, Cpu
} from "lucide-react";

export default function Home() {
  return (
    <main>
      <Hero />
      <Workflow />
      <Story />
      <Features />
      <HowItWorks />
      <WhySection />
      <Roadmap />
      <Download />
      <Footer />
    </main>
  );
}

function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="home" className="relative overflow-hidden py-20 md:py-32" ref={ref}>
      <div className="hero-night" />
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex gap-2 flex-wrap mb-6">
              <Badge>v1.0</Badge>
              <Badge variant="success">Miễn phí</Badge>
              <Badge variant="outline">Không cần PC</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
              AI Coding Agent<br />
              <span className="gradient-text">trong túi quần bạn.</span>
            </h1>
            <p className="text-lg text-[#A8B0C2] mb-8 max-w-lg">
              KanoteCode mang sức mạnh AI coding agent lên Android: mở project, gắn API key, chat để AI đọc code, sửa code, duyệt từng thay đổi rồi preview ngay — tất cả trên điện thoại.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Button size="lg" className="px-8 py-4 text-lg">⬇ Tải APK về</Button>
              <Button variant="ghost" size="lg" className="px-8 py-4 text-lg">Xem tính năng</Button>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-10">
              <Stat number="12" label="AI tools" />
              <Stat number="10" label="nhà AI" />
              <Stat number="2" label="ngôn ngữ" />
              <Stat number="100" suffix="%" label="on-device" />
            </div>
          </motion.div>
<motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={isInView ? { opacity: 1, scale: 1 } : {}}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="w-full flex justify-center"
          >
            <div className="relative">
              <img src="assets/logo.png" alt="KanoteCode" className="object-contain max-w-96" />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-violet-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label, suffix = "" }: { number: string; label: string; suffix?: string }) {
  return (
    <div>
      <strong className="text-2xl md:text-3xl font-extrabold gradient-text">{number}{suffix}</strong>
      <p className="text-[#A8B0C2] text-sm mt-1">{label}</p>
    </div>
  );
}

function Workflow() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tabs = [
    {
      id: "t-chat",
      label: "💬 Chat",
      content: (
        <div className="grid gap-3">
          <div className="bg-gradient-to-r from-violet-500 to-blue-500 rounded-lg px-4 py-3 text-white text-sm font-medium max-w-md justify-self-start">Liệt kê file trong project Bakery</div>
          <div className="text-xs font-mono text-[#7DD3FC] bg-[#0A1630] px-3 py-2 rounded">🔧 list_files <code className="text-white">/Bakery</code> ✓ 13 files</div>
          <div className="bg-[#0A1630] border border-[#162B55] rounded-lg px-4 py-3 text-sm">Project có <code className="text-cyan-300">index.html</code>, <code className="text-cyan-300">src/js/app.js</code>, <code className="text-cyan-300">pages/menu.html</code>… Ký Chủ muốn sửa file nào?</div>
        </div>
      ),
    },
    {
      id: "t-diff",
      label: "🔍 Diff",
      content: (
        <div className="grid gap-3">
          <div className="flex items-center gap-3 text-sm">
            <strong className="text-white">BakeryMenu.tsx</strong>
            <span className="text-emerald-400">+12</span>
            <span className="text-red-400">−8</span>
          </div>
          <div className="rounded-lg overflow-hidden border border-[#162B55] font-mono text-xs">
            <div className="bg-red-500/10 text-red-300 px-3 py-1">- const category = "best";</div>
            <div className="bg-emerald-500/10 text-emerald-300 px-3 py-1">+ const category = selectedCategory;</div>
            <div className="bg-red-500/10 text-red-300 px-3 py-1">- setActive("best");</div>
            <div className="bg-emerald-500/10 text-emerald-300 px-3 py-1">+ setActiveCategory(selectedCategory);</div>
          </div>
          <div className="flex gap-3">
            <Button variant="ghost" size="sm">Từ chối</Button>
            <Button size="sm">Chấp nhận ✓</Button>
          </div>
        </div>
      ),
    },
    {
      id: "t-editor",
      label: "📝 Editor",
      content: (
        <div className="rounded-lg overflow-hidden border border-[#162B55]">
          <div className="flex justify-between items-center bg-[#04070D] px-4 py-2 text-sm border-b border-[#162B55]">
            <span>📄 src/js/app.js</span>
            <Badge variant="outline">đã sửa • chưa lưu</Badge>
          </div>
              <pre className="p-4 font-mono text-xs leading-relaxed overflow-x-auto">
            <code>
              <span className="text-[#50678F]">1</span> <span className="text-violet-300">const</span> category = <span className="text-amber-400">"best"</span>;{'\u000A'}
              <span className="text-[#50678F]">2</span> <span className="text-violet-300">function</span> <span className="text-cyan-300">setActive</span>(c) {'{'}
              <span className="text-[#50678F]">3</span>   <span className="text-[#6F7890]">// TODO: lọc theo loại đã chọn</span>{'\u000A'}
              <span className="text-[#50678F]">4</span>   render(menu.<span className="text-cyan-300">filter</span>(m =&gt; m.type === c));{'\u000A'}
              <span className="text-[#50678F]">5</span> {'}'}
            </code>
          </pre>
          <div className="flex gap-4 px-4 py-2 border-t border-[#162B55] text-sm text-[#A8B0C2]">
            <span>↩ Undo</span><span>🔍 Tìm</span><span className="text-emerald-400 font-bold">💾 Lưu</span>
          </div>
        </div>
      ),
    },
    {
      id: "t-preview",
      label: "🌐 Preview",
      content: (
        <div className="rounded-lg overflow-hidden border border-[#162B55]">
          <div className="flex gap-2 items-center bg-[#04070D] px-4 py-2 border-b border-[#162B55] text-sm text-[#A8B0C2]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#162B55]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#162B55]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#162B55]" />
            <span className="ml-2">index.html — Demo Bakery</span>
          </div>
          <div className="p-6">
            <strong className="text-xl text-white">🧁 Bakery Demo</strong>
            <p className="text-[#A8B0C2] mt-2">Best sellers • Menu • Giỏ hàng — web chạy thật bằng localhost + WebView trên máy.</p>
            <div className="flex gap-2 mt-4">
              <Badge variant="success">JS ✓</Badge>
              <Badge variant="success">CSS ✓</Badge>
              <Badge variant="success">Ảnh ✓</Badge>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="workflow" className="py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-bold tracking-widest uppercase text-violet-300 mb-3">Bước đi</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Quy trình</h2>
          <p className="text-[#A8B0C2] mb-8">Từ chat tới preview — đúng cách app dùng thật. Chọn tab để xem.</p>
          <Tabs tabs={tabs} defaultTab="t-chat" />
        </motion.div>
      </div>
    </section>
  );
}

function Story() {
  const [current, setCurrent] = React.useState(0);
  const total = 7;
  const [isPaused, setIsPaused] = React.useState(false);
  const sectionRef = useRef(null);

  const images = [
    "assets/story-night.jpg",
    "assets/story-phone.jpg",
    "assets/story-parts.jpg",
    "assets/story-robot.jpg",
    "assets/story-hand.jpg",
    "assets/story-view.png",
    "assets/story-dawn.jpg",
  ];

  const titles = ['01 — Nửa đêm', '02 — Chưa hoàn hảo', '03 — Từng mảnh ghép', '04 — Đang viết dở', '05 — Dành cho bạn', '06 — KanoteCode', '07 — Lời kết'];

  const pages = [
    {
      content: (
        <div className="max-w-2xl">
          <p className="text-lg md:text-xl text-[#C8D0E0] mb-4 leading-relaxed">Có những ý tưởng xuất hiện vào lúc nửa đêm.</p>
          <p className="text-lg md:text-xl text-[#C8D0E0] mb-6 leading-relaxed">Khi trước mặt chỉ còn một chiếc điện thoại, một ý tưởng chưa thành hình, và một câu hỏi rất đơn giản:</p>
          <p className="text-2xl md:text-3xl font-extrabold text-white mb-8 border-l-4 border-violet-500 pl-6">"Nếu không có PC thì sao?"</p>
          <p className="text-lg text-[#C8D0E0] mb-3">Không máy tính.</p>
          <p className="text-lg text-[#C8D0E0] mb-3">Không VPS.</p>
          <p className="text-lg text-[#C8D0E0] mb-3">Không một môi trường phát triển quen thuộc.</p>
          <p className="text-lg text-[#C8D0E0] mb-6">Chỉ có chiếc điện thoại đang nằm trong tay.</p>
          <p className="text-lg md:text-xl text-[#C8D0E0] mb-6">Vậy liệu có thể mang một coding agent vào đó không?</p>
          <p className="text-xl md:text-2xl font-bold text-white">KanoteCode bắt đầu từ chính câu hỏi đó.</p>
        </div>
      ),
    },
    {
      content: (
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Không phải một sản phẩm hoàn hảo</h2>
          <p className="text-lg md:text-xl text-[#C8D0E0] mb-4 leading-relaxed">KanoteCode không được tạo ra với mục tiêu trở thành một ứng dụng hoàn hảo ngay từ phiên bản đầu tiên.</p>
          <p className="text-lg md:text-xl text-[#C8D0E0] mb-6 leading-relaxed">Nó bắt đầu khá vụng về.</p>
          <div className="space-y-3 mb-6">
            <p className="text-lg text-[#C8D0E0] flex items-start gap-3"><span className="text-violet-400">▸</span> Có những thứ hoạt động chưa thật mượt.</p>
            <p className="text-lg text-[#C8D0E0] flex items-start gap-3"><span className="text-violet-400">▸</span> Có những tính năng còn đang thử nghiệm.</p>
            <p className="text-lg text-[#C8D0E0] flex items-start gap-3"><span className="text-violet-400">▸</span> Có những giới hạn mà chúng tôi vẫn đang tìm cách vượt qua.</p>
          </div>
          <p className="text-xl md:text-2xl text-white font-semibold mb-3">Nhưng có một điều KanoteCode muốn giữ lại:</p>
          <p className="text-xl md:text-2xl font-bold text-white">Bạn không nhất thiết phải ngồi trước một chiếc PC mới có thể bắt đầu xây dựng một thứ gì đó.</p>
        </div>
      ),
    },
    {
      content: (
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Từ một ý tưởng nhỏ</h2>
          <p className="text-lg md:text-xl text-[#C8D0E0] mb-6 leading-relaxed">Ban đầu chỉ là một câu hỏi. Sau đó là một project.</p>
          <div className="space-y-3 mb-6">
            {[
              "Rồi một editor",
              "Một file explorer",
              "Một coding agent",
              "Một terminal",
              "Một preview web",
              "Một hệ thống diff",
            ].map((item, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-lg text-[#C8D0E0] flex items-start gap-3"
              >
                <span className="text-violet-400 font-bold">0{i + 1}</span> {item}
              </motion.p>
            ))}
          </div>
          <p className="text-lg md:text-xl text-[#C8D0E0] mb-4">Từng thứ một được ghép lại.</p>
          <p className="text-2xl md:text-3xl font-bold text-white mb-3">"Android có làm được không?"</p>
          <p className="text-xl md:text-2xl font-bold text-violet-300">Nếu câu trả lời là có thể — thì thử.</p>
        </div>
      ),
    },
    {
      content: (
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Vì vậy, KanoteCode vẫn đang được viết dở</h2>
          <p className="text-lg md:text-xl text-[#C8D0E0] mb-4 leading-relaxed">Và có lẽ điều đó cũng không sao.</p>
          <p className="text-lg md:text-xl text-[#C8D0E0] mb-6 leading-relaxed">Một ứng dụng dành cho việc biến ý tưởng thành code thì bản thân nó cũng nên được xây dựng theo cách đó:</p>
          <p className="text-xl md:text-2xl text-white font-semibold mb-3 italic">từng dòng một, từng phiên bản một.</p>
          <p className="text-lg md:text-xl text-[#C8D0E0] mb-3">Hôm nay nó có thể làm được một việc.</p>
          <p className="text-lg md:text-xl text-[#C8D0E0] mb-3">Ngày mai có thể thêm một tool.</p>
          <p className="text-lg md:text-xl text-[#C8D0E0] leading-relaxed">Và biết đâu, một trong những tính năng tiếp theo lại bắt đầu từ chính một góp ý của bạn.</p>
        </div>
      ),
    },
    {
      content: (
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Nếu bạn đang xây dựng một thứ gì đó...</h2>
          <div className="space-y-4 mb-6">
            <p className="text-lg md:text-xl text-[#C8D0E0]"><span className="text-violet-400 font-bold">→</span> Có thể bạn là developer.</p>
            <p className="text-lg md:text-xl text-[#C8D0E0]"><span className="text-violet-400 font-bold">→</span> Có thể bạn chỉ đang học code.</p>
            <p className="text-lg md:text-xl text-[#C8D0E0]"><span className="text-violet-400 font-bold">→</span> Hoặc đơn giản là bạn có một ý tưởng và muốn thử.</p>
          </div>
          <p className="text-lg md:text-xl text-[#C8D0E0] mb-4 leading-relaxed">KanoteCode không hứa rằng mọi thứ sẽ dễ dàng.</p>
          <p className="text-lg md:text-xl text-[#C8D0E0] mb-4 leading-relaxed">Nó chỉ muốn giúp bạn bắt đầu nhanh hơn.</p>
          <p className="text-lg md:text-xl text-[#C8D0E0] mb-6 leading-relaxed">Mở điện thoại. Mở project. Nói với agent điều bạn muốn làm. Xem nó thay đổi code. Duyệt những gì mình thích. Sửa những gì chưa đúng. Rồi tiếp tục.</p>
          <p className="text-xl md:text-2xl font-bold text-white">Không cần đợi đến khi có một chiếc PC trước khi bắt đầu một ý tưởng.</p>
        </div>
      ),
    },
    {
      content: (
        <div className="max-w-2xl text-center">
<p className="text-sm font-bold tracking-widest uppercase text-violet-400 mb-4">KanoteCode</p>
           <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Biến ý tưởng thành code.</h2>
           <p className="text-2xl md:text-3xl gradient-text font-bold mb-8">Mọi lúc, mọi nơi.</p>
           <p className="text-lg md:text-xl text-[#C8D0E0] mb-4">Nó vẫn còn đang hoàn thiện.</p>
           <p className="text-lg md:text-xl text-[#C8D0E0] mb-4">Nhưng có lẽ, đó mới là phần thú vị nhất.</p>
           <p className="text-lg md:text-xl text-[#C8D0E0] mb-6 leading-relaxed">Nếu bạn thấy nó còn thiếu điều gì, hãy nói với chúng tôi.</p>
           <p className="text-lg text-violet-400">Vì KanoteCode không chỉ được xây dựng bằng code.</p>
           <p className="text-lg text-violet-400">Nó được xây dựng bằng những ý tưởng mà mọi người mang đến.</p>
        </div>
      ),
    },
    {
      content: (
        <div className="max-w-2xl text-center">
          <p className="text-sm font-bold tracking-widest uppercase text-violet-400 mb-4">Lời kết</p>
          <p className="text-3xl md:text-4xl font-extrabold text-white mb-8 leading-tight">
            "Một ý tưởng lúc nửa đêm cũng xứng đáng<br />có cơ hội trở thành một project."
          </p>
          <Button size="lg" className="px-10 py-4 text-xl">Thử KanoteCode ngay</Button>
        </div>
      ),
    },
  ];

  const imageOverlays = [
    'rgba(8,11,18,0.82)',
    'rgba(8,11,18,0.78)',
    'rgba(8,11,18,0.80)',
    'rgba(8,11,18,0.76)',
    'rgba(8,11,18,0.78)',
    'rgba(8,11,18,0.74)',
    'rgba(8,11,18,0.70)',
  ];

  React.useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="story" className="relative overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-bold tracking-widest uppercase text-violet-300 mb-3">Câu chuyện</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Câu chuyện của KanoteCode</h2>
          <p className="text-[#C8D0E0]">7 trang ngắn — bấm nút hoặc vuốt để lật.</p>
        </motion.div>

        <div
          className="relative w-full aspect-auto md:aspect-[16/9] min-h-[550px] md:min-h-[500px] rounded-3xl overflow-hidden cursor-pointer"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onClick={() => setCurrent((prev) => (prev + 1) % total)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                backgroundImage: `url(${images[current]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0" style={{ background: imageOverlays[current] }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B12] via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#080B12]/80 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>

            <AnimatePresence mode="wait">
            <motion.div
              key={`text-${current}`}
              className="absolute inset-0 flex items-center justify-center px-8 md:px-16 overflow-y-auto md:overflow-y-visible"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {pages[current].content}
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-violet-300 tracking-wider">{titles[current]}</span>
              <div className="flex gap-2">
                {Array.from({ length: total }).map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current ? 'bg-violet-400 w-8' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); setCurrent(Math.max(0, current - 1)); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setCurrent(Math.min(total - 1, current + 1)); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="fixed right-4 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-2 z-10">
          <div className="w-1 h-40 bg-[#162B55] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-b from-violet-500 to-blue-500 rounded-full"
              animate={{ height: `${((current + 1) / total) * 100}%` }}
              transition={{ duration: 0.5 }}
              style={{ width: '4px' }}
            />
          </div>
          <span className="text-[10px] text-[#A8B0C2] writing-mode-vertical text-center" style={{ writingMode: 'vertical-rl' }}>
            {titles[current].split(' — ')[1]}
          </span>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { icon: Cpu, title: "💬 Chat agent đa nhà", desc: "OpenAI, Gemini, Anthropic, OpenRouter, Groq, Mistral, DeepSeek, GitHub Models… gắn nhiều key, tự fallback khi hết quota." },
    { icon: Wrench, title: "🛠️ 12 tools sửa code", desc: "Đọc, liệt kê, tạo, sửa, xóa, đổi tên, di chuyển file, xem tổng quan project, search web — AI tự gọi tool khi cần." },
    { icon: GitCompare, title: "🔍 Duyệt Diff", desc: "Mọi sửa đổi phải qua màn duyệt Trước/Sau: xem highlight, chấp nhận từng file hoặc tất cả, từ chối kèm lý do." },
    { icon: FolderOpen, title: "📁 Explorer + Editor", desc: "Duyệt cây thư mục, breadcrumb, tìm kiếm, xem code highlight theo ngôn ngữ, sửa + undo + lưu ngay trên máy." },
    { icon: MonitorPlay, title: "🌐 Preview web thật", desc: "Server localhost trong app + WebView: mở index.html là web chạy sống, JS/CSS đầy đủ." },
    { icon: Terminal, title: "▶ Console JS", desc: "Chạy thử file .js ngay trên máy, xem console.log, tự gom import, chặn lặp vô hạn." },
    { icon: Sparkles, title: "🧠 AI Skills", desc: "Import bộ kỹ năng (thư mục/ZIP/text), gắn theo project, app tự chọn skill hợp ngữ cảnh để AI khôn hơn." },
    { icon: Shield, title: "🔐 Key nằm trên máy", desc: "API key mã hóa bằng Android Keystore, không qua server trung gian, không log, không backup lên cloud." },
  ];

  return (
    <section id="features" className="py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-bold tracking-widest uppercase text-violet-300 mb-3">Sản phẩm</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Tính năng</h2>
          <p className="text-[#A8B0C2] mb-10">Những gì app làm được ngay hôm nay.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card>
                  <div className="text-3xl mb-3">{f.icon && <f.icon className="w-8 h-8 text-violet-400" />}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-[#A8B0C2] text-sm leading-relaxed">{f.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    { num: "1", title: "Mở project", desc: "Tạo mới, chọn thư mục có sẵn, từ template, hoặc thử ngay Demo Bakery." },
    { num: "2", title: "Gắn API key", desc: "Key Groq/Gemini free lấy 3 phút, test kết nối ngay trong app. Key nằm Keystore." },
    { num: "3", title: "Chat + duyệt Diff", desc: "Nhờ AI sửa, xem từng thay đổi Trước/Sau, chấp nhận cái ưng, từ chối cái dở." },
    { num: "4", title: "Preview", desc: "Bấm Preview là web chạy thật trên máy. ưng thì xuất bản, chưa ưng thì sửa tiếp." },
  ];

  return (
    <section id="how" className="py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-bold tracking-widest uppercase text-violet-300 mb-3">Cách dùng</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Cách hoạt động</h2>
          <p className="text-[#A8B0C2] mb-10">4 bước từ số 0 tới web chạy.</p>
          <div className="grid md:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 flex items-center justify-center font-extrabold text-white text-xl mx-auto mb-4">{s.num}</div>
                  <h3 className="font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-[#A8B0C2] text-sm">{s.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WhySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const items = [
    { icon: Smartphone, title: "📵 Không cần PC/VPS", desc: "Agent, editor, preview, console — tất cả chạy on-device. Ra quán cà phê mở máy là code." },
    { icon: Zap, title: "🆓 Xài model free", desc: "Groq, Gemini, OpenRouter :free, GitHub Models (cả Claude) — đủ dùng hằng ngày không tốn đồng nào." },
    { icon: Cpu, title: "🌏 Việt – Anh", desc: "Toàn bộ giao diện + tin nhắn hệ thống song ngữ, chuyển 1 chạm trong Cài đặt." },
  ];

  return (
    <section className="py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-bold tracking-widest uppercase text-violet-300 mb-3">Vì sao</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Tiện chỗ nào?</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card>
                  <div className="text-3xl mb-3">{item.icon && <item.icon className="w-8 h-8 text-violet-400" />}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-[#A8B0C2] text-sm">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Roadmap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const items = [
    { title: "💻 Terminal + Git", desc: "Status, diff, commit, push GitHub bằng PAT, clone từ URL.", tag: "Coming soon" },
    { title: "🔔 Background agent", desc: "AI chạy nền, xong việc ping thông báo: agent xong, 80% context, key lỗi.", tag: "Coming soon" },
    { title: "🔌 MCP + Skills P2", desc: "Gắn server MCP ngoài, auto-suggest skill, builder tạo skill bằng AI.", tag: "Coming soon" },
  ];

  return (
    <section id="roadmap" className="py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-bold tracking-widest uppercase text-violet-300 mb-3">Kế hoạch</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Sắp tới</h2>
          <p className="text-[#A8B0C2] mb-10">Đang làm, có là update.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="opacity-90">
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-[#A8B0C2] text-sm mb-3">{item.desc}</p>
                  <span className="inline-block text-xs font-bold text-violet-300 border border-violet-500/50 rounded-full px-3 py-1">{item.tag}</span>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Download() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="download" className="py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-bold tracking-widest uppercase text-violet-300 mb-3">Tải app</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Tải về</h2>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="glass rounded-2xl border border-[#162B55] p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 glow-violet-strong"
          >
            <div className="flex-1">
              <h3 className="text-2xl font-extrabold text-white mb-2">KanoteCode v1.0-poc</h3>
              <p className="text-[#A8B0C2]">Android 9+ · ~76MB · Bản debug, cài trực tiếp file APK (cho phép "cài app không rõ nguồn" 1 lần).</p>
            </div>
            <a href="https://github.com/DMV247/KanoteCode-Downloads/raw/refs/heads/main/Release/KanoteCode.apk" download className="inline-flex items-center justify-center rounded-full font-bold transition-all duration-200 cursor-pointer bg-gradient-to-r from-violet-500 to-blue-500 text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:-translate-y-0.5 px-8 py-4 text-lg whitespace-nowrap">⬇ Tải APK (76MB)</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#162B55] py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-[#A8B0C2] text-sm">
          <strong className="text-white">KanoteCode</strong> — phi thương mại, vì đam mê. Thực hiện bởi <strong className="text-violet-300">Kanote</strong>.
        </p>
      </div>
    </footer>
  );
}
