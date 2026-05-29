"use client";

import Link from "next/link";
import { CreateRoomModal } from "@/components/organisms/CreateRoomModal";
import {
  Music2,
  Home,
  Search,
  Library,
  Plus,
  Radio,
  Users,
  Play,
  Headphones,
  Zap,
  Globe,
  Moon,
  Sun,
} from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { Badge } from "@/components/atoms/Badge";
import { cn } from "@/lib/utils";

// ─── Mock data ────────────────────────────────────────────────────────────────

const recentRooms = [
  { id: "1", name: "Late Night Vibes", memberCount: 12, color: "bg-gradient-to-br from-indigo-600 to-purple-700" },
  { id: "2", name: "Indie Discoveries", memberCount: 8, color: "bg-gradient-to-br from-rose-500 to-pink-700" },
  { id: "3", name: "Workout Bangers", memberCount: 24, color: "bg-gradient-to-br from-orange-500 to-red-600" },
  { id: "4", name: "Chill Sundays", memberCount: 5, color: "bg-gradient-to-br from-teal-500 to-cyan-700" },
];

const liveRooms = [
  {
    id: "1",
    name: "Late Night Vibes",
    description: "Chill beats and good vibes for late night sessions",
    memberCount: 12,
    currentSong: "Blinding Lights — The Weeknd",
    genre: "R&B / Soul",
    color: "from-indigo-600/40 to-purple-900/20",
    icon: Moon,
  },
  {
    id: "2",
    name: "House Party",
    description: "Deep house and techno all night long",
    memberCount: 47,
    currentSong: "Strobe — deadmau5",
    genre: "Electronic",
    color: "from-yellow-500/40 to-orange-900/20",
    icon: Zap,
  },
  {
    id: "3",
    name: "Global Beats",
    description: "World music from every corner of the planet",
    memberCount: 31,
    currentSong: "Bamboleo — Gipsy Kings",
    genre: "World",
    color: "from-emerald-600/40 to-teal-900/20",
    icon: Globe,
  },
  {
    id: "4",
    name: "Morning Coffee",
    description: "Mellow acoustic for slow mornings",
    memberCount: 9,
    currentSong: "Vienna — Billy Joel",
    genre: "Acoustic",
    color: "from-amber-500/40 to-yellow-900/20",
    icon: Sun,
  },
];
// ─── Sub-components ───────────────────────────────────────────────────────────

function SidebarLink({
  href,
  icon: Icon,
  label,
  active,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-semibold transition-colors",
        active ? "text-white" : "text-[#b3b3b3] hover:text-white"
      )}
    >
      <Icon className="h-5 w-5 shrink-0" />
      {label}
    </Link>
  );
}

function QuickCard({ room }: { room: (typeof recentRooms)[0] }) {
  return (
    <Link
      href={`/place/${room.id}`}
      className="group flex items-center gap-3 overflow-hidden rounded-md bg-[#ffffff14] hover:bg-[#ffffff26] transition-colors"
    >
      <div className={cn("h-12 w-12 shrink-0 flex items-center justify-center", room.color)}>
        <Music2 className="h-5 w-5 text-white/80" />
      </div>
      <span className="pr-3 text-sm font-bold text-white truncate">{room.name}</span>
      <button className="ml-auto mr-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1db954] text-black opacity-0 shadow-lg transition-all group-hover:opacity-100 translate-y-1 group-hover:translate-y-0">
        <Play className="h-4 w-4 ml-0.5" />
      </button>
    </Link>
  );
}

function RoomCard({ room }: { room: (typeof liveRooms)[0] }) {
  const Icon = room.icon;
  return (
    <Link
      href={`/place/${room.id}`}
      className="group relative flex flex-col gap-3 rounded-md bg-[#181818] p-4 hover:bg-[#282828] transition-colors"
    >
      {/* Cover art */}
      <div
        className={cn(
          "relative aspect-square w-full overflow-hidden rounded-md bg-gradient-to-br shadow-lg",
          room.color
        )}
      >
        <div className="flex h-full w-full items-center justify-center">
          <Icon className="h-12 w-12 text-white/60" />
        </div>
        <button className="absolute bottom-2 right-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#1db954] text-black opacity-0 shadow-xl transition-all group-hover:opacity-100 translate-y-1 group-hover:translate-y-0">
          <Play className="h-4 w-4 ml-0.5" />
        </button>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1 min-w-0">
        <p className="text-sm font-bold text-white truncate">{room.name}</p>
        <p className="text-xs text-[#b3b3b3] line-clamp-2 leading-relaxed">{room.description}</p>
        <div className="mt-1 flex items-center gap-2 flex-wrap">
          <Badge variant="secondary" className="text-xs">{room.genre}</Badge>
          <span className="flex items-center gap-1 text-xs text-[#b3b3b3]">
            <Headphones className="h-3 w-3" />
            {room.memberCount}
          </span>
        </div>
      </div>
    </Link>
  );
}

function Section({
  title,
  icon: Icon,
  href,
  children,
}: {
  title: string;
  icon: React.ElementType;
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-xl font-bold text-white">
          <Icon className="h-5 w-5 text-[#1db954]" />
          {title}
        </h2>
        {href && (
          <Link href={href} className="text-xs font-bold uppercase tracking-wider text-[#b3b3b3] hover:text-white transition-colors">
            See all
          </Link>
        )}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {children}
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DashboardPage() {
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">
      {/* ── Sidebar ── */}
      <aside className="hidden lg:flex w-60 xl:w-64 flex-col gap-2 p-2 shrink-0">
        {/* Logo */}
        <div className="px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1db954]">
              <Music2 className="h-4 w-4 text-black" />
            </div>
            <span className="text-lg font-bold tracking-tight">
              Music<span className="text-[#1db954]">Room</span>
            </span>
          </Link>
        </div>

        {/* Nav */}
        <nav className="rounded-lg bg-[#121212] p-2 flex flex-col">
          <SidebarLink href="/" icon={Home} label="Home" active />
          <SidebarLink href="/search" icon={Search} label="Search" />
        </nav>

        {/* Library */}
        <div className="flex-1 rounded-lg bg-[#121212] p-2 flex flex-col gap-1 overflow-hidden min-h-0">
          <div className="flex items-center justify-between px-3 py-2">
            <button className="flex items-center gap-2 text-[#b3b3b3] hover:text-white transition-colors">
              <Library className="h-5 w-5" />
              <span className="text-sm font-semibold">Your Library</span>
            </button>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 text-[#b3b3b3] hover:text-white hover:bg-[#282828] rounded-full"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex flex-col gap-0.5 overflow-y-auto">
            {recentRooms.map((room) => (
              <Link
                key={room.id}
                href={`/place/${room.id}`}
                className="flex items-center gap-3 rounded-md px-2 py-2 hover:bg-[#282828] transition-colors group"
              >
                <div className={cn("h-10 w-10 rounded shrink-0 flex items-center justify-center", room.color)}>
                  <Music2 className="h-4 w-4 text-white/80" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-white truncate">{room.name}</p>
                  <p className="text-xs text-[#b3b3b3] truncate">
                    Room · {room.memberCount} members
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-auto px-2 pb-1">
            <CreateRoomModal>
              <Button
                variant="outline"
                size="sm"
                className="w-full border-[#3e3e3e] text-[#b3b3b3] hover:text-white hover:bg-[#282828] rounded-full"
              >
                <Plus className="h-4 w-4" />
                Create a Room
              </Button>
            </CreateRoomModal>
          </div>
        </div>
      </aside>

      {/* ── Main ── */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Topbar */}
        <header className="flex items-center justify-between px-4 lg:px-6 py-3 shrink-0 bg-[#121212]/60 backdrop-blur-md">
          {/* Mobile logo */}
          <Link href="/" className="flex lg:hidden items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1db954]">
              <Music2 className="h-4 w-4 text-black" />
            </div>
            <span className="text-base font-bold">
              Music<span className="text-[#1db954]">Room</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-2">
            {/* placeholder for search or nav arrows */}
          </div>

          <div className="ml-auto flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-[#b3b3b3] hover:text-white font-semibold"
              asChild
            >
              <Link href="/register">Sign up</Link>
            </Button>
            <Button
              size="sm"
              className="rounded-full bg-white text-black font-bold hover:scale-105 hover:bg-white/90 transition-transform px-5"
              asChild
            >
              <Link href="/login">Log in</Link>
            </Button>
          </div>
        </header>

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto">
          {/* Gradient hero strip */}
          <div className="bg-gradient-to-b from-[#1e4d34] via-[#121212] to-[#121212] px-4 lg:px-6 pt-6 pb-8">
            {/* Greeting */}
            <h1 className="mb-6 text-2xl font-bold text-white lg:text-3xl">{greeting}</h1>

            {/* Quick access grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {recentRooms.map((room) => (
                <QuickCard key={room.id} room={room} />
              ))}
            </div>
          </div>

          {/* Sections */}
          <div className="px-4 lg:px-6 pb-8">
            <Section title="Live right now" icon={Radio} href="/rooms/live">
              {liveRooms.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </Section>

            {/* CTA banner */}
            <div className="rounded-xl bg-gradient-to-r from-[#1db954]/20 to-[#1db954]/5 border border-[#1db954]/20 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1db954]">
                  <Users className="h-6 w-6 text-black" />
                </div>
                <div>
                  <p className="font-bold text-white">Host your own room</p>
                  <p className="text-sm text-[#b3b3b3]">
                    Invite friends, build the playlist together, vote on tracks.
                  </p>
                </div>
              </div>
              <CreateRoomModal>
                <Button className="rounded-full bg-[#1db954] text-black font-bold hover:bg-[#1ed760] hover:scale-105 transition-all shrink-0 px-6">
                  Create a Room
                </Button>
              </CreateRoomModal>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
