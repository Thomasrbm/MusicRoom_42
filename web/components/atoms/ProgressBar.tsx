import * as React from "react";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
}

function ProgressBar({ value, max = 100, className }: ProgressBarProps) {
  const percent = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div
      className={cn(
        "relative h-1 w-full cursor-pointer overflow-hidden rounded-full bg-[#4d4d4d] group-hover:h-[5px] transition-all",
        className
      )}
    >
      <div
        className="absolute inset-y-0 left-0 rounded-full bg-white group-hover:bg-[#1db954] transition-colors"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}

export { ProgressBar };
