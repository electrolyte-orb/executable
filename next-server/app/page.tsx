import { ArrowRightCircle, Rocket } from "iconoir-react";
import HeroImage from "@/public/executable_heroImage.svg";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="lg:px-24 px-4">
      <div className="lg:mt-32 mt-16 text-sm font-medium bg-gray-800 text-gray-400 h-8 rounded-full pl-4 pr-2 inline-flex items-center border-t-[1pt] border-gray-700 leading-3">
        We are using supabase now!
        <ArrowRightCircle className="h-6 w-6 ml-2 text-gray-600" />
      </div>

      <section className="mt-2 flex justify-between">
        <h1 className="font-secondary lg:text-[4rem] text-5xl leading-none font-bold tracking-tight">
          Hey, <br />
          Have some{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">
            Friends.
          </span>{" "}
          <br />
          And some talk
        </h1>
        <div>
          <Image
            className="absolute -translate-x-[252px] lg:block hidden pointer-events-none"
            src={HeroImage}
            width={252}
            height={224}
            loading="eager"
            alt="Hero image"
          />
        </div>
      </section>

      <section className="mt-12 flex flex-col gap-4 lg:flex-row lg:gap-8">
        <Link
          href="/login"
          className="h-14 rounded-xl flex items-center px-10 bg-blue-600 border-t-[1pt] border-blue-500 font-medium"
        >
          Get started
          <Rocket width={24} height={24} className="ml-1" />
        </Link>
        <Link
          className="h-14 rounded-xl flex items-center px-10 bg-gray-800 font-medium"
          target="_blank"
          href="https://github.com/electrolyte-orb/executable"
        >
          Github Repo
        </Link>
      </section>
      <p className="text-sm text-gray-500 mt-4 font-medium">
        Project is proudly open-sourced.
      </p>
    </main>
  );
}
