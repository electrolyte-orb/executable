"use client";

import { Database } from "@/types/database.types";
import supabaseClient from "@/utils/supabase-client";
import { useEffect, useState } from "react";
import { Message } from "./Message";

export type Message = Database["public"]["Tables"]["Message"]["Row"];

interface RealtimeMessagesProps {
  serverMessages: Message[];
  params: { id: string };
  userId: string;
}

export default function RealtimeMessages({
  serverMessages,
  params,
  userId,
}: RealtimeMessagesProps) {
  const [messages, setMessages] = useState(serverMessages);
  const supabase = supabaseClient();

  useEffect(() => {
    const messagesChannel = supabase
      .channel(params.id)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "Message",
          filter: `receiverId=eq.${params.id}`,
        },
        (payload) => {
          setMessages((oldMessages) => [
            ...oldMessages,
            payload.new as Message,
          ]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(messagesChannel);
    };
  }, [params.id, supabase]);

  return (
    <div>
      <section className="flex flex-col gap-2">
        {messages
          ? messages.map((m, index) => (
              <Message
                isSender={userId === m.senderId}
                message={m}
                key={index}
              />
            ))
          : "No messages..."}
      </section>
      <div className="h-16"></div>
      <SendMessage />
    </div>
  );
}

function SendMessage() {
  return (
    <div className="fixed bottom-0 left-0 w-full px-4 py-2 bg-black flex">
      <input
        type="text"
        placeholder="ʕ·͡ᴥ·ʔ﻿ say something..."
        className="form-input bg-gray-900 w-full border-0 rounded-lg focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
