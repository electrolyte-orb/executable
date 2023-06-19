import supabaseClient from "@/utils/supabase-server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ProfileCircle, ArrowRight } from "iconoir-react";

export default async function Contacts() {
  const supabase = supabaseClient();

  const { error, data } = await supabase
    .from("GetContactsWithProfiles")
    .select();

  if (error) {
    console.error("[error] ", error);
    return redirect("/");
  }

  return (
    <>
      <section className="mt-4">
        <div className="font-bold text-gray-500 uppercase tracking-wide text-center">
          TOTAL{" "}
          {data.length <= 1
            ? `${data.length} CONTACT`
            : `${data.length} CONTACTS`}
        </div>
        
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-3 mt-8 gap-4">
        {data.map((contact, index) => (
          <Link
            className="p-4 relative flex border-t-[1pt] border-t-transparent ring-1 ring-gray-800 hover:ring-opacity-0 rounded-2xl items-center transition duration-200 group hover:-translate-y-1 hover:shadow-[0px_8px_15px_rgba(0,0,0,.5)] hover:bg-gray-800 hover:border-t-gray-700"
            key={index}
            href={`chat/${contact.friend}`}
          >
            <div className="group-hover:border-gray-700 transition duration-200 w-14 h-14 border-[1pt] text-gray-500 grid place-items-center border-gray-800 rounded-lg">
              <ProfileCircle />
            </div>
            <div className="ml-4">
              <div className="font-secondary leading-normal font-medium">
                {contact.savedName}
              </div>
              <div className="text-gray-500">
                {contact.unseenMessages} Pending Messages
              </div>
            </div>
            <i className="absolute top-1/2 -translate-y-1/2 right-6 inline-grid place-items-center h-6 w-6 bg-gray-900 text-gray-600 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition duration-200">
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </i>
          </Link>
        ))}
      </section>
    </>
  );
}
