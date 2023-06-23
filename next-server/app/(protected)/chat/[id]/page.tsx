import supabaseClient, { getUser } from "@/utils/supabase-server";
import { redirect } from "next/navigation";
import RealtimeMessages from "./RealtimeMessages";
import Link from "next/link";
import { ArrowLeftCircle, LongArrowUpLeft } from "iconoir-react";

export const metadata = {
  title: "Chat with someone | Executable",
  description: "This is a private chat page.",
};

export const revalidate = 0;

export default async function ChatPage({ params }: { params: { id: string } }) {
  const friendId = params.id;
  const supabase = supabaseClient();
  const {
    data: { session },
    error: authError,
  } = await getUser();

  if (authError) {
    console.error("AUTH ERROR", authError);
    return redirect("/chat");
  }

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
    .eq("receiverId", friendId)
    .limit(50);

  if (messagesError) {
    console.error(messagesError);
    return redirect("/chat");
  }

  return (
    <div>
      <h1 className="text-sm flex items-center font-secondary font-medium w-full fixed bg-gray-900 border-b border-gray-700 px-4 py-1 top-[72px] left-0 z-10">
        <Link href="/chat" className="mr-2 text-blue-500 p-1">
          <ArrowLeftCircle strokeWidth={2.5} className="h-4 w-4" />
        </Link>
        {friendDetail.savedName}
      </h1>
      <div className="h-10"></div>
      <RealtimeMessages
        userId={session?.user.id ?? ""}
        params={params}
        serverMessages={messages}
      />
    </div>
  );
}
