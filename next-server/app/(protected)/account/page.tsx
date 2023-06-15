import { getUser } from "@/utils/supabase-server";
import SignOut from "./SignOut";

export const runtime = "edge";
export const metadata = {
  title: "Account Management | Executable",
  description: "Account Management page of Executable",
};

export default async function AccountPage() {
  const {
    data: { session: user },
  } = await getUser();

  return (
    <div>
      <h1 className="text-3xl font-bold font-secondary">Hello there!</h1>

      <h3 className="mt-2 font-secondary leading-normal text-lg text-gray-400">
        {user?.user.user_metadata.full_name}
      </h3>
      <div className="mt-4">
        <SignOut />
      </div>
    </div>
  );
}
