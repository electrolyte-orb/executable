import { Main } from "@/components";
import InitDialog from "./InitDialog";
import { getUser } from "@/utils/supabase-server";
import { redirect } from "next/navigation";

export const revalidate = 0;
export const runtime = "edge";

export default async function LoginPage() {
  let session = null;
  let error = null;

  try {
    const {
      data: { session: newSession },
      error: newError,
    } = await getUser();
    session = newSession;
    error = newError;
  } catch (e) {}

  if (session !== null && error === null) redirect("/account");

  return (
    <Main>
      <h2 className="text-4xl text-white tracking-tight font-medium">
        Login here
      </h2>
      <InitDialog />
    </Main>
  );
}
