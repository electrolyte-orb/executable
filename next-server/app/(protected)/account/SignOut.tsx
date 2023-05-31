"use client";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { Button } from "@/components";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter, redirect } from "next/navigation";

export default function SignOut() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSignOut() {
    setLoading(true);
    const supabase = createClientComponentClient();
    await supabase.auth.signOut();
    router.replace("/");
    router.refresh();
  }

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <Button
          size="small"
          className={" " + (loading && "opacity-50")}
          variant="danger"
          disabled={loading}
        >
          {loading ? "Signing out..." : "Sign Out"}
        </Button>
      </AlertDialog.Trigger>

      <AlertDialog.Portal>
        <AlertDialog.Overlay className="inset-0 fixed backdrop-blur-sm bg-black/60 data-[state=open]:animate-overlayShow" />

        <AlertDialog.Content className="data-[state=open]:animate-contentShow data-[state=closed]:animate-contentHide fixed w-[calc(100%-32px)] bg-black/50 rounded-lg border border-neutral-700 overflow-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <AlertDialog.Title className="px-6 pt-5 text-white text-lg font-bold">
            Log out from this device?
          </AlertDialog.Title>
          <AlertDialog.Description className="px-6 py-4 text-sm leading-relaxed text-white">
            Signing out will revoke your access to your account on this device
            only. View Account Preferences for more info.
          </AlertDialog.Description>

          <div className="flex gap-2 p-4 border-t border-neutral-700 bg-black">
            <AlertDialog.Cancel asChild>
              <Button variant="secondary" className="w-full">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button
                variant="danger"
                className="w-full"
                onClick={handleSignOut}
              >
                Sign out
              </Button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
