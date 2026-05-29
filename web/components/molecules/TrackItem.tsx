import * as React from "react";
import { Music2, ThumbsUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrackItemProps {
  id: string;
  title: string;
  artist: string;
  albumArt?: string;
  duration: string;
  requestedBy: string;
  votes: number;
  isPlaying?: boolean;
  className?: string;
}

function TrackItem({
  title,
  artist,
  albumArt,
  duration,
  requestedBy,
  votes,
  isPlaying,
  className,
}: TrackItemProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 hover:bg-[#282828] transition-colors group",
        className
      )}
    >
      {/* Album art */}
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded">
        {albumArt ? (
          <img src={albumArt} alt={title} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[#333333]">
            <Music2 className="h-4 w-4 text-[#727272]" />
          </div>
        )}
        {isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <span className="flex gap-0.5 items-end h-3">
              <span className="w-0.5 bg-[#1db954] rounded-full animate-[musicbar_0.8s_ease-in-out_infinite]" style={{ height: "60%" }} />
              <span className="w-0.5 bg-[#1db954] rounded-full animate-[musicbar_0.8s_ease-in-out_0.2s_infinite]" style={{ height: "100%" }} />
              <span className="w-0.5 bg-[#1db954] rounded-full animate-[musicbar_0.8s_ease-in-out_0.4s_infinite]" style={{ height: "40%" }} />
            </span>
          </div>
        )}
      </div>

      {/* Title & artist */}
      <div className="flex-1 min-w-0">
        <p className={cn("text-sm font-medium truncate", isPlaying ? "text-[#1db954]" : "text-white")}>
          {title}
        </p>
        <p className="text-xs text-[#b3b3b3] truncate">{artist}</p>
      </div>

      {/* Requested by */}
      <span className="hidden sm:block text-xs text-[#b3b3b3] shrink-0">
        {requestedBy}
      </span>

      {/* Votes */}
      <div className="flex items-center gap-1 text-xs text-[#b3b3b3] shrink-0">
        <ThumbsUp className="h-3 w-3" />
        {votes}
      </div>

      {/* Duration */}
      <span className="w-10 text-right text-xs text-[#b3b3b3] shrink-0">{duration}</span>
    </div>
  );
}

export { TrackItem };
