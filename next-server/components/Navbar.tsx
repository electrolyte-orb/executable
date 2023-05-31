"use client";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

export default function Navbar() {
  const pathname = useSelectedLayoutSegments();
  let isProtected = false;

  if (pathname.includes("(protected)")) isProtected = true;
  return (
    <nav className="px-8 py-5 sticky top-0 z-20 flex items-center backdrop-blur-sm bg-black/20 border-b-2 border-neutral-800">
      <Link
        href="/"
        className="inline-flex items-center font-medium text-lg leading-tight tracking-tight text-white"
      >
        Executable
        <span
          className={
            "ml-2 text-xs leading-3 font-bold inline-grid place-items-center h-5 w-5 bg-neutral-900 rounded " +
            (isProtected && "text-red-500")
          }
        >
          7
        </span>
      </Link>
    </nav>
  );
}
