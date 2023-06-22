"use client";
import * as Form from "@radix-ui/react-form";
import { FormEvent, useState } from "react";
import { Button } from "@/components";
import supabaseClient from "@/utils/supabase-client";
import { useRouter } from "next/navigation";
import { removeDashes, separateWithDashes } from "@/utils/dash";
interface NewContactFormProps {
  closePrompt: () => void;
}

interface contactsFields {
  contactName: null | string;
  userId: null | string;
}

export default function NewContactForm({ closePrompt }: NewContactFormProps) {
  const [contactFields, setContactFields] = useState<contactsFields>({
    contactName: null,
    userId: null,
  });

  const supabase = supabaseClient();
  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    const { data: userSession, error: authError } =
      await supabase.auth.getSession();

    if (authError) {
      console.error(authError);
      return;
    }

    e.preventDefault();
    const UUIDRegex =
      /[a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}/i;

    if (
      !(
        contactFields.contactName &&
        contactFields.contactName.length >= 3 &&
        contactFields.contactName.length <= 30 &&
        contactFields.userId &&
        removeDashes(contactFields.userId).length === 32 &&
        UUIDRegex.test(removeDashes(contactFields.userId))
      )
    ) {
      console.error("[INPUT ERROR] values wont satisfy");
      return;
    }

    console.log(userSession.session?.user.id);

    const { error } = await supabase.rpc("create_new_friend_contact", {
      contact_name: contactFields.contactName,
      friend_id: contactFields.userId,
    });

    if (error) {
      console.error(error);
      return;
    }
    closePrompt();
    router.refresh();
  }

  return (
    <Form.Root onSubmit={handleSubmit}>
      <Form.Field name="contactName">
        <Form.Label className="block">Name of Friend</Form.Label>

        <Form.Control asChild>
          <input
            type="text"
            placeholder="Name"
            minLength={3}
            maxLength={30}
            value={contactFields.contactName ?? ""}
            onChange={(e) =>
              setContactFields((state) => {
                const newState = { ...state };
                newState.contactName = e.target.value;
                return newState;
              })
            }
            className="text-white bg-gray-700 rounded-md border-t border-gray-600 font-medium p-2 focus:outline-none"
          />
        </Form.Control>

        <Form.Message match="tooShort">
          Should be atleast 3 characters long.
        </Form.Message>
        <Form.Message match="valueMissing">
          Please enter the name of your contact.
        </Form.Message>
      </Form.Field>

      <Form.Field name="userId">
        <Form.Label className="block">Executable ID</Form.Label>
        <Form.Control asChild>
          <input
            value={contactFields.userId ?? ""}
            maxLength={36}
            minLength={36}
            pattern="[a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}"
            onChange={(e) =>
              setContactFields((state) => {
                const newState = { ...state };
                newState.userId = separateWithDashes(e.target.value);
                return newState;
              })
            }
            type="text"
            placeholder="32 character ID"
            className="text-white bg-gray-700 rounded-md border-t border-gray-600 font-medium p-2 focus:outline-none"
          />
        </Form.Control>

        <Form.Message match="valueMissing">
          Please enter the Executable ID of your contact.
        </Form.Message>
        <Form.Message match="patternMismatch">
          Doesn{"'"}t seem to be Executable ID. Check for any spaces.
        </Form.Message>
        <Form.Message match="tooShort">Too short to be an ID.</Form.Message>
      </Form.Field>
      <Form.Submit asChild>
        <Button variant="secondary">Create contact</Button>
      </Form.Submit>
    </Form.Root>
  );
}
