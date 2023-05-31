"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { Button } from "@/components";

export default function InitDialog() {
  const supabase = createClientComponentClient();
  const [authError, setAuthError] = useState<Error | null>(null);

  async function handleSubmit() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
    if (error) {
      setAuthError(error);
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button className="group mt-10 w-full bg-white text-black">
          Login with provider
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black bg-opacity-75 data-[state=open]:animate-overlayShow fixed inset-0 backdrop-blur-sm" />

        <Dialog.Content className="max-h-screen overflow-auto transition-all data-[state=closed]:animate-contentHide data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 bg-black/50 border-2 border-neutral-800 rounded-lg w-[calc(100%-32px)] lg:w-1/3">
          <Dialog.Title className="font-bold text-xl text-white px-6 py-6">
            Login providers
          </Dialog.Title>
          <Dialog.Description className="px-6 leading-normal text-white text-sm">
            We do not own or share your Google™️ data. We do have access to your
            email, but we will use it for verification purposes only.
          </Dialog.Description>

          <div className="flex flex-col lg:flex-row gap-2 bg-black border-t-2 border-neutral-800 px-6 py-6 mt-6">
            <Button
              onClick={() => {
                handleSubmit();
              }}
              className="w-full bg-white text-black"
            >
              Login with Google
            </Button>
            <Dialog.Close asChild>
              <Button variant="secondary" className="w-full">
                Not now
              </Button>
            </Dialog.Close>
          </div>
          {authError && (
            <code className="text-xs leading-3 block text-neutral-500">
              {JSON.stringify(authError)}
            </code>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
