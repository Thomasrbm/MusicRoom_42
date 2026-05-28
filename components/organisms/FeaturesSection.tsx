import { ThumbsUp, ListMusic, Gamepad2, Lock, Globe, Zap } from "lucide-react";
import { FeatureCard } from "@/components/molecules/FeatureCard";

const features = [
  {
    icon: <ThumbsUp className="h-6 w-6" />,
    title: "Music Track Vote",
    description:
      "Let the crowd decide! Anyone can suggest or vote for tracks. High-voted songs move up the queue and play sooner.",
    badge: "Live",
  },
  {
    icon: <ListMusic className="h-6 w-6" />,
    title: "Collaborative Playlist",
    description:
      "Build playlists together in real-time. Add, reorder, and curate tracks with friends — like a shared radio station.",
    badge: "Real-time",
  },
  {
    icon: <Gamepad2 className="h-6 w-6" />,
    title: "Music Control Delegation",
    description:
      "Hand off playback control to a trusted friend. Attach controls to specific devices per user account.",
    badge: "Pro",
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Private & Public Events",
    description:
      "Keep your event open to everyone or invite-only. Granular visibility controls for every room you create.",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Social Login",
    description:
      "Sign in with Google or Facebook. Link multiple social accounts to a single profile for seamless access.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Location-aware Access",
    description:
      "Restrict voting to people physically present at your event — powered by geo-fencing and time windows.",
  },
];

function FeaturesSection() {
  return (
    <section id="features" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-purple-400 mb-3">
            Features
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Everything you need for the perfect session
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-zinc-400">
            From intimate gatherings to large events, MusicRoom gives you the tools to create unforgettable musical experiences.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export { FeaturesSection };
