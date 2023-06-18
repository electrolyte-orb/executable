import { Suspense } from "react";
import Contacts from "./Contacts";

export const metadata = {
  title: "Executable | Chats and Messages",
  description: "Page that shows all the chat messages",
};
export const revalidate = 0;

export default async function ChatPage() {
  return (
    <>
      <section className="mt-16 leading-none">
        <h2 className="tracking-tight font-medium text-[40px] text-gray-600">
          All of your
        </h2>
        <h1 className="tracking-tighter font-bold text-6xl text-white mt-2">
          Contacts
        </h1>
      </section>
      <Suspense
        fallback={
          <section className="grid grid-cols-1 lg:grid-cols-3 mt-8 gap-4">
            {(() => {
              const loaders = [];
              for (let index = 0; index < 9; index++) {
                loaders.push(
                  <div
                    className="h-16 bg-gray-800 rounded-lg animate-pulse"
                    style={{ animationDelay: `${index * 100}ms` }}
                  ></div>
                );
              }
              return loaders;
            })()}
          </section>
        }
      >
        {/* @ts-expect-error */}
        <Contacts />
      </Suspense>
    </>
  );
}
