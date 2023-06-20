import "server-only";
import { cookies } from "next/headers";
import { cache } from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import type { Database } from "@/types/database.types";

const supabaseClient = cache(() => {
  return createServerComponentClient<Database>({ cookies });
});

export const getUser = cache(async () => {
  return await supabaseClient().auth.getSession();
});

export default supabaseClient;
