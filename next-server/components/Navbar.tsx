"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const supabase = createClientComponentClient();

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((ev, session) => {
      if (session?.user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return data.subscription.unsubscribe;
  }, [supabase.auth]);

  return (
    <nav className="lg:px-24 px-4 h-[72px] sticky top-0 z-20 flex justify-between items-center backdrop-blur-sm bg-gray-900 border-b border-gray-700">
      <Link
        href="/"
        className="font-secondary font-bold text-[15px] leading-tight tracking-tight text-white"
      >
        Executable
      </Link>
      <div className="lg:flex hidden gap-8 text-sm text-gray-400 font-medium">
        <Link
          href="/"
          className={pathname === "/" ? "text-purple-500 active-link" : ""}
        >
          Home
        </Link>
        <Link
          href="/"
          className={pathname === "/about" ? "text-purple-500 active-link" : ""}
        >
          About
        </Link>

        {isLoggedIn ? (
          <>
            <Link
              href="/account"
              className={
                pathname.startsWith("/account")
                  ? "text-purple-500 active-link"
                  : ""
              }
            >
              Account
            </Link>
            <Link
              href="/chat"
              className={
                pathname.startsWith("/chat")
                  ? "text-purple-500 active-link"
                  : ""
              }
            >
              Dashboard
            </Link>
          </>
        ) : (
          <Link
            href="/login"
            className={
              pathname === "/login" ? "text-purple-500 active-link" : ""
            }
          >
            Sign in
          </Link>
        )}
      </div>
    </nav>
  );
}
