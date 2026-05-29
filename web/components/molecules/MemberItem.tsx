import * as React from "react";
import { Crown } from "lucide-react";
import { cn } from "@/lib/utils";

interface MemberItemProps {
  id: string;
  name: string;
  isHost: boolean;
  isOnline: boolean;
  className?: string;
}

function MemberItem({ name, isHost, isOnline, className }: MemberItemProps) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-md px-2 py-1.5 hover:bg-[#282828] transition-colors",
        !isOnline && "opacity-50",
        className
      )}
    >
      {/* Avatar */}
      <div className="relative shrink-0">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#333333] text-xs font-bold text-white">
          {initials}
        </div>
        <span
          className={cn(
            "absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#121212]",
            isOnline ? "bg-[#1db954]" : "bg-[#727272]"
          )}
        />
      </div>

      {/* Name */}
      <span className="flex-1 truncate text-sm font-medium text-white">{name}</span>

      {/* Host badge */}
      {isHost && (
        <Crown className="h-3.5 w-3.5 shrink-0 text-[#1db954]" />
      )}
    </div>
  );
}

export { MemberItem };
