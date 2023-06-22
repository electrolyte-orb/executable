import supabaseClient from "@/utils/supabase-server";
import { redirect } from "next/navigation";
import RealtimeMessages from "./RealtimeMessages";

export const metadata = {
  title: "Chat with someone | Executable",
  description: "This is a private chat page.",
};

export const revalidate = 0;

export default async function ChatPage({ params }: { params: { id: string } }) {
  const friendId = params.id;
  const supabase = supabaseClient();

  const { data: friendDetail, error: friendDetailError } = await supabase
    .from("GetContactsWithProfiles")
    .select("savedName")
    .eq("friend", friendId)
    .single();

  if (friendDetailError) {
    console.error(friendDetailError);
    return redirect("/chat");
  }
  const { data: messages, error: messagesError } = await supabase
    .from("Message")
    .select()
    .eq("receiverId", friendId);

  if (messagesError) {
    console.error(messagesError);
    return redirect("/chat");
  }

  return (
    <div>
      <h1>{friendDetail.savedName}</h1>
      <RealtimeMessages serverMessages={messages} />
    </div>
  );
}
