import supabaseClient from "@/utils/supabase-server";
import Link from "next/link";
import { redirect } from "next/navigation";

export async function Contacts() {
  const supabase = supabaseClient();
  const { error, data: contacts } = await supabase
    .from("Contact")
    .select("contactId, savedName");
  if (error) return redirect("/");

  return contacts.map(({ contactId, savedName }, index) => (
    <Link key={index} href={`chat/${contactId}`}>
      {savedName}
    </Link>
  ));
}
