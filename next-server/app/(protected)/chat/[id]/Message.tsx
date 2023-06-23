"use client";
import { Message } from "./RealtimeMessages";

export function Message({
  message,
  isSender,
}: {
  message: Message;
  isSender: boolean;
}) {
  const date = new Date(message.createdAt as string);

  return (
    <div
      className={
        "inline-flex max-w-fit flex-col p-2 rounded-lg relative " +
        (isSender ? "bg-blue-600 self-end" : "bg-gray-800 ring-1 ring-gray-700")
      }
    >
      <div>{message.message}</div>
      <span
        className={
          "text-xs text-gray-500 absolute bottom-0 " +
          (isSender ? "right-full mr-1" : "left-full ml-1")
        }
      >
        {date.getUTCHours()}:{date.getUTCMinutes()}
      </span>
    </div>
  );
}
