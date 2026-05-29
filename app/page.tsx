"use client";

import { useState } from "react";
import Link from "next/link";

// Icons as inline SVG components
function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z" />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z" />
    </svg>
  );
}

function LibraryIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM16 4.732V20h4V7.041l-4-2.309zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z" />
    </svg>
  );
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor">
      <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z" />
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor">
      <path d="M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-6.21 5.855l5.916 7.05a1.128 1.128 0 0 0 1.727 0l5.916-7.05a4.228 4.228 0 0 0 .945-3.577z" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
      <path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z" />
    </svg>
  );
}

function VolumeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor">
      <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z" />
      <path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z" />
    </svg>
  );
}

function ShuffleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor">
      <path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06l2.306-2.306a.75.75 0 0 0 0-1.06L13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z" />
      <path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.306 2.306a.75.75 0 0 1 0 1.06l-2.306 2.306a.75.75 0 1 1-1.06-1.06l1.017-1.018H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z" />
    </svg>
  );
}

function SkipBackIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor">
      <path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H2.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h.6z" />
    </svg>
  );
}

function SkipForwardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor">
      <path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-.6z" />
    </svg>
  );
}

function RepeatIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor">
      <path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z" />
    </svg>
  );
}

// Sample data
const recentlyPlayed = [
  { id: 1, title: "Chill Vibes", artist: "Various Artists", image: "https://picsum.photos/seed/chill/300/300", type: "Playlist" },
  { id: 2, title: "Daily Mix 1", artist: "Made for you", image: "https://picsum.photos/seed/mix1/300/300", type: "Playlist" },
  { id: 3, title: "Discover Weekly", artist: "Your weekly mixtape", image: "https://picsum.photos/seed/discover/300/300", type: "Playlist" },
  { id: 4, title: "Release Radar", artist: "New releases", image: "https://picsum.photos/seed/radar/300/300", type: "Playlist" },
  { id: 5, title: "Liked Songs", artist: "245 songs", image: "https://picsum.photos/seed/liked/300/300", type: "Playlist" },
  { id: 6, title: "Rock Classics", artist: "Various Artists", image: "https://picsum.photos/seed/rock/300/300", type: "Playlist" },
];

const topMixes = [
  { id: 1, title: "Hip Hop Mix", description: "Drake, Kendrick Lamar, J. Cole and more", image: "https://picsum.photos/seed/hiphop/300/300" },
  { id: 2, title: "Pop Mix", description: "Taylor Swift, The Weeknd, Dua Lipa", image: "https://picsum.photos/seed/pop/300/300" },
  { id: 3, title: "Indie Mix", description: "Arctic Monkeys, Tame Impala, The 1975", image: "https://picsum.photos/seed/indie/300/300" },
  { id: 4, title: "Electronic Mix", description: "Daft Punk, Calvin Harris, Avicii", image: "https://picsum.photos/seed/electronic/300/300" },
  { id: 5, title: "R&B Mix", description: "SZA, Frank Ocean, Daniel Caesar", image: "https://picsum.photos/seed/rnb/300/300" },
];

const featuredPlaylists = [
  { id: 1, title: "Today's Top Hits", description: "The hottest 50 tracks right now", image: "https://picsum.photos/seed/tophits/300/300" },
  { id: 2, title: "RapCaviar", description: "New music from Drake, Travis Scott", image: "https://picsum.photos/seed/rapcaviar/300/300" },
  { id: 3, title: "All Out 2010s", description: "The biggest songs of the 2010s", image: "https://picsum.photos/seed/2010s/300/300" },
  { id: 4, title: "Mood Booster", description: "Get happy with these feel-good tunes", image: "https://picsum.photos/seed/mood/300/300" },
  { id: 5, title: "Peaceful Piano", description: "Relax and indulge with peaceful piano", image: "https://picsum.photos/seed/piano/300/300" },
];

const sidebarPlaylists = [
  { id: 1, name: "Liked Songs", type: "Playlist", pinned: true },
  { id: 2, name: "Your Episodes", type: "Podcast", pinned: true },
  { id: 3, name: "Workout Mix", type: "Playlist", pinned: false },
  { id: 4, name: "Late Night Vibes", type: "Playlist", pinned: false },
  { id: 5, name: "Study Session", type: "Playlist", pinned: false },
  { id: 6, name: "Road Trip", type: "Playlist", pinned: false },
];

function MusicCard({ title, description, image }: { title: string; description: string; image: string }) {
  return (
    <div className="group relative bg-card hover:bg-secondary p-4 rounded-lg transition-all duration-300 cursor-pointer">
      <div className="relative mb-4">
        <img
          src={image}
          alt={title}
          className="w-full aspect-square object-cover rounded-md shadow-lg"
        />
        <button className="absolute bottom-2 right-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl hover:scale-105">
          <PlayIcon className="w-5 h-5 text-primary-foreground ml-1" />
        </button>
      </div>
      <h3 className="font-bold text-foreground truncate">{title}</h3>
      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{description}</p>
    </div>
  );
}

function QuickPlayCard({ title, image }: { title: string; image: string }) {
  return (
    <div className="group flex items-center bg-secondary/50 hover:bg-secondary rounded overflow-hidden cursor-pointer transition-all duration-200">
      <img src={image} alt={title} className="w-12 h-12 object-cover" />
      <span className="flex-1 px-4 font-semibold text-sm truncate">{title}</span>
      <button className="w-10 h-10 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity mr-2 shadow-lg">
        <PlayIcon className="w-4 h-4 text-primary-foreground ml-0.5" />
      </button>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="w-[280px] flex flex-col gap-2 p-2 shrink-0">
      {/* Navigation */}
      <div className="bg-card rounded-lg p-4">
        <nav className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-4 text-foreground font-bold hover:text-foreground transition">
            <HomeIcon className="w-6 h-6" />
            Home
          </Link>
          <Link href="/search" className="flex items-center gap-4 text-muted-foreground font-bold hover:text-foreground transition">
            <SearchIcon className="w-6 h-6" />
            Search
          </Link>
        </nav>
      </div>

      {/* Library */}
      <div className="bg-card rounded-lg flex-1 flex flex-col overflow-hidden">
        <div className="p-4 flex items-center justify-between">
          <button className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition">
            <LibraryIcon className="w-6 h-6" />
            <span className="font-bold">Your Library</span>
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full transition">
            <PlusIcon className="w-4 h-4" />
          </button>
        </div>

        <div className="px-2 pb-2 flex-1 overflow-y-auto">
          <div className="space-y-1">
            {sidebarPlaylists.map((playlist) => (
              <div
                key={playlist.id}
                className="flex items-center gap-3 p-2 rounded-md hover:bg-secondary cursor-pointer group"
              >
                <div className="w-12 h-12 bg-secondary rounded flex items-center justify-center shrink-0">
                  {playlist.type === "Playlist" ? (
                    <HeartIcon className="w-5 h-5 text-primary" />
                  ) : (
                    <span className="text-primary text-lg">P</span>
                  )}
                </div>
                <div className="min-w-0">
                  <p className="font-medium truncate text-foreground">{playlist.name}</p>
                  <p className="text-xs text-muted-foreground">{playlist.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

function NowPlaying() {
  const [progress, setProgress] = useState(35);
  const [volume, setVolume] = useState(70);
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <footer className="h-[90px] bg-card border-t border-border px-4 flex items-center justify-between">
      {/* Currently Playing */}
      <div className="flex items-center gap-4 w-[30%] min-w-[180px]">
        <img
          src="https://picsum.photos/seed/nowplaying/300/300"
          alt="Now playing"
          className="w-14 h-14 rounded"
        />
        <div className="min-w-0">
          <p className="font-medium text-sm truncate text-foreground hover:underline cursor-pointer">
            Blinding Lights
          </p>
          <p className="text-xs text-muted-foreground truncate hover:underline cursor-pointer">
            The Weeknd
          </p>
        </div>
        <button className="text-muted-foreground hover:text-foreground transition">
          <HeartIcon className="w-4 h-4" />
        </button>
      </div>

      {/* Player Controls */}
      <div className="flex flex-col items-center gap-2 w-[40%] max-w-[722px]">
        <div className="flex items-center gap-4">
          <button className="text-muted-foreground hover:text-foreground transition">
            <ShuffleIcon className="w-4 h-4" />
          </button>
          <button className="text-muted-foreground hover:text-foreground transition">
            <SkipBackIcon className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center hover:scale-105 transition"
          >
            {isPlaying ? (
              <svg className="w-4 h-4 text-background" viewBox="0 0 16 16" fill="currentColor">
                <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z" />
              </svg>
            ) : (
              <PlayIcon className="w-4 h-4 text-background ml-0.5" />
            )}
          </button>
          <button className="text-muted-foreground hover:text-foreground transition">
            <SkipForwardIcon className="w-4 h-4" />
          </button>
          <button className="text-muted-foreground hover:text-foreground transition">
            <RepeatIcon className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-2 w-full">
          <span className="text-xs text-muted-foreground w-10 text-right">1:24</span>
          <div className="flex-1 h-1 bg-secondary rounded-full group cursor-pointer">
            <div 
              className="h-full bg-foreground group-hover:bg-primary rounded-full relative transition-colors"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-foreground rounded-full opacity-0 group-hover:opacity-100 transition" />
            </div>
          </div>
          <span className="text-xs text-muted-foreground w-10">4:02</span>
        </div>
      </div>

      {/* Volume & Other */}
      <div className="flex items-center gap-3 w-[30%] justify-end">
        <button className="text-muted-foreground hover:text-foreground transition">
          <ClockIcon className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-2">
          <button className="text-muted-foreground hover:text-foreground transition">
            <VolumeIcon className="w-4 h-4" />
          </button>
          <div className="w-24 h-1 bg-secondary rounded-full group cursor-pointer">
            <div 
              className="h-full bg-foreground group-hover:bg-primary rounded-full relative transition-colors"
              style={{ width: `${volume}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-foreground rounded-full opacity-0 group-hover:opacity-100 transition" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function MainContent() {
  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <main className="flex-1 overflow-y-auto bg-gradient-to-b from-[#1a1a1a] to-card">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-foreground">{greeting()}</h1>
          <div className="flex items-center gap-2">
            <Link href="/login">
              <button className="px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition">
                Log in
              </button>
            </Link>
            <Link href="/register">
              <button className="px-8 py-3 bg-foreground text-background font-bold rounded-full hover:scale-105 transition">
                Sign up
              </button>
            </Link>
          </div>
        </div>

        {/* Quick Play Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8">
          {recentlyPlayed.map((item) => (
            <QuickPlayCard key={item.id} title={item.title} image={item.image} />
          ))}
        </div>

        {/* Made For You Section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-foreground hover:underline cursor-pointer">Made for you</h2>
            <button className="text-sm font-bold text-muted-foreground hover:underline">Show all</button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {topMixes.map((mix) => (
              <MusicCard key={mix.id} title={mix.title} description={mix.description} image={mix.image} />
            ))}
          </div>
        </section>

        {/* Featured Playlists Section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-foreground hover:underline cursor-pointer">Featured Playlists</h2>
            <button className="text-sm font-bold text-muted-foreground hover:underline">Show all</button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {featuredPlaylists.map((playlist) => (
              <MusicCard key={playlist.id} title={playlist.title} description={playlist.description} image={playlist.image} />
            ))}
          </div>
        </section>

        {/* Recently Played Section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-foreground hover:underline cursor-pointer">Recently Played</h2>
            <button className="text-sm font-bold text-muted-foreground hover:underline">Show all</button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {recentlyPlayed.map((item) => (
              <MusicCard key={item.id} title={item.title} description={item.artist} image={item.image} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default function HomePage() {
  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainContent />
      </div>
      <NowPlaying />
    </div>
  );
}
