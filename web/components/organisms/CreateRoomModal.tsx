"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";
import { Plus, X, Lock, Globe, Loader2, Music2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms/Button";

interface CreateRoomModalProps {
  children: React.ReactNode;
}

async function createRoom(placeName: string, isPublic: boolean): Promise<string> {
  const res = await fetch("/api/musicroom/place/create", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ placeName, isPublic }),
  });

  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(body?.message ?? "Failed to create room");

  return body.placeId as string;
}

export function CreateRoomModal({ children }: CreateRoomModalProps) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [isPublic, setIsPublic] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState(false);

  function reset() {
    setName("");
    setIsPublic(true);
    setError(null);
    setSuccess(false);
    setLoading(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (name.trim().length < 3) {
      setError("Room name must be at least 3 characters.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const placeId = await createRoom(name.trim(), isPublic);
      setSuccess(true);
      setTimeout(() => {
        router.push(`/place/${placeId}`);
      }, 800);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred.");
      setLoading(false);
    }
  }

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(v) => {
        setOpen(v);
        if (!v) reset();
      }}
    >
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        {/* Panel */}
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#282828] p-6 shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] duration-200">
          {/* Close button */}
          <Dialog.Close className="absolute right-4 top-4 rounded-full p-1 text-[#b3b3b3] hover:bg-[#3e3e3e] hover:text-white transition-colors">
            <X className="h-4 w-4" />
          </Dialog.Close>

          {success ? (
            /* ── Success state ── */
            <div className="flex flex-col items-center gap-4 py-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1db954]">
                <Music2 className="h-7 w-7 text-black" />
              </div>
              <p className="text-lg font-bold text-white">Room created!</p>
              <p className="text-sm text-[#b3b3b3]">Your room is live and ready to join.</p>
            </div>
          ) : (
            /* ── Form state ── */
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <Dialog.Title className="text-xl font-bold text-white">
                Create a Room
              </Dialog.Title>

              {/* Room name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="room-name" className="text-sm font-semibold text-[#b3b3b3]">
                  Room name
                </label>
                <input
                  id="room-name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setError(null);
                  }}
                  placeholder="Late Night Vibes…"
                  maxLength={30}
                  autoFocus
                  className="rounded-md border border-[#3e3e3e] bg-[#3e3e3e] px-3 py-2.5 text-sm text-white placeholder-[#727272] outline-none transition-colors focus:border-[#1db954] focus:ring-1 focus:ring-[#1db954]"
                />
                <div className="flex items-center justify-between">
                  {error ? (
                    <p className="text-xs text-[#e91429]">{error}</p>
                  ) : (
                    <span />
                  )}
                  <span className="ml-auto text-xs text-[#727272]">
                    {name.length}/30
                  </span>
                </div>
              </div>

              {/* Visibility */}
              <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-[#b3b3b3]">Visibility</span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setIsPublic(true)}
                    className={cn(
                      "flex flex-col items-start gap-1.5 rounded-lg border p-3.5 text-left transition-all",
                      isPublic
                        ? "border-[#1db954] bg-[#1db954]/10"
                        : "border-[#3e3e3e] bg-[#3e3e3e] hover:border-[#727272]"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <Globe className={cn("h-4 w-4", isPublic ? "text-[#1db954]" : "text-[#b3b3b3]")} />
                      <span className={cn("text-sm font-bold", isPublic ? "text-white" : "text-[#b3b3b3]")}>
                        Public
                      </span>
                    </div>
                    <p className="text-xs text-[#727272] leading-tight">
                      Anyone can discover and join
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsPublic(false)}
                    className={cn(
                      "flex flex-col items-start gap-1.5 rounded-lg border p-3.5 text-left transition-all",
                      !isPublic
                        ? "border-[#1db954] bg-[#1db954]/10"
                        : "border-[#3e3e3e] bg-[#3e3e3e] hover:border-[#727272]"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <Lock className={cn("h-4 w-4", !isPublic ? "text-[#1db954]" : "text-[#b3b3b3]")} />
                      <span className={cn("text-sm font-bold", !isPublic ? "text-white" : "text-[#b3b3b3]")}>
                        Private
                      </span>
                    </div>
                    <p className="text-xs text-[#727272] leading-tight">
                      Invite only — you control access
                    </p>
                  </button>
                </div>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={loading || name.trim().length < 3}
                className="mt-1 w-full rounded-full bg-[#1db954] font-bold text-black hover:bg-[#1ed760] hover:scale-[1.02] transition-all disabled:opacity-50 disabled:scale-100"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Creating…
                  </>
                ) : (
                  <>
                    <Plus className="h-4 w-4" />
                    Create Room
                  </>
                )}
              </Button>
            </form>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
