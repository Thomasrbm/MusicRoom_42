import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/atoms/Button";

function CtaSection() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900/60 to-violet-900/40 border border-purple-500/20 px-8 py-16 text-center shadow-2xl shadow-purple-900/20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(168,85,247,0.15)_0%,_transparent_70%)]" />
          </div>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to drop the beat together?
          </h2>
          <p className="mt-4 text-lg text-zinc-300">
            Create your first room in seconds. No credit card required.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button variant="gradient" size="xl" asChild>
              <Link href="/register">
                Start for free
                <ArrowRight className="ml-1 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link href="/login">I already have an account</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export { CtaSection };
