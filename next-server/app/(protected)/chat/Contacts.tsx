import supabaseClient from "@/utils/supabase-server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ProfileCircle, Plus, ArrowRight } from "iconoir-react";

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
      <section className="mt-4 relative">
        <div className="font-bold text-gray-500 uppercase tracking-wide text-center">
          TOTAL{" "}
          {data.length <= 1
            ? `${data.length} CONTACT`
            : `${data.length} CONTACTS`}
        </div>
        <button
          style={{ backgroundImage: 'url("/button_grain.png")' }}
          className="absolute right-0 text-[32px] font-bold text-black tracking-tight rounded-2xl top-[calc(-80px-16px)] flex items-center p-[20px]"
        >
          <div className="h-8 w-8 rounded-full grid place-items-center bg-black text-white">
            <Plus className="h-6 w-6" />
          </div>
          <div className="ml-[19px]">Add</div>
        </button>
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
              <ArrowRight className="h-4 w-4" />
            </i>
          </Link>
        ))}
      </section>
    </>
  );
}
