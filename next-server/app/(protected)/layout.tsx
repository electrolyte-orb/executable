import { Main } from "@/components";

export const runtime = "edge";
export const revalidate = 0;

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Main>{children}</Main>;
}
