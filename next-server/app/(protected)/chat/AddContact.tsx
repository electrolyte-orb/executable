"use client";
import * as Form from "@radix-ui/react-form";
import { Button } from "@/components";
import { FormEvent } from "react";

export default function AddContact() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // add supabase save logic
  }

  return (
    <Form.Root
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      className="lg:w-1/3"
      onSubmit={handleSubmit}
    >
      <Form.Field name="contactName">
        <Form.Label className="text-sm text-gray-400">
          Name of contact
        </Form.Label>
        <Form.Control asChild>
          <input
            className="mt-1 p-2 w-full block bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 border-t border-gray-700 rounded-md"
            type="text"
            minLength={3}
            maxLength={40}
            placeholder="Evil Rabbit"
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Field name="contactId" className="mt-4">
        <Form.Label className="text-sm text-gray-400">
          Executable ID of contact
        </Form.Label>
        <Form.Control asChild>
          <input
            type="text"
            className="mt-1 p-2 w-full block bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 border-t border-gray-700 rounded-md"
            minLength={36}
            maxLength={36}
            placeholder="hellowor-ld00-0000-0000-000000000000"
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <Button variant="primary" className="mt-4">
          Save Now
        </Button>
      </Form.Submit>
      <p className="text-xs text-gray-500 mt-4">
        Feature does not work. In development.
      </p>
    </Form.Root>
  );
}
