"use client";
import { Button } from "@/components";
import * as Dialog from "@radix-ui/react-dialog";
import { Plus, Cancel, ArrowLeft } from "iconoir-react";
import { FormEvent, useState } from "react";
import supabaseClient from "@/utils/supabase-client";
import NewContactForm from "./NewContactForm";

export interface contactsFields {
  contactName: null | string;
  userId: null | string;
}

export default function AddContact() {
  const supabase = supabaseClient();
  const PROMPT_NOT_INITIATED = 0;
  const ADD_NEW_FRIEND = 1;
  const ADD_EXISTING_FRIEND = 2;

  const [contactPrompt, setContactPrompt] = useState(PROMPT_NOT_INITIATED);
  const [contactsFields, setContactFields] = useState<contactsFields>({
    contactName: null,
    userId: null,
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Form Submitted...");
  }

  return (
    <Dialog.Root
      onOpenChange={(open) => !open && setContactPrompt(PROMPT_NOT_INITIATED)}
    >
      <Dialog.Trigger asChild>
        <button
          style={{
            backgroundImage:
              'url("/button_grain_x2.webp"), linear-gradient(white, white)',
            backgroundSize: "cover",
          }}
          className="fixed z-20 lg:absolute right-2 lg:right-0 bottom-2 lg:bottom-0 scale-75 lg:scale-100 hover:ring-4 hover:ring-white/20 text-[32px] font-bold text-black tracking-tight rounded-2xl flex items-center p-[20px]"
        >
          <div className="h-8 w-8 rounded-full grid place-items-center bg-black text-white">
            <Plus className="h-6 w-6" />
          </div>
          <div className="ml-[19px]">Add</div>
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm data-[state=open]:animate-overlayShow z-40" />
        <Dialog.Content className="h-[90svh] lg:h-[80vh] max-w-full w-[90vw] lg:w-1/2 p-8 bg-gray-800 border-t border-gray-600 rounded-3xl fixed z-40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 data-[state=open]:animate-contentShow data-[state=closed]:animate-contentHide">
          <Dialog.Close className="absolute right-4 top-4">
            <Cancel />
          </Dialog.Close>

          <Dialog.Title className="text-4xl font-bold text-white tracking-tight">
            Add new contact
          </Dialog.Title>
          <div className="mt-8">
            {contactPrompt === PROMPT_NOT_INITIATED && (
              <>
                <Button
                  variant="secondary"
                  onClick={() => setContactPrompt(ADD_NEW_FRIEND)}
                >
                  Add New Friend
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => setContactPrompt(ADD_EXISTING_FRIEND)}
                >
                  Add Existing Friend
                </Button>
              </>
            )}
            {contactPrompt === ADD_NEW_FRIEND && (
              <>
                <Button
                  variant="secondary"
                  className="flex"
                  onClick={() => setContactPrompt(PROMPT_NOT_INITIATED)}
                >
                  <ArrowLeft />
                  Go Back
                </Button>
                <h1>Add New Friend</h1>
                <NewContactForm
                  handleSubmit={handleSubmit}
                  contactsFields={contactsFields}
                  setContactsFields={setContactFields}
                />
              </>
            )}
            {contactPrompt === ADD_EXISTING_FRIEND && (
              <>
                <Button
                  variant="secondary"
                  className="flex"
                  onClick={() => setContactPrompt(PROMPT_NOT_INITIATED)}
                >
                  <ArrowLeft />
                  Go Back
                </Button>
                <br />
                Feature NOT IMPLEMENTED YET!
              </>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
