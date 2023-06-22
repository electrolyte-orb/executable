"use client";

import { useState } from "react";

export interface Message {
  createdAt: string | null;
  id: string;
  isNotReadable: boolean | null;
  message: string;
  receiverId: string;
  senderId: string;
}

interface RealtimeMessagesProps {
  serverMessages?: Message[];
}

export default function RealtimeMessages({
  serverMessages,
}: RealtimeMessagesProps) {
  const [messages, setMessages] = useState(serverMessages);

  return (
    <div>
      all the messages
      <section>
        {messages
          ? messages.map((m, index) => (
              <div key={index}>
                {m.message} {m.createdAt}
              </div>
            ))
          : "No messages..."}
      </section>
    </div>
  );
}
