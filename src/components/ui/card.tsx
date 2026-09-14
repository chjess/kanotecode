import * as React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glow?: boolean;
}

export function Card({ hover = true, glow = false, className = "", children, ...props }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-[#162B55] bg-[#0A1630] p-6 ${hover ? "hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 hover:-translate-y-1 transition-all duration-300" : ""} ${glow ? "glow-violet" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
