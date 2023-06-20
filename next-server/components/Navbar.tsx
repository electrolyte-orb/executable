"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import supabaseClient from "@/utils/supabase-client";
import {
  AddUser,
  ChatLines,
  HomeSimpleDoor,
  ProfileCircle,
} from "iconoir-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const supabase = supabaseClient();

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

      <div className="flex gap-1 lg:hidden text-gray-500 p-[2px] bg-gray-800 border-t border-gray-700 rounded-full">
        <Link
          href="/"
          className={
            "p-2 rounded-full " +
            (pathname === "/" ? "bg-gray-700 text-white" : "")
          }
        >
          <HomeSimpleDoor className="h-4 w-4" strokeWidth={2} />
        </Link>

        {isLoggedIn ? (
          <>
            <Link
              href="/account"
              className={
                "p-2 rounded-full " +
                (pathname.startsWith("/account")
                  ? "bg-gray-700 text-white"
                  : "")
              }
            >
              <ProfileCircle className="h-4 w-4" strokeWidth={2} />
            </Link>
            <Link
              href="/chat"
              className={
                "p-2 rounded-full " +
                (pathname.startsWith("/chat") ? "bg-gray-700 text-white" : "")
              }
            >
              <ChatLines className="h-4 w-4" strokeWidth={2} />
            </Link>
          </>
        ) : (
          <Link
            href="/login"
            className={
              "p-2 rounded-full " +
              (pathname.startsWith("/login") ? "bg-gray-700 text-white" : "")
            }
          >
            <AddUser className="h-4 w-4" strokeWidth={2} />
          </Link>
        )}
      </div>

      <div className="lg:flex hidden gap-8 text-sm text-gray-400 font-medium">
        <Link
          href="/"
          className={pathname === "/" ? "text-purple-500 active-link" : ""}
        >
          Home
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
