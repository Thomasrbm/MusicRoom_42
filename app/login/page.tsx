import Link from "next/link";
import { Music2 } from "lucide-react";
import { LoginForm } from "@/components/organisms/LoginForm";

export const metadata = {
  title: "Log in — MusicRoom",
  description: "Sign in to your MusicRoom account.",
};

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950">
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-[400px] w-[600px] rounded-full bg-purple-900/15 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-[300px] w-[400px] rounded-full bg-violet-900/10 blur-3xl" />
      </div>

      {/* Minimal header */}
      <header className="flex h-16 items-center px-6 border-b border-zinc-800/60">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-600 group-hover:bg-purple-500 transition-colors">
            <Music2 className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            Music<span className="text-purple-400">Room</span>
          </span>
        </Link>
      </header>

      {/* Centered form */}
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 shadow-2xl backdrop-blur-sm">
            <LoginForm />
          </div>
        </div>
      </main>
    </div>
  );
}
