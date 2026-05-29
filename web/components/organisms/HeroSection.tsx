import Link from "next/link";
import { ArrowRight, Music, Users, Radio } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { Badge } from "@/components/atoms/Badge";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden px-4 py-24 sm:py-32 text-center">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-900/20 blur-3xl" />
        <div className="absolute left-1/4 top-1/2 h-[300px] w-[300px] rounded-full bg-violet-800/10 blur-2xl" />
      </div>

      {/* Floating icons */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[10%] top-[20%] animate-bounce [animation-duration:3s] opacity-20">
          <Music className="h-8 w-8 text-purple-400" />
        </div>
        <div className="absolute right-[12%] top-[30%] animate-bounce [animation-duration:4s] opacity-20">
          <Radio className="h-6 w-6 text-violet-400" />
        </div>
        <div className="absolute left-[15%] bottom-[25%] animate-bounce [animation-duration:3.5s] opacity-15">
          <Users className="h-7 w-7 text-purple-300" />
        </div>
      </div>

      <Badge className="mb-6">
        🎵 Music, Collaboration &amp; Mobility
      </Badge>

      <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
        Your music.{" "}
        <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
          Your crowd.
        </span>{" "}
        One room.
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-zinc-400 leading-relaxed">
        MusicRoom brings people together through shared playlists, live voting, and
        real-time collaboration — whether you&apos;re at a party, an event, or just
        hanging out with friends.
      </p>

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
        <Button variant="gradient" size="xl" asChild>
          <Link href="/register">
            Get started for free
            <ArrowRight className="ml-1 h-5 w-5" />
          </Link>
        </Button>
        <Button variant="outline" size="xl" asChild>
          <Link href="/#features">See how it works</Link>
        </Button>
      </div>

      {/* Social proof */}
      <p className="mt-12 text-sm text-zinc-500">
        Join thousands of music lovers already using MusicRoom
      </p>
    </section>
  );
}

export { HeroSection };
