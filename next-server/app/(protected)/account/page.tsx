import { getUser } from "@/utils/supabase-server";
import SignOut from "./SignOut";

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
      <h1 className="text-3xl font-bold tracking-tight">Hello there,</h1>
      <h3>{user?.user.user_metadata.full_name}</h3>
      <div className="mt-4 rounded-md border border-red-600 flex flex-col overflow-auto">
        <div className="p-4">
          <h1 className="mb-2 font-medium text-lg">Proceed with caution</h1>
          <p className="leading-normal text-sm">
            These are irrecoverable changes.
          </p>
        </div>
        <div className="p-4 bg-neutral-900 border-t border-neutral-700">
          <SignOut />
        </div>
      </div>
    </div>
  );
}
