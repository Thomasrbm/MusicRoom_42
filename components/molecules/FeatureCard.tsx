import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/atoms/Badge";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
  className?: string;
}

function FeatureCard({ icon, title, description, badge, className }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col gap-4 rounded-2xl border border-[#282828] bg-[#181818] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#1db954]/50 hover:bg-[#282828] hover:shadow-lg hover:shadow-[#1db954]/10",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1db954]/10 text-[#1db954] group-hover:bg-[#1db954]/20 transition-colors">
          {icon}
        </div>
        {badge && <Badge>{badge}</Badge>}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-zinc-100">{title}</h3>
        <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export { FeatureCard };
