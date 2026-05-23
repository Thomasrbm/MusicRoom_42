import Link from "next/link";
import { Music2 } from "lucide-react";
import { Separator } from "@/components/atoms/Separator";

function Footer() {
  return (
    <footer className="px-4 py-12 sm:px-6 lg:px-8 border-t border-zinc-800">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-600">
              <Music2 className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="text-base font-bold text-white">
              Music<span className="text-purple-400">Room</span>
            </span>
          </Link>

          <nav className="flex items-center gap-6 text-sm text-zinc-500">
            <Link href="/#features" className="hover:text-zinc-300 transition-colors">Features</Link>
            <Link href="/login" className="hover:text-zinc-300 transition-colors">Login</Link>
            <Link href="/register" className="hover:text-zinc-300 transition-colors">Register</Link>
          </nav>
        </div>

        <Separator className="my-6" />

        <p className="text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} MusicRoom — 42 School Project. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export { Footer };
