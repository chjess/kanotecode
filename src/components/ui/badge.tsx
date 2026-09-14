import * as React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "outline";
}

export function Badge({ variant = "default", className = "", children, ...props }: BadgeProps) {
  const variants = {
    default: "bg-[#0A1630] border border-[#162B55] text-[#A8B0C2]",
    success: "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400",
    outline: "border border-violet-500/50 text-violet-300",
  };
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${variants[variant]} ${className}`} {...props}>
      {children}
    </span>
  );
}
