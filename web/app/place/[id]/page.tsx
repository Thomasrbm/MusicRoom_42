"use client";

import * as React from "react";
import { use } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms/Button";
import { IconButton } from "@/components/atoms/IconButton";
import { InviteFriendsModal } from "@/components/organisms/InviteFriendsModal";
import { Input } from "@/components/atoms/Input";
import { TrackItem } from "@/components/molecules/TrackItem";
import { MemberItem } from "@/components/molecules/MemberItem";
import { ProgressBar } from "@/components/atoms/ProgressBar";
import {
  ChevronLeft,
  Plus,
  Search,
  Share2,
  Settings,
  Users,
  Music,
  ListMusic,
  ThumbsUp,
} from "lucide-react";

// Mock data
const placeData = {
  id: "1",
  name: "Late Night Vibes",
  description: "Chill beats and good vibes for late night sessions",
  memberCount: 12,
  isLive: true,
  host: { id: "u1", name: "Alex", avatar: undefined },
};

const currentTrack = {
  id: "t1",
  title: "Blinding Lights",
  artist: "The Weeknd",
  albumArt: undefined,
  duration: "3:20",
  requestedBy: "Sarah",
  votes: 8,
};

const queuedTracks = [
  { id: "t2", title: "Levitating", artist: "Dua Lipa", duration: "3:23", requestedBy: "Mike", votes: 6 },
  { id: "t3", title: "Save Your Tears", artist: "The Weeknd", duration: "3:35", requestedBy: "Alex", votes: 5 },
  { id: "t4", title: "Peaches", artist: "Justin Bieber", duration: "3:18", requestedBy: "Emma", votes: 4 },
  { id: "t5", title: "Good 4 U", artist: "Olivia Rodrigo", duration: "2:58", requestedBy: "James", votes: 3 },
  { id: "t6", title: "Stay", artist: "The Kid LAROI", duration: "2:21", requestedBy: "Lisa", votes: 2 },
];

const members = [
  { id: "u1", name: "Alex", isHost: true, isOnline: true },
  { id: "u2", name: "Sarah", isHost: false, isOnline: true },
  { id: "u3", name: "Mike", isHost: false, isOnline: true },
  { id: "u4", name: "Emma", isHost: false, isOnline: true },
  { id: "u5", name: "James", isHost: false, isOnline: true },
  { id: "u6", name: "Lisa", isHost: false, isOnline: false },
  { id: "u7", name: "Chris", isHost: false, isOnline: true },
  { id: "u8", name: "Amy", isHost: false, isOnline: true },
];

export default function PlacePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [activeTab, setActiveTab] = React.useState<"queue" | "members">("queue");
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      {/* Mobile Header */}
      <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-4 bg-[#121212]/95 px-4 backdrop-blur-md lg:hidden">
        <Link
          href="/"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-[#000000]/70 text-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </Link>
      </header>

      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Main Content */}
        <div className="flex flex-1 flex-col">
          {/* Place Header with Gradient */}
          <div className="relative bg-gradient-to-b from-[#535353] to-[#121212] px-4 pb-6 pt-4 lg:px-8 lg:pt-8">
            {/* Desktop Back Button */}
            <Link
              href="/"
              className="mb-4 hidden h-8 w-8 items-center justify-center rounded-full bg-[#000000]/50 text-white lg:flex"
            >
              <ChevronLeft className="h-5 w-5" />
            </Link>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-6">
              {/* Place Cover */}
              <div className="mx-auto h-40 w-40 shrink-0 overflow-hidden rounded-md bg-[#282828] shadow-2xl sm:mx-0 sm:h-48 sm:w-48 lg:h-56 lg:w-56">
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#282828] to-[#121212]">
                  <Users className="h-16 w-16 text-[#727272] sm:h-20 sm:w-20" />
                </div>
              </div>

              {/* Place Info */}
              <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
                <div className="flex items-center gap-2">
                  {placeData.isLive && (
                    <span className="flex items-center gap-1.5 rounded-sm bg-[#1db954] px-2 py-0.5 text-xs font-bold text-black">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-black" />
                      LIVE
                    </span>
                  )}
                  <span className="text-xs font-medium text-white uppercase">Place</span>
                </div>
                <h1 className="text-2xl font-bold text-white sm:text-4xl lg:text-5xl text-balance">
                  {placeData.name}
                </h1>
                <p className="max-w-md text-sm text-[#b3b3b3]">
                  {placeData.description}
                </p>
                <div className="flex items-center gap-1 text-sm text-[#b3b3b3]">
                  <span className="font-medium text-white">{placeData.host.name}</span>
                  <span>-</span>
                  <span>{placeData.memberCount} listeners</span>
                </div>
              </div>
            </div>

            {/* Play Controls */}
            <div className="mt-6 flex items-center gap-4">
              <div className="ml-auto flex items-center gap-2">
              </div>
            </div>
          </div>

          {/* Now Playing */}
          <div className="border-b border-[#282828] px-4 py-4 lg:px-8">
            <div className="flex items-center gap-2 text-xs font-medium uppercase text-[#b3b3b3]">
              <Music className="h-4 w-4" />
              Now Playing
            </div>
            <div className="mt-3">
              <TrackItem {...currentTrack} isPlaying />
            </div>
            <div className="mt-3 flex items-center gap-2 px-3">
              <span className="text-xs text-[#b3b3b3]">1:23</span>
              <div className="group flex-1">
                <ProgressBar value={40} max={100} />
              </div>
              <span className="text-xs text-[#b3b3b3]">3:20</span>
            </div>
          </div>

          {/* Mobile Tabs */}
          <div className="flex border-b border-[#282828] lg:hidden">
            <button
              onClick={() => setActiveTab("queue")}
              className={cn(
                "flex flex-1 items-center justify-center gap-2 py-3 text-sm font-medium transition-colors",
                activeTab === "queue"
                  ? "border-b-2 border-[#1db954] text-white"
                  : "text-[#b3b3b3]"
              )}
            >
              <ListMusic className="h-4 w-4" />
              Queue
            </button>
            <button
              onClick={() => setActiveTab("members")}
              className={cn(
                "flex flex-1 items-center justify-center gap-2 py-3 text-sm font-medium transition-colors",
                activeTab === "members"
                  ? "border-b-2 border-[#1db954] text-white"
                  : "text-[#b3b3b3]"
              )}
            >
              <Users className="h-4 w-4" />
              Members ({members.length})
            </button>
          </div>

          {/* Queue Section */}
          <div className={cn("flex-1 px-4 py-4 lg:px-8", activeTab !== "queue" && "hidden lg:block")}>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-lg font-bold text-white">
                <ListMusic className="h-5 w-5 text-[#1db954]" />
                Up Next
              </h2>
              <Button size="sm" variant="ghost">
                <Plus className="h-4 w-4" />
                Add Track
              </Button>
            </div>

            {/* Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#727272]" />
              <Input
                type="text"
                placeholder="Search for a song to add..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-[#3e3e3e] bg-[#282828] pl-10 focus-visible:border-[#1db954] focus-visible:ring-[#1db954]"
              />
            </div>

            {/* Track List */}
            <div className="flex flex-col gap-1">
              {queuedTracks.map((track, index) => (
                <div key={track.id} className="group flex items-center">
                  <span className="w-8 text-center text-sm text-[#b3b3b3] group-hover:hidden">
                    {index + 1}
                  </span>
                  <IconButton size="sm" variant="ghost" className="hidden w-8 group-hover:flex">
                    <ThumbsUp className="h-4 w-4" />
                  </IconButton>
                  <div className="flex-1">
                    <TrackItem {...track} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Members Sidebar - Desktop */}
        <aside className={cn(
          "w-full border-l border-[#282828] bg-[#121212] lg:w-72 xl:w-80",
          activeTab !== "members" && "hidden lg:block"
        )}>
          <div className="sticky top-0 p-4">
            <h2 className="flex items-center gap-2 text-lg font-bold text-white">
              <Users className="h-5 w-5 text-[#1db954]" />
              Listeners
              <span className="ml-auto text-sm font-normal text-[#b3b3b3]">
                {members.filter(m => m.isOnline).length} online
              </span>
            </h2>

            <div className="mt-4 flex flex-col gap-1">
              {members
                .sort((a, b) => {
                  if (a.isHost) return -1;
                  if (b.isHost) return 1;
                  if (a.isOnline && !b.isOnline) return -1;
                  if (!a.isOnline && b.isOnline) return 1;
                  return 0;
                })
                .map((member) => (
                  <MemberItem key={member.id} {...member} />
                ))}
            </div>

            <InviteFriendsModal placeId={id}>
              <Button variant="outline" className="mt-4 w-full">
                <Plus className="h-4 w-4" />
                Invite Friends
              </Button>
            </InviteFriendsModal>
          </div>
        </aside>
      </div>
    </div>
  );
}
