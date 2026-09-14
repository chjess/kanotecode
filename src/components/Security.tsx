"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Lock, Key, Server, FileX, EyeOff, CloudOff } from "lucide-react";

export function Security() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const items = [
    { icon: Lock, title: "Không lưu trữ", desc: "Không lưu bất kỳ dữ liệu nào trên server. Mọi thông tin project, code, cài đặt đều nằm trên máy bạn." },
    { icon: Key, title: "API key tại máy", desc: "API key được mã hóa bằng Android Keystore, không bao giờ rời khỏi thiết bị." },
    { icon: Server, title: "Không server trung gian", desc: "Request trực tiếp đến OpenAI, Groq, OpenRouter... Không qua server trung gian." },
    { icon: FileX, title: "Không log", desc: "Không ghi log, không theo dõi, không lưu lịch sử trò chuyện." },
    { icon: EyeOff, title: "Không lộ thông tin", desc: "Không thu thập thông tin cá nhân, không chia sẻ với bên thứ ba." },
    { icon: CloudOff, title: "Không cloud backup", desc: "Dữ liệu chỉ tồn tại trên điện thoại. Không backup lên đám mây." },
  ];

  return (
    <section id="security" className="py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-bold tracking-widest uppercase text-violet-300 mb-3">Bảo mật</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Cam kết bảo mật</h2>
          <p className="text-[#C8D0E0] mb-10">Kể cả lúc nửa đêm, mọi dữ liệu đều nằm trên chính thiết bị của bạn.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card>
                  <div className="text-3xl mb-3">
                    <item.icon className="w-8 h-8 text-violet-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-[#C8D0E0] text-sm leading-relaxed">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}