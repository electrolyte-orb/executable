import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import type { Database } from "@/types/database.types";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const { pathname } = req.nextUrl;

  const supabase = createMiddlewareClient<Database>({ req, res });
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session === null && !pathname.startsWith("/auth")) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  } catch (err) {}

  return res;
}

export const config = {
  matcher: ["/account/:path*", "/chat/:path*", "/auth/:path*"],
};
