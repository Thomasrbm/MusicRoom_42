"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { UserPlus, X, Loader2, UserCheck, UserMinus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms/Button";

interface InviteFriendsModalProps {
  placeId: string;
  children: React.ReactNode;
}

async function sendInvite(placeId: string, targetId: string, status: "invite" | "cancel") {
  const res = await fetch("/api/musicroom/place/invite", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ placeId, targetId, status }),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body?.message ?? "Request failed");
  }
}

export function InviteFriendsModal({ placeId, children }: InviteFriendsModalProps) {
  const [open, setOpen] = React.useState(false);
  const [targetId, setTargetId] = React.useState("");
  const [loading, setLoading] = React.useState<"invite" | "cancel" | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [lastAction, setLastAction] = React.useState<"invite" | "cancel" | null>(null);

  function reset() {
    setTargetId("");
    setError(null);
    setLastAction(null);
    setLoading(null);
  }

  async function handle(status: "invite" | "cancel") {
    if (!targetId.trim()) {
      setError("Please enter a user ID.");
      return;
    }
    setLoading(status);
    setError(null);
    try {
      await sendInvite(placeId, targetId.trim(), status);
      setLastAction(status);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred.");
    } finally {
      setLoading(null);
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={(v) => { setOpen(v); if (!v) reset(); }}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#282828] p-6 shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] duration-200">
          <Dialog.Close className="absolute right-4 top-4 rounded-full p-1 text-[#b3b3b3] hover:bg-[#3e3e3e] hover:text-white transition-colors">
            <X className="h-4 w-4" />
          </Dialog.Close>

          <div className="flex flex-col gap-5">
            <Dialog.Title className="text-xl font-bold text-white">
              Invite to room
            </Dialog.Title>

            {/* User ID input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="target-id" className="text-sm font-semibold text-[#b3b3b3]">
                User ID
              </label>
              <input
                id="target-id"
                type="text"
                value={targetId}
                onChange={(e) => { setTargetId(e.target.value); setError(null); setLastAction(null); }}
                placeholder="Paste a user UUID…"
                autoFocus
                className="rounded-md border border-[#3e3e3e] bg-[#3e3e3e] px-3 py-2.5 text-sm text-white placeholder-[#727272] outline-none transition-colors focus:border-[#1db954] focus:ring-1 focus:ring-[#1db954] font-mono"
              />
              {error && <p className="text-xs text-[#e91429]">{error}</p>}
              {lastAction && (
                <p className="flex items-center gap-1.5 text-xs text-[#1db954]">
                  {lastAction === "invite" ? (
                    <><UserCheck className="h-3.5 w-3.5" /> Invitation sent.</>
                  ) : (
                    <><UserMinus className="h-3.5 w-3.5" /> Invitation cancelled.</>
                  )}
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-3">
              <Button
                type="button"
                onClick={() => handle("invite")}
                disabled={!!loading || !targetId.trim()}
                className="rounded-full bg-[#1db954] font-bold text-black hover:bg-[#1ed760] disabled:opacity-50"
              >
                {loading === "invite" ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <UserPlus className="h-4 w-4" />
                )}
                Invite
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={() => handle("cancel")}
                disabled={!!loading || !targetId.trim()}
                className="rounded-full border-[#3e3e3e] text-[#b3b3b3] hover:text-white hover:bg-[#3e3e3e] disabled:opacity-50"
              >
                {loading === "cancel" ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <UserMinus className="h-4 w-4" />
                )}
                Cancel invite
              </Button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
