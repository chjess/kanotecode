"use client";

import * as React from "react";

interface TabsProps {
  tabs: { id: string; label: string; content: React.ReactNode }[];
  defaultTab?: string;
}

export function Tabs({ tabs, defaultTab }: TabsProps) {
  const [active, setActive] = React.useState(defaultTab || tabs[0]?.id);
  return (
    <div>
      <div className="flex gap-2 mb-4 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
              active === tab.id
                ? "bg-gradient-to-r from-violet-500 to-blue-500 border-transparent text-white shadow-lg shadow-violet-500/20"
                : "border-[#162B55] bg-[#0A1630] text-[#A8B0C2] hover:border-violet-400 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="rounded-2xl border border-[#162B55] bg-[#0A1630] p-6">
        {tabs.find((t) => t.id === active)?.content}
      </div>
    </div>
  );
}
