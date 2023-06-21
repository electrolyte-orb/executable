"use client";
import * as Form from "@radix-ui/react-form";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { contactsFields } from "./AddContact";
import { Button } from "@/components";

interface NewContactFormProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  contactsFields: contactsFields;
  setContactsFields: Dispatch<SetStateAction<contactsFields>>;
}

export default function NewContactForm({
  handleSubmit,
  contactsFields,
  setContactsFields,
}: NewContactFormProps) {
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
            value={contactsFields.contactName ?? ""}
            onChange={(e) =>
              setContactsFields((state) => {
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
            value={contactsFields.userId ?? ""}
            maxLength={36}
            pattern="[a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}"
            onChange={(e) =>
              setContactsFields((state) => {
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
      </Form.Field>
      <Form.Submit asChild>
        <Button variant="secondary">Create contact</Button>
      </Form.Submit>
    </Form.Root>
  );
}

function separateWithDashes(text: string): string {
  let textWithoutDashes = text.split("-").join("");
  let dashedString = "";

  for (let i = 0; i < textWithoutDashes.length; i++) {
    const char = textWithoutDashes[i];
    // Add a dash after
    //        8th        12th        16th        20th character.
    if (i === 8 || i === 12 || i === 16 || i === 20) dashedString += "-";
    dashedString += char;
  }

  return dashedString;
}
