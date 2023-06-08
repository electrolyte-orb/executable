// styles and fonts
import "./globals.css";
import { Unbounded } from "next/font/google";
import localFont from "next/font/local";
// Providers
import IconoirProvider from "./iconoir-context";
// components
import { Navbar } from "@/components";
import { Suspense } from "react";

const secondaryFont = Unbounded({
  weight: "variable",
  subsets: ["latin"],
  variable: "--sec-font",
  fallback: ["system-ui"],
});

const myFont = localFont({
  src: [
    {
      path: "../node_modules/inter-ui/Inter (web latin)/Inter.var.woff2",
    },
    {
      path: "../node_modules/inter-ui/Inter (web latin)/Inter-italic.var.woff2",
      style: "italic",
    },
  ],
  variable: "--sans-font",
  fallback: ["system-ui"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={myFont.variable + " " + secondaryFont.variable}>
      <body className="bg-gray-900 text-white leading-tight">
        <Suspense fallback={null}>
          <Navbar />
        </Suspense>
        <IconoirProvider
          iconProps={{
            width: 24,
            height: 24,
            style: { display: "inline-block" },
          }}
        >
          {children}
        </IconoirProvider>
      </body>
    </html>
  );
}
